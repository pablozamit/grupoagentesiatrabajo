# Estado de los algoritmos de las principales redes sociales y plan de reactivación para Produpin

## Introducción

En los últimos años varias plataformas han publicado parcialmente su algoritmo o han sufrido filtraciones y análisis inversos que permiten entender qué factores impulsan el alcance orgánico.
X (antes Twitter) ha abierto repetidamente partes de su sistema de recomendación, mientras que Instagram, Facebook, LinkedIn, TikTok, YouTube y otras explican cada vez más su ranking sin publicar el código completo.[1][2][3][4][5][6][7]
Este informe resume el nivel de conocimiento real (1–10) sobre el algoritmo de cada red relevante y traduce ese conocimiento en prioridades prácticas para una empresa B2B de merchandising como Produpin, que lleva 6 meses o más sin publicar.[8][9][10]

## Tabla resumen por red social

| Red          | Nivel de conocimiento (1–10) | Base del conocimiento (oficial / filtrado / reverso) | Comentario rápido |
|-------------|------------------------------|------------------------------------------------------|--------------------|
| X (Twitter) | 8                            | Código abierto parcial + documentación oficial      | Mucho detalle técnico, pero faltan pesos exactos. |
| Instagram   | 7                            | Comunicados oficiales + estudios y guías recientes  | Señales claras por superficie (Feed, Reels, Explore). |
| Facebook    | 6                            | Documentación de Meta + filtraciones y estudios     | Se conoce bien el marco, menos los pesos actuales. |
| LinkedIn    | 7                            | Posts y papers oficiales + análisis externos        | Muy claro el peso extremo de comentarios y relevancia profesional. |
| TikTok      | 7                            | Documento interno filtrado + papers y análisis      | Objetivos y señales bien descritos, no el código final. |
| YouTube     | 6                            | Posts oficiales + estudios externos                 | Se entiende la lógica de recomendación, no las fórmulas exactas. |

Las puntuaciones combinan: transparencia oficial, filtraciones verificadas, calidad de ingeniería externa que ha desmontado el sistema y estabilidad de los factores en el tiempo.[2][3][11][12][6][7][1]

***

## X (Twitter): algoritmo parcialmente abierto

### Qué se sabe del algoritmo

X ha publicado varias veces en GitHub el código de su sistema de recomendaciones de la cronología “For You”, incluyendo el pipeline de *candidate sourcing*, ranking con modelos de ML y filtros.[3][4][1]
La apertura es real, pero no incluye todos los datos de entrenamiento ni todos los pesos, de modo que no puede replicarse exactamente el comportamiento de producción.[13][14][1]

Además de la documentación, se han extraído de la base de código factores y multiplicadores que muestran el peso de distintas interacciones (likes, retuits, suscripción de pago, etc.).[3][13]
También se ha confirmado el uso de señales de red social (a quién sigues, quién interactúa contigo) y de modelos de *embeddings* para encontrar contenido relevante fuera de tu red.[4][1]

### Puntuación de conocimiento

**Nivel de conocimiento: 8/10.**
Hay más transparencia que en casi cualquier otra red, pero sin acceso completo a datos y pesos es imposible predecir con precisión quirúrgica qué tweet ganará en cada caso.[1][13][3]

### Prioridades prácticas para Produpin

Para una cuenta B2B que ha estado inactiva meses, el objetivo es reactivar señales fuertes rápido:

- Publicar hilos breves y muy visuales (imágenes de pins/llaveros en contexto) porque las publicaciones con medios y engagement tienen multiplicadores positivos frente a tweets solo con enlace.[1][3]
- Optimizar para retuits y likes tempranos: los modelos se entrenan explícitamente para predecir interacciones positivas (likes, retuits, respuestas) y usan esas probabilidades para el ranking.[3][1]
- Evitar posts que sean solo URL o que lleven a acciones negativas (bloqueo, dejar de seguir), ya que esos patrones están penalizados en el código filtrado.[13][3]
- Aprovechar tu red próxima: interactuar desde Produpin y desde perfiles personales con clientes/agencias para alimentar la parte de *in-network* que prioriza contenido de cuentas con relación fuerte.[4][1]


***

## Instagram: algoritmos por superficie (Feed, Stories, Explore, Reels)

