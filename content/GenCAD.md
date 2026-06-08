# GenCAD

[GenCAD](https://github.com/ferdous-alam/GenCAD) es un **modelo de IA del MIT** que convierte fotos de objetos en **programas CAD editables** (código paramétrico con líneas, arcos y extrusiones) listos para fabricación.

## Qué es

- Modelo entrenado con **840k+ imágenes** por **Ferdous Alam** en el MIT
- Publicado en el **ASME Journal of Mechanical Design**
- **Open source**

## Qué hace

Le pasas la foto de una pieza u objeto y obtienes el programa CAD completo, no una imagen 3D ni una malla. Eso significa que puedes **editar el diseño**, modificarlo y mandarlo a fabricar.

Además incluye **CAD-Coder**, un modelo de visión-lenguaje que escribe código **CadQuery (Python)** a partir de imágenes, con un 100% de sintaxis válida, superando a GPT-4.5 y Qwen2.5-VL-72B en esa tarea.

## Para qué sirve

- **Ingeniería inversa**: tienes una pieza física y quieres su modelo CAD para modificarlo o replicarlo
- **Diseño desde foto**: en vez de modelar desde cero, usas una imagen como punto de partida
- **Prototipado**: reduces horas de modelado a segundos

## Requisitos

Para ejecutarlo necesitas **Docker** o **conda + Python 3.10** con GPU (CUDA). No es una herramienta web; corre en local.

## Recursos

- Repositorio: [github.com/ferdous-alam/GenCAD](https://github.com/ferdous-alam/GenCAD)

# #modelos #ciencia
