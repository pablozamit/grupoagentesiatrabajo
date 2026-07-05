# Open Notebook

**Open Notebook** es una alternativa open-source (MIT) a Google Notebook LM, con privacidad total, multi-modelo, y 100% localizable. Corre con Docker.

- **Repo**: [github.com/lfnovo/open-notebook](https://github.com/lfnovo/open-notebook)
- **Web**: [open-notebook.ai](https://www.open-notebook.ai)
- **32.1k estrellas**, 3.6k forks

## Open Notebook vs Google Notebook LM

| Aspecto | Open Notebook | Notebook LM |
|---------|--------------|-------------|
| Privacidad | Self-hosted, tus datos | Solo nube Google |
| Proveedores IA | 18+ (OpenAI, Anthropic, Ollama, LM Studio, etc.) | Solo Google |
| Podcast | 1-4 voces con perfiles personalizados | 2 voces fijas |
| API | REST API completa | Sin API |
| Despliegue | Docker, cloud o local | Solo Google |
| Coste | Solo uso de IA (o local gratis) | Gratuito + suscripción |

## Funcionalidades clave

- **Multi-notebook**: organiza múltiples proyectos de investigación
- **Formatos**: PDFs, videos, audio, páginas web, documentos Office
- **Podcast profesional**: generación multi-voz con perfiles de episodio
- **Búsqueda**: texto completo + búsqueda vectorial
- **Chat contextual**: conversaciones con IA potenciadas por tu investigación
- **Transformaciones**: acciones personalizables para resumir y extraer información
- **Modelos de razonamiento**: soporte para DeepSeek-R1, Qwen3 y otros
- **MCP Integration**: compatible con Claude Desktop, VS Code y otros clientes MCP
- **Autenticación**: protección opcional con contraseña para despliegues públicos

## Proveedores soportados

OpenAI, Anthropic, Groq, Google (GenAI), Vertex AI, Ollama, Perplexity, ElevenLabs, Deepgram, Azure OpenAI, Mistral, DeepSeek, Voyage, xAI, OpenRouter, DashScope (Qwen), MiniMax, y cualquier endpoint compatible con OpenAI (LM Studio, etc.).

## Stack técnico

Python (FastAPI), Next.js (React), TypeScript, SurrealDB, LangChain.

## Inicio rápido (2 minutos)

```yaml
# docker-compose.yml
services:
  surrealdb:
    image: surrealdb/surrealdb:v2
    command: start --log info --user root --pass root rocksdb:/mydata/mydatabase.db
    user: root
    ports:
      - "8000:8000"
    volumes:
      - ./surreal_data:/mydata
    restart: always

  open_notebook:
    image: lfnovo/open_notebook:v1-latest
    ports:
      - "8502:8502"
      - "5055:5055"
    environment:
      - OPEN_NOTEBOOK_ENCRYPTION_KEY=change-me-to-a-secret-string
      - SURREAL_URL=ws://surrealdb:8000/rpc
      - SURREAL_USER=root
      - SURREAL_PASSWORD=root
      - SURREAL_NAMESPACE=open_notebook
      - SURREAL_DATABASE=open_notebook
    volumes:
      - ./notebook_data:/app/data
    depends_on:
      - surrealdb
    restart: always
```

```bash
docker compose up -d
# Abrir http://localhost:8502
```

---

#ia #contenido #opensource #hosting #investigacion
