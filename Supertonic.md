# Supertonic 3

TTS (text-to-speech) local, open-source y ultrarrápido. Corre en CPU, GPU, Raspberry Pi, iOS, Android y navegador vía WebGPU.

## Qué lo hace diferente

- **Local**: Sin nube, sin API key, sin GPU necesaria. Tu texto no sale de tu máquina
- **4x más rápido que ElevenLabs Flash** en un M4 Pro (1.263 chars/s vs 287 chars/s)
- **1000x tiempo real** en una RTX 4090
- **99M parámetros**: corre en Raspberry Pi

## Benchmark

| Sistema | Velocidad |
|---------|-----------|
| ElevenLabs Flash (nube) | 287 chars/s |
| Supertonic 3 (local, M4 Pro) | 1.263 chars/s |
| Supertonic 3 (local, RTX 4090) | 1000x tiempo real |

## Características

- ✅ **31 idiomas** con detección automática - sin etiquetar idioma
- ✅ **10 etiquetas de expresión inline**: `[laughing]`, `[whispering]`, `[excited]` y más
- ✅ **Normalización nativa**: expresiones financieras ($5.2M → "cinco punto dos millones de dólares"), fechas, teléfonos, unidades técnicas (2.3h, 30kph)
- ✅ **Audio 44.1kHz** en WAV de 16 bits
- ✅ Compatible con Python, Node.js, Rust, Go, Swift, Flutter, C++ y C#
- ✅ **Endpoint compatible con OpenAI** `/v1/audio/speech` — drop-in replacement

## Instalación

```bash
pip install supertonic
```

## Recursos

- GitHub: [github.com/supertone-inc/supertonic](https://github.com/supertone-inc/supertonic)

# #tts #ia #modelos #audio
