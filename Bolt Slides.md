# Bolt Slides

[Bolt Slides](https://bolt.fyi/agent-slides) es un **repositorio open source** de StackBlitz para crear presentaciones interactivas con agentes de IA. Cada diapositiva es una página web viva y responsive: 3D, datos en vivo, prototipos funcionales.

Repo: [stackblitz/bolt-slides](https://github.com/stackblitz/bolt-slides)

## Cómo funciona

Un agente (Claude Code, Codex, Cursor, Bolt) construye un deck donde cada slide es un componente React. El repo incluye un skill (`.bolt/skills/slides/SKILL.md`) que le enseña al agente a temarizar, componer y escribir la presentación.

Un solo prompt devuelve un deck completo y presentable.

## Componentes incluidos

| Categoría | Componentes |
|-----------|-------------|
| **Estructura** | Cover, Agenda, Section, Split, Bento, Slide |
| **Datos** | Charts (barra, línea, dona), Table, StatGrid, BigNumber, CountUp, VisualDashboard |
| **Historia** | Quote, Contrast, Comparison, Timeline, Steps, Chat |
| **Producto** | CodeWindow, BrowserFrame, Pricing, Team |
| **Flair** | Globe, TiltCard, SpotlightCard, Marquee, Accordion, Tabs |

## Atajos de presentación

| Tecla | Acción |
|-------|--------|
| → ↓ Space | Siguiente |
| ← ↑ | Anterior |
| S | Barra lateral de miniaturas |
| G | Vista de cuadrícula |
| A | Anotar (lápiz, resaltador, figuras) |
| P | Modo presentador (segunda pestaña sincronizada) |
| F | Pantalla completa |

## Tematización

Cada color, tipografía, radio y sombra vive en `src/styles/tokens.css`. Cambiar `--primary` recolorea el deck entero. Viene con 9 direcciones de tema predefinidas.

## Enlaces

- [bolt.new](https://bolt.new) — un clic, un prompt, sin setup
- [bolt.fyi/agent-slides](https://bolt.fyi/agent-slides) — repo open source
- [GitHub: stackblitz/bolt-slides](https://github.com/stackblitz/bolt-slides)

# #diseno #web #presentaciones #agente