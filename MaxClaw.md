# MaxClaw

**MaxClaw** es la versión **gestionada de OpenClaw que lanzó MiniMax**: el mismo agente persistente que ejecuta comandos, navega, escribe archivos y vive en tus apps de mensajería, pero sin VPS, Docker, claves de API que rotar ni mantenimiento. Se despliega desde [agent.minimax.io](https://agent.minimax.io/) en unos segundos y se difundió a través del artículo de [@alex_prompter](https://x.com/alex_prompter/status/2031058834316292399).

## Qué es

Según el artículo, MaxClaw combina tres piezas en un solo producto:

1. El framework completo de **OpenClaw** (bucle de agente: entrada, contexto, modelo, herramientas, ejecución, respuesta).
2. La infraestructura cloud gestionada de **MiniMax**.
3. El modelo **MiniMax M2.5**, ajustado para cargas de trabajo agénticas.

El flujo de despliegue que describe: entrar en agent.minimax.io, elegir MaxClaw, pulsar "Deploy Now" y vincular la plataforma de mensajería. Sin elegir servidor, sin claves SSH y sin comandos de Docker. También está en iOS y Android con sincronización entre dispositivos.

## Qué puede hacer

- Navegación web e investigación en tiempo real.
- Ejecución y generación de código.
- Análisis de archivos y procesamiento de documentos.
- Comprensión de imagen y vídeo.
- Scripts de automatización y tareas programadas.
- Despliegue web y búsqueda visual.
- Flujos de razonamiento de varios pasos.

Además se conecta a **Expert 2.0**, una biblioteca de más de 10.000 agentes expertos preconstruidos (investigación, contenido, seguimiento de tendencias, modelado financiero, inteligencia competitiva). La creación de un agente propio se hace describiendo en lenguaje natural lo que se quiere; el sistema organiza el SOP, las herramientas y la configuración.

## Memoria y presencia

- **Memoria a largo plazo de más de 200.000 tokens**, según el anuncio: recuerda conversaciones anteriores y adapta el estilo de trabajo con el uso.
- **Personalidad configurable**: nombre, tono y rasgos de comportamiento.
- **Vive donde ya trabajas**: Telegram, WhatsApp, Discord y Slack; también Feishu y DingTalk para equipos.

## Datos y atribución

- **Lanzamiento**: 25 de febrero de 2026, según el artículo de @alex_prompter; es una fecha del texto, no verificada de forma independiente.
- **Cifras atribuidas al anuncio**: OpenClaw con más de 150.000 estrellas en GitHub en menos de una semana, y MaxClaw con 10.000+ agentes Expert 2.0.
- **Sin coste de API aparte**: el artículo afirma que la cadena de herramientas de OpenClaw va incluida, sin suscripciones de terceros; conviene comprobarlo en la web del producto porque las condiciones pueden cambiar.
- El texto es en parte promocional; los datos de rendimiento y de usuarios provienen del propio anuncio.

## Relacionado

- [[OpenClaw Supermemory]] - memoria a largo plazo para OpenClaw autoalojado: la alternativa si quieres controlar tú la infraestructura
- [[Hermes Agent]] - otro agente persistente con plugins, memoria y tareas programadas
- [[Kapso]] - WhatsApp oficial como plugin para agentes OpenClaw
- [[VPS]] - la vía autoalojada que MaxClaw evita

# #agente #productividad #hosting
