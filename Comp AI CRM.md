# Comp AI CRM

**Comp AI CRM** es el CRM **open source** y "agentic-first" que abrió la empresa Comp AI (la que hace SOC 2 con IA). En vez del típico CRM donde tú introduces cada dato a mano, el producto real es un **agente de investigación duradero** que investiga contactos y escribe en la base de datos. Lo abrieron porque HubSpot costaba **$80,000/año** para un equipo comercial de menos de 10 personas.

## La filosofía

> "Nothing about a person is guessed."
> (Nada sobre una persona se adivina.)

- El agente no inventa datos: cada herramienta devuelve **evidencia observada** (ej. firma de un correo, cuenta de GitHub).
- Hay un **ledger de evidencia**: la evidencia fuerte pasa a la base de datos; la débil se convierte en una **sugerencia** que un humano resuelve.
- No se usan "confidence scores": nada se registra sin respaldo.
- Un agente corre en su propio deployment y schedule: reserva seguimientos, gasta presupuesto de investigación y continúa solo (no para al cerrar el navegador).

## Cómo está construido (open source)

- Monorepo **Turborepo** con **Bun**, desplegado en [[Vercel]].
- `apps/agent` — el agente durable sobre **eve** (framework de Vercel basado en filesystem para agentes duraderos).
- `apps/app` — Next.js (App Router), shadcn/ui, nuqs.
- `apps/api` — NestJS con tRPC, auth y sync con Google.
- `db` (Prisma/Neon), `auth` (Better Auth, solo Google), `ui` (shadcn/ui), `env`.
- 18 tools (read_crm_history, search_crm, identify_contact, research_person, enrich_company, record_feature, schedule_recheck...).
- 4 skills en markdown: guías para el agente: evidence.md, identity-matching.md, data-boundaries.md, writing-a-brief.md.
- 1 **schedule** (dispatch.ts) que solo reserva las filas que tocan (`FOR UPDATE SKIP LOCKED`).
- **Sandbox** con egress denegado (nunca ve la base de datos real).

## APIs opcionales

Imprime al arrancar cuáles están activas:
- `PERPLEXITY_API_KEY` — búsqueda web
- `RAPIDAPI_KEY` — identidad en LinkedIn
- `CONTEXT_DEV_API_KEY` — datos de empresa
- El modelo se sirve por **Vercel AI Gateway** (OIDC, sin key que gestionar).

## Nota de crítica

**Nick White** señaló en público que el scheduling (`schedules/dispatch.ts`) tiene huecos de durabilidad: `retireExhausted()` dentro de un `catch {}` vacío. El autor (Lewis Carhart) reconoció que lo mejorará — la "durabilidad" aún es aspiracional en su forma actual.

## Recursos

- Repositorio: [github.com/trycompai/crm](https://github.com/trycompai/crm)
- Acceso directo https://trycompai.com

# #agente #web #opensource