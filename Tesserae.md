# Tesserae

[Tesserae](https://github.com/dmellok/tesserae) es un companion self-hosted de dashboards para pantallas e-ink: compones dashboards de mosaicos en el navegador, el servidor renderiza el frame headless y lo empuja a uno o varios paneles por MQTT o HTTP/REST. AGPL-3.0, Python, ~1.182 ⭐. Web: [tesserae.ink](https://tesserae.ink), docs en [docs.tesserae.ink](https://docs.tesserae.ink/).

## Qué hace

- Editor de dashboards por mosaicos en el navegador y render en servidor; push a paneles e-ink por MQTT o HTTP.
- Ecosistema de hardware: firmware ESP32-S3 para paneles Waveshare, add-on de Home Assistant, guías para Raspberry Pi y Kindle.
- Galería de widgets (GitHub, clima, calendario, Spotify, Hacker News...) y catálogo comunitario ([tesserae.ink/catalog](https://tesserae.ink/catalog/)), con guía para escribir widgets propios y añadir hardware.
- Sin cuenta ni contacto obligatorio: la única conexión saliente es a api.tesserae.ink para chequeo de actualizaciones, conteo anónimo de instalaciones y un heartbeat diario agregado; desactivada por defecto y opt-in (Ajustes → System → Online features).

[Tesserae Cloud](https://cloud.tesserae.ink/) es la versión hospedada aparte, para quien no quiera servidor propio; el servidor self-hosted sigue siendo el producto completo y gratis, y un panel puede apuntarse a tu servidor en cualquier momento (los dashboards creados en el cloud son específicos de él).

## Relacionado

- [[World Monitor]], [[Open Generative AI]]

# #opensource #hosting
