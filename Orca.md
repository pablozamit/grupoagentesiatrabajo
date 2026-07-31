# Orca

**Orca** es un IDE agéntico que ejecuta múltiples agentes de código en paralelo, cada uno en su propio *worktree* aislado de Git. Diseñado para desarrolladores que quieren lanzar tareas a varios agentes simultáneamente y comparar resultados.

- **Repo:** [stablyai/orca](https://github.com/stablyai/orca) — 33.2k ⭐, MIT
- **Web:** [onorca.dev](https://onorca.dev)
- **Descargas:** 885+ releases (shipping diario)

## Características principales

- **Worktrees en paralelo** — Lanza un prompt a 5 agentes, cada uno en su worktree aislado; compara resultados y fusiona el ganador
- **Compañero móvil** — Monitoriza y dirige agentes desde el móvil (iOS App Store + Android APK)
- **Terminal dividida** — Terminales Ghostty-class con WebGL, splits infinitos y scrollback persistente
- **Design Mode** — Haz clic en cualquier elemento de una ventana Chromium real para enviar su HTML, CSS y screenshot al agente
- **GitHub & Linear nativos** — Navega PRs, issues y boards sin cambiar de contexto
- **SSH Worktrees** — Ejecuta agentes en un servidor remoto con auto-reconexión y forwarding
- **Anotación de diffs** — Comenta líneas de código generado y envíalas de vuelta al agente
- **Orca CLI** — Los propios agentes pueden controlar Orca: `orca worktree create`, `snapshot`, `click`, `fill`
- **Drag de archivos** — Arrastra archivos o imágenes directamente al prompt del agente

## Agentes compatibles

Funciona con cualquier agente CLI: Claude Code, Codex, Grok, Cursor, GitHub Copilot, OpenCode, MiMo Code, Amp, OpenClaude, Antigravity, Pi, oh-my-pi, Hermes Agent y más.

## El stack de tres capas: Orca + OpenCode + Gentle AI

Artículo de [Nico Lopez](https://x.com/Nicomlopez) (22/06/2026) que explica cómo Orca encaja en una arquitectura de tres capas para desarrollar con agentes. No es un stack plano: cada capa resuelve un problema que las otras dos no tocan.

### Las tres capas

- **Orca** — es *dónde* corre: un **ADE** (Agent Development Environment). Mientras un IDE está hecho para un humano que escribe código, un ADE está hecho para despachar trabajo a varios agentes y coordinarlos: worktrees, terminales, browser y CLI en una sola app
- **OpenCode** — es *qué* ejecuta: la plataforma open source que corre los agentes de código en la terminal. No te casa con ningún proveedor (75+ LLMs), extensible con plugins y comandos propios, con permisos "preguntá/permití/negá" afinables
- **Gentle AI** — es *cómo* trabaja: skills, memoria y sub-agentes (Engram, Skills, Agent Teams Light) que definen el estilo de trabajo del agente

### Por qué componen en vez de chocar

- **Mismo formato y directorio**: OpenCode lee los skills de `~/.claude/skills/` y `.agents/skills/` — el mismo sitio donde Gentle AI deja los suyos. La configuración de Claude Code entra en OpenCode sin migrar nada. Por eso Gentle AI puede ser "agnóstico al agente"
- **MCP es el cable común**: las tres capas hablan Model Context Protocol. La memoria de Engram no es magia interna: es un servidor MCP local, portable entre agentes
- **Skills con tres propósitos distintos**: las de Gentle AI enseñan *cómo hacer el trabajo* (armar PR, tests, fases SDD), las de Orca son meta-skills que le dan *manos al agente* (crear worktrees, terminales, coordinar otros agentes, browser), y OpenCode es el *loader* que descubre cualquier `SKILL.md`

### Coordinación fractal

Las capas se anidan: Orca coordina varias terminales-worker → cada terminal corre OpenCode ejecutando Gentle AI → que adentro spawnea sus propios sub-agentes SDD. Un coordinador de coordinadores.

### Modelo por fase

Gentle AI asigna un modelo distinto por fase del SDD (Opus para arquitectura, Sonnet para implementar, Haiku para cerrar). OpenCode aporta el catálogo de 75+ proveedores sobre el que monta esa orquestación: la fase barata corre en un modelo local gratis y la cara solo se paga cuando hace falta.

### Trabajo asíncrono

- **Mantiene la máquina despierta** mientras los agentes trabajan (incluso con la tapa cerrada)
- **Sobrevive a cerrar Orca**: al reabrir, se re-engancha a los mismos procesos (worktrees, splits, scrollback, pestañas)
- **Notificaciones** al pasar working → idle (sistema, sonido) y campana de unread por worktree
- **App móvil** (iOS/Android): ves el estado de cada worktree, lees scrollback, respondes a agentes bloqueados y hasta haces stage/commit desde el teléfono

### Límites al desorden (la idea clave)

Cada capa pone un límite distinto:

- **Orca limita el espacio** — cada tarea en su propia copia (worktree con su rama); los agentes no se pisan los archivos
- **OpenSpec limita el alcance** — "acordá antes de construir": un documento define qué se toca y qué no antes de programar. Gentle AI lo integra de fábrica
- **Engram limita el tiempo** — lo aprendido no se evapora entre sesiones; al terminar, se guarda en la memoria persistente

> La conclusión del autor: no es un stack que te haga ser x10 más rápido, sino x10 mejor. Y ninguna de las tres piezas te tiene de rehén: todas respetan las mismas convenciones.

## Tags

- #agente — Orquesta múltiples agentes en paralelo
- #skills — Tiene CLI y ecosistema de skills
- #proyecto — Proyecto open source activo
