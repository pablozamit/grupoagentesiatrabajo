# past.dev

[past.dev](https://past.dev) (también escrito Past AI, pastdev o past dev) es una **API de memoria a largo plazo para agentes de IA**. A diferencia de las memorias locales, es un servicio gestionado: tu agente envía texto junto a su fecha original y, al consultar, recibe evidencia ordenada y fechada para responder.

Se presentó desde la cuenta del producto ([@mehdidjabri](https://x.com/mehdidjabri/status/2110762633494184248), 15 de octubre de 2026) como el «#1 en BEAM, el mayor benchmark público de memoria».

## Qué resuelve

La memoria se mantiene **actualizada cuando los hechos cambian**: guarda el valor actual y el anterior, con fecha y fuente. En lugar de devolver texto que se parece a la pregunta (como un RAG), devuelve qué es verdad ahora, qué reemplazó y de dónde sale.

- **Ingesta retroactiva**: se suben datos antiguos conservando su fecha original.
- **Recuperación por identidad**: cada dato puede nombrar una audiencia y cada consulta una identidad, de modo que cada persona ve solo lo que le corresponde.
- **Evidencia fechada**: cada resultado incluye la fuente y su fecha, para que el modelo pueda citar o abstenerse.
- **MCP**: se conecta a Claude, Cursor, VS Code y otros clientes como servidor MCP remoto.

## Benchmark (BEAM)

Resultados publicados por el propio producto, primeros en cada escala:

| Escala | Precisión |
|---|---|
| 100K tokens | 92,08 % |
| 1M tokens | 90,65 % |
| 10M tokens | 85,03 % |

La tabla comparativa de su web usa cifras publicadas por cada proveedor por separado, no una misma prueba; conviene leerlas con esa cautela.

## Precios

- **Pay as you go**: 0 $/mes; se compran créditos (150.000 créditos = 45 $, o 400.000 = 120 $ al registrarse con email de trabajo). Cada llamada de recuperación cuesta 0,1 crédito.
- **Flex**: 99 $/mes con 400.000 créditos y llamadas de recuperación ilimitadas.
- **Enterprise**: desde 5.000.000 de créditos al mes, con despliegue en tu propia nube.

## Relacionado

- [[agentmemory]]
- [[TencentDB Agent Memory]]
- [[Engram]]
- [[Codebase Memory MCP]]

# #agente #basededatos #contenido
