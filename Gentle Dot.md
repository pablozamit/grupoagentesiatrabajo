# Gentle Dot

**Gentle Dot** es el **asistente personal open source (MIT)** de Alan Buscaglia ([@G_Programming](https://x.com/G_Programming)): una rosa de neón que vive en tu escritorio y abre el chat con `⌥ Espacio`, encima de lo que estés haciendo, sin cambiar de ventana. Early preview (132 ⭐, oct 2026): aún no hay releases publicadas, se compila desde el código.

## Qué es

- Una **única conversación continua** (sin lista de chats que administrar): cuando crece demasiado, sigue en una sesión nueva sembrada con un resumen
- Memoria real con **Engram** ([[Engram]]), el sistema de memoria del mismo autor
- **Usa tu Mac por ti** (con tu permiso): ve la pantalla, hace clicks, escribe y abre apps; un brillo rosa muestra dónde está actuando
- **Voz**: le hablas y te responde en voz alta; modelo de voz local opcional (NVIDIA Parakeet, 25 idiomas, español incluido) o API key de OpenAI
- Usa tus propias suscripciones o API keys; conectores para Notion, Linear, Atlassian, Discord, Slack y Gmail; importa los MCP que ya tengas en Claude, Cursor o VS Code
- Corre en **macOS** y **Linux** (app de escritorio), en el **navegador** o en **tu propio VPS con Docker**

## Seguridad (y sus límites)

- Las acciones de riesgo (enviar, pagar, borrar) preguntan primero; cada envío o cambio muestra un preview y espera tu ok
- Gestores de contraseñas y Ajustes del Sistema quedan fuera de su alcance; `⌥⇧Esc` lo frena todo al instante
- Conceder el control, aprobar conectores y teclear credenciales ocurre en la app de escritorio (diálogos nativos), fuera del alcance del agente; los tokens viven en el Keychain
- **Límite honesto (early preview)**: los comandos de shell del agente solo se revisan «best-effort», y en Linux los secretos del llavero son legibles por cualquier programa tuyo mientras esté desbloqueado. El propio autor recomienda usarlo en una máquina y cuentas donde estés cómodo dejando actuar a un asistente

## Cómo empezar

No hay releases publicadas: se compila con Node 24 + pnpm (la app de macOS también necesita Rust y las Xcode CLT; los paquetes Linux, Docker):

```sh
pnpm install
pnpm package:mac      # genera el DMG (Apple Silicon)
pnpm package:linux    # genera el .deb (y el paquete Arch en amd64)
```

## Recursos

- Repo: [github.com/Gentleman-Programming/gentle-dot](https://github.com/Gentleman-Programming/gentle-dot) (MIT)
- Hilo de presentación: [x.com/G_Programming/status/2108558002617819243](https://x.com/G_Programming/status/2108558002617819243)

## Relacionado

- [[Engram]] — su sistema de memoria
- [[AnythingLLM]] — otra app de escritorio para tener tu IA privada
- [[Devin]] — otro agente autónomo, pero en la nube
- [[Browser Use]] — agente que opera el navegador por ti

# #agente #opensource
