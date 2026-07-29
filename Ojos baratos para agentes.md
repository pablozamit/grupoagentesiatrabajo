# Ojos baratos para agentes

**"Ojos baratos para agentes"** es una técnica documentada por [Andres (@WiFiMoneyGuy)](https://x.com/WiFiMoneyGuy) para darle visión a modelos de razonamiento caros (Claude Opus, Fable) usando un modelo multimodal barato como intermediario. El concepto: **división del trabajo** — el modelo barato mira, el modelo caro razona.

## El problema

Los modelos top-tier no pueden ver vídeo (la API de Claude no acepta input de vídeo). Y aunque pueden ver imágenes, el coste es brutal:

- **1 imagen full-res en Opus 5** ≈ 4.784 tokens ≈ **2 céntimos**
- En una sesión de 20 turnos con 10 imágenes, no son 10 cargos: son **~200** (las imágenes se reenvían en cada turno)

## La solución: Gemini 2.5 Flash-Lite como "ojos"

Usar **Gemini 2.5 Flash-Lite** (vía OpenRouter) como testigo barato:

| Modelo | Rol | Coste input | Coste output |
|--------|-----|-------------|--------------|
| Claude Opus 5 / Fable 5 | Razonador (juez) | $5–10/M tokens | — |
| Gemini 2.5 Flash-Lite | Observador (testigo) | **$0.10/M** tokens | $0.40/M |

## Las matemáticas que lo cambian todo

Flash-Lite muestrea vídeo a **1 frame por segundo**, ~300 tokens por segundo de footage:

| Contenido | Tokens | Coste |
|-----------|--------|-------|
| 1 imagen | 258 | ~$0.00003 (**1.000× más barato** que Opus) |
| TikTok 60s | 18.000 | ~$0.002 |
| Vídeo 3 min | ~54.000 | ~$0.005 |
| **1 HORA de YouTube** (baja res) | ~1M | **~$0.04** |

## El cableado: una sola herramienta

OpenRouter habla el formato estándar de chat completions. Todo se reduce a un script que Claude puede llamar:

```bash
curl https://openrouter.ai/api/v1/chat/completions \
  -H "Authorization: Bearer $OPENROUTER_API_KEY" \
  -d '{
    "model": "google/gemini-2.5-flash-lite",
    "messages": [{
      "role": "user",
      "content": [
        {"type": "text", "text": "describe este video: timestamps, texto en pantalla, cortes, y qué pasa en los primeros 3 segundos"},
        {"type": "video_url", "video_url": {"url": "data:video/mp4;base64,..."}}
      ]
    }]
  }'
```

El prompt importa más que el modelo: pide timestamps, texto en pantalla, cortes, encuadres, estructura del hook. No pidas "describe este video".

## El bucle limpio

1. Claude encuentra algo visual → llama a `look.sh` con la ruta del archivo y una pregunta
2. Flash-Lite mira el vídeo/imagen → devuelve texto
3. Claude razona sobre el texto

El texto que devuelve Flash-Lite (~300 tokens) pesa un **6%** de lo que pesaría la imagen original en el historial.

## Cuándo sí usar el modelo caro

Flash-Lite se pierde cosas sutiles. Si un solo frame decide algo importante, **manda ese frame a Claude y paga los 2 céntimos**. Todo lo demás va por los ojos baratos.

> "Tu modelo no necesita ver. Necesita a alguien que haya visto."

## Relacionado

- [[Acceso a internet desde agentes]] — Comparativa de métodos para dar acceso web a agentes
- [[AgentRouter]] — API unificada con crédito gratis para acceder a múltiples modelos
- [[Claude Video]] — Skill /watch que usa Whisper + frames para que Claude vea videos
- [[PixelRAG]] — Enfoque complementario: indexa webs por screenshots para que el agente "vea" la página
- [[OpenRouter]] — API unificada de modelos donde conseguir Flash-Lite
- [[TokenRouter]] — Otra API unificada de modelos, a veces con modelos gratis

# #agente #contenido #modelos
