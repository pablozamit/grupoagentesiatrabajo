# The Complete Shelf

**The Complete Shelf** es una estantería de libros 3D interactiva construida con [[Three.js]], creada por **Meng To** e inspirada en el sitio de **Stripe Press**. Es un referente de uso de Three.js **muy realista**: scroll horizontal, abrir cada libro y pasar las páginas con física curva. Es **open source e incluye el prompt completo** con el que se construyó.

## Qué es

- Una librería de **siete libros hardcover** (tapas de tela): Codex, Claude Code, Cursor, Antigravity, Figma, Framer, Xcode.
- Navegación del estante con **rueda, flechas, botones o marcadores de posición**.
- Visualización en detalle: orbitar, hacer pan/zoom, **hover para abrir el libro**, click para abrirlo y **arrastrar para pasar páginas**.
- **Interior**: tapas por separado, lomo, bisagras, guardas, bloque de páginas, cintas de cabeza, marcapáginas, foil y sombras de contacto.
- Texturas procedurales (tela, foil, papel, canto, madera, rugosidad, normal, sombra) y **atlases WebP embedidos** para tapas y madera.
- Transiciones deterministas shelf→detalle para que al mover un libro nunca haya un "salto" de un último frame.

## Cómo está hecho (recomendable para estudiar)

- **Todo vive en `index.html`**: marcado, layout, shaders/materiales, geometría de libros, estado de interacción, animación y atlases de imagen. Sin framework, sin bundler.
- Stack: **Three.js** (PBR + OrbitControls). Superficie generada en runtime con texturas de canvas.
- Se gestiona como una **máquina de estados**: `shelf → opening detail → closed inspection → open book → closing → shelf`.
- El giro de página usa **grupos con bisagra y mallas segmentadas** para movimiento curvo realista.

## El prompt: por qué la IA acierta los detalles

Meng To open-sourceó el **prompt completo** en `PROMPT.md`. Consejos clave que compartió:

- **Truco de texturas**: pregunta a la IA cómo hizo para promptear texturas y luces, y luego elige cuál de las descripciones tiene más sentido. Así describes "texturas de libros", iluminación y vocabulario 3D de formas.
- **Los agentes son muy buenos con estas continuaciones** (page-flip, animaciones, estado). Si fallan algunos frames, díselo y lo arreglan.
- Otros coinciden: **escribir las señales de material y ángulo de luz en el prompt hace las texturas mucho más fiables**.

## Cómo construirlo o remezclarlo tú

Empieza con su `PROMPT.md`, adjunta una referencia visual si tienes, y pídele a tu agente de código que trabaje en `index.html`. Sirve con:

```bash
python3 -m http.server 4173
```

## Recursos

- Demo: [mengto.github.io/complete-shelf](https://mengto.github.io/complete-shelf)
- Repositorio: [github.com/mengto/complete-shelf](https://github.com/mengto/complete-shelf)
- Inspiración: [press.stripe.com](https://press.stripe.com)
- Autor: [@MengTo](https://x.com/MengTo) (fundador de Design Code)

## Relacionado

- Otros proyectos open source de Meng To: [[Meng To Three.js Game Skills]]
- Base 3D: [[Three.js]], [[Stack 3D en web]]
- Alternativa ligera con WebGPU: [[BroMetal]]

# #3d #vibecoding #diseno