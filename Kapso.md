# Kapso

**Kapso** ([kapso.ai](https://kapso.ai)) es **WhatsApp oficial para developers** (Meta Business Partner): la vía sin pelearte con las devtools de Meta para meter WhatsApp en tu producto, tus agentes o tu n8n. 2.000 mensajes gratis/mes + $2 en créditos IA, sin tarjeta. Según su web, 30.000+ developers la usan. Tutorial viral de [@andresmatte](https://x.com/andresmatte) (24.5k views): WhatsApp oficial → n8n en 3 minutos.

## Piezas

- **Nodo oficial verificado en n8n** (`@kapso/n8n-nodes-kapso`): trigger `whatsapp.message.received` + enviar texto/templates/payloads raw + marcar leído. Sin instalar nada si tu n8n muestra nodos verificados
- **CLI** (`npm install -g @kapso/cli`): números, mensajes, templates, webhooks, conversaciones — todo desde terminal, con `--output json` para agentes
- **MCP server**: tu agente opera tus números sin shell
- **Chat SDK** (`@kapso/chat-adapter`): agentes WhatsApp con threads, botones y media
- **Plugins**: OpenClaw (`@kapso/openclaw-whatsapp`) y **Hermes** (`gokapso/hermes-agent-plugin`: `hermes kapso setup` te monta CLI + webhook)
- **Multi-tenant**: setup links para que tus clientes conecten su número (con números US incluidos) — hecho para SaaS y agencias
- **Plataforma web**: sandbox con número de prueba, webhooks en tiempo real, logs de API, WhatsApp Flows (mini-apps: formularios, reservas, catálogos), Inbox de equipo, Workflows visuales con 2.700+ apps, Broadcasts y Functions (JS serverless)

## Vs la nota de WhatsApp no oficial

Todo lo de [[WhatsApp personal para agentes de IA]] (Baileys, Evolution, WAHA…) vive con riesgo de baneo por usar clientes no oficiales. Kapso va por **Cloud API oficial**: sin los riesgos específicos del cliente no oficial, pero sujeto a las políticas de Meta, permisos, calidad de mensajes y costes vigentes. La API oficial no garantiza inmunidad a restricciones.

## MCP operativo y permisos por proyecto

El [MCP de WhatsApp](https://docs.kapso.ai/docs/whatsapp/mcp) conecta agentes sin acceso a shell con `https://api.kapso.ai/mcp`. No confundirlo con el MCP de documentación, que solo sirve para consultar páginas públicas.

- Permite operar números, mensajes, conversaciones, plantillas y webhooks. El vídeo del [lanzamiento de mayo](https://x.com/andresmatte/status/2057178931258601809) muestra crear un enlace de alta y continuar la configuración en navegador: pedir un número no elimina el onboarding.
- Inicio de sesión en navegador: seleccionar proyecto y permisos, con solo lectura por defecto y opciones personalizadas. Una API key concede acceso al proyecto completo según la documentación.
- Envío de mensajes, broadcasts, borrado y ejecución tienen permisos distintos. Dar acceso al inbox no autoriza campañas. Las conexiones antiguas pueden conservar acceso completo hasta reconectar; revisar las autorizaciones al migrar.
- Antes de usarlo, decidir qué número/proyecto puede operar el agente, quién puede escribirle, qué se conserva y cómo se revoca. Los permisos técnicos no sustituyen el consentimiento para contactar a personas.

La [web actual](https://kapso.com) distingue sandbox, número gestionado por Kapso y conexión de números del cliente. No trasladar a cualquier país o cuenta una promesa universal de número prevalidado. CLI y MCP son dos rutas para la misma plataforma.

## Recursos

- Web y docs: [kapso.ai](https://kapso.ai) · [docs.kapso.ai](https://docs.kapso.ai/docs/whatsapp/n8n) (n8n, CLI, MCP, Hermes)
- Tutorial: [@andresmatte en X](https://x.com/andresmatte)

## Relacionado

- Vía no oficial (con riesgo): [[WhatsApp personal para agentes de IA]]
- Competidores relay: [[Zernio]] (ya con WhatsApp Business API), [[Resender]] (WhatsApp en waitlist)
- Automatizar encima: [[Rerun]] (agentes que pilotan negocio)

# #agente #marketing #web
