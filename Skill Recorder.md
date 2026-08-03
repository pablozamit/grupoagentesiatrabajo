# Skill Recorder

**Herramienta open source de Microsoft que convierte acciones reales en skills para agentes de IA.** El enfoque cambia el paradigma: en vez de "enseñar a la IA cómo hacer algo" escribiendo prompts, **haces la tarea una vez delante de la IA para que aprenda viéndote**. Graba la pantalla completa de tu trabajo manual y la transforma en un `SKILL.md` reutilizable.

## Qué hace

1. Grabas **una sola vez** una tarea completa: operaciones de pantalla, cambios de ventana, webs visitadas, clipboard, comandos de terminal y explicaciones por voz.
2. **GitHub Copilot** convierte todo el proceso en una cadena:
   `Intención de tarea → Pasos generales → SKILL.md → Automatización programada`
3. El resultado es una skill que el agente puede ejecutar o programar.

## No es RPA clásico

A diferencia del RPA tradicional (que **replica coordenadas de mouse** y es frágil), Skill Recorder intenta **convertir los clics en APIs, CLIs o herramientas nativas del agente** más estables. Ejemplo: demostrar cómo gestionar un Issue de GitHub una vez puede generar una skill agent capaz de procesar lotes de Issues similares.

## Compatibilidad

- **Soporte nativo**: Microsoft Scout y Microsoft 365 Copilot Cowork.
- **Aún sin soporte directo**: Claude Code, Codex, OpenCode — el `SKILL.md` generado se puede **adaptar manualmente** a esos hosts.

## Límites (por detectar)

- **Captura el happy path**: grabar una vez suele capturar solo el flujo feliz.
- Para producción real hace falta **complementar con ejemplos de fallo** (permisos insuficientes, excepciones, etc.).

## La idea clave

> No enseñar a la IA cómo hacerlo, sino **hacerlo directamente para que la IA lo vea**.

Esto ataca de raíz la inestabilidad del RPA y es más claro que hardcodear un prompt de proceso.

## Relacionado

- [[Claude Code]] — host donde el `SKILL.md` generado se adapta manualmente
- [[Codex]] — otro host candidato para la salida
- [[Noqa]] y [[Agent-Reach]] — notas afines sobre habilidades instalables
- Ver categoría [[#skills]]

# #skills #agente #productividad