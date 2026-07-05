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

## Recursos

- Repositorio: [github.com/ahujasid/blender-mcp](https://github.com/ahujasid/blender-mcp)
- Web oficial de Blender: [blender.org](https://www.blender.org)

# #3d #agente #contenido
