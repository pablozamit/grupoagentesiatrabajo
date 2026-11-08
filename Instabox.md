# Instabox

**Instabox** ([instabox.sh](https://instabox.sh)) es un servicio de **"ordenadores en la nube" para agentes de IA**: en vez de correr el agente en tu portátil, Mac mini o VPS, le da su propia máquina efímera. El servicio se ofrece en beta por invitación.

## Qué ofrece

- **Máquina gratuita:** una máquina de 4 vCPU, 8 GB de RAM y disco persistente de 20 GB. El plan gratuito permite una máquina y una ejecución a la vez.
- **Pausa por inactividad:** se pausa tras 30 minutos sin actividad; los datos y procesos se conservan para reanudarla.
- **Tiempo máximo:** el plan gratuito limita cada periodo de ejecución a 8 horas; después la máquina se pausa y puede reanudarse.
- **Más máquinas:** Pro permite hasta 500 máquinas y 100 en ejecución a la vez. Los planes de pago se facturan por uso.
- **Excepción temporal de beta:** quienes ya usaban el servicio antes del cambio de precios pueden mantener hasta cinco máquinas gratuitas hasta el 1 de diciembre de 2026.
- **Herramientas:** la CLI oficial se llama `instabox` y permite crear, listar, iniciar, pausar y conectar por SSH a las máquinas.

## Clúster de máquinas para trabajos paralelos

Una propuesta de uso consiste en crear diez sandboxes de 4 vCPU, 8 GB de RAM y 20 GB SSD cada uno y coordinarlos como un pequeño clúster:

1. Crear alias SSH en el portátil para conectarse a cada sandbox con nombres cortos, como `box1`.
2. Copiar la configuración SSH al primer sandbox y usarlo como controlador para conectarse con los demás sin depender del portátil.
3. Ejecutar en el controlador un temporizador de `systemd` que contacte con cada máquina cada 18 minutos para mantenerla activa frente a la pausa por 30 minutos de inactividad.
4. Contar con pausas de 3–5 minutos cuando se alcanza el máximo de 8 horas de ejecución y reactivar el nodo al siguiente contacto.
5. Usar una herramienta de clúster para consultar estados, difundir comandos y enviar trabajos a la máquina menos ocupada.

El enfoque convierte las máquinas gratuitas en capacidad temporal y descartable: se crean más nodos cuando hacen falta y se eliminan después. También se puede apagar el portátil cuando el controlador ya está ejecutándose en la nube.

El plan gratuito general permite una máquina. Existe una excepción temporal de hasta cinco máquinas para ciertos usuarios beta hasta el 1 de diciembre de 2026; por tanto, diez máquinas requieren acceso adicional o un plan que permita más instancias. La pausa por inactividad y el límite de ejecución son límites distintos. La herramienta oficial de línea de comandos se llama `instabox`; `box-cluster` es el nombre de la herramienta de coordinación descrita para este montaje.

### Acceso y límites

La disponibilidad de cinco máquinas gratuitas es una excepción temporal para parte de los usuarios beta; el límite normal es una máquina gratuita. No confundir esa excepción con el plan general ni con el límite de duración de ocho horas.

## Relacionado

- [[OpenMausBot]] — cada chat con su propio *computer*
- [[InstaCloud]] — infraestructura que tu agente opera sola (otro enfoque del mismo problema)
- [[VPS]] · [[Oracle Cloud Free Tier]] — la alternativa "hazlo tú mismo"
- [[Dayflow]] · [[Devin]] — agentes pensados para ejecutarse de forma desatendida

# #agente #hosting #opensource
