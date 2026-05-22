# FFmpeg

[FFmpeg](https://ffmpeg.org/) es una herramienta de código abierto para grabar, convertir y streaming de audio y video.

## Qué es

- **Framework multimedia**: Decodifica, codifica, transcodifica, filtra y reproduce prácticamente cualquier formato de audio y video
- **Línea de comandos**: Se usa desde terminal
- **Código abierto**: Gratis y libre

## Herramientas incluidas

- **ffmpeg**: Conversión y encoding de archivos
- **ffprobe**: Análisis de streams y archivos
- **ffplay**: Reproductor simple para pruebas

## Para qué sirve

- Convertir formatos de video (MP4, MKV, AVI, MOV, etc.)
- Cambiar codecs (H.264, H.265, VP9, AV1)
- Extraer audio de videos
- Reducir tamaño de archivos
- Grabación de pantalla/audio
- Editing básico por línea de comandos

## Comandos útiles

```bash
# Convertir video a MP4
ffmpeg -i entrada.avi salida.mp4

# Extraer audio
ffmpeg -i video.mp4 -vn -acodec copy audio.aac

# Reducir tamaño
ffmpeg -i entrada.mp4 -c:v libx264 -crf 23 -c:a aac salida.mp4

# Cambiar resolución
ffmpeg -i entrada.mp4 -vf scale=1280:720 salida.mp4
```

## Recursos

- Web: [ffmpeg.org](https://ffmpeg.org/)
- Comandos: [rendi-api/ffmpeg-cheatsheet](https://github.com/rendi-api/ffmpeg-cheatsheet)

# #video