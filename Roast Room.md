# Roast Room

**/roast-room** es una *skill* para Claude (built por [@nateherk](https://x.com/nateherk/status/2109841753628914090)) que **somete una idea a un consejo de siete sub-agentes**. Cada asiento es un sub-agente con su propio "cerebro", construido a partir de los libros, marcos y anécdotas de esa persona, y cada uno es responsable de **una sola pregunta**.

## Los siete asientos

| Persona | Pregunta que vigila |
|---|---|
| Bezos | ¿Es la apuesta correcta y cuánto tiene de reversible? |
| Paul Graham | ¿La gente quiere esto de verdad? |
| Hormozi | ¿Pagarán por ello, y cuánto? |
| Gary Vee | ¿De dónde viene la atención? |
| Dan Martell | ¿Quién lo hace y cuánto calendario te cuesta? |
| Gino Wickman | ¿Puede el negocio funcionar sin ti? |
| Buffett | ¿Qué hace al caja y al riesgo? |

Los sub-agentes forman su opinión, **debaten entre sí** y devuelven un veredicto final.

**Repo:** [nateherkai/roast-room](https://github.com/nateherkai/roast-room) — el creador publicó el repositorio de la skill ([@nateherk](https://x.com/nateherk/status/2109841816917086618)).


## Por qué importa

Es un patrón reutilizable de **crítica multi-agente con roles fijos**: en vez de un único LLM "sí-señor", se fuerza a que cada perspectiva ataque la idea desde un ángulo distinto y luego se sintetice. Encaja con los patrones de generación-crítica de la enciclopedia.

## Relacionado

- Otros patrones de crítica: [[AI Critic Loop]]
- Skills de agente: [[Skills]], [[Skill Recorder]]
- Agentes: [[Claude Code]]

# #skills #agente #contenido
