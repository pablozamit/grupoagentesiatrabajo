# T3 Code

**T3 Code** ([t3.codes](https://t3.codes/)) es un "control plane" de código abierto para agentes de programación: una única superficie desde la que orquestar [[Claude Code]], Codex, Cursor, Grok, OpenCode, Google Antigravity y otros agentes que ya tengas configurados en tu máquina, usando tus propias suscripciones. Lo desarrolla Ping Labs (Theo Browne, Mark y Julius Marminge) y se distribuye con licencia MIT.

## Qué hace

- Ejecuta y controla los agentes de código instalados en tu ordenador desde una app de escritorio (Electron, para macOS, Windows y Linux), una app web y apps móviles (iOS y Android).
- Permite manejar varios agentes y subagentes a la vez en un mismo hilo, con terminal integrada.
- Puede conectarse a máquinas remotas para controlar agentes que corren en otro equipo.
- No vende nada: funciona con las suscripciones que ya tengas de cada agente ("bring your own subscription").

## Comunidad

El repositorio ([github.com/pingdotgg/t3code](https://github.com/pingdotgg/t3code)) ronda las 53.000 estrellas y 10.000 forks (noviembre 2026); se creó en febrero de 2026 y está en desarrollo muy activo. Su web afirma que lo usan "más de 500.000 devs", cifra propia no verificable.

## Enlaces

- **Web:** [t3.codes](https://t3.codes/)
- **GitHub:** [github.com/pingdotgg/t3code](https://github.com/pingdotgg/t3code)
- **App web:** [latest.app.t3.codes](https://latest.app.t3.codes/)

Relacionado: [[Claude Code]]


## Llamadas de voz con ADE Call

[[ADE Call]] añade una interfaz de llamada desde móvil o navegador para consultar agentes y transmitirles instrucciones. Se aloja en la máquina del entorno de agentes y usa OpenAI Realtime o Gemini Live experimental, con consumo de API. Para móvil requiere HTTPS; el proyecto documenta Tailscale Serve, pero indica que esa ruta aún no se ha validado de extremo a extremo. Solo Linux está probado.

Cada navegador emparejado tiene acceso completo a los proyectos del propietario: no hay roles multiusuario. En Orca no lee ni continúa chats estructurados ni anuncia la finalización de agentes; en T3 Code tiene acceso a hilos y seguimiento durante la llamada. Colgar no cancela trabajos ya enviados.

#tipo/herramienta #tema/agentes #tema/programacion/desarrollo-con-ia
