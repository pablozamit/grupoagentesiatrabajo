# Sorceress

[Sorceress](https://sorceress.games/) es una **suite web de creación de juegos con IA** que combina 30+ herramientas de generación de assets (sprites, 3D, voxel, materiales, audio, vídeo) con un motor de juegos propio AI-native.

## Qué es

- **Sorceress Game Creation Suite**: el conjunto de herramientas online (accede vía navegador, sin instalar nada)
- **WizardGenie**: el motor de juegos AI-native que viene incluido, con vibe-coding
- **Asset Studio + AI Engine**: la propuesta es que generes TODOS los assets del juego (sprites, 3D, audio, vídeo, materiales) con IA y luego los metas en el motor
- Licencia de uso: freemium (100 créditos gratis para probar) + **$49 de pago único de por vida** con todas las herramientas futuras incluidas

## Las 30+ herramientas (agrupadas)

### Sprites y 2D (9 herramientas)
- **Auto-Sprite v2**: prompt → sprite sheet 2D animado (3 pasos: generar personaje, animar con vídeo, convertir a sprite)
- **True Pixel**: imagen o vídeo → sprite sheets de pixel art
- **Pixel Snap**: arte IA o vídeo → pixel art real con grid cuadrado perfecto
- **Tileset Forge**: arte IA → tilesets limpios con grid
- **3D to 2D**: modelo 3D → sprite sheet 2D desde cualquier ángulo de cámara
- **Quick Sprites, Sprite Analyzer, Slicer, Seamless Tile Gen**: utilidades auxiliares

### 3D y animación (5 herramientas)
- **AI 3D Model Generation**: prompt o imagen → modelo 3D texturizado
- **Auto-Rigging**: rigging humanoide automático con weight-paint refinado
- **AI Text-to-Animation**: prompt → animación 3D completa
- **Procedural Walk**: auto-rig + IK para criaturas multi-pata (arañas, dragones) en cualquier terreno
- **Material Forge**: imagen → material PBR completo (albedo, roughness, metallic, normal, AO)

### Voxel Studio (3 herramientas)
- Generación de voxel desde prompt, imagen o 3D
- Text-to-animation para humanoides voxel
- Procedural Walk para criaturas voxel multi-pata

### Image Tools (4 herramientas)
- Background remover, image expander, canvas editor, chroma key neural

### Audio Studio (5 herramientas)
- Music Gen, Speech Gen (con voice cloning), SFX Gen, SFX Editor
- Sound Studio: la suite de audio completa con editor

### Publish & Play (4 herramientas)
- Publicar en el Sorceress Arcade o en GitHub Pages
- Marketplace de assets
- Layout Preview para probar en distintos tamaños de pantalla

## WizardGenie: el motor AI-native

WizardGenie es el **motor de juegos que vive dentro de Sorceress**. Su enfoque es AI-first + vibe-coding:

- Le describes el juego que quieres y lo escribe, ejecuta e itera en tiempo real
- Funciona en el navegador (vista previa jugable sin descargar nada)
- Conecta con **8 modelos de código**: Claude Opus 4.7, Claude Sonnet 4.6, GPT-5.5, Gemini 3.1 Pro, DeepSeek V4 Pro, Kimi K2.5, Grok 4.2, MiniMax M2.7
- Tú traes tu propia API key para los modelos
- Plantillas de inicio: retro arcade space shooter, FPS 3D, 2D platformer con doble salto

## Modelos IA disponibles (unificados)

| Tipo | Modelos |
|------|---------|
| **Imagen (7)** | Nano Banana Pro, Nano Banana 2, GPT Image 2, Seedream 5 Lite (sin censura), Flux 2 Pro, Z-Image Turbo, Grok Imagine |
| **Vídeo (4)** | Grok Imagine Video, Wan 2.7 (sin censura), Seedance 2.0, Kling 3.0 |
| **Código (8)** | Claude Opus 4.7, Claude Sonnet 4.6, GPT-5.5, Gemini 3.1 Pro, DeepSeek V4 Pro, Kimi K2.5, Grok 4.2, MiniMax M2.7 |

Una sola interfaz para todos. No necesitas 8 suscripciones distintas.

## Pixal3D: generación 3D open source

Sorceress incluye **Pixal3D**, un modelo de generación 3D open source que se ejecuta en sus servidores:

- **Gratis y de uso ilimitado** (hasta que los servidores se saturen)
- **Sin GPU local** requerida
- **Sin setup**: lo usas desde la interfaz de Sorceress directamente
- Sirve para que cualquiera pueda generar modelos 3D sin pagar ni montar infraestructura

## Por qué es interesante

- **Reduce drásticamente el time-to-game**: lo que antes requería un equipo (artista 2D, artista 3D, animador, músico, programador) lo puede hacer una persona con buenas ideas
- **Ideal para vibecodear juegos completos**: describes lo que quieres y WizardGenie lo construye
- **Publicación directa**: puedes subir el juego a GitHub Pages o al Sorceress Arcade
- **Pago único de por vida**: $49 es muy agresivo comparado con Unity/Unreal/Godot + suscripciones de IA
- **Marketplace**: los assets que generes se pueden vender

## Casos de uso

- Crear prototipos de juegos en horas, no en semanas
- Aprender a hacer juegos sin saber programar, dibujar, animar ni modelar
- Generar assets para juegos hechos en otros engines (Three.js, Unity, Unreal, Godot)
- Hacer un juego completo desde prompt hasta publicación
- Vender assets en el marketplace de la plataforma

## Diferencias con herramientas individuales de la enciclopedia

- [[AutoSprite]] (v1) es una pieza de este puzzle: Sorceress tiene Auto-Sprite v2 integrado
- [[Three.js]] es el motor de la web abierta; WizardGenie es el motor AI-native de Sorceress
- [[HyperFrames]] genera vídeo desde HTML; Sorceress genera vídeo desde prompts
- [[Vibecoding]] como metodología: WizardGenie es vibecoding aplicado a juegos

## Recursos

- Web: [sorceress.games](https://sorceress.games/)
- WizardGenie: [sorceress.games/wizard-genie](https://sorceress.games/wizard-genie)
- 3D Studio: [sorceress.games/3d-studio](https://sorceress.games/3d-studio)
- Planes y precios: [sorceress.games/plans](https://sorceress.games/plans)

# #juegos #ia #contenido
