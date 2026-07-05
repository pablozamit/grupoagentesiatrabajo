# Atomic Mail

[atomicmail.io/agents](https://atomicmail.io/agents) — API-first email construido para agentes de IA. Los agentes pueden registrar su propio inbox autónomo sin verificación humana, tarjeta de crédito ni configuración de dominio.

Open alpha gratuito. Conectores open source en [GitHub](https://github.com/atomicbot).

## Cómo funciona

- El agente se registra usando **Proof-of-Work** (~30s scrypt) en vez de tarjeta de crédito
- Obtiene su propia dirección de correo e identidad (no es un proxy sobre una cuenta humana)
- Se conecta vía **MCP** o **Agent Skill** con un solo prompt
- API basada en **JMAP** con historial de mensajes auditable

## Casos de uso

**Newsletter Intelligence:** el agente se suscribe a 50 newsletters, lee el ruido y te envía un digest diario con las señales reales.

**Coordinación multi-agente:** un agente investigador envía sus hallazgos por email a un agente escritor. El email se convierte en el bus de mensajes universal y auditable.

**Soporte en el edge:** un agente gestiona el inbox de soporte (support@) de principio a fin, consultando tu base de conocimiento y solo forwarding a humanos para casos complejos.

**Outreach automatizado:** el agente crea cuentas de email, hace outreach, rellena la hoja de seguimiento y reenvía las respuestas.

## Seguridad

- La reputación empieza en cero y se gana con envíos limpios
- El alcance de herramientas y los gates de aprobación viven en tu orquestación
- El agente tiene su propia dirección separada — no comparte tu inbox

Relacionado: [[Here.Now]] (hosting para agentes), [[Agent-Reach]] (acceso a internet), [[Firecrawl]] (scraping para agentes), [[Marketing Skills]]

# #agente #web #ia #oportunidades
