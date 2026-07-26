# AirLLM

AirLLM es un proyecto open source que permite ejecutar modelos de lenguaje grandes (hasta 405B parámetros) en hardware de consumo con solo 8GB de VRAM.

## Cómo funciona

En lugar de cargar el modelo completo en la GPU, AirLLM mantiene solo **una capa activa** en la GPU y va cargando el resto de capas bajo demanda durante la inferencia. Esto reduce drásticamente los requisitos de memoria sin sacrificar funcionalidad.

## Requisitos

- GPU con **8GB VRAM** (gama de consumo, ej. RTX 4070, 3080, etc.)
- Sin necesidad de hardware empresarial o múltiples GPUs

## Por qué importa

Democratiza el acceso a modelos de frontera (como Llama 405B) permitiendo ejecutarlos localmente con hardware que muchos desarrolladores ya tienen. Esto tiene implicaciones para privacidad, costo y desarrollo offline de aplicaciones de IA.

## Enlaces

- Repo: [github.com — airllm](https://github.com)
- Descubierto vía: [@0xKento_](https://x.com/0xKento_)

# #modelos #agente #investigacion