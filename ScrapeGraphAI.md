# ScrapeGraphAI

[ScrapeGraphAI](https://scrapegraphai.com) usa LLM para convertir páginas/HTML en datos estructurados. Hay dos productos: [librería Python abierta](https://github.com/ScrapeGraphAI/Scrapegraph-ai) y API gestionada de pago.

## Librería frente a API

- `scrapegraphai`, MIT: pipelines con modelo elegido por el operador, incluido local vía [[Ollama]]. El operador configura navegador/proxies/infra y paga tokens y recursos cuando corresponda.
- API, SDK Python/JS: Scrape, Extract, Search, Crawl y Monitor; esquemas JSON e historial según [docs](https://docs.scrapegraphai.com/introduction). Créditos de pago, render JavaScript gestionado y capa de acceso. No garantiza alcanzar cualquier web.

## Validar datos, no solo JSON

Un JSON válido puede contener datos inventados, erróneos o viejos. Definir esquema, aceptar valores ausentes, guardar URL/fecha y contrastar una muestra con la página original. Medir cobertura, errores y coste antes de sustituir selectores deterministas.

El [post](https://x.com/scrapegraphai/status/2056306192570314986) promete menos mantenimiento de XPath. La crítica del hilo es pertinente: estructurar texto no autentica contenido ni elimina validación. Respetar permisos, condiciones del sitio y datos personales; acceso gestionado no es permiso para eludir restricciones.

## Recursos

- [Librería y diferencias con API](https://github.com/ScrapeGraphAI/Scrapegraph-ai)
- [API y servicios](https://docs.scrapegraphai.com/introduction)
- [Web](https://scrapegraphai.com)

## Relacionado

- [[Scraping]], [[Crawl4AI]], [[Firecrawl]], [[Ollama]]

#opensource #web #agente
