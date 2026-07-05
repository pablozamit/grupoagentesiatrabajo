# Proyecto: Enciclopedia de Agentes IA (Obsidian + Quartz + Vercel)

## Rama única

Todo el proyecto vive en la rama **`main`**:
- `content/` — archivos `.md` de la vault de Obsidian
- Raíz — proyecto Quartz (`package.json`, `quartz.config.ts`, etc.)

## Despliegue

Vercel construye desde `main`. El build ejecuta `npx quartz build --directory .`.

## Flujo de trabajo

1. Editas los archivos `.md` en la raíz del repo (tu vault de Obsidian como siempre)
2. `git add -A .`
3. `git commit -m "docs: mensaje"`
4. `git push origin main`
5. Vercel despliega automáticamente

## Reglas de la vault

- Todo en español (incluso bloques de código y tablas)
- No citar personas como fuentes; solo estudios científicos
- Tags al final de cada nota: mínimo 2-3 de diferentes categorías
- No tocar `.obsidian/` ni `.opencode/` (excepto este AGENTS.md)
- No tocar `Guía de Tags.md` salvo para arreglar errores de idioma al encontrarlos
- Commits en Conventional Commits: `docs: mensaje`

## Tags documentados en Guía de Tags.md

- Por tipo: #contenido, #vibecoding, #modelos, #basededatos, #proyecto
- Por dominio: #juegos, #3d, #diseno, #video
- Por funcionalidad: #agente, #hosting, #ciencia, #investigacion, #oportunidades
- Otros en uso (no listados en la guía): #web, #ia, #recursos
