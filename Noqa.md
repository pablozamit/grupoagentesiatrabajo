# Noqa

**Noqa** es un agente de IA para QA automation visual en móviles y juegos. Funciona puramente desde screenshots —sin árbol de accesibilidad, sin localizadores, sin código— y controla la app real en dispositivos iOS/Android, simuladores o la nube.

- **Repo:** [noqa-ai/noqa](https://github.com/noqa-ai/noqa) — 79 ⭐ (open source CLI)
- **Web:** [noqa.ai](https://noqa.ai)
- **Precio:** Gratis para uso con agentes de código; plan Individual $29/mes; Team desde $100/mes

## Características principales

- **Sin localizadores** — Prueba desde lo que se ve en pantalla, como un usuario real
- **Lenguaje natural** — Escribe casos de prueba en texto plano; el agente decide qué tocar, deslizar o escribir
- **Soporta cualquier framework** — iOS/Android nativo, React Native, Flutter, Unity, Unreal, Godot
- **~5s por acción** (~1s con memoria en flujos conocidos)
- **Video y screenshots** — Cada ejecución devuelve un trace visual completo paso a paso
- **CLI para agentes de código** — Conecta Claude Code, Codex, etc. a dispositivos reales

## CLI

```
# Listar dispositivos conectados
noqa devices ios

# Conectar agente a un dispositivo
noqa devices connect <device-id>

# Leer pantalla como árbol de elementos limpio
noqa screen

# Actuar en lenguaje natural con grounding automático
noqa action tap -d "Botón azul de login"
noqa action input --text "usuario@email.com" -d "Campo email"
noqa action swipe -d "Carrusel de onboarding, izquierda"

# Capturar screenshot para verificar
noqa screenshot resultado.png
```

## Tags

- #agente — Agente de IA para QA
- #skills — CLI para coding agents
- #juegos — Soporta Unity, Unreal y Godot
