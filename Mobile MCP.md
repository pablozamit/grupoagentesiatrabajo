# Mobile MCP

Servidor MCP de [MobileNext](https://github.com/mobile-next/mobile-mcp) para que un agente controle simuladores/emuladores iOS/Android y dispositivos reales conectados. Licencia Apache2.0, según README verificado 14-oct-2026.

## Cómo funciona

Usa árbol de accesibilidad cuando está disponible; capturas y coordenadas como alternativa. Expone acciones como abrir apps, leer elementos, tocar, deslizar, escribir y capturar pantalla. Necesita herramientas/plataforma compatibles y dispositivo preparado; no basta instalar el MCP para tener un móvil en nube. Los clientes con MCP incluyen Claude Code, Codex/Gemini y otros listados en README.

El clip de 59s de [midudev](https://x.com/midudev/status/2104210723408597366), revisado con imagen y audio, muestra Claude usando simulador con app WorldTour: detecta cocina incorrecta de Londres, una errata de New York e imagen Dubái/Golden Gate. Es una demostración de reproducción y propuesta de corrección, no un benchmark de QA ni prueba de que cualquier issue se cierre bien.

## Permisos y límites

El acceso puede controlar todo el dispositivo. Usar simulador o dispositivo dedicado sin cuentas privadas y acotar apps/acciones; una captura puede revelar datos. No tratar árbol accesible o clic confirmado como prueba de resultado: revisar pantalla, estado y tests tras cada flujo. Menús ocultos, cambios de UI y permisos pueden romper automatizaciones.

El proyecto distingue servidor local de servicios de nube MobileNext; no se verificó un «free tier de dispositivos reales» comercial. El uso local de código abierto y una cuota gratuita de nube no son lo mismo. Comparar con ADB/XCUITest cuando lo importante sea repetibilidad/CI, no asumir que un agente sustituye tests deterministas.

## Recursos

- [Repositorio y requisitos](https://github.com/mobile-next/mobile-mcp)
- [Difusión y vídeo](https://x.com/midudev/status/2104210723408597366), no fuente de precio

Ver también: [[MCP Server para desarrollo autónomo]], [[Stagehand]], [[Vibecoding]].

#opensource #agente #productividad
