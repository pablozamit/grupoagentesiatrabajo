# llama.cpp

[llama.cpp](https://github.com/ggml-org/llama.cpp) ejecuta modelos de lenguaje en C/C++, con soporte de varios backends y formatos cuantizados GGUF. Incluye `llama-cli` y [`llama-server`](https://github.com/ggml-org/llama.cpp/tree/master/tools/server), servidor HTTP con endpoints compatibles con OpenAI y una interfaz web.

## Control de memoria y contexto

El servidor documenta `--ctx-size`, `--cache-type-k` y `--cache-type-v`: contexto, precisión de claves y valores de la caché KV se configuran por separado. Pesos del modelo y caché consumen memoria; cabe un GGUF no significa que también quepa cualquier contexto. Medir carga inicial, prefill, generación, memoria y calidad con el modelo y hardware reales.

Una integración local debe apuntar al endpoint correcto, consultar el ID del modelo y respetar la API y límites configurados. Mantener el servidor en loopback salvo que se haya preparado acceso de red con autenticación y protección.

## Tutorial TurboQuant: fork, no main genérico

El [hilo de leopardracer](https://x.com/leopardracer/status/2055539050304409947) enlaza un vídeo de **21:04** sobre un M1 Max de 64 GB. El vídeo clona un fork de TheTom, usa Qwen3.6-35B-A3B GGUF y K q8_0/V turbo3, y lo conecta a Kilo Code y OpenClaw. Los 53 tokens/s y 262K de contexto son lo mostrado/afirmado por el autor, no rendimiento garantizado ni prueba de velocidad a contexto lleno. El propio vídeo muestra prefill lento.

[TurboQuant+](https://github.com/TheTom/turboquant_plus) distingue hoy entre ideas incorporadas a upstream y el codec PolarQuant completo del fork. No copiar flags `turbo3` del vídeo en una compilación estándar sin verificar soporte de esa versión. Cuantizar K y V de forma diferente es una decisión de calidad/memoria, no una regla universal.

El artículo de dos GPUs citado en el hilo es otra configuración: 4080 SUPER + 5060 Ti, 27B denso como uso principal y llama-swap. No mezclar sus cifras con el M1 Max del vídeo. «Cero timeouts» es experiencia del autor. Ollama/LM Studio añaden más capas y pueden usar otros motores; quitarlas no elimina todos los errores ni garantiza privacidad si se conectan herramientas remotas.

## Otra capa de optimización

[[DeepGEMM]] optimiza kernels de cálculo en GPUs compatibles y requiere integración en el motor. No confundir un motor local como llama.cpp, la compresión de contexto y el precio de una API remota: cada capa tiene límites y medidas distintos.

## Recursos

- [Repositorio](https://github.com/ggml-org/llama.cpp)
- [Servidor, flags y API](https://github.com/ggml-org/llama.cpp/tree/master/tools/server)
- [TurboQuant+: investigación y estado de integración](https://github.com/TheTom/turboquant_plus)

## Relacionado

- [[Ollama]], [[Kilo Code]], [[Open WebUI]], [[Estrategia 90-10 Local]]

#opensource #modelos #agente
