# GLSL para diseño

GLSL (OpenGL Shading Language) es el lenguaje para escribir **shaders** — pequeños programas que corren en la GPU y generan efectos visuales pixel a pixel. En diseño web y creativo se usa para:

- Fondos animados procedurales
- Distorsiones, glitch, aberración cromática
- Gradientes vivos, ruido, morphing
- Efectos 3D en la web (Three.js, regl)

## Concepto básico

Un fragment shader define el color de cada píxel. Recibe variables como `u_time` (tiempo), `u_resolution` (tamaño) y `u_mouse` (posición del ratón), y devuelve `gl_FragColor` con un color.

## Ejemplo mínimo: gradiente procedural con ruido

```glsl
precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
varying vec2 v_uv;

float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

void main() {
  vec2 uv = v_uv;

  // Gradiente base con movimiento suave
  vec3 colorA = vec3(0.2, 0.5, 0.8);
  vec3 colorB = vec3(0.8, 0.2, 0.5);
  float gradient = uv.x + sin(u_time * 0.3 + uv.y * 2.0) * 0.2;

  // Capa de ruido sutil
  float noise = random(uv * 200.0) * 0.08;

  vec3 color = mix(colorA, colorB, gradient);
  color += noise;

  gl_FragColor = vec4(color, 1.0);
}
```

## Glosario rápido

- `uniform`: variable externa (tiempo, resolución, ratón)
- `varying`: variable interpolada entre vértices
- `vec2 / vec3 / vec4`: vectores numéricos
- `mix`: interpolación lineal entre dos valores
- `fract`: parte decimal de un número
- `sin / cos`: funciones trigonométricas
- `dot`: producto escalar
- `smoothstep`: suavizado de bordes
- `length`: distancia de un vector

## Dónde probarlo

- [ShaderGPT](https://shadergpt.14islands.com/) — generar con lenguaje natural
- [Shadertoy](https://www.shadertoy.com/) — comunidad enorme de shaders
- [GLSL Sandbox](https://glslsandbox.com/) — editor vivo para prototipos

# #3d #contenido