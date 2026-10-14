# REA (Reverse Engineer Anything)

MCP open source de ingeniería inversa para agentes de código: el agente inspecciona una aplicación SIN su código fuente (binarios nativos, apps JavaScript/Electron, ensamblados .NET, sitios web), explica cómo funciona una funcionalidad, muestra la evidencia y construye una versión adaptada para tu proyecto.

- Cómo funciona: conecta al agente con herramientas de análisis - binarios nativos vía Hopper, Ghidra o IDA (usa tu instalación existente; el setup puede instalar Hopper con aprobación) y análisis estático de JavaScript sin motor nativo. El análisis corre en local y cada conclusión incluye su evidencia y sus limitaciones. Las mismas herramientas se pueden usar desde la terminal.
- Setup: `npx rea-agents setup` (registra REA en tu agente e instala las instrucciones de workflow). Licencia MIT, web rea.tools con guías y casos reales.
- Matiz de marketing: el tuit viral de Matthew Berman («Reverse Engineer Anything. Software is done», 2,1M views) lo vende como el fin del software; la propia herramienta es más modesta - no promete recuperar el código fuente original ni clonar apps automáticamente, sino inspeccionar cómo funciona una feature y ayudar a construir una versión adaptada.

Enlace: https://github.com/morluto/rea (repositorio verificado el 14-oct-2026; el recuento de estrellas es variable)

#agente #opensource


## Perímetro de análisis y límites de la difusión

El [post de robiartec](https://x.com/robiartec/status/2109648332993765760) afirma 130k estrellas y 29k forks. No usar esas cifras como prueba de calidad: el recuento leído en el [repositorio](https://github.com/morluto/rea) no coincide con esa difusión. La web enlazada por el proyecto es [morluto.github.io/rea](https://morluto.github.io/rea/); el enlace «rea.tools» citado antes no fue la referencia verificada en esta revisión.

El README separa análisis estático de captura en ejecución: JavaScript/.NET estáticos no necesitan ejecutar el objetivo, mientras que runtime capture puede iniciar o conectar con procesos bajo los permisos del usuario. «Local» no equivale a sandbox ni a que todo el trabajo sea de sólo lectura. Antes de analizar un archivo desconocido, limitar objetivo y permisos; no ejecutarlo ni abrir red por defecto, y no asumir que un prompt sustituye aislamiento técnico. La configuración del agente debe revisarse antes de aprobar cambios.

El proyecto exige autorización y uso legal; no promete recuperar perfectamente código fuente, resolver cualquier ofuscación ni reemplazar experiencia de ingeniería inversa. Los comentarios sobre firmware y «horas en vez de semanas» son testimonios, no un benchmark controlado.

Ver también: [[Codebase Memory MCP]], [[Truco HAR → API MCP]].
