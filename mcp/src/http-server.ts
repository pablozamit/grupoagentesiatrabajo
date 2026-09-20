import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js"
import { z } from "zod"
import { EncyclopediaIndex } from "./search.js"
import { createServer } from "http"

const index = new EncyclopediaIndex(
  process.env.ENCICLOPEDIA_INDEX_URL,
  process.env.ENCICLOPEDIA_SITE_URL
)
await index.ensureLoaded()

const server = new McpServer({ name: "enciclopedia-agentes-ia", version: "0.1.0" })
const asText = (value: unknown) => ({ content: [{ type: "text" as const, text: JSON.stringify(value, null, 2) }] })

server.tool("search_entries", "Busca entradas en título, etiquetas y contenido", { query: z.string().min(1), tag: z.string().optional(), limit: z.number().int().min(1).max(50).optional() }, async ({ query, tag, limit }) => asText(index.search(query, { tag, limit })))
server.tool("get_entry", "Devuelve una entrada completa por slug", { slug: z.string().min(1) }, async ({ slug }) => asText(index.get(slug) || { error: "Entrada no encontrada", suggestions: index.search(slug, { limit: 5 }) }))
server.tool("list_tags", "Lista etiquetas y número de entradas", {}, async () => asText(index.tags()))
server.tool("list_entries", "Lista entradas, con filtro opcional por etiqueta", { tag: z.string().optional(), offset: z.number().int().min(0).optional(), limit: z.number().int().min(1).max(100).optional() }, async ({ tag, offset, limit }) => asText(index.list({ tag, offset, limit })))
server.tool("refresh_index", "Recarga el índice público de Quartz", {}, async () => asText({ entries: await index.refresh(), refreshedAt: index.lastRefresh }))

const transport = new StreamableHTTPServerTransport({
  sessionIdGenerator: () => crypto.randomUUID(),
  enableDnsRebindingProtection: false,
})

await server.connect(transport)

const httpServer = createServer(async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Mcp-Session-Id")
  
  if (req.method === "OPTIONS") {
    res.writeHead(204)
    res.end()
    return
  }

  await transport.handleRequest(req, res)
})

const PORT = process.env.PORT || 3001
httpServer.listen(PORT, () => {
  console.log(`MCP HTTP Server running on http://localhost:${PORT}/mcp`)
})