# xurl

[xurl](https://github.com/xdevplatform/xurl) es el CLI oficial para la API de X, con OAuth 1.0a/2.0, varias aplicaciones y cuentas y selección explícita de app por petición.

## Con Hermes

La [skill incluida en Hermes](https://github.com/NousResearch/hermes-agent/blob/main/skills/social-media/xurl/SKILL.md) traduce peticiones a operaciones del CLI: buscar, leer, publicar, gestionar listas/bookmarks o mensajes. El [artículo citado en el hilo](https://x.com/AntoineRSX/status/2056898486310957252) muestra el setup.

Son conexiones distintas: el proveedor LLM de Hermes no concede acceso a X. xurl requiere app de desarrollador y OAuth de la cuenta. Verificar permisos, acceso y costes vigentes de API antes de automatizar.

## Identidad y seguridad

Comprobar cuenta con `xurl whoami` y app seleccionada cuando haya varios perfiles. Los tokens viven en `~/.xurl/auth.yml`: no añadirlos a git, mostrarlos al modelo ni incluirlos en capturas. La skill exige configurar secretos fuera de la sesión del agente.

Redactar no autoriza publicar. Dar acceso a la API no define qué cuenta, destinatarios o campañas puede usar el agente. Evitar acciones de escritura hasta que sus límites estén acordados.

## Recursos

- [CLI y README](https://github.com/xdevplatform/xurl)
- [Skill oficial en Hermes](https://github.com/NousResearch/hermes-agent/blob/main/skills/social-media/xurl/SKILL.md)


## Guía oficial de X (X API + Hermes)

La cuenta oficial [@XDevelopers](https://x.com/XDevelopers/status/2056871280599847054) publicó una guía de puesta en marcha del tándem Hermes + xurl:

- Instalar Hermes (script de una línea) y pasar el asistente (`hermes setup`), eligiendo proveedor (p. ej. OAuth de xAI Grok con suscripción SuperGrok) y modelo.
- Instalar xurl aparte (script, Homebrew, npm o Go) y asegurarse de que está en el `PATH`.
- Crear una app de desarrollador en X con OAuth 2.0 y redirect URI `http://localhost:8080/callback`; registrar la app con `xurl auth oauth2 --app my-app`. Mantener la flag `--app` para que el token no se guarde en el perfil por defecto y las llamadas no fallen con 401.
- Verificar con `xurl whoami` y, dentro de Hermes, cargar la skill `/xurl` y pedir en lenguaje natural publicar, buscar, gestionar bookmarks, listas o timeline.

Es una guía del propio proveedor; conviene comprobar permisos y tiers vigentes de la API de X antes de automatizar escrituras.

## Relacionado

- [[Hermes Agent]], [[Kapso]], [[Postiz]]

#opensource #web #agente
