# Glosario de términos

Definiciones cortas de términos recurrentes en esta enciclopedia. Si una palabra no la entiendes al leer otra nota, mira aquí primero.

## Agentes y orquestación

- **Agente (de IA)**: programa que ejecuta tareas complejas de forma autónoma, no solo responde preguntas. Decide qué herramientas usar y en qué orden. Ejemplos: [[Hermes Agent]], [[Kilo Code]], [[Google Jules]].
- **Skill**: pieza de conocimiento o procedimiento que un agente puede invocar. Formato típico: un archivo `.md` con instrucciones + herramientas + ejemplos. [[Hermes Agent]] trae 123 skills; [[last30days]] es una skill instalable.
- **Agente Skills (estándar)**: estándar abierto de distribución de skills que funciona en 50+ agentes ([agentskills.io](https://agentskills.io)). Se instalan con `npx skills add <repo>`.
- **MCP (Model Context Protocol)**: protocolo estándar para que un agente se conecte a herramientas externas. El servidor MCP expone sus herramientas y el agente las llama por nombre. Ejemplo: el servidor MCP de [[Firecrawl]].
- **Server / Servidor MCP**: programa que implementa el protocolo MCP. Corre como proceso local (`stdio`) o remoto, y el agente se conecta a él.
- **MCP Server / MCP host**: el agente que CORRE y CONSUME servidores MCP (Claude Code, Cursor, Windsurf, etc.).

## Modelos e IA

- **LLM (Large Language Model)**: modelo de lenguaje grande, el "cerebro" del agente. Ejemplos: GPT-4o, Claude 3.5, Gemini 2.5, Llama 3.
- **Tokens**: unidades en que se mide el texto que entra y sale de un LLM. Aproximadamente 1 token ≈ 4 caracteres en español. Cada modelo tiene un límite de contexto medido en tokens.
- **Context window**: cantidad máxima de tokens que un modelo puede procesar en una sola llamada (entrada + salida).
- **Embedding**: representación numérica de un texto en un espacio vectorial. Permite buscar textos "parecidos" por significado, no por coincidencia exacta.
- **RAG (Retrieval-Augmented Generation)**: técnica donde el agente BUSCA información relevante en una base de datos y la incluye en su prompt antes de generar la respuesta. A diferencia de fine-tuning, el conocimiento está en la base, no en los pesos del modelo.
- **Vector store / Vector database**: base de datos optimizada para guardar embeddings y hacer búsquedas por similitud (FAISS, Pinecone, Qdrant, Chroma).
- **Multimodal**: modelo que entiende más de una modalidad (texto + imagen + audio + vídeo). Gemini y GPT-4o son multimodales.
- **Fine-tuning**: re-entrenar un modelo con datos propios para que se especialice en una tarea. Caro y lento; casi siempre es mejor hacer RAG.
- **Open weights**: modelo cuyo pesos se pueden descargar y usar localmente (Llama, Mistral, DeepSeek, Qwen). Lo contrario de "API only" (GPT-4, Claude).
- **Tool calling**: capacidad del modelo de invocar funciones externas (herramientas) descritas en el prompt. Es lo que permite que un agente "use" APIs.

## Desarrollo con IA

- **Vibecoding**: metodología de desarrollo donde describes lo que quieres en lenguaje natural y la IA genera el código. Ver [[Vibecoding]].
- **Scaffolding**: estructura inicial o andamiaje que un agente o framework genera para empezar un proyecto. [[Agent-Reach]] es un scaffolding open source para que un agente lea internet.
- **Self-hosted**: software que tú ejecutas en tu propia máquina o servidor, en lugar de usar un servicio en la nube de otro.
- **Self-improving**: sistema que mejora su propio rendimiento con el uso. [[Hermes Agent]] es self-improving porque escribe sus propias skills a partir de la experiencia.
- **Closed learning loop / Bucle cerrado de aprendizaje**: ciclo donde la salida del sistema alimenta la siguiente iteración (output → evaluación → ajuste → input).

## Internet y web

- **Web scraping**: extraer datos de páginas web de forma automatizada. [[Firecrawl]] y [[Apify]] son herramientas de scraping.
- **MCP (en contexto web)**: un servidor MCP puede leer una web, hacer una búsqueda, etc. y devolver el resultado al agente.
- **CDN (Content Delivery Network)**: red de servidores distribuidos geográficamente que sirven contenido estático cerca del usuario. [[Vercel]] tiene 125+ puntos.
- **Serverless**: modelo de computación en la nube donde tú solo escribes funciones; el proveedor las ejecuta y escala automáticamente.
- **Edge function**: función serverless que corre en el "borde" (cerca del usuario), con latencia muy baja.

## 3D y gráficos

- **WebGL**: API de gráficos 3D en el navegador. [[Three.js]] es una abstracción sobre WebGL.
- **WebGPU**: sucesor de WebGL, con soporte para compute shaders en GPU. [[Plume]] lo usa para sus partículas.
- **Draco**: compresor de mallas 3D de Google. Ver [[Draco]].
- **Malla (mesh)**: estructura 3D formada por vértices, aristas y caras. Es lo que se ve en pantalla.
- **Compute shader**: programa que corre en GPU para cálculos paralelos (no renderiza geometría, solo transforma datos). [[Plume]] usa compute kernels para mover partículas.

## Datos y backend

- **NoSQL**: base de datos que no usa tablas relacionales. [[Firebase]] Firestore es NoSQL documental (JSON).
- **Realtime sync**: sincronización instantánea de datos entre clientes conectados. [[Firebase]] Realtime Database es el ejemplo canónico.
- **CDN (ver arriba)**.

## Glosario operativo

- **Brief**: resumen razonado de un tema. [[last30days]] produce un brief.
- **Wrapper**: pieza de software que envuelve otra herramienta para hacerla más fácil de usar. [[Agent-Reach]] instala wrappers como `twitter-cli`, `rdt-cli`, `yt-dlp`.
- **Pipeline**: secuencia de pasos donde la salida de uno alimenta el siguiente. [[Ajustes Avanzados de Hermes Agent]] explica cómo encadenar skills en pipelines.
- **Watchlist / Briefing programado**: ejecuciones periódicas de un agente o skill que producen briefs recurrentes. [[last30days]] tiene `watchlist.py` y `briefing.py` para esto.

# #contenido
