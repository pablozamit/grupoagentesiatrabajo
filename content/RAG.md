# RAG (Retrieval-Augmented Generation)

El RAG (generación aumentada por recuperación) es una arquitectura que combina un sistema de búsqueda con un modelo de lenguaje. Antes de responder, el modelo consulta una base de conocimiento externa, recupera fragmentos relevantes y los usa como contexto para generar la respuesta.

## RAG tradicional (basado en texto)

El enfoque clásico:

1. **Indexación**: los documentos se dividen en fragmentos de texto (_chunks_) y se convierten en vectores (_embeddings_) que se almacenan en una base de datos vectorial
2. **Recuperación**: cuando llega una consulta, se convierte en embedding y se buscan los fragmentos más similares por distancia coseno
3. **Generación**: los fragmentos recuperados se inyectan en el prompt del LLM como contexto

**Problemas**:
- Las tablas, gráficos, diagramas e imágenes se pierden al convertir a texto plano
- La fragmentación rompe la estructura visual de la información
- El rendimiento cae drásticamente con contenido multimodal

## PixelRAG

**PixelRAG** ([github](https://github.com/ErickSky/PixelRAG)) es una implementación que hace retrieval directamente sobre píxeles en lugar de texto. En lugar de dividir documentos en chunks de texto, renderiza cada página como captura de pantalla y busca visualmente fragmentos relevantes.

### Ventajas frente a RAG textual

| Aspecto | RAG textual | PixelRAG |
|---------|-------------|----------|
| Tablas y gráficos | Se pierden o se interpretan mal | Se retienen completos |
| Tokens por consulta | Alto (texto completo del chunk) | Hasta 10× menos |
| Precisión (accuracy) | Línea base | +18.1% reportado |
| Wikipedia (8.28M págs.) | Indexación parcial | Ya indexado |

### Plugin para Claude

PixelRAG incluye un plugin para Claude que permite usarlo directamente como herramienta de retrieval. El agente envía una consulta y recibe fragmentos visuales relevantes en lugar de texto fragmentado.

### Funcionamiento

1. La página o documento se renderiza como imagen (captura de pantalla)
2. Se extraen características visuales (no texto) de regiones de la imagen
3. La búsqueda compara consultas contra esas regiones visuales
4. La región relevante se devuelve como contexto visual, que el modelo puede "leer" ópticamente

### Casos de uso ideales

- Documentos con tablas complejas y datos estructurados
- PDFs con diagramas, gráficos e infografías
- Páginas web con diseño visual información (comparativas, dashboards)
- Agentes que necesitan entender la disposición visual de la información

## LEANN

**LEANN** ([github](https://github.com/StarTrail-org/LEANN)) es un motor de búsqueda semántica que reduce el almacenamiento de vectores hasta un 97% sin pérdida de precisión. Presentado en MLSys2026. 12.4k estrellas. MIT.

### El problema que resuelve

Las bases de datos vectoriales tradicionales precomputan y almacenan los embeddings de cada documento. Un corpus de 201GB de texto ocupa ~201GB en embeddings.

### El truco técnico

LEANN **no almacena los embeddings**. Los recomputa selectivamente usando un grafo con poda de alta conectividad. Solo calcula lo que necesitas, cuando lo necesitas.

Resultado: **60 millones de fragmentos de texto en 6GB** en lugar de 201GB (97% menos almacenamiento).

### Lo que puedes indexar en tu laptop

- Sistema de archivos completo
- Todos tus emails
- Historial del navegador
- Chats de Claude, ChatGPT e iMessage
- Tu codebase
- 60 millones de documentos externos

### MCP para Claude Code

LEANN se instala como MCP y añade búsqueda semántica real a Claude Code (que por defecto solo hace búsqueda por palabras clave), Cursor y Windsurf.

- Drop-in MCP — no toca tu workflow
- Compatible con Ollama, OpenAI y cualquier proveedor con formato OpenAI
- Sin GPU — funciona en CPU estándar
- Offline — tus datos no salen de tu máquina
- 29 releases, 45 contribuidores, MIT

## Enlaces relacionados

- [Firecrawl](Firecrawl) — scraping y RAG sobre web
- [PixelRAG](#PixelRAG) — RAG sobre píxeles
- [LEANN](#LEANN) — búsqueda semántica sin almacenar vectores

---

#rag #ia #basededatos #contenido
