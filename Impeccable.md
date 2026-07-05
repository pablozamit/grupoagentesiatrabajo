# Impeccable

Skill de diseño para agentes de IA (Claude Code, Codex, Cursor, GitHub Copilot, Gemini CLI, OpenCode) que da a la IA un vocabulario de diseño real para que sus interfaces no parezcan generadas.

- **Web**: [impeccable.style](https://impeccable.style)
- **Instalación**: `npx impeccable install`
- **Creador**: Paul Bakaus (ex-Google, ex-Figma)
- **Respaldado por**: a16z, en partnership con GitHub

## Qué resuelve

Las interfaces generadas por IA comparten el mismo "look de IA": gradientes púrpura, glassmorphism, cards idénticas anidadas en más cards. Impeccable le da al agente un vocabulario de diseñador real + comandos para pedir lo exacto sin explicarlo.

## Comandos principales

| Comando | Función |
|---------|---------|
| `/impeccable craft` | Shape-then-build: diseño + implementación |
| `/impeccable shape` | Design brief mediante descubrimiento |
| `/impeccable critique` | Review de diseño con scoring |
| `/impeccable audit` | Chequeo técnico 5 dimensiones (P0-P3) |
| `/impeccable typeset` | Arregla tipografía genérica |
| `/impeccable layout` | Arregla espaciado y ritmo visual |
| `/impeccable colorize` | Añade color estratégico |
| `/impeccable animate` | Movimiento con propósito |
| `/impeccable delight` | Micro-momentos de personalidad |
| `/impeccable bolder` | Más impacto |
| `/impeccable quieter` | Menos ruido |
| `/impeccable overdrive` | Shaders, física, 60fps, transiciones |
| `/impeccable distill` | Sustracción radical |
| `/impeccable clarify` | Reescribe UX copy confusa |
| `/impeccable adapt` | Adapta a múltiples dispositivos |
| `/impeccable polish` | Pase final meticuloso |
| `/impeccable optimize` | Diagnóstico y mejora de rendimiento |
| `/impeccable harden` | Edge cases, i18n, estados de error |

## Detección de slop (CI)

```bash
npx impeccable detect src/
```

44 reglas deterministas (sin LLM). Detecta gradient-text, side-stripe-border, ai-color-palette y otros anti-patrones. Sale con exit code para CI/CD.

## Modos

- **Brand mode**: landing pages, storytelling
- **Product mode**: dashboards, apps, datos

## Diseño system-aware

- Lee tokens, componentes y convenciones del proyecto
- Escribe DESIGN.md en formato Google Stitch
- Hereda el sistema en vez de sobrescribirlo

## Live Mode (beta)

Selecciona cualquier elemento en tu dev server, deja un comentario, y genera 3 variantes en producción vía HMR.

## Recursos

- Web: [impeccable.style](https://impeccable.style)
- Chrome extension: Chrome Web Store
- CLI (npm): `npx impeccable`
- GitHub: [github.com/impeccable-ai](https://github.com/impeccable-ai)

# #diseno #web #agente #ux #herramientas
