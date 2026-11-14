# Kitesurf

[Kitesurf](https://kitesurf.dev) es un motor de navegador experimental de Cloudflare que corre enteramente sobre Workers: parsea el HTML, aplica el CSS, ejecuta el JavaScript de la página y pinta el resultado **sin Chrome ni contenedor de navegador**. Habla Chrome DevTools Protocol, así que clientes como Puppeteer pueden manejarlo tal cual. Repo [cloudflare/kitesurf](https://github.com/cloudflare/kitesurf), licencia Apache-2.0, ~850 ⭐.

## Puntos clave

- **Hecho para agentes**: inspección del DOM, consola y red, y salidas de screenshot, PDF y HTML renderizado desde una URL.
- **Menos recursos que Chrome**: según el anuncio que lo difundió (@AmirAnonn), está escrito en Rust y WebAssembly, consume hasta 7x menos CPU y RAM que Chrome, aunque es ~2x más lento y no salta captchas; encaja para tareas ligeras de agentes (capturas, scraping ligero, búsqueda web).
- **Requisito**: necesita Dynamic Workers, que forman parte del plan de pago de Cloudflare Workers; en local se desarrolla con `wrangler dev`.

## Relacionado

- [[WebMCP]], [[Mobile-MCP]]

# #ia #opensource
