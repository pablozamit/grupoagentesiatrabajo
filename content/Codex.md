# Codex (OpenAI)

[Codex](https://codex.openai.com) es el agente de código de OpenAI, integrado en **todos los planes de ChatGPT**. Permite programar desde el IDE, la terminal o la nube con capacidades agenticas.

## Cómo se usa

**App (recomendada):** interfaz gráfica para trabajar con proyectos locales.

**Extensión IDE:** Codex en tu editor.

**CLI:** en la terminal:

```bash
# macOS/Linux
curl -fsSL https://chatgpt.com/codex/install.sh | sh

# Windows
powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"

# npm
npm install -g @openai/codex

# Homebrew
brew install --cask codex
```

Ejecuta `codex` y autentícate con tu cuenta de ChatGPT o API key.

## Capacidades

- Modifica archivos del proyecto
- Git checkpoints antes/después de cada tarea
- Soporta MCP, skills y subagentes
- Sitios, hooks, reglas de permisos y seguridad
- AGENTS.md para instrucciones al agente
- SDK, MCP Server y GitHub Action
- Modo no interactivo para automatización

## Recursos

- Web: [codex.openai.com](https://codex.openai.com)
- Docs: [platform.openai.com/docs/guides/codex](https://platform.openai.com/docs/guides/codex)
- Incluye gpt-image-2 para generar imágenes dentro del agente

# #agente #vibecoding #modelos
