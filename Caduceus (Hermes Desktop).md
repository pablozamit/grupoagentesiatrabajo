# Caduceus (Hermes Desktop)

> I built Caduceus for Hermes Desktop @NousResearch. Two snakes, one staff. Caduceus runs parallel AI agents in perfect sync, on any model you already have.

_—Terp (@OnlyTerp), 3 jun 2026_

**Caduceus** es un modo de orquestación multi-agente para [[Hermes Agent|Hermes Desktop]], construido por Terp (@OnlyTerp) como fork reversible de Hermes Agent y publicado el mismo día del lanzamiento de la app de escritorio (jun 2026). Licencia MIT.

## Cómo funciona

Se activa con un solo conmutador (`/caduceus on`); apagado, el fork se comporta exactamente como el Hermes original. Cuatro capas que se encienden solo cuando las necesitas:

- **Deep-planning loop**: planifica con una lista de tareas visible y la ejecuta paso a paso, verificando antes de dar algo por terminado.
- **The Loom**: motor de workflows determinista — `agent()` / `parallel()` / `pipeline()`, salida estructurada, presupuesto de tokens compartido, caché por ejecución y reanudación (editas el script, lo reejecutas y las llamadas sin cambios vuelven al instante). Se invoca diciendo "workflow".
- **Auto Router** (`/caduceus auto on`): envía cada subagente trabajador al modelo configurado más barato capaz de hacer esa subtarea; el orquestador siempre mantiene tu modelo de sesión.
- **Local GPU workers** (`/local on`): los trabajadores del workflow corren en modelos locales en tu GPU, paralelizados según los slots del modelo; el orquestador sigue en la nube.

## Orchestration Theater

Al lanzar un workflow, la app Hermes Desktop abre una vista en vivo del despliegue: carriles por fase, insignia de modelo por agente (orquestador en dorado, trabajadores en azul), consumo de tokens, concurrencia actual y medidor de presupuesto compartido.

## Instalación

```bash
git clone -b caduceus https://github.com/OnlyTerp/Hermes-caduceus.git
python3 Hermes-caduceus/install_caduceus.py --with-desktop
```

El instalador detecta la instalación de Hermes, hace copia de seguridad de cada archivo que toca y se deshace por completo con `--uninstall`. Python estándar, sin dependencias. Repo: [OnlyTerp/Hermes-caduceus](https://github.com/OnlyTerp/Hermes-caduceus) (13 estrellas a fecha de captura, jun-oct 2026).

## Ver también

- [[Hermes Agent]]
- [[Hermes Skills Hub]]
- [[Ajustes Avanzados de Hermes Agent]]

Fuente: [post de @OnlyTerp](https://x.com/OnlyTerp/status/2062035353800765941) (3 jun 2026) + README del repositorio.

# #agente
