# Geo-sleuth

**geo-sleuth** ([Oldcircle/geo-sleuth](https://github.com/Oldcircle/geo-sleuth)) es una **skill de agente** (estándar `SKILL.md` más scripts en Python) que **averigua dónde se tomó una foto y demuestra cómo lo hace**: devuelve la posición de la cámara, la dirección hacia la que miraba y una **imagen de evidencia** por satélite, con un radio de error y una confianza graduada. Se difundió desde el tuit de [@Dinosn](https://x.com/Dinosn/status/2111682739342864783) (18 oct 2026).

## Qué la distingue

- **Funciona cuando no hay nada que leer.** Sin letreros, matrículas ni monumentos: la geometría de OpenStreetMap, los datos de elevación (perfiles de skyline), las teselas de satélite y street view sostienen la búsqueda por sí solos.
- **Geometría en lugar de corazonadas.** La separación entre pilares de un puente se vuelve una regla de distancia, las sombras una orientación y una línea de cresta una huella que se compara con los datos de elevación.
- **Cada afirmación apunta a un archivo.** Toda conclusión debe citar el comando que se ejecutó y el archivo que produjo: la popularidad o la fama de un sitio no cuentan como evidencia.
- **Los scripts ordenan, el modelo juzga.** Veinte scripts de un solo propósito buscan, puntúan y ordenan; el modelo solo elige entre los primeros resultados.
- **Una skill, cualquier agente:** Claude Code, Codex, Cursor, Gemini CLI, OpenCode y GitHub Copilot, más cualquier otro que lea `SKILL.md` y ejecute comandos de shell.

## Instalación y uso

```bash
npx skills add Oldcircle/geo-sleuth
```

Requiere Python 3.10 o superior. Tras instalar conviene pedir al agente que ejecute `doctor.py` (carpeta `scripts/`) y resuelva lo que falle. El uso es darle una foto al agente y decirle "find where this photo was taken".

## Datos y atribución

- **Licencia**: MIT. **Lenguaje**: Python.
- **Estrellas**: verificado el 18 oct 2026, **3.323 ⭐** y 449 forks.
- Repo creado el 18 sep 2026 y actualizado el 18 oct 2026; 15 issues abiertos. Proyecto muy nuevo y en crecimiento rápido.
- El README incluye casos resueltos (objetos sin GPS) con sus condiciones de reproducción; la precisión puede variar entre modelos porque el agente decide qué consultar y cuántos resultados comprobar.

## Relacionado

- [[GeoSpy]] - geolocalización de fotos "solo con píxeles" (plataforma cerrada), frente al enfoque abierto y verificable de geo-sleuth
- [[Agent-Reach]] - otra skill de investigación sobre datos públicos
- [[Acceso a internet desde agentes]] - dar contexto del mundo real al agente

# #skills #investigacion #opensource
