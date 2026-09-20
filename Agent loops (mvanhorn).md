# Agent loops (toolkit mvanhorn)

**Tesis de Matt Van Horn** ([@mvanhorn](https://x.com/mvanhorn), vía [@ericosiu](https://x.com/ericosiu), 45.6k views + artículo "WTF is a loop?" con 3.4M): **un loop es un cron + un LLM**. Teníamos automatización desde siempre; lo nuevo es que el paso ejecuta un modelo que decide. De su entrevista, el toolkit gratuito/open source:

## Las 3 herramientas

- **Printing Press** ([printingpress.dev](https://printingpress.dev), repos 4.7k + 2.0k ⭐): convierte **cualquier API o web en un CLI agent-native** (Go + skill + MCP server) — SQLite local, auto-JSON al pipear, `--compact` (−60/80% tokens), exit codes tipados, comandos compuestos imposibles para un wrapper (stale, reconcile). Biblioteca con starter-pack (`espn`, `flight-goat`…); instalable en Hermes: `hermes skills install mvanhorn/printing-press-library/skills/printing-press-library`
- **Agent Cookie** ([github.com/mvanhorn/agentcookie](https://github.com/mvanhorn/agentcookie), MIT, 778 ⭐, v1.0.0): mantiene el Mac del agente **logueado como tú** — replica cookies/sesiones Chrome en continuo y cifrado por Tailscale, sin ceremonias por sitio. OpenClaw, Hermes o cualquier runtime despiertan autenticados
- **Compound Engineering** ([every.to/guides/compound-engineering](https://every.to/guides/compound-engineering)): sistema de planificación (nace de construir Cora, chief-of-staff IA) que hace que tu agente **codifique lecciones** y deje de repetir errores

## La idea que lo une

Los loops que ganan no son prompts más listos: son **cron + LLM + estado local** (SQLite, cookies vivas, lecciones escritas). Ver también [[Company Brain]] (la versión empresa) y [[Learn Harness Engineering]] (hacer fiable al agente).

## Recursos

- Hilo: [@ericosiu en X](https://x.com/ericosiu) · Autor: [@mvanhorn en X](https://x.com/mvanhorn)

## Relacionado

- Research en loop: [[last30days]] (del mismo autor, con watchlist briefing)
- Harness fiable: [[Learn Harness Engineering]], [[HarnessRouter + UHP]]
- Cookies para agentes: [[Browser Use]], [[Camofox Browser]]

# #agente #productividad #contenido