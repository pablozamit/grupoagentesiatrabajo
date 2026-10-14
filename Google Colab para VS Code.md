# Google Colab para VS Code

Extensión oficial de Google Colab para Visual Studio Code (lanzada noviembre 2025). Conecta VS Code directamente a los servidores de Google Colab para ejecutar código en la nube con GPU gratuita.

## Qué permite

- Usar notebooks (`.ipynb`) en VS Code con todos tus archivos locales, Git y extensiones
- Ejecutar el código en servidores de Google Colab (con GPU T4 gratuita incluida)
- La comodidad de VS Code + el poder de cómputo gratuito de Colab

## Para qué sirve

- Prototipar y entrenar modelos ML / IA sin GPU potente en tu PC
- Trabajar con proyectos locales grandes (Git, carpetas) sin subir todo a Colab web
- Evitar pagar alquiler de GPUs para proyectos pequeños o medianos
- Usar tu editor con autocompletado, debugging y terminal, pero con hardware en la nube

## Limitaciones

- GPU gratuita = **T4** (16 GB VRAM) — no sirve para modelos muy grandes
- Mismos límites de uso gratuito de Colab (tiempo de ejecución, colas, etc.)

## Cómo empezar

1. Instalar [VS Code](https://code.visualstudio.com/)
2. Ir a Extensiones → buscar **"Google Colab"** (la oficial de Google) → instalar
3. Abrir o crear un archivo `.ipynb`
4. Click en "Select Kernel" → **Colab → Auto Connect** (o New Colab Server)
5. Iniciar sesión con cuenta de Google
6. Seleccionar **GPU T4** (o CPU/TPU) como en Colab normal

Relacionado: [[Oracle Cloud Free Tier]], [[VPS]], [[TokenRouter]]


## GPU disponible no es GPU garantizada

La [FAQ de Colab](https://research.google.com/colaboratory/intl/en-GB/faq.html) dice que hardware, límites y disponibilidad cambian. La T4 del hilo no es una asignación garantizada a toda cuenta gratuita; corrige esa lectura de las secciones anteriores. Los planes de pago tampoco reservan una A100 de 80GB por promesa del post. Un notebook local no significa que los datos y ejecución permanezcan en el portátil: las celdas se ejecutan en el runtime remoto, y montar Drive es un paso aparte.

El [anuncio Google 22-sep-2026](https://developers.googleblog.com/colab-is-now-part-of-your-google-ai-plan/) incorpora ventajas Colab a suscripciones Google AI: prioridad en aceleradores/máquinas y, en Ultra, ejecución en segundo plano y acceso Premium GPU. Describe despliegue por semanas en países compatibles y acumulación con suscripción Colab. No se verificaron aquí el precio 25€/mes,200 créditos ni6 créditos/h del comentario; dependen de plan/país/fecha. No confundir unidades de cómputo Colab con otros créditos Google AI.

El vídeo citado de 30s muestra opciones GPU y una invitación a subir a Ultra; no demuestra entrenamiento Gemma 31B, 80GB efectivos o disponibilidad para Pro. Pesos bf16 ocupan sólo una parte de memoria: activaciones, caché y optimizador añaden coste. Los métodos fine-tuning del hilo no son prueba ejecutada.

La [extensión](https://github.com/googlecolab/colab-vscode) y [anuncio 13-nov-2025](https://developers.googleblog.com/google-colab-is-coming-to-vs-code/) confirman integración sobre Jupyter y publicación en Marketplace/OpenVSX. El vídeo de 28s muestra instalar extensión y elegir servidor Colab; no acredita una T4 permanente ni terminal/Git locales ejecutándose remotamente. Comprobar runtime y presupuesto antes de empezar; guardar salidas fuera de sesión efímera.

Ver también: [[VPS]], [[Oracle Cloud Free Tier]].

# #ia #investigacion #recursos
