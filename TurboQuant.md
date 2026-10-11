# TurboQuant

Método de cuantización de vectores de Google Research (paper arXiv 2504.19874) que representa cada dimensión con muy pocos bits (típicamente 2 o 4) sin necesitar un paso de entrenamiento: el codebook se deriva matemáticamente, no de los datos. Permite comprimir índices de embeddings ~8-16× manteniendo el recall y buscar directamente sobre la forma comprimida con SIMD.

Implementación de referencia en Rust + Python: [[turbovec]].

#basededatos #ia
