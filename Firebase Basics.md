# Firebase Basics

Skill oficial de Firebase para agentes de IA (Claude Code, Codex, Cursor, etc.). Esta skill permite que un agente trabaje con Firebase sin usar patrones desactualizados: configura el proyecto, instala herramientas y accede a la documentación correcta automáticamente.

## ¿Para qué sirve?

Cuando le pides a un agente que haga algo con Firebase (crear un proyecto, configurar autenticación, desplegar funciones, etc.), el agente necesita saber qué herramientas usar y cómo. Esta skill se asegura de que:

1. Instale la versión correcta de las herramientas de Firebase
2. Inicie sesión en Firebase CLI
3. Configure el proyecto activo
4. Use la documentación más reciente en lugar de patrones inventados

## Cómo se usa

La skill se activa automáticamente cuando el agente detecta que estás trabajando con Firebase. Pero si quieres asegurarte de tenerla instalada:

```bash
npx -y skills add firebase/agent-skills -y
```

Esto instala todas las skills oficiales de Firebase.

## Flujo de trabajo

El agente sigue estos pasos automáticamente:

1. **Verifica que NPM esté instalado** (y si no, te pide que lo instales)
2. **Instala las skills de Firebase** con `npx skills add firebase/agent-skills -y`
3. **Inicia sesión en Firebase CLI**: `npx firebase-tools login`
4. **Configura el proyecto activo**: elige un proyecto existente o crea uno nuevo

## Referencias que incluye

- Conceptos básicos de Firebase
- Uso de Firebase CLI
- Uso de librerías cliente de Firebase
- Servidor MCP para Firebase
- Infraestructura como código (IaC) con Firebase
- Seguridad e IAM

Relacionado: [[Firebase]], [[Firestore]], [[Autenticación]], [[Hosting]]

# #firebase #backend #ia #desarrollo
