# Jev (TypeSafe)

**Jev** es el primer **System One model** de **TypeSafe AI** (lanzado el 15 de septiembre de 2026, con 2 años en stealth y ronda seed de 40M $ liderada por DCVC): un modelo que **no genera texto** y devuelve **decisiones tipadas con confianza calibrada** en 70–500 ms. La tesis: gran parte de lo que hoy pedimos a un LLM (clasificar, routear, puntuar, extraer, marcar) nunca necesitó texto libre.

## Cómo funciona

- Declaras las preguntas y el espacio de respuestas por adelantado: **booleano, score 2–10 o elección entre hasta 255 opciones**
- Devuelve la **probabilidad de cada opción en una sola pasada paralela** (sin autoregresión token a token), con score de confianza que el código puede comparar contra un umbral
- Entrenado con **RLCD** (Reinforcement Learning for Calibrated Decisions): optimiza que la confianza declarada refleje la precisión real, para routear a revisión humana lo dudoso
- No puede devolver un valor fuera de tu schema — el "no alucina" es sobre **formato**, no sobre corrección: puede equivocarse dentro de tus opciones

## Cifras oficiales (docs de TypeSafe)

- **20–200× más rápido, 40–400× más barato** que LLMs frontera en tareas estructuradas
- **$42 por mil millones de tokens de input** ($0.042/M); **output gratis**
- Contexto 64k por request; solo texto como input (sin imagen/audio/video)
- Acceso en early access con waitlist

## El caso que lo hizo viral: auditoría SEO de 586 páginas

Prueba pública de [@borjafat](https://x.com/borjafat) con el mismo queue y la misma rúbrica para ambos:

- **Jev**: 586 páginas leídas + mapa de enlaces internos reconstruido en **45.1 s** — 584 enlaces colocados, 139 páginas rechazadas por no encajar honestamente. Coste: **$0.21**
- **Claude Opus 5**: 21 páginas en el mismo tiempo, **$1.43** gastados. El pase completo habría costado ~$43
- **~190× más barato por página**. El internal linking es el trabajo perfecto para Jev: no es redacción, son 8.790 llamadas sí/no (¿hay razón real para enlazar? ¿existe ya el anchor en el copy?). Llega a [distribb.io](https://distribb.io) con conector + plugin GPT

## Límites (evidencia independiente)

- Test de Every: 777 juicios en <0.7 s por ~un cuarto de céntimo, pero en defectos plantados detectó **6 de 7** frente a 7 de 7 de Fable 5.1 (25× más rápido, 580× más barato en ese test)
- No escribe, no resume, no razona en voz alta: **complementa** al modelo de chat, no lo sustituye
- Los resultados headline vienen de evals diseñados por sus creadores: pedir verificación independiente antes de producción

## Ecosistema en 78 horas

- **laya-mlx** ([github.com/mizorewww/laya-mlx](https://github.com/mizorewww/laya-mlx)): runtime nativo MLX para modelos de decisión tipada — decisiones cortas en **7–14 ms en M3 Max**, máximo ~1 GB en local, jugando al Snake a **60 decisiones/segundo** en el propio dispositivo. Open source
- **Shipper** ([shipper.now](https://shipper.now)): su cofundador anunció un "System One Agent" construido en 14 h sobre Jev (routear/clasificar/actuar sin LLM para lo determinista). Tomarlo como marketing hasta ver traces de decisión, override paths e impacto medible — y hay reseñas negativas circulando

## Recursos

- Web y waitlist: [typesafe.ai](https://typesafe.ai)
- Docs y API: [docs.typesafe.ai](https://docs.typesafe.ai)
- Lanzamiento: [@CompleteSkeptic en X](https://x.com/CompleteSkeptic) (35.9M views)
- Caso SEO: [@borjafat en X](https://x.com/borjafat) (680k views)

## Relacionado

- Caso de uso SEO: [[Auditoría SEO]]
- Jueces baratos antes de iterar: [[AI Critic Loop]]
- Modelos locales y diminutos: [[Ollama]], [[Cactus Needle 2]]
- Decisiones sin LLM en agentes: [[Fable Orchestrator]]

# #modelos #opensource #agente #seo