# SPACE (Perplexity)

**SPACE** (Sandboxed Platform for Agentic Code Execution) es la plataforma de sandbox con la que Perplexity ejecuta cada tarea de Perplexity Computer, publicada como open source ([github.com/perplexityai/SPACE](https://github.com/perplexityai/SPACE), Apache 2.0, ~1,3k ⭐ y 102 forks). La anunció la cuenta oficial ([@perplexity_ai](https://x.com/perplexity_ai/status/2110778478312481167), 15 de octubre de 2026).

## Qué es

Da a cada tarea de un agente su propia **microVM Firecracker** y controla desde fuera de la VM las credenciales y el tráfico de salida. La aplicación decide qué ejecutar y qué resultados guardar; SPACE gestiona el sandbox, sus procesos y la conexión que transporta la salida.

- **Templates**: plantilla de entorno desde la que se crea cada sandbox.
- **Sandbox**: instancia con su propia VM y sistema de archivos escribible; varios comandos pueden correr en el mismo.
- **Ciclo de vida**: crear, pausar, suspender y despertar; los cambios son asíncronos y devuelven un ID de operación que se consulta.

## API

Se maneja por HTTP y server-sent events (no hace falta incrustar Rust). El API permite crear sandboxes, ejecutar comandos, recoger su salida y gestionar el ciclo de vida. Incluye un **wrapper de compatibilidad con E2B** para reutilizar su SDK de Python ya probado.

- Guía: [space.docs.perplexity.ai](https://space.docs.perplexity.ai/guide/index.html)
- Se puede desplegar en un clúster local (Kind) o sin Kubernetes; hay una referencia de despliegue en EKS.

## Relacionado

- [[Fly Sprites (Jev)]]
- [[Elemental Sandbox]]
- [[Instabox]]
- [[InstaCloud]]

# #agente #opensource #hosting
