# Graphify

[Graphify](https://github.com/Graphify-Labs/graphify) convierte una carpeta —código, docs, esquemas SQL, configuraciones, PDFs, markdown, capturas, diagramas o fotos de pizarras, incluso en otros idiomas— en un grafo de conocimiento consultable. Es una skill (`/graphify`) para Claude Code, Cursor, Codex y Gemini CLI. Licencia Apache-2.0, ~147,5k ⭐.

## Qué produce

- `graph.html`: grafo interactivo con búsqueda, filtros y comunidades.
- `obsidian/`: la salida se abre como vault de Obsidian; `wiki/`: artículos estilo Wikipedia para que naveguen agentes.
- `GRAPH_REPORT.md`: nodos centrales, conexiones sorprendentes y preguntas sugeridas.
- `graph.json` + caché SHA256: el grafo persiste entre sesiones y las re-ejecuciones solo procesan lo que cambió.

Sus autores lo presentan como respuesta a la carpeta `/raw` de Karpathy (donde vuelca papers, tuits y notas) y afirman ~71,5x menos tokens por consulta frente a leer los archivos en bruto. Se instala con `pip install graphifyy && graphify install` (el paquete de PyPI se llama temporalmente `graphifyy`); requiere Python 3.10+.

## Relacionado

- [[RAG]], [[Claude Code]]

# #skills #ia #opensource
