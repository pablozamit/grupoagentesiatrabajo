# Hermes Dreaming

Motor de **automejora por fases para [[Hermes Agent]]**, de Tony Simons (@tonysimons_, código abierto). En vez de que el agente se reescriba solo directamente, Dreaming **propone cambios en artefactos revisables** y solo escribe en el estado real tras una aprobación humana explícita.

> Hermes Dreaming v0.3.0 is out! Stable Dreaming Inbox, richer proposal metadata, session harvest integration, safer writeback policies, cron-ready digest mode. This update pushes agent self-improvement toward a human-reviewable, auditable workflow.
>
> _—@tonysimons_, [tuit del 3 de junio de 2026](https://x.com/tonysimons_/status/2061973646961197248)

## Cómo funciona

1. **Crear**: Dreaming escanea fuentes explícitas (notas, sesiones recientes con `--from-sessions N` o `--from-since 7d`) y genera un artefacto con propuestas de cambio para memoria, datos de usuario, skills y hechos.
2. **Revisar**: el operador abre el artefacto, ve el resumen (`summarize`), el `diff` contra el estado vivo y aprueba o rechaza propuesta a propuesta (`approve` / `reject` con motivo).
3. **Aplicar**: `apply` escribe solo lo aprobado, con puntuación mínima, idempotencia, copias de seguridad y límite de capacidad. Hay `--dry-run` para previsualizar y `revert` para deshacer desde los backups.

## Piezas principales

- **Dreaming Inbox**: bandeja de artefactos aprobados y listos para aplicar (`dreaming inbox --apply-ready`).
- **Metadatos ricos por propuesta**: prioridad (`low,normal,high`) y tipo de destino (`memory,user,skill,fact`); los filtros se combinan en el `apply`.
- **Recolección de sesiones**: lector de sesiones recientes con cadena de respaldo (SessionDB → SQLite → pointer-log); crea artefactos directamente de las últimas N sesiones.
- **Políticas de escritura seguras**: backups automáticos, detección de deriva (avisa si el archivo vivo cambió después del apply) y reversión.
- **Modo digest para cron**: instalador de cron nocturno (`install-cron`) que deja la revisión lista, y `digest` para un resumen local del operador. Auditoría con run ledger y diario `DREAMS.md`.

## Instalación

Es un plugin oficial del ecosistema: `hermes plugins install asimons81/hermes-dreaming --enable` y luego `hermes dreaming review --help`. Incluye una skill llamada `dreaming` para el flujo guiado dentro de Hermes. Repositorio: [asimons81/hermes-dreaming](https://github.com/asimons81/hermes-dreaming).

## Ver también

- [[Hermes Agent]]
- [[Hermes Skills Hub]]
- [[10 Hacks de Hermes Agent (sistema 24/7)]]

# #agente
