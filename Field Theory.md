# Field Theory

**Field Theory** es un **CLI open source (MIT)** que descarga y sincroniza **todos tus bookmarks de X/Twitter a local**, para que tú y tus agentes los consulten sin depender de la API de X. Autor: [Andrew Farah](https://x.com/andrewfarah) (GitHub `afar1`). [fieldtheory.dev/cli](https://www.fieldtheory.dev/cli) — binario `ft`.

## Qué hace

- **Sincroniza sin API**: `ft sync` extrae la sesión de X de tu navegador (Chrome) y baja los bookmarks a `~/.fieldtheory/bookmarks/`. El autor señala que la API de X solo permite recuperar 99 bookmarks, así que el CLI evita la API por defecto (aunque ofrece `ft sync --api` vía OAuth 2.0 como alternativa multiplataforma).
- **Búsqueda real**: indexa en **SQLite FTS5** con ranking **BM25** (`ft search`, `ft list`, `ft stats`, `ft domains`).
- **Clasificación**: `ft classify` categoriza con LLM (Claude/Codex) o `ft classify --regex` (regex rápida).
- **Dashboards**: `ft viz` muestra un panel de terminal con categorías y sparklines.
- **Datos vivos**: `--gaps` rellena tweets citados, expande artículos truncados y baja media; `--rebuild` re-rastrea todo; `--continue` reanuda una sincronización interrumpida; `--folders` replica tus carpetas de X.
- **Listo para agentes**: exporta a markdown/wiki y `ft skill install` registra la skill `/fieldtheory` para Claude Code, Codex o cualquier agente con shell.

## Caveats

- Es un proyecto de un solo autor, con el que se sincronizó una biblioteca de **6.577 bookmarks desde 2008**.
- La extracción automática de cookies de Chrome es **macOS-only**; en Windows (Chrome 130+ cifra su base de cookies a nivel de SO) hay que pasar `--csrf-token` y `--cookie-header` manualmente, o usar OAuth. En Linux solo OAuth/manual.
- Los tokens se usan solo para llamar a la API de X en local; el `ct0` rota y hay que refrescarlo si aparece un 403.

## Relacionado

- [[Readwise CLI]] — el mismo patrón (tu biblioteca personal en la terminal) para otra fuente
- [[xurl]] — CLI oficial de X con OAuth
- [[Claude Code]] · [[Codex]] — agentes que consumen el archivo local
- [[Agent loops (mvanhorn)]] — usar el CLI dentro de un cron + LLM

# #agente #productividad #opensource
