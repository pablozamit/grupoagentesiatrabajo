# Browser Use

[Browser Use](https://browser-use.com) es una librería **open source** (MIT) para automatizar navegadores con agentes de IA. Construida sobre Playwright, permite que un LLM controle un navegador real para navegar, hacer clic, rellenar formularios y extraer datos.

## Cómo funciona

```
Python API → Rust core → Browser harness → Tarea web completada
```

La v0.13 introduce un nuevo agente beta con un núcleo en Rust y un harness de navegador optimizado para modelos frontier. Incluye espacio de acciones reales del navegador/computadora, herramientas persistentes y bucles de recuperación.

## Instalación

```bash
uv add "browser-use[core]"
# o: pip install "browser-use[core]"
```

## Ejemplo básico

```python
from browser_use.beta import Agent, BrowserProfile, ChatBrowserUse
import asyncio

async def main():
    agent = Agent(
        task="Encuentra el número de estrellas del repo browser-use",
        llm=ChatBrowserUse(model='openai/gpt-5.5'),
        browser_profile=BrowserProfile(
            headless=False,
            allowed_domains=["*.github.com"],
        ),
    )
    history = await agent.run()
    print(history.final_result())

asyncio.run(main())
```

## CLI

Navegador persistente desde la terminal:

```bash
browser-use open https://example.com
browser-use state        # Ver elementos clickeables
browser-use click 5      # Click por índice
browser-use type "Hola"  # Escribir texto
browser-use screenshot p.png
browser-use close
```

## Cloud (pago)

Versión cloud con mejor stealth, rotación de proxies, resolución de captchas, 1000+ integraciones (Gmail, Slack, Notion) y sistema de archivos persistente.

### Precios (verificados en browser-use.com/pricing, oct 2026)

- **Pay as you go**: sin suscripción, los créditos no caducan
- **Navegadores**: $0.02/hora
- **Proxy residencial**: $5/GB
- **Agentes de navegador**: coste del modelo + 20%, más tiempo de navegador y tráfico
- En su benchmark público (BU_Bench_v2), tareas con DeepSeek V4.1 Flash salen a ~$0.14-0.26 por tarea

Su fundador (Gregor Zunic) afirma que Browser Use "se ha abaratado 100x este año" y que ya es "literalmente más barato que las APIs de scraping" ([hilo oct 2026](https://x.com/browser_use/status/2108790563181113770)) — afirmación de marketing del autor; los precios verificables son los de arriba.

## Skill para Claude Code

```bash
mkdir -p ~/.claude/skills/browser-use
curl -o ~/.claude/skills/browser-use/SKILL.md \
  https://raw.githubusercontent.com/browser-use/browser-use/main/skills/browser-use/SKILL.md
```

## Recursos

- Web: [browser-use.com](https://browser-use.com)
- Repo: [github.com/browser-use/browser-use](https://github.com/browser-use/browser-use)
- Docs: [docs.browser-use.com](https://docs.browser-use.com)
- Benchmark: [github.com/browser-use/benchmark](https://github.com/browser-use/benchmark)
- **jev-ultrafast**: [github.com/browser-use/jev-ultrafast](https://github.com/browser-use/jev-ultrafast) — mini agente con [[Jev (TypeSafe)]] (espacio de acciones indexado, LLM pequeño solo para escribir): vuelos en 7.1 s por $0.0039; alternativa local con [[GLiNER2.5]] (36× más barato). También vía **opencode browser-use CLI** (demo de [@thdxr](https://x.com/thdxr), 363k views)
- 99.4k estrellas, 318 contribuidores

# #agente #web #recursos
