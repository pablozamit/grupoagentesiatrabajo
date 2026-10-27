# Handraw-Style Skill

**handraw-style** ([github.com/yang0/handraw-style](https://github.com/yang0/handraw-style)) es una **skill de prompts para generar imágenes con estilo de dibujo a mano**: eliges un **número de estilo** y un tema, y devuelve **prompts bilingües (chino/inglés) con el nombre del estilo** listos para pegar en la IA de imágenes.

## Cómo funciona

1. Abres la **galería numerada** de estilos y eliges un número (p. ej. `041`).
2. Escribes `número + tema` (`041号风格, 主题: ...`).
3. Obtienes el prompt bilingüe con el estilo identificado; lo pegas en Midjourney, DALL·E 3, Stable Diffusion o Flux.

Si no quieres elegir número, la skill también **recomienda estilo + combinación de color** para un tema dado, o **completa lo que falte** (si das solo el color, propone estilo, y viceversa). Tiene modos **solo imagen** (el tema decide el contenido) y **imagen + texto** (el texto participa en la composición, útil para pósters y tarjetas).

## Contenido y evolución

- El tuit de [@369Serena](https://x.com/369Serena/status/2097932112447898096) anunciaba **261 estilos** en siete grupos (editorial/humor, libro ilustrado, gráfico moderno, ilustración japonesa contemporánea, china, medios/regional y nuevos).
- El [repo actual](https://github.com/yang0/handraw-style) ya lista **001–331 estilos** + **165 tipos de maquetación** (tarjetas sociales, infografías, viñetas de cómic, diseño de IP, e-commerce) + **36 temas de color monocromo**. Es decir, **ha crecido desde el anuncio**; anotar la cifra del tuit como atribuida.
- Detalle curioso: el autor lo probó primero con `gpt-image-2` y decide si basta con activar el estilo **por nombre** o si hay que **enviar la imagen de referencia** de ese número.
- Licencia permisiva: uso libre, modificación y **explotación comercial**, con la única petición de **conservar la autoría de yang0** y la URL del repo.

## Recursos

- Repo: https://github.com/yang0/handraw-style
- Galería de estilos: `skills/handraw-style-prompter/gallery/index.html`

## Relacionado

- [[Ian Xiaohei Illustrations]] — otra skill de ilustración hand-drawn
- [[Taste-Skill]] — criterio estético para imágenes
- [[Qwen-Image-2.1]] — generación y edición de imágenes

# #skills #diseno #contenido
