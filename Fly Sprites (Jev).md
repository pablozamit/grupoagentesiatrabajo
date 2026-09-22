# Fly Sprites (Jev)

**Conector TypeSafe × Fly.io Sprites** ([fly.io/sprites/jev](https://fly.io/sprites/jev)): decisiones tipadas de [[Jev (TypeSafe)]] dentro de un **ordenador aislado por hardware** (microVM Firecracker, un agente por caja). 18k views.

## El modelo de seguridad (lo importante)

- **La key nunca entra al Sprite**: configuras el conector una vez en tu org; el SDK llama al gateway con placeholder (`TYPESAFE_API_KEY=sprites`) y el gateway inyecta la real al salir. Un agente sin token no puede filtrarlo ni loguearlo
- **Default-deny**: ningún Sprite usa nada hasta que lo autorizas (por etiqueta o prefijo) y acotas endpoints (allow/block por ruta)
- **Red con allowlist** fijada desde fuera (el código de dentro la lee pero no la cambia), **checkpoints** que restauran la máquina tras cada ticket, wake por webhook, hibernación sin coste
- Recetas: routear tareas antes de pagar, elegir skill (con opción "ninguna"), triage triple en un pase (urgente/equipo/frustración), flag de diffs en auth/billing para humano

## Aviso del propio doc

Jev lee lo que pongas en el state **sin tratarlo como hostil**: un ticket malicioso puede empujar la decisión y esa rama ejecuta comandos — por eso corre en Sprite y no en tu portátil. $30 en créditos trial.

## Recursos

- Guía: [fly.io/sprites/jev](https://fly.io/sprites/jev) · Conectores: [fly.io/connectors](https://fly.io/connectors)

## Relacionado

- El modelo: [[Jev (TypeSafe)]] (patrón juez, routing, guardrails)
- Sandboxes para agentes: [[HarnessRouter + UHP]] (self-hosted), [[VPS]]
- Guardrails: [[Abide]] (en nota Jev), [[Skill Recorder]]

# #agente #hosting #contenido