# MOSS-Image

**MOSS-Image** (OpenMOSS / MosiAI, 16-oct-2026) es una familia de modelos **texto-a-imagen open source de 5B** construida sobre un **Diffusion Transformer (DiT) de un solo flujo**. Llega en dos variantes: **MOSS-Image-Base** (modelo base) y **MOSS-Image-SFT** (ajustado sobre datos curados, con mejor agrupación de texto y composición). Pesos con licencia **Apache-2.0**.

## Lo diferencial

- **Control de layout nativo**: además del prompt en lenguaje natural, acepta un **prompt JSON** donde se especifican objetos, texto y sus posiciones mediante **cajas (bounding boxes)**. Sirve para pósters e infografías y permite editar texto, elementos y posiciones de forma estructurada.
- **Renderizado de texto** claro y legible dentro de la imagen, en **chino e inglés**, incluyendo texto multilínea y con auto-layout.
- **Prompts largos**: hasta **4K tokens**.
- **Estilos versátiles**: anime y fotorrealismo.
- **Backbone compacto de 5B** pensado para generación eficiente y **fine-tuning** en tareas y dominios propios.
- **Entrenamiento en GPU heterogéneas** (declarado por el equipo).

## Composición técnica

Según documentación de terceros (stable-diffusion.cpp), el 5B es un DiT single-stream que usa el **VAE de FLUX.2** y **Qwen3.5 9B** como codificador de texto. El pipeline se comparte entre las interfaces Python (Diffusers) y Gradio.

## Adopción (verificado 18-oct-2026)

- GitHub [OpenMOSS/MOSS-Image](https://github.com/OpenMOSS/MOSS-Image): **556 estrellas, 21 forks**, Apache-2.0, creado el 16-oct-2026.
- Hugging Face: **Base 265 likes / ~1.791 descargas**; **SFT 299 likes / ~2.087 descargas**. El repack para ComfyUI (Comfy-Org/MOSS-Image) superaba las **354.000 descargas**.
- Ecosistema day-0: Diffusers, Gradio, **ComfyUI**, **vLLM** y **SGLang** (el tuit agradece a @sgl_project, @vllm_project y @ModelScope2022). Hay pesos GGUF para Comfy-Org y stable-diffusion.cpp.

## Recursos

- GitHub: [github.com/OpenMOSS/MOSS-Image](https://github.com/OpenMOSS/MOSS-Image) · Web: [openmoss.ai/MOSS-Image](https://openmoss.ai/MOSS-Image/)
- Pesos: [HF Base](https://huggingface.co/OpenMOSS-Team/MOSS-Image-Base) · [HF SFT](https://huggingface.co/OpenMOSS-Team/MOSS-Image-SFT) · [ModelScope Base](https://modelscope.cn/models/openmoss/MOSS-Image-Base) · [ModelScope SFT](https://modelscope.cn/models/openmoss/MOSS-Image-SFT)
- Demo: [Hugging Face Spaces](https://huggingface.co/spaces/OpenMOSS-Team/MOSS-Image) · Guía ComfyUI: [docs.comfy.org](https://docs.comfy.org/tutorials/image/moss-image/moss-image)
- Anuncio: [@MosiAI_Official en X](https://x.com/MosiAI_Official/status/2111094509845332037)

## Relacionado

- Otro modelo open de imagen con control fuerte: [[Qwen-Image-2.1]]
- Generación en local: [[Ollama]], [[Open Generative AI]]
- Usarlo en diseño con agentes: [[Diseño con Codex (receta Vox)]]
- Mismo ecosistema OpenMOSS (TTS): [[VoiceStudio]] usa MOSS-TTS

# #modelos #opensource #diseno
