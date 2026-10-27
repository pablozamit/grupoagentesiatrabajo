# Iris-3B

Modelo generativo de 3B parámetros de Speridlabs que trabaja directamente en espacio de píxeles: pinta cada píxel sin VAE ni espacio latente, evitando la compresión con pérdida y el sesgo hacia texturas de los latents. Genera imágenes de ~1 megapíxel (1024px) desde un prompt de texto (difusión con flow matching).

- La tesis del paper (arXiv 2610.09450): un generador de imágenes puede reemplazar a modelos de visión como DINOv2. El mismo prior pixel-space, con fine-tuning y sin cambios de arquitectura, sirve para tareas densas donde importa el detalle: estimación de profundidad monocular, restauración de imágenes y super-resolución (las tres incluidas en el repo).
- Abierto de verdad: pesos, código y demo (Space) en Hugging Face, licencia Apache 2.0. Publican también sus recetas de escalado en espacio de píxeles.
- Speridlabs: laboratorio de «spatial AI» (modelos fundacionales que entienden el mundo 3D), fundado en 2024.

Enlaces: proyecto https://speridlabs.com/research/iris - pesos https://huggingface.co/speridlabs/iris-3b - código https://github.com/speridlabs/iris-3b

#modelos #opensource
