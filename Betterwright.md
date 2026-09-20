# Betterwright

**Betterwright** ([betterwright.com](https://betterwright.com), repo `BetterWright/betterwright`, MIT) es un **navegador persistente para agentes de IA**: un Playwright con política de red, **vault cifrado de credenciales**, proof screenshots y resolución de CAPTCHAs que tu agente maneja por turnos. Dos modos: tu agente pilota paso a paso (skill, MCP, CLI o JS API) o delegas la tarea entera (`betterwright exec "..."`) y recibes un JSON.

## Instalación

```bash
npm install -g betterwright && betterwright init
```

```bash
betterwright cookies sync chrome --all   # trae logins y cookies de Chrome
betterwright skill --install             # instala la skill en tus hosts
```

Logins, cookies y perfil **persisten** entre invocaciones. Funciona con Claude Code, Codex, Cursor, Pi, Hermes o cualquier cliente MCP.

## El caso viral: $21.000 en créditos gratis

Nav ([@NavDoesTech](https://x.com/NavDoesTech), 16.7k views) le pidió que investigara y solicitara **créditos startup** sin ayuda: Cloudflare ($10.000) + Microsoft for Startups ($5.000) + Sentry ($5.000) + AWS Activate ($1.000). Matiz de las respuestas: esos programas exigen **elegibilidad** (startup real, a veces funding o red VC) — el agente automatiza el papeleo, no los requisitos.

## Recursos

- Web y docs: [betterwright.com](https://betterwright.com)
- Repo: [github.com/BetterWright/betterwright](https://github.com/BetterWright/betterwright)
- Caso: [@NavDoesTech en X](https://x.com/NavDoesTech)

## Relacionado

- Agente navegador open source: [[Browser Use]] (con [[Jev (TypeSafe)]] vía jev-ultrafast)
- Navegadores para agentes: [[Moli Browser]], [[Camofox Browser]], [[Polar Browser]]
- Créditos gratis para infra: [[free-for.dev]]

# #agente #web #opensource