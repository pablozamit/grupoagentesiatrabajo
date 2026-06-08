# /last30days

[/last30days](https://github.com/mvanhorn/last30days-skill) es un **skill open source (MIT)** que convierte a tu agente de IA en un **buscador en paralelo sobre lo que la gente está diciendo AHORA MISMO** en redes y foros, y le ordena sintetizarlo en un único informe razonado.

## Qué es

- **Un agente, no un buscador**: el LLM resuelve primero *dónde* buscar (handles, subreddits, canales, hashtags) y luego lanza todas las búsquedas en paralelo
- **Skill distribuible** vía [Agent Skills](https://agentskills.io) (estándar abierto): funciona en Claude Code, Codex, Cursor, Copilot, Gemini CLI, OpenClaw y 50+ hosts más
- **Licencia MIT**, self-hosted, sin tracking
- Aporta tus propias API keys o sesiones; nada se envía a servidores remotos del proyecto

## El problema que resuelve

Cada plataforma social es un jardín vallado con su propia API, su auth y sus límites. Ningún buscador central los cruza:

| Plataforma | La tienen… |
|------------|-----------|
| Google | Páginas indexadas (no comentarios) |
| ChatGPT | Acuerdo con Reddit (no X ni TikTok) |
| Gemini | YouTube (no Reddit) |
| Claude | Ninguna red social de forma nativa |
| Perplexity | Web, con citas |

Resultado: para saber "qué dice la gente de X esta semana" hay que abrir 7 pestañas y leerlas una a una. `/last30days` lo hace con un comando y un brief al final.

## Fuentes, puntuadas por la gente

El motor busca en paralelo y **puntúa cada resultado por engagement real** (upvotes, likes, vistas, dinero apostado), no por SEO:

| Fuente | Señal |
|--------|-------|
| **Reddit** (con comentarios) | Opinión real con número de upvotes — funciona sin API |
| **X / Twitter** | Reacciones y expertos, ordenado por likes y recencia |
| **YouTube** (transcripciones) | Frases textuales de vídeos largos, no solo títulos |
| **TikTok** | Lo que creadores y comunidades viralizan |
| **Instagram Reels** | Cultura visual y creator economy |
| **Hacker News** | Visión técnica sin filtro |
| **Polymarket** | Probabilidades apostadas con dinero real |
| **GitHub** | Para personas: PRs, releases; para temas: issues y discussions |
| **Digg** | Clústeres curados de cuentas de IA en X (sin auth) |
| **Threads / Bluesky / Pinterest** | Capas descentralizadas y visual |
| **Perplexity Sonar** | Web con citas (requiere OpenRouter) |
| **Web** (Brave) | Cobertura editorial — una señal más, no la única |

## Características clave

- **Zero-config para empezar**: Reddit, HN, Polymarket y GitHub funcionan desde el primer `/last30days`
- **Asistente de setup en 30 s** desbloquea X, YouTube, TikTok, Instagram, Threads y Pinterest
- **Briefs HTML compartibles**: salida en HTML autocontenido, sin JS, dark mode, listo para Slack/email/Notion (`--emit=html`)
- **Búsqueda inteligente**: el motor resuelve a quién seguir (fundadores, repos, subreddits) ANTES de lanzar las queries
- **Cross-source merging**: si la misma historia aparece en Reddit, X y YouTube, aparece como UN clúster, no tres duplicados
- **Modo comparación**: `/last30days "OpenAI vs Anthropic vs xAI"` con `--competitors` para descubrir rivales
- **GitHub person-mode**: para personas, escanea PRs, releases y actividad
- **Modo ELI5**: tras un run, dices "eli5 on" y te lo reescribe en lenguaje claro
- **Best Takes**: un segundo juez puntúa humor y viralidad para sacar las mejores citas
- **1.012 tests pasando** en el repo

## Instalación

**Claude Code** (recomendado, auto-actualizable):

```
/plugin marketplace add mvanhorn/last30days-skill
/plugin install last30days
```

**Codex, Cursor, Copilot, Gemini CLI, 50+ hosts** (vía [Agent Skills](https://agentskills.io)):

```
npx skills add mvanhorn/last30days-skill -g
```

**claude.ai (web)**: descargar `last30days.skill` desde Releases y subirlo en Settings > Capabilities > Skills.

**OpenClaw**:

```
clawhub install last30days-official
```

Para actualizar después:

```
npx skills update last30days -g
```

## Uso básico

```
/last30days Peter Steinberger
```

Resultado: un brief que mezcla qué está publicando en X, qué está commiteando en GitHub, qué dicen de él en r/ClaudeCode, qué podcasts ha hecho, etc., **todo con citas a fuentes reales**.

Con HTML compartible:

```
/last30days Anthropic --emit=html
```

El motor guarda el brief en `~/Documents/Last30Days/<topic>-brief.html` (Windows: `C:\Users\<tu-usuario>\Documents\Last30Days\`).

## Casos de uso

- **Antes de una reunión**: investiga a una persona (sus últimos tweets, podcasts, commits, hilos de Reddit sobre ella)
- **Antes de un viaje**: lee experiencia reciente de la comunidad sobre hoteles, parques, rutas
- **Cuando algo se lanza**: monitoriza el impacto real de un producto, fusión, evento
- **Para comparar herramientas**: ranking basado en lo que la comunidad está usando y diciendo
- **Para entender el mundo**: geopolítica, mercados (Polymarket da probabilidades con dinero real por detrás)
- **Para escribir contenido**: ya tienes un brief con los puntos que la gente está discutiendo
- **Trend monitoring programado**: con `--store` persiste en SQLite y `watchlist.py` corre cada cierto tiempo

## Modelo de "bring your own keys"

| Fuentes | Qué necesitas | Coste |
|---------|---------------|-------|
| Reddit + HN + Polymarket + GitHub | Nada | Gratis |
| X / Twitter | Login en x.com en cualquier navegador | Gratis |
| YouTube | `brew install yt-dlp` | Gratis |
| Bluesky | App password de bsky.app | Gratis |
| TikTok + Instagram + Threads + Pinterest | ScrapeCreators key | 100 créditos gratis, luego PAYG |
| Perplexity Sonar | OpenRouter key | Pay as you go |
| Web search | Brave Search key | 2.000 queries/mes gratis |

## Diferencia con [[Agent-Reach]]

| | Agent-Reach | /last30days |
|---|---|---|
| **Enfoque** | Instala wrappers individuales (twitter-cli, rdt-cli, yt-dlp…) | Skill único que orquesta búsquedas |
| **Salida** | Tu agente usa cada canal por su cuenta | Brief sintetizado con citas |
| **Instalación** | `agent-reach install` | `npx skills add` / `/plugin install` |
| **Cuándo usarlo** | Tu agente quiere twittear, leer, comentar | Quieres un RESUMEN razonado de los últimos 30 días sobre un tema |

Son complementarios: Agent-Reach te da las herramientas, /last30days te da el informe.

## Recursos

- Repositorio: [github.com/mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill)
- Estándar de instalación: [agentskills.io](https://agentskills.io)
- Spec runtime: `skills/last30days/SKILL.md` (source of truth)
- Configuración: `CONFIGURATION.md`
- Changelog: `CHANGELOG.md`
- Licencia: MIT

# #agente #web #contenido
