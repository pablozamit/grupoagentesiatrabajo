# Firecrawl

[Firecrawl](https://firecrawl.dev) es una **API de web scraping y extracción de datos** pensada para que los agentes de IA puedan leer páginas web de forma limpia y estructurada. Tiene un **servidor MCP** que se conecta directamente a agentes que soporten el protocolo. **Ahora tiene un plan gratuito disponible** — crawl, scrape y search básicos sin pagar.

## Qué hace

Convierte páginas web en markdown, HTML, JSON o datos estructurados limpios, sin tener que pelearte con HTML sucio, JavaScript dinámico, captchas o rate limits.

Herramientas principales:

- **`scrape`** — extrae el contenido de una URL
- **`crawl`** — recorre todas las páginas de un sitio
- **`map`** — descubre las URLs indexadas de un sitio
- **`search`** — búsqueda web con contenido extraído
- **`extract`** — extracción con LLM según un esquema JSON
- **`agent`** — agente autónomo de investigación web

## Instalación paso a paso en Hermes Agent

Hermes Agent soporta **MCP (Model Context Protocol)**, así que la forma más limpia es montar el servidor MCP de Firecrawl y conectarlo a la configuración de Hermes.

### 1. Obtener la API key

1. Entra en [firecrawl.dev](https://firecrawl.dev)
2. Crea una cuenta
3. Copia tu API key desde el dashboard

### 2. Instalar el servidor MCP

Con **npx** (sin instalar nada global):

```bash
npx -y firecrawl-mcp-server
```

Con **Docker**:

```bash
docker run -i --rm \
  -e FIRECRAWL_API_KEY=tu-api-key \
  mendable/firecrawl-mcp-server
```

### 3. Conectarlo a Hermes

En la configuración MCP de Hermes (normalmente `mcp.json` o desde el panel de configuración), añade:

```json
{
  "mcpServers": {
    "firecrawl": {
      "command": "npx",
      "args": ["-y", "firecrawl-mcp-server"],
      "env": {
        "FIRECRAWL_API_KEY": "tu-api-key"
      }
    }
  }
}
```

### 4. Reiniciar Hermes y verificar

Reinicia el proceso de Hermes. Una vez activo, el agente puede llamar a las herramientas de Firecrawl (scrape, crawl, search, map, extract, agent) directamente desde sus skills o en una conversación.

## Usarlo desde otros agentes

El mismo servidor MCP funciona con cualquier agente compatible con MCP:

- **Kilo Code** — añadir el mismo bloque MCP en su configuración
- **Claude Code** — `claude mcp add firecrawl -- npx -y firecrawl-mcp-server`
- **Cursor / Cline / Continue** — en la configuración de MCP como servidor stdio
- **Microsoft Foundry** — integración vía gateway MCP

## Casos de uso habituales

- Investigar un tema y guardar resúmenes en el vault
- Extraer datos estructurados de webs que no tienen API
- Convertir documentación a markdown limpio para alimentar al agente
- Auditar el contenido de tu propio sitio
- Construir datasets a partir de webs públicas
- Análisis de competencia: pricing, features, posicionamiento SEO

## Buenas prácticas

- **Empieza por `scrape` o `map`** antes de `crawl` (más barato y rápido)
- Usa **`onlyMainContent: true`** en `scrape` para saltar navbars, footers y ads
- Activa **`waitFor`** (5.000-10.000 ms) en páginas con mucho JavaScript
- Para datos concretos, usa `extract` con un esquema JSON en lugar de parsear markdown
- Si necesitas investigar a fondo en varias webs, lanza el `agent` y deja que él decida

## Recursos

- Web: [firecrawl.dev](https://firecrawl.dev)
- Documentación: [docs.firecrawl.dev](https://docs.firecrawl.dev)
- Servidor MCP: [github.com/mendableai/firecrawl-mcp-server](https://github.com/mendableai/firecrawl-mcp-server)

Relacionado: [[Hermes Agent]] — el agente donde se instala por defecto.

# #agente #web #contenido
