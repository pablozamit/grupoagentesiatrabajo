# Hermes Agent

[Hermes Agent](https://hermes-agent.nousresearch.com/) es un agente de IA de código abierto creado por Nous Research que aprende de sus tareas y se vuelve más capaz con el tiempo.

## Qué es (versión simple)

Hermes es un agente autónomo que:
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
- **Bucle cerrado de aprendizaje**: El agente escribe nuevas habilidades mientras trabaja
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

### Nivel 3: Orquestador + especialistas
- Un agente orquestador como puerta principal
- Recibe tus peticiones y las dirige al especialista correcto
- Mejor para: trabajo multifuncional

### Nivel 4: Equipo automatizado
- Como nivel 3 pero con workflows recurrentes (reportes semanales SEO, health checks diarios, backups automáticos)
- Mejor para: operaciones de marketing completas

## Uso en marketing (ejemplos reales)

Un usuario usa Hermes para:
- **Asistente personal**: Maneja negocio y vida personal, reside en Telegram, resume emails importantes, programa recordatorios
- **Prototipado de workflows**: Prueba nuevos flujos (lead magnet, review de creatividad, sprints de contenido) antes de implementarlos
- **Agentes especializados**: SEO, outbound/BD, revisión de diseño, escritura de contenido
- **Cerebro de empresa**: Monitorea Slack, chats, emails, transcripts y hace todo consultable
- **Agente SEO**: 21 pasos desde keyword hasta artículo publicado en un contenedor Docker
- **Agente de distribución**: Atomiza contenido largo (artículo) a LinkedIn, X, Threads con ganchos específicos por plataforma

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
- **Motion Graphics Skills**: 50 skills open-source de iart.ai para que agentes de IA hagan motion graphics (tipografía cinética, charts, explainers, TikTok/Reels, WebGL, Manim). 14 packs instalables con verify loop. Compatible con Claude Code, Cursor, Codex. [github.com/iart-ai/motion-skills](https://github.com/iart-ai/motion-skills)

## Computer Use (GUI Desktop Control)

Hermes Agent incluye **Computer Use** mediante **cua-driver**, un sistema para controlar la interfaz gráfica del escritorio (GUI) en Windows y Linux. Permite que el agente vea la pantalla, mueva el ratón, haga click, escriba texto y navegue aplicaciones como un humano.

### Cómo funciona (Computer Use Agent / CUA)

- **Visión+acción**: El agente captura la pantalla, identifica elementos visuales y ejecuta acciones de ratón/teclado
- **Sin APIs**: Opera directamente sobre la interfaz gráfica, como si un humano estuviera usando el ordenador
- **Loop de feedback**: Observa el resultado visual de cada acción y ajusta el siguiente paso
- **Autenticación**: Puede manejar logins, 2FA, verificación por email si se le configuran skills específicas

### Instalación (Windows)

```bash
# 1. Clonar Hermes Agent
git clone https://github.com/NousResearch/hermes-agent.git
cd hermes-agent

# 2. Instalar dependencias
npm install

# 3. Configurar cua-driver (Computer Use Agent driver)
pip install cua-driver

# Si falla:
pip install agu-cua-driver   # alternativa

# 4. Configurar variables de entorno
# .env:
# HERMES_COMPUTER_USE=true
# CUA_DRIVER_PATH=C:\ruta\a\cua-driver
# DISPLAY=:0   (en Linux)

# 5. Probar conexión
npx hermes agent --computer-use

# 6. Iniciar sesión interactiva
npx hermes chat
```

### Habilitar en Hermes

Computer Use se activa **por tarea**, no siempre encendido. Al dar una instrucción, añade:

> "Usa Computer Use para esto."

O en la configuración del agente, establece `computer_use: true` en las skills que lo requieran.

### Skills compatibles con Computer Use

- **Web browsing**: Navegación visual de páginas, formularios complejos
- **Desktop apps**: Interacción con aplicaciones locales (VS Code, Slack, Excel)
- **Instalación de software**: Descargar, instalar y configurar herramientas
- **Autenticación**: Logins en web/apps que requieren interacción visual
- **Testing visual**: Pruebas de interfaz de usuario

### Troubleshooting (Windows)

| Síntoma | Solución |
|---------|----------|
| `cua-driver no encontrado` | `pip install agu-cua-driver` |
| Error de permisos en captura | Ejecutar terminal como administrador |
| Ratón no responde | Verificar que CUA_DRIVER_PATH apunte al binario correcto |
| Pantalla negra en captura | Asegurar que el monitor esté encendido o usar RDP con captura habilitada |
| Conexión rechazada | `npx hermes agent --computer-use` en una terminal separada antes de `npx hermes chat` |

### Limitaciones actuales

- **Velocidad**: Cada paso requiere captura de pantalla + inferencia del modelo, por lo que es más lento que una API directa
- **Modelo grande recomendado**: Computer Use funciona mejor con modelos de frontera (GPT-4o, Claude Sonnet, Gemini 2.5 Pro) o modelos locales grandes (70B+)
- **Ventanas minimizadas**: No puede interactuar con ventanas minimizadas o fuera de la pantalla virtual
- **Multi-monitor**: Soporte experimental, puede tener problemas con configuraciones de múltiples monitores

## Notas honestas

1. Los valores por defecto también son opiniones: Si quieres control explícito sobre cada paso, puede sentirse pesado
2. Nivel 3 y 4 tienen curva de aprendizaje real (Docker, VPS, SSH)
3. El modelo importa: Hermes hace a un buen modelo mejor, pero no hace magia con modelos pequeños

## Configuración avanzada

Para llevar a Hermes de "chat con IA" a **operación autónoma 24/7**, hay 10 ajustes clave (memoria persistente, zona horaria, auto-descubrimiento de skills, contexto modular, profundidad de memoria, enrutamiento de outputs, notificaciones, encadenamiento, consolidación y recuperación de fallos). Ver [[Ajustes Avanzados de Hermes Agent]].

# #agente #vibecoding #contenido