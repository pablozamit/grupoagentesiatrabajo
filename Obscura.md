# Obscura

**Obscura** es un **motor de navegador headless open source** escrito en **Rust**, pensado para web scraping y automatización con agentes de IA. Se distribuye como **un solo binario (~70 MB)** que arranca al instante y habla **Chrome DevTools Protocol (CDP)** de forma nativa, por lo que funciona como **reemplazo directo de Puppeteer y Playwright** (se cambia el binario, el código del agente no cambia).

## Por qué importa para agentes

- **Ligero y rápido**: el anuncio lo describe con ~30 MB de RAM y ~85 ms por carga de página, frente a los ~2 s de arranque y ~200 MB de memoria de un Chrome completo.
- **Modo sigiloso (stealth)**: randomización de huella por sesión (GPU, canvas, audio, batería), bloqueo de miles de dominios de trackers y enmascarado de `navigator.webdriver`. La pretensión es que se comporte "como Chrome real".
- **Ejecuta JavaScript real** (V8) y bloquea anuncios, analítica y scripts de tracking por defecto.
- **Boundary correcta para agentes**: encaja en la misma familia que [[Moli Browser]], [[Camofox Browser]] y [[Browser Use]].

## Atribución y verificación

Los datos anteriores provienen de dos hilos de X (no son un benchmark independiente):

- [@itsharmanjot](https://x.com/itsharmanjot/status/2095876108067508231) — "One developer shipped this alone. Free to use."
- [@0xJokker](https://x.com/0xJokker/status/2094427822064279870) — la versión en español afirma **"+22k estrellas en GitHub"** (cifra **sin verificar** en esta nota; no usarla como prueba de calidad).

**Caveat**: el "85 ms" es una cifra de titular. En el propio hilo se admite que sin detallar el hardware, la red y el cold start, no es un benchmark significativo. Además, un binario sin firmar con funciones de evasión puede disparar herramientas de seguridad; conviene compilar desde el código fuente y probarlo en un entorno aislado.

## Contraposición

En el benchmark **Lexbench** publicado por [[Moli Browser]] (1.308 tareas comparables), Obscura aparece con **~44,9 % de éxito**, por debajo de Chrome (99,8 %), Moli (81,9 %), Kitesurf (62,1 %) y Lightpanda (53,3 %). Es decir: prima la eficiencia de recursos, no la fidelidad de navegación.

## Relacionado

- Navegación para agentes: [[Moli Browser]], [[Camofox Browser]], [[Browser Use]], [[BrowserAct Skills]]
- Scraping/extracción: [[Firecrawl]], [[Crawl4AI]], [[ScrapeGraphAI]]
- Acceso a internet desde agentes: [[Acceso a internet desde agentes]]

# #agente #opensource #web
