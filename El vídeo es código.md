# El vídeo es código

**"El vídeo es código"** es un artículo de [Borja Perez](https://x.com/borjaperfra) que documenta su proceso completo para crear vídeos de producto con agentes de IA, usando **Remotion** (React renderizado a MP4 fotograma a fotograma). El resultado: un vídeo profesional de 88 segundos en menos de una hora, con 9 iteraciones.

## El concepto clave

> El vídeo es un programa. Si el vídeo es un programa, el agente puede cambiar cualquier frame, volver a renderizar, extraer ese fotograma y mirarlo. Puede medirlo. Las correcciones son quirúrgicas: quitar algo es borrar una entrada de un array.

## Pipeline completo

1. **Guion con IA** — DeepSeek ayudó a definir nombre de la feature, mensaje principal, posicionamiento y demostración. No vendas "RAG + chat", vende "Your knowledge is now chat"
2. **UI reconstruida en HTML/CSS** — No capturas de pantalla. El agente recrea la interfaz del producto para animarla, escalarla sin pixelarse y mover la cámara dentro. Técnica clave: muestrear colores píxel a píxel + grabar pantalla para que el modelo entienda interacciones
3. **Música** — Buscar en Pixabay ("minimal tech", "product launch"). El agente midió la energía del track por segundo y mapeó la historia encima
4. **Voz** — Kokoro (TTS) corriendo en Helmcode. Un archivo por línea, normalización de decibelios entre voz y música
5. **Iteración con el agente** — 9 iteraciones. Feedback → otra tarea → abrir VLC con el vídeo retocado

## Reglas de cámara que funcionaron

Tras 3 iteraciones de prueba y error:
- La cámara **aguanta quieta** y solo viaja 24 frames justo antes del siguiente encuadre
- Cada bloque **arranca en el encuadre donde acabó el anterior** — esto elimina la sensación de corte
- Ni cámara bailando con cada beat, ni cortes secos con saltos

## Lo medible > lo subjetivo

El agente no puede ver ni oír el vídeo, pero puede medir:
- **Arco de música** por segundo → mapear escenas al drop, silencio, clímax
- **Mezcla voz/música** con `volumedetect` por tramos
- **Alargar música** probando 3 estrategias (bucles, duplicar compases, empalmar en silencios)

## Stack técnico

- **Remotion** — React → MP4 fotograma a fotograma
- **GLM 5.2** corriendo en **Opencode** como agente de código
- **DeepSeek** (vía Helmcode) para guion y decisiones de producto
- **Kokoro** (Helmcode) para TTS
- **Pixabay** para música libre

## Resultado

El proceso completo llevó ~40 minutos de atención humana (mientras trabajaba en otros proyectos). Con un editor tradicional, llevaría días. Al final creó una **skill reutilizable** (`launch-video-kit`) para que el siguiente vídeo lleve la mitad de iteraciones.

## Relacionado

- [[HyperFrames]] — Alternativa a Remotion: genera vídeos desde HTML para agentes
- [[OpenMontage]] — Producción de video agentic open source (500+ skills)
- [[Claude Video]] — Skill para que Claude vea y analice videos
- [[product-launch-video]] — Skill de HyperFrames para vídeos de lanzamiento


## onetake: continuidad medida y licencia

[onetake](https://github.com/feitangyuan/onetake) es una skill para vídeos de lanzamiento/demo con cámara continua y elementos que se transforman entre beats. Incluye librería de movimiento, reconstrucción UI y scripts de render/verificación; requiere Python/Playwright, NumPy/SciPy/Pillow, ffmpeg y Node; voz añade dependencias. El «oracle» mide continuidad, no sustituye juicio visual ni garantiza calidad del mensaje.

El clip de 30s del hilo fue inspeccionado: transforma un prompt en calendario Dayline y después en anuncios/pantalla Frame. Es muestra de estilo, no prueba de tiempo de producción ni ausencia de errores en cualquier vídeo. Revisar frames, movimiento, texto y mezcla final.

El README declara PolyForm Noncommercial 1.0.0 y prohíbe uso comercial de edición gratuita. Código visible no equivale a licencia abierta permisiva para entregar trabajos a clientes. No copiar la implementación ni usarla en anuncios/productos sin comprobar permiso aplicable. Las críticas del hilo sobre licencia importan; no confundir con MIT. La página Pro ofrece licencia comercial aparte, sin verificar aquí precio ni comprarla.

Ver también: [[Claude Video]], [[HyperFrames]], [[OpenMontage]].

# #video #agente #contenido
