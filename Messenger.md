# Messenger — Web para analizar

**URL**: https://messenger.abeto.co/
**Tipo**: Juego 3D WebGL / experiencia interactiva
**Descripción**: Juego de reparto de mensajes en un planeta miniatura. Estilo cel-shaded, multijugador, fluido en móvil.

## Stack

- Three.js puro (sin Unity/Godot)
- three-mesh-bvh para optimización
- WebSocket (Node.js) para multijugador
- Modelado: Houdini + Blender
- Texturas: Substance
- Animaciones: GSAP

## Puntos clave a analizar

- Cómo estructuran el asset loading (5.7 MB iniciales, 17.5 MB total)
- Shader de playa custom — caso de estudio de shaders en Three.js
- Multijugador en navegador sin engine
- Cel-shading ejecutándose en WebGL con buen rendimiento en móvil

## Enlaces

- Jugar: https://messenger.abeto.co/
- Showcase técnico: https://www.webgpu.com/showcase/messenger/
- Estudio: https://abeto.co/

# #web #3d
