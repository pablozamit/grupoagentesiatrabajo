# Hermes Agent

[Hermes Agent](https://hermes-agent.nousresearch.com/) es un agente de IA de código abierto creado por Nous Research que aprende de sus tareas y se vuelve más capaz con el tiempo.

## Qué es (versión simple)

Hermes es un agente autonomous que:
- **Ejecuta flujos de trabajo completos**: No solo responde preguntas, hace el trabajo de principio a fin
- **Navega tu navegador, ejecuta comandos, programa tareas, lee tus emails, redacta contenido y publica el resultado donde tú le digas** (Telegram, Discord, Slack, email)
- **Tiene memoria persistente**: Recuerda lo que ha hecho entre sesiones
- **Escribe sus propias habilidades**: Mientras trabaja, crea habilidades (skills) reutilizables
- **150,000 estrellas en GitHub** y **#1 en OpenRouter** en uso global de tokens

## Por qué es diferente

La mayoría de herramientas de IA responden preguntas. Hermes ejecuta tareas completas.

**Lo que incluye:**
- **123 habilidades ya creadas**: GitHub, Obsidian, Google Workspace, Linear, Notion, Typefully, Perplexity, investigación profunda, control de navegador, web scraping, visión, voz, programación de tareas
- **70+ herramientas integradas** en el gateway
- **300+ modelos** a través de una suscripción (OpenRouter)
- **6 lugares donde puede vivir**: Tu portátil, Docker, VPS, Daytona, Singularity, Modal
- **20+ superficies de mensajería**: Telegram, Discord, Slack, email, voz, terminal

## Cómo funciona (arquitectura)

Todo agente Hermes tiene tres cosas:

### 1. Un cerebro (MEMORY)
- **MEMORY.md**: Hechos estables sobre tu negocio, clientes, productos
- **USER.md**: Hechos estables sobre ti (zona horaria, horarios, proyectos recurrentes)
- Las sesiones se almacenan en SQLite, recuperación entre sesiones con búsqueda de texto completo

### 2. Una personalidad (SOUL)
- **SOUL.md**: Defines el vibe del agente (conciso, sarcástico, formal, rápido, reflexivo)
- Puedes crear 6 agentes con diferentes personalidades pero el mismo cerebro debajo

### 3. Un conjunto de habilidades (SKILLS)
- 123 habilidades incluidas
- **Closed learning loop**: El agente escribe nuevas habilidades mientras trabaja
- Tu biblioteca de habilidades crece sobre las 123 sin que escribas nada

## Niveles de setup

### Nivel 1: Un agente
- Un solo Hermes agent
- Mejor para: setup inicial, uso personal
- Conectas a Telegram o Discord y empiezas a usarlo en tareas reales

### Nivel 2: Agentes especialistas directos
- Múltiples agentes especializados (SEO, contenido, dev, etc.)
- Hablas directamente con cada uno
- Mejor para: separación clara de roles

### Nivel 3: Orchestrador + especialistas
- Un agente orchestrador como puerta principal
- Recibe tus peticiones y las routing al especialista correcto
- Mejor para: trabajo multifuncional

### Nivel 4: Equipo automated
- Como nivel 3 pero con workflows recurrentes (reportes semanales SEO, health checks diarios, backups automáticos)
- Mejor para: operaciones de marketing completas

## Uso en marketing (ejemplos reales)

Un usuario usa Hermes para:
- **Asistente personal**: Maneja negocio y vida personal, reside en Telegram, resume emails importantes, programa recordatorios
- **Prototipado de workflows**: Prueba nuevos flujos (lead magnet, review de creatividad, sprints de contenido) antes de implementarlos
- **Agentes especializados**: SEO, outbound/BD, revisión de diseño, escritura de contenido
- **Company brain**: Monitorea Slack, chats, emails, transcripts y hace todo consultable
- **Agente SEO**: 21 pasos desde keyword hasta artículo publicado en un contenedor Docker
- **Agente de distribución**: Atomiza contenido largo (artículo) a LinkedIn, X, Threads con hooks específicos por plataforma

## Cómo empezar

1. Ve a [hermes-agent.nousresearch.com](https://hermes-agent.nousresearch.com/)
2. Instala en tu portátil o en un VPS
3. Conecta a Telegram, Discord o Slack
4. Empieza a darle tareas reales
5. Deja que el agente aprenda de tu trabajo

## Recursos

- Web: [hermes-agent.nousresearch.com](https://hermes-agent.nousresearch.com/)
- Docs: [hermes-agent.nousresearch.com/docs](https://hermes-agent.nousresearch.com/docs/)
- GitHub: [github.com/nousresearch/hermes-agent](https://github.com/nousresearch/hermes-agent)
- Control room template: [github.com/shannhk/hermes-agent-control-room](https://github.com/shannhk/hermes-agent-control-room)
- Atlas community: [hermesatlas.com](https://hermesatlas.com/)

## Notas honestas

1. Los默认 también son opiniones: Si quieres control explícito sobre cada paso, puede sentirse pesado
2. Nivel 3 y 4 tienen curva de aprendizaje real (Docker, VPS, SSH)
3. El modelo importa: Hermes hace a un buen modelo mejor, pero no hace magia con modelos pequeños

# #agente