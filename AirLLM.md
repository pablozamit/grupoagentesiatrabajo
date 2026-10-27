# AirLLM

AirLLM es un proyecto open source que permite ejecutar modelos de lenguaje grandes (hasta 405B parámetros) en hardware de consumo con solo 8GB de VRAM.

## Cómo funciona

En lugar de cargar el modelo completo en la GPU, AirLLM mantiene solo **una capa activa** en la GPU y va cargando el resto de capas bajo demanda durante la inferencia (inferencia capa a capa, moviendo activaciones entre CPU y GPU). Esto reduce drásticamente los requisitos de memoria **sin cuantización por defecto**: el modelo no pierde calidad.

## Requisitos

- **70B en una GPU de 4GB**; escala hasta Llama 3.1 405B en **8GB de VRAM** (gama de consumo, ej. RTX 4070, 3080, etc.)
- Sin necesidad de hardware empresarial o múltiples GPUs
- Disponible en Linux, Windows y macOS

## Modelos soportados

Llama, Qwen y Mistral, con más modelos en camino.

## Limitación práctica

La inferencia capa a capa es lenta: según pruebas comentadas en la comunidad (discusión en llama.cpp), del orden de unos pocos tokens por segundo incluso en GPUs potentes. Sirve para experimentar y procesos sin prisa, no para chat fluido.

## Por qué importa

Democratiza el acceso a modelos de frontera (como Llama 405B) permitiendo ejecutarlos localmente con hardware que muchos desarrolladores ya tienen. Esto tiene implicaciones para privacidad, costo y desarrollo offline de aplicaciones de IA.

## Relacionado

- [[Ollama]] — la forma más cómoda de ejecutar modelos locales de tamaño normal
- [[mini-AGI]] — otro proyecto que apura hardware modesto (aprendizaje continuo en 8GB de VRAM)

## Enlaces

- Repo: [github.com/lyogavin/airllm](https://github.com/lyogavin/airllm)
- Descubierto vía: [@0xKento_](https://x.com/0xKento_)
- Actualizado 11/10/2026 con el hilo de [@oliviscusAI](https://x.com/oliviscusAI/status/2108875316160860402)

# #modelos #agente #investigacion
