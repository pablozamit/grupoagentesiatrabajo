# REA (Reverse Engineer Anything)

MCP open source de ingeniería inversa para agentes de código: el agente inspecciona una aplicación SIN su código fuente (binarios nativos, apps JavaScript/Electron, ensamblados .NET, sitios web), explica cómo funciona una funcionalidad, muestra la evidencia y construye una versión adaptada para tu proyecto.

- Cómo funciona: conecta al agente con herramientas de análisis - binarios nativos vía Hopper, Ghidra o IDA (usa tu instalación existente; el setup puede instalar Hopper con aprobación) y análisis estático de JavaScript sin motor nativo. El análisis corre en local y cada conclusión incluye su evidencia y sus limitaciones. Las mismas herramientas se pueden usar desde la terminal.
- Setup: `npx rea-agents setup` (registra REA en tu agente e instala las instrucciones de workflow). Licencia MIT, web rea.tools con guías y casos reales.
- Matiz de marketing: el tuit viral de Matthew Berman («Reverse Engineer Anything. Software is done», 2,1M views) lo vende como el fin del software; la propia herramienta es más modesta - no promete recuperar el código fuente original ni clonar apps automáticamente, sino inspeccionar cómo funciona una feature y ayudar a construir una versión adaptada.

Enlace: https://github.com/morluto/rea (~89k estrellas, oct 2026)

#agente #opensource
