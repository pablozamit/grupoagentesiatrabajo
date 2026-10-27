# Icarus

**Icarus** ([esaradev/icarus-plugin](https://github.com/esaradev/icarus-plugin)) es un **plugin de memoria y entrenamiento para agentes Hermes**: guarda las decisiones y el trabajo de cada sesión como notas Markdown que puedes leer y editar, comparte esa memoria entre instancias y convierte el historial en datos para **afinar un modelo más barato que sustituya al original**. Se difundió desde el hilo de [@IcarusHermes](https://x.com/IcarusHermes/status/2039132856979435764).

## Qué añade a Hermes

Hermes ya tiene memoria por instancia y un runtime capaz. Icarus añade cuatro cosas:

- **Memoria compartida entre instancias**: agentes de distintos perfiles leen el trabajo de los demás a través de una carpeta común (`FABRIC_DIR`).
- **Etiquetado por calidad**: cada entrada lleva `training_value` (alta, normal, baja) para que el ruido no contamine los datos de entrenamiento.
- **Extracción de datos de entrenamiento**: las entradas se convierten en pares de ajuste fino con filtrado y ponderación.
- **Pipeline de reemplazo de modelo**: afinar un modelo más barato con la historia del agente, evaluarlo y cambiar a él si supera el umbral.

## Cómo funciona

Icarus **no es un plugin de Obsidian**: Obsidian es solo un visor opcional de los Markdown que escribe. El plugin corre dentro de Hermes y usa:

- `FABRIC_DIR`: carpeta donde escribe las notas.
- `OBSIDIAN_VAULT_PATH`: raíz de la bóveda, si las notas van en una subcarpeta.
- `ICARUS_OBSIDIAN=1`: activa wikilinks y notas diarias.
- `TOGETHER_API_KEY`: para las herramientas de entrenamiento y evaluación.

La instalación se hace copiando el repo a `~/.hermes/plugins/icarus`; al arrancar, `/plugins` debe mostrar `icarus v0.3.0 (16 tools, 4 hooks)`.

## Herramientas principales

| Grupo | Herramientas |
|---|---|
| Memoria | `fabric_recall`, `fabric_write`, `fabric_search`, `fabric_pending`, `fabric_curate` |
| Entrenamiento | `fabric_export`, `fabric_train`, `fabric_train_status` |
| Modelos de reemplazo | `fabric_models`, `fabric_eval`, `fabric_switch_model`, `fabric_rollback_model` |
| Operación | `fabric_brief`, `fabric_telemetry`, `fabric_report`, `fabric_init_obsidian` |

Cuatro hooks se disparan solos: al iniciar sesión (carga SOUL, encargos pendientes y contexto reciente), antes de llamar al modelo (inyecta memorias cuando cambia el tema), después de la respuesta (captura decisiones de alto valor) y al cerrar (puntúa la sesión y escribe una nota si supera el umbral).

## Ecosistema

El mismo autor mantiene **esaradev/icarus-memory-infra** (en el hilo aparece como "our repo"): infraestructura de memoria para agentes con procedencia, rollback, ciclo de vida y supersesión, en tres capas (memoria de trabajo, archivo de sesiones y wiki), Markdown en disco y nativa para MCP.

## Datos y atribución

- **Licencia**: MIT en ambos repos. **Lenguaje**: Python.
- **Estrellas**: verificado el 18 oct 2026, **155 estrellas y 14 forks** en `icarus-plugin` (creado el 30 mar 2026); **290 estrellas y 23 forks** en `icarus-memory-infra` (creado el 24 mar 2026).
- **Versión mostrada en el README**: v0.3.0, con 16 herramientas y 4 hooks.
- El hilo original afirma que "tu bóveda entera se convierte en datos de entrenamiento"; el README lo concreta: se exportan pares filtrados por calidad, no la bóveda entera sin más.

## Relacionado

- [[Hermes Agent]] - el agente en cuyo sistema de plugins se instala Icarus
- [[OpenClaw Supermemory]] - memoria de agente en la nube, frente al enfoque local en Markdown de Icarus
- [[Engram]] - memoria persistente local vía MCP
- [[TencentDB Agent Memory]] - hub de memoria con wiki y CodeGraph

# #agente #basededatos #opensource
