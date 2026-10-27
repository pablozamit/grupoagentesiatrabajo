# Claude Commerce Agents

**Claude Commerce Agents** es el **blueprint open source de Anthropic** ([github.com/anthropics/commerce-agents](https://github.com/anthropics/commerce-agents)) para construir **agentes de comercio** sobre Claude. No es un producto soportado, sino una **implementación de referencia para forkear y adaptar**.

## Dos agentes

- **Shopping agent** (dentro de la app o web de la empresa): busca en el catálogo, compara, planifica compras de varios artículos, recuerda preferencias del cliente, arma el carrito y responde dudas de pedidos y políticas. Implementa `StorefrontBackend` sobre catálogo, carrito, pedidos y políticas. **Ningún método mueve dinero ni cierra el pedido.**
- **Merchant agent** (back office, para quien opera la tienda): analiza rendimiento de ventas, mantiene listados, actúa sobre inventario y alertas, recomienda precios y promociones y redacta campañas. Implementa `MerchantBackend` sobre analítica, catálogo, inventario, pricing y campañas.

Cada agente se define **una vez** (prompt, skills, contratos de tools y gates) y corre sobre tres rutas: **Messages API**, **Claude Agent SDK** y **Claude Managed Agents** (beta). Cada uno trae **5 skills** (flujos) que se cargan on demand.

## Guardrails

- El shopping agent se restringe a **datos reales del catálogo** (precios y productos) y evita patrones de upsell manipulativos.
- Toda escritura del merchant agent es un **cambio staged** con ID de servidor que el operador ve como tarjeta de preview; se aplica **solo tras aprobación humana fuera de la conversación** (botón en el portal, prompt en la consola del SDK o policy always-ask en Managed Agents). Una aprobación escrita en el chat no aprueba nada.
- Límites configurables: movimiento máximo de precio, profundidad de promoción, tamaño de restock, presupuesto de campaña y campos protegidos.

## Cómo empezar

- Cuatro verticales ejecutables en el repo: **retail, travel, telecom y entertainment**.
- **Plugin de Claude Code** con cuatro comandos: `/scaffold-commerce-agent`, `/add-commerce-flow`, `/author-commerce-evals` y `/review-commerce-agent`.
- Se puede empezar pequeño: un piloto implementa solo búsqueda y detalle de producto y deja el resto *stubbed*.

## Atribución

Anunciado por [@ClaudeDevs](https://x.com/ClaudeDevs/status/2095233745167282602) y por Anthropic (Jack Forestell). Versión en español difundida por [@santtiagom_](https://x.com/santtiagom_/status/2095244814262718551). El repo es un **blueprint de referencia sin SLA ni mantenimiento garantizado**: Anthropic no acepta contribuciones ni da soporte al código de referencia.

## Relacionado

- [[Claude Code]] — donde corre el plugin del blueprint
- [[Rerun]] — agentes que pilotan un negocio
- [[Bops]] — agentes para operaciones de negocio
- [[Skill Recorder]] — convertir una tarea hecha a mano en skill

# #agente #opensource #marketing
