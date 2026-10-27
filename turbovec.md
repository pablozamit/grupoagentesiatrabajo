# turbovec

Índice vectorial en proceso para Python y Rust: guarda vectores comprimidos a 2 o 4 bits por dimensión con [[TurboQuant]] (método de Google Research, paper arXiv 2504.19874) y busca directamente sobre la forma comprimida con kernels SIMD, sin descomprimir.

- Rendimiento según el autor: 4,4× más rápido que FAISS FastScan a 4 bits (2,2× a 2 bits) con el mismo recall; 7,8× menos memoria que float32 a 4 bits (15,5× a 2 bits). Ejemplo que da el README: 10 millones de embeddings de 768 dimensiones, 31 GB en float32 → 4 GB en turbovec.
- Online, sin entrenamiento: el codebook sale de las matemáticas, no de los datos; añades un vector y ya es buscable, borrado en microsegundos.
- Persistencia incremental: `sync(path)` escribe solo lo que ha cambiado desde la última llamada, crash-safe, en milisegundos aunque el índice sea enorme.
- Local: es una librería, no un servicio; nada sale de tu proceso. Con un modelo de embeddings open source da un stack de búsqueda vectorial totalmente offline.
- Búsqueda filtrada: allowlist de ids o bitmask; el kernel se salta lo excluido y devuelve hasta k resultados del conjunto permitido. `IdMapIndex` mantiene tus propios ids (uint64) entre borrados.

Caveats honestos del propio README (sección «When to use something else»): escanea todos los vectores (coste lineal con el corpus; para cientos de millones con latencia estricta recomienda un índice HNSW/IVF), la cuantización pierde algo de exactitud (top-1 correcto el 96-98% de las veces a 4 bits, 90-93% a 2 bits, y siempre dentro de los primeros 8 devueltos), es librería sin API de red ni replicación, y solo acepta dimensiones múltiplo de 8 hasta 16.384.

Instalación: `pip install turbovec` (Python) o crate `turbovec` (Rust). Licencia MIT.

Útil como índice local dentro de un stack [[RAG]] offline. Alternativas: FAISS (Meta), Qdrant, pgvector.

Enlace: https://github.com/RyanCodrai/turbovec (~17k estrellas, oct 2026; tendencia del día en GitHub, jun 2026)

#basededatos #opensource
