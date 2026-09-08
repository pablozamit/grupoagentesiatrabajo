# AI Critic Loop (agente crítico)

El **AI critic loop** es un **patrón de prompting** para que los modelos frontier (GPT-6 Astra, Claude) generen **visuales 3D/juegos que no parezcan slop por defecto**. Difundido por [@aisearchio](https://x.com/aisearchio) (103k views). Es el patrón: *"una pasada genera, una pasada critica hasta que deja de parecer default Astra mush"* (Marwan Atef).

## El hack (versión corta)

Cuando vibecodeas juegos o assets 3D con GPT-6 Astra, el output por defecto es "básico y descuidado". Incluye una variante de esto en el prompt:

> **Spina un agente crítico separado** que tome screenshots de tu generación desde diferentes ángulos y le dé una puntuación de 0 a 10 (define qué significa cada nivel). **Sigue en loop hasta que consiga un score >8.**

## El patrón (versión que funciona de verdad)

La comunidad refina el hack con **criterios concretos**, no solo "se ve mejor":

- **Rubrica externa, no otra opinión de modelo**: fotos de referencia fijas + checks de silhouette, poly count y frame time hacen el loop más difícil de engañar (herman)
- **Criterios visuales concretos** (ricciandrea): product readability, lighting consistency, material realism, y que el output **siga el brief** — no solo "más bonito"
- **El crítico puede fallar el resultado, y cap de retries**: "sigue hasta 8/10" sin tope puede ser negociar caro con tu propio sistema de calificación (BlueRockID)
- **Referencias específicas**: photos de wireframes en whiteboard + ser hiper-específico verbalmente sobre lo que falla (Jayden Reuben)

## La variante multi-juez (para cualquier tarea)

> "Dile que delegue **múltiples subagentes juez**, cada uno revisando un área concreta (Funcionalidad, instrucción-following, etc.) y que devuelvan un reporte con score 0-100. La tarea no está completa hasta que la **media >90**." — teacup

## Crítica honesta

- **Trata el síntoma, no la enfermedad** (Shubham Sharma): si la base está mal, iterar contra un crítico consume muchos tokens
- El crítico solo es útil **si tiene criterios concretos** — un juez sin rubrica valida el "mush" con otro nombre

## Cómo encaja en la enciclopedia

Es el mismo patrón de **generator/evaluator split** de [[Learn Harness Engineering]] y de la evidencia medida de [[Three.js Game Skills (Majid Manzarpour)]] (visual scorecard, screenshots, pixel checks), aplicado a modelos de generación visual con un solo prompt. Conecta con el workflow de [[Pietro Schirano (@skirano)]] (demos 3D con GPT-6) y con [[Fable Orchestrator]] (separar quien genera de quien evalúa).

## Recursos

- Hilo viral: [@aisearchio en X](https://x.com/aisearchio)
- Críticas y variantes: comentarios del hilo (herman, ricciandrea, BlueRockID, teacup, Jayden Reuben)

## Relacionado

- Evidencia en QA: [[Three.js Game Skills (Majid Manzarpour)]], [[Noqa]]
- Generator/evaluator split: [[Learn Harness Engineering]], [[Fable Orchestrator]]
- Generación 3D con frontier: [[Pietro Schirano (@skirano)]], [[Cartwheel MCP]]

# #vibecoding #agente #3d #contenido