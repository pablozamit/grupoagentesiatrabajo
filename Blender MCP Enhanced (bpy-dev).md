# Blender MCP Enhanced (bpy-dev)

**Blender MCP Enhanced** (repo `bpy-dev/blender-mcp`, GPL-3.0, 81 ⭐) es una **distribución mejorada e independiente** del Blender MCP de Blender Lab, orientada al trabajo agéntico con Blender. Mantiene el modelo original (add-on dentro de Blender + servidor MCP que se comunica por TCP) y añade ejecución headless, backends seleccionables y herramientas de benchmark. Estado: **developer preview** (limpieza en curso antes de publicar).

## Qué mantiene del original

- Add-on de Blender que ejecuta peticiones sobre la escena viva (con panel de preferencias: host, puerto, auto-arranque opcional)
- Servidor MCP que el cliente (Claude Code, Cursor, etc.) lanza por stdio y que reenvía al add-on por socket TCP
- Filosofía pequeña y mantenible: cada herramienta es un módulo auto-descubierto

## Qué añade

- **Herramientas `_for_cli`**: operan sobre archivos `.blend` guardados en subprocesos frescos, **sin necesitar la interfaz de Blender abierta**
- **Selección de backend** con `BLENDER_MCP_CLI_BACKEND`: ejecutable de Blender o **bpy standalone** (Blender como módulo Python)
- **Runtime API lookup**: el agente consulta firmas exactas, enums, defaults y disponibilidad desde el runtime Blender/bpy activo, en vez de fiarse solo de docs empaquetadas
- **Endurecimiento de procesos**: timeouts explícitos, topes de output, JSON compacto y comprobaciones anti-sobrescritura (aislamiento de proceso/estado, no sandbox de SO)
- **BlenderBench**: suite de benchmark reproducible — 27 tareas / 270 rondas, runner portable agnóstico al modelo con inputs fijados y scoring post-generación

## Configuración con backend bpy

```json
{
  "mcpServers": {
    "blender": {
      "command": "uv",
      "args": ["--directory", "/ruta/absoluta/a/blender_mcp/mcp", "run", "blender-mcp"],
      "env": {
        "BLENDER_MCP_CLI_BACKEND": "bpy",
        "BLENDER_MCP_BPY_PYTHON": "/ruta/absoluta/a/python-con-bpy"
      }
    }
  }
}
```

## Cuándo usar cada versión

- **Blender MCP clásico** ([[Blender MCP]]): modelar sobre la escena viva con la UI abierta, empezar rápido
- **Enhanced (bpy-dev)**: pipelines headless y reproducibles (CI, batch sobre `.blend`), agentes que necesitan el backend `bpy` o medir con BlenderBench
- **Animar personajes**: [[Cartwheel MCP]] en cualquiera de los dos casos

## Recursos

- Repositorio: [github.com/bpy-dev/blender-mcp](https://github.com/bpy-dev/blender-mcp)
- Docs del proyecto original: [blender.org/lab/mcp-server](https://blender.org/lab/mcp-server)

## Relacionado

- Distribución clásica: [[Blender MCP]]
- Animación con agentes: [[Cartwheel MCP]]
- Workflow de personajes: [[Personajes 3D jugables desde IA]]

# #3d #agente #opensource