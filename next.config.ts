import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Sitio 100% estático: no hay servidor ni API routes.
  // Todo el procesamiento de archivos ocurre en el navegador.
  output: "export",
  trailingSlash: true,
  images: {
    // Requerido por `output: "export"`: no hay servidor que optimice imágenes.
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
