# Company Brain

**Framework de ericosiu** ([@ericosiu](https://x.com/ericosiu), 338k views): en doce meses toda empresa correrá un **Company Brain** — quien lo construya este año compone durante el siguiente; el resto remontará. La tesis: tu empresa ya tiene cerebro, solo está **disperso en Slack, Gong, HubSpot y la persona que hoy falta**.

## La arquitectura

- Conectas Slack, GitHub, HubSpot y todas tus herramientas en **una capa de inteligencia**
- Encima montas el org chart: un **cerebro principal** arriba, un **fleet commander** corriendo la flota de agentes y **sub-agentes especialistas** ejecutando
- Por qué funciona: el **change management desaparece** — tu equipo ya vive en Slack, solo añades agentes a la sala donde ya están

## Por qué ahora

En un año dejará de ser ventaja y será **table stakes**. Quien lo construya este año pasa el siguiente componiendo encima.

## Objeciones del hilo (importantes)

- **Mantenimiento y gobernanza** (Gaetan Semet): técnicamente no es difícil; lo duro es decidir cuál es la regla válida en cada caso y revisarlo a escala — el problema es de personas, no de código
- **Los frontier te lo comerán** (Deniss Alimovs): cuando vean tracción en enterprise, ofrecerán esto out-of-the-box
- **Actualización autónoma** (Krishna): el sistema debe mantenerse solo; manualmente es imposible

## MCP a escala: descubrimiento no significa permiso

El [artículo de identidad de Uber](https://www.uber.com/us/en/blog/solving-the-agent-identity-crisis/) describe MCP Gateway como punto de autenticación, autorización y redacción antes de acceder a servicios. La cadena de actores conserva quién inició el trabajo y qué agentes intervinieron: una identidad técnica genérica no basta para atribuir efectos.

El [artículo técnico de octubre, consultado en una copia](https://nitter.cf/UberEng/article/2106071967619322330), separa registro/control y proxy/ejecución. AutoCrawler deriva definiciones de APIs y consulta servidores nativos, pero registra herramientas deshabilitadas: el equipo propietario debe revisarlas y activarlas. Omni MCP descubre servidor, herramientas y esquema antes de ejecutar, sin cargar todo el catálogo en el contexto. Las cifras de más de 800 servidores/5.000 herramientas son las comunicadas por Uber, no un objetivo para cualquier empresa.

La lección aplicable al framework es definir propietario, permisos, trazabilidad, enrutamiento y recuperación antes de multiplicar agentes. El [hilo](https://x.com/santtiagom_/status/2106855197402378246) añade dos preguntas útiles de revisión: ¿un reintento puede repetir una mutación? ¿se puede seguir una llamada entre servicios? Son criterios de diseño, no pruebas de que el gateway elimine todos los riesgos.

## Relacionado

- Memoria para agentes: [[Memanto]], [[TencentDB Agent Memory]]
- Orquestar flotas: [[Fable Orchestrator]], [[HarnessRouter + UHP]]
- Agentes que pilotan negocio: [[Rerun]]
- Gobernanza de IA en empresa: [[Despliegue de IA en empresa (3 etapas)]]

# #agente #productividad #contenido
