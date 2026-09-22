# Stagehand

**Stagehand** ([stagehand.dev](https://www.stagehand.dev), Browserbase, 23.7k ⭐, MIT) es el **SDK para browser agents**: Playwright se hizo para testing, Stagehand para agentes. APIs familiares + acciones self-healing en lenguaje natural (`act`, `observe`, `extract`) + seguridad a nivel red. TypeScript, Python y Go. Hilo coreano viral (165k views) por su **v4 con Jev**: −97% llamadas LLM y 11× velocidad.

## Por qué es más rápido (respuesta a los escépticos)

- El runtime vive **junto al navegador** (extensión), no al otro lado de round-trips remotos
- Números oficiales: wall-clock 4.7 s vs 9.0 s Playwright; tokens 7.4k vs 35.7k (−80%)
- Benchmark comunitario: 3.5 s vs 10.3 s en navegación simple (~3×), 19.7 s vs 37.9 s en compleja (~2×)
- Mézclalo: IA donde hay incertidumbre, código determinista donde sabes lo que quieres

## Capacidades

- Self-healing (`a.cta → a[data-v2].cta → healed`), extract tipado contra tu schema, deep locators (iframes, Shadow DOM), WebMCP, clipboard, batch commands, OTel, allowlist/blocklist de dominios
- Caché de acciones repetibles: corre sin inferencia LLM hasta que la web cambia

```bash
npm install @browserbasehq/stagehand
```

## Recursos

- Web y docs: [stagehand.dev](https://www.stagehand.dev) · [docs.stagehand.dev](https://docs.stagehand.dev/v4/first-steps/introduction)
- Hilo v4+Jev: [@Dontgiveup_26 en X](https://x.com/Dontgiveup_26)

## Relacionado

- Agente navegador open source: [[Browser Use]] (con [[Jev (TypeSafe)]] vía jev-ultrafast)
- Navegadores para agentes: [[Betterwright]], [[Moli Browser]], [[Polar Browser]], [[Camofox Browser]]

# #agente #web #opensource