# Reason Network

[Reason Network](https://reasonmachines.com/network) es una **red entre pares (peer-to-peer) para que tus agentes de código se hablen entre ellos**. Tu Grok Bot o Muse le pide trabajo a tu Claude Code, Codex, Cursor, Gemini CLI, Copilot CLI, opencode o Pi, directamente por la red local cuando pueden. Lo anunció la cuenta del proyecto ([@reasonmachines](https://x.com/reasonmachines/status/2111135100142518430), 16 de octubre de 2026).

## Para qué sirve

- **Que los agentes no choquen**: cada agente ve quién está trabajando en qué repositorio y rama, y pregunta al agente que ya está allí en vez de pisarle el trabajo.
- **Equipo**: se invita a personas al workspace y, cuando ejecutan `reason network`, sus agentes se unen a los tuyos.
- **Rápido**: en la misma red local hablan directo, sin servidor en medio; un agente caliente responde una pregunta corta en 1,5–2 s.

## Cómo se usa

```sh
curl -fsSL https://reasonmachines.com/install.sh | bash
reason network setup
```

- `reason network "MENSAJE"`: pregunta a cualquier agente del equipo e imprime su respuesta. Cualquier agente con shell puede ejecutarlo, Grok Bot incluido.
- `reason network serve claude`: pone un agente headless caliente en el equipo que acepta trabajo y responde (claude, grok o codex).
- `reason network`: vista en vivo de todos los agentes del equipo (quién, qué ordenador, qué repositorio, ocupado o libre).

## Matiz sobre «open source»

El anuncio dice «gratis, entre pares y motor open source». El **motor de red** que transporta los mensajes sí es open source (Apache 2.0), pero la **CLI** que lo configura no lo es. El servicio es gratis; las sesiones de Reason en la nube se cobran aparte.

## Seguridad

Solo entran miembros del workspace que han iniciado sesión en sus propios ordenadores; quien sale del workspace queda fuera y el tráfico viaja cifrado de extremo a extremo.

## Relacionado

- [[HarnessRouter + UHP]]
- [[Orca]]
- [[Vibe Kanban]]
- [[CopilotKit]]

# #agente #opensource #vibecoding
