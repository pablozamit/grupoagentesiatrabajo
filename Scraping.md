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

## Extracción guiada por lenguaje natural

[[ScrapeGraphAI]] ofrece librería propia y API para transformar páginas/HTML en JSON. Evita describir cada selector a mano, pero exige esquema, valores ausentes y contraste con la fuente: JSON bien formado no garantiza datos correctos. Separar tokens/infra propios de créditos cloud.

## Recursos

- Hilo de origen (difusión): [Christian / @coldemailchris en X](https://x.com/coldemailchris/status/2106847718639632443)

## Relacionado

- [[Apify]] — la opción generalista
- [[Ejercicio 1 - Scraping de tu propio barrio]] — práctica guiada con agente
- [[Cold Email]] — el uso típico de estas listas
- [[MapsData]] — la opción específica de Maps


## Leads enriquecidos: Context.dev no elimina la verificación

[Context.dev Answers](https://www.context.dev/answers-api) busca fuentes web y devuelve una respuesta con esquema JSON. La [documentación de créditos](https://docs.context.dev/account/credits) cobra 10 en Fast y 100 en Ultra (predeterminado) por éxito. [Pricing](https://www.context.dev/pricing) da 1000 créditos mensuales gratis, sin tarjeta; docs dice email personal o laboral, no sólo trabajo como el hilo. 1000 créditos no son 1000 respuestas: serían 100 Fast o 10 Ultra antes de otras operaciones. No convertir 900M personas/70M empresas del lanzamiento en garantía de cobertura o actualidad de una ficha concreta.

El vídeo de 66s revisado muestra pregunta, esquema y respuesta investigada con fuentes en dashboard. No prueba exactitud de toda la base. Validar identidad, fecha y fuente de teléfono/dirección antes de publicar un directorio o hacer outreach; preservar desconocidos, no rellenar con conjetura. Mantener datos personales mínimos, finalidad y permisos de uso. Revisar muestra antes de ingesta masiva.

## Pipeline para vender webs: fallo medible antes de construir

El caso de 200 webs en 12 meses es un relato del hilo, sin Reddit original verificado ni contabilidad auditable. Lo transferible es detectar un problema concreto (lentitud, móvil, página ausente), validarlo con auditoría, preparar propuesta y después construir. Claude Code/Cloudflare son piezas; no justifican prometer volumen/beneficio.

Las respuestas señalan coste comercial y mantenimiento: 200 clientes pueden producir 200 incidencias, más hosting, soporte, SEO y seguridad. Separar entrega inicial de servicio recurrente, definir quién mantiene y comprobar el defecto antes de afirmarlo a un negocio. Scraping no otorga permiso de contacto ni de copiar sitios. Ver [[Auditoría SEO]], [[Vibecoding]].

Ver también: [[Jev (TypeSafe)]], [[Auditoría SEO]].

# #contenido #web
