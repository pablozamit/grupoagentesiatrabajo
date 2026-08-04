# Acceso a internet desde agentes

Tres notas de la enciclopedia resuelven el mismo problema desde ángulos distintos: **darle a un agente de IA la capacidad de leer y actuar en internet**. Esta nota los pone en paralelo para que sepas cuál usar en cada momento, incluye los buscadores dedicados para agentes (Exa y alternativas) y por qué no te conviene quedarte solo con el "web search" que traen los asistentes por defecto.

## Las opciones

| Nota | Tipo | Cuándo brilla |
|------|------|---------------|
| [[Firecrawl]] | **API + servidor MCP** | Tu agente necesita leer una URL concreta y obtener markdown limpio, HTML, JSON o datos estructurados |
| [[Agent-Reach]] | **Instalador de herramientas CLI** | Tu agente debe hacer cosas en redes sociales (leer, publicar, buscar) sin pagar APIs oficiales |
| [[last30days]] | **Skill de búsqueda + brief** | Quieres un RESUMEN razonado de qué dice la gente sobre un tema en los últimos 30 días |
| [[OctenAI]] | **API de búsqueda ultrarrápida** | Tu agente necesita buscar en web a alta velocidad (62ms) y a escala (miles de consultas concurrentes) |
| Exa | **Buscador para agentes** | Flujos agentic con API: fan-outs de decenas de sub-búsquedas con contexto fresco, limpio y barato |

## Buscadores dedicados para agentes (no el web-search bundled)

Claude, Codex y Gemini incluyen "búsqueda web" gratis como herramienta integrada, y eso basta para consultas puntuales. Pero en **flujos agentic construidos con APIs** (donde tú diseñas el flujo de búsqueda), conectar un buscador diseñado para agentes **cambia el juego**:

- **Mejor contexto**: fuentes más frescas, evidencia más limpia, mejores excerpts y más control sobre qué entra en la ventana de contexto. "El modelo solo razona sobre lo que ve."
- **Fan-out**: cuando el agente lanza **decenas de sub-búsquedas**, la calidad y la latencia de la búsqueda integrada se convierten en el cuello de botella.
- **Indexación orientada a agentes**: un índice construido para LLMs (no para humanos) filtra la "basura" de la web que degrada los outputs.

### Exa

- CEO Will Bryk: **uno de los mayores índices del mundo** — sirven **80.000M páginas**, trackean **1,4 billones de URLs** y van camino de escala Google en **2027**.
- Tamaño estimado de índices: Google ~1T, Bing ~500B, Yandex ~200B, Brave ~40B.
- **Frescura**: indexan miles de millones de URLs al día (de minutos a días según el contenido).
- Optimizan el algoritmo **contra los top-results "spammy"** de los buscadores humanos.
- Uso real: "Moving to Exa has been great for our Voice Agent, la ganancia de latencia es un game changer" (los casos de uso en vivo tipo clima/vuelos eran el único punto débil frente al grounding de Google).
- **No siempre merece la pena**: si usas un plan de $200 con web-search incluido, no compensa el coste; sí si pagas LLMs por API.

### Alternativas

- **Parallel** — el otro buscador "para agentes" que cita Arnav Gupta (terminó quedándose solo con Exa por velocidad/coste/calidad).
- **Brave Search API** — índice a escala con un endpoint pensado para grounding de modelos y agentes.
- **SearXNG** — self-hosted, open source, en Docker; busca sin depender de una API externa.

## Matriz comparativa

