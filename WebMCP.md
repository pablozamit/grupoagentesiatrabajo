# WebMCP y WebMCP Gen

**WebMCP** es una propuesta de estándar (borrador del Web Machine Learning Community Group del W3C, sept 2026) que permite a los agentes de IA interactuar con páginas web de forma estructurada, parecido a lo que MCP hace para herramientas. El problema es que los dueños de los sitios tienen que escribir y mantener esos archivos WebMCP a mano, y casi nadie lo hace.

**WebMCP Gen** soluciona eso: es una skill para agentes que **explora cualquier página web y genera el archivo WebMCP automáticamente**. Luego lo inyecta con Stagehand (una herramienta de Browserbase) y el agente puede interactuar con la web de forma mucho más fiable.

## El estándar detrás

> Agent-ready ≠ scrapable. Agent-ready = your site exposes typed tools (search, checkout, inventory). Install the extension, pick one, and watch an agent actually use it.
>
> _—@CoolestAK87 (27 may 2026)_

La especificación define una API de JavaScript con la que una web expone herramientas tipadas (funciones con descripción en lenguaje natural y esquema estructurado) que el agente invoca directamente: la página actúa como un **servidor MCP en el lado del cliente**, sin backend extra. Estado a octubre de 2026:

- **Especificación**: Draft Community Group Report del W3C (aún no es estándar). [webmachinelearning.github.io/webmcp](https://webmachinelearning.github.io/webmcp)
- **Chrome** ya documenta su implementación para agentes: [developer.chrome.com/docs/ai/webmcp](https://developer.chrome.com/docs/ai/webmcp)
- **webmcp.cool** («The WebMCP Directory»): directorio comunitario de webs agent-ready, con extensión para probarlas.

## ¿Qué problema resuelve?

Cuando un agente de IA quiere usar una web (buscar vuelos, rellenar un formulario, consultar un precio), normalmente tiene que interpretar el HTML visualmente, como un humano mirando la pantalla. Esto es lento y propenso a errores.

Con WebMCP, la web le dice al agente: *"Estos son los botones, estos los campos, así se navega"*. Es como darle un mapa al agente en vez de que tenga que orientarse mirando el paisaje.

## Quién lo ha hecho

Creado por [Browserbase](https://browserbase.com). La skill `webmcp-gen` la ha publicado [justine](https://x.com/MachJustine) (growth eng de Browserbase).

## Cómo se usa

Instalas la skill en tu agente:

```bash
npx skills add webmcp-gen
```

Luego el agente puede explorar cualquier página y generar el WebMCP automáticamente. El resultado se inyecta con Stagehand y el agente puede interactuar con la web usando el mapa generado.

## Por qué es importante para AEO

WebMCP es como tener schema.org pero para la interacción del agente con la web. Si tu sitio tiene WebMCP, los agentes pueden navegarlo sin errores: buscar productos, comparar precios, rellenar formularios. Es optimizar tu web para que los agentes la usen bien, no solo para que la lean.

Como dice Paul Klein (fundador de Browserbase): *"WebMCP facilita que los agentes interactúen con tu sitio, ideal para AEO"*.

## Soporte en ChatGPT (octubre 2026)

[nekuda_ai](https://x.com/nekuda_ai/status/2092700742897590355) señala que **ChatGPT ya soporta WebMCP**: basta con añadir herramientas WebMCP a tu web para que los agentes la usen directamente, y sugiere empezar por un escaneo del sitio o construirlas a partir de tu propio código. Es decir, el estándar deja de ser solo una propuesta de W3C y una implementación de Chrome: un agente de consumo como ChatGPT ya lo consume. Para el sitio, la tarea práctica es la misma que la de AEO: exponer herramientas tipadas (buscar, comprar, consultar) en lugar de exigir que el agente interprete el HTML.

## Enlaces

- Skill: [skills.sh](https://skills.sh) (busca `webmcp-gen`)

Relacionado: [[Best AEO Skill]], [[GEO]], [[Agent-Reach]], [[Browser Use]], [[MCP]]

# #web #agente #aeo #seo #ia
