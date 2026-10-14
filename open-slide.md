# open-slide

Framework de presentaciones para agentes: un workspace React/Vite con canvas 1920×1080, skills de creación y revisión, y runtime de presentación. [Repositorio](https://github.com/open-slide/open-slide), MIT; verificado 14-oct-2026. Es herramienta distinta de [[Bolt Slides]] y [[Beatdeck]].

## Flujo

El scaffolder prepara proyecto; `/create-slide` define tema/estética, páginas, densidad y movimiento. El editor permite afinar disposición en canvas; el inspector guarda comentarios como marcadores en fuente para que `/apply-comments` aplique cambios. Assets por deck y búsqueda de logos; modo pantalla completa/presentador con notas, reloj y siguiente slide.

README documenta export a sitio HTML estático, PDF y PPTX editable. PPTX se genera en navegador con texto, formas e imágenes como objetos nativos. Eso no garantiza conservar cada efecto, animación, fuente o composición: abrir el archivo en PowerPoint y revisar píxeles y editabilidad real antes de entregar. No sustituir revisión por un comando que acaba sin error.

## open-slide 2.0 y evidencia visual

El [hilo de Yiwei Ho](https://x.com/1weiho/status/2103873490730549558) anuncia editor visual, export editable y UI rediseñada. Se inspeccionó el vídeo principal 78s y el clip 16s del editor: mover/redimensionar/rotar elementos, panel de formato y una demostración de objetos PPTX. Son demos del autor, no un archivo exportado que hayamos probado con PowerPoint. Los otros clips cortos del hilo no se usaron como prueba adicional.

## Límites

Las skills generan código; hace falta entorno Node/pnpm y revisión de dependencias. No es un generador que garantice contenido correcto ni que una marca pueda usarse sin permiso. Desplegar HTML puede hacerlo visible públicamente: no publicar decks privados por defecto. Mantener fuente y export juntos para corregir pérdida de fidelidad.

Ver también: [[Beatdeck]], [[Bolt Slides]], [[Vibecoding]].

#opensource #diseno #productividad
