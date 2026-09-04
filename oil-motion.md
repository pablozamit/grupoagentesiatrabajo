# oil-motion

**oil-motion** es una skill open source de agente (universal: funciona en Claude Code, Codex y cualquiera compatible con SKILL.md) que conecta **animaciones generadas por IA en video** a la **interacción de la página web**. En lugar de dejar que el video se reproduzca de principio a fin, el agente genera una acción continua y luego mapea scroll, mouse, drag, touch o la orientación del dispositivo a la posición del video: el usuario "controla" la animación con su gesto.

## Qué consigue

Explicas qué quieres expresar, qué material le das y qué acción controlará la animación. El agente se encarga del resto: generar, revisar, comprimir e implementar. El video nunca es "solo un video": la página se mueve sobre una secuencia de fotogramas ya preparada, así que responde al input de inmediato y siempre da el mismo resultado para la misma posición.

## Animaciones que resuelve

- **Scroll**: el producto se expande, desmonta o cambia de estado según bajas por la página.
- **Mouse**: un personaje, mascota o producto ajusta su orientación al mover el puntero.
- **Drag**: la animación avanza, retrocede o se detiene siguiendo el gesto.
- **Touch / orientación del dispositivo** en móvil.
- **Click / hover / cambio de estado** del componente.
- **Modo idle → follow**: sin operación se reproduce sola; al operar, pasa a modo controlado.

## Cómo funciona internamente

1. Confirmar cómo debe verse el **inicio, el medio y el final** (los "keyframes": identidad, estructura, logo, composición sin cambios).
2. Generar la **acción continua entre esos frames** con IA de video (giros, deformaciones, cambios de material y oclusión, cosas que solo moviendo o escalando una imagen se ven falsas).
3. **Revisar frame a frame**: eliminar pausas de entrada/salida, frames duplicados, parpadeos y anomalías estructurales.
4. **Comprimir los recursos según el tamaño real de visualización** en la página.
5. **Mapear scroll/mouse/drag/touch/orientación al progreso de la animación** (desplazamiento, escalado, velocidad, amortiguación y rotación máxima los controla el programa, no el modelo de video).

## Los dos formatos de entrega (los decide el agente)

| Situación | Formato | Por qué |
|---|---|---|
| Pequeño, circular, 2D o con saltos frecuentes | **Alpha WebP sprite atlas** | El recorte de chroma key se hace al construir; acceso aleatorio a frames estable |
| Grande, línea de tiempo larga, scroll unidimensional | **MP4 de green screen con todos los keyframes** | Chroma key por WebGL en tiempo real, alta compresión, evita atlas enormes en memoria |

Todo parte de un master en green screen: el fondo lo pone la página, así que cambiar el fondo nunca obliga a regenerar el sujeto. El agente corre un script de presupuesto y elige una única vía principal (atlas o video), sin duplicar ambos sistemas.

## Instalación

```text
Dile a tu agente: "Instala el Skill https://github.com/oil-oil/oil-motion"
```

En la primera generación el agente pedirá configurar la API key de generación de video (se guarda solo en local).

## Lo que el agente debe confirmar antes de empezar

- Contenido de la animación y su papel en la página.
- Identidad, estructura y proporciones del sujeto (lo que no se puede cambiar).
- Qué input controla la animación (scroll, mouse, drag, touch u otro).
- Si la acción es unidimensional o necesita responder a horizontal y vertical a la vez.
- Tamaño real de visualización y si escritorio y móvil necesitan recursos distintos.
- Qué mostrar mientras carga, si falla la carga o si el usuario desactiva los efectos dinámicos.

## Check de calidad

- Identidad, estructura, proporciones, posición y luz consistentes en toda la secuencia.
- Sin miembros extra, piezas duplicadas, cortes duros, frames parpadeantes ni pausas raras.
- Bordes limpios en el material transparente (sin huecos en blancos internos ni líneas finas).
- Scroll rápido, inversión brusca y mouse veloz: sin tirones, parpadeos ni desbordes.
- Primer frame claro al cargar y fallback a imagen estática si el recurso falla.

## Recursos

- Repositorio: [github.com/oil-oil/oil-motion](https://github.com/oil-oil/oil-motion)

## Relacionado

- Misma idea de "scroll mapeado a un timeline visual": [[scroll-world]] (cámara 3D), [[The Complete Shelf]]
- Video generado por IA como base de motion: [[Claude Video]], [[Depthfield]]
- Crear video con agentes: [[HyperFrames]], [[OpenMontage]]

# #skills #video #web #diseno #agente