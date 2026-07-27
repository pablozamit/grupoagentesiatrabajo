---
title: "Ejercicio: Crear una API de Sofascore"
---

# Ejercicio — Crear una API de Sofascore

**Objetivo:** Construir una API REST que sirva datos de fútbol en tiempo real (partidos, clasificaciones, estadísticas) extrayéndolos de Sofascore, sin depender de APIs oficiales de pago.

## ¿Qué es Sofascore?

[Sofascore](https://www.sofascore.com/) es una plataforma de resultados deportivos en tiempo real con cobertura de 20+ deportes y datos detallados: alineaciones, estadísticas jugador por jugador, mapas de calor, valoraciones, historial de enfrentamientos y más. No ofrece API pública, pero sus datos se cargan vía endpoints internos que podemos scrape.

## Paso 1 — Inspecciona los endpoints de Sofascore

Sofascore carga sus datos desde una API interna. Para descubrir los endpoints:

1. Abre [sofascore.com](https://www.sofascore.com/) en Chrome
2. Abre DevTools (F12) → pestaña **Network** → filtra por `XHR` o `Fetch`
3. Navega a un partido o clasificación
4. Identifica las peticiones a `api.sofascore.com`

**Endpoints típicos que encontrarás:**

| Endpoint | Datos que devuelve |
|---|---|
| `/api/v1/sport/football/events/live` | Partidos en vivo |
| `/api/v1/sport/football/events/{id}` | Detalle de un partido |
| `/api/v1/sport/football/standings/total/{id}` | Clasificación de liga |
| `/api/v1/sport/football/team/{id}/players` | Plantilla de un equipo |
| `/api/v1/sport/football/event/{id}/statistics` | Estadísticas del partido |
| `/api/v1/sport/football/event/{id}/incidents` | Goles, tarjetas, cambios |
| `/api/v1/unique-tournament/{id}/season/{year}/top-players` | Máximos goleadores |

## Paso 2 — Extrae los datos con Firecrawl

[[Firecrawl]] es la herramienta ideal para scrapear los endpoints de Sofascore porque:

- Soporta JavaScript rendering (los datos de Sofascore son JSON dinámico)
- Tiene modo `extract` con esquema JSON para estructurar los datos exactamente como quieras
- Plan gratuito disponible para scrape y search básicos

### 2.1 Consigue tu API key de Firecrawl

1. Entra en [firecrawl.dev](https://firecrawl.dev) → crea cuenta
2. Copia tu API key del dashboard

### 2.2 Scrapea un partido en vivo

```python
import os
import requests

FIRECRAWL_API_KEY = "fc-tu-api-key"
SOFASCORE_EVENT_ID = "12345678"  # ID del partido

headers = {
    "Authorization": f"Bearer {FIRECRAWL_API_KEY}",
    "Content-Type": "application/json"
}

# Opción A: scrape directo del endpoint JSON
url = f"https://api.sofascore.com/api/v1/event/{SOFASCORE_EVENT_ID}"
payload = {
    "url": url,
    "formats": ["json"],
    "onlyMainContent": True,
    "waitFor": 3000  # Esperar a que cargue el JSON
}

response = requests.post(
    "https://api.firecrawl.dev/v1/scrape",
    headers=headers,
    json=payload
)

data = response.json()
print(f"Partido: {data['data']['json']['event']['homeTeam']['name']} vs {data['data']['json']['event']['awayTeam']['name']}")
```

### 2.3 Extrae datos estructurados con esquema JSON

```python
# Opción B: extract con esquema para datos limpios
payload = {
    "urls": [f"https://api.sofascore.com/api/v1/event/{SOFASCORE_EVENT_ID}"],
    "extract": {
        "schema": {
            "type": "object",
            "properties": {
                "home_team": {"type": "string"},
                "away_team": {"type": "string"},
                "home_score": {"type": "number"},
                "away_score": {"type": "number"},
                "status": {"type": "string"},
                "start_time": {"type": "string"}
            }
        }
    }
}

# Usando el SDK de Python:
from firecrawl import Firecrawl

fc = Firecrawl()
result = fc.extract(
    urls=[f"https://api.sofascore.com/api/v1/event/{SOFASCORE_EVENT_ID}"],
    schema={
        "type": "object",
        "properties": {
            "home_team": {"type": "string"},
            "away_team": {"type": "string"},
            "home_score": {"type": "number"},
            "away_score": {"type": "number"},
            "status": {"type": "string"},
            "incidents": {
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "type": {"type": "string"},
                        "minute": {"type": "number"},
                        "player": {"type": "string"}
                    }
                }
            }
        }
    }
)
```

### 2.4 Alternativa sin API key: requests + User-Agent

```python
import requests
import json

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    "Accept": "application/json",
    "Origin": "https://www.sofascore.com",
    "Referer": "https://www.sofascore.com/"
}

# Sofascore usa IDs numéricos para torneos y partidos
# La Liga = 8, Premier League = 17, Champions = 7
TOURNAMENT_ID = 8  # La Liga
SEASON_ID = 56783  # Temporada actual (inspecciona en la web)

# Partidos de hoy
url = f"https://api.sofascore.com/api/v1/unique-tournament/{TOURNAMENT_ID}/season/{SEASON_ID}/events/round/1"
response = requests.get(url, headers=headers)

if response.status_code == 200:
    data = response.json()
    for event in data.get("events", []):
        home = event["homeTeam"]["name"]
        away = event["awayTeam"]["name"]
        home_score = event.get("homeScore", {}).get("current", 0)
        away_score = event.get("awayScore", {}).get("current", 0)
        print(f"{home} {home_score} - {away_score} {away}")
```

## Paso 3 — Construye la API con FastAPI

Una vez que sabes extraer los datos, conviértelos en una API REST:

```python
# api.py
from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
import requests

app = FastAPI(title="Sofascore API", version="1.0")

app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])

SOFASCORE_HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    "Accept": "application/json",
    "Origin": "https://www.sofascore.com",
    "Referer": "https://www.sofascore.com/"
}

SOFASCORE_API = "https://api.sofascore.com/api/v1"

# IDs de torneos comunes
TOURNAMENTS = {
    "laliga": 8,
    "premier": 17,
    "champions": 7,
    "seriea": 23,
    "bundesliga": 35,
    "ligue1": 34
}


@app.get("/")
def root():
    return {"api": "Sofascore API", "endpoints": ["/partidos/{liga}", "/partido/{id}", "/clasificacion/{liga}", "/goleadores/{liga}"]}


@app.get("/partidos/{liga}")
def partidos(liga: str, jornada: int = Query(default=1)):
    """Devuelve los partidos de una liga para una jornada."""
    tournament_id = TOURNAMENTS.get(liga.lower())
    if not tournament_id:
        return {"error": f"Liga no encontrada. Disponibles: {list(TOURNAMENTS.keys())}"}

    url = f"{SOFASCORE_API}/unique-tournament/{tournament_id}/season/current/events/round/{jornada}"
    response = requests.get(url, headers=SOFASCORE_HEADERS)

    if response.status_code != 200:
        return {"error": "No se pudieron obtener los datos"}

    data = response.json()
    partidos = []
    for event in data.get("events", []):
        partidos.append({
            "id": event["id"],
            "local": event["homeTeam"]["name"],
            "visitante": event["awayTeam"]["name"],
            "goles_local": event.get("homeScore", {}).get("current", 0),
            "goles_visitante": event.get("awayScore", {}).get("current", 0),
            "estado": event.get("status", {}).get("description", "Desconocido"),
            "inicio": event.get("startTimestamp")
        })

    return {"liga": liga, "jornada": jornada, "partidos": partidos}


@app.get("/partido/{event_id}")
def partido(event_id: int):
    """Devuelve el detalle completo de un partido."""
    url = f"{SOFASCORE_API}/event/{event_id}"
    response = requests.get(url, headers=SOFASCORE_HEADERS)

    if response.status_code != 200:
        return {"error": "Partido no encontrado"}

    event = response.json()["event"]
    return {
        "id": event["id"],
        "local": event["homeTeam"]["name"],
        "visitante": event["awayTeam"]["name"],
        "goles_local": event.get("homeScore", {}).get("current", 0),
        "goles_visitante": event.get("awayScore", {}).get("current", 0),
        "estado": event.get("status", {}).get("description"),
        "ronda": event.get("roundInfo", {}).get("round"),
        "arbitro": event.get("referee", {}).get("name"),
        "estadio": event.get("venue", {}).get("stadium", {}).get("name"),
        "espectadores": event.get("venue", {}).get("attendance"),
        "alineaciones": {
            "local": [p["player"]["name"] for p in event.get("homeTeam", {}).get("players", []) if p.get("isStarter")],
            "visitante": [p["player"]["name"] for p in event.get("awayTeam", {}).get("players", []) if p.get("isStarter")]
        }
    }


@app.get("/clasificacion/{liga}")
def clasificacion(liga: str):
    """Devuelve la clasificación actual de una liga."""
    tournament_id = TOURNAMENTS.get(liga.lower())
    if not tournament_id:
        return {"error": f"Liga no encontrada. Disponibles: {list(TOURNAMENTS.keys())}"}

    url = f"{SOFASCORE_API}/unique-tournament/{tournament_id}/season/current/standings/total"
    response = requests.get(url, headers=SOFASCORE_HEADERS)

    if response.status_code != 200:
        return {"error": "No se pudieron obtener los datos"}

    data = response.json()
    tabla = []
    for row in data.get("standings", [{}])[0].get("rows", []):
        tabla.append({
            "posicion": row["position"],
            "equipo": row["team"]["name"],
            "puntos": row["points"],
            "pj": row["matches"],
            "vg": row["wins"],
            "ve": row["draws"],
            "vd": row["losses"],
            "gf": row["scoresFor"],
            "gc": row["scoresAgainst"]
        })

    return {"liga": liga, "clasificacion": tabla}


@app.get("/goleadores/{liga}")
def goleadores(liga: str):
    """Devuelve los máximos goleadores de una liga."""
    tournament_id = TOURNAMENTS.get(liga.lower())
    if not tournament_id:
        return {"error": f"Liga no encontrada"}

    url = f"{SOFASCORE_API}/unique-tournament/{tournament_id}/season/52219/top-players/overall"
    response = requests.get(url, headers=SOFASCORE_HEADERS)

    if response.status_code != 200:
        return {"error": "No se pudieron obtener los datos"}

    data = response.json()
    goleadores = []
    for player in data.get("topPlayers", {}).get("goals", [])[:10]:
        goleadores.append({
            "jugador": player["player"]["name"],
            "equipo": player["player"]["team"]["name"],
            "goles": player["statistics"]["goals"],
            "asistencias": player["statistics"].get("assists", 0),
            "partidos": player["statistics"]["appearances"]
        })

    return {"liga": liga, "goleadores": goleadores}
```

## Paso 4 — Despliega la API

Tienes varias opciones según la nota [[Vercel]] y [[Firebase]]:

### Opción A: Vercel Serverless (recomendado para empezar)

```bash
# Instala Vercel CLI
npm i -g vercel

# En la carpeta del proyecto
vercel deploy
```

Configura `vercel.json`:

```json
{
  "builds": [
    { "src": "api.py", "use": "@vercel/python" }
  ],
  "routes": [
    { "src": "/(.*)", "dest": "api.py" }
  ]
}
```

- **Gratis**: 100 GB bandwidth, funciones ilimitadas en Hobby
- **CDN global**: Respuesta rápida desde cualquier país
- **Zero config**: Despliegue con un comando

### Opción B: Firebase Functions

```bash
firebase init functions
firebase deploy --only functions
```

- **Gratis**: 2M invocaciones/mes en plan Spark
- **Escala automáticamente**

### Opción C: VPS con FastAPI + Uvicorn

Si necesitas control total, despliega en un [[VPS]] (Oracle Cloud Free Tier es gratis):

```bash
uvicorn api:app --host 0.0.0.0 --port 8000
```

## Paso 5 — Añade caché para no saturar Sofascore

Para evitar rate limits y reducir llamadas, añade caché con `cachetools`:

```python
from cachetools import TTLCache, cached

cache = TTLCache(maxsize=100, ttl=60)  # 60 segundos de caché

@cached(cache)
def get_sofascore_data(url: str) -> dict:
    response = requests.get(url, headers=SOFASCORE_HEADERS)
    return response.json()
```

O usa **Vercel KV** (Redis-compatible, gratis hasta 256 MB/mes) para caché compartido entre instancias.

## Herramientas de la enciclopedia usadas

| Herramienta | Para qué |
|---|---|
| [[Firecrawl]] | Scraping con JavaScript rendering y extracción estructurada |
| [[Browser Use]] | Navegación interactiva si Sofascore bloquea requests directos |
| [[Apify]] | Alternativa con 20,000+ scrapers listos (Google Sheets, etc.) |
| [[Vercel]] | Despliegue serverless gratuito de la API |
| [[Firebase]] | Alternativa de hosting + base de datos |
| [[VPS]] | Control total del servidor (Oracle Cloud gratis) |
| [[Acceso a internet desde agentes]] | Guía comparativa de herramientas de acceso web |

## Resultado esperado

Una API REST funcionando en `https://tu-api.vercel.app` con endpoints:

- `GET /partidos/laliga?jornada=1` → partidos de la jornada
- `GET /partido/12345678` → detalle completo con alineaciones
- `GET /clasificacion/laliga` → tabla de clasificación
- `GET /goleadores/laliga` → top 10 goleadores

## Consejos

- **Empieza por una sola liga** — La Liga o Premier son las más estables
- **Guarda los IDs de torneos** que descubras para no tener que inspeccionarlos cada vez
- **Respeta los rate limits** — añade 1-2 segundos de delay entre peticiones, usa caché
- **Los IDs de temporada cambian cada año** — actualízalos al inicio de cada temporada
- **Sofascore puede cambiar sus endpoints** — revisa cada pocos meses que sigan funcionando
- **Alternativa legal**: Si necesitas datos para un producto comercial, considera APIs oficiales como Sportmonks, API-Football o Football-Data.org

# #proyecto #web #agente
