# Cartwheel MCP

**Cartwheel MCP** es el servidor MCP de **Cartwheel** (getcartwheel.com) que permite a los agentes de IA **animar en Blender**. El hilo viral de **Andrew Carr** (@andrew_n_carr, co-fundador de Cartwheel, ex-Codex/OpenAI y Brain/Google AI): *"Astra es obviamente muy bueno en Blender, pero la mayoría de escenas que produce son estáticas. Le dimos el Cartwheel MCP y ahora Astra puede animar cosas en Blender"* 🤸

## Qué resuelve

Los modelos frontier (Astra/GPT-6, Claude Fable) son muy buenos generando **escenas estáticas** en Blender, pero la animación era el punto débil. Cartwheel MCP le da al agente la capacidad de **generar movimiento humano realista**:

- **Data-driven a gran escala**: no son paths scripted a mano — está entrenado sobre el **corpus de motion humano más grande del mundo** (~12.000 horas)
- **Realista a física o estilizado**: según lo que necesites (los modelos basados en datos suelen respetar física o seguir estilización)
- Funciona para: animadores, roboticistas, motion analysts, game developers
- El agente (Astra, Codex, Claude) controla la animación en Blender vía MCP

## La ciencia detrás (scaling laws)

El repo [Cartwhl/scaling-laws-for-motion](https://github.com/Cartwhl/scaling-laws-for-motion) (paper de Param Hanji, Joakim Olsson, Aalok Patwardhan, Katie Lowen, Andrew Carr) demuestra:

- **Human motion generation tiene una ley de scaling compute-optimal** — encaja con la ley de Chinchilla del lenguaje (ambos frameworks, autoregresivo y flow matching, aterrizan cerca de **C^1/2**)
- **El motion ya no está data-constrained**: es una frontera predecible y escalable
- **Metodología de curación**: de un catálogo de ~423k horas → 91k (prefilter) → 24.3k (visual gates) → 12.1k (reconstrucción cómica + QA físico) → **11.969 horas finales** (5.56M clips), una reducción de ~35×. *"The quality gates, not the crawl, set the corpus"*
- **Repetición de datos**: autoregresión cruza el muro de +2% a ~16 epochs; flow matching a ~498 (~30× más reuso del mismo dato antes de degradar)

## Cómo se relaciona con la enciclopedia

Conecta directamente con el workflow de [[Personajes 3D jugables desde IA]] (que termina pidiendo al agente meter el personaje en el motor con Blender MCP) y con [[Blender MCP]]: Blender MCP controla el modelado, **Cartwheel MCP añade la animación**.

## Recursos

- Web: [getcartwheel.com](https://getcartwheel.com)
- App: [app.getcartwheel.com](https://app.getcartwheel.com)
- Paper: [github.com/Cartwhl/scaling-laws-for-motion](https://github.com/Cartwhl/scaling-laws-for-motion)
- Blog: [getcartwheel.com/blog/scaling-laws](https://getcartwheel.com/blog/scaling-laws)
- Hilo viral: [@andrew_n_carr en X](https://x.com/andrew_n_carr)

## Relacionado

- Controlar Blender con agentes: [[Blender MCP]], [[Personajes 3D jugables desde IA]]
- Animación y motion: [[Three.js Game Skills (Majid Manzarpour)]], [[GoRest 2D Spritesheet Generator]]
- Modelos frontier en 3D: [[Pietro Schirano (@skirano)]], [[Elemental Sandbox]]

# #3d #agente #video #vibecoding