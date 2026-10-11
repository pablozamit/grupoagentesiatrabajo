# Scraping

**Scraping** (web scraping) es extraer datos de páginas web de forma automatizada: en lugar de copiar a mano, un programa recorre la fuente (mapas, directorios, tiendas) y devuelve una tabla usable (CSV, JSON).

## Scraping en Google Maps

Google Maps es el mayor directorio de negocios locales que existe; scrapearlo permite montar listas de clientes potenciales por nicho y zona sin comprar bases de datos. Pipeline descrito en un hilo de X (oct. 2026, ver Recursos):

1. **Extraer negocios** por nicho + área: búsqueda por código postal y filtro por número de reseñas. Herramientas: [[MapsData]], [[Apify]], [[D7]], [[Serpdeck]] o APIs de [[RapidAPI]].
2. **Re-descargar (re-pull)** cuando la lista crezca: los datos de Maps cambian.
3. **Optimizar el paso con LLM**: si se usa un modelo para limpiar o clasificar resultados, procesar en lotes para no disparar el coste.
4. **Encontrar al dueño**: crawl de la web del negocio + buscador de email tipo [[Prospeo]] (el hilo incluye un prompt de ejemplo). Regla práctica: si no aparece ("not found"), no forzar ese contacto.
5. **Waterfall de emails**: [[Prospeo]] → [[Icypeas]] → crawl propio; cada capa cubre lo que la anterior no encuentra.
6. **Verificar antes de enviar**: [[MillionVerifier]] + [[BounceBan]] (esta última para direcciones catch-all) hasta dejar el bounce por debajo del 1% (cifra afirmada por el autor del hilo).
7. **Buzones genéricos**: usar info@/team@ solo con reglas claras (el hilo da dos).
8. **El mensaje**: copy con un dato local del negocio y CTA directo (el hilo usa "MAPS" y cal.link). Ver [[Cold Email]].

## Herramientas citadas

- [[MapsData]] — scraper de Google Maps con emails verificados
- [[Apify]] — plataforma generalista de scraping en la nube
- [[D7]] — D7 Lead Finder: leads de negocios por sector
- [[Serpdeck]] — citada en el hilo como fuente de datos de Maps (ver su nota)
- [[RapidAPI]] — marketplace de APIs, incluidas varias de Google Maps
- [[Prospeo]] — email finder
- [[Icypeas]] — email finder B2B
- [[MillionVerifier]] — verificación de listas de email
- [[BounceBan]] — verificación de emails catch-all

## Recursos

- Hilo de origen (difusión): [Christian / @coldemailchris en X](https://x.com/coldemailchris/status/2106847718639632443)

## Relacionado

- [[Apify]] — la opción generalista
- [[Ejercicio 1 - Scraping de tu propio barrio]] — práctica guiada con agente
- [[Cold Email]] — el uso típico de estas listas
- [[MapsData]] — la opción específica de Maps

# #contenido #web
