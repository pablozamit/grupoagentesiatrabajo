# Codex Record & Replay

**Plugin de Codex que convierte una demostración en skill**: le enseñas un workflow recurrente una vez (ej. archivar un expense, pedir vacaciones) y Codex lo empaqueta en una **skill inspeccionable y editable** (SKILL.md del estándar abierto, portable a Claude Code, Cursor o CLI). Anunciado el 18 de junio de 2026 (Codex app 26.616). 167k views vía [@testingcatalog](https://x.com/testingcatalog).

## Cómo funciona

Plugins → + → **Record a skill** → das contexto → apruebas grabar → haces el workflow en tu Mac → paras desde la barra/overlay. Codex observa acciones y contenido de ventanas y redacta la skill (cuándo usarla, inputs, pasos, verificación). Luego la invocas en cualquier hilo; ejecuta con Computer Use, browser actions y plugins.

## Límites (oficiales)

- **Solo macOS** (screen recording + accessibility); el CLI no graba pero **sí consume** las skills generadas
- **No disponible en EEA, Reino Unido ni Suiza**; requiere Computer Use habilitado
- Hasta **30 min por grabación**; hay reportes de "not enabled for this user" aun fuera de esas regiones (flag de cuenta)
- Graba el happy path: workflows estables con criterio de éxito claro; si lo quieres distribuir a un equipo, empaquétalo como **plugin**

## Recursos

- Docs: [developers.openai.com/codex/record-and-replay](https://developers.openai.com/codex/record-and-replay) · Changelog: [developers.openai.com/codex/changelog](http://developers.openai.com/codex/changelog)
- Guía: [codex.danielvaughan.com](https://codex.danielvaughan.com/2026/07/19/record-and-replay-demonstration-over-prompting-codex-skill-creation)

## Relacionado

- Equivalente Microsoft: [[Skill Recorder]] (mismo patrón: hacer una vez → SKILL.md)
- Observar correcciones y durificarlas: [[Blume]]
- Skills para Codex: [[Codex]], [[Fable Orchestrator]]

# #skills #agente #productividad