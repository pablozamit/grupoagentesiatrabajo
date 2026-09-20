# GLiNER2.5

**GLiNER2.5** (repo `fastino-ai/GLiNER2`, Apache-2.0, 5.2k ⭐, 45M+ descargas en Hugging Face) es un **modelo pequeño open source para extracción de información y clasificación**: entidades, clasificación de texto, registros estructurados, relaciones y atributos — todo en **una sola pasada** con un esquema que tú defines. De Fastino Labs. Sin GPU: corre en CPU.

## Qué cambia la 2.5

- Nueva arquitectura **boundary** (predice inicios/fines en vez de enumerar spans): spans de **cualquier longitud**, documentos largos, extracción conjunta entidad-relación, clasificación con restricciones y atributos por span
- Tres checkpoints: **small 74M** (CPU/edge rápido), **base 194M** (inglés general), **multi 287M** (multilingüe)
- Misma familia: **GLiGuard** (300M, guardrails de seguridad/toxicidad/jailbreak) y filtro PII multilingüe (42 tipos de entidades)

## Uso local

```bash
pip install "gliner2[local]"
```

```python
from gliner2 import AutoExtractor
model = AutoExtractor.from_pretrained("fastino/gliner2.5-base-v1")
```

## Por qué importa para agentes

Es la alternativa local a usar un modelo frontera (o a [[Jev (TypeSafe)]]) para clasificar/extraer: un investigador de Fastino lo presenta como **36× más barato que Jev corriendo en local** en un agente tipo Browser Use. Mismo patrón que [[Ojos baratos para agentes]]: modelo pequeño y barato decide, modelo caro solo donde hace falta.

## Recursos

- Repo: [github.com/fastino-ai/GLiNER2](https://github.com/fastino-ai/GLiNER2)
- Modelos: [fastino.ai/models](https://fastino.ai/models)
- Paper/blog: [fastino.ai/blog/gliner2-5-span-free-information-extraction](https://fastino.ai/blog/gliner2-5-span-free-information-extraction)

## Relacionado

- Alternativa comercial de decisiones: [[Jev (TypeSafe)]]
- Donde encaja en un agente navegador: [[Browser Use]]
- Modelos pequeños locales: [[Ollama]], [[Cactus Needle 2]]

# #modelos #opensource #agente