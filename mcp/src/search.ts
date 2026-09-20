export const DEFAULT_INDEX_URL = "https://grupoagentesiatrabajo.vercel.app/static/contentIndex.json"
export const DEFAULT_SITE_URL = "https://grupoagentesiatrabajo.vercel.app"

export type QuartzEntry = {
  slug: string
  filePath?: string
  title?: string
  content?: string
  tags?: string[]
  links?: string[]
  backlinks?: string[]
  [key: string]: unknown
}

export type SearchResult = {
  slug: string
  title: string
  url: string
  tags: string[]
  score: number
  snippet: string
}

const normalize = (value: string) =>
  value.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLocaleLowerCase("es").replace(/[^a-z0-9]+/g, " ").trim()

const STOP_WORDS = new Set(["a", "al", "de", "del", "el", "en", "la", "las", "los", "para", "por", "que", "una", "un", "y"])
const words = (value: string) => normalize(value).split(/\s+/).filter(word => word && !STOP_WORDS.has(word))

function distance(a: string, b: string): number {
  const row = Array.from({ length: b.length + 1 }, (_, index) => index)
  for (let i = 1; i <= a.length; i++) {
    let previous = row[0]
    row[0] = i
    for (let j = 1; j <= b.length; j++) {
      const old = row[j]
      row[j] = Math.min(row[j] + 1, row[j - 1] + 1, previous + (a[i - 1] === b[j - 1] ? 0 : 1))
      previous = old
    }
  }
  return row[b.length]
}

function fuzzyMatch(query: string, candidate: string): number {
  if (candidate === query) return 1
  if (candidate.startsWith(query) || query.startsWith(candidate)) return 0.9
  if (query.length >= 5 && candidate.length >= 5 && query.slice(0, 5) === candidate.slice(0, 5)) return 0.84
  if (query.length < 5 || candidate.length < 5) return 0
  const d = distance(query, candidate)
  const similarity = 1 - d / Math.max(query.length, candidate.length)
  return similarity >= 0.72 ? similarity : 0
}

function makeSnippet(content: string, terms: string[], max = 260): string {
  const plain = content.replace(/\s+/g, " ").trim()
  if (!plain) return ""
  const normalized = normalize(plain)
  let start = 0
  for (const term of terms) {
    const hit = normalized.indexOf(term)
    if (hit >= 0) { start = Math.max(0, hit - 70); break }
  }
  return `${start > 0 ? "…" : ""}${plain.slice(start, start + max)}${start + max < plain.length ? "…" : ""}`
}

export class EncyclopediaIndex {
  private entries: QuartzEntry[] = []
  private loadedAt?: Date

  constructor(private readonly indexUrl = DEFAULT_INDEX_URL, private readonly siteUrl = DEFAULT_SITE_URL) {}

  async refresh(): Promise<number> {
    const response = await fetch(this.indexUrl, { headers: { accept: "application/json" } })
    if (!response.ok) throw new Error(`No se pudo cargar el índice (${response.status})`)
    const payload = await response.json() as QuartzEntry[] | Record<string, QuartzEntry>
    this.entries = Array.isArray(payload) ? payload : Object.values(payload)
    this.loadedAt = new Date()
    return this.entries.length
  }

  get size() { return this.entries.length }
  get lastRefresh() { return this.loadedAt?.toISOString() }

  async ensureLoaded() { if (!this.entries.length) await this.refresh() }

  search(query: string, options: { tag?: string, limit?: number } = {}): SearchResult[] {
    const terms = words(query)
    const requestedTag = options.tag ? normalize(options.tag) : undefined
    const limit = Math.max(1, Math.min(options.limit ?? 10, 50))
    if (!terms.length) return []

    return this.entries.flatMap(entry => {
      const title = entry.title || entry.slug
      const tags = Array.isArray(entry.tags) ? entry.tags.map(String) : []
      if (requestedTag && !tags.some(tag => normalize(tag) === requestedTag)) return []
      const titleWords = words(title)
      const tagWords = words(tags.join(" "))
      const content = typeof entry.content === "string" ? entry.content : ""
      const contentWords = words(content)
      let score = 0
      let matchedTerms = 0
      for (const term of terms) {
        const titleMatch = Math.max(0, ...titleWords.map(word => fuzzyMatch(term, word)))
        const tagMatch = Math.max(0, ...tagWords.map(word => fuzzyMatch(term, word)))
        const contentMatch = Math.max(0, ...contentWords.map(word => fuzzyMatch(term, word)))
        const best = Math.max(titleMatch * 10, tagMatch * 7, contentMatch * 2)
        if (best > 0) { matchedTerms++; score += best }
      }
      const minimumMatches = terms.length >= 3 ? 2 : 1
      if (!score || matchedTerms < minimumMatches) return []
      const coverage = matchedTerms / terms.length
      score += coverage * coverage * 24
      const slug = entry.slug
      return [{ slug, title, url: `${this.siteUrl}/${slug}`, tags, score: Number(score.toFixed(3)), snippet: makeSnippet(content, terms) }]
    }).sort((a, b) => b.score - a.score || a.title.localeCompare(b.title, "es")).slice(0, limit)
  }

  get(slug: string): (QuartzEntry & { url: string }) | undefined {
    const key = normalize(slug)
    const exact = this.entries.find(entry => normalize(entry.slug) === key)
    return exact ? { ...exact, url: `${this.siteUrl}/${exact.slug}` } : undefined
  }

  tags(): { tag: string, count: number }[] {
    const counts = new Map<string, number>()
    for (const entry of this.entries) for (const tag of Array.isArray(entry.tags) ? entry.tags : []) counts.set(String(tag), (counts.get(String(tag)) || 0) + 1)
    return [...counts].map(([tag, count]) => ({ tag, count })).sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag, "es"))
  }

  list(options: { tag?: string, offset?: number, limit?: number } = {}) {
    const tag = options.tag ? normalize(options.tag) : undefined
    const offset = Math.max(0, options.offset ?? 0)
    const limit = Math.max(1, Math.min(options.limit ?? 50, 100))
    return this.entries.filter(entry => !tag || (entry.tags || []).some(item => normalize(String(item)) === tag)).slice(offset, offset + limit).map(entry => ({ slug: entry.slug, title: entry.title || entry.slug, tags: entry.tags || [], url: `${this.siteUrl}/${entry.slug}` }))
  }
}
