# Sistema de clasificación de la enciclopedia

La enciclopedia clasifica cada ficha mediante dos dimensiones independientes: **tipo de recurso** (qué es la nota) y **tema** (sobre qué trata). Así se puede combinar, por ejemplo, el tipo «skill» con el tema «diseño de interfaces».

Las etiquetas se escriben al final de las fichas, en minúsculas, sin tildes y con guiones entre palabras. La barra indica jerarquía. Ejemplo: `#tipo/herramienta #tema/agentes/memoria`.

## Dimensión 1: tipo de nota

Toda ficha pública de contenido tiene exactamente un tipo.

| Tipo | Identificador | Cuándo se usa |
|---|---|---|
| Herramienta | `tipo/herramienta` | Aplicación, servicio, biblioteca, framework, API, servidor MCP o plugin que permite realizar una tarea. |
| Modelo | `tipo/modelo` | Modelo o familia de modelos de IA. |
| Skill | `tipo/skill` | Instrucciones instalables que enseñan una capacidad a un agente. |
| Concepto | `tipo/concepto` | Explicación de una idea, técnica, arquitectura o principio. |
| Guía | `tipo/guia` | Procedimiento, tutorial, comparativa, checklist o flujo de trabajo que orienta una acción o decisión. |
| Colección | `tipo/coleccion` | Directorio, catálogo, galería o conjunto de recursos que se exploran. |
| Ejercicio | `tipo/ejercicio` | Actividad que el alumno debe realizar, con resultado esperado y criterio de finalización. |
| Caso práctico | `tipo/caso-practico` | Implementación, producto, demo o experimento construido que se estudia como ejemplo. |

### Reglas para elegir el tipo

- Se clasifica el contenido principal de la nota, no todas las capacidades secundarias del recurso.
- Un modelo, la herramienta que lo ejecuta y el servicio que da acceso a él tienen tipos distintos, aunque compartan tema.
- Una explicación de qué es algo es un concepto; una secuencia para hacerlo es una guía.
- Una colección reúne recursos para explorar; una guía compara, recomienda o indica pasos.
- Un ejercicio pide construir o resolver algo; un caso práctico describe algo ya construido.
- Si una ficha contiene una herramienta y un tutorial extensos, se crean dos fichas enlazadas cuando ambas partes tengan valor independiente.

## Dimensión 2: temas

Cada ficha tiene entre uno y tres temas explícitos. Se asigna un tema cuando la función central o una parte sustancial de la nota es útil para quien explora esa categoría. Mencionar una tecnología de pasada no basta.

### Agentes y automatización — `tema/agentes`

- `tema/agentes/asistentes`: agentes completos y asistentes autónomos.
- `tema/agentes/orquestacion`: coordinación de agentes, tareas paralelas y enrutamiento.
- `tema/agentes/memoria`: persistencia, recuperación y aprendizaje entre sesiones.
- `tema/agentes/navegacion-y-control`: navegación web, computer use y control de dispositivos.
- `tema/agentes/integraciones`: conexión de agentes con servicios, APIs, MCP y aplicaciones.
- `tema/agentes/fiabilidad`: harnesses, contexto, evaluación, supervisión y control de ejecución.

### Modelos e IA local — `tema/modelos`

- `tema/modelos/lenguaje`: modelos cuyo uso principal es texto o código.
- `tema/modelos/multimodales`: modelos que trabajan con varias modalidades.
- `tema/modelos/ejecucion-local`: ejecutar o servir modelos en hardware propio.
- `tema/modelos/acceso`: catálogos, routers, APIs y formas de acceder a modelos.
- `tema/modelos/entrenamiento`: entrenamiento, ajuste fino y cuantización de modelos.

### Programación y aplicaciones — `tema/programacion`

- `tema/programacion/desarrollo-con-ia`: programación asistida por IA y vibecoding.
- `tema/programacion/web`: sitios, aplicaciones, estándares y tecnologías web.
- `tema/programacion/movil`: aplicaciones móviles y herramientas para crearlas.
- `tema/programacion/pruebas`: QA, depuración, revisión y pruebas de software.

### Diseño de interfaces — `tema/diseno`

- `tema/diseno/interfaces`: diseño UI/UX, sistemas de diseño y experiencia de usuario.
- `tema/diseno/componentes`: bibliotecas, componentes y patrones reutilizables.
- `tema/diseno/inspiracion`: galerías y referencias visuales.
- `tema/diseno/presentaciones`: diapositivas y visualización editorial.

### Imagen y 3D — `tema/imagen-3d`

- `tema/imagen-3d/imagen`: generación, edición e ilustración de imágenes.
- `tema/imagen-3d/modelado-3d`: objetos, escenas, mallas y herramientas 3D.
- `tema/imagen-3d/animacion-3d`: rigging, movimiento y animación tridimensional.
- `tema/imagen-3d/cad`: CAD, diseño paramétrico y fabricación.

