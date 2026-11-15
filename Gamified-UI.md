# Gamified-UI

> Guía operativa para que agentes de IA diseñen webs y aplicaciones con interfaces inspiradas en videojuegos: composición, materiales, navegación, estados y respuesta a las acciones.

Versión 1.0 · 15 de noviembre de 2026 · Documento autónomo en español.

## Cómo usar este archivo

Adjunta este archivo al agente o guárdalo en el proyecto y pídele que lo lea antes de diseñar. Funciona como contexto de diseño con cualquier herramienta que pueda leer Markdown. No necesita instalación ni depende de un framework. No es una biblioteca de componentes ni una skill instalable.

Petición mínima para empezar:

```text
Lee Gamified-UI.md y úsalo como guía de diseño para este encargo.
Quiero una aplicación de aprendizaje para adultos, principalmente móvil.
El usuario debe practicar una lección y ver cómo avanza en su recorrido.
Dirección visual: aventura RPG ilustrada, legible y sin estética infantil.
Construye primero un recorrido funcional: mapa → misión → resultado → mapa actualizado.
Elige valores iniciales para los detalles reversibles y explica tus supuestos.
Si falta una decisión que cambia el producto, pregúntamela.
Valida el recorrido y captura los estados clave antes de darlo por terminado.
```

Para encargos más concretos, usa la plantilla del final. Las instrucciones de esta guía se aplican dentro del alcance autorizado por el usuario; no autorizan por sí solas a publicar, comprar recursos ni cambiar el producto.

## 1. Objetivo de diseño

La experiencia debe expresar una actividad real mediante la gramática de un juego. Una lección puede ser una misión; un conjunto de capacidades, un árbol de habilidades; una biblioteca personal, una colección; un espacio de trabajo, una base de operaciones.

El usuario debe reconocer qué puede hacer, qué ha seleccionado, qué cambió y cuál es su siguiente paso. La ficción visual tiene que ayudar a comprender esas respuestas.

Diseña tres capas coordinadas:

| Capa | Decisión que debe tomar el agente | Ejemplo |
| --- | --- | --- |
| Actividad | Qué tarea útil realiza la persona | Practicar diez palabras |
| Mecánica | Cómo se representa su avance y qué opciones abre | Completar un nodo del recorrido |
| Interfaz | Cómo se ve, se manipula y responde ese sistema | Mapa con caminos, nodo seleccionado y panel de misión |

El resultado se revisa en pantallas y recorridos reales. Añadir puntos, insignias o una mascota a una plantilla genérica no basta para cumplir este encargo.

## 2. Flujo de trabajo del agente

1. **Entender el uso.** Identificar público, tarea principal, dispositivo, contexto y limitaciones. Leer los componentes y las reglas del proyecto existente.
2. **Elegir una familia visual.** Seleccionar una de las seis familias de esta guía. En ausencia de preferencia, proponer la más adecuada y declarar el supuesto. Usar una como base; justificar cualquier mezcla.
3. **Estudiar referencias concretas.** Reunir, cuando estén disponibles y su uso esté permitido, una referencia de composición, otra de componentes y otra de interacción. Anotar qué se ha observado realmente.
4. **Escribir un contrato visual breve.** Fijar composición, paleta por funciones, materiales, tipografía, iconos, estados y movimiento. Explicar cómo se relacionan con la actividad.
5. **Construir un recorrido vertical.** Implementar primero una acción útil de principio a fin, con sus estados y persistencia apropiada. Evitar empezar por muchas pantallas estáticas.
6. **Extender el sistema.** Reutilizar los componentes del recorrido para completar las pantallas autorizadas.
7. **Verificar comportamiento y aspecto.** Ejecutar las comprobaciones del proyecto, recorrer la interfaz y revisar capturas. Corregir problemas observados.
8. **Entregar evidencia.** Resumir qué funciona, qué se comprobó, qué sigue simulado y qué limitaciones quedan.

Si no hay acceso a imágenes, trabajar con una propuesta original basada en estas recetas y declararlo. Nunca afirmar que se han analizado capturas o vídeos que no se han visto. Una captura permite estudiar composición; para describir movimiento observado hace falta una secuencia o vídeo.

