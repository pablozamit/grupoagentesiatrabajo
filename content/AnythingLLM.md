# AnythingLLM

[AnythingLLM](https://anythingllm.com) es una **aplicación todo-en-uno de IA** que te permite tener tu propio ChatGPT privado, corriendo donde tú quieras, con tus documentos y tus modelos.

## Qué es

- Aplicación open source (MIT) de **Mintplex Labs**
- Puedes instalarla en **local** (Windows, Mac, Linux) o en un **servidor** con Docker
- Es como tener un ChatGPT privado: tú controlas los datos, los modelos y quién accede
- 61k estrellas en GitHub, muy activo

## Qué puedes hacer con ella

- **Chat con tus documentos**: subes un PDF, TXT, DOCX o página web y le preguntas sobre su contenido
- **Agentes de IA**: puedes crear agentes dentro de la app que naveguen por internet, ejecuten tareas programadas y usen herramientas
- **Multi-usuario**: varias personas pueden usarla al mismo tiempo, cada una con su propio acceso y permisos
- **Memoria persistente**: el agente recuerda información importante entre sesiones
- **Widget chat**: puedes incrustar un chat en tu web para que los visitantes pregunten

## Qué modelos soporta

Funciona con casi cualquier proveedor de modelos: **OpenAI, Anthropic, Google Gemini, Ollama (local), OpenRouter, DeepSeek, Mistral, Groq, AWS Bedrock, Azure OpenAI**, y muchos más. También puedes usar modelos open source locales vía Ollama o LM Studio.

## Cómo empezar

**Opción 1 — Escritorio** (más fácil):
Descarga la app desde [anythingllm.com](https://anythingllm.com) para Windows, Mac o Linux. Abres y ya funciona.

**Opción 2 — Docker** (para servidor):
```
docker pull mintplexlabs/anythingllm
docker run -d -p 3001:3001 mintplexlabs/anythingllm
```

Luego entras en `http://localhost:3001`, configuras tu modelo y empiezas a chatear.

# #agente #hosting #contenido
