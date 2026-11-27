# OpenDesign

**OpenDesign** es un espacio de trabajo de diseño con agente de IA, open source (Apache 2.0, repo [nexu-io/open-design](https://github.com/nexu-io/open-design)). Se presenta como la alternativa abierta a Claude Design.

> ¿Sabías que puedes tener un diseñador IA en tu ordenador SIN PAGAR NADA? Acabo de instalar Open Design (capa open source encima de Codex y Claude Code) en Windows con el .exe oficial.
>
> _—@oscarmartin (26 may 2026), citado por @OpenDesignHQ_

## Qué es

No trae su propio agente: funciona como **capa encima de los agentes de código que ya tengas instalados** (Claude Code, Codex, Cursor, Copilot, OpenCode, Hermes y unos 20 más; conexión vía MCP, skill o plugin, `od mcp install <agente>`). El flujo: escribes un brief, el agente genera un prototipo que sigue tu sistema de diseño, lo compartes para recibir feedback y el agente lo refina en el mismo proyecto. El resultado es HTML/CSS real, listo para pasar a Cursor/Codex/Claude Code, o exportable a PPTX/PDF/MP4.

Piezas: sistemas de diseño (marca, tipografía, logo), plantillas, plugins con skills oficiales, app de escritorio (el hilo citado menciona un .exe oficial para Windows, sin verificar) y OpenDesign Cloud.

## Matiz sobre lo de «gratis»

La app es open source y gratis, pero necesitas traer tu propio agente (con su API o suscripción). La parte de pago es **OpenDesign Cloud**: plan Go desde 8 $ el primer mes con créditos mensuales para varios modelos. O sea: «sin pagar nada» aplica si ya tienes Codex o Claude Code funcionando.

## OpenDesign Motion (octubre 2026)

OpenDesign añadió **OpenDesign Motion**, su generación de **vídeo con movimiento**, presentada como la alternativa open source a Claude Motion: se crean vídeos con cualquier agente y cualquier modelo, sin depender de Opus 5.5. La cuenta oficial ([@OpenDesignHQ](https://x.com/OpenDesignHQ/status/2111023212129829086)) mostró varios ejemplos generados con DeepSeek V4.1 Flash, incluida la propia demo de lanzamiento. Por dentro, la parte de vídeo se apoya en [[HyperFrames]] (HeyGen), con el que renderiza a MP4 desde HTML.

## OpenGame: creación de videojuegos

OpenDesign amplía su ecosistema con [[OpenGame]], un estudio de videojuegos de código abierto que trabaja con agentes como [[Codex]] y [[Claude Code]]. Permite partir de plantillas jugables, adaptar mecánicas y estilos y trabajar con código, arte, 3D y sonido. El repositorio documenta comprobaciones automáticas y exportación de proyectos HTML5/JavaScript; algunas vías de publicación y monetización siguen en su hoja de ruta.

El anuncio habla de recrear títulos como GTA y Black Myth: eso no equivale a publicar el código original de esos juegos ni garantiza resultados de calidad AAA. El software local es Apache 2.0; los modelos y servicios externos pueden requerir suscripción o consumo de API.

## Ver también

- [[HyperFrames]]
- [[Diseño con Codex (receta Vox)]]
- [[OpenPencil]]
- [[Hermes Agent]]


#tipo/herramienta #tema/agentes #tema/diseno/interfaces
