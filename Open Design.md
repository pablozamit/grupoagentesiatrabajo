# Open Design

[nexu-io/open-design](https://github.com/nexu-io/open-design) — Alternativa open source a Claude Design. Local-first, nativa de escritorio (macOS, Windows). 68.1K estrellas.

## Qué es

Open Design transforma tu CLI en un motor de diseño. El agente que ya tienes en tu PATH (Claude Code, Codex, Cursor, Hermes, etc.) lee una skill + un design system (DESIGN.md) y genera artefactos visuales en tiempo real. Sin suscripciones, sin cloud lock-in.

## Lo que incluye

- **100+ skills** para generar prototipos web, decks, dashboards, vídeo, imágenes
- **150 design systems** (Linear, Stripe, Vercel, Apple, Notion, etc.)
- **261 plugins** oficiales
- **21 CLIs de coding agents** compatibles (Claude Code, Codex, Cursor, Copilot, Hermes, Kimi, Gemini, etc.)
- **Model Router (AMR)** integrado: GPT, Claude, Gemini, DeepSeek con un solo pago
- **HyperFrames** para motion graphics → MP4
- **Exportación** a HTML, PDF, PPTX, MP4, ZIP
- **Servidor MCP** para usar desde cualquier agente

## Instalación

```bash
# En el agente que uses:
curl -fsSL https://open-design.ai/install.sh | sh -s <agente>
# agente = claude | codex | cursor | copilot | opencode | hermes | gemini | ...
```

O descarga la app de escritorio en [open-design.ai](https://open-design.ai).

## Cómo funciona

1. Escribes un brief (ej. "landing page con el sistema Linear")
2. El agente lee `skills/` + `design-systems/linear-app/DESIGN.md`
3. Emite un `<artifact>` en un iframe sandboxed, editable en vivo
4. Exportas a HTML / PDF / PPTX / MP4 o lo pasas a Cursor/Codex para seguir como código

Relacionado: [[Claude Code]], [[HyperFrames]], [[Codex]], [[Hermes Agent]], [[DesignTools.fyi]], [[Best Designs on X]]

# #diseno #ia #agente #herramientas #opensource
