# Mistral Free Tier (1B tokens)

Mistral regala **1.000 millones de tokens gratis** al registrarse, sin necesidad de tarjeta de crédito. Es suficiente para probar flujos de trabajo con IA antes de gastar dinero en APIs de pago.

## Qué modelos incluye

| Modelo | Para qué sirve |
|---|---|
| **Mistral Large 3** | Razonamiento y texto, compite con Claude Opus |
| **Codestral** | Generación de código |
| **Mistral Medium 3.5** | Modelo 128B para tareas pesadas |
| **Pixtral Large** | Texto + análisis de imágenes |
| **Mistral Small 4** | Texto, imágenes y código (rápido y barato) |

Todos con **ventana de contexto de 256K tokens**.

## Cómo conseguirlo

**Paso 1:** Ve a [console.mistral.ai](https://console.mistral.ai) y regístrate. No pide tarjeta.

**Paso 2:** Ve a la sección **API Keys** y copia tu clave.

**Paso 3:** Prueba que funciona:

```bash
curl https://api.mistral.ai/v1/chat/completions \
  -H "Authorization: Bearer TU_CLAVE" \
  -H "Content-Type: application/json" \
  -d '{"model":"mistral-small-latest","messages":[{"role":"user","content":"Hola"}]}'
```

**Paso 4:** En cualquier herramienta que uses (Cursor, Claude Code, Hermes, Aider, etc.), cambia la URL base a `https://api.mistral.ai/v1` y todo funciona igual que con OpenAI.

## Privacidad

Si te importa que no usen tus datos para entrenar: **Ajustes > Data Training > Desactivar**.

## Limitaciones

- El plan gratuito tiene límites de tasa (rate limits)
- No para proyectos en producción, pero sí para **prototipar, aprender y testear** flujos sin gastar dinero
- Mistral puede cerrar este tier gratuito en cualquier momento

Relacionado: [[Ecosistema de modelos]], [[OpenRouter]], [[Modelos]]

# #ia #modelos #gratis #codigo #api
