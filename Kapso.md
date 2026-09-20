# Kapso

**Kapso** ([kapso.ai](https://kapso.ai)) es **WhatsApp oficial para developers** (Meta Business Partner): la vía sin pelearte con las devtools de Meta para meter WhatsApp en tu producto, tus agentes o tu n8n. 2.000 mensajes gratis/mes + $2 en créditos IA, sin tarjeta. Tutorial viral de [@andresmatte](https://x.com/andresmatte) (24.5k views): WhatsApp oficial → n8n en 3 minutos.

## Piezas

- **Nodo oficial verificado en n8n** (`@kapso/n8n-nodes-kapso`): trigger `whatsapp.message.received` + enviar texto/templates/payloads raw + marcar leído. Sin instalar nada si tu n8n muestra nodos verificados
- **CLI** (`npm install -g @kapso/cli`): números, mensajes, templates, webhooks, conversaciones — todo desde terminal, con `--output json` para agentes
- **MCP server**: tu agente opera tus números sin shell
- **Chat SDK** (`@kapso/chat-adapter`): agentes WhatsApp con threads, botones y media
- **Plugins**: OpenClaw (`@kapso/openclaw-whatsapp`) y **Hermes** (`gokapso/hermes-agent-plugin`: `hermes kapso setup` te monta CLI + webhook)
- **Multi-tenant**: setup links para que tus clientes conecten su número (con números US incluidos) — hecho para SaaS y agencias

## Vs la nota de WhatsApp no oficial

Todo lo de [[WhatsApp personal para agentes de IA]] (Baileys, Evolution, WAHA…) vive con riesgo de baneo por usar clientes no oficiales. Kapso va por **Cloud API oficial**: sin riesgo de baneo a cambio de pagar a Meta por mensaje + plan Kapso.

## Recursos

- Web y docs: [kapso.ai](https://kapso.ai) · [docs.kapso.ai](https://docs.kapso.ai/docs/whatsapp/n8n) (n8n, CLI, MCP, Hermes)
- Tutorial: [@andresmatte en X](https://x.com/andresmatte)

## Relacionado

- Vía no oficial (con riesgo): [[WhatsApp personal para agentes de IA]]
- Competidores relay: [[Zernio]] (ya con WhatsApp Business API), [[Resender]] (WhatsApp en waitlist)
- Automatizar encima: [[Rerun]] (agentes que pilotan negocio)

# #agente #marketing #web