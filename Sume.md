# Sume

**Sume** ([sume.com](https://www.sume.com/)) es una plataforma de generación de vídeo, imagen y audio con IA que se presenta como "plataforma de vídeo IA con 0% de markup": agrega los principales modelos de vídeo e imagen (Seedance de ByteDance, Kling, Veo, Nano Banana de Google, Grok Imagine, Wan, Higgsfield) y los cobra **al precio del proveedor, sin margen**. Es un producto de Sume Labs, una startup de San Francisco fundada en 2026 por David Im (CEO) y Chase Huh.

## Cómo se paga: saldo, no suscripción

- No hay suscripción: se añade saldo ("top-up") desde 5 USD, cada recarga dura **365 días** y Sume paga la comisión de la tarjeta (una recarga de 50 USD son 50 USD de saldo).
- Todo (Studio, el agente, la API, la CLI y el MCP) gasta del **mismo saldo en dólares** del workspace.
- El precio de cada trabajo se reserva al enviarlo y se liquida al terminar; **si una generación falla, se devuelve el saldo**.
- El precio de cada modelo es por segundo de vídeo o por imagen y figura en su catálogo público. Ejemplos de su página de precios (noviembre 2026): Seedance 2.5 a 480p, 0,1028 USD/segundo (~0,41 USD por clip de 4 s); Nano Banana 2.1, 0,0336 USD/imagen. Los precios son variables y conviene comprobarlos en la web antes de calcular costes.
- La concurrencia depende de lo recargado: 25 USD en 28 días permite 10 generaciones a la vez; 100 USD, 20; 1.000 USD, 40.

## Qué incluye

- **Studio (web)**: generación de imagen, vídeo, audio y música desde un prompt; Remix (clonar un vídeo manteniendo el movimiento y cambiando personas u objetos), avatares parlantes, subtítulos, face swap, lipsync, doblaje a otros idiomas y "AI Influencer".
- **Sume Agent**: un agente que lleva el flujo completo (producto, guion, presentador, voz y montaje en un mismo hilo) y devuelve "un programa terminado, no un clip". Los flujos que se estabilizan se convierten en **Formats**, plantillas que se pueden llamar por API.
- **Modelos propios**: además de agregar modelos de terceros, Sume cobra sus productos propios según su tarifa: Avatar 1.0 (publicado en julio de 2026 como "sistema de orquestación multiagente empaquetado como un único modelo de avatar"), Image 1.0 y Video 1.0, más las herramientas de medios y el render de la línea de tiempo.
- **API, CLI y MCP**: la API expone el catálogo completo (`GET /v1/catalog`) con tarifas medidas; el servidor MCP remoto con inicio de sesión OAuth funciona con Claude, ChatGPT, Claude Code, Codex, Cursor o Grok, permite preguntar el precio de una generación antes de ejecutarla (`dry_run`) y tiene un permiso separado de "crear y gastar créditos" que se puede dejar desactivado para acceso de solo lectura.

## Caveats

- El "0% de markup" y las comparaciones ("más barato que Higgsfield") son afirmaciones de marketing de la propia empresa; los precios de los proveedores cambian y Sume actualiza su catálogo en consecuencia.
- Empresa muy reciente (2026), con tracción y casos publicados por ella misma; no hay histórico largo que evaluar.
- Las recargas no son reembolsables salvo que la ley o Sume lo indiquen (según sus términos).

## Enlaces

- **Web:** [sume.com](https://www.sume.com/)
- **Precios:** [sume.com/pricing](https://www.sume.com/pricing)
- **Facturación (docs):** [sume.com/docs/billing](https://www.sume.com/docs/billing)
- **MCP:** [sume.com/assets/mcp](https://www.sume.com/assets/mcp)
- **API:** [sume.com/sume-api](https://www.sume.com/sume-api)
- **Avatar 1.0 (blog):** [sume.com/blog/introducing-avatar-1](https://www.sume.com/blog/introducing-avatar-1)

Relacionado: [[video-use]], [[LTX Trainer]], [[OpenCut]], [[HyperFrames]]

# #video #agente #ia
