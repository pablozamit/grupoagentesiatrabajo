# Templatical SDK

[Templatical SDK](https://templatical.com) es un **editor de emails drag-and-drop de código abierto** que puedes integrar en cualquier aplicación web. Alternativa open-source a BeeFree o Unlayer, sin costos por usuario.

## Qué es

- Editor visual de plantillas de email con bloques pre-construidos (títulos, imágenes, botones, secciones, etc.)
- Plantillas en formato JSON portable (fácil de guardar en base de datos)
- Exporta a **MJML** (se renderiza correctamente en casi todos los clientes de email) y HTML
- Totalmente personalizable: temas, merge tags, condiciones de visualización, bloques personalizados
- Agnóstico de framework: React, Vue, Svelte, Angular o JavaScript vanilla
- Usa Shadow DOM para evitar conflictos de estilos
- Licencia FSL-1.1-MIT (se convierte en MIT después de 2 años por release)
- Open source

## Instalación

```bash
npm install @templatical/editor @templatical/renderer
```

Ejemplo básico:

```js
import { init } from '@templatical/editor';
import '@templatical/editor/style.css';

const editor = await init({
  container: '#editor',
  onChange(content) {
    console.log('Plantilla actualizada:', content);
  },
});

const mjml = await editor.toMjml();
```

```html
<div id="editor" style="height: 100vh; width: 100%;"></div>
```

## Notas importantes

- Todo corre del lado del cliente — no envía datos a servidores externos por defecto
- Importadores gratuitos para convertir plantillas de BeeFree, Unlayer o HTML puro
- Versión Cloud opcional (pagada) con IA, colaboración en tiempo real, etc.
- El SDK principal es completamente gratuito y self-hosted

## Recursos

- Web: [templatical.com](https://templatical.com)
- Demo: [play.templatical.com](https://play.templatical.com)
- Documentación: [docs.templatical.com](https://docs.templatical.com)
- Repositorio: [github.com/templatical/sdk](https://github.com/templatical/sdk)

# #web #contenido
