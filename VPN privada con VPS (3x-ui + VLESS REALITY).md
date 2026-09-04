# VPN privada con VPS (3x-ui + VLESS/REALITY)

Tutorial para montar tu **propia VPN privada** en un [[VPS]]: un túnel cifrado que **enmascara tu tráfico como navegación web normal**, de modo que apps o webs bloqueadas en tu región dejan de estarlo. En lugar de pagar por un servicio VPN (que también puede estar bloqueado), alquilas un servidor barato y despliegas el panel tú mismo. Fuente: tutorial de [@cyber__razz](https://x.com/cyber__razz).

## Prerrequisitos

- **Cuenta en un proveedor cloud**: DigitalOcean, Linode, Hetzner o Vultr (ver [[VPS]] para opciones gratis como [[Oracle Cloud Free Tier]])
- **Terminal**: macOS/Linux Terminal o Windows PowerShell
- **App cliente**: V2Box, Sing-box, v2rayNG o NekoBox (en el móvil o PC)

## Paso 1 — Desplegar un VPS

- Crea una instancia VPS básica (**Ubuntu 22.04** o **Debian 12**)
- Elige una **ubicación fuera de tu región restringida**
- Anota la **IP del servidor** y la contraseña root

## Paso 2 — Conectar al servidor

```bash
ssh root@TU_IP_DEL_SERVIDOR
```

## Paso 3 — Instalar el panel 3x-ui

```bash
bash <(curl -Ls https://raw.githubusercontent.com/mhsanaei/3x-ui/master/install.sh)
```

- Configura usuario, contraseña y puerto del panel (ej: `2053`)
- Abre en el navegador: `http://TU_IP_DEL_SERVIDOR:2053`

## Paso 4 — Configurar VLESS + REALITY

1. En 3x-ui: **Inbounds → Add Inbound**
2. Protocol: `vless`
3. Security: `REALITY`
4. **Target Domain (Dest)**: `microsoft.com`
5. **SNI**: `microsoft.com`
6. Clic en **Get New Keys** para generar las claves de cifrado y guarda

El truco de **REALITY** es apuntar a un dominio real (como microsoft.com): el tráfico parece TLS normal hacia ese dominio, por lo que es prácticamente indistinguible de navegación web corriente. Por eso escribe "tu tráfico queda enmascarado como navegación web normal".

## Paso 5 — Conectar tu dispositivo

1. En 3x-ui, clic en el **QR code / Copy Link** del inbound creado
2. Abre **V2Box** (o tu cliente preferido) en el móvil/PC
3. Escanea el QR o importa el enlace desde el portapapeles
4. Conecta >>>>> tu tráfico va enmascarado como navegación web normal

## Por qué importa

Es la diferencia entre *"esa app/esa web está bloqueada en mi país"* y *"le doy la vuelta sin depender de un servicio VPN de pago que el firewall ya conoce"*. Controlas el servidor, el protocolo y los logs tú mismo, a coste de ~$4-6/mes (o gratis con un tier Always Free).

## Recursos

- Tutorial original: [@cyber__razz en X](https://x.com/cyber__razz)
- Panel 3x-ui: [github.com/mhsanaei/3x-ui](https://github.com/mhsanaei/3x-ui)
- App cliente: V2Box, Sing-box, v2rayNG, NekoBox

## Relacionado

- Dónde alquilar el servidor: [[VPS]], [[Oracle Cloud Free Tier]], [[free-for.dev]]
- Servidores y hosting: [[OpenShip]], [[Here.Now]]

# #hosting #contenido #productividad