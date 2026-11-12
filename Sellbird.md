# Sellbird

[Sellbird](https://github.com/ethanplusai/sellbird) (antes Harvey) es una plataforma de outreach open source que corre en tu máquina con tu plan de Claude o ChatGPT: busca empresas que encajan con tu cliente, encuentra a quien decide, verifica su email, escribe un correo en frío personal para cada uno, lo envía y gestiona las respuestas. AGPL-3.0, Python 3.11+, ~5.243 ⭐. Versión hospedada en [sellbird.ai](https://sellbird.ai) (early access, con dominios de envío, buzones y warmup preparados).

## Cómo funciona

Pipeline que puedes correr de punta a punta o parar en cualquier paso:

- **Buscar empresas**: gratis en OpenStreetMap o en una fuente de pago a elegir; cada búsqueda de pago muestra su coste antes de ejecutarse.
- **Señales de compra**: lee la web de cada empresa buscando las señales que confirmaste (sin reserva online, anuncios activos, una vacante...), sin llamadas a modelos ni coste.
- **Quién decide**: localiza al dueño o responsable nombrado en las páginas de la empresa (máximo dos por empresa).
- **Verificar**: aprende el patrón de email de la empresa y verifica una dirección; cada una queda marcada verified/risky/guess/invalid y solo se envía a las entregables.
- **Escribir y enviar**: secuencia corta personal por persona, enviada desde tu buzón Gmail, Microsoft 365 o SMTP, dentro de tu límite diario y en su horario de oficina.
- **Respuestas**: lee cada respuesta, redacta contestación, aparta auto-respuestas, honra bajas al instante y te pasa lo que no debe responder solo.

Por defecto nada sale sin tu aprobación (bandeja de outbox). `sellbird export` da un CSV listo para sequenciador si solo quieres la lista.

## Sin factura de API

Piensa a través del CLI de Claude Code con un plan Claude Pro/Max, o de Codex con un plan ChatGPT: sin API key ni facturación por token, y se auto-limita para dejar sitio a tu propio trabajo. Quien ya corría Harvey conserva su configuración (mismo proyecto, nuevo nombre).

## Relacionado

- [[Warmbly]]

# #opensource #marketing
