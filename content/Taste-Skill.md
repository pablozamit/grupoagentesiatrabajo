# Taste-Skill

**Repo:** [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) — 47.3k ⭐ — [tasteskill.dev](https://tasteskill.dev)

Framework de skills portátiles que dan **buen gusto** a los agentes de IA al generar interfaces. Creado por [Leon Lin](https://x.com/LexnLin). Instalable con `npx skills add` o copiando `SKILL.md` en el proyecto / conversación.

## Skills de código incluidas

| Skill | Install name | Para qué |
|---|---|---|
| **Taste-Skill** (v2) | `design-taste-frontend` | Default: lee el brief, infiere el lenguaje visual, ajusta 3 diales (VARIANCE / MOTION / DENSITY) |
| **Taste-Skill v1** | `design-taste-frontend-v1` | Original preservado para proyectos que dependen de su comportamiento exacto |
| **GPT Taste** | `gpt-taste` | Variante más estricta para GPT/Codex: layout variance, GSAP, anti-slop agresivo |
| **Image to Code** | `image-to-code` | Pipeline: generar imágenes de referencia → analizar → implementar frontend |
| **Redesign** | `redesign-existing-projects` | Para proyectos existentes: auditar primero, luego arreglar layout, espaciado, jerarquía |
| **High-End Visual Design** | `high-end-visual-design` | UI tranquila y cara: contraste suave, mucho espacio, tipografía premium, spring motion |
| **Full Output Enforcement** | `full-output-enforcement` | Cuando el modelo entrega trabajo a medias: forzar salida completa, sin placeholders |
| **Minimalist** | `minimalist-ui` | UI editorial tipo Notion/Linear, paleta contenida, estructura nítida |
| **Industrial Brutalist** | `industrial-brutalist-ui` | Lenguaje mecánico duro: tipografía suiza, contraste marcado, layout experimental |
| **Stitch** | `stitch-design-taste` | Compatible con Google Stitch, con exportación opcional a DESIGN.md |

## Skills de generación de imágenes

| Skill | Install name | Para qué |
|---|---|---|
| **Imagegen Frontend Web** | `imagegen-frontend-web` | Comps de web: hero, landing, multi-sección con tipografía fuerte y anti-slop |
| **Imagegen Frontend Mobile** | `imagegen-frontend-mobile` | Pantallas y flujos mobile: iOS/Android, mockups, tipografía legible |
| **Brandkit** | `brandkit` | Boards de identidad: direcciones de logo, paletas, tipografía, aplicaciones |

## Instalación

```bash
# Todas las skills
npx skills add https://github.com/Leonxlnx/taste-skill

# Una skill específica
npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend"
```

## Diales ajustables (taste-skill)

Tres números 1-10 al inicio del `SKILL.md`:

- **DESIGN_VARIANCE** — Experimentación del layout (bajo: centrado/limpio · alto: asimétrico/arriesgado)
- **MOTION_INTENSITY** — Profundidad de animación (bajo: hover · alto: scroll/magnético)
- **VISUAL_DENSITY** — Información por viewport (bajo: espacioso · alto: dashboards densos)

Relacionado: [[8 Prompts de Diseño para Agentes de IA]], [[UI Skills]], [[Compact Landing]], [[DesignEngineer.tools]]

# #diseno #vibecoding #agente #ia #recursos
