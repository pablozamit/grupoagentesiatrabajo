# tailcat

**tailcat** es, en palabras de Tailscale, *"Tailscale sin Tailscale, hecho por Tailscale"*: un **netcat sobre el data plane de Tailscale**, sin usar su control plane ni crear cuenta. Open source (**BSD-3-Clause**), liberado en agosto de 2026 en la conferencia TailscaleUp.

## Qué es

- Reutiliza las piezas open source de Tailscale (`magicsock`, **WireGuard**, relays **DERP**) para dar **túneles punto a punto cifrados de extremo a extremo** entre dos máquinas.
- **Sin control plane**: los metadatos de conexión se intercambian fuera de banda, como quieras. Un lado levanta un servidor (`tailcat` listener) y devuelve una **dirección corta**; el otro se conecta pasándosela.
- **CLI y librería Go** (`github.com/tailscale/tailcat`, `cmd/tailcat`). Reutiliza los componentes de red del cliente de Tailscale, incluidos SFTP/SSH.
- **DERP**: puede usar los relays gratuitos con límite de tasa de Tailscale (mapa por defecto) o los tuyos propios; DERP solo arranca la conexión, luego se intenta un camino UDP directo.
- **Sin root ni cambios al sistema**: es un proceso de usuario; no toca tablas de rutas ni DNS.

## Caveats

- Es una pieza orientada a **túneles puntuales / transferencia de archivos / texto**, no un reemplazo de una malla VPN completa como [[Nebula]] o Tailscale.
- El demo en navegador (compilado a WASM) es experimental y va solo por DERP hasta que llegue soporte WebRTC.

## Relacionado

- [[Nebula]] — malla VPN open source autoalojada
- [[VPS]] · [[Acceso a internet desde agentes]] — mover tráfico y conectar nodos de agentes
- [[Portless]] — exponer localhost de forma estable para agentes

# #agente #opensource #hosting
