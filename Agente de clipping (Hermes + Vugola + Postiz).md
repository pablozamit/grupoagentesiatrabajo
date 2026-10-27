# Agente de clipping (Hermes + Vugola + Postiz)

Guía de [@VadimStrizheus](https://x.com/VadimStrizheus/status/2056410757063950634) para montar con [[Hermes Agent]] un sistema que recorta vídeos largos en clips, los subtitula y los publica solo, todo disparado desde un mensaje de Telegram.

## La idea

Convertir vídeos largos (streamers, podcasts, nicho hustle/finance) en clips de 30-60 s con subtítulos, y publicarlos en IG, X, TikTok y YouTube. El negocio no es la edición sino el volumen: 5 clips al día, 4 plataformas y 3 cuentas dan 60 subidas diarias. El agente sustituye mano de obra, no criterio: el nicho, el hook y la voz a recortar siguen siendo decisión humana.

El artículo cita cifras del mercado del clipping (pagos por campaña, RPM y CPM por nicho). Son datos del autor, no verificados aquí; sirven de contexto, no de garantía de ingresos.

## El stack

- [[Vugola]]: recorta el vídeo largo, elige los mejores momentos y añade subtítulos.
- [[Postiz]]: programa y publica en todas las plataformas (X, TikTok, IG, YouTube, Threads, LinkedIn, Bluesky y más).
- [[Hermes Agent]]: el cerebro que orquesta el pipeline desde un mensaje.

## Montaje

- Claves de API: Vugola (`vug_sk_...`) y Postiz (`Settings > Developers > Public API`). Hermes es MIT y gratis.
- Vugola MCP en `~/.hermes/config.yaml` (`npx -y vugola-mcp@1.3.1`), que expone 8 herramientas: `clip_video`, `get_clip_status`, `caption_video`, `schedule_post`, `list_scheduled_posts`, `cancel_scheduled_post`, `download_clip` y `get_credits`.
- Postiz MCP y su skill (`npx skills add gitroomhq/postiz-agent`); comprobar integraciones conectadas con `postiz integrations:list`.
- Conectar Hermes a Telegram (`hermes gateway add telegram`) y lanzar todo con una frase: "Recorta el último podcast, saca los 5 mejores momentos y prográmalos en TikTok, Reels, Shorts y X a las 9:00, 12:00 y 18:00 durante 3 días".

## Playbook de 30 días (resumen)

Semana 1: 3 clips al día en TikTok, Reels y Shorts, sin cambiar subtítulos, para ver en qué plataforma engancha el nicho. Semana 2: doblar en la que gane y abrir una segunda cuenta del mismo nicho con otro ángulo y otros horarios. Semana 3: añadir la capa de cobro (Whop Content Rewards, Vyro, Clipping.net). Semana 4: escalar a 3 cuentas x 5 clips x 4 plataformas o cambiar de nicho si sigue sin haber vistas.

## Matices

El artículo es contenido comercial (enlaza a Vugola y Postiz) y no prueba ingresos. Antes de automatizar hay que revisar derechos de uso de los vídeos, condiciones de las campañas de pago y límites/ToS de cada plataforma.

## Relacionado

- [[Vugola]], [[Postiz]], [[Hermes Agent]]
- Otros flujos de vídeo y clips: [[xurl]], [[Edición de vídeo con IA (10 repos open source)]], [[VibeTube]]

# #agente #video #contenido
