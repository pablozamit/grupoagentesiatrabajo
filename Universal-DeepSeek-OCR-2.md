# Universal-DeepSeek-OCR-2

**Universal-DeepSeek-OCR-2** es una **versión portable del modelo DeepSeek-OCR-2** que añade soporte de **CPU, MPS (GPU de Apple Metal) y CUDA**. La mantiene [Dogacel](https://huggingface.co/Dogacel/Universal-DeepSeek-OCR-2) ([código en GitHub](https://github.com/Dogacel/Universal-DeepSeek-OCR-2)) reutilizando los pesos del DeepSeek-OCR-2 original.

## Qué aporta

- El repo original de DeepSeek-OCR-2 asume NVIDIA + `flash_attention_2`; esta versión **corre por defecto en CPU** y permite `mps` y `cuda` cambiando solo el dispositivo (`model.to(...)`) y el dtype (`float16` en CPU/MPS, `bfloat16` en CUDA).
- **~3B parámetros**, licencia **Apache-2.0**, pipeline `image-text-to-text`, pesos en BF16.
- Uso típico: **documento a Markdown** (`prompt = "<image>\n<|grounding|>Convert the document to markdown. "`) o **OCR libre** (`"<image>\nFree OCR. "`), con resolución dinámica (hasta 6 recortes 768×768 + 1×1024×1024).
- Para inferencia con **vLLM** remite al repo original de DeepSeek-OCR-2.

## Difusión y relación con otras notas

- Difundido por [@HuggingModels](https://x.com/HuggingModels/status/2023335146741797281) como modelo que "lee texto de CUALQUIER imagen" y "entiende contexto, layout y contenido como un humano". Es **atribución de marketing**; la base real es DeepSeek-OCR-2 (*Visual Causal Flow*).
- Convive con [[Unlimited-OCR]] (Baidu/PaddlePaddle), que ataca el problema de documentos largos de una sola pasada; aquí el foco es la **portabilidad de hardware**.
- **Caveat**: usar `trust_remote_code=True` ejecuta código del repositorio; revisarlo y aislarlo en entornos no confiables.

## Recursos

- Modelo: https://huggingface.co/Dogacel/Universal-DeepSeek-OCR-2
- Código: https://github.com/Dogacel/Universal-DeepSeek-OCR-2
- Original: https://huggingface.co/deepseek-ai/DeepSeek-OCR-2

## Relacionado

- [[Unlimited-OCR]] — OCR de documentos largos
- [[LlamaCloud (parseo + MCP)]] — parseo de PDFs para agentes
- [[Ojos baratos para agentes]] — visión barata para agentes

# #modelos #ciencia #contenido
