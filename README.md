# FORMATLAB

Convertidor de archivos **100% en el navegador**. Tus archivos nunca se suben a un
servidor: la conversión ocurre en tu equipo mediante WebAssembly.

> **Estado:** MVP en construcción. Alcance inicial: **imágenes** y **datos**.

## Por qué

Casi todos los convertidores online funcionan igual: subes el archivo, se procesa en un
servidor ajeno y lo descargas. Eso implica esperar, límites de tamaño y confiar tus
documentos a terceros.

FORMATLAB invierte el modelo. El motor de conversión se descarga una vez y se ejecuta
dentro del navegador. El resultado es inmediato, no hay límite de tamaño impuesto por un
servidor y nada sale de tu equipo.

## Stack

| Pieza | Tecnología |
| --- | --- |
| Framework | Next.js 16 (App Router, `output: "export"`) |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS v4 |
| Conversión | WebAssembly (motores por definir en cada fase) |

El proyecto es un **sitio estático**: `next build` genera `out/` y se sirve desde
cualquier hosting estático, sin backend ni funciones serverless.

## Estructura

```
src/
├── app/                  rutas y layout
├── components/           UI reutilizable
└── lib/
    ├── registry.ts       matriz de conversiones (fuente de verdad)
    └── engines/          un módulo por motor de conversión
```

## Comandos

```bash
npm run dev      # http://localhost:3000
npm run build    # genera out/
npm run lint
```

Para inspeccionar el build estático como se vería en producción:

```bash
npx serve out
```

## Flujo de trabajo

- `main` está protegida: **no se commitea directo**.
- Cada cambio nace en una rama corta (`feat/`, `fix/`, `chore/`, `docs/`, `ci/`).
- Los commits siguen [Conventional Commits](https://www.conventionalcommits.org/).
- Se integra mediante Pull Request con **squash merge**.

## Hoja de ruta

- [x] Scaffold: Next.js, TypeScript, Tailwind, export estático
- [ ] Matriz de conversiones (`lib/registry.ts`)
- [ ] Dropzone y detección real de formato
- [ ] Motor de imágenes
- [ ] Motor de datos (CSV, JSON, XLSX, XML, YAML)
- [ ] Exportación por lotes en ZIP
- [ ] Historial local
- [ ] CI
- [ ] Documentación de arquitectura

## Referencias

La idea y la aproximación técnica están inspiradas en [VERT](https://github.com/Vert-sh/VERT)
(AGPL-3.0), un convertidor de archivos local basado en WebAssembly. FORMATLAB es una
implementación propia: no reutiliza su código.

## Licencia

Por definir.
