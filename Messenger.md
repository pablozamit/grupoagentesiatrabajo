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

## Viralidad y clones (junio 2026)

- Post de [@HeyMaysarah](https://x.com/HeyMaysarah) con **4.8M views**: el dueño original es [@abeto_co](https://x.com/abeto_co)
- Un dev ruso intenta un clon similar con **Claude Opus 4.8**: [opusdev.org](https://opusdev.org) — caso vivo de "replicar un referente con un frontier" (ver [[AI Critic Loop]])

# #web #3d
