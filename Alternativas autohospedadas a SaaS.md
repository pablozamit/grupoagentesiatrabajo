# Alternativas autohospedadas a SaaS

Autohospedar software puede cambiar una suscripción por control de la infraestructura. No elimina el coste: servidor, almacenamiento, correo, backups, actualizaciones, seguridad, disponibilidad y soporte pasan al operador.

## Diez candidatos, no diez reemplazos idénticos

| Necesidad | Proyecto | Qué revisar antes de migrar |
|---|---|---|
| Automatización tipo Zapier | [n8n](https://github.com/n8n-io/n8n) | Fair-code, **no licencia open source**: Sustainable Use limita venta de acceso y algunos productos para terceros. [Licencia oficial](https://docs.n8n.io/sustainable-use-license/). |
| Reservas tipo Calendly | [Cal.diy](https://github.com/calcom/cal.diy) | La URL histórica de Cal.com consultada redirige a esta edición MIT; README recomienda uso personal, no producción. No confundirlo con el SaaS comercial. |
| Analítica web tipo Google Analytics | [Plausible CE](https://github.com/plausible/analytics) | AGPL; CE y cloud tienen funciones distintas. No copia todos los informes de Google Analytics. |
| Diseño tipo Figma | [Penpot](https://github.com/penpot/penpot) | MPL 2.0; edición enterprise de pago para gobierno, permisos y SSO. Probar importación y flujo con desarrolladores. |
| Chat de equipo tipo Slack | [Mattermost](https://github.com/mattermost/mattermost) | Open-core; revisar licencia y funciones de la edición exacta, PostgreSQL y operación del servicio. |
| Videollamadas tipo Zoom | [Jitsi Meet](https://github.com/jitsi/jitsi-meet) | Apache 2.0; la capacidad de llamadas depende de red e infraestructura, no solo del instalador. |
| Backend tipo Firebase | [Supabase](https://github.com/supabase/supabase) | Base Postgres y componentes abiertos; el README aclara que no es un mapeo 1:1 de Firebase. Migrar datos, auth y permisos exige trabajo. |
| Analítica de producto tipo Mixpanel | [PostHog](https://github.com/PostHog/posthog) | El autohospedaje documentado es una instancia hobby avanzada; recomienda 4 GB de memoria. No tratarlo como garantía de producción. |
| Documentos/workspace tipo Notion | [AppFlowy](https://github.com/AppFlowy-IO/AppFlowy) | AGPLv3; comprobar colaboración, sync y funciones según edición y despliegue. |
| Archivos tipo Drive | [Nextcloud](https://github.com/nextcloud/server) | AGPLv3; operación, almacenamiento, upgrades y apps elegidas son parte del coste. |

## Método de decisión

Inventariar las funciones realmente usadas, probar migración y exportación con datos no sensibles, medir carga y recuperación de backup, asignar responsable de parches y calcular coste total. Elegir servicio gestionado cuando la operación propia cuesta más que la suscripción.

El [listado difundido en X](https://x.com/bigaiguy/status/2060286909008806244) afirma «todos gratis y open source», «un comando» y «todos en un servidor de $5/mes». La licencia n8n ya contradice la primera generalización; los READMEs no sustentan la última ni una sustitución funcional completa. No se incorporan ahorros anuales, estrellas ni precios de competidores como cifras actuales.

## Relacionado

- [[Vibecode It Yourself]]: construir un reemplazo propio es otra opción; tampoco elimina mantenimiento.
- [[Open WebUI]]: interfaz autohospedada para modelos.
- [[OpenPencil]]: alternativa abierta de diseño.
- [[InstaCloud]]: infraestructura para agentes.

#contenido #web #productividad
