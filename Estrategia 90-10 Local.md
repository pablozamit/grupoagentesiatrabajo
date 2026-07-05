# Estrategia 90/10: Modelos locales + APIs

No necesitas una GPU nueva para aprovechar los modelos locales. La estrategia 90/10 consiste en usar modelos locales para el 90% del trabajo diario y reservar los modelos frontera (GPT, Claude) solo para el 10% que realmente lo requiere.

## En qué consiste

La mayoría de la gente paga 20-200 €/mes por suscripciones a ChatGPT, Claude, etc., pero solo usa la capacidad máxima de esos modelos un puñado de veces al día. El resto del tiempo, un modelo local más pequeño rinde perfectamente.

La idea es simple:

- **90% del trabajo** → modelo local (Qwen, Llama, Mistral, etc.) corriendo en tu máquina
- **10% del trabajo** → tareas complejas que sí requieren un modelo frontera (refactorizaciones grandes, análisis profundos, creatividad compleja)

El ahorro es evidente: una GPU usada se paga sola en pocos meses frente a las suscripciones mensuales.

## Hardware mínimo

| Configuración | Coste aprox | Modelos que corre |
|---|---|---|
| Solo CPU (8+ GB RAM) | 0 € (lo que tengas) | Modelos 1-3B cuantizados, muy lentos pero funcionales |
| + GPU básica (6-8 GB VRAM) | 50-150 € usada | Modelos 7-8B (Qwen 2.5 7B, Llama 3.1 8B, Mistral 7B) |
| RTX 3060 12 GB | 200-250 € usada | Modelos 7-14B con buena velocidad |
| RTX 3090 24 GB | 700-1000 € usada | Modelos 27B densos (Qwen 3.6 27B) y 70B cuantizados |
| 2× RTX 3090 | 1400-2000 € | Modelos 70B+ a velocidad usable |

Si tienes un PC viejo pero con una fuente de alimentación decente, una RTX 3060 12 GB usada es el punto dulce: calidad/precio imbatible.

## Software para correr modelos

| Herramienta | Qué hace | Facilidad |
|---|---|---|
| **Ollama** | El más sencillo. `ollama run qwen2.5:7b` y ya. CLI + API REST | Muy fácil |
| **LM Studio** | Interfaz gráfica. Descargas modelos y chateas como en ChatGPT | Muy fácil |
| **Open WebUI** | Interfaz web tipo ChatGPT conectada a Ollama | Fácil |
| **llama.cpp** | Motor base que usan casi todos. Más técnico pero más control | Media |
| **KoboldCPP** | Enfocado a narrativa/rol, pero funciona para todo | Media |
| **Text Generation WebUI** | La navaja suiza. Muchas opciones, algo complejo | Media-alta |

Para empezar: instala **Ollama**, descarga un modelo con `ollama pull qwen2.5:7b`, y conecta Open WebUI para tener algo parecido a ChatGPT en tu navegador local.

## Modelos recomendados por tamaño de VRAM

### 6-8 GB VRAM
- **Qwen 2.5 7B** (7B parámetros, excelente para código y razonamiento)
- **Llama 3.1 8B** (el estándar, versátil)
- **Mistral 7B** (rápido, bueno para textos)
- **Phi-3 Medium 14B** (cuantizado 4-bit, cabe justo)

### 12 GB VRAM
- **Qwen 2.5 14B** (notablemente mejor que 7B)
- **Llama 3 8B** con contexto largo
- **DeepSeek Coder V2 Lite** (especializado en código)

### 24 GB VRAM
- **Qwen 3.6 27B** (denso, sin cuantizar - el recomendado del hilo)
- **Llama 3 70B** (cuantizado 4-bit, cabe justo)
- **DeepSeek V2 Lite 16B** (con contexto muy largo)
- **Command R+ 35B** (bueno para instrucciones complejas)

## Cómo enrutar entre local y API

Para que la estrategia 90/10 sea práctica necesitas un sistema que decida automáticamente qué modelo usar según la tarea:

1. **Manual**: Usas Ollama para el día a día y abres ChatGPT/Claude cuando toca
2. **OpenRouter con reglas**: Configuras el proveedor para que use modelos baratos por defecto y solo suba a premium cuando detecte tareas complejas
3. **Cliente con enrutamiento**: Algunos clientes (Open WebUI, Continue.dev) permiten configurar dos proveedores y elegir manualmente
4. **Agente con decisión propia**: Un agente como Hermes Agent puede elegir el modelo según la tarea

### Flujo típico con Continue.dev (VS Code)

```json
{
  "models": [
    {
      "title": "Local (rápido)",
      "provider": "ollama",
      "model": "qwen2.5:7b",
      "default": true
    },
    {
      "title": "Frontera (cuando toque)",
      "provider": "openai",
      "model": "gpt-4o",
      "apiKey": "sk-..."
    }
  ]
}
```

Así trabajas con el modelo local por defecto y cambias al de pago solo cuando una tarea lo requiere.

## Casos de uso reales

La experiencia de otros usuarios muestra patrones:

| Tarea | Modelo local | Modelo frontera |
|---|---|---|
| Depuración de código | ✅ Qwen 7B basta | Solo si es muy complejo |
| Explicar conceptos | ✅ Cualquier modelo | No hace falta |
| Escribir borradores | ✅ Qwen/Llama 8B | Solo si es un documento crítico |
| Refactorizar código grande | ❌ Se pierde | Claude/GPT |
| Investigación profunda | ❌ Alucina más | Necesita el mejor modelo |
| Análisis de imágenes/PDF | Depende (modelo con visión) | Mejor con frontera |
| Tareas repetitivas (formatos, reemplazos) | ✅ Perfecto | Desperdicio |

## Limitaciones a tener en cuenta

- **Calidad**: Un modelo 7B no es tan bueno como GPT-4o o Claude Opus. Para trabajo creativo o análisis profundo, notarás la diferencia
- **Calor y ruido**: Una 3090 en verano calienta la habitación. No es broma
- **Electricidad**: Una 3090 consume ~350W en carga. A 8h/día son unos 30-50 €/mes de luz
- **Contexto**: Los modelos locales tienen contexto más limitado que los de pago
- **Visión**: Los modelos locales con visión (LMM) son peores que GPT-4o o Gemini

Si tu factura de OpenAI es baja (menos de 50 €/mes), probablemente no compense montar un PC local. La estrategia 90/10 tiene sentido cuando gastas 100+ €/mes en APIs.

## Alternativa sin GPU

Si no tienes GPU pero quieres probar:

- Usa **Groq** (gratuito, corre modelos en sus GPUs, velocidad increíble)
- Usa **OpenRouter** con modelos baratos (0,10-0,50 €/M tokens en vez de 10-15 €)
- Usa **Google AI Studio** (gratuito, Gemini 2.5 Flash es muy potente)
- **Mistral Free Tier** (1B tokens gratis, sin tarjeta de crédito)

No es local pero es el mismo principio: pagar solo cuando toca.

## Enlaces relacionados

- [[Ollama]] para gestión de modelos locales
- [[OpenRouter]] para enrutar entre modelos baratos y caros
- [[Mistral Free Tier]] — 1B tokens gratis sin tarjeta
- [[MLC Chat]] — modelos locales en Android
- [[NanoBot]] — modelo tiny para CPU
- [[Ecosistema de modelos]] — comparativa general

---

#modelos #agente #ia #opensource #contenido
