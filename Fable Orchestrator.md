# Fable Orchestrator

**Fable Orchestrator** (repo: `codejunkie99/fable-orchestrator`) es una **skill local-first de routing para Codex** que reparte el trabajo entre tres modelos para no chocar nunca contra los límites de uso del agente. **Claude Fable 5.1 planifica y adjudica** (no escribe código ni posee el workspace); **Codex** sigue siendo el runtime y delega el trabajo de implementación acotado a **agentes OpenCode Go**:

- **GPT-5.6 Luna** → implementación normal
- **DeepSeek V4 Flash** → loops, iteración repetida y trabajo de alto rendimiento
- **Fable 5.1** → queda fuera del grafo de implementación: planificación y adjudicación final

MIT, 410 ⭐, 100% Shell. Difundido en X por [@painn_x](https://x.com/painn_x) ("you'll never hit an agent usage limit") y [@Av1dlive](https://x.com/Av1dlive).

## Cómo funciona

1. Instalas la skill con `./install.sh --copy` (a `~/.codex/skills/fable`; `--dry-run` para ver antes qué copia)
2. Invocas: `$fable build the feature`
3. Fable devuelve un **grafo acotado** de tareas
4. Codex valida el grafo, lanza **workers en paralelo** cuando es útil, recoge su evidencia, verifica el resultado
5. Cuando la tarea necesita otra decisión, Fable adjudica

> Regla: cada nodo de implementación debe usar GPT-5.6 Luna o DeepSeek V4 Flash. Si ninguna ruta de OpenCode Go está disponible, el workflow reporta el bloqueo en vez de inventar un modelo.

## Estructura

```
skill/fable/
├── SKILL.md              # la skill instalable
├── agents/openai.yaml
└── scripts/ask_fable.sh  # invoca el alias local fable de Claude Code sin persistencia de sesión
assets/fable-orchestrator.svg
install.sh
tests/test_skill.sh
```

- Consume los agentes `opencode-go/` y `opencode-go-responses/` que provee **Codex Router**
- No envía proxy, dashboard, catálogo de modelos, credencial store ni API key
- Configura OpenCode Go una vez en el router y reinicia Codex tras cambiar proveedor/agentes

## El truco de fondo

El mismo patrón de [[Learn Harness Engineering]]: **separar el planner del implementador** para que el modelo caro (Fable) gaste tokens solo en decidir, y los modelos baratos (Luna/DeepSeek Flash) hagan el trabajo pesado sin agotar la ventana del agente principal. "GPT-5.6 Luna subagents" = delegar en paralelo a modelos que no cuentan en tu cuota principal.

## Seguridad

- `ask_fable.sh` recibe el "packet" con **decisiones y hechos del workspace** — nunca credenciales en un packet
- El instalador solo lee este repo y la ruta de destino; nunca lee/crea/modifica credenciales

## Recursos

- Repositorio: [github.com/codejunkie99/fable-orchestrator](https://github.com/codejunkie99/fable-orchestrator)
- Difusión: [@painn_x en X](https://x.com/painn_x), [@Av1dlive en X](https://x.com/Av1dlive)

## Relacionado

- Arquitectura de agentes: [[Learn Harness Engineering]], [[Harness]]
- Reparto de trabajo entre modelos: [[Ojos baratos para agentes]], [[TokenRouter]], [[AgentRouter]]
- Agentes de código: [[Codex]], [[Claude Code]], [[Kilo Code]]

# #agente #vibecoding #contenido