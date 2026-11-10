# Formato cartoon 2.5D (curso de Dumble)

Curso completo de Dumble ([@Y0urDumble](https://x.com/Y0urDumble/status/2115164938884862375), 27-oct-2026) para replicar con Opus 5.5, Blender y skills open source el formato de los shorts virales de Ricks Clips: un cartoon de 65 segundos sobre una jarra de bronce (el sismógrafo de Zhang Heng, 132 d.C.) logró 27 millones de visualizaciones en 8 días, y el canal tiene más shorts del mismo formato en 13M, 10M y 10M. Aviso honesto del autor: no conoce el pipeline real del canal; el curso es la vía open source para construir el mismo formato.

## Anatomía del formato (2.5D)

- 1080x1920, 30 fps, 55-70 s; una historia real contada con una sola voz.
- Personajes 2D planos (cabezas redondas, ojos de punto, contornos gruesos) dentro de sets 3D iluminados como por un equipo de cine.
- Un plano nuevo por idea del guion (~cada 2 s); cámara lenta (push-in/dolly) con motivo, nunca deriva aleatoria.
- Subtítulos de 1-2 palabras, en negrita, centro-abajo; gancho en forma de pregunta.
- Por qué no parece «AI slop»: personajes deliberadamente simples + sets deliberadamente ricos, cada plano con razón, una voz humana y hechos verificables.

## Pipeline del curso

1. **Reglas de casa** en CLAUDE.md (formato, historia, look, prohibiciones, revisión antes de enseñar nada).
2. **Guion de 150-170 palabras** con `sources.md`: cada afirmación con fuente; línea 1 = gancho, giro ~segundo 40, cierre que paga el gancho.
3. **Shot list**: un plano por idea, 3-5 sets reutilizables; beats clave en números de frame, no en segundos.
4. **Sets en Blender vía MCP** en pasos BLOCK → LIGHT → DRESS, con la herramienta `look` para que el agente vea su propio trabajo (HDRIs de Poly Haven, CC0).
5. **Props protagonistas siempre en 3D** (con turntable de 6 ángulos antes de entrar al set).
6. **Personajes 2D como planos** en Blender (Import Images as Planes, shader Emit/Shadeless, sombra de contacto); caras por reemplazo (hojas de expresiones en SVG). Regla de actuación: cada movimiento empieza con una mirada; nada de bounce idle.
7. **Voz propia grabada** + Whisper con timestamps por palabra → subtítulos sincronizados; **earshot** (MCP open source) como oídos del agente para revisar la mezcla; cues de sonido anotados por frame.
8. **Bucle de revisión**: contact sheets (1 frame/segundo) + prueba a tamaño móvil, el agente como crítico («lista cada problema, arregla los 3 peores, repite»), re-render solo del rango afectado, ediciones acotadas por frames.
9. **Empaquetar como skill** (`cartoon-studio`) para que el siguiente episodio sea una orden.
10. **Plataforma**: tomar la gramática, nunca el contenido de otro canal; episodios originales (YouTube penaliza contenido masivo repetitivo); ojo con la etiqueta de contenido IA si algo puede parecer metraje real.

## Repositorios del curso (verificados a 10-nov-2026)

- [ahujasid/mcp-for-blender](https://github.com/ahujasid/mcp-for-blender) - control de Blender (~34k ⭐)
- [angrypenguinpng/blender-claymation-skill](https://github.com/angrypenguinpng/blender-claymation-skill) - claymation en Blender
- [LottieFiles/motion-design-skill](https://github.com/LottieFiles/motion-design-skill) - principios de motion design para agentes (~2.9k ⭐)
- [greensock/gsap-skills](https://github.com/greensock/gsap-skills) - skills oficiales de GSAP (~18k ⭐)
- [remotion-dev/skills](https://github.com/remotion-dev/skills) - montaje de vídeo en React (~6.8k ⭐)
- [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) - framework de vídeo en HTML (~82k ⭐)
- [JohnHeibel/ClaudeAnimationBase](https://github.com/JohnHeibel/ClaudeAnimationBase) - animación 2D pintada a mano con p5.js (~2.8k ⭐)
- [tuzhechen2005/opus-video-skills](https://github.com/tuzhechen2005/opus-video-skills) - skills de vídeo para Opus 5.5
- [Leonxlnx/earshot](https://github.com/Leonxlnx/earshot) - oído para agentes: escuchar, revisar y crear sonido, CPU-only (~4.4k ⭐)
- [openai/whisper](https://github.com/openai/whisper) - timestamps por palabra (~112k ⭐)
- [lemomo-ai/lemo-opuscar](https://github.com/lemomo-ai/lemo-opuscar) - estilos de cine hechos en código (~14k ⭐)
- [zhuyansen/awesome-claude-video-skills](https://github.com/zhuyansen/awesome-claude-video-skills) - lista curada de skills de vídeo (~1.9k ⭐)

## Enlaces

- **Curso (artículo de X):** [x.com/i/article/2115149367057256448](https://x.com/i/article/2115149367057256448)
- **Post:** [x.com/Y0urDumble/status/2115164938884862375](https://x.com/Y0urDumble/status/2115164938884862375)

Relacionado: [[Stack de vídeo con agentes (Dumble)]], [[Blender MCP]], [[HyperFrames]], [[cinecode]]

# #video #contenido #skills #3d
