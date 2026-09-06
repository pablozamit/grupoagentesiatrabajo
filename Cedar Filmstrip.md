# Cedar Filmstrip

El **Filmstrip** es el componente de carrusel del **design system Cedar** de REI Co-op (la cooperativa de outdoor). En `rei/rei-cedar` (`src/components/filmstrip/`), escrito en **Vue 3 + TypeScript**, MIT. Es un carrusel "multi-card": muestra varios bloques de contenido por vista (a diferencia de un carousel clásico que muestra uno).

## Qué es un filmstrip vs un carousel

| | Filmstrip | Carousel |
|---|---|---|
| Muestra | **Varios** bloques por vista | **Uno** por vista |
| Uso | Teaser de productos, eventos, artículos, categorías | Cuando el usuario debe enfocarse en un contenido a la vez |
| Reglas Cedar | 3-6 bloques por vista, máx 5 swipes | — |

## Arquitectura: adapter-based (el patrón que lo hace potente)

El filmstrip no renderiza frames hardcodeados: usas un **adapter** que transforma tu modelo de datos en una config que `CdrFilmstrip` renderiza. Te da control total sobre cómo se forman, renderizan y describen los frames sin acoplar estructura al componente.

```ts
import type { CdrFilmstripAdapter, CdrFilmstripConfig, CdrFilmstripFrame } from '@rei/cedar';

const adapter: CdrFilmstripAdapter<Frame> = (model) => {
  const { items = [] } = model as { items?: Frame[] };
  const frames: CdrFilmstripFrame<Frame>[] = items.map((item, index) => ({
    key: `frame-${index}`,
    props: item,
  }));
  return {
    component: FrameComponent,   // componente Vue para cada frame
    frames,
    filmstripId: 'example',
    description: 'Example filmstrip',
  };
};
```

La `CdrFilmstripConfig` acepta `framesGap`, `framesToShow`, `focusSelector` y más. El componente `component` recibe los `props` de cada frame y se trata como un componente Vue standalone.

## Estructura recomendada (modular)

```
custom-filmstrip/
├── Main.vue          # Entry point: imports adapter, frame, handlers
├── Frame.vue         # Componente Vue que renderiza cada frame
├── adapter.ts        # Transforma datos crudos → config del filmstrip
├── handlers.ts       # Handlers: onFrameClick, onResize
└── index.d.ts        # Tipos de props del frame y del modelo
```

## Responsive y eventos

- **Resize**: el evento `resize` deja setear `framesToShow`/`framesToScroll` por breakpoint (`CdrBreakpointMd` → 3 visibles, 2 por scroll)
- **Custom events**: usa `provide`/`inject` de Vue para emitir eventos desde frames anidados (ej: `frameClick`) sin relación padre-hijo directa — útil para coordinación con sistemas externos o telemetría

## Accesibilidad (incluida)

- **Semantic roles**: frames con roles y ARIA apropiados
- **Keyboard navigation**: navegación con flechas y focus estándar

## Para qué sirve en la enciclopedia

Es un ejemplo de **componente de carrusel accesible y data-driven** para copiar/adaptar en proyectos web (product recommendations, teasers, categorías). Su patrón adapter lo hace interesante para **generar carruseles con agentes**: el agente solo define el adapter + el frame y el componente hace el resto. Forma parte de un design system real de producción (REI.com).

## Recursos

- Componente: [github.com/rei/rei-cedar/tree/main/src/components/filmstrip](https://github.com/rei/rei-cedar/tree/main/src/components/filmstrip)
- Repo completo: [github.com/rei/rei-cedar](https://github.com/rei/rei-cedar)
- Docs oficiales: [cedar.rei.com/components/filmstrip](https://cedar.rei.com/components/filmstrip)
- Design system: [cedar.rei.com](https://cedar.rei.com/)

## Relacionado

- Componentes UI listos para copiar: [[Uiverse]], [[21st.dev]], [[Iconiq]]
- Design systems para agentes: [[Taste-Skill]], [[8 Prompts de Diseño para Agentes de IA]]
- Web con componentes: [[Comp AI CRM]], [[Landingfolio MCP]]

# #diseno #web #vibecoding #opensource