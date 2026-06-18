# 40 Mejores Herramientas para Vibe Coding de Juegos (Guía Completa)

Cualquiera puede crear un juego en 2026 gracias a la evolución de los LLMs y las herramientas de IA para pipelines de juegos. Conectar unas pocas herramientas en un pipeline que te lleve de la idea a un build jugable es la clave.

Esta guía enumera 40 herramientas con precio, para qué usarla, cómo funciona con IA y el enlace. Al final incluye los pipelines completos y un prompt maestro.

*Fuente: [Meta Alchemist](https://x.com/meta_alchemist) — traducido y adaptado.*

## Motores y frameworks (elige uno)

| Herramienta | Precio | Descripción | Cómo se conecta con IA |
|-------------|--------|-------------|------------------------|
| **Godot** | Gratuito, open source | El estándar indie; GDScript o C#. Prototipa y exporta a web y desktop. | Godot MCP o Summer Engine agent |
| **Unity** | Gratuito | C#, asset store enorme, publica en todas partes. | Unity MCP + AI assist integrado |
| **Unreal Engine** | Gratuito (royalties) | Visuales AAA con Nanite y Lumen. Para 3D cinematográfico. | Unreal MCP oficial en 5.8 |
| **Bevy** | Gratuito, open source | Rust, ECS, data-driven. Control total del bucle. | El agente escribe Rust contigo |
| **raylib** | Gratuito, open source | Framework C minimalista. Aprende cerca del metal. | El agente escribe C por ti |
| **LOVE (Love2D)** | Gratuito, open source | Lua, simple. El camino más rápido a un prototipo 2D. | El agente escribe Lua y lo ejecuta |
| **Phaser** | Gratuito, open source | El mejor framework para juegos 2D en navegador. | El agente escribe JS y prueba en browser |
| **Three.js** | Gratuito, open source | 3D en el navegador con WebGL/WebGPU. | El agente escribe escenas |
| **MonoGame** | Gratuito, open source | C#, code-first, sin editor. Linaje de Stardew Valley y Celeste. | El agente escribe C# |
| **Defold** | Gratuito | 2D ligero, Lua, builds pequeños. Para móvil y web. | El agente escribe Lua |

## Dónde vibecodeas (IDEs y asistentes IA)

| Herramienta | Precio | Descripción | Conexión IA |
|-------------|--------|-------------|-------------|
| **VS Code** | Gratuito | El editor donde vive la mayoría. | Copilot, Cline, extensiones MCP |
| **JetBrains Rider** | Pago (gratis no comercial) | IDE C#/Unity profundo. | Asistente IA integrado + MCP |
| **Cursor** | Plan gratuito | Editor AI-first. Chatea y edita en toda tu base de código. | Es el editor IA en sí mismo |
| **GitHub Copilot** | Pago (gratis para estudiantes/OSS) | Autocompletado contextual. | Autocompletado y chat IA |
| **Claude Code** | Pago | Agente que edita, ejecuta y prueba archivos. | Habla MCP con todas las herramientas |
| **Codex** | Pago (plan ChatGPT) | Agente de OpenAI, genera imágenes con gpt-image-2. | Agente con gpt-image-2 integrado |

## IA que construye y genera contigo

| Herramienta | Precio | Descripción |
|-------------|--------|-------------|
| **Summer Engine** | Plan gratuito | Agente IA dentro del motor, sobre Godot. Describe una mecánica y él conecta los nodos. |
| **Meshy** | Plan gratuito | Texto o imagen a modelo 3D en minutos. Rellena escenas rápido. |
| **Scenario** | Plan gratuito | Arte 2D para juegos en un estilo que entrenas. Mantén sprites y UI con marca. |
| **Suno** | Plan gratuito | Música IA. Un borrador de banda sonora en minutos. |

## Más herramientas destacadas en 2026

| Herramienta | Precio | Descripción |
|-------------|--------|-------------|
| **Higgsfield MCP** | Plan gratuito | Conecta generación de imagen y video a Claude Code o Codex mediante MCP. 30+ modelos, personajes consistentes. |
| **Higgsfield Cinema Studio** | Pago | Video IA cinematográfico con control de cámara y lentes. Para tráilers y cinemáticas. |
| **Unreal Engine MCP** | Gratuito (experimental 5.8) | El agente puede crear actores, Blueprints y tests desde el editor. |

## Arte, sprites y animación

| Herramienta | Precio | Descripción | Conexión IA |
|-------------|--------|-------------|-------------|
| **Blender** | Gratuito, open source | Modelado 3D, rigging y animación. | Blender MCP — el agente modela por prompt |
| **Aseprite** | ~20$ (gratis si compilas) | Estándar para pixel art y animación de sprites. | Lua-scriptable, el agente automatiza exports |
| **Tiled** | Gratuito, open source | Editor de tilemaps. Diseña niveles visualmente. | Scriptable, el agente genera mapas |
| **Spine** | Pago | Animación 2D esquelética. | API runtime que el agente conecta desde código |

## Animación y VFX

| Herramienta | Precio | Descripción |
|-------------|--------|-------------|
| **Mixamo** | Gratuito | Auto-rig y animaciones motion-capture listas en minutos. |
| **Cascadeur** | Plan gratuito | Animación keyframe asistida por IA con física real. |
| **Rive** | Plan gratuito | Animación interactiva en tiempo real para juegos y UI. |
| **Houdini** | Plan gratuito (Apprentice/Indie) | VFX procedural node-based, calidad de cine. |
| **EmberGen** | Pago | Fuego, humo y fluidos en tiempo real. |

## Audio

| Herramienta | Precio | Descripción |
|-------------|--------|-------------|
| **FMOD** | Gratuito (cierto umbral) | Middleware de audio adaptativo. |
| **Wwise** | Gratuito (licencia indie) | Audio middleware profesional, música interactiva y sonido espacial. |
| **ElevenLabs** | Plan gratuito | Voces IA y texto a efectos de sonido. |
| **Audacity** | Gratuito, open source | Grabación y edición de audio. |

## Control de versiones para assets grandes

| Herramienta | Precio | Descripción |
|-------------|--------|-------------|
| **Git + GitHub con Git LFS** | Plan gratuito | Versiona código y binarios grandes con LFS. |
| **Perforce Helix Core** | Gratuito hasta 5 usuarios | Estándar en estudios para repos binarios enormes. |

## Publicación y crecimiento

| Herramienta | Precio | Descripción |
|-------------|--------|-------------|
| **Steam** | Pago (tarifa por juego) | Donde están los jugadores de PC. SDK para logros, nube, ventas. |
| **itch.io** | Gratuito | El lugar más amigable para lanzar. Prototipo esta semana, feedback real. |
| **Epic Games Store** | Pago (100$) | 100% del primer millón al año, luego 88%. |

## Plataformas UGC (publica donde ya hay audiencia)

| Herramienta | Precio | Descripción |
|-------------|--------|-------------|
| **Roblox** | Gratuito | Audiencia enorme, te quedas ~25% del revenue. Construye para alcance. |
| **Fortnite / UEFN** | Gratuito | Islas en Unreal Editor para Fortnite. Gana por engagement. |

El trade-off: las plataformas UGC pagan menos que vender tu propio build, pero te dan millones de jugadores ya registrados. Puedes hacer ambas.

## Los 4 pipelines principales

### Web 2D — el más rápido
- **Motor:** Phaser
- **Editor:** VS Code + Cursor
- **Arte:** Aseprite
- **Audio:** Suno
- **Git:** GitHub
- **Publicar:** itch.io
- *Construye en el navegador, publica en una tarde.*

### 3D indie con assets IA
- **Motor:** Unreal Engine o Unity
- **Asistente:** Claude Code
- **Artes:** Meshy + Scenario
- **Audio:** ElevenLabs + Suno
- **Pulir:** Blender
- **Git:** GitHub con LFS
- **Publicar:** Steam

### Pixel roguelike
- **Motor:** Godot
- **Arte:** Aseprite + Tiled
- **Audio:** FMOD
- **Git:** GitHub
- **Publicar:** Steam
- *Ajustado, clásico y terminable.*

### Rust o low-level
- **Motor:** Bevy o raylib
- **Editor:** Rider o VS Code
- **Arte:** Blender
- **Git:** Git
- **Publicar:** itch.io
- *Para control y aprendizaje.*

## Prompt maestro

```
/goal I am building a [genre] game. My stack: engine [engine], editor and assistant [editor + Cursor/Copilot/Claude Code], art [art tools], audio [audio tools], version control [Git LFS or Perforce], ship target [itch.io or Steam]. Build the pipeline: scaffold the engine project with a runnable scene, wire version control with LFS from the first commit, create the asset folders and import settings for my art and audio tools, add a one-command build, and write a README that says how each tool plugs in and what I fill next. Show me the running build and a checklist. Ask before installing anything.
```

## Prompt para añadir una herramienta concreta

```
/goal Integrate [tool] into my [engine] project. Show the minimal setup, add the config or import settings, give me one working example (a sprite imported, a sound triggered, a model placed, a clean LFS commit), and one gotcha to avoid. Do it on a sandbox branch and show me the result before I merge.
```

## Setup de Meta Alchemist (creador de Seas of Spark)

| Área | Herramienta |
|------|-------------|
| Código | Opus 4.8 + Codex 5.5 |
| Arte | GPT Image Gen 2 |
| Assets 3D | Tripo + Meshy |
| MCP para UI | Higgsfield |
| Bandas sonoras | Suno |
| Efectos de sonido | ElevenLabs |
| Agente | Spark |

Construyó Seas of Spark en **4 días** haciendo vibe coding en solitario.

## Consejos para empezar

1. Elige un motor y pon algo en pantalla hoy
2. Activa un asistente IA y deja que escriba tu primer sistema mientras observas
3. Construye placeholders para cada espacio vacío — el juego se siente completo
4. Quédate solo con el arte y audio que te importan, suelta el resto
5. Conecta control de versiones con LFS antes del primer build real
6. Publica un build en itch.io esta semana y lee lo que dicen los jugadores

**Selección de 30 segundos:** 1 motor, 1 editor + 1 asistente IA, 1 herramienta de arte, 1 de audio, generadores IA para los huecos, Git LFS desde el primer commit, 1 plataforma para publicar. Cinco herramientas, wire con el prompt maestro, algo pequeño esta semana.

# #juegos #vibecoding #3d #video #agente #modelos #recursos
