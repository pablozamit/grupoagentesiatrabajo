# Ajustes Avanzados de Hermes Agent

Recopilación de los **10 ajustes clave de configuración de Hermes Agent** que transforman la herramienta de "chat con IA" en una **operación autónoma 24/7**.

## Por qué importan

La configuración por defecto de Hermes sirve para empezar, pero deja capacidad sin usar. Estos ajustes desbloquean memoria persistente, programación fiable, integración con vault, notificaciones y recuperación ante fallos.

## Los 10 ajustes

### 1. Ruta absoluta para la memoria persistente

Por defecto `MEMORY_PATH` se resuelve a una ruta relativa que puede borrarse al reiniciar. La memoria parece funcionar pero no persiste.

```bash
MEMORY_BACKEND=sqlite
MEMORY_PATH=/Users/tu-usuario/hermes-data/memory.db
```

**Verificar**: pregunta a Hermes cuál es la entrada más antigua y cuántas tiene. Si dice 0, no está persistiendo.

### 2. Zona horaria del programador

El programador viene en UTC. Si pides "briefing a las 6AM" en Madrid, salta a las 7AM (o 5AM según DST).

```bash
ENABLE_SCHEDULER=true
SCHEDULER_TIMEZONE=Europe/Madrid
```

Usa el nombre IANA completo (`Europe/Madrid`, `America/New_York`, `Asia/Tokyo`), no abreviaturas.

### 3. Auto-descubrimiento de skills

Por defecto hay que reiniciar Hermes para que reconozca skills nuevos.

```bash
SKILLS_PATH=/Users/tu-usuario/hermes-skills
SKILLS_WATCH=true
SKILLS_AUTO_RELOAD=true
```

**Patrón avanzado**: apunta `SKILLS_PATH` a la carpeta de skills dentro de tu vault de Obsidian. Así editas skills desde Obsidian y se actualizan en Hermes al guardar.

### 4. Pre-carga de contexto modular

En lugar de un `CLAUDE.md` enorme, divide el contexto en varios archivos:

- `CLAUDE.md` → identidad y reglas de operación
- `context/projects.md` → estado de proyectos
- `context/priorities.md` → prioridades de la semana
- `context/standards.md` → estándares de calidad y voz
- `context/memory-rules.md` → qué guardar y cómo

```bash
CONTEXT_PRELOAD=true
CONTEXT_FILES=./CLAUDE.md,./context/projects.md,./context/priorities.md,./context/standards.md,./context/memory-rules.md
```

### 5. Profundidad de recuperación de memoria

El default recupera solo las 5 entradas más recientes, lo que pierde contexto histórico relevante.

```bash
MEMORY_RETRIEVAL_DEPTH=20
MEMORY_RETRIEVAL_STRATEGY=relevance
```

`relevance` recupera por similitud semántica, no solo por recencia. Cada skill puede sobreescribir estos valores en su propio archivo.

### 6. Enrutamiento de outputs al vault

Por defecto todo va a `data/outputs/`, separado de tus notas. Apunta al vault para que los outputs se conviertan en notas:

```bash
OUTPUT_PATH=/Users/tu-usuario/ObsidianVault/04-HERMES-OUTPUTS
```

Cada skill puede configurar su propia subcarpeta (`briefings`, `analyses`, `drafts`, `reviews`...).

### 7. Gateway de notificaciones

Sin notificaciones tienes que abrir Hermes o revisar la carpeta de outputs para saber si algo terminó.

```bash
NOTIFICATION_GATEWAY=telegram
TELEGRAM_BOT_TOKEN=tu-bot-token
TELEGRAM_CHAT_ID=tu-chat-id
```

Crea el bot con BotFather, mándale un mensaje para obtener tu chat_id, y configúralo en `.env`. En el skill define `on_complete: telegram`, `on_failure: telegram` y un mensaje con `{output_path}`.

### 8. Encadenamiento de skills

Por defecto cada skill corre aislado. Puedes encadenarlos para que el output de uno dispare el siguiente automáticamente.

