# Dify

[langgenius/dify](https://github.com/langgenius/dify) — 146k ⭐ — [dify.ai](https://dify.ai)

Plataforma de desarrollo de aplicaciones LLM open source. Su interfaz visual combina AI workflow, RAG pipeline, capacidades de agente, gestión de modelos y observabilidad (Opik, Langfuse, Arize Phoenix).

## Características clave

1. **Workflow** — Construye flujos AI potentes en un canvas visual arrastrando componentes
2. **Soporte de modelos** — Integración con cientos de LLMs (GPT, Mistral, Llama3, OpenAI API-compatibles)
3. **Prompt IDE** — Interfaz para crear prompts, comparar rendimiento de modelos y añadir TTS, etc.
4. **RAG Pipeline** — Ingesta de documentos (PDF, PPT, etc.), chunking y recuperación
5. **Capacidades de agente** — Define agentes con LLM Function Calling o ReAct, con 50+ herramientas integradas (Google Search, DALL·E, Stable Diffusion, WolframAlpha)
6. **LLMOps** — Monitoriza logs y rendimiento de la app; mejora prompts, datasets y modelos según datos reales
7. **Backend-as-a-Service** — APIs para integrar Dify en tu lógica de negocio

## Despliegue

```bash
git clone https://github.com/langgenius/dify.git
cd dify/docker
cp .env.example .env
docker compose up -d
```

Mínimo: 2 CPU, 4 GB RAM.

También cloud gratuito con 200 llamadas GPT-4 incluidas en [cloud.dify.ai](https://cloud.dify.ai).

## Stack

TypeScript (52.9%), Python (43%), JavaScript, MDX. 1.348 contribuidores. 164 releases.

Relacionado: [[AnythingLLM]], [[Microsoft Foundry]], [[Firecrawl]], [[Memanto]], [[OpenMontage]]

# #agente #ia #web #proyecto
