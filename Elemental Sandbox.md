# Elemental Sandbox

**Elemental Sandbox** (repo: `achrefelouafi/LinearAbiltyCastingThreeJS`) es un "VFX playground" open source para **skillshots** construido con **Three.js**, **Vite** y **GLSL escrito a mano**. Es un estudio interactivo, no un juego final: sirve como referencia técnica para crear efectos de habilidad (spells) de nivel AAA en el navegador, con cada parámetro visible editable en vivo.

## Habilidades

Cinco habilidades y dos formas de apuntar. Cuatro son **line cast** (se pulsa la tecla para armar, aparece una flecha tipo League of Legends en el suelo que sigue al mouse, clic para disparar) y una es **far cast** (la flecha se sustituye por un círculo que mide el área que va a cubrir):

| Tecla | Habilidad | Qué hace |
|---|---|---|
| **Q** | Frost Lance | Frente de fractura avanza por la línea mientras cristales de hielo salen del suelo (pequeños y densos al pie, muro de espadas al fondo) |
| **E** | Storm Lance | Un rayo deja la mano con filamentos de relámpago que se dibujan detrás, crepitan, re-impactan y explotan; quemaduras ramificadas en el suelo |
| **R** | Cinder Fall | Roca ardiente en arco con estela raymarched de gas; al impactar abre grietas de lava que siguen brillando |
| **F** | Nova Beam | Columna de luz con núcleo blanco, vaina cian y cintas doradas; el único cast que sigue activo un segundo después de aterrizar |
| **V** | Voltaic Snare | **Far cast**: látigo de corriente que planta un anillo; de él sube una columna violeta con zarcillos y arcos en el borde |

## El principio de fondo: "nada de dimensiones en la CPU"

Todo lo visible es **generado**: no hay texturas, ni sprite sheets, ni mallas en disco salvo el personaje. Los cristales son geometría procedural, el rayo es una cinta colocada entera por un vertex shader, el meteoro es una icósfera craterizada por planos de fractura, el beam es un tubo paramétrico dibujado tres veces a tres radios, los marcadores de puntería son SDF y los efectos de niebla, chispas y destellos son partículas GPU.

La regla que lo hace "editable mientras está pausado" funciona así: cada sistema solo guarda *fracciones* y *semillas* (dónde a lo largo de la línea, cuánto lateral, jitter unitario). Cada frame se resuelve contra `settings.js`, la única fuente de verdad de los **938 parámetros**. Por eso mover un slider cambia un campo de hielo que ya está plantado, o re-tuerce un rayo que ya está en el aire.

## Controles

- **Q/E/R/F/V** (o 1–5): armar cada habilidad (pulsa de nuevo para guardarla)
- **Mouse**: mover el puntero cambia la flecha/círculo de puntería
- **Clic izquierdo**: disparar
- **Clic derecho + arrastrar**: orbitar cámara; **scroll**: zoom
- **G**: abrir/cerrar el editor de VFX (lil-gui)
- **P**: pausar/reanudar — *el editor sigue aplicando los cambios mientras está pausado*
- **C**: limpiar efectos; **H**: ocultar panel

## Rendimiento (por qué es un buen referente)

- Habilidades, decals, burst y partículas van en **pools**: 12 casts seguidos crean como máximo 4 instancias de una habilidad.
- Todo el campo de cristales son **3 draw calls** (cap 288 cristales); un rayo son **2** (cap 24 filamentos × 72 muestras); toda la jaula de la Snare son **2 + 1**; un beam son **6** pases sobre geometría compartida.
- ~1150 partículas vivas en un cast normal; el CPU solo escribe datos de spawn.

## Editor y presets

- 938 sliders divididos por carpetas (una por habilidad, más Aim, Far-cast circle, Environment, Post, Cámara, Personaje).
- Cada habilidad expone **todos** sus colores, sin que ninguno derive de otro (puedes teñir la niebla sin tocar el hielo).
- Los presets se guardan en `localStorage` y se exportan/importan como JSON plano (legible y editable a mano).

## Cómo añadir otra habilidad (pipeline)

1. Bloque en `config/settings.js` + entrada en `ELEMENTS`/`ELEMENT_META`.
2. Subclase de `Ability` implementando `createShaders`, `createParticles`, `onTravel`, `onImpact`, `onFade`.
3. Registrar en `abilities/AbilityManager.js`, carpeta en `ui/Editor.js`, sigil en `ui/glyphs.js`, tecla en `input/InputManager.js`.
4. Para convertirla en **far cast** solo hacen falta dos cosas: `cast: CastShape.ZONE` y un `zoneRadius`.

## Recursos

- Repositorio: [github.com/achrefelouafi/LinearAbiltyCastingThreeJS](https://github.com/achrefelouafi/LinearAbiltyCastingThreeJS)
- Predecesor con 4 elementos (fuego/agua/tierra/aire) en spline dibujado: [AvatarCastingAbilitiesThreeJS](https://github.com/achrefelouafi/AvatarCastingAbilitiesThreeJS)

## Relacionado

- Base 3D: [[Three.js]], [[WebGPU]] (futuro), alternativas Google: [[img2threejs]], [[Neo-Forge]]
- Partículas GPU en la web: [[Plume]]
- Juegos Three.js como referencia de estudio: [[Messenger]], [[ALON'S LIFE]]
- Skills de agentes para gráficos 3D: [[Three.js Awesome Graphics Agent Skills]], [[Meng To Three.js Game Skills]]

# #3d #juegos #diseno #opensource