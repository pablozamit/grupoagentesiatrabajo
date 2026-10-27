# Hermes Skills Hub

> Nous Research acaba de publicar el hub de skills más completo que he visto para su agente de IA: Hermes. Se llama Hermes Skills Hub y tiene 691 skills listas para instalar.

_—@Fluyeporlaweb (4 jun 2026)_

**Hermes Skills Hub** es el catálogo oficial de skills (habilidades) listas para instalar en [[Hermes Agent]], el agente open source de Nous Research. Anunciado el 4 de junio de 2026 con 691 skills. Buscador oficial: [hermes-agent.nousresearch.com/docs/skills](https://hermes-agent.nousresearch.com/docs/skills/).

## Cómo funciona

- **Búsqueda unificada en varios registros**: skills oficiales opcionales, repositorios de GitHub (incluidos openai/skills, anthropics/skills y NVIDIA/skills), "taps" (repos de skills que el usuario añade), el marketplace skills.sh, ClawHub y LobeHub.
- **Instalación**: con `hermes skills` (CLI) o con comandos `/skills` dentro del chat. Las skills se instalan en `~/.hermes/skills/` y un archivo `lock.json` registra versión, hash del contenido y origen de cada una: actualizaciones seguras y protección contra "secuestro" de una skill por otro registro.
- **Solo el usuario instala**: el agente no puede instalarse skills del hub por su cuenta.

## Seguridad (Skills Guard)

Cada skill externa pasa por **Skills Guard**, un escáner estático que busca patrones de exfiltración de datos (secretos en curl/wget), prompt injection, comandos destructivos y modificaciones de `AGENTS.md`/`SOUL.md`. La política de instalación depende del nivel de confianza del origen:

| Origen | Segura | Precaución | Peligrosa |
|---|---|---|---|
| builtin (oficial) | permite | permite | permite |
| trusted | permite | permite | bloquea |
| community | permite | bloquea | bloquea |
| agent-created | permite | permite | pregunta |

## Por qué importa

Convierte al agente en una plataforma modular: en vez de programar cada integración, se instalan skills hechas por terceros. El escaneo previo y el registro de procedencia son la parte que la mayoría de marketplaces de skills no tiene. Las 691 skills son a fecha del anuncio (jun 2026); el número varía porque el hub agrega varios registros que crecen (fast.io listaba 672 poco después).

## Ver también

- [[Hermes Agent]]
- [[Ajustes Avanzados de Hermes Agent]]

Fuentes: [post de @Fluyeporlaweb](https://x.com/Fluyeporlaweb/status/2062414219123765748) (4 jun 2026), documentación técnica de hermes-agent (deepwiki.com/NousResearch/hermes-agent), fast.io.

# #agente
