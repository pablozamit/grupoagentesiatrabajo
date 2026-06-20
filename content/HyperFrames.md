# HyperFrames

[HyperFrames](https://hyperframes.dev) es un **framework open source de HeyGen** para **crear vídeos a partir de HTML**, pensado para que agentes de IA puedan generar vídeo de forma programática.

## Qué es

- Escribes HTML con tus textos, imágenes, animaciones y música
- HyperFrames lo convierte en un vídeo MP4
- Está diseñado para que un agente de IA (Claude Code, Cursor, etc.) pueda hacer todo el proceso solo

## Para qué sirve

Generar vídeos sin tener que editar en herramientas visuales. Como el contenido se escribe en HTML, un agente puede producir muchos vídeos distintos a partir de la misma plantilla, cambiando textos, colores o imágenes según el destinatario.

Ejemplos de lo que puedes crear:

- Vídeos de lanzamiento de producto
- Anuncios para redes sociales
- Vídeos explicativos de features
- Demos con animaciones de código
- Visualizaciones de datos animadas

## Cómo empezar

HyperFrames funciona con **Node.js 22+** y **FFmpeg**.

**Con un agente de IA** (Claude Code, Cursor, Gemini CLI, Codex):

```
npx skills add heygen-com/hyperframes
```

Luego pídele algo como: *"Crea un vídeo de 10 segundos presentando un producto con título animado, música de fondo y un vídeo de ejemplo."*

**Manual desde la terminal:**

```
npx hyperframes init mi-video
cd mi-video
npx hyperframes preview         # verlo en el navegador
npx hyperframes render          # generar el MP4 en local
npx hyperframes cloud render    # renderizar en la nube de HeyGen
```

## Render en la nube (HeyGen Cloud)

`npx hyperframes cloud render` envía el renderizado a los servidores de HeyGen en lugar de hacerlo en tu máquina.

**Conviene usarlo cuando:**
- No tienes Chrome o FFmpeg instalados localmente
- Tu máquina tiene recursos limitados (batería, RAM, CPU)
- Necesitas renderizar varios vídeos y no quieres bloquear tu equipo
- Un agente está construyendo mientras el render se completa en segundo plano
- Trabajas en equipo y necesitas renders centralizados

**Ventajas:** tu máquina queda libre para seguir trabajando, los renders llegan más rápido y no dependes del stack local.

## Diferencia clave con otras herramientas

A diferencia de herramientas como Remotion (que usan React), HyperFrames usa **HTML plano**. Esto hace que sea más fácil para un agente trabajar con él, porque los agentes ya saben escribir HTML sin necesidad de montar un proyecto React.

# #video #agente #contenido
