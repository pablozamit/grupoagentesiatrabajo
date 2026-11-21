# Core update de noviembre de 2026 y rank trackers (iSocialWeb)

Análisis de Álvaro Peña (iSocialWeb) sobre el primer día del core update de Google de noviembre de 2026, con datos de su cartera de clientes y una advertencia práctica: tras un core update, un rank tracker externo y Search Console pueden contar historias opuestas. Publicado en un [post de X](https://x.com/isocialwebseo/status/2120468278346739855) el 11 de noviembre de 2026; la tabla keyword a keyword y el método están en su [bitácora de Google Updates](https://www.isocialweb.agency/bita/google-updates/).

## El caso

El día después del update (lanzado el 10 de noviembre a las 19:06, hora peninsular), el análisis de su cartera (20 proyectos, 636 keywords en Google España) daba sobre el papel un desastre:

- Un día normal sale del top 10 el 1,8% de las keywords; ese día salió el 26,4% (57 de 216).
- Pero el rank tracker llevaba dos semanas igual, sin ningún update confirmado: del 28 de octubre al 10 de noviembre, una mediana del 18,8% de salidas del top 10 al día, y de las 381 keywords en el top 10 el 27 de octubre solo quedaban 194 el día 10.

Al cruzarlo con Search Console en los dos proyectos con acceso, la historia era otra:

- Automoción: la herramienta dice que de 68 keywords en el top 10 quedan 25; en Search Console, la posición media del sitio mejoró de 4,0 a 3,6.
- Extranjería: la herramienta saca del top 100 a 17 de las 37 keywords del top 10; en Search Console, la posición media apenas empeora un puesto.
- Caso extremo: una keyword que el tracker ponía en el puesto 40 y Search Console en el 1,5 el mismo día, recibiendo entre 68 y 79 clics reales diarios.

## Por qué no coinciden (según el autor)

Un rank tracker hace una foto al día desde un sitio concreto; Search Console promedia todas las búsquedas reales en las que aparece la web. Cuando cuentan historias opuestas, manda Search Console. Eso no hace inútil al rank tracker: hay que contrastarlo antes de decidir nada.

## Qué recomienda hacer durante el despliegue

- Antes de dar por perdida una keyword, buscarla en Search Console, usando solo días consolidados (tarda 2 o 3 días en cerrar el dato).
- Nada de migraciones, rediseños ni podas de contenido hasta que acabe el despliegue (puede durar hasta dos semanas).
- Con ecommerce, medir posición media e impresiones en las semanas de campañas de Black Friday, no clics.

## Contexto oficial y otro análisis (21 de noviembre)

- El [Search Status Dashboard de Google](https://status.search.google.com/) mantiene el update como activo desde el 10 de noviembre de 2026 (10:06 PST), afectando a Ranking, sin fecha de fin a 21 de noviembre.
- La [guía oficial de Google sobre core updates](https://developers.google.com/search/updates/core-updates): confirmar primero que el despliegue ha terminado y esperar una semana completa antes de analizar en Search Console; ante una caída pequeña (p. ej. de la posición 2 a la 4) no hacer cambios drásticos ni tocar contenido que funciona; evitar «quick fixes» reactivos; el efecto de las mejoras puede tardar de días a varios meses y no está garantizado. Google no prohíbe correcciones técnicas genuinas durante el despliegue.
- Paul Vengeons publicó un [hilo divulgativo sobre este update](https://x.com/VengeonsP/status/2123826499731992864) (20 de noviembre). Lo enmarca con el [modelo de predicción de Dan Taylor en Search Engine Journal](https://www.searchenginejournal.com/a-panda-style-update-within-a-month-according-to-prediction-model-signals/591955/) (15 de octubre), que daba un 96,8 % de probabilidad de una actualización tipo Panda en 30 días: es un modelo de un tercero, no un anuncio de Google. Sus reglas «no tocar nada durante el despliegue» y «esperar de 3 a 6 meses tras una caída» son consejo suyo, más estricto que la guía oficial; el «score de esfuerzo» que atribuye a Cyrus Shepard es una conjetura, no documentación de Google.

## Relacionado

- [[OpenSEO]], [[Auditoría SEO]], [[Estudio de AI Overviews (SE Ranking)]], [[GEO]], [[ChatSEO]]


#tipo/caso-practico #tema/marketing/seo
