# MiniMax H3 Image

**MiniMax-H3-Image** ([huggingface.co/MiniMaxAI/MiniMax-H3-Image](https://huggingface.co/MiniMaxAI/MiniMax-H3-Image)) es el modelo open-weight de generación y edición de imágenes de la familia MiniMax H3, publicado el 10-nov-2026. Un solo checkpoint hace texto→imagen y edición con hasta 16 imágenes de referencia.

## Claves técnicas

- Imágenes de unos 16 MP directas, sin upscaler: de 4096x4096 (1:1) a 6272x2688 (21:9); rango útil ~4-20 MP.
- DiT denso de 33,1B parámetros (arquitectura H3 sin la rama de audio), destilado a 6 pasos de muestreo y sin classifier-free guidance; el codificador de texto es el Qwen3-VL de MiniMax-H3, sin cambios.
- Pesos: DiT en BF16 (~68,7 GB) más el text encoder (~66,7 GB, se descarga del repo de MiniMax-H3); expansor de prompts opcional MiniMax-H3-Image-PE (17,9 GB, NVFP4), derivado de Qwen3.8-27B (Apache-2.0).
- Se sirve con SGLang, vLLM-Omni, diffusers o ComfyUI; también por API (platform.minimax.io) y app (hailuoai.video). MiniMax afirma el mejor seguimiento de instrucciones entre modelos abiertos; de momento son cifras del propio fabricante, sin benchmarks independientes.

## Licencia: ojo si estás en la UE

- MiniMax-H3-Image Community License (tipo «other»): uso, modificación y redistribución sin royalties, pero solo fuera de los «Excluded Territories»: **Unión Europea, Reino Unido, Corea del Sur y EE.UU.** Desde España, esta licencia comunitaria no te cubre; MiniMax ofrece tramitar una licencia aparte para esos territorios.
- Además: autorización escrita previa si facturas más de 1M USD al año u ofreces el modelo como servicio alojado a terceros; prohibido usar el modelo o sus salidas para mejorar otros modelos de IA; MiniMax no reclama derechos sobre las imágenes que generes.

## Estado

- Ficha en Hugging Face creada el 3-nov-2026 (~570 likes) y repo GitHub [MiniMax-AI/MiniMax-H3-Image](https://github.com/MiniMax-AI/MiniMax-H3-Image) del 9-nov-2026 (~150 estrellas a 11-nov-2026). Lanzamiento muy reciente.

## Relacionado

- [[MiniMax M3]] - LLM open-weight de la misma familia
- [[Qwen-Image-2.1]] - Otro modelo abierto de generación + edición, también con matiz de licencia
- [[Wan (Alibaba)]] y [[Goku (ByteDance)]] - Modelos abiertos de generación de vídeo

# #modelos #ia #opensource
