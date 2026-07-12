# Talking-Head-Recut

**Skill HyperFrames** de HeyGen que toma un vídeo con presentador (talking-head) y superpone tarjetas gráficas diseñadas sincronizadas con lo que se dice: títulos cinéticos, contadores de estadísticas, fichas de modelos, citas destacadas.

## Qué hace

- Lee la transcripción del vídeo, decide qué merece una tarjeta gráfica y la diseña en el sistema de diseño del proyecto
- El clip original del presentador se reproduce intacto debajo
- Se integra con **HeyGen CLI** para generar el presentador con avatares lip-sync desde la terminal
- Un solo prompt: dale un tema, un avatar y un tiempo; investiga, escribe el guion, genera el presentador y los gráficos

## Ejemplo práctico

Crearon un vídeo de 45s sobre ChatGPT-5.6 (Sol, Terra, Luna) con:
1. Investigación real del anuncio de OpenAI + tendencias de X
2. Diseño borrowed de chatgpt.com (CSS tokens, paleta true-black)
3. Presentador generado con HeyGen CLI (avatar Tiff Tech)
4. Transcripción local word-level para sincronizar cada tarjeta
5. 18 frases de subtítulos, música de fondo, URL persistente

## Instalación

```bash
# El skill está en el repo de HyperFrames
git clone https://github.com/heygen-com/hyperframes.git
# skills/talking-head-recut/
```

## Recursos

- GitHub: [hyperframes/talking-head-recut](https://github.com/heygen-com/hyperframes/tree/main/skills/talking-head-recut)
- HeyGen CLI: [heygen-cli](https://github.com/heygen-com/heygen-cli)
- HyperFrames: [[HyperFrames]]

Relacionado: [[Skills]], [[HyperFrames]]

Tags: `#video #agente #skills #contenido`
