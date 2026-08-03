# GEO — Generative Engine Optimization

Optimización para motores de generación AI (ChatGPT, Perplexity, Gemini, Claude). También conocido como AEO (Answer Engine Optimization) o LLMO.

## Caso real: Frambuesa.app 🍓

[Tomas Francisco Firbeda](https://x.com/firbedatomas) consiguió su **primer lead real desde ChatGPT** para su SaaS [Frambuesa.app](https://frambuesa.app) (POS gratuito para restaurantes). No vino de ads ni campañas — vino de alguien usando ChatGPT que encontró la app.

### Qué hizo para que funcionara

- **Metadata limpia** para que los agentes entiendan la app
- **Rutas públicas bien estructuradas**
- **Robots.txt y sitemap** optimizados
- **Base del server** configurada correctamente
- **Cloudflare** para rendimiento y seguridad
- **Tracking propio** con UTM persistidos hasta el registro
- **Dashboard interno** para leer de dónde viene cada negocio

El resultado: `utm_source=chatgpt.com` en sus analytics.

### Lección

> "No estás optimizando solo para Google. También estás optimizando para humanos + agentes."

## Checklist GEO básico

- [ ] Metadata semántica limpia (title, description, Open Graph)
- [ ] Estructura de rutas clara y lógica
- [ ] Robots.txt y sitemap.xml accesibles
- [ ] JSON-LD con schema.org (Organization, Product, FAQ, etc.)
- [ ] Velocidad de carga (Core Web Vitals)
- [ ] Contenido en lenguaje natural que responda preguntas directamente
- [ ] Enlaces internos coherentes
- [ ] Sin paywalls ni bloqueos a crawlers de IA
- [ ] `llms.txt` para guiar a los agentes sobre el contenido del sitio

## Skills y herramientas GEO

- [[Best AEO Skill]] — audita y optimiza tu web para que las IAs te citen (ChatGPT, Claude, Perplexity, Gemini, Google AI Overviews). 33 recolectores, 4 vectores de análisis, correcciones automáticas.
- [[Auditoría SEO]] — plantilla de prompt para una auditoría técnica SEO completa (incluye fase GEO y cierre del ciclo de conversión).

## La ventana del LLM SEO

**Tesis que compara el momento actual de las búsquedas por IA con el SEO de 2003**: una ventana de oportunidad corta donde las marcas que se mueven hoy dominarán la respuesta por defecto de su categoría en las IAs. Por eso las búsquedas por IA son un "2003 SEO" abierto para los próximos ~18 meses.

### La comparación con 2003

- **En 2003** podías publicar un post y rankear en Google **en una semana**; ~10 páginas podían traer 50.000 visitas/mes. Casi todas las agencias SEO de hoy nacieron en esa ventana.
- **La ventana se cerró ~2010**: cuando todos se apuntaron, rankear en Google pasó a ser una carrera de 12 meses.
- **Ahora el LLM SEO es exactamente esa ventana otra vez**: la mayoría de founders no se da cuenta y lo van a lamentar en 2 años.

### Señales que lo apoyan

- **AI Overviews ya aparecen en ~48% de las búsquedas de Google** (ver [[Estudio de AI Overviews (SE Ranking)]]).
- ChatGPT ha **recableado cómo una generación entera busca** cosas.
- Se puede rankear a clientes en **ChatGPT, Claude y Gemini en semanas** (no en 12 meses).

### El quid: primero fundamentos SEO

> "90% del ranking en LLMs requiere fundamentos de SEO."

Las marcas con **cimientos SEO tradicionales solventes** se van a "comer vivos" a las demás. No puedes saltar a visibilidad IA sin la base debajo:

- Metadata y estructura limpia
- Contenido que responde directamente a preguntas
- Enlaces y autoridad de dominio
- El blog con buena base SEO revive: "los LLMs han levantado al blogging de entre los muertos"

### La ventana temporal

- La ventana es de ~**18 meses**.
- Los que esperen "más datos" se perderán la apertura; los datos ya son los **case studies que se acumulan ahora**.
- Ojo: algunos creen que esta vez la ventana será más corta (un par de años) y que hay que moverse ya.

### Cómo aplicarlo

1. **No esperes permiso/datos** — el momento es ahora.
2. Empieza con **SEO estacional** (Halloween, Navidad) para rankear en meses concretos.
3. Busca **afinidades con creadores** que entiendan el SEO de IA.
4. Aplica los **fundamentos de esta nota** y la auditoría de [[Best AEO Skill]] antes de pensar en visibilidad LLM.

## Estructura de página: lo que leen antes que el texto

Tanto Google como los LLMs **escanean la estructura primero** y el texto después. Si la estructura falla, da igual lo bien que escribas. Son 8 fundamentos que hay que tener asentados antes de buscar "hacks SEO":

1. **H1 = keyword principal** (y solo la respuesta, sin rodeos)
2. **H2s cubriendo qué, por qué y cómo** (en ese orden)
3. **Textos en chunks de 2-4 líneas** y bullets
4. **Saltarse las intros**, responder la pregunta de inmediato
5. **Enlaces internos** para dar profundidad al contenido
6. **Subencabezados claros** que guíen al lector
7. **Bloques FAQ** para keywords de cola larga, de forma natural
8. **Párrafos cortos** para que el lector pueda hacer skim rápido

> El formato no es decorativo: es la primera señal de relevancia que lee el crawler. Un H1 que responde directo + chunks cortos + bullets ayudan tanto al bot como al lector.

## Relacionado

- La nota hermana sobre datos: [[Estudio de AI Overviews (SE Ranking)]] — 82% de búsquedas con AI Overviews, autoridad > expertise, y por qué la IA no cita las páginas que rankean.
- [[Marketing Skills]] (incluye OKF de Google), [[8 Prompts de Diseño para Agentes de IA]], [[#seo]]

# #seo #web #ia #oportunidades