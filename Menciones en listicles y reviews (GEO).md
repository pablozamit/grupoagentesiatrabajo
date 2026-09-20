# Citation Outreach (GEO)

Estrategia GEO para marcas pequeñas: conseguir **menciones en artículos de reviews y listicles** que ChatGPT/Gemini usan como fuentes, en lugar de competir solo con el propio sitio.

## Insight

Las marcas pequeñas pueden superar a grandes en respuestas generadas por IA si acumulan citas en fuentes externas que los modelos ya usan. Ejemplo: **Photopea** rankeando #1 en "best 2026 online photo editing tools" por citas de páginas de reviews externas, no por su propio SEO.

Tesis viral de Florian Darroman ([@floriandarroman](https://x.com/floriandarroman), cofundador de [distribb.io](https://distribb.io), 93k views): si quieres clientes desde ChatGPT, todo se reduce a una palabra — **LISTICLES**. Es el 80/20 del AI SEO: los listicles ("best X tools") son el formato que los asistentes citan cuando el usuario pregunta qué comprar.

## Herramientas

- **CrowdReply**: servicio de "Citation Outreach" (SaaS desde ~$99/mes, API + MCP alojado). NO es open-source. Usa red de cuentas aged de Reddit para el outreach.
- **Elmo** (MIT): tracking de menciones y citas en varios motores AI. Open-source.
- **OneGlanse** (MIT): captura respuestas reales de ChatGPT/Gemini/Perplexity/Claude/AI Overview vía navegador. Open-source / self-hosted.
- **auto-geo de shadowresearch** (MIT): CLI para auditar páginas y medir citas de LLMs.
- Otras: **GetCito**, **GEO/AEO Tracker**, **Gego**, **Citation Intelligence** (MCP self-hosted).

## Matiz

Estas herramientas miden/optimizan tu propio contenido (tracking GEO/AEO). La parte de **outreach con red de cuentas aged de Reddit** (lo que hace CrowdReply) no tiene equivalente open-source maduro.

## Notas relacionadas

- [[GEO]] - plan general de Generative Engine Optimization.
- [[Best AEO Skill]] - auditoría on-page para que las IAs te citen.
- [[Jev (TypeSafe)]] - el internal linking masivo como trabajo de clasificación también lo automatiza Distribb (de los mismos fundadores que la tesis listicle).
