# Blender Skills (EL4CTEO)

**Blender Agent Skills** ([EL4CTEO/blender-skills](https://github.com/EL4CTEO/blender-skills)) es un paquete de **skills de agente** (estándar `SKILL.md` más scripts probados en un Blender real) que le dan a los agentes de código un **flujo de producción 3D completo en Blender**, en lugar de improvisar con `bpy` cada vez. Se difundió desde el tuit de [@hakimieiqbal](https://x.com/hakimieiqbal/status/2111747882843873538) (18 oct 2026).

## Qué incluye

El repo empaqueta **28 skills** (22 cuando se incorporó esta nota; el anuncio original decía 20) para **Blender 5.2 LTS+**, verificadas en **Blender 5.3**, cubriendo toda la tubería de un asset:

- **Modelado**: hardsurface (bevels, booleanas, normales con peso), esculpido orgánico, geometría procedural desde JSON simple (`blender-geometry-nodes`); kits de entornos (terrenos, bosques, niveles modulares) y looks estilizados toon/anime (NPR).
- **UVs y texturas**: retopología, UVs y texel density; materiales PBR correctos desde texturas; baking de mapas normal, AO, curvatura y ORM.
- **Rigging y animación**: Rigify y esqueletos de juego; shape keys faciales (52 blendshapes ARKit, visemas); acciones, NLA, mocap y root motion; ropa que sigue al cuerpo sin clipping y pelo/pelaje (hair cards para juegos).
- **Optimización y exportación**: presupuestos, LODs y draw calls; exportación a Roblox, Unity, Unreal, Godot, web y USD.
- **Render e iluminación**: Cycles y EEVEE, render por lotes, iluminación de estudio, HDRI y turntables; hora del día (golden hour, noche, niebla) y clima (lluvia, nieve, calles mojadas, charcos, rayos).
- **Simulación**: cuerpos rígidos, tela y fluidos.
- **Vídeo**: edición de vídeo y tracking de cámara dentro de Blender.
- **Automatización y QA**: desarrollo de addons, trabajos por lotes y conversión de archivos; **`blender-asset-qa`** detecta z-fighting, piezas flotantes, normales y pesos malos antes de dar un asset por terminado; recetas de workflow completas.

## Cómo se instala

**Claude Code** (como plugin):

```
/plugin marketplace add EL4CTEO/blender-skills
/plugin install blender-agent-skills@blender-agent-skills
```

**Cualquier agente** (clonar y lanzar el instalador):

```bash
git clone https://github.com/EL4CTEO/blender-skills
./blender-skills/install/install.sh          # macOS / Linux
.\blender-skills\install\install.ps1         # Windows
```

Instala por defecto en `~/.claude/skills` y `~/.agents/skills` (esta última la leen Codex, OpenCode, Gemini CLI, Copilot y Cursor). Opciones: `--agent claude|codex|opencode|gemini|copilot|cursor|all`, `--project DIR` y `--uninstall`.

**Requisitos**: Blender 5.2 LTS o superior; recomiendan **5.3.0** (cada skill está verificada en esa versión, que añade exportación web KTX2, el stack de efectos del compositor y Gaussian splats). Opcionalmente, un servidor **Blender MCP** deja que el agente trabaje sobre tu Blender abierto; sin él, el agente ejecuta Blender en segundo plano.

## Datos y atribución

- **Licencia**: MIT. **Skills**: 28, escritas para Blender 5.2 y verificadas en 5.3.
- **Estrellas**: verificado el 18 oct 2026, **185 ⭐** y 19 forks; revisado el 16 nov 2026, **1.328 ⭐**. Repo creado el 14 oct 2026.
- El repo incluye una comparativa **"con vs sin skills"** (mismo modelo y mismos prompts) y **67 tests headless** más un validador de especificación y presupuesto de tokens.
- Resurgió el 16 nov 2026 en un post en chino de [@CY160909](https://x.com/CY160909/status/2122180089131438244) que lo presentaba como "oficial de Blender": es un proyecto personal de EL4CTEO, no de la Blender Foundation.
- Ejemplos de uso que documenta: "una caja lista para Unreal con normales bakadas y LODs", "riggea este personaje con Rigify y expórtalo a Unity con un ciclo de andar", "revisa z-fighting y piezas flotantes y expórtalo para Roblox".

## Relacionado

- [[Blender MCP]] - conectar el agente al Blender que tienes abierto (opcional para estas skills)
- [[Blender MCP Enhanced (bpy-dev)]] - distribución del MCP de Blender orientada a pipelines headless
- [[Cartwheel MCP]] - animar personajes con agentes sobre Blender
- [[Personajes 3D jugables desde IA]] - flujo completo de imagen a personaje jugable
- [[Hyper3D BANG Parts Skill]] - generar modelos 3D por partes animables como skill


#tipo/skill #tema/agentes #tema/imagen-3d
