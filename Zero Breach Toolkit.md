# Zero Breach Toolkit

**Zero Breach Toolkit** es un toolkit **gratuito y open source** (Apache-2.0, ~3,7k ⭐) para buscar **rastros de spyware mercenario conocido** (Pegasus, Predator, Graphite, Candiru y otros) en ordenadores Windows, macOS y Linux, en teléfonos Android y en copias de seguridad de iPhone. Hecho por archivegenocide sobre el proyecto [Zero Breach](https://github.com/interplains/zero-breach).

## Qué hace

- Análisis **offline y de solo lectura**: según su README, no modifica la evidencia ni los ajustes del sistema, no hace peticiones de red durante el escaneo y solo escribe snapshots temporales de bases de datos y los informes que pide el usuario.
- Pensado para **no técnicos**: instalación con Python, menú por números y chequeo estándar de unos 15 minutos; los teléfonos se revisan conectándolos al ordenador.
- **Declara sus límites**: cada informe indica qué se encontró, con qué fuerza de evidencia y qué no se pudo comprobar; un resultado limpio nunca se presenta como prueba de que el dispositivo está limpio.

## Caveats

- Las propiedades (sin red, solo lectura, bloqueo de llamadas de red de Python) son **afirmaciones de su README y PRIVACY.md**, no auditadas de forma independiente aquí.
- Repo muy reciente (creado el 25-oct-2026) y en desarrollo activo.
- Su propia documentación avisa: ante una sospecha real de ser objetivo de spyware, pide primero ayuda experta (Access Now Digital Security Helpline, Amnesty Security Lab) en lugar de confiar solo en la herramienta.

## Relacionado

- [[Blackstorm Security]] - biblioteca gratuita de investigación ofensiva
- [[GLM-5.3-CYBERSECURITY]] - modelo para red teaming
- [[Cyberstrike]] y [[numasec]] - agentes de pentesting

## Fuente

- [github.com/interplains/Zero-Breach-Toolkit](https://github.com/interplains/Zero-Breach-Toolkit)

# #opensource #agente
