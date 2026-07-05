# Cuentas Temporales de Cloudflare para Agentes de IA

Cloudflare ha lanzado una función que permite a los agentes de IA (Claude, Codex, Cursor, etc.) **desplegar código en Cloudflare sin necesidad de registrarse ni iniciar sesión**. Se usa con un solo flag: `--temporary`.

## ¿Qué problema resuelve?

Cuando un agente de IA intenta desplegar algo (una web, una API, un worker), normalmente se encuentra con un muro: tiene que abrir un navegador, registrarse, confirmar email, aceptar términos, copiar un token API... todo eso son pasos que un humano puede hacer, pero un agente autónomo no. El agente se queda bloqueado.

Con las cuentas temporales, el agente ejecuta `wrangler deploy --temporary` y ya está. Cloudflare crea una cuenta temporal, despliega el worker, y te da una URL para reclamarla si quieres quedártela.

## Casos de uso

- **Un agente autónomo que programa y despliega solo**: el agente escribe código, lo despliega para ver si funciona, itera varias veces, y te avisa cuando está listo. Todo sin que tú tengas que hacer nada.
- **Un desarrollador probando una idea rápida**: le pides a Claude que haga un worker, lo despliega al instante, lo pruebas, y si te gusta lo reclamas. Si no, desaparece solo.
- **Una sesión de prueba y error**: el agente necesita un entorno de despliegue barato y descartable para ver si el código funciona. Puede desplegar, hacer curl a su propia URL, ver si el resultado es correcto, modificar y redesplegar cuantas veces quiera.
- **Un tutorial o taller**: los asistentes pueden seguir el tutorial sin tener que crearse una cuenta de Cloudflare previamente. El profesor dice "desplegad esto" y funciona a la primera.

## Cómo funciona

### 1. Prerrequisito

Tener instalada la última versión de Wrangler:

```bash
npm install -g wrangler
```

### 2. Dile a tu agente algo como esto

```
Crea un worker en TypeScript que diga "Hola mundo" y despliégalo con wrangler. No me preguntes nada, haz lo mejor que puedas.
```

### 3. El agente ejecuta `wrangler deploy`

Wrangler detecta que no hay sesión iniciada y muestra un mensaje sugiriendo el flag `--temporary`:

```
✘ No está autenticado.
Ejecuta wrangler deploy --temporary para desplegar sin iniciar sesión.
```

### 4. El agente redespliega con `--temporary`

```bash
wrangler deploy --temporary
```

Cloudflare crea una cuenta temporal, asigna un token API al agente, y devuelve algo como:

```
✔ Desplegado exitosamente.
URL: https://mi-worker.temp-account.workers.dev
⚠ Cuenta temporal. Reclámala en: https://dash.cloudflare.com/claim/abc123
```

### 5. El agente puede iterar

El agente puede modificar el código y redesplegar cuantas veces quiera durante las siguientes **60 minutos**. La cuenta temporal sigue siendo la misma, no necesita volver a crearla.

```
Ahora cambia "Hola mundo" por "Hola Cloudflare" y redespliega.
```

### 6. Reclamar la cuenta (opcional)

Tienes 60 minutos para reclamar la cuenta temporal. Si haces clic en el enlace de reclamación, puedes:
- Crear una cuenta nueva en Cloudflare
- Iniciar sesión con una cuenta existente

Y todo lo desplegado pasa a ser tuyo permanentemente: workers, bases de datos, bindings, etc.

Si no la reclamas en 60 minutos, la cuenta y todo su contenido se eliminan automáticamente.

## Enlaces

- Artículo oficial: [blog.cloudflare.com/temporary-accounts](https://blog.cloudflare.com/temporary-accounts/)

Relacionado: [[Vercel]], [[Hosting]], [[Web]], [[Agente]]

# #hosting #web #agente #despliegue #cloudflare
