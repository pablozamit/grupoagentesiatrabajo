# Tesseract

**Tesseract** ([mirage.app/tesseract](https://mirage.app/tesseract), de Mirage/Captions, lanzado el 22-sep-2026) es una **suite creativa de video construida para agentes**: edición, motion graphics, compositing y sonido en un proyecto editable nativo — keyframes, adjustment layers, composiciones, timing y sonido como primitivas, no como HTML/React traducido. "Premiere y After Effects, reconstruidos para agentes".

## Cómo funciona

- Motor local **gratuito** (macOS, Windows **y Linux**; agentes hosteados como ChatGPT Mobile corren el engine en su entorno): preview y render en tu máquina, sin cuenta Captions ni suscripción Adobe (tu agente va aparte)
- Plugin ChatGPT + skills para Claude (+ páginas dedicadas para **Muse, Grok Bot e Instinct**): le das footage + brief, el agente monta, previsualiza, revisa y renderiza
- Proyecto siempre editable: cambia un título o un keyframe sin rehacer el video; pídele que te construya **tu propio editor** (timing, tipografía, color)
- **Export 4K a 60 fps** (no inventa detalle donde no lo hay); guía de prompts para música, storyboards y video editable
- Repo y setup: [github.com/mirage-hq/Tesseract](https://github.com/mirage-hq/Tesseract)

## Límites

- Necesita agente con acceso a archivos y tools locales (un chat solo-navegador no basta)
- No genera footage ni avatares: edita tu material y crea motion

## Conversión con Premiere Pro y After Effects

Los [conversores de proyectos](https://mirage.app/tesseract/converters/compatibility) permiten importar `.prproj` o `.aep` a `.tsrct` y exportar un proyecto Adobe nuevo después de editarlo con el agente. El código de los conversores es MIT. **El soporte es parcial y la exportación a After Effects es experimental**: no promete una ida y vuelta idéntica.

- Conservar proyecto original, medios y fuentes accesibles. La conversión no recoge ni transcodifica automáticamente todos los archivos.
- Seleccionar la secuencia o composición que se va a convertir; no asumir que preserva todo el proyecto.
- Revisar capas, texto, keyframes, máscaras, efectos, audio y tiempos frente a un render de referencia. Algunas funciones se aproximan, se omiten o se rechazan.
- After Effects: no se garantiza compatibilidad completa de expresiones, plugins externos, cámaras o luces.
- La exportación a Premiere admite actualmente 23.976, 24, 25, 29.97, 30 y 59.94 FPS; rechaza 50 y 60 FPS. Eso es distinto del render de vídeo Tesseract a 60 FPS.
- Un MP4 no contiene las capas editables originales. No hay conversión directa Premiere↔After Effects: el intercambio pasa por Tesseract.

La novedad se difundió en [el post de Santi del 6-oct](https://x.com/santtiagom_/status/2107511645815672952), que cita una demo de Mirage sin narración. Su ventaja es trabajar sobre primitivas de edición, no automatizar clics en una interfaz humana; las diferencias visuales se deben comprobar en la aplicación de destino.

## Relacionado

- Video programático: [[HyperFrames]] (HTML→MP4), [[Open Design]] (HTML Video)
- Edición conversacional: [[VibeTube]], [[El vídeo es código]], [[Reelbench skills]]
- Motion por chat: [[Dora Studio (Motion Magic)]]

# #video #agente #contenido
