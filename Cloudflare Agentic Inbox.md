# Cloudflare Agentic Inbox

**Agentic Inbox** (repo: `cloudflare/agentic-inbox`) es un **cliente de email completo self-hosted con agente de IA integrado**, que corre entero en **Cloudflare Workers**. Apache-2.0, 7.2k ⭐, 914 forks. Resuelve el problema de SendGrid/Postmark/Resend: **sin APIs de terceros, sin factura por email, todo en tu propia cuenta de Cloudflare**. Difundido en español por [@Fluyeporlaweb](https://x.com/Fluyeporlaweb).

## La arquitectura

```
┌──────────────┐     ┌──────────────────┐     ┌─────────────────┐
│   Browser    │────>│  Hono Worker     │────>│  MailboxDO      │
│  React SPA   │     │  (API + SSR)     │     │  (SQLite + R2)  │
│  Agent Panel │     │                  │     └─────────────────┘
└──────┬───────┘     │  /agents/* ──────┼────>┌─────────────────┐
       │             │                  │     │  EmailAgent DO  │
       │ WebSocket   │                  │     │  (AIChatAgent)  │
       └─────────────┤                  │     │  9 email tools  │
                     │                  │────>│  Workers AI     │
                     └──────────────────┘     └─────────────────┘
```

- **Cada buzón corre en su propio Durable Object** con base de datos **SQLite aislada**
- Los emails entran por **Cloudflare Email Routing**; los adjuntos van a **R2**
- El agente de IA (Cloudflare Agents SDK, modelo Kimi K2.5 vía Workers AI) **lee tu bandeja, busca conversaciones y redacta respuestas**

## Lo que hace

- **Cliente de email completo**: envío, recepción, hilos, carpetas, búsqueda y adjuntos (composer rich text, reply/forward threading)
- **9 herramientas del agente**: leer, buscar, redactar, responder, reenviar y más
- **Auto-draft cuando llega email nuevo**: el agente lee los inbound y genera borradores automáticamente — **pero nunca envía nada sin tu confirmación explícita**
- **System prompt personalizado por buzón**
- **Historial de chat persistente** con el agente entre sesiones (streaming markdown, visibilidad de tool calls)
- **Compatible con MCP y Wrangler CLI** — tus agentes pueden enviar email directamente
- **Sin SPF, DKIM ni DMARC manual** — Cloudflare lo gestiona solo
- **Deploy con un clic** desde el repo

## Stack

Frontend: React 19, React Router v7, Tailwind, Zustand, TipTap. Backend: Hono, Workers, Durable Objects (SQLite), R2, Email Routing. AI: Cloudflare Agents SDK, AI SDK v6, Workers AI. Auth: Cloudflare Access JWT (requerido en producción).

## Setup

1. **Deploy to Cloudflare** — aprovisiona R2, Durable Objects y Workers AI automáticamente (te pide `DOMAINS`)
2. **Configura Cloudflare Access** — setea `POLICY_AUD` y `TEAM_DOMAIN` como secrets del Worker
3. **Email Routing** — crea un catch-all rule que reenvíe a este Worker
4. **Email Service** — el binding `send_email` para salientes
5. **Crea un mailbox** en la app (ej: hello@example.com)

## Nota de seguridad importante

Cualquier usuario que pase la política de Cloudflare Access puede acceder a **todos** los buzones por diseño. Esto incluye el **MCP server en /mcp** — herramientas externas (Claude Code, Cursor) conectadas vía MCP pueden operar sobre cualquier mailbox pasando `mailboxId`. **No hay autorización por buzón; la política de Access es la única frontera de confianza.** La app además fuerza Access en producción para que tu inbox no quede expuesto a internet.

## Recursos

- Repositorio: [github.com/cloudflare/agentic-inbox](https://github.com/cloudflare/agentic-inbox)
- Blog: Cloudflare "Email for Agents" (Agents SDK + MCP + Wrangler CLI)
- Difusión: [@Fluyeporlaweb en X](https://x.com/Fluyeporlaweb)

## Relacionado

- Email para agentes: [[Atomic Mail]]
- Cloudflare para agentes: [[Cuentas Temporales de Cloudflare]], [[free-for.dev]]
- Plataformas self-hosted: [[OpenShip]], [[AnythingLLM]]

# #agente #opensource #hosting #oportunidades