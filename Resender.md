# Resender

**Resender** ([resender.dev](https://resender.dev)) es una **API relay developer-first para mensajes**: conectas la página/cuenta del cliente, apuntas tu webhook y tus agentes o automatizaciones reciben y responden DMs y comentarios. De Lori ([@lornasuriano](https://x.com/lornasuriano)). Bootstrapped, sin free tier de momento (etapa de feedback). 335.7k views en el anuncio.

## Estado por canal

- **Messenger**: funcionando (producto actual de la web)
- **Instagram** (DMs + comentarios): lanzado según el anuncio — la web aún lo lista como "en trabajo" junto a WhatsApp, así que verifica disponibilidad antes de construir encima
- **WhatsApp**: en desarrollo, con [waitlist](https://resender.dev/waitlist) (reemplazaría a Twilio para este caso)

```bash
# responder es un POST
curl -X POST https://resender.dev/api/meta/send \
  -H "Authorization: Bearer pk_live_..." \
  -d '{"pageId":"...","recipientId":"...","reply":"¡Nos vemos hoy!"}'
```

## Precios y debate

Starter/Pro ($25/mes Pro: 100k mensajes, 5 páginas). En las respuestas piden free tier estilo Resend (1.000 msg/mes) y citan a **[[Zernio]]** como competidor ("los come crudos" en precio) — la fundadora responde que el free tier llegará tras la etapa de feedback.

## Recursos

- Web y docs: [resender.dev](https://resender.dev)
- Anuncio: [@lornasuriano en X](https://x.com/lornasuriano)

## Relacionado

- Competidor directo: [[Zernio]] (API unificada social + WhatsApp Business API ya lanzada)
- WhatsApp para agentes (pendiente aquí): [[WhatsApp personal para agentes de IA]]
- Email para agentes: [[Atomic Mail]], [[Cloudflare Agentic Inbox]]

# #agente #marketing #web