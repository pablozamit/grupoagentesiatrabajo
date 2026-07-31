# TencentDB Agent Memory

**TencentDB Agent Memory** es un hub de memoria open source de Tencent (100% local) que da a cualquier agente de IA memoria a largo plazo con características humanas: convierte conversaciones, documentos y código en activos de memoria reutilizables, gobernados y compartidos entre agentes y frameworks.

- **Repo:** [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) — 9.8k ⭐, MIT
- **Web:** local — panel en `http://localhost:8125`
- **Instalación:** `git clone` + configurar `.env` con LLM + `./start-all.sh` (arranca memory-core + memory-hub + proxy)

## Qué hace

Deja de repetir contexto a tus agentes: si el proyecto ya se explicó, no hay que volver a hacerlo en cada sesión. Cada agente recibe su memoria propia al crearse.

Convierte la experiencia en 4 tipos de activos de memoria:

- **Chat Memory** — conserva preferencias, hechos, decisiones e historial de interacciones
- **Skill** — extrae skills reutilizables de conversaciones y llamadas a herramientas (con versiones, recursos, pasos y reglas de validación)
- **LLM-Wiki** — convierte docs de producto, specs y runbooks en páginas estructuradas con grafo de enlaces
- **CodeGraph** — indexa símbolos, archivos, relaciones de llamada y rutas de impacto del código

## Memoria en capas (L0-L3)

Las conversaciones se destilan en niveles:

| Capa | Qué guarda | Uso principal |
|------|-----------|---------------|
| L0 Conversación | Conversaciones crudas | Verificar redacción exacta y fuentes |
| L1 Átomo | Hechos, preferencias, restricciones | Recuerdo preciso de información accionable |
| L2 Escenario | Bloques de conocimiento por proyecto | Restaurar contexto de trabajo rápido |
| L3 Core / Persona | Perfiles estables a largo plazo | Entrar rápido en el contexto del usuario |

La recuperación es híbrida: normalmente L2/L3 dan bootstrap rápido y, cuando hace falta un dato concreto, BM25 + vector + RRF baja a L1/L0. Resultados limitados por conteo y presupuesto de caracteres para no saturar la ventana de contexto.

## Resultados (benchmark)

- **76% de precisión de persona** (antes 48%) — el agente entiende y aplica la información del usuario tras interacciones largas
- **51,52% más de tasa de éxito** en tareas
- **61,38% menos tokens por sesión**

## Memoria de equipo

Diseñado para equipos de agentes (estilo "one-person company"): el Hub permite crear agentes con roles (Scout, Builder, Reviewer...) y equipar a cada uno con los activos de memoria que necesita. La privacidad es por defecto: cada activo es `private` y compartir es una acción explícita (team / restricted / agent con ACL).

## Cómo se diferencia de un RAG plano

RAG responde "¿qué se puede encontrar?". TencentDB Agent Memory también responde "¿quién puede usarlo, qué versión es válida y qué agente debería recibirlo?" — con ownership, versiones, estados y ACL.

## Instalación rápida

```bash
git clone https://github.com/TencentCloud/TencentDB-Agent-Memory.git
cd TencentDB-Agent-Memory/deploy/global-images
cp .env.example .env   # Rellenar dos juegos de LLM (grupo memoria + grupo proxy)
./start-all.sh         # Imprime una línea para pegar directamente en Claude
```

Soporta actualmente OpenClaw, Hermes y SDK; el resto de frameworks está en roadmap.

Relacionado: [[Memanto]] (memoria local para agentes), [[Hermes Agent]].

## Tags

- #agente — Memoria a largo plazo para agentes de IA
- #basededatos — Hub de memoria con CodeGraph y LLM-Wiki
- #opensource — 100% open source (MIT), sin nube ni costes de API
