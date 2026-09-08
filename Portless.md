# Portless

**Portless** (repo: `vercel-labs/portless`) es una herramienta de desarrollo que **sustituye los números de puerto por URLs `.localhost` con nombre estable** para cada proyecto local: `https://myapp.localhost` en vez de `http://localhost:3000`. 12.1k ⭐ en GitHub (repo creado en feb 2026, subió a 12k en medio año). Vercel Labs. Para humanos **y agentes**.

## El problema que resuelve

En un monorepo con varias apps, los puertos se alinean 3000/3001/3002... y tras un reinicio **se reordenan**: tus bookmarks se rompen. Para verlo en el móvil tienes que buscar la IP de la intranet y añadir el puerto; para enseñárselo a un colega tienes que abrir ngrok sobre la marcha.

**Para agentes de IA es peor**: un agente que debe "testear el login en el dashboard" necesita una **URL estable y predecible**. Si el puerto cambia cada arranque, el script del agente falla o tiene que parsear el output del terminal para adivinar el puerto.

## Cómo funciona

- Asigna nombres tipo `app.localhost` a cada proyecto, con **HTTPS y HTTP/2 por defecto**
- En el primer run genera una **CA local**, la instala como confiable y se ata al puerto 443
- El puerto real lo elige al azar entre **4000-4999** y lo pasa a tu app via `PORT`
- Para frameworks que ignoran `PORT` (Vite, Astro, React Router, Angular, Expo, React Native) **inyecta automáticamente `--port` y `--host`**
- Guarda el mapeo hostname→puerto en un estado local (routes.json) — el "libro de direcciones" del proxy

## Instalación y uso

```bash
npm install -g portless
```

```bash
portless myapp next dev        # -> https://myapp.localhost
portless                        # infiere nombre y corre el script "dev"
```

Config por proyecto (`portless.json`):
```json
{ "name": "myapp" }
```

## Monorepo

Un solo `portless.json` en la raíz cubre todos los paquetes. Descubre los workspaces desde `pnpm-workspace.yaml` o el campo `workspaces` de `package.json`:

```json
{
  "apps": {
    "apps/web": { "name": "myapp" },
    "apps/api": { "name": "api.myapp" }
  }
}
```

```bash
portless                    # desde la raíz: arranca todos los paquetes con "dev"
cd apps/web && portless     # arranca solo uno
```

Convención de hostnames sin mapa: `<package>.<project>.localhost`.

## Compartir y exponer

- **`--lan`** — se ata a todas las interfaces de red; con mDNS los móviles de la misma red acceden vía dominios `.local`
- **`--tailscale`** — comparte la app en tu tailnet
- **`--funnel`** — comparte públicamente via Tailscale Funnel
- **`--ngrok`** — comparte públicamente via ngrok
- **`portless service install`** — instala el proxy como servicio de arranque (launchd, systemd o Task Scheduler en Windows): URLs HTTPS estables tras reiniciar

## Por qué importa

> *"Los números de puerto nunca fueron algo que la gente debiera recordar."*

Conecta con la filosofía de la enciclopedia: **URLs estables = agentes fiables**. El mismo argumento que [[Learn Harness Engineering]] aplica al harness (estado predecible para agentes) aplica aquí al entorno de desarrollo local: darle al agente una URL estable en vez de un puerto volátil.

## Recursos

- Repositorio: [github.com/vercel-labs/portless](https://github.com/vercel-labs/portless)
- Web: [portless.sh](https://portless.sh)
- Guía: [betterstack.com/community/guides/web-servers/portless](https://betterstack.com/community/guides/web-servers/portless/)

## Relacionado

- Exponer localhost: [[VPS]], [[Here.Now]], [[free-for.dev]] (tunneling)
- Despliegue local→web: [[Vercel]], [[OpenShip]]
- Agentes y URLs estables: [[Learn Harness Engineering]], [[Noqa]]

# #web #productividad #opensource #agente