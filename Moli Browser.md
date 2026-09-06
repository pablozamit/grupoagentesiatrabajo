# Moli Browser

**Moli** (repo: `lexmount/moli`) es un **navegador headless open source para agentes de IA** escrito en **Rust puro** (no es un wrapper de Chromium). Su diseño "structure-first, pixels on demand" combina un runtime de navegador completo con una huella de recursos mínima: **~1/7 de la memoria de Chrome, ~2/3 de la CPU, cold start 4× más rápido**. Apache-2.0/MIT, 1.7k ⭐. De Lexmount ("building the browser for AI agents").

## El truco: layout bajo demanda

La mayoría de tareas de automatización necesitan **estructura de página, no un mundo visual renderizado continuamente**. Moli trata el DOM y el estilo nativos como fuente de verdad y solo calcula layout o paint cuando una operación lo requiere:

| Petición del agente | Qué hace Moli |
|---|---|
| Extraer HTML/Markdown, consultar DOM, correr JS, inspeccionar red/storage | Lee el estado del runtime directamente — **sin layout ni paint** |
| Leer la box de un elemento, hit-test coordenadas, input por coordenadas | **Una** pasada de layout, retiene solo el último árbol congelado |
| Capturar screenshot | Reconstruye desde el DOM/style, renderiza un frame fresco, descarta el estado de paint |
| Poll de screencast | Compara metadata de generación; sin cambios → sin frame |

**Consecuencia**: los costes de layout/paint exigen opt-in explícito (`--layout`, `--resource`). Por defecto usa `LayoutPolicy::Mock` (geometría determinista, sin layout real).

## Capabilities

- **Runtime web completo**: streaming HTML parsing, DOM nativo, V8 JavaScript, modules/timers/microtasks/events, iframes y workers, CSS cascade, Fetch/XHR/WebSocket, cookies, WebCrypto, storage por perfil (localStorage, IndexedDB, OPFS)
- **Outputs optimizados para extracción**: HTML, Markdown, JSON, árboles semánticos de texto, serialización frame-aware
- **Un solo binario para 3 protocolos**: CDP, WebDriver Classic y WebDriver BiDi comparten kernel. Playwright se conecta directo: `chromium.connectOverCDP("http://127.0.0.1:9222")`
- **Capacidades visuales reales bajo demanda**: `--layout` habilita box construction completa, Taffy layout, text layout con Parley, hit-testing, screenshots, screencast por CPU

## Benchmarks

- **Crawl mixto de 192 URLs públicas**: Moli 53.6% de páginas útiles (Chrome 52.6%), 73 MiB RSS vs 773 MiB de Chrome
- **Workload de agente**: CDP ready 34.85ms vs 169.37ms; pico 102 MiB vs 348 MiB; 1 proceso/24 threads vs 11/123
- **Lexbench (1.308 tasks comparables)**: Moli 81.9% success vs Chrome 99.8%, Kitesurf 62.1%, Lightpanda 53.3%, Obscura 44.9% — con **15% del CPU time y 13% de la memoria pico de Chrome**
- 1.612 millones de tests WPT pasados

## Quick start

```bash
# Linux/macOS
curl --proto '=https' --tlsv1.2 -fsSL \
  https://github.com/lexmount/moli/releases/latest/download/moli-installer.sh | sh

# Windows (PowerShell)
powershell -ExecutionPolicy ByPass -c "irm https://github.com/lexmount/moli/releases/latest/download/moli-installer.ps1 | iex"
```

Uso CLI:

```bash
# Extraer como markdown
moli fetch --dump markdown --wait-until done https://example.com

# Árbol semántico compacto para modelos
moli fetch --dump semantic_tree_text --wait-selector body https://example.com

# Screenshots/PDF bajo demanda
moli fetch --layout --dump screenshot https://example.com > page.png

# Servidor de automatización (CDP/WebDriver/BiDi en el mismo endpoint)
moli serve --layout --resource
```

Hay skills instalables para agentes (`skills/` en el repo): `moli-webfetch` para fetch y extracción.

## Limitaciones declaradas

- Sin GUI, sin ventana persistente, sin GPU compositor, sin arquitectura de paint multi-frame retenida
- No persigue paridad pixel-for-pixel con Chrome ni WebGL/media playback fiel
- Los paths de protocolo no soportados devuelven **errores explícitos** — nunca finge que una acción ocurrió

## Recursos

- Repositorio: [github.com/lexmount/moli](https://github.com/lexmount/moli)
- Web: [browser.lexmount.com](https://browser.lexmount.com)
- Skills para agentes: [github.com/lexmount/moli/tree/main/skills](https://github.com/lexmount/moli/tree/main/skills)
- Difusión: [@LexmountAI en X](https://x.com/LexmountAI)

## Relacionado

- Navegación para agentes: [[Camofox Browser]], [[Browser Use]], [[BrowserAct Skills]]
- Scraping/extracción: [[Firecrawl]], [[Apify]]
- Acceso a internet desde agentes: [[Acceso a internet desde agentes]]

# #agente #web #opensource #oportunidades