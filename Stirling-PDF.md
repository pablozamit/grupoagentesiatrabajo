# Stirling-PDF

[Stirling-Tools/Stirling-PDF](https://github.com/Stirling-Tools/Stirling-PDF) — Editor de PDF gratuito, open source, que **funciona completamente en tu máquina** y nunca sube ningún archivo a internet. 81K estrellas, 25M+ descargas.

## ¿Qué problema resuelve?

Cada vez que usas una web para editar un PDF (unir, comprimir, convertir), estás subiendo tu archivo a los servidores de alguien. Si es un documento sensible (un contrato, una declaración de la renta, tu DNI escaneado), ese archivo está viajando por internet.

Stirling-PDF hace todo **en local**: instalas un Docker en tu ordenador y todos los procesos ocurren ahí. Cuando terminas, los archivos se borran automáticamente.

## Qué puedes hacer con él

Más de 50 herramientas en una sola interfaz limpia:

- **Unir y dividir** PDFs
- **Comprimir** el tamaño del archivo
- **Convertir** desde y hacia otros formatos (Word, imágenes, etc.)
- **Rotar y reordenar** páginas
- **OCR** (reconocimiento de texto): convertir PDFs escaneados en documentos con texto seleccionable
- **Añadir contraseñas, marcas de agua, firmas y redacciones** (tapar información sensible)
- **API REST** completa para automatizar procesos

## Cómo se instala

```bash
docker run -d -p 8080:8080 stirlingtools/stirling-pdf:latest
```

Luego abres `http://localhost:8080` y ya tienes el editor funcionando.

## Para qué te puede servir

- **Maquetar documentos** para clientes sin pagar Adobe
- **Automatizar procesos** con la API REST (ejemplo: un agente que genera informes y los convierte a PDF)
- **Proteger documentos** con contraseñas o redacciones antes de enviarlos
- **Digitalizar documentos escaneados** con OCR para que sean buscables

Relacionado: [[Open Notebook]], [[Apify]], [[Firecrawl]]

# #herramientas #opensource #productividad #privacidad
