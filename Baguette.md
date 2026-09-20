# Baguette

**Baguette** ([github.com/tddworks/baguette](https://github.com/tddworks/baguette), Apache-2.0, 1.7k ⭐, `brew install baguette`) es un **manager headless de simuladores iOS** en un solo CLI Swift: crea/arranca/apaga devices, **streamea pantallas a 60 fps** e inyecta taps, swipes y gestos multi-dedo **sin abrir Xcode ni Simulator.app**. Con web UI propia y modo **device farm** (varios simuladores lado a lado, clic para enfocar). Requiere Apple Silicon + Xcode 26.

## El caso: granja de emuladores remota desde el iPhone

Iñaki ([@inakitajes](https://x.com/inakitajes), 15.4k views) trabaja contra un Mac Studio por SSH y montó en una tarde (con deepseek v4.1 flash) una app que expone **toda su granja de emuladores en remoto**:

- Base: Baguette + cliente nativo en Swift + servicio dentro de **Tailscale** (montar servicios y acceder es inmediato dentro de su VPN)
- Resultado: varios proyectos corriendo contra distintos emuladores, probables **en tiempo real desde su propio móvil o cualquier navegador**, a kilómetros de la estación
- Su repo aún no está público (dijo que lo limpiará y compartirá); lo reutilizable hoy es Baguette + el patrón Tailscale

## Por qué importa para agentes

Baguette trae skills y affordances para agentes (topics `agent`, skills en el repo): un agente de QA puede manejar la farm sin GUI — mismo espacio que [[Noqa]] (QA visual en móviles reales), pero en simuladores.

## Recursos

- Repo: [github.com/tddworks/baguette](https://github.com/tddworks/baguette)
- Web: [tddworks.github.io/baguette](https://tddworks.github.io/baguette)
- Caso: [@inakitajes en X](https://x.com/inakitajes)

## Relacionado

- QA visual móvil: [[Noqa]]
- URLs estables para dev: [[Portless]]
- Exponer servicios en remoto: [[VPS]] (Tailscale)

# #opensource #productividad #agente