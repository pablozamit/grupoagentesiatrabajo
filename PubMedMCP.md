# PubMedMCP

[PubMed MCP Server](https://www.npmjs.com/package/pubmed_mcp_server2) es un servidor MCP local para consultar PubMed, PubMed Central e iCite desde un agente. El paquete `pubmed_mcp_server2` usa Node.js y transporte stdio; su documentación publica diez herramientas y licencia MIT.

## Qué permite

- Buscar con MeSH, filtros y paginación; contar resultados antes de afinar una consulta.
- Recuperar resúmenes por PMID, consultar artículos relacionados y convertir PMID, PMCID y DOI.
- Recuperar texto completo **disponible en PMC**, por secciones. No da acceso a todos los textos de revistas de pago.
- Exportar RIS para gestores bibliográficos y consultar recuentos de citas.

## Workflow de revisión y cambio de versión

La [skill de revisión sistemática](https://github.com/masa-med-ai/pubmed-systematic-review) propone diseñar la búsqueda, verificar el recuento, obtener PMIDs, leer resúmenes pequeños y guardar una tabla intermedia antes de exportar. Su aportación útil es comprobar los números contra el resumen: población analizada, desenlace primario, grupo de intervención/control y significación; lo no indicado queda como «no informado».

Hay un desfase que importa: la skill cita `get_full_abstract`, nombre de la versión antigua, mientras el servidor v2 publica `fetch` y `fetch_batch` con JSON. La documentación v2 advierte de cambios de nombres/esquemas. No copiar la skill sin adaptarla a la versión instalada ni asumir que un lote grande llegó completo.

El [hilo de lanzamiento](https://x.com/masa_ai_med/status/2060293415817138626) anuncia un [bundle MCPB](https://github.com/masa-med-ai/pubmed-mcp-bundle) para Claude Desktop. La página del bundle consultada no ofrece detalle suficiente para verificar el contenido del binario; se documenta como distribución enlazada, no como instalación probada.

## Límites

«Más de 50 artículos sin alucinaciones» es promoción del hilo, no garantía medida. Recuperar fuentes reduce invenciones, pero no valida el diseño de una revisión, la extracción de resultados ni un metaanálisis. Un resumen puede omitir datos necesarios: consultar el texto original y dejar explícitos los huecos. No convertir una tabla generada por IA en evidencia clínica sin revisión.

## Recursos

- [Servidor: código y README](https://github.com/masa061580/pubmed_mcp_server2)
- [Paquete y herramientas v2](https://www.npmjs.com/package/pubmed_mcp_server2)
- [Skill de revisión](https://github.com/masa-med-ai/pubmed-systematic-review)

## Relacionado

- [[Sci-Bot]]: búsqueda y lectura de literatura.
- [[OpenResearch]]: workflow de investigación con agentes.
- [[Claude Code]]: cliente/agente de código.

#opensource #ciencia #investigacion #agente
