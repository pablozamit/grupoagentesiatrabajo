# MLC Chat

Aplicación gratuita para Android creada por el equipo de **Apache TVM** que convierte cualquier móvil en un **servidor de modelos de IA local**, compatible con la API de OpenAI y con capacidad de visión (reconocer imágenes). 18K estrellas en GitHub. Disponible en Google Play.

## ¿Qué problema resuelve?

Usar modelos de IA como GPT-4o o Claude para analizar imágenes cuesta dinero por cada foto que subes (unos $0.02 por imagen en OpenAI Vision API, y se acumula). Además, tus imágenes se envían a servidores externos.

MLC Chat te permite:
- Tener un modelo de IA **funcionando completamente en tu móvil**
- **Sin conexión a internet** (tras descargar el modelo)
- **Sin pagar por uso**
- **Sin enviar tus datos a ningún servidor**
- Y además funciona como servidor para que otros programas usen ese modelo

## ¿Qué potencia tiene?

Probado en un **Pixel 6** (un móvil de hace unos años):

- **Qwen3 1.7B** (modelo pequeño): 40 tokens por segundo
- **Llama-3.2-Vision** (con capacidad de ver imágenes): consulta en 3-5 segundos
- **4 horas de uso continuo**: consume el 35% de la batería
- **100% offline** después de descargar el modelo

Y todo con un consumo de **5-10 vatios**, frente a los 300W+ que gasta un ordenador con una Nvidia 4090.

## Cómo se usa

1. Abre Google Play y busca **MLC Chat** e instálalo
2. Dentro de la app, elige un modelo (elige Qwen2-VL si quieres visión)
3. Ve a **Ajustes → Activar servidor REST**
4. La app te dará una dirección IP tipo `http://192.168.1.XX:8080`
5. Desde cualquier programa que uses (Claude Code, cualquier cliente OpenAI), apunta a esa dirección y ya tienes un modelo de IA local

## Para qué te puede servir

- **Tener un asistente de IA siempre contigo** sin pagar suscripciones
- **Analizar fotos y documentos** sin subirlos a la nube (privacidad total)
- **Usar tu móvil como servidor de IA** para tus propios programas o agentes
- **Aprender y experimentar** con modelos de visión sin gastar dinero en APIs

## Enlaces

- Google Play: busca "MLC Chat"
- GitHub: [apache/tvm](https://github.com/apache/tvm) (el proyecto Apache TVM)

Relacionado: [[Ollama]], [[Open WebUI]], [[Modelos]], [[IA]]

# #ia #modelos #privacidad #opensource #android
