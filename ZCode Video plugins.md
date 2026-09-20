# ZCode Video plugins

**ZCode** (de [z.ai](https://z.ai), entorno de desarrollo agéntico para **GLM-5.3**) estrenó dos plugins de video en su marketplace oficial ([zai-org/zcode-plugins](https://github.com/zai-org/zcode-plugins)): Rebecca Li ([@ZixuanLi_](https://x.com/ZixuanLi_)). Exprimen lo multimodal de **GLM-5.3-Flash** (1M de contexto, entiende imagen/video/audio, speaker attribution, estructura de historias).

## Los dos plugins

- **Video2code**: convierte una **URL o una grabación de pantalla en código funcional** — observa frames con el WebView integrado, monta una app React y la verifica contra la fuente. El caso "URL → código que funciona" es la demo; el pase de limpieza posterior es donde van las horas
- **Video Agent Kit**: **automatiza edición de video** — reorganiza videos largos o múltiples clips en contenido coherente (GLM-5.3-Flash entiende a la vez visual, habla, subtítulos, personas y timelines)

## Por qué importa

Es el patrón **video como especificación**: en vez de describir la web o el video que quieres, le enseñas uno existente y el agente lo replica o lo re-edita. Conecta con [[VibeTube]] (grabar → agente edita) y con el workflow de [[Pietro Schirano (@skirano)]].

## Recursos

- Marketplace: [github.com/zai-org/zcode-plugins](https://github.com/zai-org/zcode-plugins)
- Docs GLM-5.3-Flash: [docs.z.ai/guides/vlm/glm-5.3-flash](https://docs.z.ai/guides/vlm/glm-5.3-flash)
- Anuncio: [@ZixuanLi_ en X](https://x.com/ZixuanLi_)

## Relacionado

- Grabar y que el agente edite: [[VibeTube]]
- Video programático con agentes: [[HyperFrames]], [[El vídeo es código]]
- Modelos que coordinan agentes: [[Fable Orchestrator]]

# #video #vibecoding #agente