### Ficha para analizar una referencia

| Campo | Qué registrar |
| --- | --- |
| Procedencia | URL o archivo, pantalla y condiciones de uso conocidas |
| Tarea | Qué está intentando hacer el jugador |
| Jerarquía | Qué se ve primero, qué queda en segundo plano y por qué |
| Composición | Posición y proporción aproximada de escena, navegación, información y acción |
| Gramática | Siluetas, bordes, materiales, iconos y tratamiento del texto |
| Estados | Cómo se distinguen selección, bloqueo, disponibilidad y confirmación |
| Respuesta | Qué cambia tras una acción; distinguir observación de propuesta |
| Transferencia | Qué patrón sirve para nuestra app y cómo debe adaptarse |

Extraer relaciones y comportamientos. Crear arte, símbolos y composición propios. Consultar una galería no concede una licencia para redistribuir sus capturas ni los recursos del juego.

## 3. Seis familias de interfaz

Los juegos nombrados son pistas para buscar referencias, no plantillas analizadas en este documento ni fuentes científicas. Las recetas siguientes son propuestas de diseño propias y se adaptan al producto.

### A. Aventura RPG: mapa, diario y equipo

**Encaja con:** aprendizaje por etapas, exploración de contenidos y proyectos con hitos.

**Composición:** un mapa o territorio ocupa el espacio principal; el estado del jugador aparece en una franja compacta; el nodo elegido abre un diario o panel de misión. La progresión se entiende por caminos y lugares reconocibles.

**Gramática:** papel, tela, madera o metal envejecido; marcos con esquinas construidas; emblemas originales; títulos de carácter editorial y texto de lectura sencillo. La fantasía también puede ser sobria y adulta.

**Componentes distintivos:** nodo de mapa, misión fijada, diario, ficha de habilidad y recompensa de capítulo. Diferenciar nodo accesible, seleccionado, completado y bloqueado mediante forma, icono y texto.

**Respuesta:** el nodo recibe foco; el diario se despliega; tras completar la tarea cambia el sello del nodo y se ilumina el camino disponible. El movimiento comunica la nueva posibilidad.

**Evitar:** textura bajo párrafos largos, tipografía medieval en todo el texto y monedas sin función.

**Pistas de búsqueda:** mapa de misiones de un RPG, diario de aventuras, inventario de equipo.

### B. Juego acogedor: lugar habitable y objetos cotidianos

**Encaja con:** hábitos flexibles, bienestar, organización personal y aprendizaje sin competición.

**Composición:** un pequeño lugar reconocible —mesa, jardín, habitación o isla— contiene las entradas principales. Un panel claro muestra la tarea y permite usar la app sin tener que explorar cada objeto.

**Gramática:** colores cálidos, papel y tela, formas amables, ilustración coherente y pocos elementos a la vez. Los objetos tienen una función comprensible.

**Componentes distintivos:** cuaderno de tareas, colección de recuerdos, jardín de progreso y panel de personalización.

**Respuesta:** un objeto confirma la acción con un cambio pequeño y persistente: aparece una hoja, se coloca un recuerdo o se marca una página. Las tareas siguen disponibles si se omite la animación.

**Evitar:** castigar ausencias, infantilizar a adultos y convertir cada acción en una celebración que interrumpe.

**Pistas de búsqueda:** menús y bolsillos de Animal Crossing; organización de objetos en juegos de granja.

### C. Ciencia ficción: consola y panel de estado

**Encaja con:** herramientas técnicas, paneles de actividad y misiones con información en tiempo real.

**Composición:** área central de trabajo, paneles de estado en los bordes y navegación por módulos. Cada indicador visible tiene una utilidad operativa.

**Gramática:** superficies oscuras o claras de contraste definido, bordes segmentados, etiquetas cortas, números tabulares y un color de acento para selección. Reservar brillos para eventos relevantes.

**Componentes distintivos:** consola de misión, medidor de estado, lista de objetivos y selector de módulo. HUD significa aquí información de estado persistente alrededor del área de trabajo.

