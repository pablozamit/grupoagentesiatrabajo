# Model Studio (Alibaba Cloud)

Consola de Alibaba Cloud para usar los modelos **Qwen** gratis mediante free trial, con API compatible con OpenAI.

## Consola

[https://modelstudio.console.alibabacloud.com/](https://modelstudio.console.alibabacloud.com/)

## Crear API Key

1. Región **Singapore** (`ap-southeast-1`) — la única con free trial
2. Menú izquierdo → **API Key** → **Create API Key**
3. Copiar la clave (`sk-...`)

## Configuración en OpenCode (OpenAI-compatible)

| Parámetro | Valor |
|-----------|-------|
| Base URL | `https://dashscope-intl.aliyuncs.com/compatible-mode/v1` |
| API Key | `sk-...` (la creada) |
| Model | `qwen-plus`, `qwen-turbo`, `qwen3-coder-plus`, `qwen-max` |

## Free Trial (evitar cobros)

1. En la consola ir a **Model Usage** → pestaña **Free Quota**
2. Activar **"Free Quota Only"** por modelo
3. Cuando se agote el cupo, la API devuelve error en vez de cobrar
4. Usar solo región Singapore

**Notas:**
- El free trial da ~1M tokens por modelo, dura 30-90 días
- Al agotarse o expirar empieza a cobrar
- No usar modelos sin free quota

# #modelos #ia #hosting #gratis
