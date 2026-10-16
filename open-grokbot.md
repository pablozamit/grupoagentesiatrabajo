# open-grokbot

**open-grokbot** es una **reconstrucción open source de la app de escritorio Grok Bot** hecha por ingeniería inversa. El [repositorio anónimo](https://anonymous.4open.science/r/open-grokbot) (alojado en Anonymous GitHub, que sirve un espejo de solo lectura con nombres y afiliaciones censurados) reconstruye **Grok Bot 0.66.0 a partir de su instalación en `/Applications/Grok Bot.app`**.

## Qué contiene

- **Port completo a TypeScript**: los **540 archivos JavaScript ejecutables** de la app tienen su fuente TypeScript comprobada por compilador, más el adaptador de dominio RPC extraído (`src/ported/domain/domain-adapter.cts`).
- **Runtime Electron 42.1.0**, verificado desde el framework instalado.
- Separación por límites: `src/main-core` (arranque, geometría/restauración de ventana), `src/renderer` (orquestación de arranque, identidad de cuenta, claves de persistencia, ajustes de voz), `src/reconstructed-*` (servicios de settings/accounts, chunks de renderer, workers con cookies de Chrome y OnePassword) y `src/ported`.
- **Método**: reconstruido con la skill de ingeniería inversa [[REA (Reverse Engineer Anything)]] y los análisis del MCP de REA 6.3.0. La decompilación usa el descompilador **Wakaru 1.13.0** dentro de una imagen Docker (Linux amd64).

## Atribución y caveats

- La difusión viene del tuit de [@jasonkneen](https://x.com/jasonkneen/status/2109806669396103600) ("Someone reversed engineered Grok Bot and open-sourced it"), que rastrea repos nuevos en Anonymous Git.
- Los **source maps originales no existían**: el README advierte explícitamente que **no es el proyecto TypeScript upstream original**, sino un port con contratos inferidos y tipos dinámicos donde no se pudieron recuperar los originales.
- **open-grokbot no es** [[OpenMausBot]] ni la app oficial: en el propio hilo se aclara que son proyectos distintos.
- Existe otro esfuerzo paralelo, [b-nnett/grok-bot-0.18-reconstructed](https://github.com/b-nnett/grok-bot-0.18-reconstructed), reconstrucción de la 0.18.0 para macOS.

## Recursos

- Repositorio: https://anonymous.4open.science/r/open-grokbot (enlace anónimo, caduca)

## Relacionado

- [[OpenMausBot]] — otro "Grok Bot open source", proyecto distinto
- [[REA (Reverse Engineer Anything)]] — skill/MCP usado en la reconstrucción
- [[grokbot.dev use-cases]] — patrones de uso del Grok Bot oficial

# #agente #opensource #contenido
