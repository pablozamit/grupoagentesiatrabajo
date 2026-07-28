# Acceso a internet desde agentes

Tres notas de la enciclopedia resuelven el mismo problema desde ángulos distintos: **darle a un agente de IA la capacidad de leer y actuar en internet**. Esta nota los pone en paralelo para que sepas cuál usar en cada momento.

## Las cuatro opciones

| Nota | Tipo | Cuándo brilla |
|------|------|---------------|
| [[Firecrawl]] | **API + servidor MCP** | Tu agente necesita leer una URL concreta y obtener markdown limpio, HTML, JSON o datos estructurados |
| [[Agent-Reach]] | **Instalador de herramientas CLI** | Tu agente debe hacer cosas en redes sociales (leer, publicar, buscar) sin pagar APIs oficiales |
| [[last30days]] | **Skill de búsqueda + brief** | Quieres un RESUMEN razonado de qué dice la gente sobre un tema en los últimos 30 días |
| [[OctenAI]] | **API de búsqueda ultrarrápida** | Tu agente necesita buscar en web a alta velocidad (62ms) y a escala (miles de consultas concurrentes) |

## Matriz comparativa

| Característica | [[Firecrawl]] | [[Agent-Reach]] | [[last30days]] | [[OctenAI]] |
|----------------|---------------|-----------------|----------------|-------------|
| **Tipo de producto** | API de scraping + servidor MCP | Instalador de wrappers CLI | Skill open source | API de búsqueda web |
| **Salida** | Markdown / JSON / datos estructurados | El agente usa cada canal a mano | Brief sintetizado con citas | Resultados de búsqueda en crudo |
| **Fuentes cubiertas** | Cualquier URL pública | Twitter/X, Reddit, YouTube, GitHub, Bilibili, LinkedIn, WeChat, RSS, etc. | Reddit, X, YouTube, TikTok, IG, HN, Polymarket, GitHub, Digg, Bluesky, Pinterest, Threads, Perplexity, Web | Web abierta (búsqueda indexada) |
| **Necesita API key** | Sí (cuenta de Firecrawl) | No, usa sesiones de navegador y yt-dlp | No para Reddit/HN/Polymarket/GitHub; sí para X/YT/TikTok (ScrapeCreators) | Sí |
| **Funciona out-of-the-box** | Sí, con API key | Sí, instalación en una línea | Sí para 4 fuentes; resto en 30s con setup wizard | Sí, con API key |
| **Costo** | Freemium (créditos mensuales) | Gratis | Gratis | Por uso (precios no anunciados) |
| **Velocidad** | Media (depende de la web) | Media (depende del navegador) | Lenta (busca en paralelo pero sintetiza) | **62ms P50** (6× más rápido que Exa) |
| **Instalación** | `npx firecrawl-mcp-server` o Docker | `agent-reach install` | `npx skills add mvanhorn/last30days-skill -g` | vía web de monid.ai |
| **Compatible con** | Cualquier agente con MCP | Cualquier agente que ejecute shell | 50+ hosts (Claude Code, Codex, Cursor, Copilot, Gemini CLI, OpenClaw…) | Claude Code, Codex y otros |
| **Licencia** | Servicio comercial (código MCP abierto) | MIT | MIT | Servicio comercial |
| **Síntesis con IA** | No (devuelve datos crudos) | No | Sí (un "juez IA" mezcla las fuentes) | No |
| **Mejor para** | Leer una web concreta de forma fiable | Automatizar acciones en redes | Investigación de temas completos | Búsquedas masivas a alta velocidad |

## Cuándo usar cada uno

### Elige [[Firecrawl]] cuando…

- Le dices a tu agente "ve a esta web y dame el contenido limpio"
- Necesitas datos estructurados con un esquema JSON concreto
- Vas a hacer scraping de un sitio entero (`crawl`)
- Quieres evitar pelearte con HTML sucio, JavaScript dinámico, captchas
- La salida es la materia prima para otro paso de tu agente

### Elige [[Agent-Reach]] cuando…

- Tu agente tiene que **publicar o interactuar** en redes, no solo leer
- Quieres evitar pagar APIs oficiales (X, Reddit, etc.)
- Necesitas una herramienta persistente que tu agente use cuando quiera
- El agente debe leer YouTube, Bilibili, XiaoHongShu, WeChat, etc. sin configuración manual

### Elige [[last30days]] cuando…

- Quieres saber **qué dice la gente** sobre un tema, persona o producto
- Necesitas un informe razonado con citas a fuentes reales
- Vas a usarlo antes de una reunión, un viaje, una decisión de compra
- Quieres ahorrarte abrir 7 pestañas y leer una a una

### Elige [[OctenAI]] cuando…

- Necesitas velocidad extrema (62ms por consulta)
- Tu agente debe hacer cientos o miles de búsquedas concurrentes
- Quieres resultados en crudo, sin síntesis ni procesamiento
- El tiempo de respuesta es crítico para tu flujo de trabajo

## Combinaciones habituales

- **Firecrawl + Agent-Reach**: el primero para webs "normales", el segundo para redes sociales y plataformas con login
- **last30days + Firecrawl**: el skill usa Firecrawl por debajo para muchas de sus fuentes (lo configura el setup wizard)
- **last30days solo**: cubre 80% de los casos de investigación típicos sin configuración extra
- **OctenAI + Firecrawl**: OctenAI para descubrir URLs a alta velocidad, Firecrawl para extraer el contenido de cada una
- **OctenAI solo**: ideal para agentes que necesitan respuestas rápidas sin procesamiento posterior

## Cómo encajan en [[Hermes Agent]]

Hermes es un agente que orquesta herramientas. Las cuatro se pueden instalar como skills o servidores MCP dentro de Hermes y quedan disponibles para que cualquier skill de Hermes las use:

- Firecrawl → vía servidor MCP (instrucciones en la nota [[Firecrawl]])
- Agent-Reach → vía CLI (instrucciones en la nota [[Agent-Reach]])
- /last30days → vía Agent Skills (`/plugin install last30days`)
- OctenAI → vía API (integración directa en el agente)

Una vez instaladas, tu agente puede decidir en cada momento cuál invocar según la tarea.

# #agente #web #contenido
