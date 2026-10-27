# 10 Hacks de Hermes Agent (sistema 24/7)

Artículo de Yan (@IBuzovskyi, 3 jun 2026): diez configuraciones de [[Hermes Agent]] que convierten el chat en un sistema que trabaja 24/7. El autor afirma ahorrar 15+ horas semanales. Si solo se aplican tres: **cron jobs (#3), /goal con estructura (#4) y skills como SOPs (#8)**.

## Los 10 hacks

1. **Mission control**: un panel donde se ve qué está corriendo, qué espera aprobación y qué está bloqueado, en vez de enterrado en el chat. Hermes trae uno de serie (`hermes dashboard`, en localhost:9119) con skills, modelos, crons, perfiles y kanban.
2. **Event triggers**: Hermes vigila cambios en tus herramientas (Notion, Linear, Sheets, Slack) y reacciona solo. Ejemplo del autor: una tarjeta que pasa a «To Film» en Notion dispara un brief de grabación por Telegram. Vía cron cada 10 min (simple) o webhook (instantáneo).
3. **Cron jobs** ⭐: tareas programadas en lenguaje natural, sin sintaxis crontab. Ejemplos del autor: historia de IA digna de reacción cada mañana, escaneo del nicho cada 3 horas, auditoría de la parrilla de contenido los lunes, resumen semanal los viernes.
4. **/goal con estructura** ⭐: plantilla `/goal [RESULTADO] using [FUENTES] with constraints: [RESTRICCIONES] deliverable: [ENTREGABLE]`. Cada parte hace un trabajo: resultado = cuándo se logra; fuentes = dónde mirar; restricciones = qué evitar; entregable = cómo es «hecho». Truco: pedir a Hermes que te entreviste con 5-8 preguntas y escriba él el /goal.
5. **Sub-agentes como equipo de investigación**: repartir una investigación entre subagentes en paralelo, uno por fuente (tendencias, tus propios datos, competidores); solo el resumen final vuelve a la sesión principal y el contexto queda ligero.
6. **Topics de Telegram como espacios de trabajo**: un topic por contexto (YouTube, Reacts, Código, Investigación, General) para que no se mezclen los temas; cada topic puede tener sus propios cron jobs.
7. **Kanban**: tablero integrado (`hermes kanban list`, SQLite, compartido entre perfiles) con estados Triage → To-Do → Ready → Running → Blocked → Done. Cada /goal se convierte en tarjeta automáticamente; las tareas caídas se recuperan solas (detección de zombis).
8. **Skills como SOPs** ⭐: una skill es un procedimiento operativo estándar en markdown en `~/.hermes/skills/`. Cualquier flujo que explicas dos veces debería ser una skill (ejemplo del autor: skill «content-post» con 7 pasos, del trending al borrador puntuado). Ver también [[Hermes Skills Hub]].
9. **Webhooks**: para eventos del mundo (un lead nuevo, un PR abierto, un post de un competidor): Make/Zapier/n8n apuntan al gateway de Hermes, que dispara un /goal al recibirlos. Cron = tiempo, webhooks = eventos.
10. **Agentes separados por trabajo**: perfiles de Hermes, cada uno con su soul.md, memoria, skills, modelo, conexiones y permisos (content-lead, researcher, ops, code-reviewer). Un perfil se puede compartir por git e instalar con `hermes profile install github.com/usuario/perfil`.

## Cómo encadenan

Ejemplo del autor: el cron de las 8:00 despierta al perfil content-lead, que abre un /goal estructurado con 3 sub-agentes (todo en tarjetas kanban), ejecuta la skill de redacción y manda los borradores al topic de Telegram; un webhook avisa si un competidor publica sobre lo mismo. Todo visible en mission control.

Fuentes: [artículo de @IBuzovskyi](https://x.com/IBuzovskyi/status/2062101068842975409) (3 jun 2026).

## Ver también

- [[Hermes Agent]]
- [[Ajustes Avanzados de Hermes Agent]]
- [[Hermes Skills Hub]]
- [[Caduceus (Hermes Desktop)]]

# #agente
