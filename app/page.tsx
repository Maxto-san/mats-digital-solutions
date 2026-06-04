import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <section className="mx-auto flex min-h-[88vh] max-w-6xl flex-col items-center justify-center px-6 pt-20 pb-16 text-center">
      
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
           Soy Ingeniero Informático recién titulado, enfocado en crear soluciones
  digitales claras, funcionales y orientadas a resolver necesidades reales
  de personas, profesionales y pequeñas empresas.
        </p>

<div className="mt-10 flex justify-center">
<Link
  href="/contacto"
  className="rounded-full bg-sky-500 px-8 py-3 font-semibold text-slate-950 transition hover:bg-sky-400"
>
  Contáctame
</Link>
</div>
        <div className="mt-10">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            Stack en Práctica
          </p>
          <div className='flex flex-wrap justify-center gap-3'>
  {[    "React",    "Next.js",    "TypeScript",    "Python",
    "SQL",
    "Automatización"].map(
    (tech) => (
      <span
        key={tech}
        className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm font-medium text-slate-300"
      >
        {tech}
      </span>
    )
  )}
  </div>
</div>
      </section>
      <section id="sobre-mi" className="mx-auto max-w-6xl px-6 pt-16 pb-24"> 
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-center">
  <div>
    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
      Sobre mí
    </p>

    <h2 className="text-3xl font-bold text-white md:text-5xl">
      Construyendo experiencia real a través de proyectos prácticos.
    </h2>
  </div>

  <div className="space-y-6 text-lg leading-8 text-slate-300">
    <p>
      Soy Ingeniero Informático recién titulado, enfocado en fortalecer mis
      habilidades en desarrollo web, automatización de procesos y soluciones
      digitales aplicadas a necesidades reales.
    </p>

    <p>
        Actualmente estoy desarrollando este sitio como proyecto personal y
       profesional, aplicando tecnologías modernas del ecosistema web y buenas
        prácticas de desarrollo para construir una base técnica más sólida.
    </p>

    <p>
      Mi objetivo es seguir construyendo una base técnica sólida, aprender con
      proyectos reales y ofrecer soluciones claras, funcionales y escalables
      para personas, profesionales y pequeñas empresas.
    </p>
  </div>
  
</div>
      </section>
    </main>
  );
}