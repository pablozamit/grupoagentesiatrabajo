# Fable 5.2 Motion Playbook (flxrnc)

Guía de Florence ([@flxrnc](https://x.com/flxrnc/status/2120207374250049675), 10-nov-2026) para dirigir películas y loops de motion graphics con [[Claude Fable 5.2]]: un archivo HTML autocontenido con three.js, un navegador y prompts, sin After Effects. Son las lecciones del autor tras 40 piezas; las cifras de terceros (Artificial Analysis, Edwards, Mollick) van según las cita el artículo.

## El contrato que hace al agente fiable

Toda pieza expone `renderAt(t)`: dibuja exactamente el instante t como función pura (sin relojes, sin estado acumulado), así el agente puede renderizar cualquier fotograma suelto, revisarlo y corregirlo. El render se hace fotograma a fotograma con Chromium headless en GPU volcando a FFmpeg (nunca grabando pantalla), frames 0 a N-1 para que el loop no repita el primer frame.

## Las 9 lecciones

1. **Esfuerzo: High, no Max.** Max cuesta unas 3 veces más y no es fiablemente mejor (en el ejemplo citado agotó sus 128.000 tokens de thinking sin dibujar nada). Iterar en Medium, construir en High; el esfuerzo se puede cambiar a mitad de conversación.
2. **Números en vez de adjetivos.** "Premium" no llega; `roughness 0.38`, `3200 K`, `35 mm`, `cubic-bezier(0.16, 1, 0.3, 1)` sí. El brief tipo: sujeto, tiempo, paleta hex, tipografía, planos, easing, holds, prohibidos, QA, loop.
3. **Springs: el damping ratio decide el aterrizaje.** 1.0 sin rebote (UI, texto), 0.8 un rebote (productos, logos), 0.5 dos rebotes (mascotas, comedia). Todo spring como función cerrada de t, nunca integración fotograma a fotograma.
4. **Motion QA: los stills mienten.** Un modelo que revisa capturas aprueba una película congelada. Medir movimiento: `freezedetect` de FFmpeg, gráfico de cambio fotograma a fotograma, anchura mínima del héroe en píxeles por plano, chequeo de costura del loop y de seek (frame 300 en frío = tras frame 299). Una ronda de correcciones sobre stills antes de cualquier render completo, y recortes entre elementos eliminados por diseño (caminos que no se cruzan). Pulsar play uno mismo al final.
5. **Acabado: escribir el timing primero y definir "hecho".** Un `timing.json` como reloj maestro del que se leen saltos, cortes, cámara y sonido (cada sonido 1 frame después de su imagen). Bloque "finishing work" para que no cierre la tarea antes de tiempo: solo se detiene cuando el MP4 completo renderiza y pasa todos los QA numerados.
6. **Estilo de prompt: menos reglas, mejores.** Fable sigue las reglas al pie de la letra; los "NEVER" heredados y los presupuestos de tokens escritos en el prompt salen peor. Nombrar los pasos exactos que no necesitan aprobación funciona mejor que un "actúa libremente".
7. **Blender por script.** Fable puede manejar Blender headless (`blender -b --factory-startup -P costume.py`), renderizar una hoja de vistas, mirarla y corregir; exporta un GLB que carga three.js. Alternativa con clics: [[Blender MCP]] y [[Blender Skills (EL4CTEO)]].
8. **Equipos de agentes: quien revisa no construye.** Un agente por departamento (score, layout, animación, look) y un revisor independiente que intenta romper cada plano con mediciones. Límites escritos como números ("como mucho 2 procesos"), briefs distintos por equipo y reglas compartidas cortas (el caso Portals citado creció a 204 secciones y la producción se hundió hasta recortarlas).
9. **Límites y coste: iterar en Medium, construir en High.** El uso de Fable se agota rápido; cifras reportadas en el artículo: explainer de motion graphics unos 25 USD, juego nocturno de 12 niveles unos 300 USD, FPS desde cero unos 550 USD. Corregir sobre stills, mantener caliente la caché de prompt y fijar `--model` en los scripts.

## Problemas típicos y su frase de corrección

- Héroe diminuto: "al menos 170 px de ancho a 1080p en cada plano principal; mídelo y reporta los números".
- Gráficos congelados con checks en verde: freezedetect sobre un borrador a 30 fps y gráfico de cambio por segundo.
- El loop tartamudea: frames 0 a N-1, y el frame N-1 debe encadenar con el 0 en pose, velocidad, cámara y luz.
- Zooms para fingir energía: prohibirlos; cortar al compás y sostener los buenos ángulos un beat entero.
- Texto cortado: cada palabra completamente dentro o completamente fuera del encuadre.

## Caja de herramientas citada

[[Remotion]], [[HyperFrames]], [[GSAP]] + gsap-skills, [[Three.js]], mcp-for-blender (ver [[Blender MCP]]), motion2code (reconstruye motion de referencia en SVG + GSAP y lo verifica fotograma a fotograma), chrome-devtools-mcp, [[Claude Video]], Mediabunny (vídeo en el navegador sin FFmpeg), librosa (detectar el beat) y faster-whisper (subtítulos). Comprobada por la autora el 10-nov-2026.

Relacionado: [[El vídeo es código]], [[launch-video-kit]], [[Stack de vídeo con agentes (Dumble)]].

#tipo/guia #tema/video/generacion #tema/programacion/desarrollo-con-ia
