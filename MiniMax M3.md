# MiniMax M3

**MiniMax M3** ([huggingface.co/MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3), 1.5k likes) es un modelo **open-weight, nativo multimodal** (texto + imagen + video desde el paso cero) con **1M de contexto**: ~428B parámetros totales, **~23B activados** (MoE). Anunciado por [@MiniMax_AI](https://x.com/MiniMax_AI) y celebrado por [@NVIDIAAI](https://x.com/NVIDIAAI) (endpoint gratuito con GPU en build.nvidia.com). 146k views.

## Claves técnicas

- **MiniMax Sparse Attention (MSA)**: operador sparse para contextos millonarios — 9× prefill y 15× decode vs M2 a 1M, cómputo por token ÷20 ([paper 2606.13392](https://huggingface.co/papers/2606.13392))
- **3 modos de thinking** por parámetro: enabled / adaptive / disabled
- Coding y cowork a nivel frontera: BrowseComp 83.5 (supera a Opus 4.7), réplica autónoma de paper ICLR en ~12 h (18 commits, 23 figuras)
- Servir con SGLang, vLLM, Transformers o KTransformers; licencia MiniMax Community

## Recursos

- Pesos: [huggingface.co/MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3) · API: [minimax.io](https://www.minimax.io/models/text/m3)
- Endpoint gratis: [build.nvidia.com](http://build.nvidia.com)

## Relacionado

- Modelos abiertos grandes: [[AirLLM]] (405B en consumo), [[Ollama]]
- Agentes que lo usan: [[Sorceress]] (MiniMax M2.7 en su stack), [[Fable Orchestrator]]
- Video con IA: [[Open Generative AI]] (Hailuo en su catálogo)

# #modelos #opensource #agente