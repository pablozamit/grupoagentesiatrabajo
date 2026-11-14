# ThreeRT

[ThreeRT](https://github.com/meshy-dev/ThreeRT) es un runtime nativo de JavaScript y path tracer en tiempo real con aceleración por hardware para escenas Three.js: API estilo three.js sobre un motor en Rust + wgpu, con paquetes TypeScript de escena y gameplay. Open source (MIT, ~173 ⭐). Anunciado en un [hilo de @ThreeRT3D](https://x.com/ThreeRT3D/status/2121238880808829385) (13 de noviembre de 2026).

## Qué hace (según el autor)

- Iluminación realista en tiempo real para escenas Three.js: cada elemento que brilla es una luz real, con rebote, reflejos y sombras, sin baking ni light probes. Motor de físicas integrado.
- Clientes nativos en macOS, Windows, iOS, Android y Steam Deck: una sola codebase genera visuales con path tracing en nativo, y donde ThreeRT no está instalado el mismo código cae a three.js al compartir la URL.
- Demo técnica: una ciudad PLATEAU alrededor de la Torre de Tokio con 10 millones de triángulos y 1 millón de luces en tiempo real en un MacBook, con cambio de hora del día en directo.
- Demo jugable: un FPS con ray tracing multiplataforma (Android portátil y Steam Deck) en [openstrike.threert.app](https://openstrike.threert.app).

## Origen

Según el autor, ThreeRT nace de Pocket3D (@pocket_js), compilación estática de three.js para rasterizadores de consola, y de la apuesta con el equipo de Meshy AI por ray tracing más un runtime de JS al estilo React Native.

## Relacionado

- [[67js]], [[Spline]]

# #3d #opensource
