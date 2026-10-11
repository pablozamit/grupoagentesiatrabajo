# headroom

Capa de compresión de contexto para agentes IA: comprime todo lo que el agente lee (salidas de herramientas, logs, chunks RAG, archivos, historial de conversación) antes de que llegue al LLM. Según el autor, 60-95% menos tokens con las mismas respuestas; el ejemplo del README comprime un log de 10.144 a 1.260 tokens manteniendo la línea FATAL. La compresión corre en local: ningún prompt ni archivo sale de tu máquina.

- Tres modos de uso: librería Python/TypeScript (`compress(messages)` inline), proxy sin tocar código (`headroom proxy --port 8787`) y `headroom wrap <agente>` que envuelve agentes de código (claude, codex, grok, copilot, cursor, aider, openclaw, cline, goose...) en un comando; reversible con `headroom unwrap`. También servidor MCP (headroom_compress, headroom_retrieve, headroom_stats).
- Cómo funciona: un ContentRouter detecta el tipo de contenido y elige el compresor: SmartCrusher para JSON, CodeCompressor para código (vía AST) y Kompress-v2-base para prosa (modelo open en Hugging Face). CacheAligner marca el contenido volátil que rompería la KV-cache del proveedor, sin reescribir prompts.
- Reversible (CCR): los originales quedan cacheados en local y el modelo puede recuperar el texto completo llamando a headroom_retrieve cuando lo necesita.
- Extras: memoria compartida entre agentes (Claude, Codex, Gemini, Grok) con dedup automático, y `headroom learn`, que mina sesiones fallidas y escribe correcciones en CLAUDE.md / AGENTS.md / GEMINI.md / GROK.md.
- Instalación: `pip install "headroom-ai[all]"` (incluye el CLI; el paquete npm es solo el SDK de TypeScript). Licencia Apache 2.0.

Relacionado: [[RTK (Rust Token Killer)]] y [[TokenRouter]], otras herramientas de la enciclopedia para ahorrar tokens.

Enlace: https://github.com/headroomlabs-ai/headroom (~75k estrellas, oct 2026; repositorio tendencia del día en GitHub, jun 2026)

#agente #opensource
