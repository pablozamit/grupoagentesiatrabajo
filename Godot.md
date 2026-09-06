# Godot

**Godot** es un **motor de juegos gratuito y de código abierto** (licencia MIT, 2D + 3D + XR, multiplataforma). Es el estándar de facto del indie y el motor favorito del **vibecoding de juegos con IA**: gratuito, ligero, sin royalties, con lenguaje propio (GDScript), C#/C++ y soporte de agentes vía MCP. Última versión estable: **4.7.2** (mantenimiento), con **4.8 dev** en camino.

## Por qué es el motor de los agentes

- **Open source y MIT** — cero royalties, cero suscripción. El código del motor es tuyo
- **Ligero y rápido de iterar** — el editor abre en segundos; ideal para el loop prompt → probar → corregir
- **GDScript** — lenguaje de scripting tipo Python que los LLMs generan muy bien (sintaxis sencilla, orientado a nodos)
- **Godot MCP / Summer Engine** — hay servidores MCP que conectan tu agente directamente al editor: describes una mecánica y el agente conecta los nodos
- **Exporta a web y desktop** en segundos — perfecto para publicar lo que vibecodeas (ver [[Here.Now]], [[Vercel]])

## Capacidades

| Área | Qué ofrece |
|---|---|
| **2D** | Motor de renderizado 2D dedicado con coordenadas de píxeles 2D reales y nodos 2D |
| **3D** | Nodos 3D para construir, animar y renderizar mundos y personajes |
| **XR** | Soporte built-in de OpenXR y WebXR (+ SDKs vía plugins) |
| **Lenguajes** | GDScript, C#, C++, o trae el tuyo con GDExtension (C# solo desktop/móvil en 4.x; web requiere Godot 3) |
| **Multiplataforma** | Publica a escritorio, móvil y web; consolas vía terceros |
| **Nodos y Escenas** | Sistema de escenas nodo-based: poder y flexibilidad para crear cualquier cosa |

## Cómo encaja con la IA (workflows de la enciclopedia)

- **[[Personajes 3D jugables desde IA]]** — imagen → pose T → Trellis → rigging con Claude → **Godot MCP** y Blender MCP para meter el modelo dentro del juego
- **[[40 Mejores Herramientas para Vibe Coding de Juegos]]** — Godot es "el estándar indie" en esa guía, con **Godot MCP** o **Summer Engine** como agentes dentro del motor
- **[[AutoSprite]]** — importa JSON de spritesheets a `AnimatedSprite2D` o `SpriteFrames`
- **[[Noqa]]** — QA visual de juegos móviles soporta Godot
- **[[Sorceress]]** — pago único vs "Unity/Unreal/Godot + suscripciones de IA"
- **[[NOSignups.net]]** — **Godot Web** (114.6k ⭐): entorno Godot zero-install en el navegador, sin cuenta

## Instalación rápida

Descarga desde [godotengine.org/download](https://godotengine.org/download) (versión 4.7.2 estable). Sin instalador: es un ejecutable único. También hay **editor web** para probar sin descargar.

## Recursos

- Web: [godotengine.org](https://godotengine.org)
- Descargar: [godotengine.org/download](https://godotengine.org/download)
- Docs: [docs.godotengine.org](https://docs.godotengine.org)
- Asset Library: [godotengine.org/asset-library](https://godotengine.org/asset-library)
- Última versión: 4.7.2 (ago 2026)

## Relacionado

- Vibecoding de juegos: [[40 Mejores Herramientas para Vibe Coding de Juegos]], [[Personajes 3D jugables desde IA]]
- Assets y sprites: [[AutoSprite]], [[GoRest 2D Spritesheet Generator]], [[img2threejs]]
- QA: [[Noqa]], [[Elemental Sandbox]]
- Publicar en web: [[Here.Now]], [[Vercel]], [[NOSignups.net]]

# #juegos #3d #vibecoding #opensource