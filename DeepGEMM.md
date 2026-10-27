# DeepGEMM

[DeepGEMM](https://github.com/deepseek-ai/DeepGEMM) es una biblioteca de kernels CUDA de DeepSeek para acelerar operaciones de modelos de lenguaje en GPU. GEMM significa multiplicación general de matrices, una operación básica del cálculo neuronal. No es un compresor de prompts ni un servicio de API de modelos.

## Alcance

Incluye operaciones GEMM FP8, FP4 y BF16, kernels para modelos de mezcla de expertos (MoE), puntuación de atención MQA y Mega MoE, que combina cálculo y comunicación. El README actual exige GPU NVIDIA SM90 o SM100, CUDA 12.9+, PyTorch 2.3+, Python 3.8+ y compiladores C++20. La noticia sobre Ascend remite a un proyecto aparte: no convierte esta implementación CUDA en compatible con cualquier GPU.

Integrarlo requiere controlar el motor que ejecuta el modelo y adaptar formatos, escalas y disposición de datos. Algunas operaciones, como transposición y conversión a FP8, quedan fuera del kernel y deben medirse dentro del flujo completo. Un benchmark de multiplicación de matrices no prueba el mismo ahorro en latencia o coste de un agente entero.

## Matiz sobre el ahorro viral

El [hilo](https://x.com/Mnilax/status/2106846518988661056) promete hasta un 98% y compara $1,6 con $50. No aporta una prueba reproducible de ese ahorro para el uso de GPT u Opus por API. Una biblioteca que se integra en infraestructura propia no cambia por sí sola la tarifa ni los tokens facturados de un proveedor remoto. Varias respuestas del hilo señalan precisamente esa confusión y los requisitos de hardware.

El vídeo de 15 segundos solo recorre el repositorio y sus requisitos, sin voz ni demostración de integración o facturación. La utilidad real está en optimizar infraestructura controlada por el operador, no en prometer descuentos universales.

## Recursos

- [Repositorio y requisitos](https://github.com/deepseek-ai/DeepGEMM), licencia MIT.
- Hilo y vídeo: difusión, no benchmark independiente.

## Relacionado

[[llama.cpp]], [[Ollama]], [[headroom]]. La compresión de contexto de headroom actúa en otra capa: menos texto enviado al modelo, no kernels de GPU.

#opensource #modelos #agente
