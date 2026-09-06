# HarnessRouter + UHP

**HarnessRouter** (repo: `HarnessRouter/harnessrouter`) es la **primera interfaz unificada para agent harnesses**, ahora open source (Apache-2.0, self-hosted). Un solo `docker run` en tu propia máquina expone **Codex, Claude Code, Hermes, Pi y DeepSeek Harness detrás de una misma API** (OpenAI Responses-compatible). Tu keys, tus facturas, tus datos: nada sale de la caja excepto las llamadas a tu proveedor de modelos.

Junto al router, definen el **Unified Harness Protocol (UHP)**: un estándar abierto (Apache-2.0) para ejecutar harnesses completos como infraestructura compartida, documentado en [unifiedharnessprotocol.org](https://unifiedharnessprotocol.org).

## El problema que resuelve

Un harness es un runtime de agente completo — un loop que planifica, llama tools, edita archivos y reporta. Codex, Claude Code y Hermes son harnesses. Cada uno ya sabe hacer el trabajo; lo que ninguno comparte es **cómo un producto debería conducir uno**: cómo arrancar una tarea, seguir su progreso, continuar la conversación, cancelarla, obtener los archivos producidos y entender por qué falló.

> Hoy cada producto responde esas preguntas de nuevo, por harness. UHP las responde una vez.

UHP **no es una API de modelos**: las APIs de modelos te dan un turno (mensajes in, tokens out, tools que tienes que correr tú). UHP te da una **tarea**: trabajo in, y un agente corriendo que usa sus propias tools, mantiene su propia sesión y devuelve resultados y archivos. La unidad de intercambio es un **job**, no una completion.

## Instalación (6 pasos)

```bash
docker pull harnessrouter/harnessrouter
docker run -d --name harnessrouter \
  -p 127.0.0.1:3000:3000 \
  -v harnessrouter:/data \
  harnessrouter/harnessrouter
```

1. Espera a que diga `ready on :3000` en los logs (primer arranque ~30s, instala los harnesses)
2. Entra en `http://localhost:3000`, login: `harnessrouter`/`harnessrouter` (¡cambia la contraseña!)
3. **Integrations → Add Integration**: nombre, proveedor y tu API key
4. **Agent harnesses → New task**: elige modelo, escribe, y el turno se streamea en vivo (comandos, archivos, respuesta)

Requiere Docker, ~4GB de disco y una API key de un proveedor. Sin cuenta, sin cloud, sin telemetría. Estado en SQLite + archivos en un solo volumen Docker.

## Qué soporta

- **Harnesses**: Codex, Claude Code, Hermes, Pi (+MCP adapter), DeepSeek Harness, Cline (instalados en primer arranque, cada uno bajo su licencia)
- **API**: OpenAI Responses-compatible (`/v1/responses`), CRUD de harnesses, sesiones, streaming (SSE), cancelación, idempotencia
- **Workspaces reales**: bash, git y filesystem (no sandbox emulado)
- **Console**: la misma del producto hosted (Next.js), thin client sobre la API — todo lo que hace la UI se puede hacer con curl
- **Starter kits**: Slides (deck por conversación), Sheets (una columna que es un agente), Dashboards (pregunta a tu DB), Videos (describe un film) — los kits son productos enteros para lanzar y estudiar

## El protocolo UHP

- **10 capítulos normativos** (versión 2026-08-11): Architecture, Lifecycle, Harnesses, Tasks, Streaming, Sessions, Files, Errors, Security, Schema
- **Conformance suite**: 64 checks ejecutables; pasarlos es lo que significa "conformant"
- **Compatible con OpenAI Responses API**: un servidor conformant DEBE aceptar ese subset; lo que UHP añade es todo lo que un harness necesita (qué harness corre el trabajo, tools/skills, sesión que sobrevive, archivos, cancelación)
- **Sin servicio hosted requerido**: es un contrato HTTP; un servidor conformant puede correr en tu máquina con tus keys

```bash
# Descubrir harnesses
curl -s https://your-uhp-server/v1/harnesses -H "Authorization: Bearer $KEY"

# Correr una tarea con streaming
curl -s -N https://your-uhp-server/v1/responses \
  -H "Authorization: Bearer $KEY" -H "Content-Type: application/json" \
  -d '{"input":"Summarise README.md in three bullets.",
       "model":"claude-sonnet-4.6",
       "metadata":{"harness_id":"chrn_…"},
       "stream":true}'
```

## Por qué importa

Es la capa que faltaba: **"no más harness engineering para tu producto"**. Sandboxes, sesiones, permisos, tools, contexto, artifacts — esa capa entera pasa a ser un servicio self-hosted detrás de una API estándar. Conecta directamente con [[Learn Harness Engineering]] (la teoría) y [[Harness]] (el concepto): esto es la *implementación compartida* de la capa de harness.

## Recursos

- Repositorio: [github.com/HarnessRouter/harnessrouter](https://github.com/HarnessRouter/harnessrouter)
- Protocolo UHP: [unifiedharnessprotocol.org](https://unifiedharnessprotocol.org)
- Starter kits (demos MIT): [github.com/HarnessRouter/starter-kit](https://github.com/HarnessRouter/starter-kit)
- Web: [harnessrouter.ai](https://harnessrouter.ai)

## Relacionado

- Teoría del concepto: [[Harness]], [[Learn Harness Engineering]]
- Los harnesses que unifica: [[Claude Code]], [[Codex]], [[Hermes Agent]]
- Orquestación de agentes: [[Fable Orchestrator]], [[Despliegue de IA en empresa (3 etapas)]]
- Infra self-hosted: [[OpenShip]], [[Dify]], [[AnythingLLM]]

# #agente #opensource #hosting