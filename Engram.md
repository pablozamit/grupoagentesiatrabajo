# Engram

**Engram** es la **memoria persistente para agentes de IA** de Alan Buscaglia (Gentleman Programming): un único binario en Go, sin dependencias, con SQLite + búsqueda full-text (FTS5), que da a tu agente una memoria que sobrevive entre sesiones. MIT, 7.1k ⭐ (oct 2026).

## Qué es

- **Un binario, sin stack**: Go + SQLite; no necesita Node, Python ni Docker
- **Agent-agnostic**: se conecta por MCP (stdio) a 14 agentes — Claude Code, Codex, Cursor, Gemini CLI, OpenCode, Windsurf, Kilo Code, VS Code (Copilot), Antigravity, Qwen Code, Kimi Code… — y a cualquier agente compatible con MCP
- **Cuatro interfaces**: CLI, API HTTP, MCP y una TUI interactiva
- **Project-aware**: cada repo tiene su propia memoria; lee la del proyecto actual salvo que pidas otra (`--all` para lectura global)
- **Local o cloud**: tus datos viven en `~/.engram`, con sincronización opcional

## Cómo empezar

```sh
brew install gentleman-programming/tap/engram
```

y después sigue el setup de tu agente en `docs/AGENT-SETUP.md` del repo.

## Recursos

- Repo: [github.com/Gentleman-Programming/engram](https://github.com/Gentleman-Programming/engram) (MIT)
- Web: [engram.gentlemanprogramming.com](https://engram.gentlemanprogramming.com/)

## Relacionado

- [[Gentle Dot]] — el asistente de escritorio del mismo autor, que recuerda con Engram
- [[Memanto]] — otra capa de memoria open source para agentes
- [[Claude Code]] — uno de los 14 agentes soportados

# #agente #opensource