**Respuesta:** selección inmediata, transición breve de panel y actualización puntual del indicador afectado.

**Evitar:** texto diminuto, ruido de terminal sin significado, parpadeo continuo y decoración que parece un control activo.

**Pistas de búsqueda:** mapa estelar, consola de nave y panel de equipamiento de juegos de ciencia ficción.

### D. Estrategia: tablero, recursos y árbol de capacidades

**Encaja con:** planificación, formación por competencias y gestión de proyectos con dependencias.

**Composición:** tablero central; objetivos o recursos útiles arriba; inspector contextual al lado; acciones disponibles cerca del elemento seleccionado.

**Gramática:** retícula clara, líneas de dependencia, iconos funcionales, marcos consistentes y selección inequívoca. Puede ser ilustrada, histórica o contemporánea.

**Componentes distintivos:** árbol de habilidades, ficha de unidad o tarea, cola de trabajo y panel de requisitos.

**Respuesta:** previsualizar consecuencia y coste antes de confirmar; al ejecutar, actualizar el elemento y sus dependencias.

**Evitar:** árboles enormes sin alternativa en lista, bloqueos arbitrarios y recursos que duplican métricas sin ayudar a decidir.

**Pistas de búsqueda:** árbol tecnológico y paneles de construcción de Civilization; tableros de estrategia por turnos.

### E. Cartas y colección: elegir, comparar y combinar

**Encaja con:** bibliotecas de recursos, cursos, ejercicios y selección de herramientas.

**Composición:** colección ordenada, zona de selección y detalle ampliado. La carta representa un objeto con identidad y propiedades estables.

**Gramática:** proporción repetible de carta, marco, ilustración, nombre y propiedades en posiciones constantes. La rareza solo existe si hay una diferencia real que explicar.

**Componentes distintivos:** carta, detalle, filtro, colección y espacio para combinar elementos. Proporcionar selección por botones además de arrastre cuando exista arrastre.

**Respuesta:** elevar o perfilar la carta seleccionada; mostrar dónde se añadirá; confirmar la incorporación sin mover toda la colección.

**Evitar:** llamar carta a cualquier rectángulo, esconder información importante tras el giro y simular escasez.

**Pistas de búsqueda:** selección de cartas de Slay the Spire y pantallas de colección de juegos de cartas.

### F. Arcade y ritmo: foco, intento y resultado

**Encaja con:** prácticas breves, ejercicios repetibles y retos donde repetir tiene sentido.

**Composición:** una acción dominante en el centro; objetivo o progreso de sesión cerca; resultado compacto al terminar. El cronómetro es opcional y responde al objetivo de la actividad.

**Gramática:** contraste fuerte, siluetas claras, números grandes y tipografía expresiva solo donde ayuda. El pixel art exige escala y recursos coherentes.

**Componentes distintivos:** objetivo de sesión, contador, secuencia de respuestas y resultado con opción de repetir.

**Respuesta:** confirmar acierto, explicar error y mostrar el resultado del intento. Ajustar la intensidad para que la persona pueda seguir trabajando.

**Evitar:** temporizadores que fuerzan decisiones innecesarias, destellos, sacudidas y presión competitiva por defecto.

**Pistas de búsqueda:** pantallas de selección y resultados de juegos de ritmo; interfaces de retos arcade.

## 4. Contrato visual antes de implementar

El agente debe dejar por escrito estas decisiones, brevemente, antes de extender la interfaz:

| Decisión | Especificación mínima |
| --- | --- |
| Familia | Una base visual y el motivo por el que encaja con la tarea |
| Escena | Distribución del espacio, punto focal y siguiente acción |
| Paleta | Fondo, superficie, texto, selección, éxito, aviso y error |
| Materiales | Tratamiento de panel, marco y botón; dónde se permite textura |
| Tipografía | Estilo de títulos, lectura y cifras; alternativa disponible y licencia |
| Iconografía | Familia de iconos, grosor, relleno y etiquetas |
| Estados | Reposo, foco, selección, pulsación, carga, bloqueo, éxito y error |
| Movimiento | Propósito, duración inicial y alternativa con movimiento reducido |
| Recursos | Qué arte existe, qué debe producirse y qué permiso tiene |
| Adaptación | Cambios de composición para móvil, escritorio y texto ampliado |

