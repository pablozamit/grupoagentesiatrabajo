# Camofox Browser

**Camofox** (repo: `jo-inc/camofox-browser`) es un **servidor de navegador anti-detección para agentes de IA**, construido sobre **Camoufox** — un fork de Firefox con **spoofing de huella digital (fingerprint) a nivel de C++**. 9.2k ⭐, MIT, por el equipo de **jo** (agente personal que corre mitad en tu Mac, mitad en la nube).

El problema que resuelve: los agentes necesitan navegar la web real, pero **Playwright es bloqueado, Chrome headless es detectado y los plugins stealth se convierten en la huella**. Camoufox parchea Firefox en la implementación C++ — `navigator.hardwareConcurrency`, renderers WebGL, AudioContext, geometría de pantalla, WebRTC — todo spoofed **antes** de que JavaScript lo vea. Sin shims, sin wrappers, sin tells.

## Qué ofrece (REST API pensada para agentes)

- **C++ Anti-Detection** — esquiva Google, Cloudflare y la mayoría de detección de bots
- **Element Refs** — identificadores estables (`e1`, `e2`, `e3`) para interactuar de forma fiable
- **Token-Efficient** — snapshots de accesibilidad ~90% más pequeños que HTML crudo
- **Corre en cualquier cosa** — lanzamiento lazy + shutdown idle: ~40MB en reposo (Raspberry Pi, VPS de $5)
- **Session Isolation** — cookies/storage separadas por usuario
- **Cookie Import** — inyecta archivos de cookies en formato Netscape (login en LinkedIn, Amazon, etc. sin registrarse)
- **Proxy + GeoIP** — tráfico por proxies residenciales con locale/timezone/geolocalización automática consistente con la IP de salida
- **YouTube Transcripts** — captions de cualquier video vía yt-dlp, sin API key
- **Search Macros** — `@google_search`, `@youtube_search`, `@amazon_search`, `@reddit_subreddit` y 10 más
- **VNC Interactive Login** — loguearte visualmente vía noVNC y exportar el estado para reuso del agente
- **Session Tracing** — trace de Playwright por sesión (screenshots + DOM + network) para debug
- **DOM Image Extraction** — lista `<img>` src/alt, opcional inline data URLs

## Instalación

```bash
# Standalone
npx @askjo/camofox-browser          # o clonar + npm start (descarga Camoufox ~300MB)
# -> http://localhost:9377

# Como plugin de OpenClaw
openclaw plugins install @askjo/camofox-browser
# Tools: camofox_create_tab | camofox_snapshot | camofox_click | camofox_type | camofox_navigate | camofox_scroll | camofox_screenshot | camofox_import_cookies...
```

Soporta Docker (`make up`), Fly.io y Railway. El contenedor incluye yt-dlp.

## Uso básico (API)

```bash
# Crear tab
curl -X POST http://localhost:9377/tabs -H 'Content-Type: application/json' \
  -d '{"userId":"agent1","sessionKey":"task1","url":"https://example.com"}'

# Snapshot con refs de elementos
curl "http://localhost:9377/tabs/TAB_ID/snapshot?userId=agent1"
# -> { "snapshot": "[button e1] Submit  [link e2] Learn more" }

# Clic por ref
curl -X POST http://localhost:9377/tabs/TAB_ID/click \
  -H 'Content-Type: application/json' -d '{"userId":"agent1","ref":"e1"}'

# Navegar con macro
curl -X POST http://localhost:9377/tabs/TAB_ID/navigate \
  -H 'Content-Type: application/json' \
  -d '{"userId":"agent1","macro":"@google_search","query":"best coffee beans"}'
```

## Seguridad

- Cero credenciales embebidas; API key por env (`CAMOFOX_API_KEY`)
- Cookie import **deshabilitado por defecto** (403 si no hay key), directorio sandboxed con protección de path traversal
- `CAMOFOX_ACCESS_KEY` para bearer auth global si lo expones más allá de localhost
- Telemetría anónima de crashes (opt-out), endpoint verificable

## Recursos

- Repositorio: [github.com/jo-inc/camofox-browser](https://github.com/jo-inc/camofox-browser)
- Engine: [Camoufox](https://github.com/daijro/camoufox)
- Herramienta anfitriona: [jo](https://github.com/jo-inc)

## Relacionado

- Navegación anti-detección: [[BrowserAct Skills]], [[Browser Use]]
- Scraping para agentes: [[Firecrawl]], [[Apify]], [[Agent-Reach]]
- Acceso a internet desde agentes: [[Acceso a internet desde agentes]]

# #agente #web #oportunidades #opensource