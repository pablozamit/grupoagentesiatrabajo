# BroMetal

**BroMetal** es una alternativa a [[Three.js]] para gráficos 3D en la web, pensada para la era del vibecoding y los agentes de IA. Escribes los shaders en **TypeScript**, y se compilan **antes de ejecutarse** (ahead-of-time) a **WGSL** para la GPU. Es mucho más ligero que Three.js (~19 KB frente a ~600 KB) y solo usa **WebGPU**.

## La idea

En lugar de escribir shaders en strings de GLSL (que un agente de IA puede romper sin que te des cuenta hasta que la web se renderiza mal), BroMetal te deja escribir el shader como código TypeScript normal:

- Los errores de tu shader aparecen al **compilar**, con fichero, línea y columna exacta (`file:line:col`).
- Nada de "adivinar" en el navegador: si hay un error, el agente lo ve al construir, no cuando ya has abierto la web.
- Es más de 30× más ligero que Three.js.

## Cómo se usa

```bash
npm install brometal
npx brometal dev     # compila *.shader.ts → *.shader.gen.ts
npx brometal prod    # para producción
```

Escribes tus shaders en ficheros `*.shader.ts`; el compilador los traduce a `*.shader.gen.ts` (contenen el WGSL + metadatos), y el runtime WebGPU los ejecuta. No hay "scene graph": tú controlas el bucle de dibujo.

## Funciones

- **createRenderer(canvas)** — crea el renderer WebGPU (lanza error si el navegador no lo soporta).
- **createProgram / mat4 / createCamera** — programadoras de dibujo y cámaras.
- **Geometrías paramétricas** — createCube, createSphere, createTorusKnot, etc.
- **`brometal/shaders`** — 30 shaders listos (fuego, caustics, domain warp, CRT, glitch, halftone...).
- **`brometal/shader-functions`** — funciones útiles: hash, noise, fbm, voronoi, easing, color, lighting, SDFs 2D/3D.
- **Instancing** — 125.000 cubos en una sola draw call (ejemplo `lots-of-cubes`).
- **Render targets / shadow maps** — texturas y sombras con `targetUv()`.

## Compatibilidad (WebGPU)

Solo usa WebGPU (se retiró el backend WebGL2 en la v0.14). Navegadores compatibles: Chrome/Edge 113+, Firefox 141+, Safari 26+. Hay un problema conocido de pantalla negra en Chrome/Linux sin mensaje de error → verifica primero si WebGPU está soportado.

## Versus [[Three.js]] (para agentes de IA)

| | [[Three.js]] | BroMetal |
|---|---|---|
| Shaders | GLSL en strings (sin compilación) | TypeScript tipado, compilado a WGSL |
| Errores | En runtime | En build, con file:line:col |
| Runtime | ~600 KB min | ~19 KB min / 7 KB gzip |
| Backend | WebGL (y WebGPU) | WebGPU |
| Scene graph | Sí | No (controlas el bucle de dibujo) |

## Recursos

- Web oficial: [brometal.dev](https://brometal.dev)
- Repositorio: [github.com/ericdrowell/brometal](https://github.com/ericdrowell/brometal)
- Ejemplo: [webGPU day-ocean](https://brometal.dev/examples/day-ocean)

# #3d #web