Nombrar los valores compartidos y centralizarlos en el sistema del proyecto. Si se usa CSS, convertirlos en variables; si se usa una plataforma nativa, emplear su sistema equivalente. No imponer una librería para resolver detalles que el proyecto ya cubre.

### Receta inicial: aventura RPG de aprendizaje

Propuesta original para arrancar, no reproducción de un juego concreto:

| Elemento | Valor inicial |
| --- | --- |
| Fondo de escena | Verde bosque `#172B28` |
| Panel de lectura | Pergamino `#F4E8CC` con texto `#28251F` |
| Acción principal | Oro `#F2C66D` con texto `#28251F` y base `#70511F` |
| Texto sobre bosque | Marfil `#FFF8EA` |
| Error sobre panel | Rojo `#9E2636` más icono y explicación |
| Forma | Panel de radio moderado, marco doble y esquinas ornamentadas propias |
| Botón | Base inferior de 4 px; al pulsar, desplazamiento de 2 px y base menor |
| Espaciado | Unidad de 4 px; interiores de 16–24 px; separación entre grupos de 24–32 px |
| Lectura | Cuerpo inicial de 16–18 px, interlineado aproximado de 1,5 |
| Tipos | Título con carácter de aventura; cuerpo de alta legibilidad; cifras tabulares |
| Mapa | Caminos originales y nodos con icono, nombre y estado textual |

Estos números son valores de partida. Medir contraste en las combinaciones finales, incluidos foco y texto secundario, y revisar con contenido real. Una paleta por sí sola no certifica accesibilidad.

## 5. Componentes que deben comportarse como un sistema

| Componente | Anatomía | Estados y conducta verificable |
| --- | --- | --- |
| Botón principal | Etiqueta de verbo, superficie y señal de interacción | Foco visible; pulsación perceptible; carga sin doble envío; error que permite reintentar |
| Panel de misión | Objetivo, requisito, progreso y acción | Disponible, en curso, completada y bloqueada; explicar el requisito que falta |
| Nodo de mapa | Icono, nombre y conexión | Accesible por teclado; selección diferente de completado; alternativa en lista |
| Barra de progreso | Cantidad actual, total y etiqueta | Mostrar dato real; conservar el cambio sin animación; tratar total desconocido sin porcentaje falso |
| Ficha de colección | Imagen o símbolo, nombre y propiedades | Seleccionada, disponible y sin obtener; detalle accesible sin depender de pasar el cursor |
| Panel de resultado | Qué ocurrió, progreso obtenido y siguiente paso | Cierre accesible; animación omisible; no volver a conceder la recompensa al abrirlo |
| Árbol de habilidades | Nodos, relaciones y requisitos | Explicar dependencias; evitar conexiones solo por color; ofrecer lectura lineal |
| Navegación de escenas | Icono, nombre y ubicación actual | Volver sin perder trabajo; ruta o estado recuperable; navegación consistente |
| Ajustes | Sonido, movimiento y preferencias pertinentes | Guardar elección; aplicar inmediatamente; controles visibles y comprensibles |

Una acción útil necesita feedback inmediato y un resultado claro. La intensidad se escala según la importancia:

| Evento | Respuesta propuesta | Duración inicial orientativa |
| --- | --- | --- |
| Pasar el puntero o enfocar | Contorno, cursor de selección o cambio de superficie | 80–140 ms |
| Pulsar | Hundimiento o cambio de estado inmediato | 80–120 ms |
| Cambiar de panel | Desplazamiento corto o fundido | 160–240 ms |
| Confirmar tarea | Sello, marca y actualización del progreso | 180–320 ms |
| Completar capítulo | Secuencia breve con resumen y siguiente acción | 400–700 ms, omisible |

