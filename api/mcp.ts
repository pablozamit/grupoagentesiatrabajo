import { EncyclopediaIndex } from "../mcp/src/search.js"
import { optimizarConJev } from "../mcp/src/jev.js"

// Endpoint MCP (Streamable HTTP, modo sin estado) para Vercel.
// Habla el protocolo MCP real (initialize + tools/list + tools/call) sin
// dependencias nuevas: reutiliza la búsqueda y el re-rank con Jev del repo.
// La clave de Jev vive en la variable de entorno TYPESAFE_API_KEY (nunca en
// el código ni en el frontend).

const NOMBRE = "enciclopedia-agentes-ia"
const VERSION = "0.1.0"
const PROTOCOLO = "2025-06-18"

let indice: EncyclopediaIndex | null = null
async function indiceListo(): Promise<EncyclopediaIndex> {
  if (!indice) {
    indice = new EncyclopediaIndex(process.env.ENCICLOPEDIA_INDEX_URL, process.env.ENCICLOPEDIA_SITE_URL)
    await indice.ensureLoaded()
  }
  return indice
}

type Mensaje = { jsonrpc?: string, id?: string | number | null, method?: string, params?: any }
type Req = { method?: string, body?: any, headers?: Record<string, string | string[] | undefined> }
type Res = {
  setHeader: (nombre: string, valor: string) => void,
  status: (codigo: number) => Res,
  json: (cuerpo: unknown) => void,
  send: (cuerpo: string) => void,
}

const texto = (valor: unknown) => ({ content: [{ type: "text", text: JSON.stringify(valor, null, 2) }] })

function error(id: string | number | null | undefined, codigo: number, mensaje: string) {
  return { jsonrpc: "2.0", id: id ?? null, error: { code: codigo, message: mensaje } }
}

async function atender(mensaje: Mensaje): Promise<{ estado: number, cuerpo: unknown } | null> {
  const { id, method, params } = mensaje
  if (!method) return { estado: 400, cuerpo: error(id, -32600, "Petición inválida: falta method") }

  if (method.startsWith("notifications/")) return null // 202 sin cuerpo

  if (method === "initialize") {
    return {
      estado: 200,
      cuerpo: {
        jsonrpc: "2.0", id,
        result: {
          protocolVersion: PROTOCOLO,
          capabilities: { tools: { listChanged: false } },
          serverInfo: { name: NOMBRE, version: VERSION }
        }
      }
    }
  }

  if (method === "tools/list") {
    return {
      estado: 200,
      cuerpo: {
        jsonrpc: "2.0", id,
        result: {
          tools: [
            {
              name: "search_entries",
              description: "Busca entradas en título, etiquetas y contenido",
              inputSchema: {
                type: "object",
                properties: {
                  query: { type: "string", minLength: 1 },
                  tag: { type: "string" },
                  limit: { type: "integer", minimum: 1, maximum: 50 }
                },
                required: ["query"]
              }
            },
            {
              name: "buscar_optimizado",
              description: "Busca entradas y las reordena con Jev según relevancia real para la necesidad",
              inputSchema: {
                type: "object",
                properties: {
                  query: { type: "string", minLength: 1 },
                  limit: { type: "integer", minimum: 1, maximum: 20 }
                },
                required: ["query"]
              }
            }
          ]
        }
      }
    }
  }

  if (method === "tools/call") {
    const nombre = params?.name
    const args = params?.arguments ?? {}
    try {
      const idx = await indiceListo()
      if (nombre === "search_entries") {
        return { estado: 200, cuerpo: { jsonrpc: "2.0", id, result: texto(idx.search(String(args.query || ""), { tag: args.tag, limit: args.limit })) } }
      }
      if (nombre === "buscar_optimizado") {
        const consulta = String(args.query || "")
        const candidatos = idx.search(consulta, { limit: 20 })
        try {
          return { estado: 200, cuerpo: { jsonrpc: "2.0", id, result: texto(await optimizarConJev(consulta, candidatos, args.limit ?? 10)) } }
        } catch (fallo) {
          const detalle = fallo instanceof Error ? fallo.message : String(fallo)
          return { estado: 200, cuerpo: { jsonrpc: "2.0", id, result: texto({ resultados: candidatos.slice(0, args.limit ?? 10), jev: false, candidatos: candidatos.length, aviso: `Jev no disponible: ${detalle}` }) } }
        }
      }
      return { estado: 200, cuerpo: error(id, -32602, `Herramienta desconocida: ${nombre}`) }
    } catch (fallo) {
      const detalle = fallo instanceof Error ? fallo.message : String(fallo)
      return { estado: 500, cuerpo: error(id, -32603, `Error interno: ${detalle}`) }
    }
  }

  return { estado: 200, cuerpo: error(id, -32601, `Método no soportado: ${method}`) }
}

export default async function handler(req: Req, res: Res) {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Mcp-Session-Id, Accept")
  res.setHeader("Access-Control-Expose-Headers", "Mcp-Session-Id")

  if ((req.method || "GET").toUpperCase() === "OPTIONS") {
    res.status(204).send("")
    return
  }
  if ((req.method || "GET").toUpperCase() !== "POST") {
    res.status(405).json({ jsonrpc: "2.0", id: null, error: { code: -32000, message: "Solo POST (este endpoint es sin estado, sin streams SSE)" } })
    return
  }

  let cuerpo: any = req.body ?? {}
  if (typeof cuerpo === "string") {
    // Tolerante a BOM y a cuerpos sin parsear (proxies, CLIs, curl en Windows).
    // 65279 es el código del carácter BOM (U+FEFF).
    let limpio = cuerpo.trim()
    if (limpio.charCodeAt(0) === 65279) limpio = limpio.slice(1)
    try {
      cuerpo = limpio ? JSON.parse(limpio) : {}
    } catch {
      cuerpo = {}
    }
  }
  }
  if (Array.isArray(cuerpo)) {
    const respuestas = []
    for (const mensaje of cuerpo) {
      const r = await atender(mensaje as Mensaje)
      if (r) respuestas.push(r.cuerpo)
    }
    res.status(200).json(respuestas)
    return
  }
  const r = await atender(cuerpo as Mensaje)
  if (!r) {
    res.status(202).send("")
    return
  }
  res.status(r.estado).json(r.cuerpo)
}
