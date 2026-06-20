# Open WebUI

[open-webui/open-webui](https://github.com/open-webui/open-webui) — 142k ⭐ — [openwebui.com](https://openwebui.com)

Interfaz de IA self-hosted, extensible y rica en funciones, diseñada para operar completamente offline. Compatible con Ollama y APIs OpenAI-compatibles, con motor RAG integrado.

Creado por Timothy Jaeryang Baek.

## Características clave

- **Chat con cualquier modelo**: Ollama, OpenAI, OpenRouter, Groq, Mistral, LMStudio, etc.
- **RAG local**: 9 bases de datos vectoriales, extracción de PDFs/PPT, OCR (Tika, Docling, Mistral OCR, PaddleOCR-vl)
- **Búsqueda web**: 15+ providers (SearXNG, Google PSE, Brave, Tavily, Perplexity, DuckDuckGo, Jina, Exa...)
- **Llamadas de voz/vídeo**: Whisper local, OpenAI, Deepgram, Azure + TTS con ElevenLabs, Azure, OpenAI
- **Generación de imágenes**: DALL-E, Gemini, ComfyUI, AUTOMATIC1111
- **Múltiples modelos en paralelo**: conversa con varios modelos a la vez
- **Pipelines/plugins**: framework para conectar lógica custom en Python (Function Calling, rate limiting, Langfuse, etc.)
- **RBAC**: control de acceso por roles, grupos y permisos granulares
- **Autenticación enterprise**: LDAP/AD, SCIM 2.0, SSO, OAuth (Okta, Azure AD, Google Workspace)
- **OpenTelemetry**: trazas, métricas y logs para observabilidad
- **Escalabilidad horizontal**: Redis + WebSocket para multi-worker/multi-node
- **PWA mobile**: experiencia nativa en el móvil con acceso offline
- **Multilenguaje**: i18n con soporte para decenas de idiomas
- **MCP**: compatible con herramientas MCP

## Despliegue

```bash
# Rápido (Ollama en tu máquina):
docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main

# Solo OpenAI:
docker run -d -p 3000:8080 -e OPENAI_API_KEY=tu_key -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main

# Con Ollama incluido (GPU):
docker run -d -p 3000:8080 --gpus=all -v ollama:/root/.ollama -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:ollama
```

También: `pip install open-webui` + `open-webui serve`, o Kubernetes (Helm, Kustomize).

Relacionado: [[Dify]], [[AnythingLLM]], [[Ollama]], [[Firecrawl]], [[TokenRouter]], [[Here.Now]]

# #agente #ia #web #proyecto
