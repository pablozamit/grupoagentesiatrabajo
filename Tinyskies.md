# Tinyskies (GlobeFly)

[Tinyskies](https://github.com/dannylimanseta/tinyskies) — también conocido como **GlobeFly** — es el código fuente de un **juego multijugador en Three.js** donde los jugadores vuelan aviones alrededor de globos personalizables. Es un proyecto de referencia para estudiantes que quieran **copiar diseños, texturas, patrones de arquitectura o técnicas de Three.js** para sus propios juegos.

## Qué es

- **Juego web multijugador** en tiempo real
- Los jugadores vuelan aviones alrededor de un globo terráqueo
- Los globos son **personalizables**: eliges un mundo (nombre + textura) y compartes un código para que otros se unan
- Disparos de paintball, altitud, aceleración, todo sincronizado entre clientes

## Por qué mirarlo

Es un proyecto **completo y pequeño** al mismo tiempo, ideal para aprender:

- **Renderizado 3D en Three.js** (globo, avión, cámara, iluminación)
- **Texturas y materiales** para superficies esféricas
- **Física de vuelo** y matemáticas de quaternion para evitar singularidades en el polo
- **Multiplayer en tiempo real** con Socket.io
- **Arquitectura cliente-servidor** con predicción del lado del cliente e interpolación `slerp`
- **Deploy moderno**: Railway para el servidor, Vercel para el cliente

## Stack técnico

| Capa | Tecnología |
|------|-----------|
| Cliente | Vite, TypeScript, Three.js, Socket.io |
| Servidor | Node.js, Express, Socket.io, Prisma |
| Base de datos | PostgreSQL |
| Deploy cliente | Vercel |
| Deploy servidor | Railway (o cualquier host Docker) |
| Matemática clave | Quaternion para vuelo esférico sin singularidades |

## Estructura del proyecto

```
.
├── client/         # Frontend (Vite + Three.js)
├── server/         # Backend (Node + Express + Socket.io)
├── shared/         # Tipos y constantes compartidos
├── api/            # Endpoints auxiliares
├── docs/           # Documentación y exports
├── docker-compose.yml
├── railway.toml
└── vercel.json
```

## Controles del juego

| Tecla | Acción |
|-------|--------|
| **W / S** | Cabecear arriba / abajo |
| **A / D** | Girar izquierda / derecha |
| **Shift** | Acelerar |
| **Ctrl** | Frenar |
| **Flecha arriba** | Subir altitud |
| **Espacio** | Disparar paintball |

## Cómo correrlo en local

```bash
npm install

# Levantar Postgres
docker run -d --name tinyskies-db -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=tinyskies -p 5432:5432 postgres:16

# Migrar base de datos
cd server
npx prisma generate
npx prisma migrate dev --name init
cd ..

# Arrancar cliente y servidor
npm run dev
```

- Cliente: [http://localhost:5173](http://localhost:5173)
- Servidor: [http://localhost:3001](http://localhost:3001)

## Cómo se juega

1. Creas un mundo (nombre + textura)
2. Copias el código del mundo
3. Abres otra pestaña, pegas el código y entras con otro nombre
4. Vuelas alrededor del globo con otros jugadores

## Deploy

Hay scripts de un solo comando para desplegar:

```bash
npm run deploy           # Railway + Vercel en secuencia
npm run deploy:server    # Solo Railway
npm run deploy:client    # Solo Vercel producción
npm run deploy:preview   # Vercel preview
```

URLs en producción:

- **Cliente**: [tinyskies.vercel.app](https://tinyskies.vercel.app)
- **API**: Railway (configurable)

## Qué copiar / aprender de aquí

- **Render de globo con textura**: cómo se mapea una textura 2D sobre una esfera
- **Física de vuelo esférica**: el código de quaternion-slerp es didáctico
- **Sincronización en red**: predicción local + reconciliación con el servidor
- **WebSockets con Socket.io**: patrón publish/subscribe para posiciones y eventos
- **Separación cliente-servidor limpia**: el directorio `shared/` contiene los tipos TypeScript compartidos
- **Deploy moderno desde monorepo**: cómo gestionar dos servicios en plataformas distintas

## Recursos

- Repositorio: [github.com/dannylimanseta/tinyskies](https://github.com/dannylimanseta/tinyskies)
- Juego en vivo: [tinyskies.vercel.app](https://tinyskies.vercel.app)

# #juegos #contenido #web
