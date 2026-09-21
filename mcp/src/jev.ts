import type { SearchResult } from "./search.js"

// Re-rank de candidatos con Jev (TypeSafe AI, modelo jev-latest).
// Estrategia: una sola llamada a /v1/systemone con N preguntas `noul` en
// paralelo (una por candidato). El `state` es la necesidad del usuario y cada
// pregunta describe un candidato. Añadir preguntas apenas cambia la latencia.

const JEV_URL = "https://api.typesafe.ai/v1/systemone"
const JEV_MODEL = process.env.JEV_MODEL || "jev-latest"
// Umbral mínimo de relevancia: por debajo se descarta (salvo top 3).
const UMBRAL_RELEVANCIA = 0.35
// Candidatos máximos enviados a Jev (acota tokens y coste por búsqueda).
// 30 preguntas en paralelo apenas cambian la latencia y cuestan ~$0.0002.
const MAX_CANDIDATOS_JEV = 30

export type ResultadoOptimizado = SearchResult & { relevanciaJev?: number }

export type Optimizacion = {
  resultados: ResultadoOptimizado[]
  /** true si Jev participó; false si no hay clave o falló (respaldo fuzzy) */
  jev: boolean
  candidatos: number
}

type RespuestaJev = {
  answers?: Record<string, { noul?: number }>
  usage?: { input_tokens?: number, output_tokens?: number }
}

export async function optimizarConJev(
  necesidad: string,
  candidatos: SearchResult[],
  limite = 10,
  apiKey = process.env.TYPESAFE_API_KEY
): Promise<Optimizacion> {
  const recorte = candidatos.slice(0, MAX_CANDIDATOS_JEV)
  if (!apiKey || recorte.length === 0) {
    return { resultados: recorte.slice(0, limite), jev: false, candidatos: candidatos.length }
  }

  const questions: Record<string, { type: "noul", instructions: string }> = {}
  recorte.forEach((c, i) => {
    questions[`candidato_${i}`] = {
      type: "noul",
      instructions: `La entrada "${c.title}" (etiquetas: ${c.tags.join(", ") || "ninguna"}) dice: "${c.snippet.slice(0, 300)}". ¿Trata esta entrada sobre la necesidad del usuario o sobre algo estrechamente relacionado? Valora la afinidad temática aunque la necesidad esté expresada en pocas palabras.`
    }
  })

  const respuesta = await fetch(JEV_URL, {
    method: "POST",
    headers: { authorization: `Bearer ${apiKey}`, "content-type": "application/json" },
    body: JSON.stringify({ state: necesidad, model: JEV_MODEL, questions }),
    signal: AbortSignal.timeout(15000)
  })
  if (!respuesta.ok) {
    throw new Error(`Jev respondió HTTP ${respuesta.status}`)
  }
  const datos = await respuesta.json() as RespuestaJev

  const puntuados = recorte.map((c, i) => {
    const noul = datos.answers?.[`candidato_${i}`]?.noul
    return { ...c, relevanciaJev: typeof noul === "number" ? Math.round(noul * 100) : 0 }
  }).sort((a, b) => (b.relevanciaJev || 0) - (a.relevanciaJev || 0))

  const relevantes = puntuados.filter(c => (c.relevanciaJev || 0) >= UMBRAL_RELEVANCIA * 100)
  const final = (relevantes.length >= 3 ? relevantes : puntuados).slice(0, limite)
  return { resultados: final, jev: true, candidatos: candidatos.length }
}
