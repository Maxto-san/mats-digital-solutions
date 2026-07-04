import Link from "next/link";

export default function ServicesSection() {
    return (
     <section
      id="servicios"
      className="mx-auto max-w-6xl scroll-mt-24 px-6 pt-12 pb-24 md:pt-16"
     >
     <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
        Servicios
      </p>

      <h2 className="max-w-3xl text-3xl font-bold text-white md:text-5xl">
        Soluciones digitales que puedo desarrollar.
      </h2>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
        Desarrollo web, automatización y análisis de datos aplicados a
        necesidades reales de personas, profesionales y pequeñas empresas.
      </p>

    <div className="mt-12 grid gap-6 md:grid-cols-3">
  <article className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6 transition hover:border-sky-500/50">
    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
      Desarrollo web
    </p>

    <h3 className="mt-4 text-2xl font-bold text-white">
      Sitios modernos y funcionales.
    </h3>

    <p className="mt-4 leading-7 text-slate-300">
      Desarrollo de páginas informativas, portfolios, landing pages y
      formularios con una experiencia clara, responsive y orientada a
      necesidades reales.
    </p>

    <p className="mt-6 text-sm font-medium text-slate-400">
      Next.js · React · TypeScript · TailwindCSS
    </p>
  </article>

<article className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6 transition hover:border-sky-500/50">
  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
    Automatización
  </p>

  <h3 className="mt-4 text-2xl font-bold text-white">
    Procesos digitales más simples.
  </h3>

  <p className="mt-4 leading-7 text-slate-300">
    Creación de formularios con validaciones, APIs internas y flujos que
    ayuden a reducir tareas manuales y ordenar el manejo de información.
  </p>

  <p className="mt-6 text-sm font-medium text-slate-400">
    APIs · Formularios · Validaciones · SQL
  </p>
</article>

<article className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6 transition hover:border-sky-500/50">
  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
    Datos y visualización
  </p>

  <h3 className="mt-4 text-2xl font-bold text-white">
    Indicadores para apoyar decisiones.
  </h3>

  <p className="mt-4 leading-7 text-slate-300">
    Diseño de consultas, indicadores y visualizaciones para comprender
    información, identificar patrones y monitorear riesgos u oportunidades.
  </p>

  <p className="mt-6 text-sm font-medium text-slate-400">
    SQL · Power BI · DAX · KPIs · KRIs
  </p>
</article>

</div>
<div className="mt-12 flex flex-col items-start gap-4 border-t border-slate-800 pt-10 md:flex-row md:items-center md:justify-between">
  <div>
    <h3 className="text-2xl font-bold text-white">
      ¿Tienes una idea o necesidad digital?
    </h3>

    <p className="mt-2 text-slate-300">
      Conversemos sobre cómo transformarla en una solución clara y funcional.
    </p>
  </div>

  <Link
    href="/contacto"
    className="rounded-full bg-sky-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-400"
  >
    Ir a contacto
  </Link>
</div>
      </section>        
    ); 
}