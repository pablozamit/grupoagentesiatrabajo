# Qwen-Image-2.1

**Qwen-Image-2.1** (Alibaba Qwen, 20-sep-2026, 1.4M views) unifica **generación y edición en un solo modelo de 7B**: corre rápido en VRAM de consumo, con salida nativa 2K y soporte day-0 en Diffusers, ComfyUI, vLLM-Omni y SGLang. Pesos en [huggingface.co/Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1), código en [github.com/QwenLM/Qwen-Image-2.1](https://github.com/QwenLM/Qwen-Image-2.1).

## Lo diferencial

- **Transparencia nativa**: genera y edita capas **RGBA con alpha real** — stickers, logos, iconos y product cutouts salen listos para componer, sin background-removal posterior (ningún otro open-weight lo hace)
- **Hasta 10 imágenes de referencia** por pasada (personaje, producto, fondo, estilo) + edición local con **círculos, anotaciones o máscaras** ("quita el reloj del círculo azul, pelo negro en el rojo")
- Fidelidad estricta en retratos y productos, panoramas, infografías, virtual try-on y tipografía elegante
- 40 steps por defecto, 2048×2048 directo (no upscale)

## Matiz de licencia

Qwen lo llama open source, pero los pesos van con **Qwen Research License** (default: investigación/evaluación no comercial). Para uso comercial sensible usa el término correcto: **open-weight**.

## Recursos

- Blog oficial: [qwen.ai/blog?id=qwen-image-2.1](https://qwen.ai/blog?id=qwen-image-2.1) · Guía ComfyUI: [blog.comfy.org](https://blog.comfy.org/p/qwen-image-21-in-comfyui-open-weight)
- Anuncio: [@Alibaba_Qwen en X](https://x.com/Alibaba_Qwen)

## Relacionado

- Generación en local: [[Ollama]], [[Open Generative AI]]
- Usarlo en diseño con agentes: [[Diseño con Codex (receta Vox)]]
- Edición conversacional: [[VibeTube]]

# #modelos #opensource #diseno