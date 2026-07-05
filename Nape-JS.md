# Nape-JS

**Nape** es un **motor de física 2D en JavaScript/Haxe** muy popular a finales de la década de 2010, anterior a la estandarización de **matter.js** y **planck.js**.

## Qué es

- **Física 2D rígida**: cuerpos rígidos, colisiones, joints, constraints
- Escrito originalmente en **Haxe** (se compila a JavaScript)
- Más rápido y con más funcionalidades que matter.js en su época
- **Actualmente en desuso**: su repositorio original (github.com/deltaluca/nape) está archivado. La comunidad se ha movido a matter.js, planck.js (Box2D port) o Rapier (Rust → WASM)
- Sucesor moderno recomendado: **planck.js** (Box2D port) o **matter.js** para prototipos rápidos

## Por qué sigue siendo relevante mencionarlo

- Hay demos históricas hechas con Nape que todavía circulan
- Es la pieza **Nape-JS** del flujo Nape + Three.js + Capacitor que mostró Krisztian Somoracz en junio de 2026: una demo 2D con Nape daba el input físico que se renderizaba con Three.js y se empaquetaba con Capacitor como app iOS
- Entender Nape ayuda a leer código antiguo y a valorar por qué existen los motores modernos

## Alternativas modernas

| Motor | Cuándo usarlo |
|-------|---------------|
| **matter.js** | Prototipos rápidos, juegos 2D casuales, integración fácil con cualquier framework |
| **planck.js** | Box2D port a JS, ideal cuando necesitas el mismo comportamiento físico en varias plataformas (móvil, web, servidor) |
| **Rapier** | Máximo rendimiento, escrito en Rust compilado a WASM, ideal para juegos serios |
| **Cannon.js** | Si necesitas física 3D (sucesor: Rapier 3D o Ammo.js) |

## Recursos

- Repo histórico: [github.com/deltaluca/nape](https://github.com/deltaluca/nape) (archivado)
- Documentación antigua archivada: varios mirrors en Wayback Machine

# #juegos #contenido
