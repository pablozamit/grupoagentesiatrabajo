# Beatdeck

[Beatdeck](https://github.com/borjaperfra/beatdeck) es un motor abierto para presentaciones como pequeñas aplicaciones web. Usa React, TypeScript, Vite y GSAP: cada escena contiene pasos o **beats**, y cada clic avanza un paso, no necesariamente una diapositiva.

## Modelo de presentación

- Escenario fijo de 1920×1080, escalado con bandas negras: no reordena el contenido al cambiar de pantalla.
- Estado `{ scene, beat }`, direccionable por fragmentos como `#3.4`. Avanzar, retroceder y recargar deben reconstruir el mismo fotograma.
- Diagramas SVG, terminales, contadores, gráficos y partículas se construyen progresivamente al ritmo del ponente. Las animaciones automáticas se programan por separado.
- Ventana del presentador con notas, siguiente paso y temporizador; vista general, blackout y navegación por teclado o pasador.
- El build comprueba que fuentes y recursos no dependan de la red. No incluye backend.

## Trabajo con un agente

La skill `skills/building-a-beatdeck/` documenta la transformación de una fuente o PPTX en contenido auditado, mapa de escenas/pasos, tema y componentes. El agente puede cambiar una escena sin reinventar el motor.

`npm run init` crea una charla limpia; `npm run build` comprueba tipos, genera el bundle y valida el modo offline. `npm run verify` recorre todos los pasos hacia delante, atrás y por URL, compara píxeles y comprueba consola, QR, ventanas de operación y peticiones remotas. Además de pasar las pruebas, hay que mirar todos los fotogramas: las pruebas no prueban por sí solas que la explicación o el diseño sean buenos.

## Cuándo elegirlo

Útil para charlas técnicas con arquitecturas que crecen, demostraciones y ritmo controlado. Exige un flujo de desarrollo web; no entrega un PowerPoint editable convencional. El escenario fijo no es un diseño responsive. El código y la documentación tienen licencia MIT; los recursos del ejemplo Kernel Panic conservan sus propias condiciones.

En el [hilo de Antonio Leiva](https://x.com/antonioleivag/status/2107833536669532671) se ve una demo de 42 segundos de un motor propio de slides para explicar embeddings. Es un ejemplo de presentaciones hechas con agentes, no prueba de que use Beatdeck ni de ahorros universales. El artículo citado de Borja enlaza Beatdeck y el [ejemplo Kernel Panic](https://helmcode.com/slides/kernel-panic). Las afirmaciones de pasar de semanas a minutos son experiencias del autor.

## Recursos

- [Repositorio y README](https://github.com/borjaperfra/beatdeck)
- [Artículo: presentaciones como software](https://x.com/i/article/2107765673124327424), difusión y explicación del diseño

## Relacionado

- [[Bolt Slides]]: otro sistema React para presentaciones con agentes.
- [[Open Design]]: documentos y contenido en HTML con agentes.
- [[Claude Code]]: agente de código para construir e iterar.

#opensource #diseno #productividad #agente
