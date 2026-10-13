# UI Skills

[UI Skills](https://www.ui-skills.com) es un **directorio de skills** (habilidades) para agentes de IA (Claude Code, Cursor, etc.) centradas en **diseño y desarrollo frontend**.

## Qué es

- Skills que le enseñas a tu agente para que diseñe y programe mejor
- Cada skill tiene un enfoque concreto: revisar accesibilidad, animar componentes, auditar rendimiento, etc.
- Las crea la comunidad y se instalan con un solo clic

## Skills destacadas

- **baseline-ui** — valida animaciones, tipografía y accesibilidad en proyectos Tailwind
- **fixing-accessibility** — audita y corrige problemas de accesibilidad (ARIA, teclado, contraste)
- **fixing-motion-performance** — revisa y optimiza rendimiento de animaciones
- **frontend-design** — genera interfaces con diseño cuidado, evitando el estilo genérico de IA
- **wcag-audit-patterns** — auditorías completas de accesibilidad WCAG 2.2
- **shadcn** — flujo de trabajo para componentes shadcn/ui
- **emil-design-eng** — filosofía de diseño-ingeniería de Emil Kowalski
- **12-principles-of-animation** — aplica los 12 principios de animación de Disney a interfaces web
- **react-doctor** — detecta regresiones en seguridad, rendimiento y arquitectura React

## Cómo usar una skill

Las skills se instalan en tu agente de IA (Claude Code, Cursor, Codex, etc.). Cada una le enseña a tu agente un patrón específico para que diseñe, audite o programe mejor.

Entras en [ui-skills.com](https://www.ui-skills.com), eliges la skill, la instalas, y luego le pides a tu agente que la use.

## UI Skills CLI (nuevo)

Repo [ibelick/ui-skills](https://github.com/ibelick/ui-skills) (MIT, 8.1k ⭐): en vez de elegir tú, el agente encuentra **la mejor skill de diseño-ingeniería para el trabajo** y la usa como contexto. Pídele a Codex, Cursor, Claude Code o cualquier agente:

```
"use `npx ui-skills start` to fix the motion in this dialog"
```

Comandos: `start` (routear a la skill mínima útil con `ui-skills-root`), `categories`, `list --category motion`, `get baseline-ui`. Regla de oro del router: **1 skill por defecto, máximo 3**. También hay servidor MCP (`ui-skills.com/mcp`) y playbook con lecciones destiladas. Anuncio (63.3k views): [@Ibelick en X](https://x.com/Ibelick).

## Ejemplo público: dashboard sales-crm

El [repositorio de Kargul](https://github.com/kargulstudio/sales-crm) contiene un starter Next.js 16, React 19 y Tailwind 4 con documentación de convenciones/optimización. La licencia actual consultada es MIT, aunque el [hilo de lanzamiento](https://x.com/marcelkargul/status/2106706492317671503) conserva preguntas sobre su ausencia inicial. No describirlo como CRM de producción completo solo por una interfaz pulida: comprobar persistencia, permisos, autenticación y mantenimiento en el código real.

El autor atribuye el diseño a [better-ui](https://skills.sh/jakubkrehel/skills/better-ui) y [emil-design-eng](https://skills.sh/emilkowalski/skills/emil-design-eng). Son recursos de diseño verificables, no prueba de que todo dashboard se construya en dos días ni de un resultado garantizado del modelo citado. El vídeo muestra navegación de interfaz; no una auditoría de backend. Ver [[Checklist web vibecodeada]].

# #diseno #vibecoding #agente
