# Landingfolio MCP

**Landingfolio MCP** es un servidor MCP que expone la librería de más de 4.600 componentes de [Landingfolio](https://landingfolio.com) (colección de 10 años de [Danny Postma](https://x.com/dannypostma)) para que tu agente de código tenga buen gusto de diseño mientras construye.

- **MCP server:** `https://mcp.landingfolio.com/mcp`
- **Precio:** Gratis — 100 requests/día por token, con burst de 10/min
- **Web:** [landingfolio.com/mcp](https://landingfolio.com/mcp)

## Qué hace

Tu agente puede escribir una hero section, pero no puede diseñarla. Con Landingfolio MCP, el agente tira de screenshots reales de las mejores landing pages de la web (hero sections, pricing tables, testimonios...) y los usa como referencia mientras construye la tuya.

## Instalación

1. Crea cuenta gratuita
2. Copia tu token del dashboard
3. Pega una línea en la config de tu agente:

```
claude mcp add --transport http landingfolio https://mcp.landingfolio.com/mcp --header "Authorization: Bearer lf_YOUR_TOKEN"
```

Compatible con Claude Code, Cursor, Codex, Windsurf y VS Code.

## Qué datos recibe el agente

- Screenshots de secciones de componentes de la librería pública de inspiración
- Su categoría y un enlace a la página de origen
- Nada más: no llega ningún código, prompt ni archivo de tu proyecto al servidor

> "Tu agente está a una línea de configuración de tener buen gusto." — Danny Postma

## Tags

- #diseno — Referencias visuales de las mejores landing pages
- #agente — MCP para que el agente diseñe con buen gusto
- #web — Componentes web de landing pages reales
