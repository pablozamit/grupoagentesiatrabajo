# MiniMind

**MiniMind** es un proyecto open source (publicado en GitHub Trending y difundido por [@bkdgiffug](https://x.com/bkdgiffug/status/2093988595816157202)) que enseña a **entrenar un modelo de lenguaje minúsculo desde cero**, con la versión más pequeña de unos **25,8 millones de parámetros** y un tamaño de archivo del orden de **1/2700 del GPT-3**, según la descripción del anuncio.

## Qué incluye

- **Tokenizer**: el método de entrenamiento del tokenizador, con el código abierto.
- **Pipeline completo**: preentrenamiento hasta *fine-tuning*, sin saltarse pasos.
- **MiniMind-V**: variante multimodal capaz de ver imágenes.
- **Todo en PyTorch a mano**: los scripts no esconden el proceso detrás de frameworks de alto nivel, y además soporta arquitectura **MoE** (mezcla de expertos).

La idea es didáctica: reproducir de principio a fin "todo el proceso de construcción de un LLM" en un tamaño que se puede entrenar en hardware modesto.

## Caveats

- Las cifras (25,8 M de parámetros, ~50.000 estrellas en GitHub Trending, 1/2700 del tamaño de GPT-3) proceden del **texto del anuncio**; conviene comprobarlas en el repositorio antes de citarlas.
- Un modelo de este tamaño sirve para **aprender el proceso**, no para competir en calidad con los modelos grandes de producción.

## Relacionado

- [[Qwen 3.7-Max]] - modelo de escala de producción, para contraste
- [[Ollama]] - forma sencilla de ejecutar modelos locales como estos
- [[llama.cpp]] - motor de inferencia para correr modelos pequeños en local
- [[AirLLM]] - técnica para ejecutar modelos grandes en hardware de consumo

# #modelos #opensource #contenido
