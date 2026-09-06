# Cactus Needle 2

**Cactus Needle 2** es un **LLM agentic de 14MB para dispositivos diminutos**: teléfonos baratos, wearables, smart home, robots y microcontroladores. 45M de parámetros, **todo el modelo es un binario de 14MB** que corre una sesión completa en **28MB de RAM**. Open (Apache-2.0), de Cactus Compute. Entrenado desde cero en 115B tokens (pretrain) + 38B (post-train) de **tool call y device use structured generation**.

## La apuesta

- **On-device AI para dispositivos <$200**: el edge de verdad no son Macs y PCs — hay 21 mil millones de dispositivos IoT frente a ~1.5 mil millones de PCs. La mayoría de móviles en mercados emergentes cuestan menos de $200. Ese es el hardware que Needle ataca: sin GPU, sin NPU, decenas de MB de RAM
- **Function calling es el trabajo**: encender una luz no necesita un modelo frontier. Los dispositivos ya exponen sus funciones como tools con parámetros tipados; lo único difícil es mapear una frase a la función y argumentos correctos. Por eso 45M parámetros bastan donde el chat requiere miles de millones
- **"Reliable intent-to-action on budget hardware"** — esa es la respuesta de Cactus Compute a "¿para qué sirve?"

## Rendimiento

| Dispositivo | Velocidad de decode |
|---|---|
| Raspberry Pi 5 | **500 tok/s** |
| VR (Meta Quest 3S, Apple Vision Pro) | 400–1.500 tok/s |
| Móviles <$200 (Samsung A-Series) | 300–700 tok/s |
| Microcontroladores (ESP32) | corre (28MB pico de RAM) |

**MFLOPs por token**: Needle gasta **70** (convencional de su shape: 164; transformer a su parámetro count: 87; LFM2.5 230M: 460; FunctionGemma 270M: 540; Apple FM: ~6.000). Gasta 7× a 85× menos energía por token que los modelos pequeños con los que compite.

## Arquitectura: Simple Attention Network

- **Hadamard MLP**: reemplaza las proyecciones densas up/down por una **transformada de Walsh fija + diagonales aprendidas** — el channel mixing cuesta casi cero parámetros
- **Engram**: mueve conocimiento del mundo a **tablas de n-grams hasheadas** leídas por gather (8M parámetros que no cuestan aritmética)
- **Residual streams multi-lane**: 27 capas, 512 de width con flexibilidad de routing de una red mucho más ancha
- **KV cache acotado**: ventana deslizante de 256 tokens — la RAM es un **techo determinista de 28MB**, no una curva que crece
- **System prompt y tools pinneados como sinks permanentes**: lo único que un modelo de tool-calling no debe olvidar — sus tools — es estructuralmente imposible de evictar

## Cuantización CQ2-bit (el truco de los 14MB)

Never post-hoc: Needle entrena **contra** Cactus Quants desde el pretraining — pesos, activaciones y KV cache. El modelo de 2bit que despliegas es el que se entrenó. El engine nunca descomprime pesos a RAM: los códigos de 2bit se expanden en registers vectoriales y se fusionan en dot products enteros, así que el path aritmético es **int8 de punta a punta** y la memoria residente se queda en el tamaño del blob.

El **grammar compiler** (desde los schemas) sabe qué tokens son legales antes de que existan los logits: calcula scores solo para candidate rows, saltándose hasta el **98% de la proyección de vocabulario** en tokens estructurales. Un binario universal autodetecta el kernel (SDOT, NEON, AVX2, RISC-V vectors, wasm SIMD, scalar).

## Evaluación (ordered strict exact match)

| Benchmark | Needle 2 (CQ2-bit) | LFM2.5 230M (f16) | FunctionGemma 270M (f16) | Apple FM |
|---|---|---|---|---|
| Mobile Actions (961) | 63.7 | 69.1 | 64.0 | 57.6 |
| DroidCall (200) | 17.0 | 11.0 | 17.5 | — |
| Seal-Tools in-domain (700) | **32.6** | 26.9 | 16.3 | — |
| Seal-Tools out-of-domain (654) | **28.7** | 17.0 | 15.6 | — |
| BFCL v4 Overall (3.641) | 42.6 | 60.8 | 46.1 | 61.7 |

Needle trades wins con modelos 5× a 70× más grandes, a 2bits contra su f16. Las dos asimetrías declaradas: precisión (ellos f16, Needle 2bit — favorece a los baselines) y scope (Needle es solo tool-calling; ellos son LLMs generales — favorece a Needle). En **Seal-Tools domina** (listas de herramientas grandes y multi-call). En BFCL extrapola a Python (un punto de FunctionGemma) pese a no haber visto ese dominio en training.

## Fine-tuning (la parte que importa)

Needle está diseñado para fine-tunearse **en tu propio portátil** (minutos a horas): `needle finetune` con tus datos → exporta un `.cact` que habla los tools de tu dispositivo. **Fine-tuning sube la precisión 21 a 58 puntos y lo pone por delante de DeepSeek V4 Flash en 3 de 4 benchmarks** — tu producto expone un set fijo de tools, así que un especialista pequeño entrenado en exactamente esos tools gana a un generalista grande en la nube.

## Edge-cloud collaboration

Off-topic → **empty call** (refusal). Cada respuesta lleva un **confidence score aprendido**: actúa por encima del umbral, pregunta de nuevo, o escala a la nube por debajo. La mayoría de device-use se maneja local; la escalada es rara; el default es privado, rápido y gratis.

## Caso real: Pebble

Eric Migicovsky (fundador de Pebble) corre Needle localmente en la app del **Index Ring** — el anillo no tiene pantalla, así que "cuando hablas, la acción tiene que ocurrir, siempre, con o sin internet".

## Recursos

- Web: [cactuscompute.com/needle](https://cactuscompute.com/needle)
- Sandbox (WebAssembly, en el navegador): en la web oficial
- Repo y HF: ver web oficial
- Cactus Compute: [@cactuscompute en X](https://x.com/cactuscompute)

## Relacionado

- IA local: [[AirLLM]], [[Ollama]], [[AnythingLLM]]
- Models pequeños en el edge: [[Ecosistema de modelos]], [[TokenRouter]]
- Agentes en hardware limitado: [[Learn Harness Engineering]], [[Ahmad Osman (@TheAhmadOsman)]]

# #modelos #agente #ia #opensource