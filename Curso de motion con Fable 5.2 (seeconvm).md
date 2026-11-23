# Curso de motion con Fable 5.2 (seeconvm)

Curso de seeco ([@seeconvm](https://x.com/seeconvm/article/2122405510779375668), 16-nov-2026) para ir de nada instalado a un MP4 terminado con [[Claude Fable 5.2]]: 20 secciones con prompts completos, números y correcciones. La base conceptual solapa con el [[Fable 5.2 Motion Playbook (flxrnc)]] (contrato renderAt(t), timing.json como reloj maestro, freezedetect, héroe de 170 px mínimo); esta nota recoge lo que añade. Las cifras de coste y rendimiento son las que reporta la propia guía.

## Setup y control de gasto

- Fable 5.2 exige Claude Code v2.1.321+; el esfuerzo guardado antes se ignora hasta fijar uno con /effort; los scripts con `claude -p` heredan el modelo y facturan sin avisar: fijar `--model` en cada script. Para scripts, la variable `CLAUDE_CODE_EFFORT_LEVEL=high`.
- Dos rutas: la app de Claude (sin instalar nada, se graba la pantalla) o Claude Code (escribe el archivo, lo comprueba y renderiza el MP4 él solo).
- Esfuerzo con costes por tarea reportados por la guía: low unos 3 USD, medium unos 4, high unos 9, xhigh unos 15, max unos 27. Regla: iterar en Medium, construir en High; Max casi nunca para visuales (en el ejemplo citado agotó sus 128.000 tokens de thinking sin dibujar nada). Fast mode: hasta 2,5x más rápido al doble de precio. Para trabajos largos, planificar con Fable y construir con un modelo barato (Sonnet 5.5), o usar `advisorModel: "fable"` para que un modelo barato construya y Fable asesore.
- Mantener caliente la caché (misma carpeta y misma conversación larga) y fijar un presupuesto antes de empezar, con orden de parar y reportar al acercarse.

## Números de motion que el playbook no recogía

- Easings: entrada `cubic-bezier(0.16, 1, 0.3, 1)`; salida `cubic-bezier(0.7, 0, 0.84, 0)`, un 40-50% más corta; pop `cubic-bezier(0.34, 1.56, 0.64, 1)`.
- Tiempos: feedback de UI 100-200 ms; hero reveal 600-900 ms; stagger de letras 1 frame, palabras 60-120 ms, ítems 40-80 ms; el siguiente movimiento empieza al 30-50% del anterior.
- Squash y stretch: crouch 1.2x0.75, despegue 0.85x1.28, aterrizaje 1.25x0.75, conservando el volumen; follow-through: brazos 4 frames, colas y corbatas 6.
- Beat grid: frames por beat = fps x 60 / BPM.
- Cámara: 35 mm para la habitación, 50 mm para la acción, 85 mm para la cara; el foco sigue la profundidad real del héroe; un ángulo bueno aguanta un beat entero antes del corte; la última imagen es el último frame, sin línea de cierre.

## El brief de director

Estructura fija del prompt: WHAT (qué es y para quién), SIZE (tamaño, fps, loop o no), LOOK (colores hex exactos, fuente), TIMELINE (una línea por momento, con segundos), MOTION (frase fija: nada en línea recta a velocidad constante, entradas ease out, salidas ease in, cada rebote asienta en 0,4 s), BANS (los defaults que odias: orbes de brillo, degradados morados, fade-in en todo). Cada bloque cierra una decisión que si no tomaría el modelo.

## Render y exportación

- Script con Playwright que llama a `renderAt` por frame y vuelca a ffmpeg; para páginas sin `renderAt`, inyectar un reloj falso (performance.now, Date.now, requestAnimationFrame) para que ningún frame se caiga.
- Motion blur: renderizar 8-32 subframes por frame y promediarlos.
- Exportación para X: H.264 High, yuv420p, hasta 60 fps, audio AAC, faststart; sonido a -14 LUFS con true peak igual o por debajo de -2 dBTP medido después del encode AAC; límites de GIF en X: 15 MB, 1280x1080, 350 frames y 300 millones de píxeles totales.
- Música más baja de lo que parece necesario (la mayoría ve con el sonido bajo o quitado) y fundido de salida con afade.

## Follow-ups, QA y estilo de prompt

- Los follow-ups que funcionan nombran tiempo y número ("de 3 a 6 s, todo un 30% más lento"); cambiar 1-2 cosas por mensaje; para variantes, conservar el archivo y crear v2.html.
- QA adicional: contact sheet cada 0,25 s; para personajes, pedir animación esquelética y hacer que el agente analice el ciclo de paso fotograma a fotograma.
- Estilo de prompt según la guía de Anthropic que cita: "think less" no hace nada en Medium o superior (baja el esfuerzo en su lugar); el esfuerzo no cambia la longitud de la respuesta; los "never" heredados se acumulan y salen mal; un bloque "finishing work" recorta a la mitad las paradas tempranas; commitear sobre la marcha y bloquear el estilo con un style frame, porque al modelo le falta gusto para quitar (añade etiquetas y subheaders no pedidos).

## Material propio, formatos y equipos

- Los mejores resultados citados parten de material real adjunto: un PDF con notas y fotos de un lugar → película con audio; imágenes de estilo con la regla "pure js, no external assets"; planos 2D → walkthrough 3D navegable a escala (la guía cita un mercado de 5.000-10.000 USD por plano).
- Formatos: 16:9 1920x1080 (YouTube, X); 4:5 1080x1350 (el que más espacio ocupa en el feed de X); 9:16 1080x1920 (Reels, TikTok, Shorts); si vale uno para todas, 9:16 con el texto dentro de la zona segura 4:5.
- Equipos de agentes, caso citado: 471 mundos 3D con 28 equipos y unos 25.000 runs. Lecciones: briefs distintos por equipo (3 equipos construyeron lo mismo), los agentes optimizaron para el juez en vez de para el resultado, un reglamento de 204 secciones y 87.500 palabras hundió la producción a una docena al día y al recortarlo volvió a más de 30, y los límites escritos como números se cumplen ("como mucho 2 procesos").

Relacionado: [[Fable 5.2 Motion Playbook (flxrnc)]], [[Claude Fable 5.2]], [[El vídeo es código]].

#tipo/guia #tema/video/generacion
