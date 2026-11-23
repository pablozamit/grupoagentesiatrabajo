# Ingeniería inversa de hardware con agentes

Método para hacer ingeniería inversa a un protocolo de hardware propio (bus, mando, sensor) trabajando con un agente de código, destilado del caso documentado por Hugo Jiménez ([@hugojm_](https://x.com/hugojm_/status/2124774956495995355), nov-2026): un bus de dos hilos de un aire Panasonic por conductos controlado con ESP32, ESPHome y Home Assistant, en unas 2 horas. El mismo proyecto había fallado meses antes con un modelo anterior y llevaba 7 meses sin respuesta en el foro de Home Assistant.

## Reparto de trabajo

La persona aporta las manos y el criterio (conectar, pulsar botones, soldar, medir, rechazar compras innecesarias); el agente aporta el razonamiento, el código, el diseño de hardware y la depuración.

## El método que funcionó

1. **Diagnosticar el supuesto, no el síntoma**: el intento anterior leía el bus como puerto serie a 1200 baudios, pero la señal usa una portadora de ~19 kHz; muestrear a 19,2 kHz producía aliasing y los "datos" eran ruido. El agente lo dedujo leyendo el hilo del foro y el código viejo antes de proponer nada.
2. **Decodificador offline antes de tocar la máquina**: escribir el decodificador desde cero (detección de flancos y portadora, formato de bits, paridad, checksum) y validarlo con tests sobre tramas ya publicadas por otros.
3. **Receptor con lo que hay**: un transistor y dos resistencias bastan si el umbral se calcula entre el nivel del bus (15 V) y el de la portadora (7,6 V); no hizo falta comprar optoacopladores.
4. **Escuchar antes de hablar**: sniffear el tráfico (sondeos a 0x80-0x9F cada 154,6 ms) y mapear cada botón pidiendo a la persona que pulse de uno en uno mientras el agente lee el log.
5. **Transmitir en el hueco libre**: analizar los tiempos y responder donde nadie contesta (la dirección 0x81, como "segundo mando", 44 ms tras el sondeo) para no colisionar.
6. **Respetar los tiempos reales**: el bucle principal de 16 ms de ESPHome perdía la ventana de 3 ms para responder; se resolvió con un temporizador por hardware.
7. **Cerrar con fabricación**: la PCB final se generó con código contra la API de KiCad, sin errores de diseño, lista para JLCPCB.

## Límites

Es un caso único sobre hardware propio, no un procedimiento garantizado. Riesgo físico real: 15 V llegaron a un pin del ESP32 y quemaron el micro y un transistor (diagnosticado por síntomas: 0 flancos y nivel 0 = transistor en corto). Este análisis debe limitarse a equipos propios o con autorización.

Resultado publicado: [[panasonic-rd-bus]].

#tipo/guia #tema/agentes
