# GeoSpy

**GeoSpy** ([geospy.ai](https://geospy.ai)) es una plataforma de **geolocalización de fotos con IA**: subes una imagen y estima dónde se tomó **solo con los píxeles** (arquitectura, vegetación, señales, sombras, idioma de carteles), sin EXIF ni GPS. Precisión de nivel metro en el mejor caso; 10.000+ casos con law enforcement y enterprise (licencia para gobierno/empresa). Hilo viral de [@AngryTomtweets](https://x.com/AngryTomtweets) (64.9k views): "encuentra tu ubicación exacta desde una foto de interior".

## El matiz que el hype omite (tests independientes, 50 fotos)

| Foto | Acierto ciudad |
|---|---|
| Landmarks famosos | 100% |
| Calles con señales | 80% |
| Rural/naturaleza | 50% |
| Playa genérica | 14% |
| **Interior** | **0%** |
| Primeros planos | 0% |

El "foto de interior → ubicación exacta" del viral **no se sostiene**: sin señal geográfica no hay milagro, es un problema de información, no de modelo. Trátalo como punto de partida, no como veredicto.

## El modelo de dos canales (privacidad real)

- **Canal 1 (metadatos)**: el EXIF con GPS lo controlas borrándolo (Instagram ya lo quita al subir)
- **Canal 2 (contenido visual)**: edificios, señales, vegetación — **no lo puedes quitar sin alterar la foto**

Quitar el EXIF es necesario pero **no suficiente**: una foto limpia de metadatos sigue siendo geolocalizable por IA. Revisa qué se ve por la ventana antes de publicar.

## Recursos

- Web enterprise: [geospy.ai](https://geospy.ai) · Versión gratis sin registro: [geospy.net](https://geospy.net)
- Metodología y precisión: [geospy.tech/blog](https://geospy.tech/en/blog/ai-location-finder-how-ai-reads-photos-to-pinpoint-locations)

## Relacionado

- Dar internet/contexto al agente: [[Acceso a internet desde agentes]]
- Privacidad de tu infra: [[VPN privada con VPS (3x-ui + VLESS REALITY)]]

# #investigacion #contenido