# Auditoría SEO

**Plantilla de prompt para una auditoría técnica SEO completa de un sitio más un cierre de ciclo de conversión.** El objetivo es que la IA audite el sitio basándose en código real, páginas online y datos de búsqueda (no en suposiciones), priorice los problemas por riesgo y ejecute las optimizaciones por lotes seguros. Cubre SEO técnico, estrategia de contenido, rendimiento, GEO (IA) y atribución de conversiones.

## Cuándo usarla

Aplicable a: SEO técnico, auditoría completa del sitio, crecimiento de búsqueda orgánica, planificación de contenido, resolución de problemas de rendimiento y cierre del ciclo de atribución de conversiones.

## Variables de entrada

| Variable | Requerido | Ejemplo |
|---|---|---|
| `website_url` | Sí | https://example.com |
| `site_type` | Sí | SaaS (o ecommerce, corporativo, blog, herramienta, local) |
| `core_business` | Sí | Software de colaboración en equipo |
| `target_users` | Sí | Directores de pymes |
| `target_region` | Sí | España / Latinoamérica |
| `languages` | Sí | Español |
| `conversion` | Sí | Registro / compra / demo |
| `tech_stack` | No | Nuxt + PostgreSQL + Caddy |
| `available_data` | Sí | GSC, GA4, logs del servidor, pedidos |
| `mode` | Sí | Solo auditar / auditar + optimizar bajo riesgo / ciclo continuo |

> Si el usuario deja un campo en blanco o con solo ejemplo, la IA debe **preguntar** y marcar "pendiente de confirmación", nunca inventar el valor.

## Fases del prompt

1. **Establecer la línea de base real** — clics, impresiones, CTR y ranking promedio a 7/28/90 días; distribución por bandas de posición; diferencias desktop/móvil.
2. **Auditoría técnica SEO** — códigos HTTP (5xx, 404, soft-404, cadenas), canonical, sitemap, robots.txt, noindex en páginas de utilidad, renderizado JS, hreflang, schema.org, Core Web Vitals, rendimiento de imágenes y cabeceras de seguridad.
3. **Auditoría de contenido por página** — intención de búsqueda, originality/osidad de valor, títulos/descripciones para CTR, contenido duplicado o canibalización, actualizaciones.
4. **Estrategia de keywords y contenido** — reparto por intención (60% alta intención, 25% tutoriales, 15% experimentos) y requisitos de cada pieza nueva.
5. **GEO y optimización para IA** — respuesta directa, estructura clara, fuentes verificables, FAQ y consistencia de marca (SEO y GEO comparten los mismos hechos, sin contenido hueco).
6. **Ciclo de conversión cerrado** — aplicar la cadena `búsqueda → landing → producto → registro/consulta → pedido → pago → ingreso`, con orden de atribución y snapshot de fuentes en cada evento.

## Entregable

- Resumen de conclusiones (`一`), listado de problemas P0–P3, oportunidades de keywords/páginas, orden de ejecución de bajo riesgo, contenido a crear/mejorar, impacto y riesgo estimado, plan de test/lanzamiento/rollback, métricas de monitoreo 7/14/28 días y condiciones para la siguiente ronda.

## Reglas de seguridad clave

- **Prohibido** inventar datos de ranking, tráfico, ingresos o casos de cliente.
- Los cambios se publican **por lotes pequeños** con rollback; nunca alterar URL/canonical/sitemap/noindex/pagos a gran escala sin evaluación de riesgo.
- No copiar claves, cookies, credenciales ni datos de clientes al modelo.
- Distinguir siempre **hecho, hipótesis y pendiente de verificación**.

## Relacionado

- [[GEO]] — la nota-tema hermana; esta plantilla incluye la fase GEO (optimización para IA)
- [[Best AEO Skill]] — auditoría de presencia en IA (GEO Score) complementario
- [[#seo]] — hub de notas de la categoría

# #seo #contenido #productividad