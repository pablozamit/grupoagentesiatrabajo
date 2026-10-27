# Gemini Embedding 2

**Gemini Embedding 2** es el **primer modelo de embeddings nativamente multimodal de Google**: lleva texto, imágenes, vídeo, audio y documentos a un único espacio vectorial, de modo que una sola consulta puede recuperar y clasificar material de distintos tipos de medio. Se anunció en preview pública desde la cuenta de [@GoogleAIStudio](https://x.com/GoogleAIStudio/status/2031421162123870239) y está disponible en la Gemini API y en Vertex AI con el identificador `gemini-embedding-2-preview`.

## Qué cambia frente a un embedding de texto

- **Un solo espacio para todo.** Texto, imágenes, vídeo, audio y PDFs comparten representación, así que una búsqueda semántica no necesita un pipeline distinto por formato.
- **Audio sin transcripción intermedia.** El modelo ingiere el audio directamente en lugar de convertir primero a texto.
- **Entrada intercalada.** Admite varias modalidades en la misma petición (por ejemplo, imagen + texto), lo que permite capturar relaciones entre ellas.
- **Más de 100 idiomas** con intención semántica, según el anuncio.

## Límites por modalidad

| Modalidad | Límite |
|---|---|
| Texto | 8.192 tokens de entrada |
| Imágenes | hasta 6 por petición (PNG y JPEG) |
| Vídeo | hasta 120 segundos (MP4 y MOV) |
| Audio | nativo, sin transcripción |
| Documentos | PDFs de hasta 6 páginas |

## Dimensiones flexibles (MRL)

Usa **Matryoshka Representation Learning**, la misma técnica que los embeddings anteriores de Google: la salida puede recortarse desde las 3.072 dimensiones por defecto hasta otras más pequeñas para ahorrar almacenamiento. El anuncio recomienda **3.072, 1.536 y 768** dimensiones por calidad.

## Uso

```python
from google import genai
from google.genai import types

client = genai.Client()
result = client.models.embed_content(
    model="gemini-embedding-2-preview",
    contents=[
        "What is the meaning of life?",
        types.Part.from_bytes(data=image_bytes, mime_type="image/png"),
        types.Part.from_bytes(data=audio_bytes, mime_type="audio/mpeg"),
    ],
)
```

## Datos y atribución

- **Estado**: preview pública en Gemini API y Vertex AI (anuncio de Google AI Studio).
- **Rendimiento**: Google afirma que supera a modelos líderes en texto, imagen y vídeo y que añade capacidades de voz; es una afirmación del anunciante, no una medición independiente.
- **Casos citados por partners** (atribuidos): Everlaw para búsqueda legal sobre millones de registros; Sparkonomy para indexar vídeo e imagen con una reducción de latencia de hasta el 70 % y similitud texto-imagen/vídeo de 0,4 a 0,8; Mindlid para memorias conversacionales con un 20 % más de recall top-1 en su app de bienestar.
- **Continuidad de API**: el anuncio destaca que sustituye a los embeddings de texto anteriores con cambios mínimos.

## Relacionado

- [[RAG]] - recuperación aumentada: los embeddings multimodales permiten recuperar también imagen, audio y vídeo, no solo texto
- [[turbovec]] - índice vectorial local para servir estos vectores sin depender de la nube
- [[TurboQuant]] - cuantización de vectores que reduce el coste de almacenar embeddings de alta dimensión
- [[MOSS-Image]] - otro modelo multimodal abierto, en este caso generativo

# #modelos #basededatos #contenido
