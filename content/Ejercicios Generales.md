# Ejercicios Generales

Lista de ejercicios prácticos para aplicar las herramientas de la enciclopedia:

1. [[#Ejercicio 1 — Scraping de tu propio barrio|Scraping de tu propio barrio]]
2. *Próximamente...*

---

## Ejercicio 1 — Scraping de tu propio barrio

**Objetivo:** Obtener una lista completa de todos los negocios de tu barrio con sus datos de contacto, usando un agente de IA con habilidades de web scraping, y publicar los resultados categorizados.

### Paso 1 — Instala FreeBuff en una carpeta dedicada

FreeBuff es un agente de código abierto. Para instalarlo:

1. Crea una carpeta dedicada en tu PC (ej. `C:\Users\tu-usuario\ejercicios\scraping-barrio` o `~/ejercicios/scraping-barrio`)
2. Instala el agente en esa carpeta:

```bash
# Ejemplo con npm (o el gestor que use FreeBuff)
npm install -g freebuff
# O si es un CLI de Python:
pip install freebuff
```

3. Verifica que funciona:

```bash
freebuff --version
```

> **Alternativa:** Si FreeBuff no está disponible, puedes usar [[Kilo Code]] o configurar [[Claude Code]] como agente principal. Cualquier agente que soporte MCP y pueda ejecutar herramientas servirá.

### Paso 2 — Elige un modelo (sin prisas, no uses uno premium)

Para las primeras veces, evita modelos caros como Claude Opus o GPT-5. Usa modelos más ligeros y baratos:

- **Gemini 2.5 Flash** (gratuito, rápido, buena calidad)
- **Claude Sonnet** (buen equilibrio calidad/precio)
- **GPT-4o mini** (barato y capaz)
- **DeepSeek V3** (económico)

Configúralo en tu agente:

```bash
freebuff config set model gemini/gemini-2.5-flash
# o exporta la variable de entorno
export FREEBUFF_MODEL=gemini/gemini-2.5-flash
```

### Paso 3 — Dale al agente las habilidades de Firecrawl y Browser Use

Tu agente necesita aprender a usar estas herramientas. Tienes dos opciones:

**Opción A — Usar skills oficiales:**

Si FreeBuff o tu agente soporta skills, instálalas:

```bash
# Firecrawl — web scraping y extracción
freebuff skill install firecrawl

# Browser Use — control de navegador
freebuff skill install browser-use
```

**Opción B — Pasarle los skills manualmente:**

Lee las notas [[Firecrawl]] y [[Browser Use]] y dile al agente que estudie su funcionamiento. Un prompt como este:

```
Quiero que aprendas a usar estas herramientas:

1. FIRECRAWL (fcreawl_scrape, fcreawl_search, fcreawl_map):
   - sirve para extraer texto de páginas web
   - buscar en Google
   - y descubrir URLs de un sitio

2. BROWSER USE (browser_use):
   - controla un navegador real
   - hace clic, rellena formularios, navega
```

Si tu agente soporta MCP, configura los servidores directamente. Ambos Firecrawl y Browser Use exponen MCP.

### Paso 4 — Extrae los negocios de tu barrio

Dale al agente el código postal de tu barrio y la instrucción completa:

```
Mi código postal es 28001 (o el que corresponda).

Quiero una lista de TODOS los negocios de este barrio. Para cada negocio necesito:
- Nombre
- Dirección
- Teléfono
- Categoría (tipo de negocio)
- Email (si está disponible)
- Horario (si está disponible)
- Puntuación en Google Maps (si está disponible)

Usa estos pasos:
1. Busca en Google Maps: "negocios cerca de [código postal]"
2. Usa Browser Use para navegar por los resultados si es necesario
3. Para cada negocio, extrae los datos de contacto
4. Si hay páginas web de negocios individuales, ábrelas y extrae más info
5. No te saltes ninguna categoría: restaurantes, tiendas, talleres, clínicas, despachos, academias, etc.
```

El agente combinará Firecrawl (scraping rápido de páginas) con Browser Use (navegación interactiva) para recorrer Google Maps y extraer todos los datos.

### Paso 5 — Publica los datos categorizados con Here.Now

Una vez que el agente tenga la lista completa, dile que la publique usando [[Here.Now]]:

```
Ahora publica estos datos con Here.Now.

1. Organiza los negocios por categorías, por ejemplo:
   - Restauración (bares, restaurantes, cafeterías)
   - Salud (clínicas, farmacias, centros médicos)
   - Comercio (tiendas, supermercados, panaderías)
   - Servicios (talleres, despachos, academias)
   - Ocio (cines, gimnasios, parques)
   
   Si alguna categoría no aplica, crea la que corresponda.

2. Para cada negocio, muestra: nombre, dirección, teléfono, categoría
3. Publica el resultado en Here.Now como una página web navegable
4. La URL debe ser algo como "tu-nombre.here.now/negocios-barrio"
```

Here.Now es gratuito y no requiere cuenta — el agente puede publicar directamente desde la terminal:

```bash
npx here.now publish ./negocios-barrio.html
```

O si prefiere usar la skill:

```
npx skills add heredotnow/skill --skill here-now -g
```

### Resultado esperado

Una página web pública (`tu-nombre.here.now/negocios-barrio`) con una tabla o listado categorizado de todos los negocios de tu barrio con sus datos de contacto. Una guía comercial de tu zona, generada completamente por un agente de IA sin intervención manual.

---

## Consejos generales

- **Empieza por un código postal pequeño** — un barrio con pocas calles es más manejable que todo un distrito
- **Si el agente se atasca**, recuerda que puedes intervenir y darle instrucciones más específicas
- **Guarda los resultados intermedios** — si el agente pierde el contexto, no tengas que empezar de cero
- **Respeta los términos de servicio** — no hagas scraping agresivo, usa delays entre peticiones
- **Si un negocio no tiene web**, Browser Use puede navegar por Google Maps para obtener la ficha

# #contenido #agente #proyecto