### Qué se sabe del algoritmo

Instagram afirma que no existe “un único algoritmo”, sino varios sistemas de ranking distintos para Feed, Stories, Explore, Reels y Search, cada uno optimizado para cómo la gente usa esa parte de la app.[15][2]
La propia compañía ha detallado públicamente las señales principales para Feed y Reels: historial de interacciones (likes, comentarios, compartidos, guardados), relación entre usuario y creador, relevancia temática y frescura del contenido.[16][2]

Guías recientes para 2025–2026 señalan que las señales clave incluyen: interacción pasada con tu cuenta, probabilidad de que el usuario comente o comparta, tasa de retención del vídeo en Reels, uso de audio/tendencias y cumplimiento de normas de contenido.[17][16][15]
No se han filtrado pesos exactos, pero la consistencia entre comunicados de Meta y estudios externos hace que el mapa sea bastante fiable.[18][16]

### Puntuación de conocimiento

**Nivel de conocimiento: 7/10.**
No hay código abierto, pero hay explicaciones oficiales detalladas, datos de terceros y patrones muy estables sobre qué se muestra arriba en Feed, Explore y Reels.[2][16][15]

### Prioridades prácticas para Produpin

Para una marca visual de producto físico premium, Instagram debería ser uno de los pilares.
Tras 6+ meses de inactividad, el algoritmo tendrá pocas señales recientes, así que conviene reiniciar contundente:

- Lanzar una serie de posts tipo carrusel mostrando *casos reales* (pins para ferias, llaveros para agencias, medallas, etc.) con narrativa y no solo catálogo; los carruseles generan más tiempo de visualización y guardados, señales valoradas en Feed.[16][17]
- Publicar Reels verticales cortos (15–30 s) enseñando proceso o *before/after* del diseño al producto físico, cuidando retención (mensaje fuerte en los primeros 3 segundos y cortes rápidos).[17][16]
- Incentivar comentarios con preguntas concretas (“¿Qué pin regalarías en tu próximo evento?”) porque comentarios y compartidos pesan más que un simple like.[18][16]
- Publicar de forma consistente (por ejemplo, 3 veces por semana entre Feed y Reels) durante al menos 8–12 semanas para reentrenar el sistema con nuevas señales.[15][16]
- Usar descripciones claras y términos que los motores de búsqueda y de IA entiendan (por ejemplo, “pins esmaltados personalizados para eventos corporativos en España”) alineado con tu posicionamiento web.[19][20]


***

## Facebook: News Feed y “meaningful interactions”

### Qué se sabe del algoritmo

Meta detalla públicamente que Feed en Facebook combina contenido “conectado” (amigos, grupos, páginas que sigues) y contenido “recomendado”, usando sistemas de ML que ponderan relevancia, engagement potencial y diversidad de contenidos.[7]
Desde 2018, la compañía declara que prioriza explícitamente “interacciones significativas”, como comentarios largos, respuestas a comentarios y compartidos, por encima de reacciones ligeras como el simple like.[21][22]

Analistas externos y documentación de transparencia describen etapas claras: extracción de características (afinidad con el autor, tipo de contenido, recencia), scoring y ranking, con fuerte penalización a contenido considerado *clickbait*, engañoso o de baja calidad.[23][24][21]

### Puntuación de conocimiento

**Nivel de conocimiento: 6/10.**
Se conoce bien la filosofía (priorizar relaciones y contenido significativo) y la estructura general del ranking, pero hay menos detalle práctico que en X o LinkedIn y más variación histórica.[22][21][7]

### Prioridades prácticas para Produpin

Dado tu foco B2B y la caída orgánica general en páginas, Facebook puede ser secundario, pero útil para:

- Reactivar una base de seguidores antiguos publicando historias de clientes (casos breves con foto) que inviten a comentar (“¿Reconoces este tipo de evento?”).[21][22]
- Apostar por contenido que genere conversación real, no solo anuncios de producto: posts sobre tendencias de merchandising, debates sobre “regalos inútiles vs. merchandising que la gente quiere llevar”.[24][21]
- Usar grupos o comunidades (si existen en tu nicho) más que depender solo de la página, porque las interacciones en grupos tienen prioridad en el feed.[22][7]


