import assert from "node:assert/strict"
import { test, before } from "node:test"
import { EncyclopediaIndex } from "../src/search.js"

const index = new EncyclopediaIndex()
before(async () => { await index.refresh() })

test("carga el índice real publicado", () => { assert.ok(index.size >= 290, `solo cargó ${index.size} entradas`) })

test("consulta natural de diseño web devuelve herramientas relevantes", () => {
  const results = index.search("herramientas para diseñar una página web", { limit: 10 })
  assert.ok(results.length >= 5)
  assert.ok(results.slice(0, 10).some(result => /Landingfolio|21st|UI Skills|diseño|imagen-a-web/i.test(`${result.title} ${result.slug}`)), JSON.stringify(results, null, 2))
})

test("normaliza tildes", () => {
  const withAccents = index.search("diseño página web", { limit: 10 }).map(result => result.slug)
  const withoutAccents = index.search("diseno pagina web", { limit: 10 }).map(result => result.slug)
  assert.deepEqual(withAccents.slice(0, 5), withoutAccents.slice(0, 5))
})

test("tolera erratas", () => {
  const results = index.search("herramyentas para disenar una pajina weeb", { limit: 10 })
  assert.ok(results.length >= 3, JSON.stringify(results, null, 2))
  assert.ok(results.slice(0, 10).some(result => /Landingfolio|21st|UI Skills|diseño|imagen-a-web/i.test(`${result.title} ${result.slug}`)), JSON.stringify(results, null, 2))
})

test("recupera por slug una entrada devuelta", () => {
  const first = index.search("MCP Blender", { limit: 1 })[0]
  assert.ok(first)
  assert.equal(index.get(first.slug)?.slug, first.slug)
})
