# OpenMontage

[OpenMontage](https://github.com/calesthio/OpenMontage) es el **primer sistema de producción de video agentic open source** (AGPL-3.0, 50.9k ⭐). Convierte a tu asistente de código (Claude Code, Codex, Cursor, Copilot, Windsurf, OpenCode) en un **estudio de producción completo**: research, guion, generación de assets, edición, música, subtítulos y render final. Describes lo que quieres en lenguaje natural y el agente lo produce de principio a fin, con tu aprobación en cada decisión creativa.

> Diferencia clave: no es "animar un puñado de imágenes y llamarlo video". OpenMontage puede construir videos reales desde **footage libre** (Archive.org, NASA, Wikimedia, Pexels) y cortarlos en un timeline de verdad, sin depender de modelos de pago. Es un sistema de producción, no un generador de clips.

## Números

- **12 pipelines** de producción (animated explainer, animation, avatar spokesperson, cinematic, clip factory, documentary montage, hybrid, localization & dub, podcast repurpose, screen demo, talking head...)
- **100+ herramientas** de producción registradas (`tools/`)
- **60+ integraciones de proveedores** (video, imagen, TTS, música, análisis) detrás de una capa de selección puntuada
- **700+ skills** de agente y knowledge packs de producción (`skills/`)
- **8 etapas + 1 gate**: brief → research → proposal → script → scene plan → **THE GATE** → narración → música → compose → render

## Demos reales (con su coste)

| Video | Qué demuestra | Coste |
|---|---|---|
| **"SIGNAL FROM TOMORROW"** | Trailer sci-fi cinematográfico: concepto, guion, scene plan, clips Veo, soundtrack y composición Remotion | — |
| **"THE LAST BANANA"** | Short animado estilo Pixar (6 clips Kling v3 vía fal.ai + narración Chirp3 + piano libre + captions) | **$1.33** |
| **"Reimagine Your Universe"** | Film de transformación vertical (5 escenas generadas + HyperFrames) | ~$4 |
| **"Products Come to Life"** | Product film: stills hero aprobados, image-to-video, sonido y composición custom | — |
| **"How Salt Made History"** | Documental 100s con footage real + narración + motion graphics | — |
| **"One Prompt Built This Complete 3D World"** | Mundo 3D coherente y editable de 60s | — |

Cada video del [canal de YouTube](https://www.youtube.com/@OpenMontage) publica el prompt completo, pipeline, tools y coste para que puedas reproducirlo tú.

## OpenMontage Studio (la plataforma en la nube)

Además del repo open source, existe **OpenMontage Studio** en [openmontage.video](https://www.openmontage.video/) — la versión gestionada con sistema de **créditos** (CR) y la misma mecánica de producción. Está en **waitlist**. Funciona con Claude Code, Codex y OpenCode ("anywhere you vibe").

El flujo del Studio, con costes por etapa mostrados antes de gastar:

| Etapa | Coste |
|---|---|
| Brief, Research, Script, Compose, Render | 0 CR |
| Scene plan (mixed: tus assets, stock o generados) | según escenas |
| **The Gate** — nada gasta hasta que apruebas | muestra el desglose |
| Ejemplo del desglose: 8 imágenes estándar (64) + narración 60s (5) + música (15) + 1 clip generado 5s (125) | ≈ **209 CR ≈ $2.09** |
| Narración (voz "Calder", notas por tramo de frase) | 5 CR |
| Música (catálogo libre por mood/BPM; generar track si no hay match) | 15 CR |

En el Studio **"The Gate" es literalmente una etapa**: una pausa obligatoria donde ves el coste total estimado antes de gastar nada, con **Approve / Revise**. Tienes un **production chat** (el agente "MONTAGE" te contesta por cada escena), un **storyboard** editable escena por escena (arrastrar, regenerar, cambiar un asset por otro), y un **decision log** que registra cada elección con su justificación. El ejemplo de la demo es el "Trellis 2.0 — Launch Film" ($0.16 de gasto en generación).

> Nota: el Studio y el repo son la misma filosofía, pero el Studio es el producto en la nube (créditos, sin montar nada local) y el repo es el sistema que corre en tu máquina con tu agente.

## Los 12 pipelines

| Pipeline | Qué produce | Para qué |
|---|---|---|
| Animated Explainer | Explicador con research, narración, visuals, música | Educativo, tutorials |
| Animation | Motion graphics, kinetic typography, secuencias | Social media, demos |
| Avatar Spokesperson | Videos presentador avatar | Corporate, training |
| Cinematic | Trailer, teaser, edits de mood | Brand films, promo |
| Clip Factory | Batch de clips cortos rankeados desde una fuente larga | Repurposing social |
| Documentary Montage | Montaje temático desde corpus de footage libre (CLIP-indexed) | Video essays, real-footage sin APIs de pago |
| Hybrid | Footage propio + visuales IA de apoyo | Mejorar footage |
| Localization & Dub | Subtitular, doblar, traducir video existente | Distribución multilingüe |
| Podcast Repurpose | Highlights de podcast a video | Podcast marketing |
| Screen Demo | Screen recordings pulidas | Demos, docs |
| Talking Head | Videos de presentador con footage propio | Vlogs, entrevistas |

## Dos rutas gratuitas (sin API keys de pago)

- **Image-based**: Piper TTS narra (TTS offline local), las imágenes dan los visuales y Remotion los anima (imágenes animadas, cards, charts, captions word-level).
- **Real-footage**: el pipeline de montaje documental construye un corpus buscable por CLIP desde Archive.org, NASA, Wikimedia Commons y stock gratis (Pexels, Unsplash), y corta footage real en un video final. No es Ken Burns sobre imágenes: son clips de movimiento real editados en un timeline.
- **Local character animation**: rigs SVG, pose libraries, GSAP timelines y HyperFrames renderizan actuación de personajes en `final.mp4`.

Con API keys opcionales (más keys = más tools), las rutas de pago añaden Veo, Kling, Seedance, FLUX, Grok, HeyGen, Runway, Imagen, etc. Las keys del `.env` son todas opcionales.

### De dónde salen las imágenes de archivo gratis (notas de la enciclopedia)

Para **buscar o conseguir imágenes de stock/archivo gratis** que alimenten un video (sea con OpenMontage o con otro flujo), la enciclopedia ya documenta estos recursos:

- **[[Pexafy]]** — la nota dedicada a *buscar* imágenes por significado (no por keywords): 9 bibliotecas libres (Unsplash, Pexels, Pixabay, Kaboompics, Burst, StockSnap, Picjumbo, Skitterphoto, NegativeSpace), 9M+ fotos, API con una key y 5k requests/mes gratis. El complemento natural del pipeline de footage libre de OpenMontage.
- **[[HyperFrames]]** — su **Media Library** incluye 75.000+ imágenes de stock + 10.000+ pistas de música/SFX + logos de marcas, todo gratis con cuenta de HeyGen (vía `npx hyperframes media-use`). Es además el motor de composición HTML/GSAP que OpenMontage usa como runtime alternativo.
- **[[Herramientas video-audio para agentes (privado)]]** — nota privada que documenta la Media Library de HeyGen (mismas 75.000+ imágenes) y el pipeline de uso de stock y música (Pixabay) en proyectos reales con Remotion.
- **[[El vídeo es código]]** — metodología de Borja Perez donde se buscan recursos libres (Pixabay para música, etc.) a lo largo del flujo de creación de video con agentes.
- **[[Repositorio 400 Recursos de Diseño Gratuitos]]** — categoría **Media** con fotos de stock, vídeos, audio y animaciones Lottie listados para encontrarlos rápido.
- Fuentes directas que usa el propio OpenMontage: **Pexels, Unsplash, Pixabay** (claves de desarrollador gratis), y archivos abiertos de **Archive.org, NASA y Wikimedia Commons**.

## Dual runtime de composición

OpenMontage elige entre dos motores en la fase de propuesta (bloqueado como `render_runtime`):

- **Remotion** (React) — default para explicadores data-driven y escenas del stack React (spring animations, text/stat cards, charts, captions TikTok, TalkingHead).
- **HyperFrames** (HTML/CSS/GSAP) — default para briefs con mucho motion graphics, incluye el pipeline de animación de personajes con rigs SVG/GSAP. El decision matrix completo en `skills/core/hyperframes.md`.

## Backlot: el storyboard vivo

Chat te dice lo que dijo el agente; **Backlot** te muestra lo que la producción está haciendo — un tablero local que se rellena solo mientras el pipeline corre. Las etapas se iluminan, el guion aterriza como página de screenplay, las escenas brillan mientras generan assets, y cada decisión de proveedor y dólar gastado está en la pared.

- El storyboard es un **gate de aprobación real**: la generación de assets se pausa en una contact sheet escena por escena (takes, prompts, coste por asset, quality scores).
- **▶ REPLAY RUN** — toda la producción se reproduce desde sus timestamps, scrubbable de principio a fin.
- `python -m backlot open` abre la librería de producciones; `python scripts/backlot_simulate_run.py` simula una si no tienes ninguna.

## Reference-driven creation

Puedes **pegar un video que te guste** (YouTube, Short, Reel, TikTok o clip local) y OpenMontage lo convierte en un plan de producción fundamentado: analiza transcripción, pacing, escenas, keyframes y estilo; te devuelve 2-3 conceptos diferenciados, una ruta honesta de herramientas, estimación de coste a tu duración objetivo y una muestra antes de la producción completa. No es "prompt spaghetti" de adivinación.

## The Gate: nada gasta sin tu aprobación

Antes de cualquier gasto premium, el sistema muestra un desglose y espera tu **Approve / Revise**. La governance de presupuesto está construida:

- **Estimación antes de ejecutar**, **reserva de fondos**, **conciliación tras el gasto**
- Modos: observe (solo trackea), warn (loguea overruns), cap (límite duro)
- **Aprobación por acción** por encima de umbral (default **$0.50**)
- **Tope total** configurable (default **$10**)

## Governance de calidad

- **Gates de aprobación humana** (propuesta, guion, scene plan, assets, publish) — el checkpoint writer rechaza una etapa "completada" sin aprobación registrada, y cada checkpoint archivado sobrevive a revisiones (audit trail de gates).
- **Validación pre-compose** — bloquea renders que violan la promesa de entrega (ej: video "motion-led" con 80% de imágenes estáticas) o con riesgo crítico de slideshow. Evita quemar GPU en planes rotos.
- **Auto-revisión post-render** — ffprobe, extracción de frames en 4 posiciones (frames negros, overlays rotos), análisis de niveles de audio (silencio/clipping), verificación de promesa de entrega y subtítulos. Si falla, no se presenta el video.
- **Slideshow risk scoring** — análisis de 6 dimensiones (repetición, visuals decorativos, motion débil, shot intent, typography overreliance, claims cinematográficos sin soporte).
- **Source media inspection** — cuando subes tu propio footage, el sistema hace probe de cada archivo (resolución, codec, canales, duración) antes de cualquier decisión. Nada de alucinar contenido desde los nombres de archivo.
- **Selección de proveedor puntuada** en 7 dimensiones (task fit 30%, quality 20%, control 15%, reliability 15%, cost 10%, latency 5%, continuity 5%) con log auditable de alternativas y confianza.
- **Decision audit trail** — cada decisión (proveedor, playbook, música, voz, renderer, fallback) logueada con alternativas consideradas y razonamiento.

## Research como etapa de primera clase

Antes de escribir una línea de guion, el agente ejecuta **15-25+ búsquedas web** en YouTube, Reddit, Hacker News, medios y fuentes académicas. Reúne data points, preguntas de la audiencia, ángulos trending y referencias visuales, y cita todo en un research brief estructurado. Los videos están anclados a información real y actual, no a hechos alucinados.

## Arquitectura de conocimiento en 3 capas

1. **`tools/` + `pipeline_defs/`** — "qué existe": capacidades ejecutables + orquestación (YAML)
2. **`skills/`** — "cómo usarlo": convenciones de OpenMontage y quality bars (Markdown)
3. **`.agents/skills/`** — "cómo funciona": knowledge packs de tecnología externa

Cada tool declara qué skills de la capa 3 usa. El agente lee la capa 1 para saber qué hay, la 2 para saber cómo quiere OpenMontage que se use, y la 3 para el conocimiento técnico profundo cuando lo necesita.

## Style system y perfiles de plataforma

- **Style playbooks** (YAML): Clean Professional (corp/edu/SaaS), Flat Motion Graphics (social/TikTok), Minimalist Diagram (tech deep-dives). Controlan tipografía, paleta, motion, audio y quality rules.
- **Platform output profiles** built-in: YouTube 16:9, YouTube 4K, Shorts 9:16, Instagram Reels/Feed, TikTok, LinkedIn, Cinematic 21:9.

## Contribuir (extensibilidad)

- **Nueva tool**: crea un `.py` en `tools/` heredando `BaseTool`; el registry auto-descubre (sin registro manual).
- **Nuevo pipeline**: crea un YAML en `pipeline_defs/` + stage director skills en `skills/pipelines/`.

## Quick Start

```bash
git clone https://github.com/calesthio/OpenMontage.git
cd OpenMontage
make setup
```

Sin `make` (Windows PowerShell):

```powershell
py -3 -m venv .venv; .\.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
cd remotion-composer; npm install; cd ..
python -m pip install piper-tts
Copy-Item .env.example .env
```

> Si `npm install` falla con `ERR_INVALID_ARG_TYPE`, usa `npx --yes npm install`.

Requisitos: Python 3.10+, FFmpeg, Node.js 18+, un asistente de código con IA. Luego abre el proyecto en tu asistente y escribe un prompt como *"Make a 60-second animated explainer about how neural networks learn"* o *"Make a 75-second documentary montage about city life in the rain. Real footage only, no narration, elegiac tone"*.

## Compatibilidad de agentes

Funciona con cualquier asistente que lea archivos y ejecute Python: Claude Code (`CLAUDE.md`), Cursor, GitHub Copilot (`COPILOT.md`), Codex (`CODEX.md`), Windsurf (`.windsurfrules`). Todos apuntan a `AGENT_GUIDE.md` (contrato de agente) y `PROJECT_CONTEXT.md` (arquitectura).

## Recursos

- Repositorio: [github.com/calesthio/OpenMontage](https://github.com/calesthio/OpenMontage)
- Studio (waitlist): [openmontage.video](https://www.openmontage.video/)
- YouTube: [@OpenMontage](https://www.youtube.com/@OpenMontage)
- Docs: `docs/ARCHITECTURE.md`, `docs/PROVIDERS.md` (pricing y free tiers), `PROMPT_GALLERY.md`
- Comunidad: GitHub Discussions (Show and Tell, Ideas, Q&A)

## Relacionado

- Motor de composición: [[HyperFrames]] (HTML/GSAP), Remotion
- Imágenes de archivo por significado: [[Pexafy]] (semántica sobre 9 fuentes libres)
- Más recursos de imágenes/música gratis para video: [[Herramientas video-audio para agentes (privado)]], [[El vídeo es código]], [[Repositorio 400 Recursos de Diseño Gratuitos]]
- Hacer video con agentes: [[El vídeo es código]], [[Claude Video]]
- Skills de video open source: [[Open Design]]
- Costes y free tiers de APIs: [[free-for.dev]]

# #video #agente #skills #opensource