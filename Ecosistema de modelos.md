# Ecosistema de modelos

Cuatro notas de la enciclopedia que juntas forman un **flujo completo** para elegir, usar y orquestar modelos de IA. Esta nota explica cómo encajan.

## El flujo en 4 pasos

### 1. Elegir el modelo → [[Arena]]

[[Arena]] (antes LMArena / LMSYS Chatbot Arena) es el **leaderboard basado en votos de usuarios reales**. Es el punto de partida natural cuando no sabes qué modelo usar:

- Votación ciega: dos modelos responden, tú eliges cuál lo hace mejor
- Categorías: chat general, visión, webdev, código, búsqueda
- Mueve decisiones en la industria
- Lo consultan usuarios y empresas por igual

### 2. Acceder al modelo → [[OpenRouter]] o [[Ollama]]

Una vez que sabes qué modelo quieres, hay dos caminos:

| Camino | Cuándo | Notas |
|--------|--------|-------|
| **[[OpenRouter]]** | Quieres usar modelos en la nube, sin instalar nada | Una API para OpenAI, Anthropic, Google, Meta, DeepSeek, Mistral…; pagas por uso; tiene modelos gratuitos |
| **[[Ollama]]** | Quieres correr modelos en tu propio PC | Gratis, sin enviar datos a la nube, necesita buena GPU; ideal para privacidad y offline |

Ambos soportan los modelos punteros del mercado.

### 3. Orquestar el modelo desde un agente → [[Kilo Code]]

[[Kilo Code]] es un **agente de código open source** que consume modelos de [[OpenRouter]] (o cualquier otra API):

- Acceso a 500+ modelos desde un solo cliente
- Tiene 5 modos de agente (preguntar, arquitecturar, codificar, depurar, custom)
- Funciona en VS Code, JetBrains, CLI, Slack y Cloud
- **Modelos gratuitos que rotan cada mes** — perfecto para alumnos
- Soporta MCP, así que se conecta con [[Firecrawl]], [[Memanto]] y otras herramientas

Alternativas equivalentes con otro enfoque: [[Google Antigravity]] (multi-agente, solo Windows), [[Google Jules]] (asíncrono en GitHub).

### 4. (Opcional) Infra gestionada → [[Microsoft Foundry]]

Si pasas de prototipo a producción empresarial, [[Microsoft Foundry]] (antes Azure AI Foundry) te da:

- 1.900+ modelos en un solo portal
- Orquestación multi-agente con SDKs
- Tracing, monitorización, RBAC, políticas
- Endpoints Agent2Agent para que tus agentes se descubran entre sí

Tiene un **plan gratuito** para explorar, pero los despliegues se cobran a nivel de Azure.

## El flujo en un ejemplo

> "Quiero un agente que me ayude a escribir código y pueda correr localmente por privacidad"

1. Entro en [[Arena]] y veo que Codestral o DeepSeek-Coder puntúan alto en la arena de código
2. Los descargo con [[Ollama]] en mi PC
3. Conecto [[Kilo Code]] a ese modelo local
4. Programo con la IA sin enviar nada a la nube

> "Quiero una app SaaS con IA en producción"

1. Pruebo varios modelos en [[Arena]] y elijo Claude o GPT-4o para producción
2. Los consumo vía [[OpenRouter]] para tener fallback entre proveedores
3. Orquestro con [[Kilo Code]] durante el desarrollo
4. Despliego la app con tracing y monitorización en [[Microsoft Foundry]]

## Diagrama del ecosistema

```
┌──────────────┐
│   Arena      │  ← eliges el modelo
└──────┬───────┘
       │
       ▼
┌──────────────┐     ┌──────────────┐
│  OpenRouter  │ OR  │    Ollama    │  ← accedes al modelo
└──────┬───────┘     └──────┬───────┘
       │                    │
       └────────┬───────────┘
                │
                ▼
       ┌────────────────┐
       │   Kilo Code    │  ← orquestas con un agente
       └────────┬───────┘
                │
                ▼
       ┌────────────────┐
       │  Microsoft     │  ← (opcional) producción enterprise
       │  Foundry       │
       └────────────────┘
```

## Cuándo NO necesitas todo el flujo

- **Solo quieres probar IA**: ve directo a [[AI Studio]] (gratis, navegador)
- **Solo quieres escribir mejor código**: [[Kilo Code]] con sus modelos gratuitos rotatorios
- **Solo quieres ejecutarlo todo local**: [[Ollama]] + un cliente de chat. Si tu GPU es modesta, [[AirLLM]] te permite correr modelos de hasta 405B en 8GB de VRAM cargando una capa a la vez
- **Solo quieres un asistente 24/7**: [[Hermes Agent]] (ya viene con 300+ modelos por OpenRouter)

# #modelos #contenido
