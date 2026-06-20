# LazyCodex

[LazyCodex](https://lazycodex.ai) es un **harness de agentes para Codex** que permite ejecutar cientos de subagentes en paralelo durante horas sin degradación. Basado en OmO (oh-my-openagent), empaqueta flujos de trabajo de planificación, ejecución y verificación.

## Qué permite

- Lanzar **~300 subagentes simultáneamente durante 24h+** sin problemas de rendimiento (reportado por un desarrollador)
- Planificación con `$ulw-plan`, ejecución durable con `$start-work` y bucle de verificación con `$ulw-loop`
- Agentes disciplinarios: Sísifo (orquestador), Hefesto (worker profundo), Oráculo (verificador)
- Skills integradas: review, cleanup de slops, UI, LSP, AST-grep, reglas de proyecto
- Memoria de proyecto persistente con `$init-deep`
- Multi-model routing

## Instalación

```bash
npx lazycodex-ai install
```

# #agente #vibecoding
