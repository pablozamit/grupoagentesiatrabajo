# Figurine Factory

Space de Hugging Face creado por [mishig](https://huggingface.co/mishig) (staff de HF) que **convierte cualquier foto de una cara en una figura 3D coleccionable**, estilo vinyl bobblehead. Puedes verla en 3D en el navegador y descargarla como archivo GLB listo para impresión 3D.

[https://huggingface.co/spaces/mishig/figurine-factory](https://huggingface.co/spaces/mishig/figurine-factory)

## ¿Cómo funciona por dentro?

El proceso encadena dos Spaces de Hugging Face:

1. **[FLUX.2-dev](https://huggingface.co/spaces/black-forest-labs/FLUX.2-dev)** — coge tu foto y genera un retrato estilo figurita vinyl, manteniendo tus rasgos exactos. Sobre fondo negro, con base dorada redonda, acabado brillante.
2. **[TRELLIS.2](https://huggingface.co/spaces/microsoft/TRELLIS.2)** — coge ese retrato y lo convierte en una malla 3D real que puedes girar en el navegador.

El prompt que usa FLUX para generar la figurita:

> *"Convierte a la persona de esta foto en una figurita coleccionable de vinyl tipo bobblehead con la cabeza ligeramente sobredimensionada, manteniendo su cara exacta y su parecido. Acabado brillante de juguete, figura completa de pie sobre una base dorada redonda. Aislado sobre fondo negro puro, iluminación dramática de estudio con luz cálida dorada, detalle nítido, sin texto."*

## Requisitos

- Necesitas una cuenta en Hugging Face (gratuita vale, PRO tiene más cuota)
- Al iniciar sesión, el Space usa **tu token** para llamar a FLUX y TRELLIS, así que el consumo de GPU va contra tu cuenta

## Archivos del proyecto

| Archivo | Descripción |
|---|---|
| `app.py` | Backend FastAPI: sirve el frontend, recibe la foto, lanza el pipeline en un hilo, transmite el progreso por SSE |
| `pipeline.py` | Cliente Gradio REST que llama a FLUX.2 y TRELLIS.2, con reintentos y múltiples métodos de autenticación |
| `requirements.txt` | fastapi, uvicorn, requests, python-multipart |
| `Dockerfile` | Imagen Docker para el Space |
| `static/` | Frontend con three.js para el visor 3D y la galería |

## Código relevante

**Pipeline (`pipeline.py`):** La función `generate()` orquesta todo: llama a `flux_figurine()` que sube la foto a FLUX.2, espera el resultado, y luego pasa esa imagen a `trellis_glb()` que la convierte en un archivo GLB 3D. Todo a través de las APIs REST de Gradio.

**Autenticación (`app.py`):** El backend recibe el token OAuth del usuario desde el frontend y lo pasa como cabecera a los Spaces downstream. Si el token del usuario no funciona (por cuota agotada), cae al token del propietario del Space como respaldo.

Relacionado: [[3D]], [[Diseño]], [[Impresión 3D]]

# #3d #ia #diseno #huggingface
