# OpenMausBot

**OpenMausBot** ([github.com/milind-soni/OpenMausBot](https://github.com/milind-soni/OpenMausBot), Apache-2.0, 2.1k ⭐, 89 contribuidores) es un **Grok Bot open source y self-hostable**: una app de chat donde cada contacto es un agente real con su modelo, su ordenador y sus apps. De Milind Soni, con [@BuildwithOmkarr](https://x.com/BuildwithOmkarr) difundiendo (29.5k views). Gratis siempre, sin paywall.

## La idea

Un asistente en una caja es la forma equivocada: roster de bots con personalidad, memoria de hilo, modelo, computer y apps propias. Tus logins y subs existentes (claude/codex/grok CLIs), sin proxy en medio; todo en `~/.openmausbot`.

## Capacidades

- **Un ordenador por bot**: cloud Linux (Box), VM local o tu máquina (macOS, Ubuntu Xorg opt-in; Wayland cerrado) + 500+ apps vía Composio
- **Aprueba lo que importa**: shell/edits/preguntas como tarjetas Allow/Deny; broker de permisos
- **Voz**: ElevenLabs, Fish Audio, Grok, voces Mac o Chatterbox local; llamadas en macOS
- **Rutinas + webhooks**, canales por contexto, **teams instalables desde un Markdown** (frontmatter YAML portable), **servidor MCP** para clientes externos (bounded: sin approvals ni borrados)
- Móvil (iOS/Android), desktop macOS/Win/Ubuntu, self-host Docker/Podman/VPS, Tailscale companion

## Debate del hilo (bueno)

- Sesiones vivas: cookies que rotan y 2FA a las 3am convierten tu flota en screenshot de login (Ahmed Ezat) — el autor dice que ahí son buenos
- Semántica de permisos y progreso durable: qué puede tocar, qué intentó, cuándo devolver el control (0xAIBrain)

## Recursos

- Repo y web: [github.com/milind-soni/OpenMausBot](https://github.com/milind-soni/OpenMausBot) · [openmausbot.com](https://www.openmausbot.com)

## Relacionado

- Harness local: [[HarnessRouter + UHP]], [[Orca]]
- Orquestar agentes: [[Vibe Kanban]], [[Company Brain]]
- Voces: [[Fish Audio S2.1 Pro]], [[Kyutai TTS + Unmute]]

# #agente #opensource #productividad