# Ian Xiaohei Illustrations

[Ian Xiaohei Illustrations](https://github.com/helloianneo/ian-xiaohei-illustrations) es un **Codex Skill** open source que enseña a un agente de IA a generar **ilustraciones corporativas para artículos en chino** con un estilo muy concreto: blanco, hand-drawn, ligero ecléctico.

## Qué es

- Un **skill para Codex** (se instala en la carpeta de skills de Codex)
- Genera **4-8 imágenes por artículo** en formato 16:9 horizontal
- Estilo visual fijo: **fondo blanco puro, líneas negras dibujadas a mano, mucho espacio en blanco, anotaciones pequeñas en rojo, naranja y azul**
- IP visual: **"Xiaohei" (小黑)** — un personaje pequeño, negro, con ojos de punto blanco, que participa en la acción central de cada imagen

## Filosofía del estilo

- **No es una ilustración genérica ni un infográfico PPT**: es una herramienta para **convertir una idea, un flujo, un juicio o una metáfora en una imagen con memoria**
- Cada imagen muestra **un único punto cognitivo** del artículo
- Xiaohei **siempre participa en la acción**; si quitándolo la imagen sigue funcionando, está demasiado decorativo
- El estilo es **extraño pero limpio**: ni infantil, ni comercial, ni plano

## Para qué sirve

Cuando escribes un artículo, post o documento de Notion en chino y necesitas ilustraciones coherentes que:

- Acompañen al texto sin robarle protagonismo
- Tengan una **lengua visual consistente** entre sí
- Representen conceptos abstractos (juicios, flujos, estructuras, metáforas) con imágenes extrañas pero memorables
- Puedan ser producidas en bloque por un agente, no una a una

## Instalación

```bash
git clone https://github.com/helloianneo/ian-xiaohei-illustrations.git
cd ian-xiaohei-illustrations

mkdir -p "${CODEX_HOME:-$HOME/.codex}/skills"
cp -R ./ian-xiaohei-illustrations "${CODEX_HOME:-$HOME/.codex}/skills/"
```

## Uso desde Codex

Una vez instalado el skill, basta con invocarlo en un prompt:

```
Use $ian-xiaohei-illustrations 为这篇中文文章设计并生成 5 张小黑怪诞正文配图。
```

Variantes útiles:

- **Solo planificar** (sin generar imágenes): pedir un shot list con tema, mensaje, estructura, acción de Xiaohei y anotaciones
- **Generación directa**: pegar el artículo y pedir 4-8 imágenes
- **Una sola imagen**: para una frase o concepto concreto
- **Editar imagen existente**: quitar un título, ajustar texto

## Estructura interna

El repositorio incluye:

- `SKILL.md` — definición del skill
- `agents/openai.yaml` — configuración del agente
- `assets/examples/` — ejemplos de estilo
- `references/style-dna.md` — ADN del estilo visual
- `references/xiaohei-ip.md` — guía del personaje Xiaohei
- `references/composition-patterns.md` — patrones de composición
- `references/prompt-template.md` — plantilla de prompt
- `references/qa-checklist.md` — checklist de calidad

## Limitaciones

- **Orientado a chino**: las anotaciones están pensadas para caracteres chinos; en otros idiomas puede perder precisión tipográfica
- **No produce SVG / HTML / Canvas** editables, solo PNG
- **No es para KV comerciales, pósters o contenido infantil**
- **No se debe replicar literalmente** los ejemplos: cada artículo debe reinventar la metáfora

## Recursos

- Repositorio: [github.com/helloianneo/ian-xiaohei-illustrations](https://github.com/helloianneo/ian-xiaohei-illustrations)
- Licencia: MIT
- Web relacionada: [www.ianneo.xyz](https://www.ianneo.xyz)

# #diseno #contenido #vibecoding
