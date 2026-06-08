# Capacitor

[Capacitor](https://capacitorjs.com/) es un **framework de Ionic para empaquetar aplicaciones web como apps nativas iOS, Android, Electron y PWA**. Permite tomar una webapp hecha en HTML/JS/Three.js/etc. y distribuirla en las tiendas de apps con un solo comando.

## Qué es

- **Sucesor espiritual de Cordova/PhoneGap**: hace lo mismo pero con un enfoque moderno, plugins mantenidos y soporte para frameworks actuales
- Toma tu build web (`dist/`) y lo envuelve en un proyecto nativo iOS/Android
- Expone **APIs nativas** (cámara, geolocalización,文件系统, notificaciones) como plugins JS que se llaman desde tu web
- Soporta **cualquier framework web**: React, Vue, Svelte, vanilla JS, Three.js, PixiJS…
- Output: app móvil nativa que se puede subir a App Store y Google Play

## Por qué importa

- **Llevar 3D y juegos web a móvil sin reescribir**: el flujo Krisztian Somoracz (junio 2026) lo demuestra: Nape-JS (física 2D) + Three.js (render 3D) + Capacitor (empaquetado iOS) = app móvil funcional sin tocar Swift
- **Una sola base de código** para web, iOS, Android y escritorio
- Reutilizas todo el ecosistema web existente ([[Three.js]], [[Plume]], [[AutoSprite]], etc.)
- Ideal para vibecodear juegos: prototypas en web con IA, lo pruebas, lo empaquetas para móvil

## Flujo típico

```
Mi webapp (Three.js + lo que sea)
        │
        ▼  npx cap add ios android
        │
        ▼  npx cap sync
        │
        ▼  npx cap open ios   → Xcode → Build → App Store
        ▼  npx cap open android → Android Studio → Build → Google Play
```

## Capacitor vs alternativas

| Solución | Cuándo |
|----------|--------|
| **Capacitor** | Webapp existente que quieres llevar a nativo con mínimo esfuerzo. Mejor DX y mantenimiento que Cordova |
| **React Native** | App nativa desde cero con React. Más rendimiento pero reescribes la lógica en RN |
| **Flutter** | UI y lógica en Dart, compila a nativo. Mejor rendimiento pero ecosistema separado del web |
| **PWA** | Solo necesitas web con instalación "añadir a pantalla de inicio". No entra en App Store |

## Casos de uso

- Juegos web empaquetados para móvil (Nape + Three.js + Capacitor)
- Visualizadores 3D de producto en iOS/Android
- Apps de realidad aumentada usando la cámara del móvil + Three.js
- Dashboards internos distribuidos como apps nativas
- Prototipos rápidos: prototipas en web, lo enseñas al cliente, luego lo publicas en stores

## Plugins oficiales más útiles

- `@capacitor/camera` — cámara nativa
- `@capacitor/filesystem` — lectura/escritura de archivos
- `@capacitor/geolocation` — GPS
- `@capacitor/push-notifications` — notificaciones push
- `@capacitor/share` — diálogo nativo de compartir
- `@capacitor/haptics` — vibración háptica
- `@capacitor/status-bar` — control de la barra de estado

## Recursos

- Web: [capacitorjs.com](https://capacitorjs.com/)
- Docs: [capacitorjs.com/docs](https://capacitorjs.com/docs)
- Creado por: Ionic (mismo equipo detrás de Ionic Framework)
- Open source: MIT

# #web #juegos #vibecoding
