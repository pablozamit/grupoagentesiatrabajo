# A2UI

[A2UI](https://a2ui.org) es un protocolo abierto de Google para UI generativa: el agente describe qué mostrar (mensajes A2UI) y cada aplicación lo dibuja con sus propios componentes nativos, en lugar de responder solo con texto. La primera versión estable, A2UI 1.0, se anunció el 11 de noviembre de 2026 en el [blog de Google Developers](https://developers.googleblog.com/a2ui-10-build-delightful-fast-reliable-agentic-experiences/).

## Qué aporta (según Google)

- El agente compone la interfaz (formularios de confirmación, gráficos, selectores) y la app la renderiza de forma segura y a velocidad nativa, usando únicamente los componentes del sistema de diseño que el desarrollador registre.
- Renderers open source: React, Angular y Lit en web; Flutter en móvil, web y escritorio; SwiftUI en iOS y Jetpack Compose en Android (este último aún en 0.9.1, con 1.0 anunciado como próximo). Los renderers web y Flutter funcionan dentro de MCP Apps, así que las pantallas A2UI pueden aparecer en asistentes como Claude o Gemini.
- SDKs de agente para Python, TypeScript y Dart. La versión 1.0 añade llamadas de función bidireccionales (por ejemplo, un selector de vuelos o reservas que consulta disponibilidad al momento), soporte de accesibilidad y extensiones para metadatos.
- Generación rápida con A2UI Express o con modelos de decisión «system one» que eligen componentes en lugar de escribir texto; el enlace a datos y componentes se hace en el servidor, de modo que los valores sensibles no llegan al modelo.
- Según Google, ya construyen con A2UI empresas como Atlassian (tarjetas interactivas en work items de Jira), Alation, Bloomberg y ByteDance (renderer para su framework Lynx); dentro de Google lo usan Gemini Notebook y Gemini (en 0.9.1).

## A2UI Playground

[a2ui.open.bot](https://a2ui.open.bot/) es el playground de CopilotKit para probar el protocolo: describes una UI, el modelo escribe A2UI y tu sistema de diseño la dibuja; también permite escribir el JSON de A2UI a mano, sin IA.

## Relacionado

- [[Rube]], [[Microsoft Foundry]]

# #ia #opensource
