# LlamaCloud (parseo + MCP)

**LlamaCloud** ([cloud.llamaindex.ai](https://cloud.llamaindex.ai), de Jerry Liu [@jerryjliu0](https://x.com/jerryjliu0), CEO de LlamaIndex) es la plataforma managed de **parseo, ingesta y retrieval** para RAG serio: LlamaParse (OCR agéntico para layouts, tablas, charts, handwriting), LlamaExtract (estructurado por schema) e indexación. Plan gratis: **10.000 créditos/mes** (~1.000 páginas). Servidor MCP en [mcp.llamaindex.ai](https://mcp.llamaindex.ai) (open source + hosteado).

## El problema que ataca

El "chat with your PDF" falla en docs complejos: un informe financiero con **tablas escaneadas** devuelve valores alucinados en ChatGPT/Claude. Con LlamaCloud como tool MCP, el agente parsea e indexa con precisión y hasta renderiza la tabla escaneada en 2D. Setup en ~5 min desde la UI, sin código.

## El caso: 100+ opiniones SCOTUS en <10 minutos

Indexó más de 100 opiniones de la Corte Suprema (2022–2024) con alta precisión y las expuso como **MCP server para deep research con citas** desde Claude — sin alucinaciones de generación pura ni lentitud de deep web research.

## Recursos

- Plataforma: [cloud.llamaindex.ai](https://cloud.llamaindex.ai) · MCP: [mcp.llamaindex.ai](https://mcp.llamaindex.ai)
- Docs: [docs.llamaindex.ai](https://docs.llamaindex.ai)
- Demos: [@jerryjliu0 en X](https://x.com/jerryjliu0) (PDFs + SCOTUS)

## Relacionado

- RAG clásico: [[RAG]], [[PixelRAG]]
- Alternativa open source total: [[Crawl4AI]] (web → Markdown, sin API key)
- Extracción web con MCP: [[Firecrawl]]

# #agente #investigacion #contenido