# Proyecto: Enciclopedia de Agentes IA (Obsidian + Quartz + Vercel)

## Ramas

- **`master`**: Contenido de la vault de Obsidian (archivos `.md` sueltos en la raíz)
- **`main`**: Proyecto Quartz completo (`package.json`, `quartz.config.ts`, etc.) con el contenido en `content/`

## Despliegue

Vercel construye desde la rama **`main`**. El build ejecuta `npx quartz build` sobre el directorio `content/`.

## Flujo de trabajo

Cada vez que se añada o modifique contenido en `master`:

1. `git fetch origin main`
2. `git worktree add -b sync-content <ruta-temp> origin/main`
3. Copiar todos los `.md` de la vault a `<ruta-temp>/content/`
4. Copiar `.opencode/` a `<ruta-temp>/content/.opencode/`
5. `git -C <ruta-temp> add -A content/`
6. `git -C <ruta-temp> commit -m "sincronizar contenido desde master"`
7. `git -C <ruta-temp> push origin sync-content:main`
8. `git worktree remove --force <ruta-temp>`

### Alternativa (solo si hay pocos cambios)

`git checkout main`, copiar los archivos manualmente a `content/`, commit y push, volver a `master`.

## Reglas de la vault

- Todo en español (incluso bloques de código y tablas)
- No citar personas como fuentes; solo estudios científicos
- Tags al final de cada nota: mínimo 2-3 de diferentes categorías
- No tocar `.obsidian/` ni `.opencode/` (excepto este AGENTS.md)
- No tocar `Guía de Tags.md` salvo para arreglar errores de idioma al encontrarlos
- Commits en Conventional Commits: `docs: mensaje`
- Push siempre: `git push origin master`

## Tags documentados en Guía de Tags.md

- Por tipo: #contenido, #vibecoding, #modelos, #basededatos, #proyecto
- Por dominio: #juegos, #3d, #diseno, #video
- Por funcionalidad: #agente, #hosting, #ciencia, #investigacion, #oportunidades
- Otros en uso (no listados en la guía): #web, #ia, #recursos
