# launch-video-kit

[launch-video-kit](https://github.com/borjaperfra/launch-video-kit) (MIT, de Borja PF / [Helmcode](https://helmcode.com)) es un conjunto de **scripts de ffmpeg y helpers de Remotion** para producir vídeos de producto con agentes: locución TTS, música, subtítulos y cámara virtual. No es un framework ni una plantilla: son las piezas de fontanería que su autor extrajo tras hacer un vídeo de lanzamiento de 88 segundos (9 renders y 6 rondas de correcciones), documentado en [[El vídeo es código]]. Los scripts funcionan sueltos, sin instalar el repo; los helpers de `src/` se copian al proyecto Remotion.

## Qué incluye y qué aprendió el autor

| Pieza | Qué resuelve |
|---|---|
| `scripts/gen-voice.mjs` | Locución por líneas contra un endpoint TTS compatible con OpenAI (por defecto Helmcode, que sirve Kokoro), normalizada |
| `scripts/analyze-music.mjs` | BPM, fase, arco de energía y rejilla de compases de un track |
| `scripts/loop-music.mjs` | Alargar un track hasta la duración necesaria sin costura audible |
| `src/audio.ts` | Ducking de música bajo la voz, con criterio medible |
| `src/Subtitle.tsx` | Subtítulos legibles sobre una interfaz, para ver el vídeo sin sonido |
| `src/camera.ts` | Cámara virtual sobre una UI reconstruida en HTML |

- **Voz antes que montaje**: un archivo por línea (nunca una toma larga), normalizado con `loudnorm` y con silencios recortados; el script imprime la duración de cada línea en frames, y esa columna fija el montaje. Un TTS es habla, no respiración: suspiros o efectos se graban o sintetizan aparte.
- **Música**: mapear la historia al arco de energía del track (drop sobre el clímax, parte tranquila sobre la escena densa) y poner los cortes en compás. Para alargar, lo que funcionó no fue duplicar compases sino **cortar en los micro-silencios periódicos** del propio track (detectados con `silencedetect`): el problema no era la transición sino el salto de energía del arreglo. El script propone puntos de corte y verifica que cada costura queda casi en silencio (~-53 dB).
- **Ducking**: el criterio es objetivo: la voz sobre música debe medir aproximadamente lo mismo que la voz sola (`volumedetect` por tramos). Aviso del autor: un `base` por encima de ~0.85 clipea con tracks masterizados a 0 dB.
- **Subtítulos**: en redes el vídeo se ve en silencio, así que son el canal principal. Lo que funcionó: apagar el fondo con un degradado (32 % inferior del fotograma) y texto a 54 px en peso medio. `dur` es tiempo en pantalla, no duración de la voz; no subtitular lo que ya está escrito en pantalla.
- **Cámara**: se compone la UI en un espacio de diseño fijo y la cámara centra un punto a una escala (primeros planos sin tocar el layout, texto nítido a cualquier zoom). Tras descartar paneos continuos y cortes secos, lo que funcionó: cámara quieta casi todo el rato y **viajes de ~24 frames justo antes del siguiente encuadre**; cada escena empieza en el encuadre donde acabó la anterior.

## Verificación por medición

Un agente no puede ver ni oír el vídeo, así que el flujo se verifica midiendo: contact sheet de fotogramas clave con ffmpeg para revisión visual rápida, y `volumedetect` por tramos para la mezcla.

## Requisitos y uso con agentes

Node 20+, `ffmpeg` y `ffprobe` en el PATH, y una API TTS compatible con OpenAI para la voz. En `.claude/skills/launch-video-kit/` incluye una skill para Claude Code con el orden de trabajo y las reglas fáciles de saltarse; el README explica el porqué y la skill el procedimiento. Los `examples/` traen dos briefs reales usados en producción (Knowledge y un explainer sobre Revolut) como plantilla de brief: fijan tono y lo prohibido, no los segundos por escena.

## Fuentes

- [Repositorio y README](https://github.com/borjaperfra/launch-video-kit)

## Relacionado

- [[El vídeo es código]] — la metodología del mismo autor de la que sale este kit
- [[OpenMontage]] — sistema de producción de vídeo con agentes más amplio
- [[HyperFrames]] — alternativa a Remotion como motor de composición

#tipo/herramienta #tema/agentes #tema/video
