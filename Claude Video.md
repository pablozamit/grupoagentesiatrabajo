# Claude Video

**Skill `/watch`** que le da a un agente de IA la capacidad de ver cualquier video, sin importar el host. Pega una URL (YouTube, TikTok, Instagram, Loom, X, +1800 sitios) o un archivo local, haz una pregunta, y el agente descarga, extrae frames con detección de escenas, transcribe con Whisper y lee cada frame como imagen. Aunque nació para Claude, no es exclusivo de él: se instala en Codex, Cursor, Copilot, Gemini CLI y +50 hosts.

**Repo:** [bradautomates/claude-video](https://github.com/bradautomates/claude-video) — **12.5k ⭐** — MIT — por [Brad Bonanno](https://x.com/bradbonanno)

## Cómo funciona

1. Pegas URL + pregunta → `yt-dlp` verifica subtítulos primero
2. Si hay subtítulos nativos → transcript gratis sin descargar video
3. Si no hay → descarga audio y transcribe con Whisper (Groq `whisper-large-v3` o OpenAI)
4. `ffmpeg` extrae frames con detección de escenas (3 modos de detalle)
5. Claude lee frames + transcript con timestamps y responde

## Modos de detalle

| Modo | Frames | Uso |
|---|---|---|
| `transcript` | 0 | Solo transcripción, sin frames |
| `efficient` | 50 | Keyframes rápidos (~0.5s) |
| `balanced` | 100 | Scene-aware, por defecto |
| `token-burner` | Sin tope | Todos los cambios de escena |

**Deduplicación**: los frames casi idénticos se descartan automáticamente para que el presupuesto de tokens se gaste en contenido distinto.

## Instalación

```bash
# Claude Code
/plugin marketplace add bradautomates/claude-video
/plugin install watch@claude-video

# Codex, Cursor, Copilot, Gemini CLI y +50 hosts
npx skills add bradautomates/claude-video -g
```

## Uso

```bash
/watch https://youtu.be/dQw4w9WgXcQ qué pasa en el segundo 30?
/watch ~/screen-recording.mov ¿cuándo se rompe la UI?
/watch video.mp4 --start 2:15 --end 2:45
```

## Relacionado

- [[HyperFrames]] — Genera vídeos desde HTML, pensado para agentes
- [[OpenMontage]] — Producción de video agentic open source

# #skills #video #agente