# Entity Map con Screaming Frog MCP

**Proceso SEO de Chris Long** ([@chris_nectiv](https://x.com/chris_nectiv), Nectiv, 14k views): usar el **MCP de Screaming Frog + Claude para construir un Entity Map** — el mapa de entidades y relaciones semánticas de un sitio, base del SEO por entidades que también alimenta lo que las IAs citan.

## El setup (verificado)

- **Screaming Frog SEO Spider v24.0 trae servidor MCP nativo**: conecta el crawler a Claude (Cowork vía Extensions, Desktop vía `claude_desktop_config.json`) y el agente lanza crawls, exporta datos y analiza sin abrir la GUI
- Alternativas comunitarias: `bzsasson/screaming-frog-mcp` (headless, maneja la CLI y la BBDD de crawls) y `mshahiddigital/screaming-frog-mcp` (funciona con la versión gratuita)
- El truco que desbloquea el Entity Map: la v24 expone por MCP el **export de contenido bulk + embeddings**, así Claude extrae el body de cada URL, genera embeddings y **clusteriza por similitud semántica** sin una línea de Python (vía [search.agency](https://search.agency/blog/screaming-frog-mcp-claude-setup))

## Para qué sirve el Entity Map

- Detectar **canibalización** y near-duplicados compitiendo por la misma query
- Decidir qué piezas viejas **consolidar**
- Definir entidades propias con evidencia — lo mismo que luego te hace citable en GEO ([[Menciones en listicles y reviews (GEO)]])

## Preguntas abiertas del hilo

- ¿El MCP expone datos del crawl **en vivo** o tira de archivo de crawl completado? (afecta a qué puede mapear Claude)
- Alternativa open source mencionada: **librecrawl**

## Recursos

- Walkthrough: [search.agency/blog/screaming-frog-mcp-claude-setup](https://search.agency/blog/screaming-frog-mcp-claude-setup)
- Repos: [bzsasson/screaming-frog-mcp](https://github.com/bzsasson/screaming-frog-mcp) · [mshahiddigital/screaming-frog-mcp](https://github.com/mshahiddigital/screaming-frog-mcp)
- Inspiración: [leadershipinseo.com](https://leadershipinseo.com) · Video: [@chris_nectiv en X](https://x.com/chris_nectiv)

## Relacionado

- Auditoría completa: [[Auditoría SEO]]
- Entidades → citas de IA: [[Menciones en listicles y reviews (GEO)]], [[GEO]]
- Alternativa gratuita de crawl: [[Crawl4AI]], [[Firecrawl]]

# #seo #agente #contenido