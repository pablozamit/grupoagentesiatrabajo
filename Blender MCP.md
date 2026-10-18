# Blender MCP

**Blender** es un programa de modelado 3D gratuito y open source. Se usa para crear modelos, animaciones, vídeos, videojuegos, efectos visuales, etc. Es una de las herramientas 3D más potentes del mundo, usada tanto por profesionales como por aficionados.

**Blender MCP** es un proyecto que conecta agentes de IA (Claude, ChatGPT, Gemini, etc.) con Blender usando el **Model Context Protocol (MCP)** . Esto te permite controlar Blender diciéndole a tu agente lo que quieres en lenguaje natural, sin tener que aprender a usar la interfaz de Blender.

## Qué puedes hacer con Blender MCP

- Crear objetos 3D (cajas, esferas, personajes, escenas) describiéndoselos al agente
- Aplicar materiales, colores y texturas
- Configurar luces y cámaras
- Generar modelos 3D desde texto usando Hyper3D Rodin o Hunyuan3D
- Importar assets gratuitos de Poly Haven (HDRIs, texturas, modelos)
- Modificar escenas existentes

## Cómo se configura en tu agente

Blender MCP se conecta como un servidor MCP. En la configuración de tu agente (Claude Code, Cursor, VS Code con Cline, etc.) añades:

```json
{
  "mcpServers": {
    "blender": {
      "command": "uvx",
      "args": ["blender-mcp"]
    }
  }
}
```

Requiere tener **Blender 3.0+** instalado y el gestor **uv** ([docs.astral.sh/uv](https://docs.astral.sh/uv/)).

## Caso de uso documentado

El repo (antes `ahujasid/blender-mcp`, ahora **`ahujasid/mcp-for-blender`**) es una comunidad con **31.550 ⭐** y licencia MIT. Un caso de estudio recogido por [@RoundtableSpace](https://x.com/RoundtableSpace/status/2111596870866780627) (18 oct 2026) muestra a un desarrollador usando **Claude Code** con este addon MCP de Blender para crear la mayor parte de los assets 3D de un juego de pesca:

- Una sola sesión de Claude Code controló **Blender y Unity** a la vez a través del Model Context Protocol.
- Creó un modelo de cangrejo de **40 piezas y 42 huesos en 53 minutos**.
- Claude renderizaba imágenes desde varios ángulos para que el desarrollador las revisara y diera feedback.
- El addon MCP (MIT) también funciona con Codex, Cursor y otras herramientas de IA.

## Recursos

- Repositorio: [github.com/ahujasid/mcp-for-blender](https://github.com/ahujasid/mcp-for-blender) (antes `blender-mcp`)
- Web oficial de Blender: [blender.org](https://www.blender.org)

Para **animar** (no solo modelar) con el agente, ver [[Cartwheel MCP]].

Distribución mejorada con headless y benchmarks: [[Blender MCP Enhanced (bpy-dev)]].

Flujo de producción 3D completo como skills de agente: [[Blender Skills (EL4CTEO)]].

# #3d #agente #contenido
