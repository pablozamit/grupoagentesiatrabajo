# Wan (Alibaba)

**Wan** es la familia de modelos de generación de vídeo de Alibaba. **Wan2.1** salió como open source el 25-feb-2025 (código y pesos, Apache-2.0) y fue uno de los primeros modelos abiertos de vídeo competitivos con los comerciales.

## Wan2.1 (feb 2025)

- Tareas: texto a vídeo, imagen a vídeo, edición de vídeo, texto a imagen y vídeo a audio.
- **Corre en GPUs de consumo**: el modelo T2V-1.3B pide unos 8,2 GB de VRAM y genera 5 s en 480p en una RTX 4090 en unos 4 minutos, según su README. También hay modelos de 14B.
- Primer modelo de vídeo capaz de generar texto en chino e inglés dentro de la imagen (afirmación del README).
- Después añadió primer-último fotograma a vídeo (abr 2025) y **VACE**, un modelo todo en uno para crear y editar vídeo (may 2025).
- Integrado en ComfyUI y Diffusers. Hay muchos proyectos derivados (control de movimiento, animación de personajes, prueba virtual de ropa).
- Sobre la frase del tweet "mejor que Sora": es una afirmación de marketing de quien lo publicó. El README de Wan habla de rendimiento puntero en sus propios benchmarks, no de una comparación independiente con Sora.

## Versiones posteriores

- **Wan2.2** (jul 2025): repo abierto, Apache-2.0. Se usa en pipelines locales como [[Open Generative AI]] (motor Wan2GP).
- **Wan 2.5** (sep 2025, preview) y **Wan2.6** (dic 2025): añaden audio nativo sincronizado, clips de hasta 10 s y referencias de personajes. Se anunciaron como servicio en Alibaba Cloud Model Studio y plataformas como fal. No he comprobado si sus pesos son abiertos: tratarlos como modelos de pago/API salvo que se verifique.
- Plataformas como [[Sorceress]] ya ofrecen versiones más recientes (Wan 2.7).

## Cuándo usarlo

Si quieres vídeo IA en tu propio equipo sin pagar por clip, Wan2.1/2.2 es el punto de partida. Para calidad máxima y audio nativo, mira las versiones de pago. Para comparar con otras alternativas abiertas: [[Goku (ByteDance)]].

## Fuente

- [Wan2.1 en GitHub](https://github.com/Wan-Video/Wan2.1) (README, 26-oct-2026)
- [Wan2.2 en GitHub](https://github.com/Wan-Video/Wan2.2)
- [Alibaba Cloud: Wan2.6](https://www.alibabacloud.com/en/press-room/alibaba-unveils-wan2-6-series-enabling-everyone) (16-dic-2025)
- [fal: Wan 2.5 Preview](https://blog.fal.ai/wan-2-5-preview-is-now-available-on-fal/)
- [Tweet de @ai_for_success](https://x.com/ai_for_success/status/1894415836980678792) (25-feb-2025), guardado en bookmarks

# #video #modelos #opensource #ia
