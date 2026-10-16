# Browser Harness

**Browser Harness** es un *harness* open source de automatización de navegador **autorreparable** ("self-healing") para agentes de código. La idea central: en vez de envolver al LLM en un framework rígido (Playwright, wrappers), se elimina el framework y se le da **acceso directo a Chrome por CDP** para que sea libre.

## Características

- **Autorreparable**: edita su propio `helpers.py` sobre la marcha cuando una tarea lo requiere.
- **CDP directo**: una sola conexión websocket a Chrome, sin capas intermedias.
- **Sin framework ni raíles**: máxima libertad para el modelo.
- **Drop-in para Claude Code y Codex**: se integra como herramienta de esos agentes.
- Existe además **Browser Harness JS**, la versión en JavaScript puro (sobre Bun), que corre donde corra JS (Cloudflare Workers, Vercel...).

## Matiz

La promesa del autor ("no he encontrado una tarea que no funcione") es un testimonio entusiasta, no un benchmark. En el propio hilo reconoce que **con menús desplegables React el primer intento a veces falla** y luego se recupera; el problema pendiente es de eficiencia, no de capacidad. Funciona sobre **tu Chrome real**, lo que refuerza la utilidad pero también el riesgo (sesión real, acciones reales).

## Relacionado

- Concepto general: [[Harness]], [[Learn Harness Engineering]]
- Navegación para agentes: [[Browser Use]], [[Camofox Browser]], [[Moli Browser]], [[Obscura]], [[Stagehand]]
- Agentes de código: [[Claude Code]], [[Codex]]

# #agente #opensource
