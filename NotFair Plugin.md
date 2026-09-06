# NotFair Plugin

**NotFair** (repo: `nowork-studio/notfair-plugin`) es un **plugin open source de SEO, GEO y marketing para agentes de IA** (MIT, 3.5k ⭐). Da a Claude Code, Codex, Hermes, Cursor, Gemini CLI y otros agentes **45 skills de marketing prácticos y evidence-led** — no otra colección genérica de prompts. Cada skill es un `SKILL.md` legible con references, scripts y evals. (Antiguamente llamado "toprank".)

## Qué puede hacer tu agente

| Área | Ejemplos |
|---|---|
| **SEO** | Audits de sitio/página, keyword research, content planning, técnico, schema, local, internacional, e-commerce, programmatic, backlinks, drift |
| **GEO / AEO** | Mejorar contenido para citación en ChatGPT, Perplexity, Gemini, Claude y Google AI Overviews |
| **Paid media** | Planear, revisar y optimizar campañas cross-channel con presupuestos y límites de aprobación |
| **Google Ads** | Auditar cuentas, analizar search terms, keywords, presupuestos, copy RSA, assets, landing pages |
| **Meta Ads** | Rendimiento FB/IG, creative fatigue, audiencias, briefs creativos |
| **X Ads** | Campañas, line items, targeting, creativo, audiencias, cambios aprobados |
| **LinkedIn Ads** | Media B2B conectada a lead quality |
| **Analytics** | Query live de GA4 y Search Console, comparar periodos, sitemaps, medición |
| **Content** | De demanda de búsqueda a editorial plans, briefs, artículos, landing pages, metadata |

## Por qué skills y no un agente gigante

El marketing con un prompt vago y único es poco fiable. NotFair lo divide en **procedimientos enfocados y testeables**:

- **Especializado**: cada skill tiene un trabajo definido, inputs requeridos, reglas de decisión y formato de salida
- **Evidence-led**: usa Search Console, GA4, Google Ads, Meta, X y LinkedIn Ads en vivo (no best practices adivinadas)
- **Safe by design**: la revisión read-only va antes de la mutación; los cambios de paid-media quedan explícitos
- **Host-agnostic**: las skills son archivos planos, no lógica atrapada en un runtime
- **Forkable**: MIT, adaptable a tus estándares

## Instalación

```bash
# Claude Code (marketplace)
/plugin marketplace add nowork-studio/notfair-plugin
/plugin install notfair@nowork-studio

# Codex (universal)
codex plugin marketplace add nowork-studio/notfair-plugin --json
codex plugin add notfair@nowork-studio --json
codex mcp login NotFair
```

Un solo **MCP universal llamado NotFair** (OAuth) da acceso a todas las plataformas conectadas: Search Console, GA4, Google/Meta/X/LinkedIn Ads, GoHighLevel y CMS (WordPress, Strapi, Contentful, Ghost).

## Uso

```bash
/notfair:seo-analysis
/notfair:geo-optimizer
/notfair:google-ads-audit
/notfair:meta-ads-creative
/notfair:paid-ads-x
# o lenguaje natural:
# "Audit my site and tell me why organic traffic fell."
# "Find pages that could earn citations in AI answers."
```

También incluye **`npx notfair@latest`**: una app local que convierte un objetivo de marketing medible en un **loop de agente recurrente** (meta → loop → metric verificada), como complemento opcional.

## Recursos

- Repositorio: [github.com/nowork-studio/notfair-plugin](https://github.com/nowork-studio/notfair-plugin)
- Web: [notfair.co](https://notfair.co)

## Relacionado

- SEO y GEO: [[GEO]], [[Best AEO Skill]], [[Auditoría SEO]], [[Estudio de AI Overviews (SE Ranking)]]
- Marketing con agentes: [[Marketing Skills]], [[Cold Email]]
- Skills instalables: [[Skills]], [[Oil-motion]]
- Agentes: [[Claude Code]], [[Codex]], [[Hermes Agent]]

# #marketing #seo #agente #skills