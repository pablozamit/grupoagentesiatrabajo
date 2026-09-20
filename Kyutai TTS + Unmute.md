# Kyutai TTS + Unmute

**Kyutai** (lab francés, financiado por Iliad/CMA CGM/Schmidt Sciences) abrió en julio 2025 sus dos joyas de voz: **Kyutai TTS 1.6B** y **Unmute** ([unmute.sh](http://unmute.sh)). 172.7k views.

## Kyutai TTS 1.6B

- Natural, customisable y rápido: **32 usuarios con 350 ms en una L40S**
- Cientos de voces (Expresso, VCTK + **228 voces donadas** por voluntarios con licencia CC0)
- Hermano pequeño: **Pocket TTS** (100M params, corre en CPU, con voice cloning)

## Unmute: dale voz a cualquier LLM

Convierte un LLM de texto en IA de voz modular: STT transcribe en real time (con VAD semántico que no te interrumpe), el LLM que elijas responde (razonamiento + function calling incluidos) y el TTS habla antes de terminar de generar — **latencia total bajo 1 segundo**. En unmute.sh corre Mistral-Small-3.2-24B: **100% open source**. Cabe en **una sola GPU** (~750 ms) o repartido (~450 ms).

Límite honesto del propio lab: al ser cascada sobre texto, se pierde emoción, énfasis e ironía frente a un modelo audio-nativo como su Moshi.

## Recursos

- TTS: [kyutai.org/tts](http://kyutai.org/tts) · Unmute: [kyutai.org/unmute](https://kyutai.org/unmute) · Demo: [unmute.sh](http://unmute.sh)
- Código: [kyutai-labs/unmute](https://github.com/kyutai-labs/unmute) · Voces: [huggingface.co/kyutai/tts-voices](https://huggingface.co/kyutai/tts-voices)
- Anuncio: [@kyutai_labs en X](https://x.com/kyutai_labs)

## Relacionado

- Clonación de voz: [[Fish Audio S2.1 Pro]]
- Voz para agentes: [[OpenFlow]] (dictado), [[Quill]] (transcripción)
- SFX y música IA: [[Sonniss GDC 2026]]

# #audio #opensource #agente