# Phone Use

Categoría de herramientas que permiten a agentes operar teléfonos físicos, emuladores o teléfonos alojados en la nube. El modo de conexión importa: un endpoint MCP alojado no da acceso al teléfono personal del usuario.

## Phone Harness: MCP de nube y CLI local

- **MCP de nube:** el agente se conecta por HTTPS a un teléfono alojado por Phone Harness Cloud: un iPhone dedicado o un emulador Android. Pegar la URL del MCP no da acceso al teléfono personal.
- **CLI local:** puede controlar un iPhone personal mediante iPhone Mirroring en un Mac compatible o un Android mediante ADB. El emparejamiento, la conexión y los permisos se configuran localmente.

El agente puede leer la pantalla, tocar, escribir y deslizar. La interfaz de nube también permite dispositivos guardados con aplicaciones y sesiones que pueden persistir. Antes de conectar una cuenta sensible, comprobar aislamiento entre clientes, acceso del operador, telemetría, cifrado, retención y borrado. Mantener aprobación humana para mensajes, compras, operaciones financieras y accesos con códigos SMS; no entregar credenciales innecesarias al agente.

La conversación recuperada no responde en detalle a todas las preguntas de privacidad y seguridad. No presentar el servicio en la nube como control local y gratuito del móvil propio.

- [MCP de Phone Harness](https://github.com/phone-harness/mcp)
- [CLI y conexión de teléfonos propios](https://github.com/phone-harness/phone-harness)

## Relacionado

- [[Mobile MCP]] — control local de simuladores y dispositivos conectados.
- [[Baguette]] — granja headless de simuladores iOS.
- [[WhatsApp personal para agentes de IA]] — integración no oficial con WhatsApp y sus riesgos.

# #agente #contenido #productividad
