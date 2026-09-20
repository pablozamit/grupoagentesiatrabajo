import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js"
import { z } from "zod"
import { EncyclopediaIndex } from "./search.js"

const index = new EncyclopediaIndex(process.env.ENCICLOPEDIA_INDEX_URL, process.env.ENCICLOPEDIA_SITE_URL)
await index.ensureLoaded()

const server = new McpServer({ name: "enciclopedia-agentes-ia", version: "0.1.0" })
const asText = (value: unknown) => ({ content: [{ type: "text" as const, text: JSON.stringify(value, null, 2) }] })

server.tool("search_entries", "Busca entradas en título, etiquetas y contenido", { query: z.string().min(1), tag: z.string().optional(), limit: z.number().int().min(1).max(50).optional() }, async ({ query, tag, limit }) => asText(index.search(query, { tag, limit })))
server.tool("get_entry", "Devuelve una entrada completa por slug", { slug: z.string().min(1) }, async ({ slug }) => asText(index.get(slug) || { error: "Entrada no encontrada", suggestions: index.search(slug, { limit: 5 }) }))
server.tool("list_tags", "Lista etiquetas y número de entradas", {}, async () => asText(index.tags()))
server.tool("list_entries", "Lista entradas, con filtro opcional por etiqueta", { tag: z.string().optional(), offset: z.number().int().min(0).optional(), limit: z.number().int().min(1).max(100).optional() }, async ({ tag, offset, limit }) => asText(index.list({ tag, offset, limit })))
server.tool("refresh_index", "Recarga el índice público de Quartz", {}, async () => asText({ entries: await index.refresh(), refreshedAt: index.lastRefresh }))

await server.connect(new StdioServerTransport())
