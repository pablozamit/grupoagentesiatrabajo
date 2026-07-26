# HyperFrames

[HyperFrames](https://hyperframes.dev) es un **framework open source de HeyGen** (Apache 2.0, 37.7k ⭐) para **crear vídeos a partir de HTML**, pensado para que agentes de IA puedan generar vídeo de forma programática.

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

## Skills (Julio 2026)

HyperFrames tiene **19 skills** que los agentes cargan bajo demanda. El sistema se organiza en tres niveles:

### Router (1 skill)

`/hyperframes` es el router y mapa de capacidades. Recibe cualquier petición del tipo "crea un vídeo de..." y la enruta al workflow correcto.

### Creation workflows (10)

| Workflow | Descripción |
|---|---|
| /product-launch-video | Vídeo de lanzamiento de producto |
| /faceless-explainer | Vídeo explicativo sin rostro |
| /pr-to-video | Vídeo desde pull request de GitHub |
| /embedded-captions | Subtítulos incrustados en vídeo existente |
| /talking-head-recut | Superposiciones gráficas sobre vídeo existente |
| /motion-graphics | Gráficos animados cortos (<10s) |
| /music-to-video | Vídeo musical sincronizado al beat |
| /slideshow | Presentaciones y pitch decks interactivos |
| /general-video | Fallback para cualquier otro tipo de vídeo |
| /remotion-to-hyperframes | Migración desde Remotion |

### Domain skills (8 atómicas)

Skills de bajo nivel que los workflows componen:

| Skill | Qué cubre |
|---|---|
| /hyperframes-core | Contrato de composición (data-*, clips, tracks, variables) |
| /hyperframes-animation | Todo el conocimiento de animación (GSAP, Lottie, Three.js, etc.) |
| /hyperframes-keyframes | Keyframes seek-safe en todos los runtimes |
| /hyperframes-creative | Dirección creativa: paletas, tipografía, narrativa |
| /media-use | Motor de medios: BGM, SFX, imágenes, TTS, transcripción |
| /hyperframes-cli | CLI dev loop (init, lint, preview, render, publish) |
| /hyperframes-registry | Instalación de bloques y componentes del registry |
| /figma | Importación de assets, tokens y diseños desde Figma |

### frame.md

**frame.md** es un sistema de diseño para vídeo. Invierte el diseño web tradicional (diseñado para pantalla) a un formato optimizado para cámara, para que un agente pueda componer vídeos promocionales sin adivinar escalas ni usar cromo de navegador. Disponible en [hyperframes.dev/design](https://hyperframes.dev/design).

## Media Library (Julio 2026)

HeyGen añadió una **biblioteca de medios** a HyperFrames que resuelve el problema de tener que buscar assets externos:

- **10.000+ pistas** de música y SFX
- **75.000+ imágenes** de stock
- **Logos** de marcas desde canales oficiales
- Acceso a los **modelos generativos** de HeyGen (imágenes, avatar, TTS)
- Los assets se guardan en tu máquina, así que el siguiente proyecto salta la búsqueda

Todo gratis con una cuenta de HeyGen (sin necesidad de suscripción: 10 min de TTS gratis y algunos vídeos avatar incluidos).

### media-use

El sistema se llama `media-use` y cubre el gap que tenía HyperFrames: antes no había SFX, BGM ni generación de medios integrada. Ahora puedes:

- Usar tu suscripción de OpenAI Codex para generar imágenes
- Usar modelos locales si no quieres depender de APIs externas
- Se irán añadiendo más APIs con el tiempo

```
npx hyperframes media-use
```

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
| Website → HyperFrames | `website-to-hyperframes/` | Captura cualquier web y genera un vídeo |
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
| Cloud Render | `cloud-render-launch/` | Anuncio del render en la nube |
| Figma integration | `figma-launch/` | Integración con Figma para importar assets y tokens |
| PR-to-video | `pr-to-video-launch/` | Anuncio del workflow PR-to-video |
| Kimi K3 promo | `k3-promo/` | Promo del modelo Kimi K3 |

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

## Metodología en 5 pasos para vídeos promocionales (Jake Moran)

Esta metodología fue detallada por Jake Moran, encargado de los vídeos promocionales de Hyperframes. El proceso trata el vídeo como un proyecto de código (HTML, CSS, JS) para que un agente lo construya todo de forma autónoma.

### Paso 1: Preparar contexto y recursos visuales

Crear una carpeta de proyecto con documentos explicativos, capturas de pantalla y referencias visuales. Lo más crítico es incluir una **guía de estilo** en un archivo `design.md` o `frame.md` con colores de marca, tipografía y directrices espaciales.

### Paso 2: Storyboard en texto (Storyboard.md)

Indicar al agente que revise los materiales y genere un **guion gráfico en markdown** — una tabla de eventos clave escena por escena. En esta fase se refina la narrativa y el texto definitivo (copy), sin preocuparse por el diseño visual.

### Paso 3: Reutilizar componentes existentes

HyperFrames tiene un [repositorio abierto con 50+ componentes](https://github.com/heygen-com/hyperframes) listos. Instruir a la IA para que extraiga el código de animaciones, transiciones o efectos de proyectos anteriores o de la comunidad, adaptando colores y distribución al nuevo vídeo.

### Paso 4: Revisión estética con fotogramas estáticos (Storyboard.html)

Pedir al agente que genere un **fotograma estático por cada escena** (la sección visualmente más densa). Esto permite alinear el estilo y corregir antes de renderizar composiciones completas de 45+ segundos, ahorrando tiempo de espera.

### Paso 5: Generación animada y edición final (Hyperframes Studio)

Una vez aprobados los fotogramas, pedir a la IA que convierta todo en un vídeo completo. Luego se abre el proyecto en **Hyperframes Studio** — una interfaz visual que permite retoques (mover texto, cambiar palabras) sin código. Las ediciones se traducen automáticamente al HTML fuente, manteniendo sincronizado al agente. Exportación final en MP4 o WebM.

### Atajo: website-to-video

Si el producto ya tiene una web en vivo, se puede usar la skill `website-to-video`. La IA captura la web por sí misma, genera el storyboard y programa el vídeo entero en un solo paso:

```
npx skills add heygen-com/website-to-video
```

---

## Diferencia clave con otras herramientas

A diferencia de herramientas como Remotion (que usan React), HyperFrames usa **HTML plano**. Esto hace que sea más fácil para un agente trabajar con él, porque los agentes ya saben escribir HTML sin necesidad de montar un proyecto React.

Relacionado: [[video-use]], [[OpenCut]], [[MoneyPrinterTurbo]], [[FFmpeg]], [[Open Design]]

# #video #agente #contenido #opensource
