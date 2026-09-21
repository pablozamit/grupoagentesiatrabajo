# Diseño con Codex (receta Vox)

**Receta de Vox** ([@Voxyz_ai](https://x.com/Voxel), 374k + 161k views) para que Codex genere páginas que no parezcan slop. Dos ideas: **separar el pase visual del pase de código** y un trío de skills.

## 1. Imagegen primero, código después

> *"Use imagegen to reimagine this page, then implement it."*

El modelo crea los visuales primero y Sol/Astra los implementan — así iteras sobre algo concreto antes de que el código lo esparza por todas partes. Muchas escenas 3D virales se construyen igual.

**Disputa honesta**: el post afirma que Codex trae **Images 2.5** integrado ("el strongest image model"); las respuestas lo niegan con código en mano (la tool builtin sigue en **gpt-image-2**: `codex-rs/ext/image-generation`). El workflow vale igual con gpt-image-2 — pero cita el modelo correcto.

## 2. El trío de skills

- **Impeccable** ([impeccable.style](https://impeccable.style), ver [[Impeccable]]): cuando la página está pero algo chirría — *too bland? use bolder. too cluttered? use distill. almost finished? use polish*. Convierte "make it look better" en cambios específicos
- **21st Design** (skill propia de Vox): obliga a Codex a buscar componentes e interacciones en [21st.dev](https://21st.dev) **antes** de construir. Consejo: empaqueta tu propia librería de referencia en una skill; enfoca 1–2 secciones que cargan la página (hero, pricing, showcase) y adapta a tu marca
- **UX Audit**: el screenshot bonito no basta — Codex abre el navegador y **usa la página**: clickea, rellena forms, cambia a móvil, completa el journey. Encuentra botones muertos, errores confusos y pasos ambiguos, con repro steps y fixes

## 3. La línea comodín

Si no quieres montar skills, termina tu tarea con:

> *"Make the best decision to improve UX, DX, and AX—without breaking existing functionality."*

UX (usuario) + DX (developer) + AX (**agent experience**: que el próximo agente entienda el trabajo). Pesa las tres sin romper nada.

## Relacionado

- Las skills: [[Impeccable]], [[21st.dev]], [[UI Skills]]
- Metodologías: [[Workflow de diseño con IA (Breeje Anadkat)]], [[AI Critic Loop]] (pasada visual antes de iterar)
- Frameworks anti-slop: [[Taste-Skill]]

# #diseno #vibecoding #skills