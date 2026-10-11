# Maillayer

**Maillayer** es una plataforma de email marketing y correo transaccional que se instala en tu servidor. La [web oficial](https://maillayer.com) vende una licencia de pago único y utiliza un proveedor externo para enviar: Amazon SES, SendGrid, Mailgun, Postmark, Cloudflare Email o SMTP.

## Qué incluye

- Campañas con editor visual o HTML, segmentos por etiquetas y estadísticas de aperturas y clics.
- Secuencias de emails con retrasos configurables, contactos, formularios alojados o insertados en tu web.
- API REST para emails transaccionales, plantillas y eventos de entrega.
- Integraciones con Stripe, Firebase Auth, Supabase, Google Sheets, Airtable y webhooks.
- Varias marcas y roles de equipo. Según su documentación comercial, funciona en un contenedor con SQLite, cola y cron, sin Redis ni PostgreSQL.

## Pago único no significa envío gratis

El anuncio de Toolfolio dice "Send emails forever…without subscription". Lo verificable es que **Maillayer no cobra una suscripción propia**: la web mostraba 79 USD en oferta frente a 149 USD, pago único, con actualizaciones de por vida y hasta 10 dominios (consulta del 11 de octubre de 2026). La oferta puede cambiar.

El servidor y el proveedor de envío se pagan aparte. "Emails ilimitados" describe la licencia del software, no una garantía de capacidad ilimitada o coste cero del proveedor. La demo muestra la necesidad de activar la licencia antes de enviar.

La web documenta SPF, DKIM y DMARC por proveedor, gestión de rebotes y quejas. Instalar la aplicación no garantiza que los mensajes lleguen a la bandeja de entrada: siguen importando el consentimiento, la calidad de la lista y la reputación del dominio. Ver [[Cold Email]], [[MillionVerifier]] y [[BounceBan]].

## Recursos

- Producto y condiciones publicadas: [maillayer.com](https://maillayer.com).
- Presentación en Toolfolio: [Self-hosted email marketing without subscriptions](https://toolfolio.io/blog/self-hosted-email-marketing-without-subscriptions-featuring-a-one-time-purchase).
- Difusión: [Toolfolio en X](https://x.com/toolfolio/status/2060722418461893095), 30 de mayo de 2026. Vídeo de interfaz sin pista de audio: instalación en Railway, proveedor de envío, campañas, secuencias, API e integraciones.

## Relacionado

- [[Cold Email]]
- [[MillionVerifier]]
- [[BounceBan]]
- [[Marketing Skills]]

# #contenido #marketing #hosting
