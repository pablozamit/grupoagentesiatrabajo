# AIVPN

[AIVPN](https://github.com/infosave2007/aivpn) es una VPN experimental en Rust que oculta el tráfico ante la inspección profunda de paquetes (DPI) disfrazándolo de tráfico web o de aplicaciones ordinarias: combina cifrado de túnel UDP con «máscaras» que definen el protocolo exterior, los tamaños de paquete y los intervalos de envío. MIT, ~896 ⭐, cliente ≈ 2,5 MB, corre en un VPS de 5 USD.

## Qué hace

- Máscaras de tráfico que imitan protocolos concretos: QUIC/HTTP3 real bidireccional, STUN, WebRTC, llamadas de Telegram, Zoom, WhatsApp y otras; el módulo «Neural Resonance» (micro-MLP por máscara) vigila las estadísticas en vivo y rota de máscara sin cortar clientes.
- Cifrado: intercambio inicial InitialV2 con PFS, rotación de claves por ratchet X25519, ChaCha20-Poly1305, búsqueda de sesión O(1) sin ID de sesión en claro (tag de 8 bytes por paquete).
- Plataformas: servidor Linux; clientes para Linux, macOS, Windows, Android, iOS, OpenWrt y contenedor MikroTik; panel web de gestión. Publicado como crates `aivpn-server` y `aivpn-client`.

## Avisos del propio proyecto

Su README lo presenta como **proyecto experimental de investigación**: no garantiza saltar restricciones de red, anonimato ni protección contra detección y bloqueo, y avisa de que ser reconocido como STUN o QUIC no prueba indistinguibilidad estadística frente a una aplicación concreta. Los nombres de las máscaras tampoco garantizan parecerse a la aplicación nombrada.

## Relacionado

- [[Camofox Browser]]

# #opensource
