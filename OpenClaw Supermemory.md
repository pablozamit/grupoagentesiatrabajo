# OpenClaw Supermemory

**OpenClaw Supermemory** ([supermemoryai/openclaw-supermemory](https://github.com/supermemoryai/openclaw-supermemory)) es un **plugin de memoria a largo plazo para agentes OpenClaw**. Recuerda las conversaciones automáticamente, recupera el contexto relevante y construye un perfil persistente del usuario; todo el trabajo de extracción y deduplicación ocurre en la nube de [Supermemory](https://supermemory.ai). Se presentó desde la cuenta [@supermemory](https://x.com/supermemory/status/2023130025654943976) respondiendo a [@levelsio](https://x.com/levelsio/status/2023109374676496519), que se quejaba de que su bot "sigue olvidando cosas".

## Cómo funciona

Una vez instalado, el plugin actúa solo:

- **Auto-recall**: antes de cada turno de la IA consulta Supermemory y le inyecta las memorias relevantes (perfil del usuario y conversaciones pasadas semánticamente parecidas).
- **Auto-capture**: después de cada turno envía la conversación a Supermemory para extraerla y guardarla.
- **Contenedores personalizados**: se pueden definir etiquetas de memoria (`work`, `personal`, `bookmarks`…) y el agente elige el contenedor adecuado según las instrucciones que le des.

## Instalación

```bash
openclaw plugins install @supermemory/openclaw-supermemory
openclaw supermemory setup      # introduce tu API key de app.supermemory.ai
openclaw gateway restart
```

**Requiere el plan Supermemory Pro o superior.** En el modo avanzado (`setup-advanced`) se configuran etiqueta de contenedor, auto-recall, auto-capture, modo de captura y contenedores propios.

## Herramientas y comandos

- Herramientas para el agente: `supermemory-save`, `supermemory-search`, `supermemory-forget`, `supermemory-profile` (los nombres antiguos con guion bajo siguen funcionando, pero están deprecados).
- Comandos de barra: `/remember`, `/recall`, `/supermemory-index` (indexa el proyecto actual explorando el código).
- CLI: `status`, `search`, `profile`, `wipe`.

## Datos y atribución

- **Estrellas**: verificado el 18 oct 2026, **797 ⭐** y 92 forks; 96 commits.
- Configuración por `apiKey`, `baseUrl` (admite instancia propia o local), versión de API, contenedor raíz y frecuencia de inyección del perfil.
- El plugin depende de un servicio de pago; la alternativa abierta y local está en [[Engram]], [[Memanto]], [[agentmemory]] y [[TencentDB Agent Memory]].

## Relacionado

- [[past.dev]] - memoria a largo plazo vía API con evidencia fechada y audiencias por identidad
- [[Engram]] - memoria persistente local (un binario Go + SQLite) vía MCP
- [[Kapso]] - otro plugin para OpenClaw (WhatsApp oficial)

# #agente #basededatos #contenido
