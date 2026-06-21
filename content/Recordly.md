# Recordly

**Recordly** es una app de escritorio open-source (AGPL 3.0) para grabar y editar capturas de pantalla con herramientas de presentación impulsadas por movimiento. Corre en macOS 14.0+, Windows 10 Build 19041+ y Linux.

- **Repo**: [github.com/webadderallorg/Recordly](https://github.com/webadderallorg/Recordly)
- **Web**: [recordly.dev](https://recordly.dev)
- **17.7k estrellas**, 1.3k forks

## Qué hace

En lugar de grabar video crudo y enviarlo a un editor de video solo para añadir zooms, cursor pulido o un fondo estilizado, Recordly maneja todo el flujo en un solo lugar y gratis.

## Funcionalidades clave

- **Auto-zooms**: sugerencias automáticas basadas en actividad del cursor
- **Cursor pulido**: smoothing, motion blur, click bounce, sway, assets tipo macOS
- **Webcam overlay**: burbuja superpuesta con posición, tamaño, redondez, sombra, reactivo al zoom
- **Frame estilizado**: fondos, degradados, blur, padding, sombras, esquinas redondeadas
- **Línea de tiempo**: zooms, recortes, regiones de velocidad, anotaciones, regiones de audio, crop
- **Exportación**: MP4 y GIF con control de calidad, FPS, loop y dimensiones
- **Extensiones y Marketplace**: sistema comunitario de extensiones (sonidos de cursor, frames, wallpapers, hooks de render, paneles de configuración)
- **Proyectos**: archivos `.recordly` que guardan source media + estado del editor

## Captura nativa

| Plataforma | Mecanismo |
|------------|-----------|
| macOS | ScreenCaptureKit (nativo) |
| Windows | Windows Graphics Capture (WGC) + WASAPI audio |
| Linux | Electron capture (sin ocultación de cursor) |

## Renderizado

Usa **PixiJS** para la composición de escena, tanto en preview como en exportación.

## Notas

- Fork de OpenScreen (~80% del código divergido)
- Escrito en TypeScript (83.3%), C++ (6.6%), CUDA (3.6%), Swift (1.3%)
- Alternativa open-source a herramientas como Screen Studio

---

#video #contenido #herramientas #opensource
