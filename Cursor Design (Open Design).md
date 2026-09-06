# Cursor Design (Open Design)

**Cursor Design** es el **AI design studio open source** de **Open Design** (repo: `nexu-io/open-design`), ahora **Apache-2.0 y local-first**. La idea: apuntas a un elemento de UI, comentas el cambio, y la IA lo edita en el acto — sin salir del canvas de diseño. Con un flujo de 6 pasos: **Point → Comment → Mark → Edit → Capture → Remix**.

## El flujo de trabajo

1. **Point** — señalas un componente de la UI
2. **Comment** — comentas el cambio deseado (lenguaje natural)
3. **Mark** — la IA marca el área
4. **Edit** — edita el asset
5. **Capture** — captura el resultado
6. **Remix** — iterar sobre ello

"Let AI design everything for you. Take control anytime."

## Cómo se relaciona con Cursor

- **Cursor (Anysphere)** añadió un **Design Mode**: los diseñadores editan UI señalando y dibujando, y convierten Figma a código
- **Open Design** envuelve Cursor como agente first-party en un workflow de diseño open source: tu cuenta de Cursor o tus model keys (BYOK), tus archivos locales, y una librería curada de skills + design systems alrededor
- **Cursor ↔ Figma vía MCP**: pegas el link de un frame de Figma en Cursor y el Figma MCP expone componentes, variables, tokens y layout reales — el código generado coincide con el diseño fuente

## Detalles técnicos

- **Local-first**: tus archivos, artifacts y DESIGN.md viven en tu repo, no en una nube hosted
- **Apache-2.0**: clonar y correr local (Dockerfile incluido, `docker compose up`)
- **BYOK**: tu cuenta Cursor o tus keys de modelos; las credenciales nunca se proxean
- **137 skills componibles + 150 design systems portátiles** (DESIGN.md)
- Funciona con Cursor, Claude Code, Codex, Gemini, OpenCode, Qwen y 20+ CLIs

## Caveats (de la cobertura de lanzamiento)

- El modelo que lleva es un transformer grande: espera **$0.40–$0.80/hora** de GPU en la nube, o una GPU local con ≥8GB VRAM
- Produce **falsos positivos ocasionales** en sugerencias de diseño → paso de revisión manual
- La versión actual soporta **assets raster**; workflows muy vector-heavy pueden necesitar tooling extra

## Recursos

- Repositorio: [github.com/nexu-io/open-design](https://github.com/nexu-io/open-design)
- Web: [open-design.ai](https://open-design.ai)
- Hub comunidad: [cursordesign.ai](https://cursordesign.ai)
- Anuncio: [@OpenDesignHQ en X](https://x.com/OpenDesignHQ)

## Relacionado

- Skills de diseño open source: [[Open Design]], [[Taste-Skill]], [[UI Skills]]
- Design systems: [[8 Prompts de Diseño para Agentes de IA]], [[Iconiq]]
- Edición visual con agentes: [[21st.dev]], [[Landingfolio MCP]]
- Alternativa local-first: [[Compact Landing]]

# #diseno #vibecoding #web #opensource