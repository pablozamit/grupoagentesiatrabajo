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

## REGLA IMPRESCINDIBLE: commit + push tras CADA tanda de cambios

**Cada vez que yo termine de editar archivos** (añadir notas, actualizar tags, corregir cross-links, etc.), **debo commitear y pushear inmediatamente al terminar**, sin esperar a que el usuario lo pida. No se acumulan cambios sin publicar.

- **Al terminar cualquier tanda de ediciones**: `git add -A .` → `git commit -m "docs: <resumen>"` → `git push origin main`
- **En una sesión larga**: puedo agrupar 2-3 cambios relacionados en un commit, pero nunca cerrar la sesión dejando trabajo sin commitear
- **Verificar siempre**: antes de terminar, `git status` debe mostrar el working tree limpio (o el push hecho)
- **Notas privadas**: `git check-ignore` para confirmar que las notas marcadas como privadas NO se suben
- Si un commit/push falla, resolverlo en el momento, no dejarlo para después

Esto es una orden permanente del usuario, no una sugerencia: la web (Vercel) solo se actualiza cuando hay push, así que cada edición debe llegar a `main`.

## Reglas de la vault

- Todo en español (incluso bloques de código y tablas)
- No citar personas como fuentes; solo estudios científicos
- Tags al final de cada nota: mínimo 2-3 de diferentes categorías
- No tocar `.obsidian/` ni `.opencode/` (excepto este AGENTS.md)
- Commits en Conventional Commits: `docs: mensaje`

## Protocolo al añadir un nuevo recurso

Cada vez que el usuario comparta un nuevo enlace, herramienta o concepto, debo seguir este flujo completo (no saltarme pasos):

1. **Leer Guía de Tags.md** para conocer el sistema de tags vigente
2. **Leer página(s) de tag relevantes** (`#diseno.md`, `#modelos.md`, etc.) para ver qué contenido relacionado existe
3. **Determinar 2-3 tags** de diferentes categorías (tipo/dominio/funcionalidad) según el sistema documentado
4. **Crear la nota** con contenido en español, estructura clara y tags al final
5. **Si el recurso necesita un tag nuevo** (ej. `#audio`):
   - Crear la página de tag (`#audio.md`) con el listado de entradas
   - Añadir el tag a **Guía de Tags.md** en su categoría correspondiente
6. **Añadir cross-link** en cada página de tag relevante (`#diseno.md`, `#web.md`, etc.)
7. **Enriquecer notas relacionadas** existentes que se beneficien del nuevo recurso (ej. AirLLM en Ecosistema de modelos.md)
8. **Verificar que los tags sean correctos** según el sistema, no inventados

## Tags documentados en Guía de Tags.md

- Por tipo: #contenido, #vibecoding, #skills, #modelos, #basededatos, #proyecto
- Por dominio: #juegos, #3d, #diseno, #video, #audio
- Por funcionalidad: #agente, #hosting, #ciencia, #investigacion, #oportunidades, #productividad
- Otros en uso: #web, #gamificacion
