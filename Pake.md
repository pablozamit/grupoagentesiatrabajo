# Pake

**Pake** convierte cualquier página web en una aplicación de escritorio nativa usando **Rust + Tauri** en vez de Electron. El resultado: apps que pesan **~8-10 MB** en vez de 260-500 MB.

## Comparativa RAM

| App | Electron | Pake |
|---|---|---|
| Slack | 524 MB | **8 MB** |
| Discord | 265 MB | **9 MB** |
| ChatGPT | 260 MB | **9 MB** |

## Cómo funciona

En lugar de empaquetar una copia completa de Chromium (como hace Electron), Pake usa el **WebView nativo** del sistema operativo vía Tauri. Esto elimina los cientos de megabytes que cada app Electron duplica.

## Usar Pake

```bash
# Instalar
npm install -g @pake/cli

# Convertir cualquier web en app de escritorio
pake https://chatgpt.com
```

## Builds listos

Pake incluye builds pre-empaquetados para: Grok, ChatGPT, Gemini, Discord, YouTube, Twitter, y muchos más. Todos bajo 10 MB.

## Enlaces

- Repo: [github.com/tw93/Pake](https://github.com/tw93/Pake) — 51k ⭐
- Autor: [tw93](https://github.com/tw93)

# #productividad #web #proyecto