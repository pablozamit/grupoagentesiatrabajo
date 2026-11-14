# dream-loop

[dream-loop](https://github.com/achimala/dream-loop) (de [@anshuc](https://x.com/anshuc)) es una skill de agente para construir juegos, apps o escenas con visuales cuidados mediante un bucle cerrado de autocrítica. Licencia MIT, ~2.152 ⭐.

## Cómo funciona

1. El agente «sueña» una captura objetivo de alta calidad usando generación de imágenes.
2. Construye la escena con ese objetivo presente.
3. Un agente crítico separado compara la captura real con la objetivo y da feedback.
4. Se itera hasta que el crítico queda satisfecho; opcionalmente se «sueña» un objetivo aún mejor y se repite.

## Requisitos e instalación

Necesita un agente con generación de imágenes (integrada o por API, p. ej. una clave de Gemini), entrada de visión y, a ser posible, subagentes. Se instala con `npx skills add achimala/dream-loop` o clonando el repo en el directorio de skills del agente.

## Relacionado

- [[Blender Skills (EL4CTEO)]], [[Blender MCP]], [[Raea]]

# #skills #opensource
