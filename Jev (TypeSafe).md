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

## Jev fuera del benchmark: browser agents y try-on en vivo

- **Browser Use + Jev = jev-ultrafast** ([github.com/browser-use/jev-ultrafast](https://github.com/browser-use/jev-ultrafast)): mini agente open source con **espacio de acciones indexado y dinámico** — Jev elige operación + elemento en cada paso sobre el estado DOM, y un LLM pequeño solo escribe texto cuando la operación es TYPE_TEXT. Demo: vuelos Zúrich→Londres en **7.1 s por $0.0039** (2.9M views)
- **Matiz honesto del propio Gregor Zunic**: en tareas de largo horizonte el mismo enfoque sacó **1/20** frente a 17/20 de BrowserCode + Luna — la velocidad está resuelta, el razonamiento no. Otros datapoints: Jev en Stagehand cortó la latencia de Act 4.3×; Jev + WebMCP resolvió 49/49 a 112× menos coste
- **Alternativa 100% local**: el mismo agente con **GLiNER2.5** en vez de Jev sale **36× más barato** (post de un investigador de Fastino) — ver [[GLiNER2.5]]
- **Try-on virtual en tiempo real** (experimento para Drape): hablas, Jev lee la transcripción + lo que llevas puesto, elige de tu armario y cambia tu outfit en vivo — **$0.0011 por decisión, ~620 ms** por decisión

## Réplicas abiertas (sin waitlist)

- **SemIf** ([openjev.com](https://openjev.com), repo [TheoLeeCJ/SemIf](https://github.com/TheoLeeCJ/SemIf), MIT, 1.6k ⭐, antes OpenJev): experimento vivo y local que compara los dos métodos en tu GPU — **leer logits directos vs generar el JSON token a token**. Medido: 1.023 s y 0 tokens vs 5.332 s y 111 tokens (**5.21×**). Tabla honesta: MiniCPM5-2B 68.6%, Qwen3.5-4B 81.3–84.5%, Jev publicado 88.3% en el mismo subset de 102 filas. Aviso del propio proyecto: el readout directo **no es confianza calibrada**
- **Servidor wire-compatible** ([razorback16/openjev](https://github.com/razorback16/openjev), Apache-2.0): acepta `jev-latest`/`jev-preview` para que los SDKs de TypeSafe funcionen sin cambios, sobre DiffusionGemma 26B
- Conexión con la vault: el método directo en navegador es el mismo que [[Pi en el navegador (MiniCPM5)]] (MiniCPM5-2B en WebGPU)

## Recursos

- Web y waitlist: [typesafe.ai](https://typesafe.ai)
- Docs y API: [docs.typesafe.ai](https://docs.typesafe.ai)
- Lanzamiento: [@CompleteSkeptic en X](https://x.com/CompleteSkeptic) (35.9M views)
- Caso SEO: [@borjafat en X](https://x.com/borjafat) (680k views)
- TL;DR de 45 segundos: [@MatijaSosic en X](https://x.com/MatijaSosic) (1.6M views)

## Relacionado

- Caso de uso SEO: [[Auditoría SEO]]
- Jueces baratos antes de iterar: [[AI Critic Loop]]
- Modelos locales y diminutos: [[Ollama]], [[Cactus Needle 2]], [[GLiNER2.5]]
- Decisiones sin LLM en agentes: [[Fable Orchestrator]]
- Agente navegador con Jev: [[Browser Use]] (jev-ultrafast: 7 s por $0.0039)

# #modelos #opensource #agente #seo