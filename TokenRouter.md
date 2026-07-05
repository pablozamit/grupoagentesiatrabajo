# TokenRouter

[TokenRouter](https://www.tokenrouter.com/) es una **API unificada de modelos de IA** similar a OpenRouter. A veces ofrece modelos punteros de forma totalmente gratuita, sin necesidad de añadir saldo.

## Qué es

- API que unifica múltiples proveedores de modelos (OpenAI, Anthropic, Google, etc.)
- Sin compromiso de pago: puedes probar modelos gratuitos sin añadir tarjeta
- Los modelos gratuitos van rotando; si ves uno útil, úsalo mientras esté disponible

## Cómo configurarlo en tu agente

Para usar TokenRouter desde cualquier agente (Claude Code, Kilo Code, Cursor, etc.):

1. Consigue tu API key en [tokenrouter.com](https://www.tokenrouter.com/)
2. Configura el agente con estos datos:

| Parámetro | Valor |
|-----------|-------|
| **Base URL** | `https://api.tokenrouter.com/v1` |
| **API Key** | Tu clave de TokenRouter |
| **Modelo** | El que elijas en la web (ej: `gpt-4o`, `claude-sonnet-4`, etc.) |

### Ejemplo para agentes CLI

La mayoría de agentes tienen una variable de entorno para la base URL:

```
OPENAI_BASE_URL=https://api.tokenrouter.com/v1
OPENAI_API_KEY=tr-...
```

O desde la interfaz del agente, busca "Custom API endpoint" o "Base URL" y pega `https://api.tokenrouter.com/v1`.

> **Nota**: los modelos gratuitos pueden desaparecer sin aviso. Si un modelo deja de funcionar, revisa la web para ver qué hay disponible.

# #modelos #agente