***

## LinkedIn: peso extremo de comentarios y relevancia profesional

### Qué se sabe del algoritmo

LinkedIn ha publicado entradas técnicas y papers donde explica que su nuevo feed combina recuperación y ranking impulsados por modelos de lenguaje grandes (LLM) para mejorar la relevancia profesional.[25][11]
Análisis basados en esos documentos destacan que la plataforma prioriza “interacciones profesionales” como comentarios de calidad, compartidos y tiempo de lectura, por encima de clics efímeros.[11][26]

Estudios de creadores y resúmenes de cambios en 2026 indican que el algoritmo asigna un peso relativo mucho mayor a los comentarios (por ejemplo, hasta 12–15 veces más que un like) y que reciclar contenido con reposts estratégicos puede añadir ~30% de alcance adicional.[26][27][28]
El sistema también valora fuertemente la coherencia temática entre tu perfil (cargo, sector, titular) y los temas de tus posts; desviarse demasiado reduce la capacidad del modelo para emparejar tu contenido con la audiencia adecuada.[11][26]

### Puntuación de conocimiento

**Nivel de conocimiento: 7/10.**
Aunque el código no es público, LinkedIn y analistas externos han descrito con bastante precisión qué señales importan más (comentarios, relevancia profesional, coherencia temática, dwell time), ofreciendo una hoja de ruta clara para creadores B2B.[28][26][11]

### Prioridades prácticas para Produpin

LinkedIn encaja muy bien con Produpin por tu público objetivo (agencias, marketing, organizadores de eventos).
Tras meses de inactividad, conviene atacar así:

- Optimizar el perfil de empresa y del fundador/comerciales como “landing pages” claras: propuesta de valor en una frase, prueba social y un CTA directo a pedir presupuesto.[8][28]
- Publicar 2–3 veces por semana en perfiles personales (más que solo desde la página), mezclando:
  - Historias de proyectos concretos (antes/después, cifras de asistentes, uso del merchandising).
  - Posts de posicionamiento (“por qué un pin bien diseñado vale más que un catálogo de folletos”).
  - Contenido educativo para marketers (marco mental para usar productos físicos como amplificadores de señal social).[9][10]
- Diseñar cada post para provocar comentarios, por ejemplo, terminando con una pregunta polarizada o pidiendo ejemplos de campañas memorables; los comentarios son la señal con mayor peso.[26][28]
- Dedicar 15–30 minutos tras cada publicación a comentar activamente posts de otros en tu nicho; hay evidencias de que esta actividad temprana aumenta la visibilidad de tu contenido.[27][26]


***

## TikTok: documento interno filtrado y estudios de recomendación

### Qué se sabe del algoritmo

Un documento interno de ingeniería (“TikTok Algo 101”) filtrado y confirmado por portavoces describe que el sistema se guía por cuatro objetivos: valor para el usuario, valor a largo plazo para el usuario, valor para el creador y valor para la plataforma.[12][29]
Este documento detalla que las métricas clave incluyen tiempo de visionado, *completion rate*, likes, comentarios y compartidos, y que el sistema busca maximizar el tiempo en la app equilibrando contenido de nicho con tendencias amplias.[29][12]

Investigaciones y análisis inversos recientes describen un pipeline de varias capas que, en los primeros vídeos de un usuario, explora distintos tipos de contenido para detectar qué temas y estilos generan más respuesta emocional y retención.[30][29]
También ha habido filtraciones controvertidas sobre reglas de moderación que penalizaban ciertos tipos de usuarios y contextos visuales, aunque muchas de esas prácticas han sido cuestionadas y parcialmente retiradas tras la exposición mediática.[31]

### Puntuación de conocimiento

**Nivel de conocimiento: 7/10.**
El documento filtrado ofrece una visión inusualmente clara de objetivos y señales del sistema, y los análisis externos completan el cuadro; sin embargo, no se dispone del código completo ni de todos los parámetros de ranking.[30][12][29]

### Prioridades prácticas para Produpin

Si Produpin decide apostar por contenido de vídeo corto:

