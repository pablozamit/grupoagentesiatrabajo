# Rube

**Rube** es el **servidor MCP universal de Composio**: un único endpoint (`https://rube.app/mcp`, con OAuth 2.1) que conecta a tu agente con **500+ aplicaciones** (Gmail, Slack, GitHub, Notion, Linear, Stripe, Supabase, Google Sheets, Discord...). Es el servidor MCP que Composio recomienda ahora en lugar de su MCP antiguo.

## Por qué importa

- **Una sola integración**: en vez de configurar un MCP por cada SaaS, el agente apunta a un endpoint y accede a todo el catálogo, con autenticación por-app gestionada por Composio (OAuth o API key).
- **Arquitectura de meta-tools**: en lugar de volcar miles de definiciones de herramientas al contexto, el agente primero **busca** la herramienta adecuada, **pide su schema on-demand** y luego la ejecuta (`RUBE_GET_TOOL_SCHEMAS`, `RUBE_MANAGE_CONNECTIONS`). Mantiene el prompt pequeño.
- **Workflows multi-app**: puede encadenar acciones que cruzan apps (leer de Gmail, abrir issue en GitHub, postear en Slack) y ejecutarlas en paralelo.
- **Clientes**: Cursor, Claude Desktop, VS Code, Claude Code, Codex, Cline, Windsurf, Zed y cualquier cliente MCP.

## Atribución y verificación

El anuncio de [@RoundtableSpace](https://x.com/RoundtableSpace/status/2038258626641719740) habla de un *"integration database for AI agents"* con **47.000 acciones agénticas en 250+ apps**. La documentación de Composio describe **500+ apps**; las dos cifras no coinciden, así que la de 47.000 acciones se cita **sin verificar**.

## Caveats

- Es un servicio **hospedado**, no un paquete que corres tú: requiere cuenta de Composio y un endpoint remoto. Los tokens de las apps los cifra Composio (SOC 2, OAuth 2.1) y se pueden revocar desde su panel.

## Relacionado

- [[OpenMausBot]] — ejemplo de tooling que expone apps al agente vía MCP
- [[Agent loops (mvanhorn)]] — encadenar tools en un loop
- [[Hermes Skills Hub]] — otro catálogo de capacidades para agentes

# #agente #productividad #ia
