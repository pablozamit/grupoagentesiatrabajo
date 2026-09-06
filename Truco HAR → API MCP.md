# Truco HAR → API / MCP desde cualquier web

**Truco** (viral, de [@anaisbetts](https://x.com/anaisbetts) y difundido por [@Fluyeporlaweb](https://x.com/Fluyeporlaweb)) para crear **una API o un servidor MCP de cualquier web sin tocar su backend**, usando el tráfico de red de tu propio navegador como documentación viva. Te da acceso programático a una web que **ni tenía API pública**.

## El truco en 7 pasos

1. **Entras en la web**
2. Abres **DevTools → pestaña Network**, activas **"Keep Log"**
3. **Cierras sesión y vuelves a iniciar sesión** (captura el login/auth)
4. **Navegas por todas las páginas** de las que quieras sacar datos

Hasta aquí solo estás grabando. Ahora:

5. Clic derecho en cualquier petición → **"Copiar todo como HAR"**, lo guardas como archivo
6. Repites con **"Copiar todo como fetch"**
7. **Le pasas esos archivos a Claude en un proyecto vacío** y le pides que te construya **una API en TypeScript y un servidor MCP** con eso

Y ya tienes acceso programático a la web, con sus endpoints, headers, autenticación y formatos de respuesta capturados de la realidad.

## Por qué funciona

El HAR (HTTP Archive) contiene **todas las peticiones reales** que hizo la web: URLs, métodos, headers (incluyendo auth), cuerpos, respuestas. Es la documentación perfecta del API que nadie publicó. Claude lo lee y reconstruye los tipos TypeScript y los endpoints del MCP server directamente.

## Variantes y consejos de la comunidad

- **Hazlo una skill**: en vez de hacerlo a mano cada vez, dale el post a tu agente y que construya **una skill que automatice el flujo para cualquier web** (el "movimiento más inteligente", según PA13L0)
- **Con backend con login**: funciona también — capturar la sesión real del navegador da las cookies/tokens correctos
- **Ojo con CAPTCHAs o verificaciones intermedias**: esos sí son un muro (pero puedes sacar datos de muchísimos sitios sin llegar a ellos)
- Empieza manual la primera vez, automatiza después

## El matiz de seguridad

Estás **recreando la capa de API de un servicio ajeno** para tu uso. Aplica lo mismo que a cualquier scraping: revisa los términos del servicio, no excedas tasas, y no rompas autenticaciones ajenas. La herramienta en sí (HAR del propio tráfico que tú ya generaste) es inofensiva; el uso define los límites.

## Recursos

- Hilo original: [@Fluyeporlaweb en X](https://x.com/Fluyeporlaweb)
- Origen del truco: [@anaisbetts en X](https://x.com/anaisbetts)

## Relacionado

- Scraping y extracción para agentes: [[Firecrawl]], [[Apify]], [[Camofox Browser]]
- Convertir webs en APIs: [[wrapapi.com]], [[OctenAI]]
- MCP y agentes: [[Blender MCP]], [[Landingfolio MCP]], [[Acceso a internet desde agentes]]

# #agente #web #contenido #productividad