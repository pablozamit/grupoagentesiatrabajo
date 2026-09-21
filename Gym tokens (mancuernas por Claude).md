# Gym tokens (mancuernas por Claude)

**Experimento de Agustín Rodríguez** ([@agustin_prod](https://x.com/agustin_prod), 48.9k views): una cámara barata conectada a Claude Code que **convierte cada serie de bíceps en 4M de tokens** — premio: no te deja trabajar hasta que entrenas. Economía de fichas aplicada a uno mismo.

## El sistema (filosofía: pasivo + mínima IA)

- Sin botones: no hay que acordarse de activar nada; el sistema detecta, cuenta y anuncia por voz
- **MediaPipe one-shot** resolvió el 90% del conteo y la pose "como magia"; lo difícil fue la fiabilidad (no contar estiramientos, no perder reps, no confundir press con curl)
- Dataset propio: **14 clips** con ejercicios y reps anotadas a mano → clasifica ejercicio + reps en real time, y **en caso de duda fallback a [[Jev (TypeSafe)]] como clasificador (prácticamente gratis)** — el patrón juez, otra vez
- CPU: segmenta a **1 fps** solo para saber si hay alguien; a ritmo completo solo con movimiento (el MacBook ni se entera)
- El peso se grita en alto ("10kg"): el micro se abre solo durante la serie y **whisper.cpp en local** transcribe (privacidad por diseño)
- Voces pre-grabadas con el MCP de Magnific + ElevenLabs; muñeco animado por ejercicio en el panel

## El incentivo (lo brillante)

- Un **hook de UserPromptSubmit bloquea enviar mensajes si no hay saldo**: sin serie no hay trabajo
- Cada serie va a **sqlite** y a las 20:00 el día se publica vía API en **Strava** (si no está en Strava, no cuenta)
- Coste total: 30€ de cámara + subs ChatGPT 20$ + un poco de Opus

## Matices honestos

- Los "4M por serie" solo salen a cuenta con **tarifa plana** (coste marginal cero); a precio API sería ruinoso — el diseño lo sabe y por eso usa MediaPipe + Jev en vez de frontier para todo
- Las abdominales no las entendió: el sistema dice sus límites
- Cámara en casa = dato sensible: lo salva que el pipeline es local (whisper, MediaPipe, sqlite), pero el hook vive acoplado a Claude Code

## Relacionado

- El patrón juez: [[Jev (TypeSafe)]] (fallback casi gratis)
- Hooks que mandan: [[Skill Recorder]], [[Blume]]
- Accountability pública: [[#gamificacion]] (Strava como testigo, saldo como depósito)
- Voz local: [[Quill]] (whisper), [[Fish Audio S2.1 Pro]]

# #gamificacion #vibecoding #productividad