| Característica | [[Firecrawl]] | [[Agent-Reach]] | [[last30days]] | [[OctenAI]] | Exa |
|----------------|---------------|-----------------|----------------|-------------|-----|
| **Tipo de producto** | API de scraping + servidor MCP | Instalador de wrappers CLI | Skill open source | API de búsqueda web | Buscador para agentes |
| **Salida** | Markdown / JSON / datos estructurados | El agente usa cada canal a mano | Brief sintetizado con citas | Resultados de búsqueda en crudo | Resultados indexados + excerpts limpios |
| **Fuentes cubiertas** | Cualquier URL pública | Twitter/X, Reddit, YouTube, GitHub, Bilibili, LinkedIn, WeChat, RSS, etc. | Reddit, X, YouTube, TikTok, IG, HN, Polymarket, GitHub, Digg, Bluesky, Pinterest, Threads, Perplexity, Web | Web abierta (búsqueda indexada) | Índice propio (80B páginas, 1,4T URLs) |
| **Necesita API key** | Sí (cuenta de Firecrawl) | No, usa sesiones de navegador y yt-dlp | No para Reddit/HN/Polymarket/GitHub; sí para X/YT/TikTok (ScrapeCreators) | Sí | Sí |
| **Funciona out-of-the-box** | Sí, con API key | Sí, instalación en una línea | Sí para 4 fuentes; resto en 30s con setup wizard | Sí, con API key | Sí, con API key |
| **Costo** | Freemium (créditos mensuales) | Gratis | Gratis | Por uso (precios no anunciados) | Por uso (diseñado para fan-outs de agentes) |
| **Velocidad** | Media (depende de la web) | Media (depende del navegador) | Lenta (busca en paralelo pero sintetiza) | **62ms P50** (6× más rápido que Exa) | Rápida (optimizada para agentes; referencia en el hilo) |
| **Instalación** | `npx firecrawl-mcp-server` o Docker | `agent-reach install` | `npx skills add mvanhorn/last30days-skill -g` | vía web de monid.ai | SDK/API (exa.ai) |
| **Compatible con** | Cualquier agente con MCP | Cualquier agente que ejecute shell | 50+ hosts (Claude Code, Codex, Cursor, Copilot, Gemini CLI, OpenClaw…) | Claude Code, Codex y otros | Cualquier agente vía API (Exa MCP también) |
| **Licencia** | Servicio comercial (código MCP abierto) | MIT | MIT | Servicio comercial | Servicio comercial |
| **Síntesis con IA** | No (devuelve datos crudos) | No | Sí (un "juez IA" mezcla las fuentes) | No | No (devuelve resultados; el agente sintetiza) |
| **Mejor para** | Leer una web concreta de forma fiable | Automatizar acciones en redes | Investigación de temas completos | Búsquedas masivas a alta velocidad | Fan-outs de agentes con contexto limpio y fresco |

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

### Elige Exa cuando…

- Construyes flujos agentic con APIs (no solo usar el chat con búsqueda incluida)
- Tu agente lanza **fan-outs de decenas de sub-búsquedas** y la latencia/calidad de la búsqueda integrada se vuelve cuello de botella
- Necesitas contexto fresco y limpio (excerpts optimizados para LLMs) para que el modelo razone sobre buena evidencia
- Pagas los LLMs por API y el coste de un buscador dedicado compensa frente a suscribirte a planes con web-search incluido

## Combinaciones habituales

- **Firecrawl + Agent-Reach**: el primero para webs "normales", el segundo para redes sociales y plataformas con login
- **last30days + Firecrawl**: el skill usa Firecrawl por debajo para muchas de sus fuentes (lo configura el setup wizard)
- **last30days solo**: cubre 80% de los casos de investigación típicos sin configuración extra
- **OctenAI + Firecrawl**: OctenAI para descubrir URLs a alta velocidad, Firecrawl para extraer el contenido de cada una
- **OctenAI solo**: ideal para agentes que necesitan respuestas rápidas sin procesamiento posterior
- **Exa + Firecrawl**: Exa para el descubrimiento y los fan-outs de búsqueda, Firecrawl para extraer el contenido completo de cada URL ganadora

## Cómo encajan en [[Hermes Agent]]

Hermes es un agente que orquesta herramientas. Las opciones se pueden instalar como skills o servidores MCP dentro de Hermes y quedan disponibles para que cualquier skill de Hermes las use:

- Firecrawl → vía servidor MCP (instrucciones en la nota [[Firecrawl]])
- Agent-Reach → vía CLI (instrucciones en la nota [[Agent-Reach]])
- /last30days → vía Agent Skills (`/plugin install last30days`)
- OctenAI → vía API (integración directa en el agente)
- Exa → vía API o MCP (exa.ai)

Una vez instaladas, tu agente puede decidir en cada momento cuál invocar según la tarea.

# #agente #web #contenido
