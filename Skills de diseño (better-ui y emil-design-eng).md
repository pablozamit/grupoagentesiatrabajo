# Skills de diseño (better-ui y emil-design-eng)

Dos repos de **skills de diseño para agentes** (MIT, instalables con `npx skills add`) que protagonizan el caso viral del CRM en 2 días:

- **better-ui** ([jakubkrehel/skills](https://github.com/jakubkrehel/skills), 5.9k ⭐): colección que mejora interfaces por disciplinas — better-ui (radios concéntricos, alineación óptica, hit areas...), better-typography, better-colors, better-layout, better-accessibility, better-writing + `interface-review` (auditoría cruzada) y `variant` (múltiples versiones para iterar)
- **emil-design-eng** ([emilkowalski/skills](https://github.com/emilkowalski/skills), 35.9k ⭐, 250k installs): la filosofía de diseño de Emil Kowalski (ex-Vercel/Linear) — animación con criterio (curvas, duraciones, qué animar y qué no), `review-animations`, `animation-vocabulary` (pedir animaciones con las palabras exactas) y `pick-ui-library`

## El caso: CRM Next.js en 2 días

Marcel ([@marcelkargul](https://x.com/marcelkargul), 1.4M views) construyó un **dashboard CRM completo en Next.js en ~2 días** con Claude Fable 5.1 + estas dos skills ([demo viva](https://sales-crm-kargulstudio.vercel.app)).

## Matices honestos del propio hilo

- El **diseño se hizo a mano en Figma**, no lo generó Fable: el modelo implementó, el gusto vino de fuera
- "Dos días para un CRM es un problema de gusto UI, no de codegen": las skills resuelven la consistencia visual; lo que come el segundo día es **datos reales y auth** (OnFinality)
- Hay quien dice lograrlo con Opus 4.8 **sin skills** (Chad Moran): las skills aceleran, no hacen magia

```bash
npx skills add jakubkrehel/skills
npx skills@latest add emilkowalski/skills
```

## Recursos

- Repos: [jakubkrehel/skills](https://github.com/jakubkrehel/skills) · [emilkowalski/skills](https://github.com/emilkowalski/skills)
- Caso: [@marcelkargul en X](https://x.com/marcelkargul)

## Relacionado

- Framework anti-slop: [[Taste-Skill]]
- Directorios de skills: [[UI Skills]], [[Open Design]]
- Metodología con referencias: [[Workflow de diseño con IA (Breeje Anadkat)]]
- Generación 3D con frontier: [[Pietro Schirano (@skirano)]] (Fable 5 en webs cinematográficas)

# #skills #diseno #vibecoding