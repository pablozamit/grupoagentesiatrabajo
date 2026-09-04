# Learn Harness Engineering

[Learn Harness Engineering](https://github.com/walkinglabs/learn-harness-engineering) es un **curso gratuito y hands-on de harness engineering** (MIT, 14.3k ⭐) para aprender a construir el entorno, la gestión de estado, la verificación y los mecanismos de control que hacen que los agentes de código funcionen de forma fiable. **14 lecciones, 8 proyectos prácticos y 15 idiomas (incluido español)**. Recomendado por [@santtiagom_](https://x.com/santtiagom_) (MercadoLibre) como el recurso para llevar el roadmap de harness engineering a la práctica.

## La idea central

> "The Model Is Smart, The Harness Makes It Reliable."

El modelo más fuerte fallará en tareas reales si no construyes un entorno a su alrededor. El curso lo demuestra con evidencia de Anthropic y OpenAI:

- **Anthropic (experimento controlado, mismo modelo Opus 4.5)**: sin harness gastó **$9 en 20 minutos** y no produjo nada que funcionara; con harness completo (planner + generator + evaluator) gastó **$200 en 6 horas** y construyó un juego jugable. El modelo no cambió; el harness sí.
- **OpenAI/Codex**: en un repo bien harnessed, el mismo modelo pasa de "poco fiable" a "fiable" — un cambio cualitativo, no marginal.

## Los 5 subsistemas del harness

```
┌────────────────────────────────────────────────────────┐
│                        HARNESS                          │
│  Instructions   State        Verification   Scope      │
│  (AGENTS.md)    (progress.md)(tests+lint)   (1 feature │
│  CLAUDE.md      feature_list type-check     at a time, │
│  docs/          git log      smoke runs     done def)  │
│                 session      e2e pipeline              │
│                 handoff                                 │
│  Session Lifecycle                                      │
│  init.sh al inicio · clean-state al final · handoff     │
│  commit solo cuando es seguro reanudar                  │
└────────────────────────────────────────────────────────┘
```

Cada subsistema tiene un trabajo: **Instructions** (qué hacer y en qué orden, con progressive disclosure), **State** (qué está hecho/en curso/por hacer, persistido a disco), **Verification** (solo tests pasando cuentan como evidencia), **Scope** (una feature a la vez, sin overreach), **Session Lifecycle** (inicializar al inicio, limpiar al final, dejar camino limpio para la siguiente sesión).

> El modelo decide qué código escribir. El harness gobierna cuándo, dónde y cómo lo escribe. El harness no hace al modelo más listo; hace su output fiable.

## Roadmap (de santi @santtiagom_)

El hilo de X que recomienda el curso resume el roadmap en 8 pasos:

1. **Agent loop** — el ciclo básico: tarea → decidir paso → usar tool → observar → continuar o parar
2. **Context engineering** — qué entra al contexto, qué se queda fuera y cuándo recuperarlo
3. **Tool design** — nombre claro, descripción precisa, parámetros simples, validación, respuesta útil
4. **State y memory** — estado para mantener progreso/planes/resultados; memoria para decisiones y preferencias entre sesiones
5. **Planning y orchestration** — dividir la tarea en pasos; coordinar modelos, tools, subagentes y handoffs
6. **Permissions y guardrails** — qué puede leer/modificar/ejecutar, qué necesita aprobación
7. **Observability y evals** — traces, tool calls, errores, costos, resultados + evals con tareas reales
8. **Long-running agents** — compaction, checkpoints, reintentos, límites de tiempo/coste, recuperación y reanudación

## Contenido del curso

- **14 lecciones** (L01–L14): de "por qué los modelos fuertes fallan" a "dibuja tu workflow como un grafo" (graph engineering). Cada lección responde a una pregunta concreta.
- **8 proyectos** (P01–P08): el mismo capstone — una app de escritorio Electron de base de conocimiento personal — que evoluciona con cada proyecto. Cada solución del proyecto N se convierte en el starter del N+1.
- **Resource Library**: templates listos para copiar (`AGENTS.md`, `feature_list.json`, `init.sh`, `claude-progress.md`...).
- **Frontier Harness Design Breakdowns** (nuevo, ago 2026): aplica el framework de 5 subsistemas para desmontar cómo construyen sus harnesses **Pi, Claude Code, Codex y DeepSeek**.
- **Loop Engineering** (jul 2026): L13/P07 — de `/goal` a los seis primitivos de loop engineering (automations, worktrees, skills, connectors, sub-agents, external state) y loops goal/timer/maker-checker.
- **Graph Engineering** (ago 2026): L14/P08 — de loop único a grafo (nodos, edges, shared state, routing, orchestration tax).

## Quick start (mejorar tu agente hoy)

```bash
# Audit del harness de cualquier repo, sin Node.js
curl -fsSL https://raw.githubusercontent.com/walkinglabs/learn-harness-engineering/main/tools/audit-harness.sh | bash -s -- /path/to/tu/repo
```

O con la skill **harness-creator**: te genera un harness de producción (AGENTS.md, feature list, init.sh, verification workflows) para tu proyecto en minutos.

## Recursos

- Repositorio: [github.com/walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering)
- Docs: [walkinglabs.github.io/learn-harness-engineering](https://walkinglabs.github.io/learn-harness-engineering/)
- Referencias: Anthropic (*Effective harnesses for long-running agents*, *Harness design for long-running application development*), OpenAI (*Harness engineering: leveraging Codex in an agent-first world*)

## Relacionado

- Teoría del concepto: [[Harness]]
- El curso usa herramientas de la enciclopedia: [[Claude Code]], [[Codex]]
- Entornos de trabajo para agentes: [[Orca]], [[AgentRouter]]
- Metodología de desarrollo con agentes: [[Vibecoding]], [[grokbot.dev use-cases]]

# #contenido #agente #vibecoding