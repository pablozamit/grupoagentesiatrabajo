# scroll-world

**scroll-world** es una skill open source de agente (Claude Code, Codex y cualquiera compatible con SKILL.md) que genera, a partir de un prompt, una landing page del tipo "fly through the world": mientras haces scroll, una **cámara vuela del exterior de cada escena a su interior** y pasa a la siguiente escena **sin cortes** (como las product pages scroll de Apple o el sitio de Emons Logistics). Autor: **cyw** (fundador/CTO de Hermai AI), 7.1k estrellas en GitHub.

## Qué hace a partir de un prompt

Le describas tu marca y las escenas, por ejemplo: *"Marca de café. Empieza fuera de la planta. Vuela a la instalación de tostado. Pasa por el empaquetado. Aterriza en la cafetería."* y genera:

- Los **stills isométricos** de cada escena (GPT Image 2)
- Los **vuelos de cámara** (Seedance image-to-video vía Monid por defecto)
- Los **clips conector** entre escenas, generados desde los frames reales de ambos vecinos → cada unión es **pixel-idéntica**: sin parpadeo, sin cortes, un solo vuelo continuo
- Un **motor de scrub en vanilla JS** (blob-seek, lazy load, crossfade de uniones) portable a HTML plano, Next.js o Vue

## El truco técnico (la lección de fondo)

> "Scroll-driven camera flights son solo scroll position mapeado a un timeline." (comentario de Eli Benveniste)

El precio de agencia es por los **assets 3D y el motion design**, no por el mecanismo de scroll en sí. scroll-world automatiza la parte cara (imágenes + vuelos + uniones) para que ese mecanismo sea barato.

## Numeritos de coste

| Quién lo hace | Coste |
|---|---|
| Agencia storytelling (Noomo, WithLore, Utsubo) | $15.000 - $100.000 (3-6 meses) |
| Freelancer senior nivel Awwwards | desde $8.000 |
| Freelancer Three.js multi-scena + GSAP scroll | $3.500 - $8.000 |
| Especialista Three.js | $75 - $150/hora |
| **scroll-world** | **$0 (skill) + ~$27 por una cadena de 6 escenas 1080p en Monid** |

## Instalación

```bash
# Claude Code (recomendado, como plugin)
/plugin marketplace add oso95/scroll-world
/plugin install scroll-world@scroll-world

# Codex y otros agentes (CLI de skills de Vercel)
npx skills add oso95/scroll-world            # elige tus agentes al prompt
npx skills add oso95/scroll-world -a codex   # o targetea Codex
```

Requisitos: **Monid CLI** con API key + balance (backend por defecto, billing por clip), o **Higgsfield CLI** autenticado (fallback: renderiza los stills, kling3_0 y la cadena), `ffmpeg/ffprobe`, Python3 + Pillow, y opcionalmente el **CLI de Codex** (para stills vía GPT Image con tu suscripción de ChatGPT).

## Cómo se comporta la skill en ejecución

- **Entrevista**: tema/industria + pitch, brand kit (importar de URL, entregar o proponer), dirección de arte, escenas ordenadas, si quiere versión móvil (cadena **9:16 nativa en vertical**, compuesta para móviles, no un recorte), y el presupuesto (con estimación de créditos **antes de gastar**).
- **Genera**: un still por escena, un clip "dive-in" por escena y los conectores frame-idénticos; versión móvil opcional en paralelo.
- **Cablea**: el motor de scrub config-driven que reproduce toda la cadena como un vuelo único.

## Limitaciones (comentarios reales)

- El **código generado no es reutilizable/fácil de modificar**: reemplazar contenido alucinado por modelos 3D/locaciones reales te devuelve a las estimaciones altas.
- Necesitas **assets 3D decentes** para que se vea bien (el coste barato no garantiza buen aspecto).
- Crítica de UX: algunos ven el scroll-hooking como "disjointed" (la cadencia del scroll no siempre encaja con el easing de la cámara).

## Recursos

- Repositorio: [github.com/oso95/scroll-world](https://github.com/oso95/scroll-world)
- Autor: [@the_cyw](https://x.com/the_cyw)

## Relacionado

- Mismo tipo de experiencia 3D de scroll: [[The Complete Shelf]], [[Whitespace Experiments]]
- Base 3D: [[Three.js]], alternativa ligera [[BroMetal]]
- Otras skills de agente para gráficos: [[Three.js Awesome Graphics Agent Skills]], [[Meng To Three.js Game Skills]]

# #3d #web #skills #diseno