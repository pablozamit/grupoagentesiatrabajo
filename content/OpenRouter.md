# OpenRouter

[OpenRouter](https://openrouter.ai/) es una plataforma unificada que permite acceder a múltiples modelos de lenguaje (LLMs) de diferentes proveedores a través de una sola API.

## Qué es OpenRouter

- **Interfaz unificada**: Un solo punto de acceso a decenas de modelos (OpenAI, Anthropic, Google, Meta, DeepSeek, etc.)
- **Comparación de precios**: Ve precios y selecciona el mejor modelo para tu presupuesto
- **Multi-provider**: Si un modelo falla, puedes cambiar a otro automáticamente
- **Sin suscripciones**: Pagas por lo que usas

##Cómo registrarse

1. Ve a [openrouter.ai](https://openrouter.ai/)
2. Haz clic en **Sign Up**
3. Elige método:
   - **Google** (recomendado)
   - **GitHub**
   - **MetaMask**
4. Crea tu cuenta y verifica el email

## Cómo conseguir API gratis

### Opción 1: Modelos gratuitos
- Modelos con label "free": GPT-4o mini, Claude 3 Haiku, Llama 3, etc.
- Sin crédito requerido

### Opción 2: Comprar créditos
- Ve a **Credit System** en tu dashboard
- Mín: $5-10

### Opción 3: Plan gratuito de proveedores
- Algunos modelos tienen tier gratuito propio
- Configura tu propia API key de ese proveedor

## Obtener tu API Key

1. Inicia sesión en [openrouter.ai](https://openrouter.ai/)
2. Ve a **Settings** → **API Keys**
3. Clic en **Generate New Key**
4. Copia y guarda tu clave (solo se muestra una vez)

## Usar la API

```bash
curl -X POST https://openrouter.ai/api/v1/chat/completions \
  -H "Authorization: Bearer TU_API_KEY" \
  -H "Content-Type: application/json" \
  -H "HTTP-Referer: TU_SITIO.com" \
  -d '{
    "model": "openai/gpt-4o-mini",
    "messages": [{"role": "user", "content": "Hola"}]
  }'
```

## Modelos gratuitos populares

| Modelo | Proveedor | Contexto |
|--------|----------|----------|
| gpt-4o-mini | OpenAI | 128k |
| claude-3-haiku | Anthropic | 200k |
| llama-3.1-8b-instruct | Meta | 128k |
| gemini-flash-1.5 | Google | 1M tokens |

## Notas

- Revisa los ["free" models](https://openrouter.ai/models?free=true) regularmente
- Los créditos gratuitos pueden tener límites diarios
- Los modelos de pago tienen mejor calidad

# #modelos