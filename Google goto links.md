# Google goto links

**Google cambió cómo entrega los enlaces de resultados**: desde julio-agosto 2026 los links del SERP pasan por un redirect intermedio `google.com/goto?url=[codificado]` en vez de apuntar directo al destino. Confirmado por Google el 26 de agosto de 2026 (Search Engine Land): medida técnica **anti-scraping y anti-bots de IA**. Rollout casi total a finales de agosto. Documentado en la comunidad por Brodie Clark ([@brodieseo](https://x.com/brodieseo), SERP Lens): lo vio en julio en ads y orgánico, con 302 al destino.

## Qué rompe (workflows diarios de SEO)

- **Ya no se ve la URL al hover**: el markup solo muestra el token codificado (no decodificable en local); hay que seguir el 302 para saber el destino
- **Rank trackers y SERP APIs**: resolver los links de una keyword cuesta **500–1.000 requests** (HEAD bloqueados) — datos menos completos, menos frecuentes o más caros; varios vendors (Nozzle, SERP Lens) prefirieron huecos en el histórico antes que datos malos
- **Atribución**: salen en server logs pero **no en GSC** — cruzar referidos se vuelve manual
- **GSC no se ve afectado** (dato de primera parte): se vuelve tu fuente más fiable; reconciliar GSC vs GA4 semanalmente y si GSC aguanta pero GA4-orgánico cae, sospecha del redirect, no de tu contenido

## Quién se salva y quién no

- Grandes vendors absorben el coste (y lo repercuten); scrapers pequeños e in-house quedan fuera o bloqueados
- Es el segundo golpe en un año tras matar `&num=100` (sept 2025, ×10 coste operativo según Semrush)
- Daño colateral positivo para GEO: la mayoría de answer engines nunca dependieron del índice de Google — **Bing gana peso**

## Recursos

- Confirmación: [searchengineland.com](https://searchengineland.com/google-confirms-deploying-goto-url-redirects-to-search-results-links-485926)
- Análisis completo: [blog.on-page.ai](https://blog.on-page.ai/googlecomgoto-live-black-box-serp-breaks) · [simpletiger.com](https://www.simpletiger.com/blog/googles-goto-url-redirect-update)
- Hilo: [@brodieseo en X](https://x.com/brodieseo) · SERP Lens: [serplens.com](https://serplens.com) (integró solución de las primeras, free tier + 14 días Pro)

## Relacionado

- Auditoría y medición propia: [[Auditoría SEO]]
- Crawlers bajo tu control: [[Entity Map con Screaming Frog MCP]], [[Crawl4AI]]
- Ser citado sin depender de Google: [[GEO]], [[LinkedIn Pulse para GEO]]

# #seo #contenido #productividad