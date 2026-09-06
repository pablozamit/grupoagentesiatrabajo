# Three.js Game Skills (Majid Manzarpour)

**Three.js Game Skills** (repo: `majidmanzarpour/threejs-game-skills`) es un pack de **9 skills auto-contenidas para Codex y Claude Code** que construyen juegos Three.js jugables y pulidos en el navegador. Creado por **Majid Manzarpour** (Technology Advisor, Game Designer, ex-Google). MIT, 1.6k ⭐. Actualizado para trabajar mejor con los modelos frontier (Opus/Fable 5 y GPT-6 Astra): routing más inteligente, delegación, art direction temprana, **generación de assets 3D reanudable** con Tripo y pipelines de QA visual y animación más fuertes.

## Instalación

```bash
# Codex
npx skills add majidmanzarpour/threejs-game-skills --skill '*' -a codex -g -y
# Claude Code
npx skills add majidmanzarpour/threejs-game-skills --skill '*' -a claude-code -g -y
# O clonado: ./install.sh --codex / --claude / --all
```

## Las 9 skills

| Skill | Rol |
|---|---|
| **threejs-game-director** | Entrada principal: scope y quality bar, routing de especialistas, delegación acotada, notas de continuidad, recuperación de assets, evidencia |
| **threejs-gameplay-systems** | Loop jugable, arquitectura, game/level design, mecánicas, entidades, controles, cámara, física, game feel (hitstop, screenshake) |
| **threejs-aaa-graphics-builder** | Visual scorecard con anclas de calibración, presupuestos técnicos de arte, shader/material cookbook, VFX, polish de render |
| **threejs-game-ui-designer** | HUDs, menús, overlays, UI responsive, iconos, safe areas, estados |
| **threejs-debug-profiler** | Bugs de escena/runtime/render, bugs móviles, profiling, métricas del renderer |
| **threejs-qa-release** | QA de navegador, screenshots, canvas pixels medidos, test harness visual, bot playtests, build de producción, informe de riesgo |
| **threejs-3d-generator** | **Tripo API**: texto/imagen→3D, textura, auto-rig, animación, conversión, GLB/FBX, **checkpoint/reinsumir** generación interrumpida |
| **threejs-image-generator** | Gemini: concept art, texturas, decals, skies, icons, GUI art, inputs image-to-3D |
| **threejs-audio-generator** | ElevenLabs: SFX, ambience, UI sounds, voz/TTS, cleanup, integración de audio Three.js |

## El patrón clave: verificación con evidencia

Las skills vienen con **test hooks deterministas** (`__THREE_GAME_TEST_HOOKS__`), RNG sembrado y plantillas de Playwright (smoke tests, visual-regression baselines, bot playtests). El agente **no declara victoria sin evidencia**:

- `npm run build` + run local + chequeo de errores de consola
- Screenshot Playwright + chequeo de píxeles no-vacíos del canvas (entropía de color, densidad de bordes, contraste de luminancia)
- Checks de viewports (desktop y mobile)
- **Visual scorecard** con evidencia medida para claims de "premium/AAA/showcase"
- Capturas de motion cortas para modelos animados (deformación del rig, transiciones de clips, foot sliding)

## Resumible y sin perder trabajo

Para builds grandes guarda un **project note** con constraints, trabajo completado, jobs de assets pendientes y next actions — así las correcciones no reinician la generación hecha. Los fallos temporales de proveedores disparan **recovery acotado del job existente**, no downgrade inmediato ni submission duplicada.

## Keys opcionales (no obligatorias)

Las skills core funcionan sin keys (assets procedurales/locales). Para generar assets externos: `TRIPO_API_KEY` (3D), `GEMINI_API_KEY` (imágenes), `ELEVENLABS_API_KEY` (audio). El director tiene un `probe_asset_credentials.sh` que comprueba qué keys hay sin imprimirlas.

## Demos

Neon Ridge Drift, Championship Snooker Arena, Starship Dogfight, Tide Singer, Ripcore (ver README para enlaces de juego).

## Recursos

- Repositorio: [github.com/majidmanzarpour/threejs-game-skills](https://github.com/majidmanzarpour/threejs-game-skills)
- Autor: [@majidmanzarpour](https://x.com/majidmanzarpour)

## Relacionado

- Skills de juegos Three.js: [[Meng To Three.js Game Skills]], [[Three.js Awesome Graphics Agent Skills]]
- Base 3D: [[Three.js]]
- Juegos Three.js de referencia: [[Messenger]], [[Tinyskies]]
- Generación de modelos: [[img2threejs]], [[Tripo]]

# #juegos #3d #skills #agente