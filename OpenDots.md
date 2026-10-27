# OpenDots

**OpenDots** es la **plantilla open source (MIT) de CopilotKit para crear «coworkers» de IA siempre activos** (Dots): agentes persistentes con nombre, rol, herramientas propias y hasta su propio ordenador, que se mueven entre chat, llamadas de voz y Slack. Es la respuesta open source a los **dots de OpenAI**, sus agentes-coworker always-on. 4.8k ⭐, estado alpha (oct 2026).

## Qué es

- **Una plantilla, no un producto alojado**: clonas el repo, defines tus Dots (nombre, rol, instrucciones y herramientas permitidas) y lo ejecutas en tu infraestructura. Disponible en web y móvil
- **Spaces**: espacios de documentos donde los Dots crean y editan páginas contigo (editor visual, subpáginas, autosave)
- **Cada Dot puede tener su propio ordenador** (contenedor vía OpenBot): navegador, archivos y terminal persistentes entre sesiones, con permisos de browser/archivos/shell configurables por Dot y vista en vivo desde el chat
- **Human-in-the-loop por diseño**: guardar una página o ejecutar cualquier herramienta que no sea de solo lectura pausa el chat con una tarjeta de aprobación («Approve & save», «Approve & run»)
- **Herramientas vía MCP**: email, calendario, GitHub o tus propios servicios; se activan o desactivan por Dot
- **Texto y llamadas**: voz en tiempo real con un agente de cómputo separado para seguir hablando mientras trabaja; integración con Slack (mencionas al Dot en un hilo) con allowlist explícita

## Matiz sobre el «self-hostable» (oct 2026)

El anuncio lo vende como «no lock-in, no subscriptions, your data, your hardware». El código de la app sí es MIT y corre donde quieras, **pero las conversaciones requieren CopilotKit Intelligence**: el servicio alojado en la nube de CopilotKit, una evaluación local en Docker, o un despliegue self-hosted con licencia; no existe un almacenamiento de conversaciones independiente. Tampoco se sostiene el «works with any agent harness»: el runtime es el stack de CopilotKit (TanStack AI + React SDK + Intelligence); lo que sí conectas libremente son las herramientas, vía MCP. Fuente: README del repo.

## Cómo empezar

Node 24 + npm, `npm run dev`, y después conectar un proyecto Intelligence y un modelo (`OPENAI_API_KEY`) para poder chatear. Los ordenadores de los Dots requieren servicios aparte (`docs/COMPUTERS.md`).

## Recursos

- Repo: [github.com/CopilotKit/OpenDots](https://github.com/CopilotKit/OpenDots) (MIT)
- Anuncio: [x.com/CopilotKit/status/2105714964023685148](https://x.com/CopilotKit/status/2105714964023685148)

## Relacionado

- [[AG-UI + CopilotKit]] — el protocolo y el frontend de agentes sobre los que se construye
- [[OpenMausBot]] — otro equipo de bots open source con aprobaciones, voz y MCP
- [[Devin]] — el coworker de IA comercial de referencia

# #agente #opensource
