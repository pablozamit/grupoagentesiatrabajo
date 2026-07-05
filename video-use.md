# video-use

[browser-use/video-use](https://github.com/browser-use/video-use) — edita vídeos con agentes de código (Claude Code, Codex, Hermes, etc.). 100 % open source. 9.9K estrellas.

Deja footage en bruto en una carpeta, chatea con el agente, obtén `final.mp4`. Sin menús ni presets.

## Qué hace

- Corta palabras de relleno (umm, uh, falsos arranques) y silencios entre tomas
- Color grading automático por segmento (cinematográfico cálido, neutro, o cadena ffmpeg personalizada)
- Fundidos de audio de 30ms en cada corte
- Subtítulos personalizables (por defecto chunks de 2 palabras en mayúsculas)
- Overlays animados vía HyperFrames, Remotion, Manim o PIL — lanzados en sub-agentes paralelos
- Autoevaluación del renderizado en cada corte antes de mostrar nada
- Memoria de sesión persistente en `project.md`

## Instalación rápida

Pega esto en Claude Code, Codex, Hermes, etc.:

```
Set up https://github.com/browser-use/video-use for me.
```

El agente clona, instala dependencias, registra la skill y pide la API key de ElevenLabs.

## Manual

```bash
git clone https://github.com/browser-use/video-use ~/Developer/video-use
ln -sfn ~/Developer/video-use ~/.claude/skills/video-use
cd ~/Developer/video-use
uv sync
brew install ffmpeg
cp .env.example .env
# Añadir ELEVENLABS_API_KEY
```

## Uso

```bash
cd /path/to/tus/videos
claude
# "edita esto en un vídeo de lanzamiento"
```

El agente inventaria fuentes, propone estrategia, espera confirmación y produce `edit/final.mp4`.

## Cómo funciona

El LLM nunca "ve" el vídeo — lo **lee** mediante dos capas:

1. **Transcripción de audio** (siempre): palabras con timestamps, diarización de hablantes, eventos de audio. Todo cabe en ~12KB.
2. **Composites visuales** (bajo demanda): `timeline_view` genera un filmstrip + forma de onda + etiquetas de palabra PNG solo en puntos de decisión.

Misma idea que browser-use dando un DOM estructurado en vez de un screenshot — pero para vídeo.

## Pipeline

```
Transcribir ──> Empaquetar ──> LLM Razona ──> EDL ──> Renderizar ──> Autoevaluar
                                                                          │
                                                                          └─ ¿fallo? corrige y re-renderiza (máx 3)
```

Relacionado: [[OpenCut]], [[HyperFrames]], [[FFmpeg]], [[Browser Use]], [[Hermes Agent]]

# #video #edicion #agente #ia #opensource
