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

## Tags

- #agente — Orquesta múltiples agentes en paralelo
- #skills — Tiene CLI y ecosistema de skills
- #proyecto — Proyecto open source activo
