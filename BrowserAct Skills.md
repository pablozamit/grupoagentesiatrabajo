# BrowserAct Skills

[browser-act/skills](https://github.com/browser-act/skills) — Herramienta de automatización web para agentes de IA (Cursor, Claude, etc.) que **sortea bloqueos anti-bots, captchas y sistemas de detección** para que los agentes puedan navegar y extraer datos sin ser bloqueados.

## ¿Qué problema resuelve?

Cuando un agente de IA intenta automatizar tareas en una web (rellenar formularios, hacer check-ins, extraer datos), muchas páginas detectan que no es un humano y bloquean el acceso con captchas o sistemas anti-bot.

BrowserAct Skills actúa como un **"navegador sigiloso"** preparado para IA:

- **Falsifica huellas digitales humanas** para que el sitio no detecte que es un bot
- **Salta captchas automáticamente** en segundos
- **Reduce el consumo de tokens** hasta un 90% limpiando el código HTML y quedándose solo con el texto útil

## Características destacadas

- **"Jugada humana de respaldo"**: si el agente se queda atascado, te envía un enlace. Tú pulsas en tu móvil para resolverlo y el agente continúa sin perder el hilo.
- **Generación de scripts por voz**: le dices al agente lo que necesitas, él explora el sitio una vez y genera el script de automatización completo.
- **Compatible con navegadores locales y remotos**.

## Cómo se usa

```bash
# En la terminal de Cursor, Claude, Codex, etc.:
npx skills add browser-act/skills
```

Luego le dices en lenguaje natural: *"Ve a esta web, extrae estos datos y tráemelos"*.

Relacionado: [[Browser Use]], [[Pinchtab]], [[Agent-Reach]], [[Hermes Agent]]

# #web #agente #automacion #ia #opensource
