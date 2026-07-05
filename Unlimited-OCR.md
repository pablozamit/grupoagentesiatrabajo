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

## Recursos

- GitHub (PaddlePaddle): [github.com/PaddlePaddle/Unlimited-OCR](https://github.com/PaddlePaddle/Unlimited-OCR)

# #ocrt #ia #modelos
