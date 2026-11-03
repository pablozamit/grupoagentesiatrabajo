# Fine-tuning

El **fine-tuning** (ajuste fino) es seguir entrenando un modelo ya entrenado con datos propios para especializarlo en una tarea, un dominio o un formato de salida. Cuesta mucho menos cómputo que entrenar desde cero, y con técnicas ligeras como **LoRA** (se entrenan solo unas matrices pequeñas añadidas, no el modelo entero) se puede hacer en hardware de consumo.

## Caso real: revisor local de informes de radiología

Relato de Crstian ([@crstiax](https://x.com/crstiax)) aprendiendo fine-tuning desde cero (hilo en X, 2-nov-2026). Es su experiencia contada por él, no un tutorial verificado:

- **El hueco**: buscando modelos médicos con pesos abiertos y en español no encontró casi nada (de programación, dice, "hay a patadas").
- **Los datos**: CARES, un corpus público de informes de radiología en español del grupo SINAI de la Universidad de Jaén: 3.219 informes reales anonimizados, con licencia para investigación **no comercial**. El corpus existe ([Hugging Face](https://huggingface.co/datasets/SINAI/CARES), [paper de 2023](https://doi.org/10.1016/j.compbiomed.2023.106581)); las cifras son las del hilo.
- **El pivote**: su primera idea era un modelo que explicara el informe en lenguaje claro, pero eso ya lo hace cualquier modelo frontera. Lo que un modelo frontera no puede hacer es entrar en un hospital, porque los informes no deberían salir de allí. Así que cambió el enfoque a un modelo pequeño, que corre en local, y que revisa el informe antes de firmarlo buscando contradicciones ("derecho" en los hallazgos e "izquierdo" en la conclusión).
- **Datos sintéticos**: CARES no trae errores marcados, así que se hizo un script que coge informes y les mete errores a propósito (cambia el lado, quita un "no", toca una medida).
- **La lección de evaluación**: montó un benchmark aparte con 340 informes sintéticos que NO salen de CARES, porque evaluar con datos generados por su propio script le decía que el modelo era perfecto. Evaluar con datos del mismo generador contamina el resultado.
- **Hardware**: empezó en casa con una RX 6800 y un Qwen3 de 0.6B con LoRA ("tardaba la vida"); después pasó a una RTX PRO 6000 en su trabajo (@helmcode) y, en comparación, "todo iba volando".
- Anuncia una serie de posts con el proceso, los errores y el resultado final en su blog.

## Caveats

- Es el relato del autor y el proyecto está en curso: el modelo revisor no tiene resultado final publicado ni validación clínica de ningún tipo.
- La licencia de CARES es de investigación no comercial: no cubre un producto comercial ni uso clínico.
- Lo de "los informes no pueden salir del hospital" es el razonamiento del autor sobre privacidad; los requisitos concretos dependen de cada sistema sanitario.

## Relacionado

- [[LTX Trainer]] - entrenar un modelo de vídeo propio sin programar, con un agente
- [[Laboratorio de IA local (2 GPU)]] - infraestructura local para modelos

## Fuente

- Hilo de @crstiax en X (2-nov-2026), texto aportado por Pablo
- [blog.crstian.me](https://blog.crstian.me) - donde anuncia los posts del proceso
- [Dataset CARES (SINAI, Universidad de Jaén)](https://huggingface.co/datasets/SINAI/CARES)

# #modelos #ia
