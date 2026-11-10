# REA-Video

**REA-Video** ([github.com/JuneYaooo/rea-video](https://github.com/JuneYaooo/rea-video)) es una herramienta open source (Apache-2.0) de ingeniería inversa de vídeo para agentes: analiza un vídeo plano a plano y determina si cada plano está filmado, generado con IA o hecho con código, aportando la evidencia, y produce un plan de réplica (qué grabar, qué generar y qué programar). Funciona como CLI y como skill en Claude Code, Codex u otros agentes; requiere ffmpeg y Python 3.10 o superior. Web oficial: [reavideo.ai](https://www.reavideo.ai/).

## Qué entrega

- Un resumen de una línea (p. ej. «41% vídeo IA + 59% UI en código, 8 s de grabación de pantalla real, música de librería a 122 BPM»).
- Un plan de remake dividido en qué filmar, qué generar y qué codificar.
- Un `report.html` con frames por plano, evidencia, prompts, notas de cámara e iluminación, y el desglose de audio.
- Opcionalmente se conecta un modelo con visión (Gemini o Doubao) para afinar la clasificación y obtener un prompt por plano; sin él, el agente revisa por sí mismo los planos dudosos si puede ver imágenes.

## Contexto

El repositorio ronda las 6.000 estrellas (noviembre 2026) y se creó el 29 de octubre de 2026. La difundió un post de Riley Brown en X (10-nov-2026, hora española) que la describe como la skill que «descarga un vídeo de YouTube y analiza cada fotograma y la relación entre ellos para extraer el estilo de edición»; cuenta haberla probado con un vídeo de Kurzgesagt y reflexiona sobre usar vídeos descompuestos así para entrenar modelos. Esa lectura es suya: la herramienta se presenta de forma más amplia (procedencia por plano + plan de réplica).

No confundir con [[REA (Reverse Engineer Anything)]], que es ingeniería inversa de software.

## Enlaces

- **GitHub:** [github.com/JuneYaooo/rea-video](https://github.com/JuneYaooo/rea-video)
- **Web:** [reavideo.ai](https://www.reavideo.ai/)
- **Post de X:** [x.com/rileybrown/status/2119935865933725888](https://x.com/rileybrown/status/2119935865933725888)

Relacionado: [[Claude Video]], [[ZCode Video plugins]], [[REA (Reverse Engineer Anything)]]

# #video #ia #opensource #skills
