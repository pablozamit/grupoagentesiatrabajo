# Box (Ascii.dev)

[Box](https://box.ascii.dev/) es un servicio de sandboxes (entornos aislados) para ejecutar agentes de IA en máquinas virtuales Ubuntu completas, lanzadas con un solo comando.

## Qué es

Box crea máquinas virtuales en la nube optimizadas para que los agentes de IA (Claude, Devin-like, etc.) trabajen sin riesgos. Cada box es un Ubuntu completo con Docker, Git y herramientas de desarrollo preinstaladas.

- **Un comando para crear**: `box new` y ya tienes un servidor listo
- **Aislado y seguro**: El agente no toca tu ordenador real
- **Barato**: Al menos 5x más económico que competidores (gracias a Hetzner)
- **Incluye**: Docker, GitHub CLI, lenguajes de programación, hardening de seguridad, manejo de secretos

## Para qué sirve

- **Fábricas de agentes**: Ejecutar agentes que programan solos sin riesgo
- **Coding autónomo**: Que un agente clone repos, instale dependencias, codifique y haga commits
- **Equipos**: Entornos compartidos y replicables para desarrollo con IA
- **Experimentación**: Probar agentes sin ensuciar tu máquina local

## Ventajas clave

| Característica | Box | Competidores |
|---|---|---|
| Precio (4vCPU/8GB) | ~$20/mes | 5x+ más caro |
| Creación | Un comando (`box new`) | Configuración manual |
| Preinstalado | Docker, gh CLI, lenguajes | Vacío |
| Acceso | SSH, escritorio virtual, API | SSH básico |

## Cómo empezar

```bash
curl -fsSL https://ascii.dev/api/box/install | sh
box new
```

## Precio

Desde **$20/mes** (mínimo). Infraestructura de Hetzner, significativamente más barato que alternativas.

## Enlaces

- Web: [box.ascii.dev](https://box.ascii.dev/)
- X: [@AniC_dev](https://x.com/AniC_dev)

# #agente #hosting