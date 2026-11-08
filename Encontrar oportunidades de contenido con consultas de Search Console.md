# Encontrar oportunidades de contenido con consultas de Search Console

En **Rendimiento → Resultados de búsqueda → Consultas → Filtro personalizado (regex)** se puede usar esta expresión para encontrar consultas de al menos ocho grupos separados por espacios:

```regex
^(?:\S+\s+){7,}\S+$
```

Los anclajes `^` y `$` hacen que la expresión abarque la consulta completa. El filtro selecciona por número de fragmentos separados por espacios, no por intención: puede incluir búsquedas que no sean preguntas y cuenta una palabra con guion como un solo fragmento.

Ordenar por impresiones y revisar consultas con impresiones y pocos clics. Antes de editar, comprobar la posición media, la página que ya aparece, la intención y si la consulta es pertinente para el negocio. Si una página existente responde a la intención, suele ser mejor mejorarla que crear otra solo para repetir la frase. Dar una respuesta clara al principio puede ayudar a la persona; no hay garantía de subir el CTR por colocar una frase en la parte superior ni conviene añadir texto fuera de contexto.

Este filtro solo muestra consultas para las que el sitio ya apareció. Cero resultados no significa cero demanda. Search Console omite algunas consultas anonimizadas y puede truncar datos en filtros, por lo que la tabla no es un censo completo. Las respuestas del hilo especulan que algunas consultas podrían proceder de herramientas de IA, pero Search Console no identifica ese origen; no inferirlo a partir de la longitud.

- [Filtros avanzados y regex del informe de rendimiento](https://support.google.com/webmasters/answer/17011165)
- [Métricas y dimensiones del informe de rendimiento](https://support.google.com/webmasters/answer/7576553)

# #seo #contenido #web
