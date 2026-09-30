# InstaCloud

**InstaCloud** ([instacloud.com](https://www.instacloud.com), de InsForge, respaldado por Y Combinator) es un **cloud diseñado para que lo opere tu agente, no tú**: base de datos (Postgres real), storage (buckets S3) y cómputo (contenedores en microVMs). Serverless, con humanos aprobando lo crítico.

## La idea en una frase

Las devtools las hicieron humanos para humanos (dashboards, copiar secrets al chat). Con un enjambre de agentes operando la infra hace falta lo contrario: entornos que se clonan rápido y se tiran, credenciales fuera de los prompts y todo legible para agentes.

## Las 3 primitivas + branching

- **Postgres, storage, compute** (+ redis/mysql/mongodb según CLI) por proyecto y rama
- `insta branch create feature-x` **forka todo el entorno** (DB copy-on-write, bucket clonado, cómputo clonado, máx 10 ramas): agentes en paralelo sin tocar prod
- Cada comando CLI = una API call → todo lo que haces tú lo puede hacer el agente (skill + MCP `insta-cloud`)

## Flujo típico

```bash
npx insta@latest agent setup   # CLI + skill + MCP en tus agentes
insta project create my-app
insta services add postgres db
insta deploy .                 # build remoto, solo necesita tu Dockerfile
```

Le dices a Claude/Codex/Cursor: *"Deploy this app on InstaCloud with a Postgres database wired in"* y él lo levanta con su URL y la DB inyectada.

## Precios y self-host

- $20 de crédito mensual (luego pago por uso: CPU $0.0004632/vCPU/min…); Team $499/mes
- **insta-oss**: el mismo stack en tu Docker (mismo CLI, skill y MCP) — sin lock-in

## Recursos

- Web y docs: [instacloud.com](https://www.instacloud.com) · [docs.instacloud.com](https://docs.instacloud.com/introduction.md) (con llms.txt)
- Repos: [InsForge/insta-cli](https://github.com/InsForge/insta-cli) · [InsForge/insta-skills](https://github.com/InsForge/insta-skills) · [InsForge/insta-oss](https://github.com/InsForge/insta-oss)

## Relacionado

- Deploy clásico: [[Vercel]], [[OpenShip]], [[Here.Now]]
- DBs: [[Firebase]], [[TencentDB Agent Memory]]
- Credenciales sin chat: [[Fly Sprites (Jev)]] (mismo patrón gateway), [[HarnessRouter + UHP]]

# #hosting #basededatos #agente