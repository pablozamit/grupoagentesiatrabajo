# CopilotKit

**CopilotKit** (MIT) es **"The Frontend Stack for Agents & Generative UI"** — el stack frontend para agentes y UI generativa. Permite **embedir agentes en cualquier app** y que el agente no solo chatee: **renderice componentes de UI en vivo, actúe sobre la página actual y coordine human-in-the-loop**. React, React Native, Next.js, Angular, Slack, MS Teams.

## Qué hace

- **Generative UI**: el agente pone componentes tipados (forms, charts, calculators) directamente en la conversación
- **Streaming en vivo** de respuestas y razonamiento
- **Tools en el navegador**: el agente lee/escribe el shared state de la app y opera sobre lo que el usuario ve
- **Human-in-the-loop**: pausas para aprobación de decisiones
- **Creadores del protocolo AG-UI** (ver [[AG-UI + CopilotKit]]), el estándar abierto para conectar agentes a apps

## La conexión con Hermes

CopilotKit construyó el **adapter AG-UI dentro de Hermes** (PR en NousResearch/hermes-agent): un servidor HTTP/SSE que expone el agente Hermes sobre AG-UI, de modo que **un agente terminal-capable vive dentro de una aplicación** con seguridad (approval de comandos peligrosos como interrupt nativo, auth fail-closed, audit redactado).

## Recursos

- Repositorio: [github.com/CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit)
- X: [@CopilotKit](https://x.com/CopilotKit)

## Relacionado

- El protocolo y la demo: [[AG-UI + CopilotKit]]
- El agente que se embedde: [[Hermes Agent]]
- Frontend con agentes: [[Despliegue de IA en empresa (3 etapas)]]

# #agente #web #contenido