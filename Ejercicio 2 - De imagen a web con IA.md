# Ejercicio 2 — De imagen a web con IA

Convierte una imagen generada por ChatGPT en una web funcional usando **Taste-Skill (Image-to-Code)** + **Codex**. Basado en el tutorial de [Leon Lin](https://x.com/LexnLin).

## Objetivo

Generar imágenes sección por sección con **ChatGPT Images 2.0** usando el skill `imagegen-frontend-web`, extraer los assets y pasárselos a **Codex** para que reconstruya la web pixel-perfect.

## Paso a paso

### 1. Prepara el skill de generación de imágenes

Copia el contenido de [`imagegen-frontend-web/skill.md`](https://github.com/Leonxlnx/taste-skill/blob/main/skills/imagegen-frontend-web/SKILL.md) y pégalo en ChatGPT.

Prompt de ejemplo:

```
Based on this skill above, generate images for a website for an AI agency.
The design should include eight sections, with one image per section,
eight distinct images in total. The website should feel polished and clean
and rather minimalist with less info, but with striking image effects/visuals
and creative layouts. Use orange as the main color. All images should be horizontal.
```

**Tips:**
- Ejecuta el prompt en varios chats distintos para tener más resultados
- Usa **Thinking Mode** para mejor calidad
- ChatGPT Images 2.0 puede generar hasta 10 imágenes a la vez
- Refina una imagen a la vez si necesitas ajustar el estilo

### 2. Extrae los assets de las imágenes

Pídele a ChatGPT que extraiga las imágenes individuales de las composiciones generadas:

```
Extract the images on the right, generate them total should be 7
extracted generated images, please don't change them, they should
look exactly the same.
```

### 3. Quita los fondos (si es necesario)

ChatGPT ya no genera imágenes con fondo transparente. Usa una herramienta gratuita:

- [Adobe Express Remove Background](https://express.adobe.com/home/tools/remove-background)
- Qualquier otra similar

### 4. Construye la web con Codex

Usa **Codex** (o cualquier agente de código: Claude Code, Cursor, etc.).

Trabaja **una sección a la vez**. Prompt inicial:

```
Let's build a website. I will provide the images and you just clone
the rest of the website. So do NOT generate or build the asset in this
image. Focus on the components and details.

Here is the hero section. Copy it. After that give me the dir of the
folder where I need to put my images in. Use React + Next.js.
Start local dev server afterwards.
```

Codex te dirá dónde poner las imágenes (ej. `public/`). Coloca los assets extraídos ahí, refresca la página y repite para cada sección.

### 5. Refina

Si hay problemas de alineación o solapamiento:
- Haz captura de pantalla
- Pásasela a Codex con el error
- Deja que lo corrija

**"Nothing crazy comes after one prompt. Good things come to those who wait."**

### 6. Añade animaciones y detalles

```
Add animations when scrolling into a new section.
Should feel smooth and clean.
```

También: hover animations, responsive, detalles finos.

## Resultado esperado

Una web completa, pixel-perfect respecto a las imágenes generadas, con animaciones al scroll, responsive y código limpio en React + Next.js.

Ejemplo real: [github.com/Leonxlnx/tutorialnexora](https://github.com/Leonxlnx/tutorialnexora)

## Herramientas necesarias

- [[Taste-Skill]] (skill `imagegen-frontend-web` + `design-taste-frontend`)
- [[Codex]] (o Claude Code, Cursor, Kilo Code)
- ChatGPT con Images 2.0
- Adobe Express (opcional, para quitar fondos)

# #contenido #diseno #vibecoding #proyecto
