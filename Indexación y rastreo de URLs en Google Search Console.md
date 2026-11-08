# Indexación y rastreo de URLs en Google Search Console

El estado **«Descubierta: actualmente sin indexar»** significa que Google conoce la URL, pero todavía no la ha rastreado. No implica por sí solo un error: Google puede aplazar el rastreo y no garantiza que toda URL enviada termine indexada. Revisar primero el estado de la página con URL Inspection, la respuesta HTTP, `robots.txt`, `noindex`, canonical, enlaces internos y sitemap.

La interfaz de URL Inspection permite solicitar el rastreo de una URL concreta, con cuotas y sin garantía de inclusión inmediata; Google indica que el proceso puede tardar días o semanas. Para muchas URLs, un sitemap ayuda a descubrirlas, pero tampoco obliga a Google a rastrearlas o indexarlas.

La **URL Inspection API** permite consultar el estado que figura en el índice para una URL de una propiedad verificada. No ofrece el botón de solicitar indexación. Por tanto, no se debe diseñar una tarea diaria que pretenda enviar automáticamente a indexación páginas generales mediante esa API. Automatizar la consulta y el informe de estado sí es distinto de automatizar una solicitud de rastreo.

- [Estados del informe de indexación de páginas](https://support.google.com/webmasters/answer/7440203)
- [Pedir a Google que vuelva a rastrear URLs](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl)
- [Método `urlInspection.index.inspect` de la API](https://developers.google.com/webmaster-tools/v1/urlInspection.index/inspect)

# #seo #web #contenido
