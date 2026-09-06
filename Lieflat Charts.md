# Lieflat Charts

**Lieflat Charts** (repo: `larashero3-dotcom/lieflat-charts`) es una **skill de data visualization y reportes para agentes de IA** (moxt, Claude Code, Codex y cualquiera compatible con SKILL.md) que convierte datos en **gráficos HTML de estética editorial top-tier**. 4.8k ⭐. Creada por "躺在废墟里 Lieflat" (periodista reconvertida en AI builder), producida en moxt.ai.

## La idea

No es "otra librería de charts": establece una **gramática visual propia** a través de fuentes, whitespace, líneas y animaciones unificadas, con **60+ tipos de gráficos** (bar, line, area, histograma, heatmap, violin, chord, Sankey...) y una filosofía distinta:

- **Primero juzga el contrato de datos, luego elige el gráfico** — no coge un template de la librería
- **Cada gráfico sostiene una conclusión independiente**, luego se compone la página (no dibujar todos los campos)
- **Unidades de datos reales como átomo visual** — no decoración para simular densidad
- **Título, anotaciones, fuentes, whitespace y animación son parte del gráfico**
- **Dos velocidades de lectura**: Lupi (lenta, editorial) y Glance (rápida, dashboard)

## Los estilos visuales

| Estilo | Lectura | Para qué |
|---|---|---|
| **Lupi Editorial** | Lenta, detallada | Años, papers, artículos largos, posters, portfolios; hairline, whitespace, ledger-style guides, anotaciones |
| **Glance** | Rápida, agregada | Weeklies, dashboards, monitorización; barras gruesas, números grandes, sorting claro |
| **Basics** | Intermedia | Formas conocidas (bar/line/donut) con acabado editorial; para datos simples |
| **Interactive** | — | Networks, paths, flujos multi-segmento con hover/drag (ECharts/SVG) |

**Color**: Mono (blanco/negro/grises) como base estable + 3 presets de color (青瓷蓝 Porcelain, 椰林绿 Palm, 编辑部红 Editorial Red). El agente elige automáticamente según estructura de datos; puede usar brand colors custom.

## Report mode

Además de gráficos sueltos, genera **reportes HTML completos de una página** desde 12 plantillas (chino/inglés): research briefs, informes anuales, business data reports, finanzas/economía, dashboard, posters, fitness/viajes personales. Solo cuando el usuario pide reporte/año/mes/whitepaper/poster/brief.

## Instalación y uso

```bash
npx skills add https://github.com/larashero3-dotcom/lieflat-charts --skill lieflat-charts
```

O pídele al agente que clone `https://github.com/larashero3-dotcom/lieflat-charts` a `~/.claude/skills/lieflat-charts` y verifique `SKILL.md`, `templates/`, `catalog.md`, `mono-tokens.js`.

Ejemplos de prompts:
- "Convierte esta investigación en 5 gráficos estilo Lupi Editorial para un artículo largo"
- "Haz un gráfico Glance de esta semana que se entienda en 10 segundos"
- "Lee este paper, encuentra las conclusiones de datos más relevantes y haz una página HTML completa"
- "Usa el preset 青瓷蓝, usa luminosidad para el tamaño de los valores"

## Estructura

```
├── SKILL.md              # workflow y reglas del agente
├── catalog.md            # 49 tipos de gráfico con su contrato de datos
├── report-catalog.md     # 12 plantillas de reporte
├── mono-tokens.js        # visual tokens compartidos
├── color-presets.js      # 3 presets de color
├── templates/            # Lupi, Basics, Glance, Interactive + reports/
├── examples/             # casos con datos públicos reales
└── scripts/validate.mjs
```

## Licencia

**PolyForm Noncommercial 1.0.0** — aprendizaje, modificación, sharing y uso no comercial gratis; uso comercial requiere licencia.

## Recursos

- Repositorio: [github.com/larashero3-dotcom/lieflat-charts](https://github.com/larashero3-dotcom/lieflat-charts)
- Autora: [@Zhiyu333 en X](https://x.com/Zhiyu333)

## Relacionado

- Skills de diseño para agentes: [[Taste-Skill]], [[UI Skills]], [[Open Design]]
- Datos y visualización: [[Glosario]], [[Bento]]
- HTML como formato de salida: [[HyperFrames]], [[Bento]]

# #diseno #skills #agente #contenido