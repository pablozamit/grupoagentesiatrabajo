# AG-UI + CopilotKit (Hermes en cualquier app)

**AG-UI** es un **protocolo abierto para conectar agentes de IA a las apps que la gente usa de verdad**, creado por el equipo de **CopilotKit** (MIT, "The Frontend Stack for Agents & Generative UI"). Y su demo estrella: un **adapter AG-UI dentro de Hermes** (PR de NousResearch) que expone el agente Hermes sobre AG-UI, de modo que **un agente terminal-capable vive dentro de cualquier aplicación**: React, React Native, Next.js, Angular, Slack, MS Teams.

## Qué te da tener Hermes embebido vía AG-UI

- **Streaming en vivo** de respuestas y razonamiento, token a token — cancelable y reanudable
- **Generative UI**: el agente puede poner **componentes React tipados** (un form, un chart, una calculadora) directamente en la conversación — render de interfaz real, no solo texto
- **Actúa en la página**: llama tools que corren en el navegador y lee/escribe el **shared state** de la app — opera sobre lo que el usuario está mirando
- **Human-in-the-loop**: pausa para una decisión o aprobación, espera, y continúa. La aprobación de comandos peligrosos de Hermes aparece como un **interrupt nativo** que el usuario resuelve en la UI
- **Multimodal**: archivos, imágenes y audio, no solo texto

## El adapter de Hermes (PR #65845 de NousResearch/hermes-agent)

Un servidor HTTP/SSE (`agui_adapter/`, FastAPI + uvicorn) que expone el AIAgent de Hermes sobre AG-UI. Postura de seguridad pensada para un agente terminal-capable:

```bash
pip install -e ".[agui]"
hermes agui    # binds 127.0.0.1:8000 — zero-config, sin token

# Para exponerlo en red hace falta token (un bind abierto a un agente terminal = RCE)
export HERMES_AGUI_SESSION_TOKEN="$(openssl rand -hex 24)"
hermes agui --host 0.0.0.0 --port 8000
```

- **Fail-closed auth**: loopback no necesita token (el OS es la frontera de confianza); bind a interfaz de red **se niega a arrancar sin token real** + Host-guard anti DNS-rebind + check JSON-only
- **Aprobación de comandos peligrosos**: cuando el agente va a correr un comando shell arriesgado, la run **se pausa como interrupt AG-UI** y espera approve/deny en la UI. Deniega por defecto si expira o falla
- **Audit log redactado** de aprobaciones (ninguna credencial puede colarse en logs)
- **Rechazo de colisión de nombres de tools** (que un tool de frontend haga shadow a un tool del servidor como `terminal` o `write_file`)

## La discusión de fondo (los comentarios que valen oro)

- **El UI es la parte fácil**: "lo que muerde es acotar qué puede tocar el agente por usuario, y si tus datos ya están detrás de row-level security, esa frontera existe. ¿Corre Hermes sus tool calls como el usuario logueado o como la app?"
- **Los permisos por página deciden si sobreviven en producción** (Sebastian Buzdugan)
- **El boundary seguro es tools explícitos, permisos scoped y audit trail por cada acción de página** (Kyssta)
- **Credenciales scoped, verificación y rollback son la integración real** (ActuallyOpenAI)
- La lectura optimista: **mostrar el razonamiento en la UI cambia la confianza** — cuando la app enseña los pasos, la gente deja de preguntarse si es magia y empieza a comprobar si la lógica se sostiene (M.Camisani-Calzolari)
- "Puedo hacer overlay en Steam o Xbox?" — el límite de la demo 😄

## Por qué importa

Es el movimiento de **"IA como parte del producto, no como otra ventana"** (Ahmed Mubarak). Conecta con el pipeline de [[Hermes Agent]] y con la capa de generación de UI de [[CopilotKit]]. El flujo: el agente no solo responde — **interactúa con la app que el usuario tiene delante**.

## Recursos

- CopilotKit: [github.com/CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit)
- AG-UI protocol: web de CopilotKit
- PR del adapter Hermes AG-UI: PR #65845 en [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)
- Hilo: [@CopilotKit en X](https://x.com/CopilotKit), [@svpino en X](https://x.com/svpino)

## Relacionado

- El agente que se embedde: [[Hermes Agent]], [[Ajustes Avanzados de Hermes Agent]]
- Frontend de agentes: [[CopilotKit]]
- Arquitectura de agentes: [[HarnessRouter + UHP]], [[Despliegue de IA en empresa (3 etapas)]]
- El debate de seguridad: [[Camofox Browser]], [[Harness]]

# #agente #web #contenido #skills