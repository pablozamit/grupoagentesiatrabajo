# Stack Cloudflare para un SaaS pequeño

Una aplicación web pequeña puede concentrar varias piezas de infraestructura en Cloudflare:

- **Workers** para ejecutar la aplicación y sus funciones de servidor.
- **D1** como base de datos SQL gestionada.
- **R2** para almacenar archivos u objetos.
- **Cloudflare Email** para correo transaccional.
- **Better Auth** como biblioteca de autenticación en el caso descrito.

En un proyecto personal de bajo tráfico se comunicó una reducción de unos 50 € mensuales —Vercel, Resend y Neon— a unos 5 € tras migrar estas piezas. El mismo caso indicaba entre 3.000 y 5.000 correos al mes. Es una experiencia concreta, no una tarifa representativa ni una garantía de ahorro: el coste final depende del uso, los límites y la configuración de cada servicio. Antes de migrar, conviene comprobar que D1 y el modelo de ejecución de Workers cubren las necesidades de la aplicación.

## Recursos

- [Cloudflare Workers](https://workers.cloudflare.com/)
- [Cloudflare D1](https://developers.cloudflare.com/d1/)
- [Cloudflare R2](https://developers.cloudflare.com/r2/)
- [Cloudflare Email](https://developers.cloudflare.com/email-service/)
- [Better Auth](https://www.better-auth.com/)

# #hosting #basededatos #contenido
