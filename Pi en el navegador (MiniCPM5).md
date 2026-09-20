# Pi en el navegador (MiniCPM5)

**Agente de código Pi corriendo 100% en el navegador** con un modelo de 2B sobre WebGPU: **MiniCPM5-2B + Pi**, con Transformers.js + WebGPU + pesos ONNX a 4-bit. De Victor Mustar ([@victormustar](https://x.com/victormustar), Head of Product en Hugging Face). Disponible como Space: `victor/MiniCPM5-2B-WebGPU-Pi`. 88k views.

## Por qué es noticia

Todos los intentos anteriores de un coding agent en local habían fallado por usabilidad; MiniCPM5 lo vuelve viable: la serie MiniCPM5 (openbmb, Apache-2.0) está optimizada para on-device, con ventaja declarada en **tool use agéntico, código y razonamiento** en su clase de tamaño. El export ONNX a 4-bit corre en tu GPU vía navegador, sin servidor.

## Límites declarados

- **Sin herramienta HTTP**: técnicamente podría, pero CORS lo rompería todo el tiempo
- WebGPU sigue experimental en varios navegadores (Firefox/Safari con flags)
- Hay benchmarks enlazados en el hilo para quien quiera comprobar el nivel real del 2B

## Recursos

- Space: [huggingface.co/spaces/victor/MiniCPM5-2B-WebGPU-Pi](https://huggingface.co/spaces/victor/MiniCPM5-2B-WebGPU-Pi)
- Modelo base: [openbmb/MiniCPM5-1B-Base](https://huggingface.co/openbmb/MiniCPM5-1B-Base)
- Runtime: [Transformers.js + WebGPU](https://huggingface.co/docs/transformers.js)

## Relacionado

- Modelos pequeños locales: [[Ollama]], [[Cactus Needle 2]], [[GLiNER2.5]]
- Decisiones baratas en local: [[Jev (TypeSafe)]] (+ réplica laya-mlx en local)

# #modelos #agente #web