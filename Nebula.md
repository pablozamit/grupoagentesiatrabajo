# Nebula

**Nebula** es una herramienta de **red overlay (mesh VPN) open source (MIT)** creada por ingenieros de Slack (`slackhq/nebula`). Conecta equipos de cualquier parte del mundo como si estuvieran en la misma red, con foco en rendimiento, simplicidad y seguridad. Útil para enlazar servidores y máquinas donde corren tus agentes sin exponerlos a internet.

## Características

- **Criptografía moderna**: intercambio de claves ECDH y AES-256-GCM por defecto.
- **Certificados y grupos**: cada host tiene certificado; el firewall se define de forma expresiva, similar a los *security groups* de la nube.
- **Sin abrir puertos**: NAT hole-punching entre pares; los *lighthouses* solo coordinan.
- **Multiplataforma**: Linux, macOS, Windows, iOS y Android; binario portátil y también imágenes de contenedor (`nebulaoss/nebula`). Escala de unos pocos equipos a decenas de miles.

## Nebula frente a Tailscale

| | Tailscale | Nebula |
|---|---|---|
| Basado en WireGuard | Sí | No (inspirado en Tinc) |
| Open source | Clientes sí, control plane no | Completamente open source |
| Control plane | Hospedado por Tailscale | Lo alojas tú (lighthouses) |
| SSO con proveedores de identidad | Sí | No |
| Precio | Freemium | Gratis |

La conclusión práctica: Nebula es la opción si quieres una malla **100% abierta, gratuita y autoalojada** y estás dispuesto a correr tu propia CA y control plane.

## Caveats

- Al no tener control plane gestionado, la emisión, rotación y distribución de certificados son trabajo manual (o con herramientas de terceros como `nebula-mesh`, no oficiales).
- No integra SSO; el alta de cada máquina es explícita.

## Relacionado

- [[tailcat]] — otra pieza de red de Tailscale, aquí para túneles puntuales
- [[VPN privada con VPS (3x-ui + VLESS REALITY)]] — VPN de salida para un VPS
- [[VPS]] · [[Oracle Cloud Free Tier]] — dónde alojar los lighthouses

# #agente #opensource #hosting
