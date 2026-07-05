# Anime.js

[Anime.js](https://animejs.com/) es una biblioteca ligera de JavaScript para crear animaciones en la web. Rápida, flexible y fácil de usar para motion design, micro-interacciones y efectos visuales premium.

## Qué permite hacer

- Animar propiedades CSS (posición, color, tamaño, opacidad, etc.)
- Animar elementos SVG, atributos DOM y objetos JavaScript
- Animaciones complejas con stagger (secuencias en cadena), bucles, retardos
- Ideal para interfaces interactivas, micro-interacciones y sitios con movimiento premium

## Características

- Muy ligera: en V4 puedes importar solo lo necesario (~11 KB)
- API simple y potente
- Funciona con HTML, CSS, SVG y frameworks (React, Angular, etc.)
- Easing avanzado para animaciones suaves y profesionales

## Novedades v4.5 (Junio 2026)

- **Three.js adapter**: Anima objetos 3D con API similar a CSS transforms (rotate, skew, scale)
- **Hasta 50% menos código** para animaciones 3D
- **Propiedades anidadas**: camera fov, scene background, light color directamente en el parámetro
- **Material colors**: anima colores en el espacio de color correcto pasando rgb/hex
- **Instanced meshes**: anima meshes por lotes como cualquier otro mesh
- **Stagger 3D**: secuencias en cadena para objetos 3D
- **TransformOrigin 3D**: soporte para skewX/Y/Z

Ejemplo de uso con Three.js adapter:

```js
anime({
  targets: mesh.position,
  x: 2,
  rotate: 360,
  skewX: 45,
  duration: 2000
})
```

## Instalación

```bash
npm i animejs
```

O vía CDN directamente en el navegador.

## Enlaces

- Docs Three.js adapter: [animejs.com/documentation/adapters/threejs-adapter](https://animejs.com/documentation/adapters/threejs-adapter)
- Changelog v4.5: [github.com/juliangarnier/anime/releases/tag/v4.5.0](https://github.com/juliangarnier/anime/releases/tag/v4.5.0)

# #diseno #web #recursos #3d
