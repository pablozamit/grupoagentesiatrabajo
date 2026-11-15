# OpenSEO

OpenSEO es una plataforma de SEO con interfaz web, servidor MCP y skills para agentes. Reúne investigación de keywords y SERP, datos de dominios y backlinks, seguimiento de posiciones, auditorías técnicas, Search Console, Google Analytics 4 y análisis de visibilidad en respuestas de IA. El software autohospedado se publica bajo licencia MIT; también existe el servicio alojado en openseo.so.

## Qué permite hacer

- Investigar keywords, volumen, dificultad, CPC e intención; agruparlas por tema y compararlas con competidores.
- Consultar resultados orgánicos de Google, posición por dominio o URL, backlinks y datos de visibilidad en IA.
- Leer Search Console y Analytics 4 conectados al proyecto. Estas integraciones son de solo lectura y no consumen créditos.
- Auditar páginas con un crawler propio y, opcionalmente, ejecutar Lighthouse o renderizar JavaScript. La auditoría comprueba lo que ha podido rastrear; una página bloqueada o un rastreo parcial no equivalen a una web sin problemas.
- Usar los datos desde la aplicación o mediante MCP. Las skills ofrecen flujos reutilizables para auditorías, investigación de keywords, competidores y reportes.
- Reconstruir el playbook SEO de cualquier web con la skill `/reverse-engineer-seo` (noviembre de 2026): plantillas de página, keywords y estructura detrás de su tráfico de Google. Según OpenSEO, el análisis completo de Wise (una plantilla de página posicionada para 151.315 búsquedas) costó menos de 0,30 $. [Anuncio](https://x.com/openseo/status/2120655159357518144).
- Medir SEO local (noviembre de 2026): comprueba en Google Maps desde puntos repartidos por tu ciudad y muestra quién te supera en cada zona. En su ejemplo, Franklin Barbecue es número 1 para «bbq» solo en 1 de 25 puntos de Austin. [Anuncio](https://x.com/openseo/status/2119878883642421614).

## Coste y dependencias

OpenSEO usa DataForSEO para keywords, SERP, dominios, backlinks y rank tracking. En el servicio alojado, los planes mensuales incluyen créditos y cada consulta muestra su coste máximo antes de ejecutarse; Search Console, Analytics, las exportaciones y los crawls sin Lighthouse ni renderizado no consumen créditos. Como referencia, la documentación consultada en noviembre de 2026 estima hasta 0,015 $ por keyword y comprobación para rank tracking móvil con profundidad Top 40; 100 keywords revisadas semanalmente salen hasta 6 $ al mes. Es un máximo según configuración, no un precio universal. Los planes y tarifas cambian; consultar la página actual antes de presupuestar.

En una instalación propia no se paga una suscripción a OpenSEO, pero se configura una clave de DataForSEO y se paga directamente a ese proveedor. Las funciones de IA pueden requerir además OpenRouter. Search Console y Analytics son opcionales: el despliegue autohospedado requiere crear su propio cliente OAuth de Google. Docker requiere Docker Compose y al menos 4 GB de memoria; para renderizar JavaScript en Docker se necesita también una clave de Context.dev. El despliegue en Cloudflare tiene requisitos y costes propios; el renderizado requiere Workers de pago.

## Límites de las auditorías

El crawler respeta `robots.txt`, se limita al host indicado y puede quedar bloqueado por firewall o límites del sitio. El plan gratuito alojado limita una auditoría a 50 páginas; los planes de pago y el autohospedado llegan a 10.000. El crawl básico no consume créditos, pero Lighthouse y la renderización JavaScript sí pueden hacerlo. Si el crawl se detiene pronto, el informe solo describe las páginas leídas. Hay que revisar los estados de rastreo fallido o bloqueado antes de interpretar «sin problemas».

## Cuándo encaja

Sirve para centralizar datos SEO de varias fuentes y dejar que un agente los consulte y organice en flujos repetibles. Un uso práctico es combinar Search Console y Analytics con keywords, páginas de competidores y auditorías para decidir qué contenidos o arreglos priorizar. Los datos ayudan a investigar; no demuestran por sí solos que una keyword genere demanda rentable ni que una recomendación vaya a mejorar posiciones.

## Recursos

- [Aplicación y planes](https://openseo.so/)
- [Repositorio OpenSEO (MIT)](https://github.com/every-app/open-seo)
- [Documentación](https://openseo.so/docs)
- [Autohospedaje](https://openseo.so/docs/self-hosting)
- [Auditorías de sitio](https://openseo.so/docs/site-audits)
- [MCP y skills](https://openseo.so/docs/agent-setup)
- [Skill reverse-engineer-seo](https://seo.party/skills/every-app/reverse-engineer-seo)
- [Search Console y Analytics](https://openseo.so/docs/google-integrations)

## Relacionado

- [[Auditoría SEO]]
- [[Skills SEO gratis (TimSEO)]]
- [[Entity Map con Screaming Frog MCP]]


#tipo/skill #tema/agentes #tema/marketing/seo
