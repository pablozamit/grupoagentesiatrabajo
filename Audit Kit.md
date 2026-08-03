# Audit Kit

[Danilaa1/auditkit](https://github.com/Danilaa1/auditkit) — Una herramienta que se usa desde la terminal para **auditar páginas web** de forma rápida y sin perder tiempo. Creada para freelancers y agencias que necesitan revisar webs de clientes.

## ¿Qué problema resuelve?

Cuando trabajas con clientes, a menudo tienes que revisar su web para saber qué falla: problemas de HTML, seguridad, rendimiento, etc. Normalmente habría que abrir varias herramientas, recordar qué revisar, y luego montar un informe. Audit Kit lo hace todo con un par de comandos.

## Casos de uso

- **Un freelance que va a rediseñar una web**: antes de empezar, ejecuta `ak check` y en segundos tiene un informe de todo lo que está mal en el HTML y el SEO básico.
- **Una agencia que entrega informes a clientes**: ejecuta `ak new` para crear un workspace del cliente, luego `ak inspect latest` para lanzar todas las auditorías, y `ak report latest` para generar el informe final listo para enviar.
- **Un desarrollador que quiere mejorar el rendimiento**: `ak lighthouse https://ejemplo.com --save ~/audits` ejecuta Lighthouse y guarda el resultado en markdown y JSON.
- **Un consultor de seguridad**: `ak security https://ejemplo.com` revisa cabeceras de seguridad en segundos.

## Cómo se instala

```bash
npm install -g auditkit
# o con bun:
bun add -g auditkit
```

Necesitas tener Rust, Node.js 24+ y Chrome (o Chromium, Brave, Edge) para Lighthouse.

## Comandos principales

| Comando | Qué hace |
|---|---|
| `ak check` | Auditoría guiada: te pide la URL y te muestra los resultados |
| `ak check https://ejemplo.com --save ~/audits` | Lo mismo pero guarda el resultado en un archivo |
| `ak security https://ejemplo.com --save ~/audits` | Revisa cabeceras de seguridad |
| `ak lighthouse https://ejemplo.com --save ~/audits` | Ejecuta Lighthouse (rendimiento, accesibilidad, etc.) |
| `ak inspect https://ejemplo.com --save ~/audits` | Ejecuta todas las auditorías de golpe |
| `ak new` | Crea un workspace completo para un cliente nuevo |
| `ak inspect latest` | Ejecuta todas las auditorías en el último workspace |
| `ak report latest` | Genera el informe final y un email para el cliente |

## Cómo es un flujo completo con un cliente

```bash
ak new                    # te pregunta nombre del cliente, crea la carpeta
ak inspect latest         # ejecuta todas las auditorías
ak report latest          # genera informe final + borrador de email
```

Todo queda en `audits/<fecha-cliente>/` con archivos separados: informe técnico, hallazgos, informe final, y borrador de email.

Relacionado: [[Best AEO Skill]], [[GEO]], [[#seo]]

# #web #seo #herramientas #auditoria
