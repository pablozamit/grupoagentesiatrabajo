# Draco

[Draco](https://github.com/google/draco) es un **compresor de modelos 3D** open source de Google. Reduce el tamaño de mallas y nubes de puntos sin perder apenas calidad visual, pensado especialmente para cargar modelos 3D en la web de forma rápida.

## Qué hace

- Comprime mallas (meshes) y nubes de puntos
- Un modelo que pesa 10 MB puede bajar a 1-2 MB o menos
- Las páginas web cargan los modelos **mucho más rápido**, sobre todo en móvil

## No es una herramienta de diseño

Draco **no sirve para crear ni modelar**. No sustituye a Blender, Maya o Cinema 4D.

Su papel es la **etapa final** del flujo: una vez que ya tienes el modelo diseñado y exportado, lo comprimes con Draco y lo publicas en la web.

## Flujo típico

1. **Diseño** → modelas en Blender, Maya, Cinema 4D, etc.
2. **Exportación** → sacas el archivo (GLTF, OBJ…)
3. **Compresión** → lo pasas por Draco
4. **Visualización en web** → lo cargas con **Three.js**, Babylon.js, Unity Web, etc.

## Versión JavaScript (draco.js)

[draco.js](https://github.com/mrdoob/draco.js) es una implementación **100% JavaScript** de Draco (sin WASM). Es más rápida y más ligera que la versión clásica, y se usa directamente desde el navegador o desde Node.js.

Ideal para desarrolladores web que quieren mostrar modelos 3D en páginas o experiencias interactivas sin la sobrecarga de WebAssembly.

## Casos de uso recomendados

- Tiendas online con visualizador de productos en 3D
- Experiencias interactivas en la web (juegos, portfolios, configuradores)
- Visores de mapas 3D o datos geográficos
- Galerías de modelos y arte digital
- Apps de realidad aumentada en navegador

## Recursos

- Repositorio oficial: [github.com/google/draco](https://github.com/google/draco)
- Implementación JavaScript: [github.com/mrdoob/draco.js](https://github.com/mrdoob/draco.js)
- Uso en Three.js: ver [[Three.js]]

# #3d #contenido
