# Phonon-2

Modelo de reconocimiento de voz en inglés de FermionResearch, derivado de Parakeet TDT 0.6B v3. [Ficha de pesos](https://huggingface.co/FermionResearch/Phonon-2): descarga 164MB, pesos CC-BY-4.0. Es el modelo de la app Detta; licencia de pesos no describe automáticamente licencia/precio de la app.

## Qué se ha medido

La ficha del autor informa WER medio 5,21% en 7 conjuntos ingleses, frente a 6,58% para Whisper large-v3-turbo y 4,96% del teacher. No decir «mejor que Whisper» sin versión/conjunto: en varias columnas otro modelo gana. Tampoco 164MB significa 164M parámetros; comprime pesos de un modelo 0,6B.

Velocidad publicada:174x realtime GPU en M5 MacBook Air, alrededor de 20s/hora; [página del proveedor](https://www.fermionresearch.com/models/phonon-2/) publica 606x (6s/hora) usando CoreML/Neural Engine. Son rutas/hardware distintos, no garantía en cualquier Mac. El paquete CoreML tiene encoder 332MB y decoder 13MB; no es la descarga 164MB del formato compacto.

## Límites

Datos/benchmarks del desarrollador, no réplica independiente ejecutada en esta revisión. Inglés, no sustituto de un modelo multilingüe para español. Dictado de texto punteado no implica diarización/realtime fiable ni precisión en nombres propios; el propio hilo menciona ese límite. Probar acentos, ruido, vocabulario y privacidad del producto final.

Ver también: [[Kyutai TTS + Unmute]], [[Claude Video]], [[Ollama]].

#modelos #audio #agente
