# 8 Prompts de Diseño para Agentes de IA

Guía de [Vox](https://x.com/Voxyz_ai) con 8 prompts copiables para dejar de decirle "los colores no cuadran" a tu agente y empezar a darle un sistema de diseño.

*Fuente: [Voxyz_ai](https://x.com/Voxyz_ai) — traducido y adaptado.*

## 1. Sistema de diseño (unificar UI dispersa en una librería de componentes)

```
Task: abstract the scattered UI components, style tokens, and repeated interactions in this project into one unified Design System, a reusable and maintainable component library. Use semantic tokens (bg-primary, text-foreground, etc.) so the whole system re-themes from one place.
```

## 2. Accesibilidad + multi-dispositivo

```
Task: make sure regular, low-vision, keyboard-only, and different-device users can all reliably complete the core actions. Start the app locally from the current commit, walk the core paths at desktop / tablet / phone sizes, and fix every barrier you find. Cover: focus indicators, color contrast (>4.5:1), touch targets (≥44px), screen-reader labels, and reduced-motion.
```

## 3. Darle un DESIGN.md primero

El concepto de **Google Stitch**: un archivo `DESIGN.md` en texto plano que define color, escala tipográfica, espaciado, radios, sombras y reglas de componentes. El agente lo lee antes de cada build y el estilo deja de derivar.

```
Create a DESIGN.md in the project root that defines: color palette (semantic tokens), type scale, spacing grid, border radius, shadow levels, and component rules. The agent must read this file before every UI build.
```

## 4. UX audit (que vea el estado actual primero)

```
Act as a senior UX designer auditing this app's core flows. Walk the real user path end to end. Find: weak information hierarchy, friction, missing feedback, error-prone steps, empty and error states that are missing or poor. For each issue, note the severity and suggest a fix.
```

## 5. Reconstruir una página con buen gusto

```
Act as a product designer and rebuild this page to feel like Linear / Stripe. Pin down the style first: a restrained palette, a clear type scale, enough whitespace, consistent radius and shadow. Then build. Only ship production-quality code. If you see an existing DESIGN.md, follow it.
```

## 6. Que cada interacción y estado estén correctos

```
Act as a senior frontend engineer and get every interaction and state right. Cover: loading skeletons, empty states, error states, hover / focus / disabled, plus transitions and feedback on the key actions. Run the app after each change.
```

## 7. Landing page que convierta

```
Act as a conversion-minded designer and build a landing page. Nail the one-line value prop and the single action you want from the visitor first. Then lay out: hero, social proof, feature sections, FAQ, CTA. Keep the design clean and focused on the conversion goal.
```

## 8. Formularios usables

```
Act as a senior frontend engineer and make this form usable. Cover: real-time validation, clear inline errors, sensible defaults, keyboard and autofill friendly, submitting and success / failure states, long forms split into steps.
```

## 9. Diseño web rompedor (CSS + WebGL + shaders)

```
Quiero que lleves al límite lo que es posible en diseño web con lo último en CSS, WebGL, shaders, etc a fecha de julio de 2026 y crees la experiencia informativa de una sola página más impresionante que puedas imaginar.
```

*Fuente: [k3](https://x.com/k3)*

## Clave

Como dice Vox: *"«los colores se ven mal» no le da nada sobre lo que actuar. Nombra la referencia exacta o la sensación que quieres y el mismo modelo entrega algo totalmente diferente. El agente no tiene gusto propio; tienes que aportarlo tú."*

La solución es darle un **sistema de diseño** antes de pedirle que construya. [[Compact Landing]], [[DesignEngineer.tools]] y [[UI Skills]] pueden ayudar.

# #diseno #vibecoding #contenido #web
