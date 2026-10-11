# Gemma 4

**Gemma 4** es la familia de **modelos abiertos de Google DeepMind** (licencia Apache 2.0): multimodales, con razonamiento configurable y tamaños pensados desde el móvil hasta el servidor. Es la cuarta generación de Gemma y la primera con licencia Apache.

## La familia

Cinco tamaños, del edge al servidor:

- **E2B y E4B** («E» = parámetros *efectivos*; usan Per-Layer Embeddings para máxima eficiencia on-device): 2.3B y 4.5B efectivos, contexto de 128K, texto + imagen + audio
- **12B Unified**: 11.95B, 256K de contexto, arquitectura sin encoders (las imágenes y el audio entran directos al transformer)
- **26B A4B**: Mixture-of-Experts con 25.2B totales y solo 3.8B activos por token
- **31B Dense**: 30.7B, 256K, texto e imagen

Todos: pre-entrenados e instruction-tuned, más de 140 idiomas, razonamiento con *thinking modes* configurables, function calling nativo y soporte nativo del rol `system`.

## Por qué importa para local

El E4B es el punto dulce para correr un modelo capaz en un portátil: 4.5B efectivos con 128K de contexto y audio nativo. En el [hilo de Florian Brand](https://x.com/xeophon/status/2063581687590649888): «Gemma 4 E4B 6bit es ahora mi modelo local, cargado 24/7 en mi Mac con [[LM Studio]], reemplazando a Qwen3 3.5 4B tras ~9 meses de uso».

## Recursos

- Model card y descarga: [huggingface.co/google/gemma-4-E4B](https://huggingface.co/google/gemma-4-E4B)
- Anuncio: [blog.google/innovation-and-ai/technology/developers-tools/gemma-4](https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/)

## Relacionado

- Para correrlo en tu PC: [[LM Studio]], [[Ollama]], [[AirLLM]]
- El flujo completo de elección: [[Ecosistema de modelos]]

# #modelos #opensource