Son decisiones iniciales de esta guía, no umbrales científicos. Evitar que una animación bloquee el trabajo, esconda errores o reinicie al renderizar. No retrasar una operación real para que termine una celebración.

El sonido es opcional y necesita control del usuario. La información esencial también debe percibirse sin sonido. Las vibraciones requieren soporte y una alternativa visual.

## 6. Mecánicas con significado y datos fiables

Añadir solo las mecánicas que ayuden al objetivo del producto. Una app puede tener lenguaje visual de videojuego sin economía, clasificación ni experiencia numérica.

| Mecánica | Contrato que hay que definir |
| --- | --- |
| Misión | Acción útil, condición de finalización, requisitos y posibilidad de repetir |
| Experiencia | Por qué se gana, cuánto, cuándo y qué cambia al acumularla |
| Nivel | Umbrales explícitos y capacidades o contenidos que abre |
| Colección | Qué representa cada objeto y cómo se obtiene |
| Racha | Qué cuenta como día, zona horaria, pausas y tratamiento de ausencias |
| Moneda | Utilidad, origen y gasto; mostrar saldo y coste antes de confirmar |
| Clasificación | Participación voluntaria, periodo, empates y privacidad |

Para una misión con recompensa, distinguir **disponible → en curso → completada**. Si existe un botón de reclamar, añadir **pendiente de reclamar → reclamada**. Elegir concesión automática o reclamación explícita y mantener la misma regla.

La operación de completar debe conceder la recompensa una sola vez por intento elegible. Reabrir la pantalla, recargar, hacer doble clic o repetir una petición no debe duplicarla. El permiso para completar y los requisitos se comprueban donde vive la autoridad de los datos.

En una demo local se puede guardar progreso en el dispositivo, explicando que no sincroniza ni resiste manipulación. Para cuentas compartidas entre dispositivos, recompensas con valor o competición, usar la persistencia y validación de servidor apropiadas al proyecto. No presentar almacenamiento local como seguridad.

Si una operación falla, no celebrar como si se hubiera guardado. Conservar el trabajo, mostrar el estado real y ofrecer reintento. Si se permite trabajar sin conexión, definir cómo se reconcilian los cambios.

Las recompensas deben reflejar progreso real. Evitar cuenta atrás falsa, castigos ocultos, compras accidentales y presión social impuesta. La investigación citada al final no permite prometer mejoras universales de motivación o retención.

## 7. Composición en web y móvil

**Escritorio:** aprovechar el espacio con una escena principal y un inspector contextual. Evitar llenar todos los bordes de indicadores. Mantener un orden de lectura y de foco comprensible.

**Móvil:** transformar el inspector en panel inferior o pantalla de detalle; reducir la información persistente a lo que sirve durante la tarea. Reservar espacio para la navegación, áreas seguras y teclado virtual. No reducir toda la escena de escritorio como si fuera una imagen.

**Contenido largo:** usar scroll, búsqueda y filtros donde ayuden a leer o encontrar información. Las pantallas por escenas sirven para agrupar acciones; no justifican cortar texto, bloquear el zoom ni ocultar el desbordamiento de toda la aplicación.

**Mapas:** permitir explorar y volver al objetivo actual. Incluir una lista equivalente con el mismo estado y acciones, especialmente cuando el mapa requiera desplazamiento o zoom.

**Navegación:** conservar las convenciones útiles de la plataforma: volver, enlaces recuperables, teclado y comportamiento del historial. Una barra superior o una lista también pueden pertenecer a una interfaz de juego si su forma y función encajan.

## 8. Accesibilidad y rendimiento desde el principio

