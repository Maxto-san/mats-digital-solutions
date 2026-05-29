import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
      
          <Image
            src="/LogoFondoOs.png"
            alt="Logo MATS Digital Solutions"
            width={420}
            height={180}
            priority
            className="h-auto w-64 md:w-80"
          />
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-sky-400">
          Desarrollo web · Consultoría digital · Automatización
        </p>

        <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
          Soluciones digitales modernas para transformar ideas en proyectos
          reales.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Soy Ingeniero Informático recién titulado, enfocado en crear sitios
          web modernos, automatizar procesos y fortalecer mis habilidades en
          React, TypeScript, Python y SQL.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#servicios"
            className="rounded-full bg-sky-500 px-8 py-3 font-semibold text-slate-950 transition hover:bg-sky-400"
          >
            Ver servicios
          </a>

          <a
            href="#contacto"
            className="rounded-full border border-slate-600 px-8 py-3 font-semibold text-white transition hover:border-sky-400 hover:text-sky-400"
          >
            Contactar
          </a>
        </div>
      </section>
    </main>
  );
}