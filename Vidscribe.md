# Vidscribe

**Vidscribe** ([SamuelZ12/vidscribe](https://github.com/SamuelZ12/vidscribe)) es una herramienta de terminal, con skill de agente opcional, que permite a un agente de IA **"ver" vídeos en local en un Mac con Apple Silicon**, sin claves de API ni servicios en la nube. La presentó Samuel Zhang ([@samuelxzhang](https://x.com/samuelxzhang/status/2122058913692746224)) el 15 de noviembre de 2026 con el lema "let your agents watch videos".

## Cómo funciona

- Entrada: un archivo de vídeo o audio, o cualquier URL que yt-dlp admita (YouTube incluido).
- Salida: una **transcripción** (modelo Qwen3-ASR, unos 30 idiomas, ejecutado con MLX en el propio Mac) y, para vídeo, unas **hojas de vistas**: imágenes pequeñas y equiespaciadas con un `index.txt` que mapea cada una a lo que se estaba diciendo en ese momento.
- El agente revisa esa vista general y pide después **frames a tamaño completo** en los momentos que le interesan (`--at 8:14,7:50-8:50`) o busca un momento que el habla no nombra (`--scan 50:00-60:00`).
- Las salidas se guardan en `/tmp/vidscribe/` durante 3 días. Ejecutar todo en el dispositivo implica que el contenido del vídeo no sale del Mac.

## Medición publicada por el autor

El propio repositorio documenta una evaluación: agentes respondieron 156 preguntas sobre 21 vídeos (36 de ellas sobre momentos que el habla nunca nombra), una vez solo con la transcripción y otra con Vidscribe, y un evaluador ciego puntuó las respuestas. Resultado según el autor: **15% de acierto con solo transcripción frente a 96% con Vidscribe**. Es una medición del propio proyecto, no una evaluación independiente.

## Instalación

Requiere un **Mac con Apple Silicon** y Homebrew. El modelo por defecto (~2,5 GB) se descarga en el primer uso.

```sh
git clone https://github.com/SamuelZ12/vidscribe.git
cd vidscribe && ./install.sh
```

La **skill de agente** se instala con `npx skills add SamuelZ12/vidscribe` (requiere Node.js 22.20+) o copiando la carpeta `skill/` al directorio de skills del agente (en Claude Code, `.claude/skills/vidscribe`).

## Límites

- Solo transcribe voz: la música y otros sonidos no se describen.
- No hay OCR ni marcas de tiempo por palabra; el texto en pantalla se lee a partir de los frames.
- Licencia MIT; los modelos, FFmpeg y yt-dlp mantienen sus propias licencias.

Capacidades y cifras tal como las describe el repositorio; no se ha realizado una prueba de funcionamiento.

## Fuentes

- [Repositorio y documentación](https://github.com/SamuelZ12/vidscribe)
- [Anuncio de Samuel Zhang](https://x.com/samuelxzhang/status/2122058913692746224)

## Relacionado

- [[Agent-Reach]] - instalar herramientas CLI (yt-dlp incluido) para que un agente acceda a internet
- [[Stack de vídeo con agentes (Dumble)]] - otro flujo de vídeo orientado a agentes

#tipo/herramienta #tema/agentes #tema/video #tema/modelos/ejecucion-local
