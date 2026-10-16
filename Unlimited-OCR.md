# Unlimited-OCR

OCR desarrollado por Baidu (PaddlePaddle) que procesa documentos enteros en una sola pasada, sin necesidad de chunking.

## Qué lo hace diferente

- **Sin chunking**: Procesa cientos de páginas en un solo pase, manteniendo velocidad estable
- **R-SWA (Reference Sliding Window Attention)**: Mantiene el KV cache constante durante el decodificado, lo que permite escalar a documentos largos sin degradación
- **93% en OmniDocBench**: Supera en un +6% a los modelos anteriores

## Benchmark

| Métrica | Unlimited-OCR | Anteriores |
|---------|--------------|------------|
| OmniDocBench | 93% | 87% |
| Velocidad en docs largos | Estable | Degrada con chunking |
| Pase único | Sí | No |

## Contexto

Unlimited-OCR es el siguiente paso después de DeepSeek-OCR. Mientras que DeepSeek-OCR ya había mejorado significativamente la precisión, Unlimited-OCR resuelve el problema de escalabilidad a documentos largos eliminando la necesidad de dividir el documento en fragmentos.

## Difusión y despliegue (sep-2026)

La [difusión en X de @Ryrenz](https://x.com/Ryrenz/status/2094213834575667525) aporta contexto práctico:

- **Uso típico**: meter un PDF escaneado de cientos de páginas (informe anual, pliego de licitación) y obtener el texto utilizable de una vez, sin cortar por páginas ni recomponer después las tablas.
- **Adopción**: el proyecto habría superado los **24.000 stars** en GitHub según esa difusión (cifra **atribuida, no verificada** en esta revisión), con paper asociado **arXiv 2606.23050**.
- **Dónde está el modelo**: Hugging Face, ModelScope y Baidu Intelligent Cloud.
- **Ejecución local**: soporte vía **Transformers, vLLM y SGLang**, con imagen Docker oficial de vLLM.
- **Ascendencia declarada**: los agradecimientos del proyecto citan a **DeepSeek-OCR** y **PaddleOCR**.

## Recursos

- GitHub (PaddlePaddle): [github.com/PaddlePaddle/Unlimited-OCR](https://github.com/PaddlePaddle/Unlimited-OCR)
- Paper: arXiv 2606.23050 (citado en la difusión, no comprobado aquí)

# #ocrt #ia #modelos
