# Raea

[Raea](https://raea.io) («Render Anything Engine») crea vídeos, motion graphics, escenas 3D y juegos escritos como React y TypeScript —el código que los agentes ya escriben— y los renderiza en la GPU local, más rápido que su reproducción. Motor en Rust + Bevy 0.20, con app de escritorio para macOS (Apple Silicon), Linux y Windows (x86_64). Licencia FSL-1.1-ALv2 (código disponible: usable y modificable salvo para un producto que compita con Raea; cada versión pasa a Apache-2.0 a los dos años). ~2.412 ⭐ en [GitHub](https://github.com/shinyobjectz/raea).

## Qué hace

- **Vídeo y motion graphics**: layout, texto, Tailwind, SVG y animación compuestos en GPU con codificación por hardware; `raea cut` corta metraje por lo que se dice en él y `raea check` detecta texto cortado, contraste bajo, zonas inseguras, congelados y problemas de loudness antes de enseñarlo.
- **Juegos**: input, físicas, sonido y 3D jugables en directo con `raea play` y exportables como programa propio (`raea export-game`).
- **3D**: escenas en TypeScript dibujadas por Bevy —cámaras, luces, materiales, modelos glTF, Gaussian splats— con plugins de Bevy compilados en el motor.
- **Sonido**: un mezclador para juego en vivo y render offline, con modelos locales para foley y notas de instrumentos.

## Pensado para agentes

Todo lo que dibuja queda consultable como datos: un agente puede renderizar un frame, mirarlo y corregir lo que falla sin una persona en el bucle. El instalador añade sus skills a `~/.claude/skills` (también para otros agentes con `raea skills install --agent`), hay plugin para Claude Code y `raea guide`/`raea context` dan las guías de estilo y de proyecto. Una composición es un componente React que dibuja el frame de cada instante; 90 frames a 1080p rinden en ~1 segundo en un Mac Apple Silicon, según el README.

## Estado

Joven: la v0.1.1 (primera versión completa, con la app de escritorio) es de noviembre de 2026 y el propio README avisa de bordes ásperos y huecos en la documentación; la app de Windows es la más reciente y menos probada. El motor es gratis y sin cuenta.

## Relacionado

- [[67js]], [[Spline]]

# #video #3d
