# Ollama

[Ollama](https://ollama.com/) es una herramienta para ejecutar modelos de IA本地 (en tu propio ordenador) sin necesidad de internet.

## Qué es

- **Ejecuta modelos localmente**: Todo corre en tu PC, sin enviar datos a la nube
- **Gratis y de código abierto**: No pagar por tokens
- **Modelos disponibles**: LLama, Mistral, Gemma, Qwen, DeepSeek, y muchos más
- **Para Mac, Linux y Windows**

## Por qué usar Ollama

### Sin gastos de API
Cada vez que usas ChatGPT, Claude, u otra IA en la nube, pagas por tokens. Con Ollama:
- No hay cuenta, no hay suscripción
- Ejecutas modelos gratis en tu ordenador
- Solo te costará electricidad (mucho más barato)

### Privacidad
- Tus datos no salen de tu PC
- Funciona sin internet (una vez descargado el modelo)
- Ideal para trabajo sensible

### Control
- Eliges qué modelo ejecutar
- Puedes usar modelos especializados
- Sin límite de peticiones

## Cómo instalarlo

### Mac
```bash
brew install ollama
```

### Linux
```bash
curl -fsSL https://ollama.com/install.sh | sh
```

### Windows
Descarga desde: [ollama.com/download/windows](https://ollama.com/download/windows)

## Comandos básicos

```bash
# Descargar un modelo
ollama pull llama3

# Ver modelos disponibles
ollama list

# Ejecutar un modelo
ollama run llama3

# Ver ayuda
ollama help
```

## Codex App (novedad mayo 2026)

Ollama ahora incluye **Codex App**, una forma de usar agentes de IA directamente:

```bash
ollama launch codex-app
```

### Qué permite Codex

- **Editar webs visualmente**: Abre servidores locales y sitios, annotation en la página y hacer cambios por chat
- **Revisar código**: Deja comentarios e itera sin salir del workspace
- **Ejecutar en terminal**: Si prefieres la terminal, funciona igual

### Modelos para Codex

- **kimi-k2.6:cloud** - Con visión
- **glm-5.1:cloud** - Con visión
- **nemotron-3-super:cloud** - Confiable para tool calling
- **gemma4:31b:cloud** - Confiable para tool calling
- **qwen3.6** - Confiable para tool calling

### Diferencia con Codex original

- Codex original usa modelos de OpenAI (de pago por tokens)
- Ollama Codex usa modelos locales (solo electricity)
- Puedes usar 5.5 + Kimi k2.6 al mismo tiempo si tu PC lo permite

### Consejo

Para tareas complejas de refactorización, **Devstral** puede ser mejor que los modelos por defecto, ya que tiene mayor context window.

## Modelos populares

| Modelo | Para qué |
|--------|----------|
| llama3 | General, código |
| mistral | Rápido, eficiente |
| codellama | Código |
| deepseek-coder | Programación |
| qwen | Multilingüe |

## Cuándo usar Ollama

- Cuando quieres evitar gastos en API
- Cuando necesitas privacidad
- Cuando tienes GPU potentes (NVIDIA, Apple Silicon)
- Cuando trabajas offline

## Cuándo NO usar Ollama

- Cuando tu PC es lento (necesita buena GPU)
- Cuando necesitas los modelos más potentes (Claude, GPT-4)
- Cuando no quieres gestionar modelos

## Qué PC necesitas

### Modelos pequeños (mistral, llama3:7b, qwen:7b)

| componente | Mínimo | Recomendado |
|------------|--------|-------------|
| RAM | 8 GB | 16 GB |
| GPU | 4 GB VRAM | 8 GB VRAM |
| VRAM | Intel UHD integrada | NVIDIA GTX 1060 / AMD RX 580 |

**Para qué**: Chat básico, resúmenes simples, tareas ligeras

### Modelos medianos (llama3:8b, codellama:13b)

| componente | Mínimo | Recomendado |
|------------|--------|-------------|
| RAM | 16 GB | 32 GB |
| GPU | 8 GB VRAM | 12 GB VRAM |
| Ejemplos | NVIDIA RTX 3060 | NVIDIA RTX 4070 / Apple M1 Pro |

**Para qué**: Código,写作 más complejo, análisis de documentos

### Modelos grandes (llama3:70b, deepseek-coder:33b)

| componente | Recomendado |
|------------|-------------|
| RAM | 64 GB |
| GPU | 24 GB VRAM |
| Ejemplos | NVIDIA RTX 4090 / A100 |

**Para qué**: Tareas complejas, fine-tuning, generación de código extensa

### Apple Silicon (Mac)

| Chip | Modelos que puedes ejecutar |
|------|----------------------------|
| M1/M2 (8 GB) | Modelos de 7B |
| M1/M2 Pro (16 GB) | Modelos de 13B |
| M1/M2 Max (32 GB) | Modelos de 34B |
| M3 Ultra (64 GB) | Modelos de 70B+ |

### Sin GPU

Puedes ejecutar modelos pequeños, pero será **muy lento** (10-50x más lento). Solo recomendado para probar o tareas muy básicas.

## Guía rápida

| Tu objetivo | Modelo recomendado | PC necesaria |
|-------------|-------------------|---------------|
| Probar, ver cómo funciona | mistral:7b | PC básica con 8GB RAM |
| Chat diario,代码 básico | llama3:8b | 16GB RAM, GPU 8GB |
| Código avanzado, análisis | codellama:13b | 32GB RAM, GPU 12GB |
| Todo lo anterior, rápido | llama3:70b | 64GB RAM, GPU 24GB |

## Enlace

- Web: [ollama.com](https://ollama.com/)
- Docs: [github.com/ollama/ollama](https://github.com/ollama/ollama)

# #modelos