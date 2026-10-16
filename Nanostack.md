# Nanostack

**Nanostack** es un **harness de workflow (skills) para agentes de código**: añade planificación, revisión, seguridad y pruebas al ciclo de tu agente y guarda cada resultado como artefacto en disco. Autor: [Gus Aragón](https://x.com/gus_aragon) (GitHub `garagon`). ~206 ⭐ (oct 2026), sin cloud ni daemon ni build step.

## Cómo funciona

Corre las skills **en el orden de un sprint**:

```
/think → /nano → build → /review → /security → /qa → /ship
```

- **/think** — refina una idea antes de escribir código (preguntas forzadas, alternativas, validación de la premisa).
- **/nano** — genera un plan acotado con pasos y verificación.
- **/review** — revisión en dos pasadas (estructural + adversarial) y detección de *scope drift* contra el plan.
- **/security** — OWASP, STRIDE, escaneo de secretos/autorización, informe puntuado A-F; contrasta con los hallazgos de /review.
- **/qa** — pruebas de navegador/API/CLI con Playwright.
- **/ship** — pre-flight, creación de PR, CI y journal del sprint.
- Extra: **/guard** (reglas de seguridad), **/feature**, **/conductor** (orquesta sesiones de agente en paralelo), **/nano-run** (onboarding), **/nano-help**, **/nano-doctor**.

## Detalles que importan

- **Adapters verificados**: Claude Code, Cursor, OpenAI Codex, OpenCode y Gemini CLI. En **Claude Code** puede **bloquear** con hooks `PreToolUse` (el *phase gate* impide `git commit` hasta que review, security y qa tengan artefactos frescos); en el resto el cumplimiento es por instrucciones.
- **Artefactos locales** (JSON en `.nanostack/`): cada skill guarda su salida y las siguientes la leen; `/ship` genera un journal y el vault de know-how es compatible con Obsidian.
- **Niveles de enforcement**: L0 guiado, L1 comprobado (reporta pero no bloquea), L2 protegido (hook del host).
- Inspirado en `gstack` de Garry Tan.

## Caveats

- Proyecto joven y de un solo autor (~206 ⭐): el nivel de *enforcement* real depende del host que lo corra.
- Los estándares de producto que asume (shadcn/ui para web, Bubble Tea/Rich/Ink/Ratatui para CLI/TUI) son opinados.

## Relacionado

- [[Learn Harness Engineering]] — los conceptos de harness detrás de este tipo de flujo
- [[Orca]] · [[Vibe Kanban]] — orquestación de agentes de código
- [[Claude Code]] · [[Codex]] — host verificados
- [[Skills]] — el formato de skill que usa

# #agente #skills #vibecoding