- Usar controles semánticos o sus equivalentes nativos; no dibujar todos los botones dentro de un lienzo sin una alternativa accesible.
- Permitir teclado, mostrar foco y devolverlo al lugar correcto al cerrar un diálogo. Etiquetar controles e iconos sin texto.
- Expresar selección, disponibilidad y resultado con más de un canal: texto, forma o icono además del color.
- Admitir texto ampliado, nombres largos, zoom y contenido traducido sin recortar la acción principal.
- Respetar la preferencia de movimiento reducido; sustituir trayectorias y partículas por cambios de estado claros. La aplicación sigue siendo plenamente utilizable.
- Mantener lectura y operación sin sonido, sin depender de pasar el cursor y sin exigir arrastrar objetos.
- Anunciar cambios importantes a tecnologías de asistencia sin leer cada fotograma de un contador.
- Dar espacio suficiente a los controles táctiles y comprobarlo en los dispositivos objetivo. Medir contraste y tamaño según el nivel de accesibilidad exigido por el proyecto.
- Evitar destellos y movimiento continuo que compitan con la lectura. Proporcionar pausa cuando una escena ambiental lo necesite.
- Preferir HTML y CSS para controles; reservar SVG, lienzo o 3D para lo que lo necesite. Limitar partículas, comprimir imágenes y detener efectos fuera de pantalla.
- Cargar decoraciones después de la tarea principal. Si falla un recurso visual, el usuario todavía puede entender y completar la actividad.

## 9. Ejemplo completo: una academia de exploración

**Objetivo real:** que una persona complete una práctica y sepa cuál puede hacer después.

**Dirección:** aventura RPG ilustrada para adultos. Mapa de una expedición, diario claro y símbolos originales. Una misión representa una práctica; los caminos representan sus dependencias.

**Alcance inicial:** tres escenas, una práctica funcional y progreso persistido en el dispositivo como demo. La cuenta y la sincronización quedan fuera de este ejemplo; no se simulan como servicios reales.

### Escena 1: mapa de la expedición

- Zona superior compacta: nombre de la expedición y progreso «2 de 5 prácticas».
- Zona central: cinco nodos con camino; dos completados, uno disponible y dos bloqueados.
- Al seleccionar el nodo disponible, aparece el diario: título, propósito, tiempo orientativo y botón «Empezar práctica».
- Los nodos bloqueados explican qué práctica debe completarse antes.
- En móvil el diario pasa debajo del mapa; el acceso «Ver como lista» muestra las mismas prácticas.

### Escena 2: práctica

- Mostrar la tarea con sus controles habituales y una pequeña indicación «Práctica 3 de 5».
- Permitir responder y corregir. Un fallo explica qué revisar; la interfaz no declara una derrota irreversible.
- El botón de envío muestra carga cuando proceda y evita envíos repetidos.
- El estado de la práctica cambia cuando se cumple la condición definida, no al abrir esta escena.

### Escena 3: resultado y regreso

- Guardar la finalización una sola vez.
- Mostrar «Práctica completada», lo aprendido y el nuevo progreso «3 de 5».
- Añadir un sello breve y omisible, coherente con el diario.
- El botón «Volver al mapa» devuelve al nodo completado y muestra el siguiente disponible.
- Al recargar se conserva el progreso; reabrir el resultado no añade otra finalización.

### Pruebas del recorrido

1. Completar la práctica desde el nodo correcto actualiza mapa y diario.
2. Enviar dos veces o recargar el resultado mantiene una sola finalización.
3. Un fallo de guardado no muestra un éxito definitivo y permite recuperar la operación.
4. El recorrido funciona con teclado y con movimiento reducido.
5. La vista de lista ofrece el mismo acceso y los mismos requisitos que el mapa.
6. A 360 px de ancho y con texto ampliado se puede leer la tarea y activar su acción.

## 10. Cómo evaluar si se ha conseguido

Revisar primero el recorrido útil. Después, comprobar la coherencia visual en capturas de estado inicial, selección, carga, error y éxito. Para juzgar movimiento, observar también la interacción o una grabación.

| Criterio | Evidencia que debe existir |
| --- | --- |
| Dirección reconocible | Las pantallas comparten composición, siluetas, materiales y jerarquía de una familia elegida |
| Transformación del producto | La tarea se organiza mediante un patrón útil: mapa, diario, tablero, consola o colección |
| Estados claros | Se distinguen foco, selección, bloqueo, carga y resultado |
| Acción real | El recorrido modifica el estado y la persistencia prevista funciona |
| Respuesta proporcionada | Las acciones confirman su efecto sin frenar el uso |
| Adaptación | El móvil reorganiza la pantalla; no recorta una maqueta de escritorio |
| Acceso | Teclado, texto ampliado, silencio y movimiento reducido mantienen la tarea |
| Arte coherente | Iconos, tipografía y recursos pertenecen al mismo sistema y tienen uso permitido |

