# RadCheck

Proyecto de investigación que explora un modelo pequeño y local para señalar contradicciones internas en informes de radiología en español: cambios de lateralidad, negaciones invertidas y medidas incompatibles. La idea es usarlo como un corrector textual antes de firmar un informe, sin evaluar si el hallazgo clínico es correcto.

El flujo documentado parte de CARES, un corpus de 3.219 informes radiológicos en español anonimizados y etiquetados con códigos ICD-10. El proyecto separa los informes por documento, genera errores sintéticos mediante reglas y ajusta modelos abiertos con LoRA. La versión pública documenta variantes Qwen 3.5 de 4B y 9B, además de cuantizaciones GGUF para `llama.cpp`; es un proyecto en evolución y las versiones pueden cambiar.

La evaluación separa deliberadamente los errores sintéticos del entrenamiento: el repositorio describe RadCheck-Bench-ES, con 340 ejemplos sintéticos de prueba independientes del corpus y del inyector de errores, más un conjunto adicional de 60 ejemplos para categorías fuera de la puntuación principal. El benchmark limita la tarea a contradicciones que pueden comprobarse dentro del texto. Sus autores documentan sesgo del generador y composición artificial; el repositorio incluye una hoja de revisión de 50 ejemplos para un radiólogo, pero los resultados publicados no bastan para presentar el proyecto como validación clínica. Un resultado de F1 en ese benchmark no prueba rendimiento clínico.

El repositorio declara que RadCheck es una vista previa de investigación, no validada por un médico, no es un dispositivo médico y no debe usarse clínicamente. CARES tiene licencia CC BY-NC-SA 4.0, que también se aplica a datos derivados y modelos entrenados con ella: uso no comercial, atribución y compartir bajo la misma licencia. El proyecto indica además que nunca se deben guardar, entrenar o enviar a una API informes reales de pacientes, incluso anonimizados.

El antecedente científico citado por el proyecto es un estudio de 2025 sobre informes de tórax en inglés: usó informes sintéticos y de MIMIC-CXR y evaluó modelos de mayor tamaño. Sirve de motivación metodológica, pero no valida RadCheck ni sus resultados en español.

- [Repositorio y README](https://github.com/crstian19/radcheck)
- [CARES en Hugging Face](https://huggingface.co/datasets/SINAI/CARES)
- [RadCheck-Bench-ES](https://github.com/crstian19/radcheck/tree/main/bench)
- [Estudio en *Radiology* (2025)](https://doi.org/10.1148/radiol.242575)

# #modelos #ciencia #opensource
