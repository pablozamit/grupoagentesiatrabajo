# Plume

**Plume** es una librería moderna de efectos de partículas (vfx) para Three.js, creada por [ThetaForgeCo](https://github.com/travisdmathis/plume).

## Características principales

- **Sistema de partículas puramente GPU** mediante WebGPU + TSL
- Sin fallback CPU, sin JS por partícula
- Escala a cientos de miles de partículas sin bloquear el hilo principal

- Cada emisor es un buffer de almacenamiento SoA + dos compute kernels (spawn/update)
- Módulos composables: spawn rate, init velocity, gravity, drag, color-over-life, etc.
- Añade módulos para más comportamiento, quítalos para menos

- **Sistema de eventos único**: Cuando una partícula muere, se añade atómicamente a un event buffer. Otro emisor puede consumir esos eventos como triggers de spawn.

## Tipos de efectos posibles

- Fuegos artificiales (fireworks)
- Escombros (debris)
- Efectos compuestos (compound effects)
- Todo encadenado en GPU sin round-trips

## Estado

- **Github**: [github.com/travisdmathis/plume](https://github.com/travisdmathis/plume) (pre-release)
- **Lanzamiento estimado**: primera semana de mayo 2026
- Prótesis pendientes:
  - Tree shake y reducción de tamaño
  - Paquete npm
  - Editor visual

## Para estar al tanto

Sigue a [@ThetaForgeCo](https://x.com/ThetaForgeCo) en X para actualizaciones.

# #3d #juegos