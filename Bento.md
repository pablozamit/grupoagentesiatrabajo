# Bento

[Bento](https://bento.page) (repo: `nyblnet/bento`) es la **suite de oficina que cabe en un archivo**: una **alternativa a PowerPoint que vive en un solo archivo HTML** (~560 KB) que lleva dentro su propio viewer, presenter y editor. MIT, 4.8k ⭐, TypeScript.

## La idea

Los documentos de oficina solían ser cosas que tenías. Ahora son cosas que alquilas — encerradas en la nube de alguien, detrás de un login, legibles solo mientras una empresa mantiene sus servidores. Bento toma el otro camino:

- **Un archivo, para siempre**: deck, fuentes, imágenes, charts, animaciones y el editor completo viajan juntos. Una copia de 2026 se abrirá en 2036
- **View-source honest**: tus datos están en un bloque JSON plano y legible al principio del archivo. Sin formatos binarios, sin lock-in
- **Se guarda a sí mismo**: el archivo reescribe su propio bloque de datos al guardar (File System Access API, con fallback de descarga). Sin app que instalar
- **Local-first de forma demostrable**: en modo offline nada sale de tu máquina

## Qué incluye

| Feature | Detalle |
|---|---|
| **Morph presenting** | Elementos con mismo `id` animan entre slides (posición, tamaño, color, gradientes) |
| **Colaboración en vivo** | E2EE (AES-GCM) con las llaves **en el archivo**, nunca en el servidor. CRDT propio con merge de texto carácter a carácter |
| **Blind relay** | El relay de sync opcional solo guarda ciphertext y no aprende nada (un solo archivo) |
| **Charts built-in** | Bar/line/pie/scatter con motor propio sin dependencias, tooltips, zoom, morphing bar→pie |
| **Diseñado para IA** | El documento es **JSON plano**: los agentes editan `.bento.html` in place, y los chatbots hacen round-trip del JSON (`window.bento.loadDoc`) |
| **Signed self-updates** | Releases firmadas ECDSA; la update escribe un archivo nuevo, el viejo queda como rollback |

## Uso con IA (el punto clave)

Como el documento es JSON plano en un bloque legible, **cualquier asistente que pueda leer/escribir un archivo puede editar tu deck** — sin plugin ni API:

1. **File harnesses** editan el bloque `#bento-doc` JSON en place: Claude Code, Cursor, Aider o cualquier agente con acceso a archivos. Hay skill empaquetada para Claude Code (`/plugin marketplace add nyblnet/bento`)
2. **Chat round-trip**: copias el JSON (Save → Copy document JSON), el asistente lo reescribe, lo pegas de vuelta
3. Funciona **offline con modelos open-weight** (Ollama, llama.cpp, LM Studio)

Es "el vídeo es código" pero para presentaciones: el documento es un programa que un agente puede editar, regenerar y medir.

## Quick start

```bash
# Probar en 10s
open bento.page/slides

# Descargar la app (single file)
# Bento_Slides.bento.html de GitHub Releases o bento.page

# Build desde fuente
cd slides
npm install
npm run dev            # dev server
npm run build:single   # → dist-single/Bento_Slides.bento.html
```

## Roadmap

`bento/slides` es la primera app (alternativa a PowerPoint). Siguen `bento/spaces` (notas), `bento/dash` (sheets y tablas) y `bento/vault`, cada uno como `.bento.html` auto-contenido.

## Recursos

- Repositorio: [github.com/nyblnet/bento](https://github.com/nyblnet/bento)
- Web: [bento.page](https://bento.page)
- Guía de agentes: [bento.page/agents.md](https://bento.page/agents.md)
- Format spec: [docs/format.md](https://github.com/nyblnet/bento/blob/main/docs/format.md)

## Relacionado

- Presentaciones que son código: [[Gamma]], [[El vídeo es código]]
- Documentos editables por agentes: [[Logseq]]
- Más herramientas de productividad: [[NOSignups.net]], [[free-for.dev]]

# #productividad #contenido #opensource #agente