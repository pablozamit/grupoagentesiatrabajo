# GoRest 2D Animation Spritesheet Generator

[NO6KIKO/gorest-2d-animation-spritesheet-generator](https://github.com/NO6KIKO/gorest-2d-animation-spritesheet-generator) — Una herramienta que funciona en tu navegador para crear **spritesheets de animación 2D** y montar escenas de juegos, todo ayudado por un agente de IA (Codex, Claude, etc.).

## ¿Qué es un spritesheet?

En los videojuegos 2D, los personajes y objetos no se mueven con vídeos. En lugar de eso, usan **spritesheets**: una imagen que contiene todas las poses de un personaje en cuadrícula (por ejemplo, 4 filas × 4 columnas con las 16 fases de una caminata). El juego va mostrando una por una para crear la ilusión de movimiento.

## ¿Qué hace esta herramienta?

Normalmente crear sprites y montar escenas de juego requiere programas como Spine o After Effects, y mucho trabajo manual. Esta herramienta te permite:

1. **Subir una imagen de referencia** de tu personaje
2. **Darle una descripción** a un agente de IA (Codex, Claude, etc.)
3. El agente **genera el spritesheet completo** con todas las poses
4. La herramienta **coloca al personaje sobre el fondo** de tu escena
5. Puedes **previsualizar la animación** al instante
6. Guardas todo para usarlo en tu juego

## Características principales

- **Funciona en el navegador**, sin instalar nada más que Node.js
- **No necesitas un modelo de vídeo** — genera las animaciones frame a frame
- **Monta escenas completas**: fondo, personajes, objetos, efectos, capas
- **Organiza tus escenas** en un tablero visual, como tarjetas que puedes mover, copiar y pegar
- **Cada spritesheet lleva metadatos**: nombre del movimiento, dirección (izquierda/derecha), si se repite en bucle, etc.
- **Todo se guarda localmente** en tu ordenador

## Para qué tipo de juegos sirve

Está pensado sobre todo para **juegos de desplazamiento lateral** (los de toda la vida tipo plataformas, aventuras gráficas, run 'n' gun). Pero los sprites se pueden usar en cualquier motor de juego.

## Cómo empezar

Necesitas tener Node.js instalado (versión 20 o superior).

```bash
git clone https://github.com/NO6KIKO/gorest-2d-animation-spritesheet-generator.git
cd gorest-2d-animation-spritesheet-generator
npm install
npm run dev
```

Se abre en `http://localhost:3000`.

## Ejemplo de uso con Codex

Le dices algo como:

> *"Crea una escena de una cabaña de madera estilo terror chino. Añade una pecera de cristal sobre la mesa como objeto animado, con un pez dorado nadando. Genera el spritesheet de 16 frames (4×4) para la pecera."*

Codex genera el spritesheet, lo coloca en la escena, y puedes ver la animación al instante en el navegador.

Relacionado: [[AutoSprite]], [[Pixel Art Sprites]], [[Juegos]], [[3D]]

# #juegos #2d #ia #animacion #opensource
