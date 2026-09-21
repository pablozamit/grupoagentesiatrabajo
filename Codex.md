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

## Exprimir ChatGPT Pro (flujo chino, 366k views)

Vía [@gkxspace](https://x.com/gkxspace): si pagas Pro y "no le sacas valor", falta workflow, no modelo:

1. **Pro como arquitecto**: conecta GitHub en la web, Pro diseña; tú abres rama para UX, subes PR; si el build falla, lo bajas a local y arreglas
2. **Diálogo Pro en Codex desktop** (esquina superior izquierda): trae el contexto del proyecto, análisis profundo, y con `+` **exportas el historial a Codex** para seguir
3. **Pro como MCP**: puentes comunitarios ([codex-chatgpt-web](https://github.com/mcncarl/yichen-skills), modo Zero Risk) meten el razonamiento Pro en Codex evitando baneos

Comentario que resume: la cuota es la restricción — **sin harness, Pro es una ventana de chat cara**.

## Nivel geek: Pro web + MCP readonly (326k views)

Vía [@Khazix0918](https://x.com/Khazix0918): para no quemar cuota Codex (un uso de Ultra ≈ 10%), expón tus **logs, eventos y tablas en solo-lectura como MCP** (con tu auth, p. ej. Feishu), súbelo como **plugin a ChatGPT** + plugin de GitHub para PRs/código. El Pro web planifica con datos completos; luego pasas la conversación a Codex + Astra high para implementar. Caveat de Steven Cheng (respondido por el autor): granularidad de auth + **rate limiting/API gateway**, permisos y colas con concurrencia controlada — las alucinaciones pueden disparar ráfagas.

## Recursos

- Web: [codex.openai.com](https://codex.openai.com)
- Docs: [platform.openai.com/docs/guides/codex](https://platform.openai.com/docs/guides/codex)
- Incluye gpt-image-2 para generar imágenes dentro del agente

# #agente #vibecoding #modelos
