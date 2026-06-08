# Stack 3D en web

Cuatro notas de la enciclopedia forman el **stack típico para crear experiencias 3D en el navegador**. Esta nota explica el flujo y cómo encaja cada pieza.

## El flujo en 4 pasos

### 1. Renderizar la escena → [[Three.js]]

[[Three.js]] es la **librería base**. Abstrae WebGL y permite crear escenas 3D en el navegador con JavaScript:

- Escenas, cámaras, luces, geometrías, materiales
- Animaciones, controles, post-procesado
- Compatible con todos los navegadores modernos
- Es el estándar de facto (la usan Three.js.org,Bruno Simon, el metaverso, etc.)

### 2. Comprimir los modelos → [[Draco]]

[[Draco]] es el **compresor de mallas 3D de Google**. Se usa en la etapa final, una vez que el modelo ya está diseñado:

- Un modelo de 10 MB puede bajar a 1-2 MB sin perder calidad visible
- Acelera la carga, sobre todo en móvil
- Hay una versión 100% JavaScript (`draco.js`) sin necesidad de WebAssembly
- Se integra directamente con [[Three.js]]

### 3. Añadir efectos → [[Plume]]

[[Plume]] es una **librería moderna de partículas GPU para Three.js**:

- Sistema de partículas puramente GPU con WebGPU + TSL
- Escala a cientos de miles de partículas sin bloquear el hilo principal
- Módulos composables: gravedad, color, eventos, drag, etc.
- Ideal para fuegos artificiales, escombros, efectos compuestos

### 4. Inspirarte y aprender → [[Whitespace Experiments]]

[[Whitespace Experiments]] es una **colección de experimentos de diseño web interactivo** con código público:

- Three.js, WebGL, shaders, animaciones, partículas
- Proyectos como Code Slice Hero, Particle Phones, Mobius Strip
- Sirve para inspirarte y copiar técnicas a tus proyectos

## Diagrama del flujo

```
Diseño en Blender / Maya / Cinema 4D
            │
            ▼ Exportar (GLTF, OBJ, FBX)
            │
            ▼ Comprimir con [[Draco]] ← opcional pero recomendado
            │
            ▼ Cargar con [[Three.js]] ← la base
            │
            ▼ Añadir efectos con [[Plume]] ← si necesitas partículas
            │
            ▼ Publicar en web con [[Vercel]] o cualquier hosting
            │
            ▼ Inspirarte antes con [[Whitespace Experiments]]
```

## Cuándo usar cada pieza

| Necesitas… | Usa |
|------------|-----|
| Renderizar cualquier cosa 3D en la web | [[Three.js]] |
| Cargar modelos pesados rápido | [[Draco]] |
| Fuegos artificiales, humo, chispas, partículas a alta escala | [[Plume]] |
| Ideas de qué es posible y código para copiar | [[Whitespace Experiments]] |

## Combinaciones habituales

- **Visualizador de producto** (e-commerce 3D): [[Three.js]] + [[Draco]]
- **Portfolio 3D con efectos**: [[Three.js]] + [[Plume]] + ideas de [[Whitespace Experiments]]
- **Juego web**: [[Three.js]] + [[Plume]] + servidor de juego (ver [[Tinyskies]])
- **Web inmersiva para artista**: las cuatro combinadas

## Recursos para empezar

1. Lee [[Three.js]] y sigue los ejemplos oficiales de threejs.org
2. Descarga un modelo GLTF de prueba y comprímelo con [[Draco]]
3. Si quieres efectos, instala [[Plume]] sobre Three.js
4. Para inspirarte, hojea [[Whitespace Experiments]] y copia un experimento

# #3d #diseno #contenido
