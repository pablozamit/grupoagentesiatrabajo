# Codebase Memory MCP

**Codebase Memory MCP** ([github.com/DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp), MIT, ~40k ⭐) es un **servidor MCP de code intelligence**: indexa tu repo en un **knowledge graph persistente** para que el agente responda preguntas estructurales sin leerse el repo entero. Hilo en español de [@mroscardev](https://x.com/mroscardev): misma respuesta con **3.400 tokens en vez de 412.000** (−99.2%).

## Cómo funciona

En vez de archivos sueltos, el proyecto se representa como **nodos conectados**: función→función (LLAMA), archivo→módulo (IMPORTA), clase→interfaz (IMPLEMENTA), ruta HTTP→controlador. El agente pregunta por el camino (`trace_path("ProcessOrder", inbound)`) y recibe relaciones, no archivos.

## Datos duros

- Indexa un repo medio en **milisegundos** (kernel Linux: 28M LOC en 3 min); queries <1 ms
- 158–162 lenguajes (tree-sitter compilado en el binario) + Hybrid LSP; **15 MCP tools** (search, trace, arquitectura, impacto, Cypher, dead code, HTTP cross-service, ADRs…)
- Búsqueda semántica con embeddings empaquetados (sin API key), indexado de Docker/K8s, **viz 3D en localhost:9749**
- Paper: [arXiv:2603.27277](https://arxiv.org/abs/2603.27277) — 31 repos reales: 83% calidad, 10× menos tokens, 2.1× menos tool calls
- Un binario estático, cero dependencias, todo en local (tu código no sale); SLSA 3 + VirusTotal por release
- 11+ agentes auto-detectados (Claude, Codex, Gemini, Zed, OpenCode, Aider, Kilo…)

Sin LLM dentro a propósito: **tu agente es la capa inteligente** que traduce lenguaje a queries del grafo.

## Recursos

- Repo y web: [github.com/DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) · [deusdata.github.io](https://deusdata.github.io/codebase-memory-mcp)
- Hilo: [@mroscardev en X](https://x.com/mroscardev) (grafo para entender un repo, en español)

## Relacionado

- Memoria de agentes: [[Memanto]], [[TencentDB Agent Memory]]
- Menos tokens en terminal: [[RTK (Rust Token Killer)]]
- Generar skills de lo observado: [[Codex Record & Replay]]

# #agente #vibecoding #opensource