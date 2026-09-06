# Despliegue de IA en empresa (3 etapas)

Modelo de **Toni Perez (@toni_pn)** que explica por qué las empresas no consiguen desplegar IA "de verdad" a nivel organizacional: todas pasan por el mismo camino en **3 etapas**. El salto de la etapa 2 a la 3 no va de modelos ni de prompts: va de **datos, accesos y trazabilidad**.

## Etapa 1 — Productividad personal

El chat de toda la vida: presentaciones, reports, mails. El usuario es una persona y **el dato va adjunto a la conversación** (el Excel de márgenes, el contrato, la lista de clientes pegados al chat para que la IA "lo entienda").

- Hay una orden de no subir nada sensible... pero mucha gente se la pasa (la alternativa es hacerlo a mano)
- **Nadie sabe qué se ha subido ni dónde ha acabado**
- Aquí está casi todo el mundo

## Etapa 2 — Agentes básicos

Alguien monta un agente que clasifica mails de soporte, otro conecta un MCP al CRM... lo obvio. Y aquí se lía, porque **el "user" ya no es una persona, es un agente**:

- **Qué es un agente? Qué permisos tiene? Quién se los ha dado y cómo?** Un agente no puede usar el sistema de usuarios tradicional
- Ejemplo: un agente de atención al cliente en la web recibe acceso al CRM con un usuario de servicio que **ve todo**. Un cliente pregunta por su pedido y el agente lee el historial entero, las notas internas del comercial ("cliente difícil, no ofrecer descuento") y de paso los pedidos de otro cliente con el mismo apellido. Nadie sabe qué ha leído ni podría reconstruirlo si el DPO lo pregunta
- **El problema de datos** (no solo de seguridad): llega un mail de `tperez@cliente.com` quejándose de una factura. En Salesforce hay dos "Toni Pérez", en SAP un "T. PEREZ GARCIA" con otro mail, y en facturación el cliente es la empresa, no la persona. El agente llama a `getCustomerByMail` → nada; por nombre → dos; a SAP por el NIF → no lo tiene; pregunta a otro MCP... **seis llamadas, un modelo razonando en cada paso, y al final elige uno — que igual no es el bueno**. Y contesta con la factura de otro cliente

## Etapa 3 — Todos los datos disponibles para la IA, con políticas pensadas para agentes

- **Estructurado enriquecido con no-estructurado**: el contrato, el acta, el mail, anclados al cliente al que pertenecen
- **Cada petición pasa por un solo punto** donde se mira quién pide (persona, sistema o agente), a qué tiene acceso, para qué, y **se registra**
- El agente recibe el dato **ya relacionado y descrito**. No infiere ni se pierde buscándolo

> "Puedes desplegar agentes con garantías y, lo que más me interesa, hacer **inteligencia de negocio de verdad** con información que estaba enterrada en documentos que un sw no podía 'entender'. La IA sí. Eso estaba oculto hasta ahora." — Toni Perez

## La cuarta pieza (aportación de la comunidad)

**Antonio J. Bergo** añade: falta la **memoria**. Las seis llamadas son eso — el agente no recuerda que ayer ya resolvió a ese cliente y lo vuelve a deducir. Y si la memoria solo añade y nunca sustituye, a los meses te sirve como vigente algo que ya no lo es. Toni responde: la **memoria procedural** vive en la capa agéntica; **el resto está en los datos**.

A mayor escala, David Villalón añade que tras estas 3 etapas vienen monitorización continua a coste mínimo, proactividad en alertas y gobernanza — para empresas grandes el reto de producción real.

## Por qué importa

Es el mapa mental para entender **por qué los proyectos de agentes empresariales se atascan**: no es el modelo, es que el agente no tiene identidad, permisos, ni datos relacionados. Conecta con la arquitectura de harness (el agente necesita un entorno diseñado, no prompts) y con los productos de datos/accesos como la capa que falta.

## Recursos

- Hilo original: [@toni_pn en X](https://x.com/toni_pn)
- Autor: [@toni_pn](https://x.com/toni_pn)

## Relacionado

- La arquitectura alrededor del modelo: [[Harness]], [[Learn Harness Engineering]]
- Agentes con memoria persistente: [[Memanto]], [[TencentDB Agent Memory]]
- Bases de datos y estado: [[basededatos]], [[TokenRouter]]
- RAG y datos para agentes: [[Ecosistema de modelos]], [[AnythingLLM]]

# #contenido #agente #basededatos #productividad