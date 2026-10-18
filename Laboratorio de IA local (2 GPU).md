# Laboratorio de IA local (2 GPU)

Setup de [@leopardracer](https://x.com/leopardracer/status/2055341758523883631) para tener un laboratorio de IA privado en un escritorio y usar los modelos locales como infraestructura para agentes, sin medidores de API.

## Hardware

- GPU 0: RTX 4080 SUPER (16 GB) y GPU 1: RTX 5060 Ti (16 GB) = 32 GB de VRAM combinada.
- CPU Ryzen 9 9900X (12C/24T), 64 GB DDR5, CachyOS (Arch) con Hyprland/Wayland.
- Con 32 GB se mueven modelos de clase 30B con cuantización. El autor avisa de que no es un requisito: una sola tarjeta de 24 GB (por ejemplo una 3090 de segunda mano) es más simple para mucha gente.

## Modelos

Su modelo diario es Qwen3.6-27B denso; guarda Qwen3.6-35B-A3B como experimento y Gemma 4 26B para comparar. Cita cifras del informe técnico de Qwen (SWE-bench Verified 77,2 %, Terminal-Bench 2.0 59,3 % para el 27B) y recuerda que un modelo frontier como Claude Opus 4.7 sigue por delante. Son números aportados por el autor.

## Stack

- [[llama.cpp]]: ejecuta el modelo (CUDA, GGUF, cuantización, KV cache, Flash Attention).
- **llama-swap**: delante de llama.cpp, expone endpoints compatibles con OpenAI y cambia de modelo en caliente con TTL.
- Los agentes y herramientas locales apuntan a `localhost` en vez de a una API alojada (por ejemplo un agente "Scout" que puntúa Hacker News, Reddit, GitHub Trending, Hugging Face y RSS y deja borradores).

## Ajustes que importan

- `CUDA_VISIBLE_DEVICES=0,1` para repartir el modelo entre las dos tarjetas.
- `-ngl 99` para descargar capas a GPU.
- `--cache-type-k q8_0 --cache-type-v q4_0` para cuantizar el KV cache y hacer viable un contexto de 131K.
- `--flash-attn on` y `--chat-template-kwargs '{"enable_thinking":true}'`.

## Lo que da y lo que no

El beneficio real no es batir a la API en calidad, sino poder experimentar sin contador (reintentos, prompts malos, contexto largo con notas propias) y la privacidad: los prompts no salen de la máquina. No sustituye a un modelo frontier para razonamiento duro, no hace búsqueda web sin herramientas, no genera imágenes y hace ruido de ventiladores.

Rutas de arranque del autor: 12-16 GB para modelos de 7B a 14B; 24 GB cómodo para 27B-35B (dos tarjetas de 16 GB repartiendo el modelo); 64 GB de RAM del sistema para contexto largo.

## Relacionado

- [[llama.cpp]], [[Ollama]], [[LM Studio]], [[Ecosistema de modelos]]
- Contexto: [[Ahmad Osman (@TheAhmadOsman)]]

# #modelos #opensource #agente #contenido