```yaml
## Chaining Configuration
on_complete:
  - trigger: draft-engine
    condition: "output contains TIER 1"
    pass_output: true
  - trigger: quality-filter
    condition: always
    pass_output: true
```

Ejemplo de pipeline completo: monitor de fuentes → radar de contenido → motor de borradores → filtro de calidad → notificación.

### 9. Programación de consolidación de memoria

Sin consolidación, la base de memoria acumula duplicados, observaciones redundantes e información obsoleta. La calidad de recuperación **baja con el tiempo**.

Añade esto al schedule:

```json
{
  "skill": "memory-consolidator",
  "cron": "0 23 * * *",
  "description": "Consolidación de memoria cada noche a las 23:00"
}
```

El skill revisará las entradas del día, fusionará duplicados, actualizará puntuaciones de relevancia, archivará lo obsoleto y guardará patrones diarios.

### 10. Recuperación ante fallos

En una operación 24/7 los fallos son normales: fuentes caídas, rate limits, archivos que se mueven. Por defecto un fallo se loguea y se olvida.

```bash
SKILL_RETRY_ENABLED=true
SKILL_RETRY_MAX=3
SKILL_RETRY_DELAY=300
SKILL_RETRY_NOTIFICATION=telegram
```

Tres reintentos con 5 minutos entre cada uno. Si los tres fallan, llega una notificación a Telegram. Los skills pueden añadir comportamiento específico para casos como `ON SOURCE UNAVAILABLE`, `ON API RATE LIMIT`, `ON FILE NOT FOUND` o `ON MODEL ERROR`.

## Configuración completa de ejemplo

```bash
# 1. Memoria persistente con ruta absoluta
MEMORY_BACKEND=sqlite
MEMORY_PATH=/Users/tu-usuario/hermes-data/memory.db

# 2. Zona horaria correcta
ENABLE_SCHEDULER=true
SCHEDULER_TIMEZONE=Europe/Madrid

# 3. Auto-descubrimiento de skills con vault
SKILLS_PATH=/Users/tu-usuario/ObsidianVault/06-SYSTEM/skills
SKILLS_WATCH=true
SKILLS_AUTO_RELOAD=true

# 4. Pre-carga de contexto
CONTEXT_PRELOAD=true
CONTEXT_FILES=./CLAUDE.md,./context/projects.md,./context/priorities.md,./context/standards.md

# 5. Recuperación profunda de memoria
MEMORY_RETRIEVAL_DEPTH=20
MEMORY_RETRIEVAL_STRATEGY=relevance

# 6. Outputs al vault
OUTPUT_PATH=/Users/tu-usuario/ObsidianVault/04-HERMES-OUTPUTS

# 7. Notificaciones Telegram
NOTIFICATION_GATEWAY=telegram
TELEGRAM_BOT_TOKEN=tu-bot-token
TELEGRAM_CHAT_ID=tu-chat-id

# 10. Recuperación ante fallos
SKILL_RETRY_ENABLED=true
SKILL_RETRY_MAX=3
SKILL_RETRY_DELAY=300
SKILL_RETRY_NOTIFICATION=telegram
```

Los ajustes 8 y 9 se configuran en los archivos de skill individuales y en `schedule.json`.

## Antes y después

**Antes**: Hermes es un chat sofisticado. Abres cuando te acuerdas, ejecutas skills manualmente, la memoria puede o no persistir, los fallos se pierden.

**Después**: Hermes es una operación autónoma 24/7. Memoria que acumula inteligencia, skills que se encadenan en pipelines, outputs en el vault, notificaciones en el móvil, fallos que se recuperan solos.

## Origen de la información

Lista recopilada a partir de hilos y documentación pública sobre configuración avanzada de Hermes Agent (junio 2026). Los ajustes y comandos son los que recomienda la comunidad para llevar Hermes de "chat con IA" a operación autónoma 24/7.

Relacionado: [[Hermes Agent]] — la nota general de introducción a Hermes.

# #agente #contenido #vibecoding
