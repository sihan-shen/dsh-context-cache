# `@han_05/dsh-context-cache`

Bounded persistent context cache used by DSH context-aware plugins.

- Parent repository: [DSH-Plugins](https://github.com/sihan-shen/DS-Plugins)
- Version: `0.2.0`
- GitHub repository: [sihan-shen/dsh-context-cache](https://github.com/sihan-shen/dsh-context-cache)
- DSH compatibility: package-level shared library; it has no direct DSH runtime dependency.
- Availability: prepared as a public npm dependency; install
  `@han_05/dsh-context` alongside it when using the optional peer contract.

The cache enforces bounded entries, safe paths, atomic writes, and deterministic
lookup keys. It does not mount a Cordis plugin or perform provider/network
operations.
