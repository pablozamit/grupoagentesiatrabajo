# OpenFlow

**OpenFlow** es una app nativa de macOS para dictado por voz. Hablas y OpenFlow escribe texto limpio en cualquier app — correo, terminal, chat, donde sea. Alternativa open source y gratuita a WisprFlow.

## Características

- **Dictado universal (⌥⇧Z)**: pulsa para empezar, pulsa para terminar. El texto se escribe directamente en la app que estés usando
- **Hold-to-talk (⌥Space)**: graba solo mientras mantienes pulsada la tecla; al soltar transcribe
- **Asistente por voz (⌥⇧S)**: con texto seleccionado, di una instrucción ("hazlo más amigable", "conviértelo en viñetas") y reescribe la selección
- **Modo comando (⌥⇧C)**: refina el texto que acabas de producir. Encadena comandos: "hazlo más corto", "ahora tradúcelo al español"
- **"Hey Flow" wake word** (opcional): activación por voz manos libres, funciona con reconocimiento local en el dispositivo
- **Limpieza automática**: elimina muletillas ("um", "uh", "like"), corrige autocorrecciones, añade puntuación, formatea listas
- **Snippets**: frases abreviadas se expanden a texto guardado (firmas, enlaces, respuestas)
- **Vocabulario personalizado**: enseña nombres, jerga y ortografía difícil
- **100+ idiomas** con detección automática
- **Overlay flotante**: muestra forma de onda y estado sin robar el foco

## Requisitos

- macOS 14 (Sonoma) o superior
- Clave de API de Groq (gratuita)

## Instalación

```bash
git clone https://github.com/Krishiv-Thakuria/openflow.git
cd openflow
cp .env.example .env
# pegar clave API en .env: GROQ_API_KEY=gsk_...
swift run
```

## Tecnología

- Swift nativo (AppKit + SwiftUI)
- Whisper vía Groq API para transcripción ultrarrápida
- LLM para limpieza y edición por voz
- Reconocimiento local on-device para wake word
- Sin telemetría, sin cuenta, sin almacenamiento en servidores

## Enlaces

- Repo: [github.com/Krishiv-Thakuria/openflow](https://github.com/Krishiv-Thakuria/openflow)
- Autor: [@KrishivThakuria](https://x.com/KrishivThakuria)

# #productividad #agente