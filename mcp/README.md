# MCP de la Enciclopedia de Agentes IA

Prototipo local por `stdio` que consulta el índice real publicado por Quartz.

```bash
cd mcp
npm install
npm test
npm run build
npm start
```

Por defecto usa:
- índice: `https://grupoagentesiatrabajo.vercel.app/static/contentIndex.json`
- web: `https://grupoagentesiatrabajo.vercel.app`

Se pueden cambiar con `ENCICLOPEDIA_INDEX_URL` y `ENCICLOPEDIA_SITE_URL`.

Esta rama todavía no publica un endpoint HTTP. El MCP remoto se añadirá con autenticación y límites antes de cualquier despliegue público.
