# WebGPU

**WebGPU** es la nueva API gráfica para navegadores, sucesora de WebGL. Permite que el navegador hable directamente con la GPU de forma moderna y eficiente.

## Diferencia con WebGL

| | WebGL | WebGPU |
|---|---|---|
| **Basado en** | OpenGL ES (arquitectura de 2007) | Metal, Vulkan, DirectX 12 |
| **Lenguaje de shaders** | GLSL | WGSL (también acepta GLSL y HLSL) |
| **Compute shaders** | No | Sí |
| **Rendimiento** | Limitado por el driver OpenGL | Mucho más cercano al hardware |
| **Path tracing** | Muy lento | Factible en tiempo real |

## Qué permite hacer

- **Compute shaders**: ejecutar cálculos masivos en paralelo en la GPU (no solo gráficos)
- **Path tracing** en tiempo real: simular rebotes de luz realistas (como el visor de xr-need.com)
- **Mucho más rendimiento** que WebGL, sobre todo en escenas complejas
- Menos carga en la CPU, mejor aprovechamiento de la GPU moderna

## Compatibilidad

Soportado en Chrome, Edge, Firefox y Safari. Funciona en Windows, Mac, Linux y dispositivos móviles con GPU compatible.

## Cómo se usa

Desde JavaScript, se accede a través de `navigator.gpu.requestAdapter()`. Librerías como **Three.js** ya tienen backend WebGPU (se activa en lugar de WebGL). No necesitas escribir WGSL directamente si usas una librería.

# #contenido #web #3d
