# Kitesurf

[Kitesurf](https://github.com/cloudflare/kitesurf) (Apache-2.0, ~2.300 ⭐) es un **motor de navegador experimental de Cloudflare construido para agentes**: descarga una página, ejecuta su JavaScript, la maqueta y la pinta **íntegramente sobre Cloudflare Workers** (aislados V8 + WebAssembly, núcleo en Rust), sin ningún proceso o contenedor de Chromium detrás. Anunciado el 6 de agosto de 2026 durante la Agents Week y liberado como open source después; en activo desarrollo.

## Cómo se usa

- Habla **Chrome DevTools Protocol**, así que se puede manejar con clientes CDP como Puppeteer. Ojo: Cloudflare reconoce que implementa **un subconjunto de CDP** (suficiente, dice, para inspección de DOM y red), así que la compatibilidad completa con Puppeteer/Playwright no está garantizada.
- Disponible **gratis mientras esté en beta** dentro de Browser Run, la API de navegador headless de Cloudflare (según el anuncio): basta añadir `browser=kitesurf` a la conexión CDP o a las Quick Actions (screenshot, PDF, HTML).
- **Playground público** en [kitesurf.dev](https://kitesurf.dev/): renderiza cualquier URL y permite inspeccionarla con Chrome DevTools integrado (DOM, consola, red y memoria del aislado WebAssembly).

## Para qué encaja

Chromium está pensado para humanos (pestañas, extensiones, 60 fps) y darle una instancia a cada agente es caro. Kitesurf apunta a lo que un agente necesita: motor **efímero, aislado y stateless** que existe solo durante la tarea y escala bien en cargas de IA en ráfagas. Según Cloudflare, es significativamente más eficiente en CPU y memoria que Chromium para tareas agénticas comunes (screenshots y extracción de HTML); es afirmación del propio proveedor.

Según el anuncio, hoy renderiza correctamente páginas como TodoMVC (vanilla, React, Vue, Angular, Preact), Wikipedia, Hacker News, el blog de Cloudflare y buena parte de su dashboard.

## Limitaciones declaradas

- **No reproduce vídeo ni WebGL**, no resuelve verificaciones anti-bot con huellas TLS reales (CAPTCHAs) y no sirve para sesiones autenticadas largas con estado persistente; para eso, Browser Run ofrece su opción Chromium.
- La fidelidad de render no es pixel-perfect; Cloudflare trabaja en ampliar cobertura CDP y de Web Platform Tests camino a producción.
- Para autoalojarlo hace falta **Dynamic Workers** (plan de pago de Workers); en local se ejecuta con `wrangler dev` y el propio README avisa de que workerd en local **no es un sandbox endurecido**: no abrir sitios no confiables con una instancia local.
- Inspirado en [[Obscura]], el motor headless en Rust, según cuenta el propio anuncio.

## Fuentes

- [Repositorio y README](https://github.com/cloudflare/kitesurf)
- [Anuncio oficial: Introducing Kitesurf (blog de Cloudflare, 6 ago 2026)](https://blog.cloudflare.com/kitesurf)
- [Playground](https://kitesurf.dev/)

## Relacionado

- [[Obscura]] — motor headless en Rust del que parte la idea
- [[Browser Use]], [[Moli Browser]], [[Camofox Browser]] — otros enfoques de navegador para agentes

#tipo/herramienta #tema/agentes/navegacion-y-control #tema/agentes
