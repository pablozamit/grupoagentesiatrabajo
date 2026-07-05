# WebMCP y WebMCP Gen

**WebMCP** es un estándar que permite a los agentes de IA interactuar con páginas web de forma estructurada, parecido a lo que MCP hace para herramientas. El problema es que los dueños de los sitios tienen que escribir y mantener esos archivos WebMCP a mano, y casi nadie lo hace.

**WebMCP Gen** soluciona eso: es una skill para agentes que **explora cualquier página web y genera el archivo WebMCP automáticamente**. Luego lo inyecta con Stagehand (una herramienta de Browserbase) y el agente puede interactuar con la web de forma mucho más fiable.

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

## Enlaces

- Skill: [skills.sh](https://skills.sh) (busca `webmcp-gen`)

Relacionado: [[Best AEO Skill]], [[GEO]], [[Agent-Reach]], [[Browser Use]], [[MCP]]

# #web #agente #aeo #seo #ia
