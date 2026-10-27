# Hyper3D BANG Parts Skill

La **Hyper3D BANG Parts Skill** ([DeemosTech/rodin3d-bang-skills](https://github.com/DeemosTech/rodin3d-bang-skills)) es una **skill para Codex y Claude** que convierte **una sola imagen o un prompt en un modelo 3D dividido en partes** listas para animar. Enlaza dos APIs de Hyper3D: **Rodin Gen-2** genera el asset de origen y **BANG** lo corta en piezas (cuerpo, brazos, piernas, accesorios) que se descargan como archivos locales con un manifiesto. Se difundió desde el tuit de [@DeemosTech](https://x.com/DeemosTech/status/2048047910974308749), con una demo de Codex + GPT-5.5 montando una página interactiva con esos assets.

## Qué hace

El flujo es "de origen a partes", en cuatro pasos que la skill automatiza:

1. Envía la imagen o el prompt a **Rodin Gen-2** para crear el asset de origen.
2. Envía el UUID de esa tarea a **BANG**.
3. Sondea ambas tareas asíncronas hasta que terminan.
4. Descarga los archivos de partes de BANG y escribe un `manifest.json` local.

Está enfocada solo en BANG: los prompts de texto se aceptan como fuente para las partes, no como generación de un modelo entero sin dividir.

## Detalles prácticos

- **Requisitos**: Python 3.7+, `requests` y `Pillow`; clave de API de Hyper3D (hay una clave de demo pública, `vibecoding`, si no se configura ninguna).
- **Formatos de parte**: `glb`, `usdz`, `fbx`, `obj`, `stl`. Materiales `PBR`, `Shaded`, `All` o `None`; resolución de textura `Basic` o `High`.
- **Formatos de imagen de entrada**: `.jpg`, `.jpeg`, `.png`, `.webp`.
- La fuerza de corte (`--strength`) va de 2 a 12; las URLs de descarga caducan rápido, así que el script baja los archivos de inmediato.

## Por qué encaja en la vault

Es el eslabón "imagen → partes 3D animables" del pipeline de juegos con IA: donde [[Mint 3D]] o [[img2threejs]] entregan un asset entero, esta skill entrega **piezas separadas** que un motor puede mover por separado. Combina con [[Blender MCP]] (que ya usa Rodin para texto→3D) y con los destinos [[Godot]] y [[Three.js Game Skills (Majid Manzarpour)]].

## Datos y atribución

- **Estrellas**: verificado el 18 oct 2026, **16 ⭐** y 0 forks; 18 commits. Proyecto muy nuevo y pequeño: la demo del tuit es más ambiciosa que la tracción del repositorio.
- El README no declara licencia ni describe el proyecto más allá del flujo de la skill.
- El tuit anunciaba "assets 3D animables desde imágenes sin edición manual"; conviene leerlo como demostración de la skill, no como una garantía de calidad del rigging.

# #skills #3d #agente
