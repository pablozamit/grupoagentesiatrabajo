# World Monitor

[World Monitor](https://www.worldmonitor.app/) es un **dashboard de inteligencia global en tiempo real** open source (AGPL-3.0, ~65k ⭐, 116+ contribuidores) creado por **Elie Habib** (ex-cofundador y CEO de Anghami, NASDAQ). Abre un **globo 3D en vivo** con 500+ fuentes de noticias entrando en 15 categorías, todo resumido por IA. La comunidad lo apodó "una war room tipo Palantir gratis": lo que Palantir vende a gobiernos por millones al año, aquí está en código abierto y en tu navegador.

## Qué hace

- **500+ feeds de noticias curados** en 15 categorías (geopolítica, finanzas, energía, clima, aviación, ciberseguridad, militar, infraestructura...), sintetizados por IA en briefs estructurados
- **Dual map engine** — globo 3D (globe.gl + Three.js) y mapa plano WebGL (deck.gl + MapLibre GL) con 56 tipos de capas
- **Cross-stream correlation** — convergencia de señales militares, económicas, de desastres y escaladas
- **Country Instability Index (CII)** — puntuación de estrés server-authoritative para 31 países Tier-1
- **Finance radar** — 92 bolsas, materias primas, cripto y un compuesto de mercado de 7 señales
- **Infraestructura crítica** — cables submarinos, estaciones de aterrizaje, puertos, oleoductos, chokepoints, cortes de internet, anomalías BGP, corredores comerciales
- **Vuelos en vivo** (dato ADS-B de Wingbits), satélites, terremotos y avisos meteorológicos

## IA local, sin API keys

El dashboard funciona sin configuración y la síntesis de IA puede correr **100% local con Ollama** (sin API key), o vía Groq/OpenRouter, o incluso en el navegador con Transformers.js. No necesitas cuenta para usar el dashboard.

## Para agentes

World Monitor incluye un **servidor MCP** con un registry de herramientas en vivo: Claude, GPT o cualquier agente compatible con MCP puede consultar risk scores, estado de chokepoints, conflictos, mercados y briefs — con proyección JMESPath para que el agente traiga solo lo que necesita. También hay API REST y SDKs (Python, Ruby, Go, npm, PyPI).

## Variantes de un solo codebase

Una misma base de código genera 6 sitios distintos: world, tech, finance, commodity, happy y energy. Auto-hospedable en Vercel, Docker o estático, más apps nativas de escritorio (Tauri 2) para Windows, macOS y Linux.

## Quick start

```bash
git clone https://github.com/koala73/worldmonitor.git
cd worldmonitor
npm install
npm run dev
```

Sin variables de entorno para el dashboard principal.

## Honestidad de licencia

- **AGPL-3.0** para uso no comercial (personal, research, educativo, self-hosted con atribución)
- **Licencia comercial** requerida para uso comercial/SaaS/rebranding
- El autor aclara: "World Monitor no es un Palantir open source" — Palantir opera sobre los datos internos de una institución; World Monitor parte del otro extremo: ensambla, normaliza y correlaciona **datos públicos** y publica esa capa de inteligencia como dashboard libre

## Recursos

- Repositorio: [github.com/koala73/worldmonitor](https://github.com/koala73/worldmonitor)
- Web: [worldmonitor.app](https://www.worldmonitor.app/)
- Docs: [worldmonitor.app/docs](https://www.worldmonitor.app/docs)
- Autor: [@eliehabib](https://x.com/eliehabib)

## Relacionado

- Visualización 3D de datos en la web: [[Three.js]], [[WebGPU]], [[Human Cell Visualizer]]
- OSINT y monitoreo de datos: [[last30days]], [[Agent-Reach]]
- Agentes que consultan datos en vivo: [[Firecrawl]], [[Apify]]

# #3d #investigacion #agente #opensource #ciencia