- Enfocar los primeros 5–10 vídeos a nichos específicos (por ejemplo, “merchandising inteligente para ferias”, “pins como señal de pertenencia”) para ayudar al sistema a ubicarte en comunidades concretas.[12][30]
- Diseñar vídeos que maximicen la retención: historias compactas de transformación (del boceto al pin, del evento sin branding a un evento con señalética física potente) con cortes rápidos.[30]
- Evitar contenido que pueda activar señales negativas o parecer demasiado promocional sin valor añadido; el sistema premia el contenido que entretiene o enseña por encima del autopromo directa.[31][12]


***

## YouTube: sistema de recomendación centrado en satisfacción y tiempo de visualización

### Qué se sabe del algoritmo

YouTube describe su sistema de recomendaciones como un motor que intenta mostrar los vídeos que los usuarios quieren ver y que les aportan valor, optimizando para métricas de satisfacción y tiempo de visualización más que para simples clics.[5][6]
La compañía detalla que usa comportamiento de visionado, likes/dislikes, encuestas de satisfacción y señales de la reputación del canal para decidir qué recomendar en la página de inicio y en “siguiente vídeo”.[6][5]

Estudios externos señalan que el sistema aprende por ensayo y error a partir de millones de interacciones, dando un peso muy fuerte a la retención, el tiempo de sesión y la probabilidad de que el usuario siga viendo más vídeos.[32][33]

### Puntuación de conocimiento

**Nivel de conocimiento: 6/10.**
Se entiende bien la lógica de alto nivel (satisfacción, tiempo de visualización, señales de calidad del canal), pero menos los detalles de ranking y de cómo se ponderan exactamente todas las señales.[33][5][6]

### Prioridades prácticas para Produpin

Si Produpin explora YouTube (aunque probablemente sea un canal más costoso):

- Crear pocos vídeos pero muy útiles para tu público objetivo (por ejemplo, “Cómo diseñar un merchandising que tus clientes realmente quieran llevar” o “Checklist de merchandising para ferias B2B”).[5][6]
- Cuidar retención con estructura clara (problema → ejemplo → solución → CTA) y timestamps.
- Usar títulos y miniaturas que prometan un beneficio concreto para marketers, no solo muestren producto.


***

## Conclusiones accionables para Produpin (visión transversal)

1. **Redes prioritarias para una empresa de pins B2B**  
   Por tu producto extremadamente visual, tu foco debería ser Instagram (Feed + Reels) y LinkedIn (perfiles personales) como primera línea, con X/Twitter como apoyo táctico para conectar con comunidad de marketing y eventos.[28][2][16][26]
   Facebook y YouTube pueden ser secundarios o de refuerzo, y TikTok solo si realmente vais a comprometeros con vídeo corto consistente.[21][12][5]

2. **Principios comunes que todos los algoritmos premian**  
   - Contenido que genera **interacciones profundas** (comentarios, compartidos, guardados, tiempo de lectura/visionado) por encima de métricas ligeras.[2][26][5][21]
   - **Coherencia temática**: hablar de lo mismo (merchandising estratégico, branding físico, casos de clientes) para que el sistema sepa “de qué va” Produpin.[11][26][12]
   - **Consistencia en el tiempo**: publicar de forma regular durante meses para reentrenar los modelos con señales nuevas tras la inactividad.[16][15][5]

3. **Plan de reactivación mínimo viable (primeros 60–90 días)**  
   - Instagram: 2–3 publicaciones semanales (carruseles + Reels) mostrando casos reales de clientes, procesos y pequeñas ideas accionables para agencias.[17][16]
   - LinkedIn: 2 posts semanales desde el perfil personal clave (más potentes que la página), diseñados para provocar comentarios, + comentarios activos tras cada post.[26][28]
   - X/Twitter: 2 hilos a la semana condensando ideas de newsletter o casos de estudio, con imágenes de producto y llamadas claras a interacción.[1][3]
   - Medir no solo likes, sino respuestas, menciones y solicitudes de presupuesto que vienen de cada red, para ir afinando el foco en los próximos 3–6 meses.

En conjunto, el “mapa de algoritmos” actual no es una receta secreta, pero sí ofrece una guía bastante clara: contenido útil y visual, creado para humanos y sostenido en el tiempo, amplificado por interacciones profundas en las plataformas donde realmente están tus compradores B2B.