# Yoinks

Yoinks ([@pablostanley](https://x.com/pablostanley)) es una app de terminal que descarga videos de YouTube, X/Twitter, Instagram, TikTok y 1.800+ sitios más. Pegas una URL, eliges resolución (o solo audio MP3) y descarga.

## Instalación

```bash
npm install -g yoinks
```

O sin instalar: `npx yoinks`

Requiere Node 18+. yt-dlp y ffmpeg se gestionan automáticamente.

## Cómo funciona

1. Ejecutas `yoinks` o `yoinks <url>`
2. Se abre una interfaz a pantalla completa en la terminal
3. Pegas la URL o la pasas como argumento
4. Seleccionas formato con ↑/↓ o clic
5. El archivo se guarda en `~/Downloads`

## Características

- Interfaz de terminal a pantalla completa con Ink (React para terminal)
- Temas auto, light y dark (detecta el tema de tu terminal)
- Navegación con teclado (↑/↓, j/k, números) o ratón
- Soporte para audio MP3 sin video
- Sin anuncios ni botones falsos de descarga
- Open source (MIT)

## Enlaces

- Repo: [github.com/pablostanley/yoinks](https://github.com/pablostanley/yoinks)
- Autor: [@pablostanley](https://x.com/pablostanley) (designer en Vercel)

# #video #web