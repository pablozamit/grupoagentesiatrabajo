# Pexafy

[Pexafy](https://pexafy.com/) es un **buscador de imágenes semántico** (con API REST) que permite encontrar fotos de stock gratuitas **por significado, no por palabras clave**. Una sola búsqueda agrega **9 bibliotecas de fotos libres** (Unsplash, Pexels, Pixabay, Kaboompics, Burst, StockSnap, Picjumbo, Skitterphoto, NegativeSpace) con **9M+ fotos** indexadas. Cada imagen es gratis de usar, **sin atribución requerida**.

## El truco: búsqueda por intención, no por etiquetas

Un buscador clásico de stock iguala las *palabras* que tecleó el fotógrafo al subir la foto. Pexafy iguala el **significado, el mood y la historia** de la escena que describes — usando vectores CLIP — así encuentras la imagen correcta aunque nadie la haya etiquetado con tus palabras exactas.

Describe la escena en una frase completa y el resultado mejora:

> "the quiet after a summer thunderstorm, everything dripping and still"

Nadie etiqueta una foto con esa frase, pero Pexafy la rankea porque entiende la escena.

## Tres formas de buscar

1. **Texto** — describes la escena en lenguaje natural (funciona en 100+ idiomas)
2. **Imagen** — subes una foto y encuentra visualmente similares (reverse image search). Útil para coger el thumbnail con marca de agua de un stock de pago y encontrar la versión libre de la misma escena
3. **Imagen + texto** — partes de una foto de referencia y la orientas con palabras

## API para desarrolladores y agentes

- **Un solo endpoint** en vez de integrar Unsplash + Pexels + Pixabay por separado (una key, un JSON schema, un rate limit)
- `curl "https://api.pexafy.com/api/v1/search/photos?q=<descripcion>" -H "x-api-key: TU_KEY"`
- **Plan gratuito: 5.000 requests/mes**, sin tarjeta de crédito
- CORS abierto en endpoints de lectura — se puede llamar desde el navegador
- **Servidor MCP remoto con OAuth** para usar desde asistentes de IA sin pegar keys
- Docs: [docs.pexafy.com](https://docs.pexafy.com)

## Filtros disponibles

Color (con precisión ajustable), orientación (landscape/portrait/square), fuente, licencia (CC0 / public domain), fotógrafo, rango de fechas y sort por relevancia o novedad.

## Por qué importa

Reemplaza el tiempo de "buscaba en Google una foto para el blog / la web / el video y encontraba o marcas de agua o licencias dudosas" por una búsqueda semántica que devuelve fotos libres y usables de inmediato. Es la herramienta que le faltaba al stack de generación de contenido con agentes.

## Complemento con OpenMontage

Pexafy encaja perfectamente en el pipeline de **footage libre** de [[OpenMontage]]: en vez de depender solo de las integraciones directas (Pexels, Unsplash), el agente puede buscar imágenes semánticamente desde una sola API y alimentar los scene plans con fotos reales que casan con el guion. Una búsqueda por "mood" devuelve el estilo visual correcto para un montaje, no fotos de stock genéricas.

## Recursos

- Web: [pexafy.com](https://pexafy.com/)
- API docs: [docs.pexafy.com](https://docs.pexafy.com)
- Buscador directo: [pexafy.com/?q=...](https://pexafy.com/?q=abstract+art+minimalist)

## Relacionado

- Video con footage libre: [[OpenMontage]]
- Más servicios gratuitos para devs: [[free-for.dev]]
- Recursos de diseño y media: [[Repositorio 400 Recursos de Diseño Gratuitos]]

# #diseno #web #agente #video