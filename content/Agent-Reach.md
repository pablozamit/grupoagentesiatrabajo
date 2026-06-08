# Agent-Reach

[Agent-Reach](https://github.com/Panniantong/Agent-Reach) es un **instalador y scaffolding open source** que da a tu agente de IA "ojos para ver toda internet": un solo CLI, sin pagar APIs.

## Qué es

- Un **instalador de herramientas** para agentes de IA (Claude Code, OpenClaw, Cursor, Windsurf, Codex…)
- Licencia MIT
- Reúne y configura las mejores herramientas open source de cada plataforma
- No es un framework: instala y conecta **wrappers ligeros** (twitter-cli, rdt-cli, xhs-cli, yt-dlp, gh CLI, Jina Reader…) que el agente usa directamente
- Tu agente puede, sin pagar API keys, leer y buscar en Twitter, Reddit, YouTube, GitHub, Bilibili, XiaoHongShu, WeChat, RSS y más

## El problema que resuelve

Por defecto, un agente de IA no puede hacer mucho en internet:

| Petición | Qué pasa sin Agent-Reach |
|----------|--------------------------|
| "Mira este tutorial de YouTube" | No puede obtener los subtítulos |
| "Busca en Twitter qué opinan de X" | La API de Twitter es de pago |
| "Lee este hilo de Reddit" | El servidor es bloqueado (403) |
| "Mira este post de XiaoHongShu" | Necesita login |
| "Mira este vídeo de Bilibili" | IP bloqueada desde fuera |
| "Lee esta página web" | Devuelve HTML sucio |
| "Lee este repo de GitHub" | Funciona, pero configurar auth es tedioso |

Agent-Reach **automatiza toda esa configuración** para que tu agente pueda hacerlo directamente.

## Plataformas soportadas

| Plataforma | Listo tras instalar | Requiere config adicional |
|------------|--------------------|--------------------------|
| **Web (cualquier URL)** | ✅ | No |
| **YouTube** | ✅ Subtítulos + búsqueda | No |
| **RSS / Atom** | ✅ | No |
| **Búsqueda web** | ✅ (vía Exa) | No |
| **GitHub** | ✅ Lectura pública + búsqueda | Para privado/Issue/PR/Fork, decir "configura GitHub" |
| **Twitter/X** | ✅ Leer tweets sueltos | Para buscar, timeline y publicar, decir "configura Twitter" |
| **Bilibili** | ✅ Subtítulos + búsqueda local | Para servidores remotos, decir "configura proxy" |
| **Reddit** | — | Requiere login (`rdt login`) |
| **XiaoHongShu** | — | Requiere login (decir "configura XiaoHongShu") |
| **Douyin** | — | Requiere config |
| **LinkedIn** | Lectura pública | Para perfil/empresa/empleos, decir "configura LinkedIn" |
| **WeChat (公众号)** | Búsqueda + lectura | No |
| **Weibo** | ✅ Tendencias + búsqueda | No |
| **V2EX** | ✅ Lectura | No |
| **Xueqiu** | Cotizaciones + búsqueda | Decir "configura Xueqiu" |
| **Xiaoyuzhou (podcast)** | — | Decir "configura Xiaoyuzhou" |

## Instalación

Una sola línea, en lenguaje natural, se la dices a tu agente:

```
帮我安装 Agent Reach：https://raw.githubusercontent.com/Panniantong/agent-reach/main/docs/install.md
```

El agente se autoinstala y configura. Para actualizar:

```
帮我更新 Agent Reach：https://raw.githubusercontent.com/Panniantong/agent-reach/main/docs/update.md
```

Hay tres modos de instalación:

| Modo | Comando | Uso |
|------|---------|-----|
| **Auto** (por defecto) | `agent-reach install --env=auto` | PC personal / dev |
| **Seguro** | `agent-reach install --env=auto --safe` | Servidor / compartido |
| **Dry-run** | `agent-reach install --env=auto --dry-run` | Solo ver qué haría |

## Compatibilidad con agentes

Funciona con cualquier agente que pueda ejecutar comandos en shell:

- **Claude Code**
- **OpenClaw** (cuidado: hay que habilitar perfil `coding`)
- **Cursor**
- **Windsurf**
- **Codex**
- **Cline**, **Continue**, etc.

Para OpenClaw es necesario activar primero el perfil de ejecución:

```bash
openclaw config set tools.profile "coding"
```

## Herramientas que instala (por dentro)

| Plataforma | Herramienta que se instala |
|------------|---------------------------|
| Web | Jina Reader |
| Twitter/X | twitter-cli (Cookie auth) |
| Reddit | rdt-cli (Cookie auth) |
| YouTube | yt-dlp |
| Bilibili | yt-dlp + bili-cli |
| GitHub | gh CLI oficial |
| XiaoHongShu | xhs-cli |
| Douyin | douyin-mcp-server |
| LinkedIn | linkedin-scraper-mcp |
| Búsqueda web | Exa vía mcporter (sin API Key) |
| RSS | feedparser |
| WeChat (公众号) | Exa + Camoufox |

**Cada canal es un archivo independiente y reemplazable**. Si no te convence una elección, puedes sustituirla por otra herramienta apuntando al mismo canal.

## Diagnóstico y seguridad

- `agent-reach doctor` → comprueba qué canales funcionan y cuáles no
- **Cookies y tokens** se guardan **solo en local** (`~/.agent-reach/config.yaml`, permisos 600)
- **No se sube nada** a servidores remotos
- Todo el código es **open source y auditable**
- ⚠️ Riesgo de baneo: usa **cuentas secundarias** para Twitter y XiaoHongShu, no tu cuenta principal

## Casos de uso

- Investigación de mercado leyendo opiniones reales en redes
- Monitorización de menciones de una marca o producto
- Análisis de tendencias en YouTube/Bilibili
- Recolección de feedback en Reddit o V2EX
- Resúmenes de podcasts
- Lectura de newsletters / feeds RSS especializados
- Estudios de competidores leyendo sus GitHub públicos
- Automatización de contenido: tu agente lee fuentes y resume

## Recursos

- Repositorio: [github.com/Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach)
- Instalación: [docs/install.md](https://raw.githubusercontent.com/Panniantong/agent-reach/main/docs/install.md)
- Licencia: MIT

# #agente #web #contenido
