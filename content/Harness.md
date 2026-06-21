# Harness (Arnés de agente)

El *harness* (o arnés) es la infraestructura que rodea a un modelo de lenguaje para convertirlo en un agente funcional, fiable y útil. La fórmula que resume el concepto:

```
Agente = Modelo + Harness
```

## El modelo no es suficiente

Un LLM por sí solo (GPT, Claude, Grok, Qwen...) es un **cerebro sin cuerpo**. Sabe razonar y generar texto, pero no puede actuar en el mundo real. El harness es todo lo demás:

- **Herramientas**: APIs, ejecución de código, búsqueda web, bases de datos
- **Memoria y estado**: contexto entre pasos, memoria a largo plazo
- **Instrucciones y reglas**: prompts de sistema, guardrails, políticas
- **Orquestación**: lógica que decide qué hacer después (planificar → actuar → verificar → corregir)
- **Validación**: comprobaciones automáticas, sandboxes, recuperación de errores
- **Observabilidad**: logs, monitoreo humano, límites de ejecución

Sin un buen harness, un modelo potente es solo un chatbot que alucina y se pierde. Con un buen harness, se convierte en un agente que completa tareas complejas de forma fiable.

## Componentes típicos

### Herramientas (tools)
Lo que el agente puede usar. APIs REST, ejecutar código Python, leer archivos, buscar en internet, consultar bases de datos. Cada herramienta tiene un nombre, descripción y esquema de entrada/salida. El modelo decide cuándo llamarlas.

### Prompts de sistema y reglas
Instrucciones fijas que definen la personalidad, límites y políticas del agente. Por ejemplo:
- "Nunca ejecutes comandos que modifiquen archivos del sistema"
- "Siempre verifica dos veces antes de enviar un email"
- "Si no estás seguro, pregunta al usuario"

Esto es lo que en herramientas como Claude Code se configura en `CLAUDE.md` o `AGENTS.md`.

### Orquestación
El bucle principal del agente. No es solo "usuario pregunta → modelo responde". Es un ciclo:
1. Analizar la tarea
2. Decidir qué herramientas usar y en qué orden
3. Ejecutar
4. Evaluar el resultado
5. Corregir si es necesario
6. Repetir hasta completar

### Memoria y estado
El agente necesita recordar lo que ha hecho. Esto incluye:
- **Memoria a corto plazo**: el historial de la conversación (contexto)
- **Memoria a largo plazo**: información persistente entre sesiones (bases de datos vectoriales, archivos, [[Memanto]])
- **Estado**: en qué punto de una tarea compleja se encuentra

### Validación y seguridad
Mecanismos para evitar que el agente haga cosas incorrectas o peligrosas:
- **Sandboxes**: entornos aislados para ejecutar código
- **Validación de outputs**: comprobar que la respuesta tiene el formato esperado
- **Límites**: tiempo máximo, número de pasos, coste máximo de API
- **Supervisión humana**: aprobación antes de acciones destructivas

## Ejemplos de harness según el contexto

| Entorno | Harness |
|---|---|
| **Claude Code / Cursor / Codex** | `CLAUDE.md`, `AGENTS.md`, skills, hooks, reglas de proyecto |
| **Hermes Agent** | Skills modulares, sistema de memoria, orquestador multi-agente |
| **Kilo Code** | 500+ modelos, configuración de proveedores, reglas personalizadas |
| **LangChain / CrewAI** | Frameworks que proporcionan herramientas, memoria y orquestación |
| **Producción empresarial** | Sandbox, verificación de outputs, integración con CRM y CI/CD |

## Por qué es importante ahora (2026)

Los modelos de lenguaje ya son muy buenos. La diferencia real en rendimiento y fiabilidad ya no viene del modelo, sino del **harness** que construyes a su alrededor.

Un harness bien diseñado puede hacer que un modelo "normal" supere a uno más potente que funciona sin estructura. La ingeniería de harness (*Harness Engineering*) se está convirtiendo en la disciplina clave para construir agentes serios.

## Ingeniería de Harness

Es la práctica de diseñar y construir el sistema alrededor del modelo. Incluye:

- Diseñar herramientas y sus interfaces
- Escribir instrucciones de sistema efectivas
- Implementar bucles de orquestación robustos
- Configurar memoria y estado
- Añadir validación y recuperación de errores
- Decidir qué nivel de autonomía dar al agente

Un buen harness es el que hace que el agente **funcione sin que tengas que estar vigilándolo**.

## Enlaces relacionados

- [[Hermes Agent]] — ejemplo de agente con harness modular
- [[Kilo Code]] — harness para edición de código
- [[Memanto]] — memoria persistente como componente del harness
- [[Ajustes Avanzados de Hermes Agent]] — cómo configurar reglas y loops
- [[Glosario]] — definiciones de términos relacionados

---

#agente #contenido #ia
