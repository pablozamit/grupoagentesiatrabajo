# ALON'S LIFE — Mundo 3D multijugador P2E

**URL**: https://www.alons.life/
**Tipo**: Mundo 3D interactivo multijugador en navegador
**Descripción**: Ciudad cyberpunk P2E (Play-to-Earn) donde hasta 68 jugadores comparten la misma sala en tiempo real. Creado íntegramente con IA (Grok Build de xAI). Sin descargas ni plugins.

**Repo docs**: https://github.com/rapkuryer/alonslife-docs (ya no disponible)

> ⚠️ **Proyecto scam**: alons.life es una copia robada del trabajo original de [samsy.ninja](https://samsy.ninja/). El repo de docs desapareció al ser descubierto. El stack técnico sigue siendo válido como referencia, pero el proyecto es fraudulento.

## Stack

- **Three.js** — Render 3D (compatible WebGL + WebGPU)
- **Vue.js 3** — UI / HUD / menús / chat
- **Socket.io 4** — Multijugador en tiempo real
- **Express 5** — API HTTP backend
- **JWT + bcryptjs** — Autenticación y sesiones (30 días)
- **VRM** — Avatares de personajes jugables
- **GLTF** — Modelos 3D animados (68 personajes + NPCs)
- **pump.fun / Solana** — Integración token P2E (SOL)

## Puntos clave a analizar

- Stack completamente open source y gratuito (sin Unity/Unreal)
- Multijugador con Socket.io: broadcast de posición/rotación cada 50ms
- Personajes VRM con rig completo para animación
- Login/registro con JWT + bcrypt
- Chat en tiempo real integrado en Vue.js
- Despliegue: Railway (WebSocket persistente) + Vercel (static + API)
- Creado enteramente con Grok Build (xAI) — caso de estudio de vibecoding
- Hasta 68 jugadores por sala

## Enlaces

- Original: https://samsy.ninja/
- Copia (scam): https://www.alons.life/
- Repo docs (desaparecido): https://github.com/rapkuryer/alonslife-docs

# #web #3d #juegos
