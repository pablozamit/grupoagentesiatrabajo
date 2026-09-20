# Botón de perfil de Google Search

**Truco SEO de septiembre 2026** (vía [@isocialwebseo](https://x.com/isocialwebseo), 20.5k views, verificado contra la [documentación oficial de Google](https://developers.google.com/search/docs/appearance/search-profiles) del 16 de septiembre): con **dos líneas de código** pones en tu web el botón que convierte visitas en **seguidores de tu perfil de Google** — y cada seguidor es distribución recurrente en **Discover** no solo de tu web, sino de todo tu contenido enlazado (Instagram, TikTok, YouTube, X, Facebook).

## La frase clave (traducción del doc oficial)

*"Cuando los lectores siguen tu perfil de búsqueda, tu contenido enlazado en tu perfil tiene más probabilidad de aparecer para tu audiencia en Google Discover."*

Google dice **"más probabilidad"**: no garantiza nada ni publica cifras.

## Cómo se hace (15 min, gratis)

1. **Reclama tu perfil**: `profile.google.com/claim` (URL resultante: `profile.google.com/@tuhandle`)
2. Descarga los assets oficiales del botón desde la documentación
3. Pega el snippet con tu handle (versión con imagen):

```html
<a href="https://profile.google.com/@ejemplo" aria-label="Find us on Google Search"><img src="/ruta/google-search-badge.svg" alt="Google Search"></a>
```

Atajo sin diseño: **enlace de texto** para firmas de artículo, newsletters y bios:

```html
<a href="https://profile.google.com/@ejemplo">Find us on Google Search</a>
```

## Requisitos y normas (te tumban si las saltas)

- Elegibilidad: **100k seguidores** en YouTube, Instagram o X (o 300k en TikTok) en una sola plataforma; solo EE.UU. en el lanzamiento — **comprueba primero si puedes reclamar**
- Área pulsable mínima **48×48 dp** (Android) / **44×44 px** (iOS y web)
- No estirar, deformar, rotar ni cambiar colores del icono; no mezclar monocromo con color
- Con el botón de Fuentes preferidas a la vez, usa el de perfil **con etiqueta** para distinguirlos

## Por qué importa

Tras dos años perdiendo tráfico que Google se queda, esto es lo contrario: Google te ofrece una **lista de seguidores dentro de su casa** que reparte hasta tu contenido de fuera.

## Recursos

- Docs oficiales: [developers.google.com/search/docs/appearance/search-profiles](https://developers.google.com/search/docs/appearance/search-profiles)
- Contexto: [SEJ — Search Profiles](https://www.searchenginejournal.com/google-launches-search-profiles-for-creators-with-100k-followers/577983)

## Relacionado

- Estrategia general: [[GEO]], [[Auditoría SEO]]
- Ser citado por IAs: [[Menciones en listicles y reviews (GEO)]], [[LinkedIn Pulse para GEO]]

# #seo #marketing #contenido