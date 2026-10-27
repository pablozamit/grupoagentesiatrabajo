# Checklist SEO y AI SEO (Otto F. González)

**Checklist SEO/AI SEO** ([@OttoFGonzález](https://x.com/OttoFGonzález)): 10 puntos para comprobar que tu web tiene lo mínimo necesario para posicionar en Google y ser visible en buscadores de IA (ChatGPT, Claude, Google AI Overviews). Publicado el 18 de septiembre de 2026. 17.1k views.

## Por qué importa

No hace falta ser experto en SEO para aparecer en Google y en respuestas de IA, pero sí es obligatorio cumplir los básicos. Si descuidas los primeros 3 puntos, se te cae todo lo demás. La checklist se divide en **bases** (fundamento técnico) y **optimización** (para aparecer en IA y Google).

## Las 10 claves

### 1. Tu web permite el rastreo

Los rastreadores (crawlers) son los que encuentran todo el contenido en internet para Google y la IA. Si los bloqueas, no hay táctica que valga porque directamente estás impidiendo que te encuentren.

**Cómo verificar:** ve a [CrawlerCheck](https://crawlercheck.com/), pega tu web y dale a "Check Crawlers". Si sale que tu web es rastreable, todo bien.

---

### 2. Tu web no bloquea la indexación

Los motores de búsqueda descubren tu web con el rastreo, pero la registran con la indexación. Puedes tener libre el rastreo y luego impedir la indexación por error.

**Cómo verificarlo:**
- En WordPress, revisa que no esté marcada la casilla de "impedir que los motores de búsqueda indexen este sitio".
- Con plugins de SEO como Yoast o Rank Math también es fácil marcarlo sin querer.
- Usa el [Free Indexability Checker de Kalenux](https://kalenux.com/), introduce tu web y analízala.
- O bien, revisa en [Google Search Console](https://search.google.com/search-console/) la sección Páginas y presta atención al aviso de "Excluido por 'noindex'".
- Otra opción: instala la extensión **Detailed SEO Extension**, visita tu web, pulsa el icono de la extensión y comprueba qué indica.

---

### 3. El contenido de tu sitio está en HTML

La IA no ve el contenido en JavaScript, y aunque Google sí lo renderiza, no siempre lo hace y es propenso a errores. Por eso el contenido de tu web tiene que estar en el HTML desde el inicio.

**Cómo verificarlo:** instala la extensión **SEO Toggle** en tu navegador, visita tu web, haz clic en el icono y desactiva el JavaScript. Si al desactivarlo desaparece todo tu sitio y te quedas con una pantalla en blanco, estás en problemas: eso es lo que la IA (y Google) ve al revisar tu sitio.

Evita plataformas o herramientas que dependan mucho de JavaScript o de CSR (renderizado del lado del cliente).

---

### 4. Tu web ofrece información clara para la IA

Cuando la IA no tiene de dónde sacar la información, se pone a inventar (alucina). No puedes evitar al 100% las alucinaciones, pero sí reducirlas dándole suficiente información.

**Cómo darle información clara a la IA:**
- Ten una página **Sobre mí / Sobre nosotros** (detalla experiencia, perfiles sociales, especialidades, etc.)
- Ten una página para los **autores/especialistas** que aparecen en tu sitio (detalla bien lo que hacen y en qué se especializan)
- Ten una página de **FAQs** (dependiendo del negocio, no todos lo necesitan)
- Para productos o servicios indica **precios, características, beneficios**, etc. Si ocultas los precios, la IA puede inventárselos. Si no puedes indicar precios exactos, usa "a partir de…"
- Ten **páginas dedicadas para todos tus servicios o productos**
- Haz la información **accesible**: buen enlazado interno, buena arquitectura web, menús de navegación claros
- Si tienes un negocio físico, ten una página para indicar **horarios y ubicación** (con enlace a tu ficha de Google Business Profile)
- **[Opcional]** Ten un archivo **llms.txt**. No hace mucho por ahora, pero algunos modelos sí pueden sacarle provecho. Como no resta nada, puedes crearlo y subirlo a tu web

**Regla de oro:** dale a la IA la información que buscaría si un cliente tuyo preguntara por tu negocio, o si ella misma revisa tu sitio para responder a clientes potenciales.

---

### 5. Tienes una marca de negocio bien definida y la impulsas

La IA prefiere marcas fuertes y Google también. Una marca bien trabajada tiene vínculos sólidos con sus temáticas, y eso significa mejores rankings en Google y más oportunidades de que la IA te mencione porque tu marca luce más "relevante".

Tu marca debe distinguirse y estar vinculada a sus categorías y temáticas, de modo que cuando alguien piense en tu sector, tu nombre aparezca.

**Cómo darle fuerza a tu marca:**
- Define la marca de tu negocio (puede ser personal o corporativa, da lo mismo mientras se distinga)
- Dale prominencia en tu sitio web. Habla de tu marca en páginas específicas (Sobre mí/Sobre nosotros, FAQ, páginas transaccionales y posts de blog, si los usas). No tienen que ser menciones forzadas; mira cómo las incluyen webs como Semrush o Ahrefs en su contenido
- Sal de tu sitio web: crea contenido en al menos una red social aparte de tu sitio. Y de ser posible, ve por alguna plataforma que la IA tome mucho en cuenta (como Medium). Reutiliza contenido que ya tengas y adáptalo al formato de la red social o plataforma que elijas
- Consigue que otros sitios web hablen de tu marca y la asocien con las temáticas, keywords, productos y servicios con los que quieres que te visibilice Google y la IA

---

### 6. El contenido de tu sitio está optimizado para la IA

El contenido que le gusta a la IA ya se parece bastante al contenido SEO de toda la vida, pero tiene sus matices. Si lo haces bien, deberías rankear más alto en Google **y** conseguir más menciones en IA.

**Cómo optimizar tu contenido para la IA:**
- **Ve al grano.** Nada de meter párrafos de relleno para tener un contenido extenso o poner más keywords. Pon los datos significativos, las respuestas y demás, arriba del todo, lo más cerca de la pregunta.
- **Estructura bien tu contenido.** Usa los encabezados (H2, H3, H4) para separar tu contenido en secciones bien diferenciadas. H2 para secciones grandes, y H3 y H4 para secciones internas.
- **Responde la consulta del usuario.** Si el usuario quiere un producto, ofrécele el producto. Si busca información, dale información. Mira lo que posiciona en Google para hacerte una idea de lo que la gente quiere encontrar y crear contenido que se lo ofrezca.
- **No omitas información valiosa.** Quieres que la IA tenga todos los datos posibles para mencionarte. Para una ficha de producto, ofrécele la información suficiente. Si no hablas de precio o no tiene descripción, la IA tendrá que completar (y eso no le gusta).
- **Mantén tu contenido en HTML.** Evita el contenido dinámico. Que la IA pueda rastrear cualquiera de tus páginas.

---

### 7. Tienes solo una página por intención de búsqueda

Este es un error muy común: publicar muchas páginas para la misma intención.

La **intención de búsqueda** es la razón por la que el usuario hace una consulta en Google o a la IA. A veces es para comprar, otras para informarse, o para pedir una dirección, etc. Para poder posicionar, tienes que darle a tus usuarios lo que están buscando.

- El que quiere un post sencillo de blog, eso. Al que busca un producto, eso.
- **El otro detalle clave es que solo debes responder una intención de búsqueda por página.**
- Para un producto particular, no hagas 10 páginas distintas ofreciendo el mismo producto. Las páginas van a competir entre sí y ninguna posicionará.
- Para hablar de un concepto, no hagas 3 páginas diferentes. Abórdalo en una sola y ataca sus keywords.

**Regla:** una página por intención de búsqueda, y posicionarás mejor.

---

### 8. Tu web está bien estructurada

La estructura de tu web define lo bien que la rastrea Google y la IA, así que afecta directamente a tu capacidad para posicionar.

**Cómo luce una buena estructura web:**
- Es eficiente, limpia y tiene sentido.
- Es el antónimo de la web de un banco cualquiera o de alguna institución pública.
- Tiene menús de navegación accesibles y lógicos.

**Cómo construirla:**
- La estructura se plantea **antes** de construirla y se basa en **enlaces internos**.
- Los enlaces internos son todos los enlaces que pones en tu web hacia otras partes de tu web: botones, opciones en los menús de navegación, enlaces en las imágenes y enlaces en el texto.
- Si en tu página de inicio pones un botón hacia un post de tu blog, la estructura es: Inicio → Post.
- Si desde ese post enlazas a una página de servicio, la estructura se extiende: Inicio → Post → Servicio.
- No necesitas enlazar todo con todo. Enlaza páginas relevantes. Desde tu página de inicio y menú, enlaza a las páginas principales únicamente (servicios, blog, sobre mí, contacto, etc.). Y ya dentro de esas páginas, enlaza hacia secciones o contenidos más específicos.

---

### 9. Sacas provecho del enlazado interno

Todas tus páginas tienen ciertos "puntos" a su favor en Google (autoridad, tráfico, posicionamiento). Esos puntos se pueden compartir, en parte, con otras páginas de tu web a través de los enlaces internos. Por eso son tan potentes: con ellos puedes impulsar tus páginas usando la propia fuerza que ya tiene tu sitio.

**Cómo usar bien el enlazado interno:**
- **Úsalo con criterio.** No enlaces a toda página en tu sitio. Enlaza páginas relevantes. Ejemplo: desde la página de servicios hacia las páginas específicas de cada servicio; desde un post sobre jardinería hacia otros posts de jardinería de tu blog.
- **No repitas enlaces internos.** No sirve de nada poner varios enlaces internos hacia la misma página en un mismo contenido.
- **Usa más enlaces de texto que de cualquier otro tipo.** Son más fáciles de seguir para Google y le dan más información que suma al SEO.
- **Usa textos de anclaje de concordancia exacta.** Es decir, en los textos en los que pones los enlaces, usa las palabras clave por las que quieres que posicionen las páginas a las que enlazas. Si enlazas a una página que quieres que posicione con la consulta "mejor abogado en barcelona", usa ese texto como texto de anclaje para tu enlace.
- **Añade más enlaces internos hacia las páginas que más quieres posicionar.** Cuanto más enlaces internos reciba una página (desde varias páginas de tu sitio), más fuerza tendrá para rankear.
- **Úsalo no solo para el SEO.** Aprovéchalo para canalizar a tus visitas: desde las páginas a las que llegan hasta las páginas que te dan dinero. Ejemplo: desde publicaciones de tu blog hacia tus páginas de servicios; o desde tu página de inicio hacia la página de suscripción a tu newsletter.

---

### 10. Te enfocas en consultas/keywords hiper específicas

Este es el auténtico motor de una estrategia SEO/GEO que da resultados.

La mayoría de webs no necesitan miles de visitas mensuales, ni posicionar con palabras clave ultra competidas para ser rentables. Lo único que les hace falta es llegar a su audiencia objetivo y atraerla. Esto no se logra optimizando para palabras clave genéricas, sino **específicas**.

**Por qué las palabras clave genéricas son un problema:**
- Atraen mucho tráfico, así que los sitios grandes las atacan primero y posicionan con ellas.
- De todo el tráfico que consiguen, si acaso un pequeño porcentaje es realmente la audiencia a la que quieres llegar.
- Están sobresaturadas porque todo el mundo las quiere, puedes atacarlas y esperar a posicionar con ellas durante años sin ver un solo resultado.
- Para todo lo que te podría costar posicionar con ellas, te darán poca rentabilidad.

Las palabras clave genéricas solo le sirven (si acaso) a las webs grandes que pueden posicionar con ellas sin mucho esfuerzo.

**Para tu web, sé específico:** palabras clave detalladas, consultas concretas. Tienen mucho a su favor:
- Son más fáciles de posicionar porque no tienes a medio mundo tratando de rankear con ellas.
- Al ser más específicas, atraen a gente más informada, que tiene más claro lo que quiere (sea comprar, suscribirse, leer un post, lo que fuera).
- Tienen más relación con tu negocio, una ventaja para la relevancia de tu web y tus oportunidades de posicionar.
- Para la IA, es más probable que genere menciones y enlaces a tu web, porque la IA no siempre tendrá la respuesta a la mano para consultas tan específicas.

**Cómo saber si estás atacando palabras clave específicas en tu sitio web:**
Date una vuelta por tu blog (si tienes uno), o mira las páginas que tienes en tu sitio (sean de servicios o productos), échale un ojo a tu página de inicio y mira qué keywords trabajas. Si todas las keywords que atacas son cortas (2-3 palabras como mucho), entonces es probable que no estés atacando suficientes palabras clave específicas.

**Nota importante:** no me refiero a que las incluyas "por aquí y por allá", sino que **toda tu estrategia debe enfocarse en ese tipo de keywords**. Olvídate por completo de las keywords genéricas porque no harán nada por tu sitio a menos que esté en el top 100 o top 200 de los sitios con más autoridad.

---

## Relacionado

- [[Auditoría SEO]] - Plantilla de prompt para auditoría técnica SEO completa + cierre del ciclo de conversión
- [[GEO]] - Optimización para motores de generación AI (ChatGPT, Perplexity, Gemini, Claude)
- [[Jev (TypeSafe)]] - Internal linking masivo con un modelo de decisiones: 586 páginas en 45.1 s por $0.21
- [[Entity Map con Screaming Frog MCP]] - Mapa de entidades con Claude + Spider v24 (MCP nativo)
- [[Google goto links]] - Google interpone redirect en el SERP: qué rompe en rank trackers y atribución
- [[Botón de perfil de Google Search]] - Seguidores dentro de Google que reparten hasta tu TikTok/IG/YT en Discover

# #seo #marketing #contenido