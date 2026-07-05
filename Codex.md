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

## Subagentes

Codex puede lanzar subagentes especializados en paralelo para explorar, analizar o resolver tareas simultáneamente, manteniendo el hilo principal limpio de ruido. Se usa con instrucciones como "lanza dos agentes" o "delega esto en paralelo".

Existe **LazyCodex** ([lazycodex.ai](https://lazycodex.ai)), un harness para Codex que permite ejecutar **cientos de subagentes** durante horas sin problemas de rendimiento. Está basado en OmO (oh-my-openagent) e instala flujos de trabajo como `$ulw-plan`, `$start-work` y `$ulw-loop`. Un desarrollador reportó ejecutar casi **300 subagentes durante más de 24 horas** en la app de escritorio de Codex sin degradación.

## Recursos

- Web: [codex.openai.com](https://codex.openai.com)
- Docs: [platform.openai.com/docs/guides/codex](https://platform.openai.com/docs/guides/codex)
- Incluye gpt-image-2 para generar imágenes dentro del agente

# #agente #vibecoding #modelos
