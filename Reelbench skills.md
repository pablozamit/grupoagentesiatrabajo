# Reelbench skills

**reelbench-skills** ([github.com/eternityspring/reelbench-skills](https://github.com/eternityspring/reelbench-skills), Apache-2.0, 697 ⭐ en días) parte de una máxima: para hacer video con IA, primero aprende a **descomponer los clips de otros**. Dos skills para Claude Code/Codex, cero dependencias npm, cero API key (solo node + ffmpeg, usa tu cuota de sesión). Vía [@GoSailGlobal](https://x.com/GoSailGlobal) (60.7k views). `./scripts/install.sh` y `git pull` para actualizar.

## video-shots (descomponer)

Toma un video finalizado y lo parte en **tabla de análisis por tomas**: duración, tipo de plano, movimiento de cámara, descripción — todo en una tabla. Los cortes y duraciones los calcula **ffmpeg**; el modelo solo juzga sus 4 cosas, con **15 puertas de calidad** verificadas punto por punto. Demo real: 53 tomas, 15/15 puertas en verde.

## video-sync (sintetizar)

Imagen por un lado, storyboard por otro: toda la info se ajusta al corte (layouts H y V), perfecto para estudiar fotograma a fotograma y para **republicar el generado como contenido secundario**.

## El reporte

Página interactiva de **un archivo**: reproductor embebido que resalta la toma en sync, clic salta, doble clic abre offline, tabla buscable/filtrable con keyframes, ritmo y stats. Doble clic y abre sin servidor.

## Recursos

- Repo: [github.com/eternityspring/reelbench-skills](https://github.com/eternityspring/reelbench-skills)
- Hilo: [@GoSailGlobal en X](https://x.com/GoSailGlobal)

## Relacionado

- Edición conversacional: [[VibeTube]], [[El vídeo es código]]
- Motion programático: [[HyperFrames]], [[Dora Studio (Motion Magic)]]
- Procesar video: [[FFmpeg]]

# #video #skills #opensource