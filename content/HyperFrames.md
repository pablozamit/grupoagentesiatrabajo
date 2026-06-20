# HyperFrames

[HyperFrames](https://hyperframes.dev) es un **framework open source de HeyGen** para **crear vídeos a partir de HTML**, pensado para que agentes de IA puedan generar vídeo de forma programática.

## Qué es

- Escribes HTML con tus textos, imágenes, animaciones y música
- HyperFrames lo convierte en un vídeo MP4
- Está diseñado para que un agente de IA (Claude Code, Cursor, etc.) pueda hacer todo el proceso solo

## Para qué sirve

Generar vídeos sin tener que editar en herramientas visuales. Como el contenido se escribe en HTML, un agente puede producir muchos vídeos distintos a partir de la misma plantilla, cambiando textos, colores o imágenes según el destinatario.

Ejemplos de lo que puedes crear:

- Vídeos de lanzamiento de producto
- Anuncios para redes sociales
- Vídeos explicativos de features
- Demos con animaciones de código
- Visualizaciones de datos animadas
- Reels de marca y showcases
- Tutoriales con capturas de web
- Tarjetas de título con efectos visuales

## Cómo empezar

HyperFrames funciona con **Node.js 22+** y **FFmpeg**.

**Con un agente de IA** (Claude Code, Cursor, Gemini CLI, Codex):

```
npx skills add heygen-com/hyperframes
```

Luego pídele algo como: *"Crea un vídeo de 10 segundos presentando un producto con título animado, música de fondo y un vídeo de ejemplo."*

**Manual desde la terminal:**

```
npx hyperframes init mi-video
cd mi-video
npx hyperframes preview         # verlo en el navegador
npx hyperframes render          # generar el MP4 en local
npx hyperframes cloud render    # renderizar en la nube de HeyGen
```

## Render en la nube (HeyGen Cloud)

`npx hyperframes cloud render` envía el renderizado a los servidores de HeyGen en lugar de hacerlo en tu máquina.

**Conviene usarlo cuando:**
- No tienes Chrome o FFmpeg instalados localmente
- Tu máquina tiene recursos limitados (batería, RAM, CPU)
- Necesitas renderizar varios vídeos y no quieres bloquear tu equipo
- Un agente está construyendo mientras el render se completa en segundo plano
- Trabajas en equipo y necesitas renders centralizados

## Showcase / Playground

En [hyperframes.dev](https://www.hyperframes.dev) puedes:

- **Explorar ejemplos reales** de vídeos creados con HyperFrames (showcases de Stripe, Airbnb, Notion, Raycast, Dribbble, Spotify y muchos más)
- **Ver el código fuente** de cada uno y modificarlo
- **Renderizar online** desde el navegador
- **Publicar tus propios proyectos** para que otros los remixen

Cada proyecto en el playground es una composición real que puedes inspeccionar, previsualizar y renderizar.

## Vídeos de lanzamiento oficiales

HeyGen ha publicado [hyperframes-launches](https://github.com/heygen-com/hyperframes-launches), un repositorio con el código fuente de todos sus vídeos de lanzamiento. Cada carpeta es una composición completa que puedes abrir, renderizar y modificar.

### Vídeos incluidos

| Vídeo | Carpeta | Descripción |
|---|---|---|
| HyperFrames launch | `hyperframes-launch/` | El vídeo de anuncio original |
| Website → Video | `website-to-hyperframes/` | Captura cualquier web y genera un vídeo |
| Timeline editor | `timeline-launch/` | Presentación del editor de línea de tiempo |
| Variables | `variables-launch/` | Sistema de variables y plantillas |
| Texture launch | `texture-launch-video/` | Tipografía con máscaras de textura y fondos shader |
| VFX + HeyGen | `vfx-heygen-combined/` | Efectos visuales combinados (Three.js, HTML-in-canvas) |
| Stripe | `HF-heygen-stripe/` | Showcase de Stripe |
| Claude Paper | `claude-paper-launch/` | Lanzamiento Claude Paper |
| Frame.md | `frame-md-launch-storyboard/` | Storyboard con frame.md |
| SpaceX | `spacex-launch/` | Showcase de SpaceX |
| SFX + Music | `sfx-music-launch/` | Efectos de sonido y música |
| Inspector | `inspector-launch/` | Contact sheet del inspector |

### Cómo usar los vídeos de lanzamiento

```bash
# 1. Instala Git LFS (usan archivos grandes)
brew install git-lfs
git lfs install

# 2. Clona el repositorio
git clone https://github.com/heygen-com/hyperframes-launches.git
cd hyperframes-launches/website-to-hyperframes

# 3. Previsualiza o renderiza
npx hyperframes preview
npx hyperframes render
```

Cada proyecto incluye `STORYBOARD.md` con el plan escena por escena, `DESIGN.md` con las decisiones de diseño, y `HANDOFF.md` con notas de producción.

## Diferencia clave con otras herramientas

A diferencia de herramientas como Remotion (que usan React), HyperFrames usa **HTML plano**. Esto hace que sea más fácil para un agente trabajar con él, porque los agentes ya saben escribir HTML sin necesidad de montar un proyecto React.

Relacionado: [[video-use]], [[OpenCut]], [[MoneyPrinterTurbo]], [[FFmpeg]], [[Open Design]]

# #video #agente #contenido #opensource