Si un criterio no cumple, señalar el problema observado y corregirlo dentro del alcance. La revisión visual no reemplaza tests; los tests tampoco demuestran por sí solos que el diseño esté conseguido.

Señales de revisión necesaria: misma cuadrícula de tarjetas para todas las escenas; adornos que no representan nada; contadores inventados; estilos mezclados sin criterio; controles que parecen inactivos; recompensas que se repiten al recargar; lectura sacrificada por la ambientación.

## 11. Plantilla de encargo para un agente

Copiar y completar con los datos del proyecto:

```text
Usa Gamified-UI.md como guía para diseñar e implementar esta aplicación.

PRODUCTO
Actividad útil que debe resolver:
Público y contexto de uso:
Recorrido principal:
Plataformas y dispositivos:
Proyecto, tecnología y componentes existentes:
Alcance autorizado y límites:

DIRECCIÓN VISUAL
Familia principal de Gamified-UI:
Referencias disponibles y permiso para utilizarlas:
Qué patrón queremos extraer de cada referencia:
Arte, iconos y tipografías disponibles:
Tono y restricciones de marca:

MECÁNICAS
Progreso que merece representarse:
Condición de finalización de cada tarea:
Desbloqueos o recompensas, si tienen utilidad:
Datos reales, datos simulados y persistencia requerida:

ENTREGA
1. Resume el objetivo y declara los supuestos reversibles.
2. Escribe el contrato visual y la composición para móvil y escritorio.
3. Construye primero un recorrido funcional con sus estados.
4. Extiende los componentes de forma coherente dentro del alcance.
5. Comprueba persistencia, errores, teclado y movimiento reducido.
6. Ejecuta las comprobaciones relevantes del proyecto.
7. Revisa capturas de los estados clave y la interacción real.
8. Entrega resultado, evidencia y limitaciones sin atribuir pruebas no ejecutadas.

Consulta cualquier decisión pendiente que cambie el alcance o el producto.
Adapta la guía a las instrucciones del proyecto y al objetivo de sus usuarios.
```

## 12. Catálogos de referencia y base de investigación

### Herramientas para localizar pantallas

- [Game UI Database](https://www.gameuidatabase.com/): permite buscar pantallas y vídeos por categorías de interfaz y características visuales. Útil para encontrar mapas, inventarios, misiones y resultados comparables al encargo.
- [Interface In Game](https://interfaceingame.com/): permite explorar juegos y capturas por elementos como inventario, misión, progreso, menú o árbol de habilidades.

Son catálogos para localizar referencias, no evidencia de eficacia. Sus páginas se consultaron el 15 de noviembre de 2026; no se ha realizado aquí un análisis visual de sus capturas. Revisar las condiciones aplicables antes de automatizar extracción, enviar imágenes a un modelo o reutilizar contenido. No se redistribuyen recursos de esos catálogos en este archivo.

### Investigación

- [Beyond the HUD: User Interfaces for Increased Player Immersion in FPS Games, Chalmers, 2009](https://odr.chalmers.se/items/d5fe6889-4cc6-49c2-ba56-0d759e2f37eb). Tesis con estudios de usuarios sobre interfaz e inmersión en juegos de disparos en primera persona. Se ha consultado la ficha y su resumen, no el texto completo. Ayuda a plantear la relación entre interfaz, actividad y ficción; no demuestra que esta guía mejore una aplicación educativa o de productividad.

El documento aportado sobre recursos de interfaces de videojuego sirvió como punto de partida para localizar los catálogos y la tesis. Las recetas, duraciones, valores visuales y ejemplos de Gamified-UI son propuestas propias que deben probarse en cada producto. No se presentan libros o charlas no consultados como evidencia.

#tipo/concepto #tema/diseno/interfaces #tema/videojuegos
