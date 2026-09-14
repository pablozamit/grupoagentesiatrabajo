# WhatsApp personal para agentes de IA

Conectar un agente de IA al **WhatsApp personal** sin usar la API oficial de Meta es posible, pero se hace con clientes no oficiales. La idea es vincular el número como un dispositivo adicional, igual que WhatsApp Web, normalmente escaneando un código QR.

## Cómo se conecta Zapia

[Zapia](https://zapia.com/) vincula la cuenta de WhatsApp del usuario **como un dispositivo externo de WhatsApp Web** mediante el sistema multidispositivo. No usa la API oficial de WhatsApp Business de Meta.

Eso le permite leer y enviar mensajes desde la cuenta personal, programar envíos y aplicar IA sobre las conversaciones. A cambio, opera en una **zona gris**: desde diciembre de 2025 Meta restringe los asistentes de IA de terceros en WhatsApp, y Zapia mantiene disputas legales con Meta por esas reglas.

Fuente: [LA NACION - La app Zapia ahora permite programar mensajes en WhatsApp](https://www.lanacion.com.ar/tecnologia/la-app-zapia-ahora-permite-programar-mensajes-en-whatsapp-nid17122025/)

## Alternativas sin la API oficial

### WAHA

[WAHA](https://github.com/devlikeapro/waha) empaqueta WhatsApp Web en Docker y expone una API HTTP/REST. Se instala en un servidor, se escanea un QR y el agente puede leer o enviar mensajes mediante peticiones a la API.

- **Ideal para:** montar un puente propio entre WhatsApp y un agente, n8n o un backend
- **Coste:** edición Core gratuita; las ediciones de pago añaden funciones y soporte
- **Ventaja:** instalación sencilla y API lista para usar

### Evolution API

[Evolution API](https://github.com/EvolutionAPI/evolution-api) es una API REST open source para integrar WhatsApp con chatbots, n8n y automatizaciones. En su modo no oficial se apoya en Baileys para hablar con el protocolo multidispositivo.

- **Ideal para:** flujos visuales con n8n, CRM y varios bots
- **Coste:** gratis si se autoaloja; el servidor corre por tu cuenta
- **Ventaja:** más capa de integración que una librería pura

### Baileys

[Baileys](https://github.com/WhiskeySockets/Baileys) es una librería TypeScript que implementa directamente el protocolo de WhatsApp Web multidispositivo mediante WebSocket, sin automatizar un navegador.

- **Ideal para:** construir una integración totalmente a medida
- **Coste:** open source; requiere desarrollo y mantenimiento
- **Ventaja:** ligera y con mucho control

### whatsapp-web.js

[whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js) controla WhatsApp Web mediante Puppeteer. El agente usa la sesión del navegador como un dispositivo vinculado.

- **Ideal para:** proyectos Node.js y prototipos rápidos
- **Coste:** open source; requiere servidor y mantener Chrome/Puppeteer
- **Ventaja:** API conocida y ecosistema amplio

### whatsapp-mcp

[whatsapp-mcp](https://github.com/lharries/whatsapp-mcp) es un servidor MCP local que conecta asistentes compatibles con MCP, como Claude, con WhatsApp. Usa un puente local para buscar contactos, leer conversaciones y enviar mensajes.

- **Ideal para:** dar acceso directo a WhatsApp a un agente de escritorio
- **Coste:** open source y local
- **Ventaja:** el agente lo usa como una herramienta MCP, sin desarrollar toda la capa de conexión

## Riesgo real de bloqueo

Todas estas alternativas dependen de clientes no oficiales o automatización de WhatsApp Web. Por tanto, **pueden incumplir los términos de Meta y provocar restricciones o el bloqueo del número**. Durante 2025 y 2026 se han reportado oleadas de baneos asociadas a herramientas no oficiales.

El riesgo aumenta especialmente con:

- envíos masivos o repetitivos
- picos de velocidad que una persona no podría mantener
- mensajes a personas que no esperan el contacto
- muchas sesiones, reconexiones o dispositivos
- patrones idénticos de texto y automatización continua

Mantener un ritmo humano, volumen bajo y conversaciones con contactos que esperan el mensaje reduce el riesgo, pero **ninguna herramienta es a prueba de baneos**. No conviene vincular una automatización experimental al número principal del negocio ni a un número cuya pérdida sea crítica.

Comparativa de librerías: [Best Open-Source WhatsApp Libraries (2026 Guide)](https://whatsapp.checkleaked.cc/blog/best-open-source-whatsapp-libraries)

## Elección rápida

- Quieres una API lista para Docker: **WAHA**
- Quieres n8n, bots y flujos de negocio: **Evolution API**
- Quieres programarlo a medida sin navegador: **Baileys**
- Prefieres automatizar WhatsApp Web desde Node.js: **whatsapp-web.js**
- Quieres conectarlo directamente a un agente por MCP: **whatsapp-mcp**

Relacionado: [[Dify]], [[AnythingLLM]], [[Truco HAR → API MCP]], [[Cloudflare Agentic Inbox]]

# #agente #opensource #productividad #skills
