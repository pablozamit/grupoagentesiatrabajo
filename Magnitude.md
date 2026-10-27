# Magnitude

**Magnitude** ([magnitude.dev](https://magnitude.dev), [github.com/magnitudedev/magnitude](https://github.com/magnitudedev/magnitude)) es un **motor de inferencia open source** que **ajusta sus kernels al hardware** de tu máquina para correr cada modelo lo más rápido posible. Licencia **Apache-2.0**. Se presenta como **2× más rápido que Ollama** (media de modelos locales populares, en Mac y NVIDIA).

## Cómo funciona

- Al descargar un modelo, pasa hasta un minuto en **tu chip real** probando distintas formas de repartir el cómputo (hilos de GPU, tamaño de bloque, precarga de datos) y **conserva la combinación más rápida que no altera la salida** del modelo.
- Corre en **Apple Silicon, NVIDIA, AMD o solo CPU**: no hay mínimo fijo; menos memoria = modelos más pequeños.
- Cada modelo viene con el **mejor drafter de decodificación especulativa** (MTP, DFlash o DSpark).
- **KV cuantizado** (~mitad de memoria por agente, se libera al parar) y **prefix cache compartida** entre sesiones concurrentes para no degradarse.
- Es una **app de escritorio** que expone modelos locales como endpoint y los conecta con el agente que ya usas: **Pi, OpenCode, Hermes, Codex** y más. Prompts, ficheros y modelos **no salen de tu máquina**.

## La vía que difundió el tuit

El tuit de [@akshay_pachaar](https://x.com/akshay_pachaar/status/2095906342154424750) lo presenta como **el CLI más fácil para saber qué modelos corren en tu ordenador**:

```
npm i -g @magnitudedev/cli
magnitude setup
```

Perfila el equipo y **rankea modelos por velocidad, precisión, inteligencia y memoria requerida**, y luego eliges tu harness (Pi, OpenCode, Claude Code, Codex...). Nota: la instalación por npm del tuit **no coincide del todo** con la doc actual (que habla de app de escritorio con el CLI incluido y `magnitude serve`). Tratar el flujo exacto como **atribuido al anuncio**, no verificado aquí.

## CLI (resumen)

- `magnitude hardware` · `catalog list` · `catalog recommendations --preference faster|balanced|smartest` · `models load|stop|status`
- En macOS/Linux, `magnitude server setup` lo deja como servicio que arranca al boot y sirve a otros equipos de la red.

## Relacionado

- [[Ollama]] · [[LM Studio]] · [[llama.cpp]] — motores locales alternativos
- [[Ecosistema de modelos]] — elegir, acceder, orquestar y llevar a producción
- [[Edge0]] — inferencia on-device

# #modelos #opensource #agente
