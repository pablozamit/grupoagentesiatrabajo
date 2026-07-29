# PixelRAG

**PixelRAG** es un sistema open source (Apache 2.0, **7.4k ⭐**) del Berkeley Sky Computing Lab / BAIR / Berkeley NLP que sustituye el parsing HTML por **búsqueda visual sobre screenshots**. En lugar de convertir una web en texto, hace capturas de pantalla y un modelo vision-language lee la respuesta directamente desde los píxeles.

**Web:** [pixelrag.ai](https://pixelrag.ai)  
**Repo:** [github.com/StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG)  
**Paper:** [arxiv.org/abs/2606.28344](https://arxiv.org/abs/2606.28344)

## El problema que resuelve

El scraping tradicional pierde muchísima información al convertir HTML a texto:
- Tablas, gráficos y layouts
- Columnas y botones
- PDFs y páginas mal estructuradas

PixelRAG indexa la página **tal y como la ve una persona**.

## Cómo funciona

1. **Renderiza** webs, PDFs e imágenes en tiles (screenshots) con `pixelshot` (Playwright/CDP)
2. **Embebe** los tiles con **Qwen3-VL-Embedding** (modelo LoRA-fine-tuned en screenshots)
3. **Construye** un índice FAISS (o Qdrant) sobre los vectores visuales
4. **Busca** visualmente sobre píxeles, no sobre texto

## Resultados

- Índice pre-construido de **8.28M artículos de Wikipedia** (~30M screenshots)
- **Supera al mejor RAG basado en texto por un 18,1% en QA**
- El equipo construyó un índice visual de Wikipedia entero como benchmark

## Plugin para Claude Code

El renderer también funciona como plugin de Claude Code — la skill `pixelbrowse`:

```bash
uv tool install pixelrag
claude plugin marketplace add StarTrail-org/PixelRAG
claude plugin install pixelbrowse@pixelrag-plugins
```

Luego Claude no scrapea el DOM: **mira la página**:

```bash
claude -p "screenshot https://news.ycombinator.com and summarize the top stories"
claude -p "screenshot https://arxiv.org/abs/2404.12387 and explain the key findings"
```

Sin MCP server, sin backend: `pixelshot` usa Playwright/CDP en tu máquina local.

## Pipelines

| Comando | Función | Instalación |
|---------|---------|-------------|
| `pixelshot` | Documento → tiles de imagen | `pip install pixelrag` |
| `pixelrag chunk / embed / build-index` | Tiles → vectores → índice FAISS | `pip install pixelrag[embed]` |
| `pixelrag index` | Pipeline completo | `pip install pixelrag[index]` |
| `pixelrag serve` | API de búsqueda FAISS (FastAPI) | `pip install pixelrag[serve]` |

También soporta **Qdrant** como backend de búsqueda vectorial para escalar a millones de documentos con quantización y discos.

## API pública gratuita

Índice pre-construido de 8.28M páginas de Wikipedia accesible sin API key:

```bash
curl -X POST https://api.pixelrag.ai/search \
  -H "Content-Type: application/json" \
  -d '{"queries": [{"text": "What is the capital of France?"}], "n_docs": 5}'
```

Incluso acepta **imágenes como query** (búsqueda visual).

## Por qué importa

PixelRAG cambia el paradigma del web scraping: en lugar de parsear → extraer → limpiar texto, simplemente **renderiza y mira**. Esto es especialmente potente para agentes, que ahora pueden "ver" páginas web como un humano, con todo el contexto visual (tablas, gráficos, layouts) intacto.

## Relacionado

- [[Ojos baratos para agentes]] — Técnica complementaria: usar modelos baratos como "ojos" para agentes
- [[Acceso a internet desde agentes]] — Comparativa de métodos para dar acceso web a agentes
- [[Firecrawl]] — API de web scraping tradicional (parseo de HTML)
- [[Claude Video]] — Skill /watch para que Claude vea videos

# #agente #web #modelos #opensource
