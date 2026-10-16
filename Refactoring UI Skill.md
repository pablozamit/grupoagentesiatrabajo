# Refactoring UI Skill

**Refactoring UI Skill** es una **skill para Claude** (repositorio [s0xDk/refactoring-ui-skill](https://github.com/s0xDk/refactoring-ui-skill)) que empaqueta los principios del libro *Refactoring UI* (Adam Wathan y Steve Schoger) para que el agente **arregle interfaces feas** aplicando ese criterio de diseño ([anuncio de @s13k_](https://x.com/s13k_/status/2092746602918080995)).

## Cómo funciona

- Se instala como skill y se invoca al agente; a partir de ahí, cuando le pides que **"arregle tu UI"**, aplica las reglas del libro.
- El valor está en **inyectar buen gusto de diseño** en el agente (jerarquía, espaciado, tipografía, color), un problema clásico del código generado por IA ("UI slop").

## Caveats

- No es magia: la skill **guía** al agente con principios, pero el resultado depende del modelo y del proyecto. Conviene **revisar** el cambio y no aceptarlo a ciegas.
- *Refactoring UI* es un libro **comercial**; verifica en el repo cómo se **atribuyen** sus ideas y respeta los derechos del material original.

## Relacionado

- [[Taste-Skill]] · [[UI Skills]] · [[Skills de diseño (better-ui y emil-design-eng)]] — otras skills de diseño anti-slop
- [[Impeccable]] · [[Laws of UX]] — principios de UI/UX
- [[Claude Code]] · [[Codex]] — agentes donde instalarla

# #skills #diseno #agente
