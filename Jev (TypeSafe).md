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

## El patrón real: Jev como juez, no como generador

Dos casos de septiembre 2026 lo dejan cristalino — Jev nunca genera, **ordena candidatos que otro produce**:

- **Escenas 3D en tiempo real** ([@op7418](https://x.com/op7418), 123.8k views, demo viva con tu propia API Jev): de docenas o cientos de **modelos 3D prefabricados**, Jev hace cientos de juicios concurrentes según el texto y a la vez resuelve color, iluminación, posición y estado → **interior completo en 1 segundo**. La lección de un comentarista: muchas cosas no necesitan generarse, solo **llamarse rápido** — generar es en gran parte desperdicio de recursos. El autor añade: aún no es multimodal; cuando lo sea, el rango se amplía (diseño de niveles en vivo, UI personalizada renderizada en tiempo real)
- **Clipping de video** ([@BurhanUsman](https://x.com/BurhanUsman), 35.8k views): video de 90+ min clipeado sobre cualquier tema en **<2 s por ~2 céntimos**. Y la comunidad lo desmontó con precisión: Jev solo no puede — preprocesas a **transcript con timestamps**, Jev elige los segmentos y FFmpeg corta. El autor lo confirma: la transcripción es commodity, la inteligencia es de Jev (vía transcripts, sin entender imagen). La crítica dura: para eso "un modelo normal con tu transcript basta"

La regla de oro: si tu tarea se puede reformular como **"elegir entre candidatos ya existentes"** (páginas, timestamps, assets, opciones), Jev la hace 20–200× más barata. Si hay que **generar o entender píxeles/audio**, necesitas el pipeline completo (transcribir, prefabricar, extraer) y Jev es solo el juez final. El cuello se mueve a la **calidad de la biblioteca y el juicio estético** (Mr.Quin) — exactamente lo que el workflow de Meng To y el AI Critic Loop ya resolvían por otro lado.

## Mapa del ecosistema: awesome-jev (250+ proyectos)

[yibie/awesome-jev](https://github.com/yibie/awesome-jev) (779 ⭐, 109 forks, 62 contribuidores, 13 categorías): la field guide de quién construye de verdad con Jev. Reparto: Agent Decisions 31, Infra/SDKs 43, Classification & Routing 24, Verification & Guardrails 22, Scoring & Ranking 20, Calibration & Research 22, Evaluación 16, Game & Sim 10, Data Labeling 5, Finance 4, Moderación 4, Compliance 1, Prácticas 54.

Las joyas que importan para la vault:

- **DocJev** (LlamaIndex, open source): clasifica documentos y parte sub-documentos — 40/40 a ~182 ms → con [[LlamaCloud (parseo + MCP)]]
- **hermes-jev-approvals**: Jev delante de los approvals de Hermes — 8.7× más rápido, 4.4× menos prompts al usuario
- **taste-lint**: caza slop en UI/copy/instrucciones con probabilidades Jev → con [[AI Critic Loop]]
- **jev-seo**: radar SEO/GEO agent-first (DuckDuckGo + Jev + MCP server)
- **BTK audit**: 1.204 páginas por run, 4.816 juicios en <3 min a $0.0048 por batch de 12 queries
- **LlamaIndex adapter**: nDCG 0.340→0.396 a ~$0.0003/query
- **CUA-S1-FORMS** (706K params, 2.8 MB): formulario entero en un pase de 50 ms vs 23 turnos y 39.6 s del LLM. Verificado: [trycua/cua](https://github.com/trycua/cua) (25k ⭐, MIT, source-only research + pesos en [HF cua-ai/cua-s1-forms](https://huggingface.co/cua-ai/cua-s1-forms)) y demo real de **196 filas** — justo el matiz de David Tran (99.7% vs 83.6% vale en su set, no en general). El loop que propone la comunidad: **Jev decides, Cua acts** (Jev elige entre acciones acotadas, Cua ejecuta en browser/desktop real, re-observa y verifica). Tesis de Layton Gott: un especialista diminuto por cada tarea repetitiva (forms, CRM, data entry, routing) + un agente potente que reparte
- **laya-mlx**: 13.4 ms por decisión (7.4 ms multilingüe), cero output tokens
- **Luce**: réplica abierta que le gana en su terreno (tickets 91.1 vs 75.1 de Jev)
- **typesafe-ai/skills**: package oficial (`npx skills add typesafe-ai/skills`)
- **mastra-jev-moderation**: 9/9 hostiles bloqueados, 0/49 reales, 0.4 s de mediana
- **Jev Chat Twitch**: filtrado de chat en vivo por ~$0.15/hora

Contra-evidencia (la lista la incluye, y eso la hace fiable):

- Reranking solo con Jev **no batió** al retrieval vectorial (33k entries, 164 queries, 9.831 pares)
- Compaction vía Jev: pushback fuerte — compactar es reconstruir, no filtrar
- Calibración independiente: Choice y Score **sobreconfían**, Boolean **infraconfía**
- Regla de curación: bulk del mismo autor (mismo scaffold, 1–2 commits) = lead, no herramienta validada. Checklist antes de adoptar: ¿llama a la API de verdad? ¿hay check runnable? ¿números con fuente? ¿cuánto es código? ¿hay licencia?

## Routing: el ahorro que rompe la caché (caso Antonio Leiva)

[@antonioleivag](https://x.com/antonioleivag) (84k views, en español): router Jev para Codex ([jev-codex-router](https://github.com/0xNatoshi/jev-codex-router), vía codex-router.com) — primero prometedor (Astra mejoró el prompt, delegaba por dificultad), luego midió: **cache hit 32% con router vs 99.35% sin cambiar de modelo** → "No os recomiendo usar esto". Cada cambio de modelo invalida el prompt cache: lo ahorrado por llamada se pierde en descuento de caché. Contrapunto: [@TheAhmadOsman](https://x.com/TheAhmadOsman) reporta **99.7% cache hits** con DeepSeek Harness + GLM-5.3 self-hosted — "la diferencia entre harnesses vibe-codeados y bien ingenierizados". Pregunta abierta (Javi Vázquez): ¿**harness routing** en vez de model routing? Conecta directo con [[Fable Orchestrator]] (mismo riesgo al repartir Fable/Luna/DeepSeek).

## Jarvis ambiente (Max Blade)

[@_MaxBlade](https://x.com/_MaxBlade) (66.7k): Jev armado siempre, **sin wake word** — por probabilidades distingue si le hablas al ordenador o piensas en voz alta. Coste del clip ~$2, afinable a céntimos. Su ADE: CNVS ([cnvs.dev](https://cnvs.dev), macOS, UI minimalista estilo Jarvis con voz).

## Reglas que el linter no puede (Abide)

Tesis de Ohans Emmanuel ([@OhansEmmanuel](https://x.com/OhansEmmanuel), ColdteaAI, 110k views): el mejor caso de uso de Jev en coding agents es **hacer cumplir reglas que no se pueden codificar**. Los agentes rompen reglas y algunas no admiten linter — Jev puntúa cada turno contra ellas y dice qué arreglar ya, con self-heal vía hooks.

Medido por el autor (replay de 93 sesiones reales de Claude Code: 1.256 edits, 147 turnos, 2 repos contra su AGENTS.md): **1 de cada 13 turnos rompía una regla**, 300 ms por check, **0.1 céntimo por turno**. Diseño: las reglas no-deterministas se traducen a un **rubric JSON**, y en cada check van instrucciones + diff del turno a Jev. Gotcha: muchos checks no tienen sentido por edit — **corre por turno, no por edit**. Paso previo de la comunidad: **jev-rules** (EliaAlberti) pregunta "¿aplica esta regla?" por prompt y archivo, y entrega a Claude solo las que sí; Abide verifica después si se cumplieron. Repo indicado en el hilo: [coldteadotai/abide](https://github.com/coldteadotai/abide) (no verificado independientemente — cifras del autor).

## Frontera: visión barata + juicio (SAM 3.1 × Jev)

Idea sin artefacto aún (hilo japonés, 207k views): **SAM 3.1** (Meta Model API: detección/segmentación/tracking ligero, $2.50/1k imágenes, $0.20/1k frames) detecta barato + Jev decide = ComputerUse casi autónomo. El patrón encaja con la tesis juez-no-generador; falta quien lo construya.

## Empezar (guía china, 354k views)

Vía [@harrisonitsme](https://x.com/harrisonitsme): 1) waitlist en typesafe.ai (el autor dice aprobación el mismo día — otros reportan solo-con-invitación: estado cambiante, compruébalo); 2) `npx skills add typesafe-ai/skills --skill typesafe-ai`; 3) API key en el dashboard; 4) "use the TypeSafe skill" en el prompt. Atajo mencionado: OpenRouter ya lo integra; Qwen3.7-Flash como vía rápida alternativa. Detalle: **Jev viene de la paradoja de Jevons** (más eficiencia → más consumo).

## Recursos

- Web y waitlist: [typesafe.ai](https://typesafe.ai)
- Docs y API: [docs.typesafe.ai](https://docs.typesafe.ai)
- Lanzamiento: [@CompleteSkeptic en X](https://x.com/CompleteSkeptic) (35.9M views)
- Caso SEO: [@borjafat en X](https://x.com/borjafat) (680k views)
- Mapa del ecosistema: [yibie/awesome-jev en GitHub](https://github.com/yibie/awesome-jev) (250+ proyectos en 13 categorías)
- Router con caché rota: [@antonioleivag en X](https://x.com/antonioleivag) (medición 32% vs 99.35%)
- TL;DR de 45 segundos: [@MatijaSosic en X](https://x.com/MatijaSosic) (1.6M views)

## Relacionado

- Caso de uso SEO: [[Auditoría SEO]]
- Jueces baratos antes de iterar: [[AI Critic Loop]]
- Modelos locales y diminutos: [[Ollama]], [[Cactus Needle 2]], [[GLiNER2.5]]
- Decisiones sin LLM en agentes: [[Fable Orchestrator]]
- Agente navegador con Jev: [[Browser Use]] (jev-ultrafast: 7 s por $0.0039)

# #modelos #opensource #agente #seo #3d #video