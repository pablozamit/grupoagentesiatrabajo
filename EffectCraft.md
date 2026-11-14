# EffectCraft

[EffectCraft](https://github.com/storytold/effectcraft) es un estudio open source de motion graphics y efectos visuales escrito en Rust puro: un compositor gratuito con composiciones, capas, keyframes, 308 efectos, estilos de capa, expresiones, cámaras y luces 3D y cola de render. Nativo en macOS, Windows y Linux, y también en el navegador. Doble licencia MIT / Apache-2.0, ~8,8k ⭐.

## Estado

Sus autores lo describen como «joven, moviéndose rápido y ya usable». El post que lo difundió ([@CY160909](https://x.com/CY160909/status/2121401475939135738)) lo presenta como alternativa open source a After Effects y advierte que está en Alpha: recomienda usarlo para pruebas, no para proyectos formales.

## Pensado para agentes

- Los comandos del motor están disponibles por CLI, canal de control JSON y MCP: `effectcraft-cli mcp` habla Model Context Protocol por stdio, en modo headless, con acceso al árbol de la composición, keyframes y frames renderizados.
- El repositorio incluye un `.mcp.json` listo para conectarlo, y documentación específica en `docs/agents.md`.

## Relacionado

- [[Raea]], [[Blender MCP]]

# #video #opensource
