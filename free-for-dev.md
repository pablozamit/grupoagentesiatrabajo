# free-for.dev

**free-for.dev** (repo: `ripienaar/free-for-dev`) es la lista más completa de servicios SaaS, PaaS e IaaS con **tiers gratuitos** para desarrolladores. 132k estrellas, mantenida a diario desde 2015, con 2.000+ contribuidores añadiendo nuevos servicios gratis y eliminando los que ya no lo son cada semana. Es el primer sitio al que ir cuando empiezas un side project y no quieres paguetear: ya ha hecho por ti la búsqueda de "¿es esto realmente gratis?".

## La regla que nunca rompen

> Si no es gratis durante al menos un año, no entra en la lista.

No valen trials de 14 días. Y hay una segunda regla igual de estricta: **si el certificado TLS no es también gratis, el servicio se borra**. Esto filtra todo lo que parece gratis pero te cobra por lo básico (HTTPS).

## Qué encontrarás dentro

Categorías principales (hay 60+ secciones, aquí las más útiles para empezar):

| Categoría | Qué incluye | Ejemplos destacados |
|---|---|---|
| **Major Cloud Providers** | Always-free limits de GCP, AWS, Azure, Oracle, IBM y Cloudflare | [[Oracle Cloud Free Tier]] (2 VMs ARM, 12 GB RAM, sin límite de tiempo), AWS Lambda (1M de invocaciones/mes), Cloudflare (DNS + CDN + SSL ilimitado gratis), Google Cloud Run (2M de peticiones/mes) |
| **Hosting / PaaS / BaaS** | Hosting estático, backends, serverless | [[Vercel]], Netlify, Render, Supabase, Cloudflare Pages, [[Here.Now]] |
| **Managed Data Services** | Bases de datos gestionadas con free tier | Neon (Postgres), MongoDB Atlas (512 MB), Aiven (Postgres/MySQL/Redis), Turso (SQLite en el edge) |
| **Generative AI** | Plataformas de IA con tier gratuito | OpenRouter (modelos gratis), Langfuse (50k observaciones/mes), Pollinations.AI |
| **DNS / Domain** | DNS hosting y subdominios gratis | Cloudflare 1.1.1.1, deSEC, DuckDNS, freedns.afraid.org |
| **Email** | APIs transaccionales y reenvío | Resend (3k/mes), Brevo (9k/mes), Maileroo (5k/mes) |
| **Auth** | Autenticación gestionada | Clerk (50k MAU), Auth0 (25k MAU), WorkOS (1M MAU), Supabase Auth |
| **Monitoring / CI-CD / Testing** | Observabilidad, CI, testing | Grafana Cloud, UptimeRobot, GitHub Actions, CircleCI |
| **Tunneling** | Exponer localhost a internet | ngrok, Cloudflare Tunnel, Tailscale (100 dispositivos) |
| **Storage** | Almacenamiento de objetos e imágenes | Backblaze B2 (10 GB), Cloudinary, Pinata (IPFS, 1 GB) |

## Por qué es la primera parada de cualquier proyecto

Cada side project empieza con los mismos 20 minutos de googlear "¿es esto de verdad gratis?". Este repo ya hizo esa búsqueda por ti — y la **repite cada semana**, porque los tiers gratuitos cambian, se reducen o desaparecen sin avisar. Marcarlo para el próximo proyecto te ahorra esa búsqueda repetida.

## Para agentes de IA

La lista es especialmente útil para **agentes que necesitan infraestructura sin que un humano se registre**:

- **Bases de datos gestionadas** para persistencia de agentes (Neon, Turso, Supabase).
- **APIs de scraping y búsqueda** para dar acceso a internet ([[Firecrawl]], [[Apify]], Brave Search).
- **Imágenes de stock semánticas** para alimentar contenido y video: [[Pexafy]] (9 fuentes, 9M+ fotos, 5k/mes gratis).
- **Plataformas de email** para que un agente tenga su propio inbox ([[Atomic Mail]], Resend).
- **Hosting estático** para desplegar lo que el agente construye ([[Vercel]], Cloudflare Pages, [[Here.Now]]).
- **Servicios de IA** con free tier para no gastar créditos mientras pruebas ([[OpenRouter]], [[AgentRouter]], [[ZenMux AI]]).

## Cómo usarlo

- **Lee el README** en [github.com/ripienaar/free-for-dev](https://github.com/ripienaar/free-for-dev) — el índice al principio te lleva directo a la categoría que necesitas.
- **Usa Ctrl+F**: la lista es enorme (1.600+ servicios), mejor buscar por palabra clave que scrollear.
- **Verifica antes de usar**: aunque la lista se actualiza, los tiers cambian. Comprueba siempre la página oficial del servicio antes de construir algo sobre él.
- **Contribuye**: si encuentras un servicio gratis que no está, o uno que ya no es gratis, abre un PR.

## Recursos

- Repositorio: [github.com/ripienaar/free-for-dev](https://github.com/ripienaar/free-for-dev)
- Web: [free-for.dev](https://free-for.dev)

## Relacionado

- Tiers gratuitos concretos ya documentados: [[Oracle Cloud Free Tier]], [[VPS]], [[Here.Now]]
- Hosting para desplegar lo que construyes: [[Vercel]], [[OpenShip]], [[Cuentas Temporales de Cloudflare]]
- APIs de scraping para agentes: [[Firecrawl]], [[Apify]]
- Email API-first para agentes: [[Atomic Mail]]
- Créditos API al registrarte: [[AgentRouter]], [[ZenMux AI]]
- Modelos de IA gratis: [[OpenRouter]]

# #hosting #oportunidades #contenido #agente