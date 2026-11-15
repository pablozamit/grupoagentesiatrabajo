# Stitch Design Skills

Colección de 15 skills y tres plugins de Google Labs para trabajar con [Google Stitch](https://stitch.withgoogle.com) desde agentes de programación. Sigue el estándar Agent Skills y reúne diseño de interfaces, conversión a componentes y utilidades para mantener un sistema de diseño. Código bajo licencia Apache 2.0.

## Qué incluye

- **Diseño:** generar pantallas desde texto o imágenes, editar diseños y crear variantes; extraer HTML estático o un sistema de diseño desde código y subir recursos a Stitch.
- **Sistema de diseño:** crear y gestionar archivos `DESIGN.md` con decisiones de tipografía, colores y componentes para mantener coherencia entre pantallas.
- **Construcción:** convertir pantallas a componentes React o React Native; integrar shadcn/ui y crear dashboards con React y Vite.
- **Sitios y demostraciones:** `stitch-loop` organiza la creación de webs de varias páginas; la skill de Remotion genera vídeos de recorrido de los diseños.

El repositorio los agrupa en `stitch-design` (6 skills), `stitch-build` (5) y `stitch-utilities` (4). Son instrucciones y flujos para agentes, no un modelo de generación de interfaces independiente de Stitch.

## Requisitos y compatibilidad

Requiere configurar el servidor **Stitch MCP**, con sus credenciales y variables de entorno. Algunas skills dependen de otras: instalar una de forma aislada puede requerir incluir sus dependencias.

El README documenta instalación para Codex, Claude Code, Cursor y OpenCode, y compatibilidad con Antigravity y Gemini CLI. En OpenCode la instalación es manual: copiar las carpetas de skills y configurar el MCP; los nombres deben ajustarse al formato que OpenCode admite. No asumir que el mismo comando de instalación sirve para todos los agentes.

Que las skills sean open source no significa que Stitch funcione localmente ni que su servicio tenga uso ilimitado gratuito. Las capacidades anteriores son las descritas en el repositorio; no se ha realizado una prueba de funcionamiento.

## Fuentes

- [Repositorio y documentación](https://github.com/google-labs-code/stitch-skills)
- [Licencia Apache 2.0](https://raw.githubusercontent.com/google-labs-code/stitch-skills/main/LICENSE)
- [Configuración de Stitch MCP](https://stitch.withgoogle.com/docs/mcp/setup/)
- [Publicación compartida](https://x.com/Yarad_ai/status/2121594713081827657)

## Relacionado

- [[Impeccable]]
- [[Taste-Skill]]
- [[8 Prompts de Diseño para Agentes de IA]]

#tipo/coleccion #tema/diseno/interfaces #tema/programacion/desarrollo-con-ia
