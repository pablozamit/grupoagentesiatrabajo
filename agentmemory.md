# agentmemory

[agentmemory](https://github.com/rohitg00/agentmemory) añade memoria persistente a agentes de código mediante hooks, MCP y API. El repositorio incluye integración nativa con Hermes y adaptadores para otros agentes.

## Recuperación y presupuesto

Combina búsqueda por palabras (BM25), vectores y grafo con Reciprocal Rank Fusion, que fusiona posiciones de varias listas. El modo sin claves no activa vectores: BM25 funciona y la búsqueda inteligente puede usar grafo si ya hay datos. Embeddings locales son una opción aparte.

La recuperación inyecta una selección bajo presupuesto de tokens en vez de todo el archivo histórico. La documentación describe decaimiento temporal, refuerzo por uso y tratamiento de versiones/supersesión. «Memoria infinita» no es exacto: almacenamiento, presupuesto, cobertura de captura y recuperación siguen limitando qué recuerda el agente.

## Hermes

La [integración](https://github.com/rohitg00/agentmemory/tree/main/integrations/hermes) proporciona un memory provider con prefetch, captura por turno, cierre de sesión, precompresión y mirroring de MEMORY.md. Validar proveedor y salud después de configurar. No confundir añadir herramientas MCP con sustituir correctamente el proveedor de memoria.

El [hilo de Rohit](https://x.com/ghumare64/status/2055672070369837324) cita límites concretos de MEMORY/USER y consolidación de una versión de Hermes. No tratarlos como límite actual fijo de todas las instalaciones; revisar versión y configuración.

## Benchmarks y cautelas

El README publica resultados propios en LongMemEval-S y un corpus interno de 15 sesiones; enlaza scripts e informes para reproducirlos. Ahorros de ~92% a 240 observaciones son comparación con pegar contexto completo, no garantía en cualquier workflow. La tabla de competidores mezcla datasets y resultados autodeclarados; el propio README advierte que no es un head-to-head equivalente. «200 veces más llamadas» no prueba ausencia de pérdida de información.

Memoria persistente puede contener datos sensibles. Revisar qué capturan los hooks, quién accede al servidor, proveedor de embeddings/LLM y borrado/retención antes de conectar historiales. No instalar automáticamente a partir de instrucciones del repositorio.

## Recursos

- [Código, README y enlaces a evaluaciones](https://github.com/rohitg00/agentmemory)
- [Adaptador Hermes](https://github.com/rohitg00/agentmemory/tree/main/integrations/hermes)
- [Hilo](https://x.com/ghumare64/status/2055672070369837324), difusión

## Relacionado

- [[Hermes Agent]], [[Codebase Memory MCP]], [[TencentDB Agent Memory]], [[Engram]]

#opensource #contenido #agente