### Vídeo y animación — `tema/video`

- `tema/video/generacion`: generación de vídeo y motion graphics.
- `tema/video/edicion`: montaje, clipping, composición y procesamiento.
- `tema/video/guion`: guion, storyboard y estructura narrativa.
- `tema/video/grabacion`: captura de pantalla, cámara y grabación.

### Audio y voz — `tema/audio`

- `tema/audio/voz`: síntesis, clonación y diseño de voz.
- `tema/audio/transcripcion`: reconocimiento de voz, dictado y transcripción.
- `tema/audio/sonido`: música, efectos y sonido para interfaces o medios.

### Videojuegos — `tema/videojuegos`

- `tema/videojuegos/desarrollo`: motores, código y flujos para crear juegos.
- `tema/videojuegos/recursos`: sprites, modelos, sonido y assets de juego.
- `tema/videojuegos/referencias`: juegos y ejemplos que sirven para estudiar diseño o técnica.

### Datos e investigación — `tema/datos`

- `tema/datos/extraccion-web`: scraping, crawling y extracción de datos online.
- `tema/datos/documentos`: parseo, OCR e ingesta de archivos.
- `tema/datos/bases-de-datos`: almacenamiento estructurado y servicios de datos.
- `tema/datos/busqueda-y-recuperacion`: índices, embeddings, RAG y recuperación de información.
- `tema/datos/investigacion`: investigación científica, búsqueda de fuentes y análisis de evidencia.

### Marketing, ventas y negocio — `tema/marketing`

- `tema/marketing/seo`: SEO, GEO y visibilidad en buscadores.
- `tema/marketing/prospeccion`: búsqueda de leads y desarrollo de oportunidades comerciales.
- `tema/marketing/email`: email, campañas y gestión de buzones.
- `tema/marketing/redes-y-distribucion`: redes sociales, publicación y distribución de contenido.
- `tema/marketing/negocio`: oferta, producto, ventas, precios y modelos de negocio.

### Infraestructura, seguridad y privacidad — `tema/infraestructura`

- `tema/infraestructura/hosting`: alojamiento, despliegue y publicación.
- `tema/infraestructura/entornos`: máquinas, contenedores y sandboxes de ejecución.
- `tema/infraestructura/redes`: VPN, DNS, conectividad y acceso remoto.
- `tema/infraestructura/seguridad`: auditoría, defensa, respuesta y pruebas de seguridad.
- `tema/infraestructura/privacidad`: exposición de datos, anonimato y privacidad digital.

## Cuántos temas asignar

- Asignar un tema cuando basta para encontrar la nota.
- Añadir un segundo tema si representa otra utilidad sustancial que la ficha desarrolla.
- Usar un tercero solo cuando evite perder un recurso claramente relevante.
- No añadir el tema padre junto a su subtema: `tema/agentes/memoria` ya genera la pertenencia al área «Agentes».
- Si hacen falta más de tres temas, revisar si la nota mezcla varios recursos que deberían separarse.

## Características técnicas: no son temas

Precio, licencia, ejecución local o en nube, compatibilidad, API, MCP, plataforma y estado de revisión describen características del recurso. No se deben convertir en temas. La licencia open source tampoco implica que el recurso funcione localmente.

Las promociones deben indicar sus condiciones y vigencia dentro de la nota. Los recorridos para alumnos se construyen como guías enlazadas; las páginas personales de alumnos conservan objetivos, ejercicios y avances individuales.

## Crear y mantener categorías

Antes de crear un identificador nuevo, confirmar que representa una necesidad de búsqueda distinta, definir qué incluye y excluye, y comprobar que no sea un sinónimo de una categoría existente. Abrir una subcategoría cuando el contenido ya permita exploración útil; como orientación, cuatro o más fichas suelen justificarla. No crear páginas vacías para completar el árbol.

Los identificadores son estables y técnicos; los nombres visibles se escriben en español natural. Los sinónimos se explican en esta guía y se usan en el texto para la búsqueda, sin duplicar categorías.

Quartz genera las páginas de etiquetas y sus prefijos jerárquicos a partir de las etiquetas de las notas. Por eso, los listados no se mantienen manualmente. Las páginas editoriales pueden explicar el área, destacar recursos y proponer recorridos.

## Páginas de alumnos y páginas del sistema

Las páginas personales se identifican por el nombre del alumno y sirven como itinerario individual; no son categorías temáticas. Portada, guía, mapa, páginas personales y páginas privadas o de sistema no necesitan un tipo de contenido. Los borradores no publicados no participan en el índice público.

## Revisión editorial

Comprobar que cada ficha pública tenga exactamente un identificador `tipo/...` y entre uno y tres `tema/...`; que estén al final del documento y fuera de bloques de código; que los identificadores existan en esta guía; y que los enlaces relacionados añadan contexto que las etiquetas no expresan.
