export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center px-6 py-24">
      <div className="w-full max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
          FormatLab
        </p>

        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          Convierte archivos sin subirlos a ningún lado
        </h1>

        <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          Todo el procesamiento ocurre en tu navegador con WebAssembly. Tus
          archivos nunca salen de tu equipo.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center rounded-xl border border-dashed border-zinc-300 px-6 py-14 text-center dark:border-zinc-700">
          <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Zona de archivos
          </p>
          <p className="mt-1.5 text-sm text-zinc-500">
            Próximamente: arrastra imágenes y archivos de datos.
          </p>
        </div>

        <p className="mt-8 font-mono text-xs text-zinc-500">
          MVP en construcción · imágenes y datos
        </p>
      </div>
    </main>
  );
}
