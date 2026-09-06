# react-native-morph-view

**react-native-morph-view** (repo: `blazejkustra/react-native-morph-view`) es una **vista React Native que transforma (morph) suavemente una imagen en otra**. Un solo prop `toggle` y dos formas se funden con un **shader nativo** para una transición "gooey" fluida (efecto metaball). MIT, por **Błażej Kustra** (Senior RN en SWMansion), inspirado en el Morphing SwiftUI View de Kavsoft. La demo viral: ThePrimeagen convirtiéndose en cabra 🐐.

## Cómo funciona

Ambas imágenes se renderizan de forma nativa y se mezclan a través de un **shader de alpha-threshold**:

- Al cambiar `toggle`, cada imagen sube su blur hacia `blurRadius` en el punto medio y baja, mientras el threshold re-nítido funde el alpha combinado
- Las regiones borrosas superpuestas **se fusionan en un solo blob conectado** (efecto metaball) antes de resolverse en la forma objetivo
- **iOS**: Metal shader · **Android**: AGSL RuntimeShader (13+) · **Web**: crossfade fallback (sin metaball)

## Uso

```tsx
import { useState } from 'react';
import { MorphView } from 'react-native-morph-view';

export default function App() {
  const [on, setOn] = useState(false);
  return (
    <MorphView
      toggle={on}
      from={require('./assets/heart.png')}
      to={require('./assets/star.png')}
      blurRadius={24}
      tintColor="#FF3B6B"
      style={{ width: 200, height: 200 }}
      onTouchEnd={() => setOn((v) => !v)}
    />
  );
}
```

## API

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `toggle` | boolean | — | `false` → from, `true` → to. Requerido |
| `from` / `to` | MorphImageSource | — | Imagen fuente/destino. Requerido |
| `blurRadius` | number | 24 | Blur pico en el punto medio (mayor = más gooey) |
| `duration` | number | 600 | Duración del morph en ms |
| `tintColor` | ColorValue | — | Tint de plantilla (look SF-Symbol) |
| `borderColor` / `borderWidth` | — | — | Contorno "gooey" que abraza la silueta (no un box CSS) |
| `...ViewProps` | — | — | Todos los props estándar de View |

## Requisitos y tips

- **React Native 0.76+ (New Architecture / Fabric)**, iOS 15.1+, Android API 33+ (más viejos → crossfade)
- Para el goo más limpio: imágenes con **fondo transparente y formas sólidas opacas** (el shader trabaja en el alpha)
- **tintColor** para glifos monocromo desde tu theme sin assets pre-coloreados
- Combínalo con `LayoutAnimation` si el layout alrededor también cambia al toggle
- Un backport de la comunidad hace correr el efecto en Android API 29–32 (render GL presentado como hardware Bitmap, sin SurfaceView) — PR #1 de @desugar_64

## Recursos

- Repositorio: [github.com/blazejkustra/react-native-morph-view](https://github.com/blazejkustra/react-native-morph-view)
- Autor: [@blazejkustra_](https://x.com/blazejkustra_)
- Inspiración iOS: [Morphing SwiftUI View de Kavsoft](https://www.youtube.com/watch?v=0f6-oc_mH5A)

## Relacionado

- UI móvil y web: [[Capacitor]], [[Taste-Skill]]
- Efectos visuales: [[Anime.js]], [[Lottie Animaciones IA]]
- Componentes UI: [[Cedar Filmstrip]], [[Uiverse]]

# #diseno #web #vibecoding #opensource