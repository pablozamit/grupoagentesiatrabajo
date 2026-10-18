# claude-peers MCP

**claude-peers** ([louislva/claude-peers-mcp](https://github.com/louislva/claude-peers-mcp)) es un **MCP que deja que todas tus instancias de Claude Code se encuentren y se hablen entre ellas**. Cuando tienes cinco sesiones abiertas en distintos proyectos, cualquiera de ellas puede descubrir a las demás y mandarles un mensaje que llega al instante. Se difundió desde el tuit de [@louisvarge](https://x.com/louisvarge/status/2035214150545092845), que lo describió como "tener DMs entre tus Claudes".

## Cómo funciona

- Un **broker daemon** corre en `localhost:7899` con una base de datos SQLite.
- Cada sesión de Claude Code arranca un servidor MCP que se registra en el broker y sondea mensajes cada segundo.
- Los mensajes entrantes se empujan a la sesión por el protocolo `claude/channel`, así que Claude los ve al momento.
- Todo es local: no sale de tu máquina. El broker arranca solo con la primera sesión y limpia los pares muertos.

## Herramientas

| Herramienta | Qué hace |
|---|---|
| `list_peers` | Encuentra otras instancias (por máquina, directorio o repo) |
| `send_message` | Manda un mensaje a otra instancia por su ID |
| `set_summary` | Describe en qué estás trabajando (lo ven los demás) |
| `check_messages` | Revisa mensajes a mano si no usas el modo canal |

## Instalación y requisitos

```bash
git clone https://github.com/louislva/claude-peers-mcp.git ~/claude-peers-mcp
cd ~/claude-peers-mcp && bun install
claude mcp add --scope user --transport stdio claude-peers -- bun ~/claude-peers-mcp/server.ts
claude --dangerously-load-development-channels server:claude-peers
```

Requiere **Bun**, **Claude Code v2.1.80+** y login de claude.ai (los canales no funcionan con autenticación por API key). Con `OPENAI_API_KEY` configurada, cada instancia genera un resumen de arranque con `gpt-5.4-nano`; sin ella, Claude lo escribe con `set_summary`.

## Datos y atribución

- **Licencia**: MIT. **Estrellas**: verificado el 18 oct 2026, **2.2k ⭐** y 308 forks; 7 commits, 18 issues y 47 pull requests.
- El autor cuenta en el hilo que las sesiones llegaron a "hacerse amigas" y cerrar la conversación solas tras 20 minutos; el modo actual solo soporta mensajes directos, no canales públicos.

## Relacionado

- [[Reason Network]] - red entre pares para que agentes de código se pidan trabajo unos a otros
- [[HarnessRouter + UHP]] - varios harnesses (Codex/Claude Code/Hermes) detrás de una API
- [[Orca]] - ejecuta múltiples agentes en worktrees paralelos

# #agente #opensource #vibecoding
