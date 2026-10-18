# DeerFlow

**DeerFlow** (Deep Exploration and Efficient Research Flow, [bytedance/deer-flow](https://github.com/bytedance/deer-flow)) es un **super agent harness** open source de **ByteDance** que orquesta **sub-agentes, memoria y sandboxes** para investigar, programar y crear, con **skills extensibles**. Se difundió desde el tuit de [@dr_cintas](https://x.com/dr_cintas/status/2035387052460536293), que lo presentaba como "un empleado de IA que corre 100% local, con su propio ordenador" sin nombrar el proyecto; el enlace del hilo lleva al repo de ByteDance.

## Qué hace

- **Tareas de largo horizonte**: maneja trabajos que pueden durar de minutos a horas, no una sola respuesta.
- **Sub-agentes**: reparte el trabajo entre varios agentes según el nivel de la tarea.
- **Memoria a largo plazo** (DeerMem), notas de tarea y compactación manual de contexto.
- **Sandbox y sistema de archivos** propios, con modos de ejecución seleccionables (bash, escritura de archivos) y **control de navegador agéntico**.
- **Skills y herramientas** extensibles, con exportación de skills propias e integración con Claude Code.
- **MCP server**, canales IM (mensajería), archivado de chats, metas de sesión y **tareas programadas** (cron) con vista previa de ocurrencias.
- **Recuperación de conocimiento privado** vía **RAGFlow**.
- **Terminal Workbench (TUI)** y proyectos con document shelf.

**DeerFlow 2.0 es una reescritura total** que no comparte código con la v1: el framework original de Deep Research se mantiene en la rama `1.x`.

## Cómo se instala

```bash
git clone https://github.com/bytedance/deer-flow
cd deer-flow
make setup
```

`make setup` lanza un asistente que guía la elección de proveedor de LLM, búsqueda web opcional y preferencias de ejecución/seguridad (modo sandbox, acceso a bash, escritura de archivos), y genera un `config.yaml` y las claves en `.env`. El despliegue recomendado es **Docker**. Los agentes de código pueden arrancarlo en un paso siguiendo `Install.md` del repo.

## Datos y atribución

- **Licencia**: MIT. **Stack**: Python 3.12+ / Node 22+, LangGraph y LangChain.
- **Estrellas**: verificado el 18 oct 2026, **84.077 ⭐** y 11.726 forks; repo creado el 7 may 2025; última release **v2.1.0** (24 sep 2026). Fue **#1 en GitHub Trending** el 28 feb 2026 tras el lanzamiento de la v2.
- **Modelos recomendados** por el propio proyecto (plan de codificación de ByteDance/Volcengine): Doubao-Seed-2.0-Code, DeepSeek v3.2 y Kimi 2.5.
- Proyecto hermano: **LLM Space**, herramienta de escritorio para prototipar agentes, inspeccionar cada paso del harness y benchmarkear.
- Aviso de seguridad del propio repo: un despliegue mal hecho puede exponer ejecución de código (el admin del gateway equivale a ejecutar código).

## Relacionado

- [[Hermes Agent]] - agente con skills y gateway de mensajería, enfoque cercano al harness
- [[OpenClaw Supermemory]] - memoria a largo plazo para agentes (comparar con DeerMem)
- [[Icarus]] - memoria compartida y ajuste fino del propio agente
- [[SPACE (Perplexity)]] - sandbox de microVMs para agentes
- [[MiniMind]] - experimento didáctico de LLM desde cero

# #agente #investigacion #opensource
