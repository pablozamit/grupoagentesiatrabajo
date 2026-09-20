# Edge0

**Edge0** (repo `Edge0-AI/edge0`, Apache-2.0, modelos `Edge0/Edge0-35b-a3b-preview` y `Edge0-8b-a1b-preview` en HF) es un **framework open source de inferencia MoE por streaming para correr modelos grandes 100% on-device**. De Samuel Zeng ([@SamuelZengML](https://x.com/SamuelZengML), edge0.ai, MIT TR35). 716k views.

## El truco: SSD expert offload

- El modelo completo vive en **almacenamiento**; solo los parámetros del paso actual suben a memoria mientras se pre-cargan los del siguiente (+ Recover-LoRA y prerouter routing prediction)
- Resultado: **35B con ~2.9 GB pico** (8B con ~1 GB), ~15–18 tok/s en Apple Silicon
- Caso que citan: **juegos jugables generados y refinados en local** con ~2 GB pico, cero llamadas cloud

## Matiz honesto (verificado)

El post vende "35B en un iPhone con 1–2.5 GB". El README público soporta hoy **solo macOS con Apple Silicon** (CUDA planeado): la demo de iPhone no se refleja en la plataforma soportada. Brecha típica de proyecto temprano (sandboxing de App Store, port del runtime), no imposibilidad técnica — pero **construye sobre macOS, no sobre iOS**, hasta que lo anuncien.

## Recursos

- Repo: [github.com/Edge0-AI/edge0](https://github.com/Edge0-AI/edge0)
- Modelos: [huggingface.co/Edge0](https://huggingface.co/Edge0)
- Análisis independiente: [explainx.ai](https://explainx.ai/blog/edge0-35b-on-device-model-apple-silicon-2026)

## Relacionado

- Modelos diminutos locales: [[Cactus Needle 2]], [[GLiNER2.5]], [[Ollama]]
- Agentes en local: [[Pi en el navegador (MiniCPM5)]]
- Generar juegos con IA: [[Arcade AI]]

# #modelos #opensource #agente