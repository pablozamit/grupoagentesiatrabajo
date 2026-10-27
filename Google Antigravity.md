# Google Antigravity

[Google Antigravity](https://antigravity.google/) es una plataforma de desarrollo con IA de Google. Es un IDE moderno donde la IA escribe el código por ti.

## Qué es

- **Editor de código con IA**: Le dices qué quieres construir y la IA lo hace
- **Múltiples agentes**: Puedes poner a trabajar varios agentes a la vez
- **Gemini Pro**: Usa el modelo de Google para entender tu proyecto

## Características principales

- **Agent Manager**: Panel donde controlas varios agentes de IA
- **El agente "ve" tu app**: Usa un Chrome integrado para verificar que el código funciona
- **Autónomo**: El agente escribe, prueba y corrige solo

## Requisitos

- macOS 12 o posterior (Apple Silicon o Intel), Windows 10 de 64 bits o posterior, y Linux con glibc >= 2.28 y glibcxx >= 3.4.25.
- La afirmación anterior de que solo estaba en Windows ha quedado obsoleta. Verificado en la [página oficial de descarga](https://antigravity.google/download), 12 de octubre de 2026.

## Cómo funciona

1. Descargas la app
2. Le dices al agente qué quieres hacer (ej: "haz un login")
3. El agente abre archivos, escribe código, ejecuta comandos
4. Verifica el resultado en el navegador integrado

## Para qué sirve

- Crear apps web sin saber programar
- Prototipos rápidos
- Que la IA haga el trabajo repetitivo

## Enlace

- Web: [antigravity.google](https://antigravity.google/)
- Docs: [antigravity.google/docs](https://antigravity.google/docs)

## De Stitch a una app Android nativa

La demo oficial del 6 de octubre de 2026 combina **Stitch MCP** (diseño), el plugin **Android CLI** (compilar y probar) y Antigravity (coordinar el trabajo). Construye una app de teoría musical con notas, escalas y acordes:

1. Crear y revisar las pantallas en Stitch. Seleccionarlas y exportar el contexto por MCP a Antigravity.
2. Instalar el paquete Android en `Settings > Customizations > Build with Google Plugins`. Incluye Android CLI y skills de desarrollo.
3. Pedir que use las pantallas como referencia y construya componentes nativos **Jetpack Compose**, no una WebView que solo envuelve una web.
4. Compilar y probar en el emulador. La demo muestra capturas y navegación por pestañas para comprobar el resultado.
5. Conectar un teléfono, habilitar depuración USB y desplegar allí para una segunda prueba.

El vídeo muestra una aplicación concreta, no garantiza que todo proyecto complejo salga sin correcciones ni que publique en Google Play. El Android CLI oficial también ofrece análisis de errores, búsqueda de usos/declaraciones, previews Compose y pruebas de recorridos descritos en lenguaje natural.

Fuentes: [Build with Google](https://www.antigravity.google/docs/build-with-google/), [Android CLI estable 1.0](https://android-developers.googleblog.com/2026/05/android-cli-stable-1-0-agent-development.html), [codelab Stitch MCP](https://codelabs.developers.google.com/design-to-code-with-antigravity-stitch). Difusión y demo: [Google Antigravity en X](https://x.com/antigravity/status/2107585958245712263).

# #ia #agente #vibecoding #web
