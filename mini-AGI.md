# mini-AGI

**mini-AGI** ([github.com/volotat/mini-AGI](https://github.com/volotat/mini-AGI), de Alexey Borsky) es un **modelo de lenguaje a nivel de byte que aprende mientras lee**: se entrena desde cero en una GPU de portátil con **8 GB de VRAM** (RTX 3070) y sigue mejorando con cada texto nuevo, sin olvido catastrófico. Repo del 19-sep-2026; código escrito y verificado mayormente por **Claude Opus 5**. Hilo de [@Ryrenz](https://x.com/Ryrenz) (23.9k views).

## Las 3 ideas

- **Pesos en disco, no en VRAM**: los parámetros son archivos normales que se paginan a la GPU solo cuando se necesitan — el modelo crece con tu disco, no con tu GPU. Tras 318M de caracteres, el pool interno ya tenía **169 expertos** auto-creados
- **Anti-olvido simple**: tasa de aprendizaje del tronco a 1/10 de la de los expertos → el olvido cayó de 2.23 a **0.0067 nats** (lo viejo casi no se pierde)
- **Una persona + una GPU gamer**: sin cluster, sin laboratorio

## Matices

- Pesos **aún no liberados** y el primer batch del corpus sin terminar: es un experimento en marcha, no un modelo usable
- Byte-level = sin tokenizador: elegante para aprenderlo todo, ineficiente por diseño

## Relacionado

- Modelos pequeños locales: [[Cactus Needle 2]], [[GLiNER2.5]], [[Edge0]]
- Memoria que persiste: [[Memanto]], [[TencentDB Agent Memory]]
- Entrenar con agentes: [[Learn Harness Engineering]]

# #modelos #opensource #investigacion