# numasec

**numasec** es un **agente de IA open source para seguridad ofensiva** que se ejecuta desde la terminal, difundido por [@Fluyeporlaweb](https://x.com/Fluyeporlaweb/status/2095449723565961521). En lugar de ser "un chatbot que da consejos", encadena las herramientas que ya tienes instaladas (nmap, sqlmap, nuclei y otras CLI de seguridad), lee los resultados, decide el siguiente paso y redacta el reporte.

## Cómo trabaja

- **Runbooks estructurados**: trabaja sobre procedimientos definidos y no inventa hallazgos.
- **Contexto persistente**: mantiene entre sesiones el estado de la operación (scope, findings, evidencia y *replay*).
- **Modos**: AppSec (auditoría de código), Pentest (intrusión), OSINT (reconocimiento) y CTF/lab (práctica).
- **Model-agnostic**: funciona con Claude, GPT, Ollama o el modelo que tengas.
- Licencia **AGPL-3.0** y uso gratuito.

## Atribución y advertencia

Los modos, la licencia y las capacidades son **lo que afirma el anuncio**; no se han verificado de forma independiente. Se trata de una herramienta **de seguridad ofensiva**: úsala **solo** contra sistemas propios o con **autorización explícita por escrito**. Conectarle un LLM le da acceso a herramientas que ejecutan acciones reales: aísla el entorno (contenedor/VM) y controla permisos, alcance y registro.

## Relacionado

- [[Cyberstrike]] - otro agente open source de pentesting; conviene compararlos antes de duplicar notas
- [[GLM-5.3-CYBERSECURITY]] - modelo abliterated para red teaming
- [[REA (Reverse Engineer Anything)]] - ingeniería inversa sobre binarios

# #agente #opensource #contenido
