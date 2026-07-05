# HTML5

HTML5 es la **quinta versión mayor de HTML**, el lenguaje de marcado estándar para estructurar el contenido de páginas web. Es la base de toda la web moderna.

## Qué es

- Estándar mantenido por el **W3C** y la **WHATWG**
- Sucesor de HTML 4.01 y XHTML 1.0
- Diseñado para ser **compatible con lo anterior** y a la vez añadir soporte nativo para multimedia, gráficos y aplicaciones web

## Para qué sirve

- **Estructurar** el contenido de una página web (texto, imágenes, formularios, etc.)
- Servir de **esqueleto** sobre el que se aplican estilos (CSS) y comportamiento (JavaScript)
- Es la base de cualquier web que visites, desde un blog hasta una aplicación compleja

## Novedades principales frente a HTML 4

- **Semántica**: nuevas etiquetas que describen el rol del contenido
  - `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`
- **Multimedia nativa**: `<video>` y `<audio>` sustituyen a plugins como Flash
- **Gráficos en el navegador**: `<canvas>` para dibujar 2D/3D con JavaScript
- **Formularios mejorados**: nuevos tipos de input (`email`, `date`, `number`, `range`, `color`, etc.) y validación nativa (`required`, `pattern`, `placeholder`)
- **Almacenamiento local**: `localStorage` y `sessionStorage` (antes solo contabas con cookies)
- **APIs modernas**: geolocalización, drag & drop, WebSockets, Web Workers
- **Doctype simplificado**: ahora es solo `<!DOCTYPE html>`

## Ejemplo mínimo

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <title>Mi página</title>
  </head>
  <body>
    <header>
      <h1>Hola, mundo</h1>
    </header>
    <main>
      <p>Bienvenido a mi web.</p>
    </main>
  </body>
</html>
```

## Buenas prácticas

- Usar las **etiquetas semánticas** en lugar de `<div>` para todo
- Separar **estructura (HTML)**, **estilo (CSS)** y **comportamiento (JavaScript)**
- Validar el HTML con herramientas como el [Validador del W3C](https://validator.w3.org/)

# #contenido #web
