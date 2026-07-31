# Personajes 3D jugables desde IA

Workflow de [André Staltz](https://x.com/andrestaltz) (30/07/2026) para crear personajes 3D jugables, animados y bonitos sin tocar modelado manual: del dibujo al personaje funcionando en tu motor de juego.

## Los 5 pasos

1. **Genera imágenes en ChatGPT** como *"gameplay screenshot"* — empieza por capturas de juego hechas con IA para definir el estilo
2. **Pide a ChatGPT dibujar uno de los personajes en pose T** — la pose neutra que los modelos 3D necesitan para el rigging
3. **Usa Trellis para generar el modelo 3D** desde las imágenes en pose T — modelo de IA disponible en Hugging Face que convierte imagen a mesh 3D
4. **Pide a Claude Opus 5 que haga el rigging** al modelo 3D y (opcional) una animación de caminar
5. **Pide a tu IA meter el personaje en tu motor de juego 3D** — en su caso con Godot MCP y Blender MCP

## Clave

- El **rigging** (esqueleto del personaje) y la **animación** los hace Claude Opus 5, no un humano
- Los **MCP servers** del motor de juego (Godot, Blender) son los que permiten que el agente meta el modelo final dentro del juego

## Tags

- #3d — Modelos 3D desde imagen con Trellis
- #juegos — Personajes para Godot, Unreal, Unity...
- #vibecoding — Pipeline completo de creación con IA
