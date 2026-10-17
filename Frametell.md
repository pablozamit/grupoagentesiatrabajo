# Frametell

**Frametell** (帧言, *zhēn yán*) es una herramienta open source que convierte tus ideas, notas, documentos, PDFs, diapositivas e imágenes en **vídeos explicativos narrados** ("explainer videos") con la ayuda de un **agente director de IA**. Está hecha por [Sitor AI](https://sitor.ai) y su código está en [sitor-ai/frametell](https://github.com/sitor-ai/frametell). Se difundió desde la cuenta de [@sanyuan0704](https://x.com/sanyuan0704/status/2110930115249209354) (15 oct 2026).

## Qué hace

- **Una frase basta para empezar** (por ejemplo "explica el principio de incertidumbre"), o le das material: notas, documentos, PDFs, diapositivas e imágenes.
- Un **agente director** primero propone un **storyboard** (guion gráfico) que tú apruebas o editas: no se dibuja nada hasta que das el visto bueno.
- Después **escribe la narración, la locuta, dibuja cada página y revisa su propio trabajo**.
- El resultado es un **vídeo de 1080p con subtítulos** y notas de publicación. Cada página se verifica con *lint* y capturas ("checks its own work").
- Está pensado para **creadores de contenido** que explican historia, ciencia, tecnología, inversión, psicología o libros sin aprender edición de vídeo.

## Cómo funciona (paso a paso)

| Paso | Qué ocurre |
|---|---|
| 1. Idea o material | Escribes qué quieres explicar o sueltas un archivo (documento, PDF, slide deck, imágenes, Markdown) |
| 2. Storyboard | El director lo convierte en páginas y beats; lo apruebas o editas |
| 3. Narración y voz | Escribe el guion y lo locuta con ElevenLabs (o Volcengine TTS para chino) |
| 4. Páginas | Dibuja cada página en el estilo elegido y la comprueba con lint + capturas |
| 5. Película | Revisión final y render a MP4 1080p con subtítulos |

Estilos incluidos: `warm-story`, `study`, `chalkboard`, `whiteboard`, `tech-dark`.

## Datos y atribución

- **Estrellas**: GitHub verificado el 17 oct 2026, **203 ⭐** y 42 forks (TypeScript, Electron).
- **Licencia**: AGPL-3.0. Licencia comercial disponible (contacto en el repo).
- **Modelos**: funciona con **cualquier modelo** (Anthropic, OpenAI, Google, DeepSeek, OpenRouter, o cualquier endpoint compatible con OpenAI/Anthropic) y es **local-first**: tus materiales y claves de API se quedan en tu ordenador.
- La promesa comercial del tuit —"una frase dentro, una película de 1080p fuera"— es **del anunciante**; el propio README aporta un ejemplo real de película de 72 s hecha en ~12:52 min por ~1,59 $.
- La app de escritorio solo está para **macOS (Apple Silicon)**; en Windows e Intel Mac se ejecuta desde el código fuente (Node 22.19+, pnpm y Chrome/Edge/Chromium instalados; FFmpeg viene incluido).

## Relacionado

- [[El vídeo es código]] · [[HyperFrames]] — vídeo generado por y para agentes
- [[OpenDesign]] · [[OpenMontage]] — edición y producción de vídeo con IA
- [[Vugola]] · [[Screenwriting Skills]] — guion y montaje en pipelines con agentes
- [[MoneyPrinterTurbo]] · [[Fish Audio S2.1 Pro]] — otra pieza de la cadena de vídeo + voz
- [[Argil Director]] — de brief a storyboard y película (comercial, por créditos)

# #video #agente #opensource
