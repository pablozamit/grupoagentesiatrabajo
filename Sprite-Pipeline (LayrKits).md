# Sprite-Pipeline (LayrKits)

**Sprite-Pipeline** ([LayrKits/Sprite-Pipeline](https://github.com/LayrKits/Sprite-Pipeline)) es un **kit de producción para convertir animación generada por IA en spritesheets revisables de 256 × 256** para juegos 2D. Parte de vídeo de movimiento (clips de Kling u otros modelos imagen-a-vídeo), extrae los fotogramas, los limpia, monta la tira horizontal, la deja revisar en un visor de navegador y solo promociona las hojas aprobadas. Se difundió desde el tuit de [@LayrKits](https://x.com/LayrKits/status/2053457612679606334).

## Qué resuelve

El problema del arte de juego generado: tienes movimiento de personaje "aprox" y necesitas assets que puedas **evaluar dentro del flujo del juego**. El kit cierra ese hueco con una cadena de herramientas reproducibles:

- Extrae fotogramas ordenados con un envoltorio de **FFmpeg**.
- Quita fondos claros o planos (chroma) cuando hace falta.
- Empaqueta los fotogramas en celdas transparentes de 256 × 256 conservando el lienzo del vídeo original, para que la escala del personaje y el espacio vacío sean consistentes entre animaciones.
- Escribe la tira horizontal, una imagen de previsualización y un informe de validación en JSON.
- Abre un visor en el navegador para revisar las hojas generadas y finales antes de promoverlas.

## Qué incluye

- `tools/`: extracción, matting, limpieza, contact sheet, redimensionado y manifiesto del visor.
- `docs/`: flujo de trabajo, arranque rápido, convenciones de carpetas y guía de integración en el juego.
- `docs/reference/`: referencias de prompting (texto) para generar el vídeo de origen con modelos de imagen y de vídeo.
- `skills/sprite-sheet-pipeline/`: **skill de asistente de IA** que enruta el prompting, el procesado, la validación y la promoción a los documentos correctos.
- `sprite_viewer.html` y `tools/serve_sprite_viewer.mjs`: visor local con páginas de revisión de alineación.

## Arranque

1. Pon los vídeos de origen en `Videos/` o `Videos/To Be Processed/`.
2. Instala dependencias de Python y FFmpeg aparte (Homebrew, `winget install Gyan.FFmpeg` o `apt`).
3. Sigue `docs/QUICKSTART.md`: extraer, mattear, montar la hoja, revisar el informe, abrir el visor y promover solo lo aprobado.
4. Para un asistente, dale `skills/sprite-sheet-pipeline/SKILL.md` o instala esa carpeta en su sistema de skills.

## Datos y atribución

- **Estrellas**: verificado el 18 oct 2026, **596 ⭐** y 61 forks; 6 commits.
- El repositorio excluye a propósito assets generados, vídeos y salidas de trabajo: es la herramienta, no el arte.
- El README está pensado para humanos; para agentes remite primero a `AGENTS.md` y a `docs/ANIMATION_PIPELINE_NOTES.md`.

## Relacionado

- [[GoRest 2D Spritesheet Generator]] - spritesheets con rotación 360° desde arte 2D
- [[AutoSprite]] - generador de spritesheets con IA
- [[Sorceress]] - suite de herramientas IA para crear juegos completos

# #juegos #skills #opensource
