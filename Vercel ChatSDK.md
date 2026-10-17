# Vercel ChatSDK

**ChatSDK** es el paquete de [Vercel](https://vercel.com) para construir interfaces de chat conversacional sobre una base agéntica propia. Según [@alberduris](https://x.com/alberduris/status/2035276301473341709), Vercel habría empaquetado en él "el +90% del valor real de Openclaw", de modo que puedes tener la mecánica de un chat con agentes **sin heredar el resto del stack** de ese proyecto. Es una cita del autor, no una medición.

## Qué aporta

- **Capa de chat lista para agentes**: el patrón de UI + streaming + tool-calling que hizo populares a los asistentes tipo Openclaw, extraído como pieza reutilizable.
- **Agnóstico de la base agéntica**: se presenta como algo sobre lo que construir, sea cual sea el agente o el modelo que haya detrás.
- Se apoya en el ecosistema de Vercel (deploy, edge, componentes de interfaz), así que encaja bien si ya publicas ahí.

## Caveat de atribución

La comparación con "Openclaw" es del anuncio en X: conviene tratarla como **opinión**, no como una equivalencia funcional demostrada. La cifra "90% del valor" no tiene método publicado. Verificar la documentación oficial y el alcance real de la librería antes de adoptarla como sustituto.

## Relacionado

- [[Readwise CLI]] - otra pieza que expone una biblioteca propia a los agentes
- [[Firecrawl]] - para dar lectura web al agente del chat
- [[Opencode]] - otra base para construir agentes, orientada a terminal

# #agente #contenido #opensource
