# Unreal Engine Skills para Claude Code

Plugin oficial de Epic Games para controlar Unreal Editor desde Claude Code mediante MCP. El repositorio verificado expone cientos de herramientas de `ToolsetRegistry` en más de 30 toolsets: actores, Blueprints, materiales, Niagara, Control Rigs, Sequencer, State Trees, widgets, Gameplay Ability System y tests de automatización.

## Qué incluye

- La skill `unreal-mcp`, con instrucciones y workflows para conducir el editor desde el agente.
- Un hook `SessionStart` que identifica el proyecto como Unreal y prioriza la skill adecuada.
- Herramientas para assets y Content Browser, meshes, texturas, animación, VFX, UI, gameplay y scripting por lotes.
- Descubrimiento de herramientas MCP mediante `list_toolsets`, `describe_toolset` y `call_tool`, en lugar de cargar todo el catálogo de una vez.

## Requisitos y uso

Hay que activar en Unreal los plugins **ModelContextProtocol** y **AllToolsets**, abrir el editor y arrancar el servidor MCP con `ModelContextProtocol.StartServer`. Después se instala desde el marketplace oficial de Claude Code:

```text
/plugin install unreal-engine-skills-for-claude-code@claude-plugins-official
```

Funciona en macOS, Linux y Windows mediante Git Bash o WSL. El servidor usa por defecto `localhost:8000/mcp`; la configuración del cliente se genera desde el editor con `ModelContextProtocol.GenerateClientConfig ClaudeCode`.

## Seguridad

El plugin concede a Claude acceso amplio al editor en ejecución. El MCP local no es una frontera de confianza: cualquier proceso del mismo usuario puede conectarse al puerto. Además, `ProgrammaticToolset.execute_tool_script` puede ejecutar Python con acceso privilegiado al editor, al proyecto y a sus assets. Conviene revisar las operaciones y no exponer el servidor fuera de loopback.

## Datos verificados

- Repositorio: [EpicGames/unreal-engine-skills-for-claude-code-plugin](https://github.com/EpicGames/unreal-engine-skills-for-claude-code-plugin).
- Licencia: MIT.
- Verificado el 19-oct-2026: aproximadamente 1,1k estrellas y 111 forks.
- El enlace guardado en X redirige a este repositorio y el README confirma la integración con el marketplace oficial.

## Relacionado

- [[Claude Code]] - agente de código que instala y usa el plugin.
- [[Blender Skills (EL4CTEO)]] - skills para otro pipeline 3D orientado a agentes.
- [[Blender MCP]] - control de Blender mediante MCP.
- [[40 Mejores Herramientas para Vibe Coding de Juegos]] - comparativa de motores y herramientas para juegos con IA.

# #skills #juegos #agente #opensource
