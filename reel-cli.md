# reel-cli

**reel-cli** es una herramienta de terminal para crear reels verticales a partir de una carpeta de fotos y vídeos. El [repositorio de Parth Jadhav](https://github.com/ParthJadhav/reel-cli) documenta un montaje aleatorio con collages, clips recortados, música y transiciones, renderizado con [[FFmpeg]]. No requiere un agente ni generación de imágenes con IA.

## Cómo funciona

- Entrada: carpeta de imágenes y vídeos; música opcional desde un archivo o una URL compatible con yt-dlp.
- Salida: MP4. Se puede fijar la duración y el número de segmentos.
- `--seed` permite repetir el mismo montaje aleatorio; `--dry-run` muestra el plan sin renderizar.
- `--encoder auto` intenta H.264 por hardware y recurre a `libx264` si no está disponible.

```bash
reel-cli --path ./media --song ./song.mp3 --duration 30 --output ./reel.mp4
reel-cli --path ./media --duration 20 --dry-run --seed 42
```

## Instalación y límites

El README ofrece instaladores para macOS, Linux y Windows, además de Homebrew. Los instaladores preparan FFmpeg/FFprobe y yt-dlp y ejecutan `reel-cli --doctor`. Conviene revisar un script remoto antes de ejecutarlo.

Sirve para un montaje rápido cuando el orden exacto de las tomas no importa. No sustituye a un editor con decisiones narrativas precisas ni a [[OpenMontage]], que coordina una producción completa. La demo del anuncio muestra collages y metraje de la NASA con música, sin explicación hablada. Los derechos del material y de la canción siguen siendo responsabilidad de quien publica.

## Recursos

- Documentación y código: [ParthJadhav/reel-cli](https://github.com/ParthJadhav/reel-cli).
- Difusión: [anuncio de Parth Jadhav en X](https://x.com/ParthJadhav8/status/2060803638310944894), 30 de mayo de 2026.

## Relacionado

- [[FFmpeg]]
- [[OpenMontage]]
- [[HyperFrames]]
- [[El vídeo es código]]

# #contenido #video #productividad
