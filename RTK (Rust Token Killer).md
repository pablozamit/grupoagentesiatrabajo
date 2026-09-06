# RTK (Rust Token Killer)

**RTK** (repo: `rtk-ai/rtk`) es un **proxy CLI de alto rendimiento** que reduce hasta un **90% del output de bash** que lee tu agente de IA. Un solo binario en Rust, **100+ comandos soportados**, ~10ms de overhead. 79k ⭐, Apache-2.0.

El problema que resuelve: cada comando que tu agente ejecuta (git status, ls, cargo test, pytest...) devuelve kilobytes de output crudo que se convierten en **tokens de contexto** que pagas. RTK intercepta el comando, lo filtra y comprime, y el agente solo recibe la señal útil.

## Cómo funciona

```
  Claude --git status-->  RTK  -->  git
    ^                      |          |
    |   compact output     | filter   |
    +-----(filtered)-------+----------+
```

Cuatro estrategias por tipo de comando:
- **Smart Filtering** — quita ruido (comentarios, whitespace, boilerplate)
- **Grouping** — agrupa similares (archivos por directorio, errores por tipo)
- **Truncation** — conserva contexto relevante, corta redundancia
- **Deduplication** — colapsa líneas repetidas con contadores

## Reducción por comando

| Comando | Resultado |
|---|---|
| `ls` / `tree` | Formato de árbol con conteos de archivos |
| `git status` | Stat compacto agrupado por estado |
| `git diff` / `git log` | Contexto reducido, headers quitados |
| `git add/commit/push` | Línea de confirmación ("ok main") |
| `cargo test` / `pytest` / `go test` | Solo fallos, tests pasando colapsados a un conteo |
| `ruff check` / `tsc` / `golangci-lint` | Agrupado por regla y archivo |
| `docker ps` | Solo campos esenciales |

## Instalación

```bash
brew install rtk                            # macOS
curl -fsSL https://raw.githubusercontent.com/rtk-ai/rtk/refs/heads/master/install.sh | sh
# Windows: descarga el zip y pon rtk.exe en PATH

# Instalar para tu herramienta de IA (hook de auto-reescritura)
rtk init -g                                  # Claude Code / Copilot (default)
rtk init -g --codex                          # Codex
rtk init -g --opencode                       # OpenCode (plugin TS)
rtk init -g --gemini                         # Gemini CLI
rtk init --agent hermes                      # Hermes
# + Cursor, Windsurf, Cline, Kilo Code, Antigravity, Kimi, Pi, OMP, Droid...
```

17 herramientas soportadas. El hook reescribe los comandos Bash **antes** de ejecutarlos, así que la adopción es 100% automática en toda la conversación y subagentes. El binario hook funciona nativamente en Windows desde v0.37.2.

## Analytics

- `rtk gain` — dashboard de ahorro de tokens (stats, gráfico ASCII, histórico, JSON export)
- `rtk discover` — encuentra oportunidades de ahorro no aprovechadas
- `rtk session` — adopción a través de sesiones recientes

## Ojo con las cifras

RTK mide la reducción del **output de bash**, no de tu factura. Los tokens de input son solo una parte del bill (también cuenta prompt, system prompt e historial, y aparte los tokens de output). Los porcentajes son fiables; los números absolutos de tokens son aproximados (bytes/4).

## Recursos

- Repositorio: [github.com/rtk-ai/rtk](https://github.com/rtk-ai/rtk)
- Web: [rtk-ai.app](https://www.rtk-ai.app/)
- Guía: [rtk-ai.app/guide](https://www.rtk-ai.app/guide)

## Relacionado

- Contexto y harness: [[Learn Harness Engineering]], [[Harness]]
- Ahorro en agentes: [[Ojos baratos para agentes]], [[Fable Orchestrator]], [[TokenRouter]]
- Agentes de código donde se instala: [[Claude Code]], [[Codex]], [[Orca]]

# #agente #productividad #contenido #opensource