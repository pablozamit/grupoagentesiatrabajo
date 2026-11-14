# Budget3D

[Budget3D](https://huggingface.co/BudgetAny) genera modelos 3D (Gaussian splats) a partir de una imagen con **cualquier presupuesto de tokens**: en inferencia eliges cuántos de los 8.192 tokens latentes del modelo usa el transformer de difusión. Las regiones con menos variación —primero el espacio vacío— se fusionan en tokens más gruesos, y el muestreo sale más rápido y ligero con los mismos pesos para todos los presupuestos.

## Puntos clave

- **Budget3D-Idol** es un fine-tune de [speridlabs/idol](https://huggingface.co/speridlabs/idol) (licencia Apache-2.0); hay variante **Turbo** de 5 pasos.
- **Reimplementación comunitaria no oficial** de la idea de tokenización adaptativa al cómputo del paper BudgetPix ([arXiv:2610.12307](https://arxiv.org/abs/2610.12307)); no es un release oficial de ese paper y el tech report propio aún no está publicado.
- Código en [github.com/BudgetAny/Budget3D](https://github.com/BudgetAny/Budget3D) y [página de proyecto](https://budgetany.github.io/budget3d/).

## Relacionado

- [[TRELLIS.2]], [[Hunyuan3D 2.1]], [[Raea]]

# #3d #opensource
