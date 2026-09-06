# Open Generative AI

**Open Generative AI** (repo: `Anil-matcha/Open-Generative-AI`) es la **alternativa open source sin restricciones a las plataformas de IA de video/imagen** (Midjourney, Runway, Kling...). 27.8k ⭐, MIT, Next.js + React + Tailwind, impulsado por la API de **MuAPI**. Genera imágenes y videos con **400+ modelos** (420+ según catálogo) a través de **14 estudios**, sin filtros de contenido, sin guardrails, sin suscripción — self-hosted y extensible.

## Estudios incluidos (14)

| Studio | Qué hace |
|---|---|
| **Image** | Texto→imagen (70+ modelos) e imagen→imagen (70+), con cambio automático según haya imagen de referencia |
| **Video** | Texto→video (85+) e imagen→video (120+): Kling, Sora, Veo, Wan, Seedance, Hailuo, Runway... |
| **Audio** | Generar y editar audio/música desde texto |
| **AI Clipping** | Auto-clip y extraer highlights de video largo |
| **Vibe Motion** | Motion/animation generation para efectos estilizados |
| **Lip Sync** | 9 modelos (imagen+audio→video, o video+audio→lipsync): Infinite Talk, Wan 2.2, LTX 2.3, LatentSync... |
| **Body Swap (Recast)** | Cambiar sujeto/apariencia en imagen o video |
| **Cinema** | Shots fotorrealistas con controles pro de cámara (Lens, Focal Length, Aperture) |
| **Marketing** | Variaciones creativas de ads desde una entrada |
| **Workflow** | Pipelines multi-paso visuales (node-based), templates de comunidad, API ejecutable |
| **Agent** | Agente creativo multi-turno que planifica y ejecuta |
| **Design Agent** | Agente de diseño autónomo en canvas |
| **Apps** | Directorio de app templates sobre el mismo catálogo |
| **AI Influencer** | Persona/influencer IA consistente |
| **MCP & CLI** | Acceso de agentes via MCP |

## Datos clave

- **Multi-image input**: hasta **14 imágenes de referencia** en modelos compatibles (Nano Banana 2 Edit, Flux Kontext, GPT-4o Edit...)
- **Sin filtros**: no bloquea ni altera prompts (la "libertad creativa" total que quitan Midjourney/Runway)
- **Self-hosted**: tus datos se quedan en tu máquina
- **Local inference** (solo app desktop): dos motores — **sd.cpp** (imagen, Metal/CUDA/Vulkan/ROCm, corre en Mac M-series) y **Wan2GP** (BYO server GPU para video: Wan 2.2, Hunyuan, LTX, Flux)
- **Modelos recientes**: Nano Banana 2, Seedream 5.0, MiniMax Image 01, Seedance 2.0 (+Extend/I2V), Grok Imagine, Hailuo 02/2.3, Kling v3, Sora 2, Veo 3
- **White Label**: MuAPI te deja lanzarlo como tu propio estudio de marca (desde $49/mo, te quedas el margen)

## Instalación

```bash
git clone --recurse-submodules https://github.com/Anil-matcha/Open-Generative-AI.git
cd Open-Generative-AI
npm run setup    # instala + construye workspaces (REQUERIDO, no vale solo npm install)
npm run electron:dev   # app desktop (Electron)
# o npm run dev        # versión web (Next.js) → localhost:3000
```

Necesitas una **API key de MuAPI** (o nada si solo usas modelos locales). Apps de escritorio precompiladas para macOS, Windows y Linux en Releases (ojo: macOS bloquea la app sin notarizar — `xattr -cr`).

## Por qué importa

Es el "todo-en-uno" self-hosted para generación de media: **un solo UI** para 400+ modelos de imagen/video/audio, sin paywall ni censura, con la API de MuAPI por detrás y opción de inferencia local. Ideal como backend de generación para pipelines de agentes (Workflow Studio + MCP).

## Recursos

- Repositorio: [github.com/Anil-matcha/Open-Generative-AI](https://github.com/Anil-matcha/Open-Generative-AI)
- Versión hosted: [muapi.ai/open-generative-ai](https://muapi.ai/open-generative-ai)
- API: [MuAPI](https://muapi.ai)

## Relacionado

- Generación de video con agentes: [[OpenMontage]], [[HyperFrames]]
- Modelos de imagen/video: [[Sorceress]], [[40 Mejores Herramientas para Vibe Coding de Juegos]]
- Más herramientas de video: [[Herramientas video-audio para agentes (privado)]]
- Auto-hosting de apps: [[AnythingLLM]], [[Dify]]

# #video #modelos #opensource #agente