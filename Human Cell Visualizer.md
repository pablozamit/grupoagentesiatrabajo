# Human Cell Visualizer

**Human Cell Visualizer** es una aplicación web 3D conceptual que combina biología, partículas y animación morphing con paneles informativos y anatomía anotada. Creado por [@techartist_](https://x.com/techartist_), es open source y funciona completamente en el navegador.

**Demo:** [iamtechartist.github.io/human-cell-visualizer](https://iamtechartist.github.io/human-cell-visualizer/)  
**Código:** [github.com/iamtechartist/human-cell-visualizer](https://github.com/iamtechartist/human-cell-visualizer)

## Qué hace

- Visualiza **3 tipos de células humanas** como nubes de partículas 3D: fotorreceptor (cono), melanocito y neurona de Purkinje
- **Morphing animado** entre tipos celulares — las partículas se reorganizan de una forma a otra
- **Paneles de anatomía anotada** con conectores que señalan regiones específicas (discos, mitocondrias, núcleo, sinapsis, etc.)
- Controles de cámara: órbita, zoom, auto-rotación, pausa
- Efectos visuales: bloom, viñeta, ruido cinematográfico, bordes animados con `@property` CSS

## Tecnología

- **Three.js** — renderizado WebGL de ~108k partículas con shaders custom (GLSL)
- **UnrealBloomPass** + **EffectComposer** para post-procesado
- Shaders de vértice y fragmento que manejan morphing, iluminación direccional, fresnel y energía por región
- Sistema de anotaciones anatómicas con SVG y posicionamiento 3D→2D
- Diseño UI con glassmorphism, animaciones CSS `@property` y tipografía Inter

## Por qué importa

Es un ejemplo excepcional de visualización científica con Three.js y shaders. Demuestra cómo combinar datos procedurales (posición, región, jerarquía) con animación basada en roles biológicos. El código es un solo archivo HTML autocontenido — ideal para estudiar y forkear.

## Relacionado

- [[Three.js]] — Librería 3D base
- [[Mesh3D Gallery]] — Más sitios con gráficos 3D
- [[img2threejs]] — Convierte fotos a modelos procedurales Three.js

# #3d #web #proyecto
