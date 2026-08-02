# Best AEO Skill

[metawhisp/best-aeo-skill](https://github.com/metawhisp/best-aeo-skill) — Skill open source para Claude Code y 35+ agentes que audita tu web y la optimiza para que la entiendan, citen y recomienden las IAs (ChatGPT, Claude, Perplexity, Gemini, Google AI Overviews). Compartido por [midudev](https://x.com/midudev/status/2067971926459371744). MIT, gratuito.

## Qué hace

Ejecuta **33 recolectores de evidencia** contra cualquier URL, calcula un **GEO Score compuesto 0-100** sobre 4 vectores (Técnico 20%, Citabilidad 35%, Schema 20%, Entidad 25%) y aplica correcciones automáticas con un solo comando.

## Instalación

```bash
# Claude Code
/plugin marketplace add metawhisp/best-aeo-skill
/plugin install best-aeo-skill

# Cursor, Codex, OpenCode, etc.
npx skills add metawhisp/best-aeo-skill
```

## Auditoría en vivo

[bestaeoskill.com/audit](https://bestaeoskill.com/audit/) — el mismo motor en Cloudflare Workers, sin instalar nada.

## Caso de estudio

midudev lo compartió como ejemplo de que "ya no solo hay que trabajar el SEO" — las IAs necesitan: metadata limpia, rutas estructuradas, robots.txt/sitemap, JSON-LD, contenido con citas y estadísticas, y `llms.txt`.

Relacionado: [[GEO]], [[La ventana del LLM SEO]], [[Marketing Skills]] (OKF de Google), [[8 Prompts de Diseño para Agentes de IA]]

# #web #seo #ia #oportunidades
