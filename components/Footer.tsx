import Link from "next/link";

const githubUrl = "https://github.com/Maxto-san";
const linkedinUrl = "https://www.linkedin.com/in/maximiliano-toledo-ti";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="text-lg font-bold tracking-[0.2em] text-white">
            MATS
          </p>

          <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
            Ingeniería informática, desarrollo web y soluciones digitales
            aplicadas a necesidades reales.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
            Explorar
          </p>

          <nav className="mt-4 flex flex-col gap-3 text-sm">
            <Link
              href="/#sobre-mi"
              className="text-slate-400 transition hover:text-sky-400"
            >
              Sobre mí
            </Link>

            <Link
              href="/#servicios"
              className="text-slate-400 transition hover:text-sky-400"
            >
              Servicios
            </Link>

            <Link
              href="/#proyectos"
              className="text-slate-400 transition hover:text-sky-400"
            >
              Proyectos
            </Link>

            <Link
              href="/contacto"
              className="text-slate-400 transition hover:text-sky-400"
            >
              Contacto
            </Link>
          </nav>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
            Conectar
          </p>

          <div className="mt-4 flex items-center gap-3">
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Visitar perfil de GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition hover:border-sky-400 hover:text-sky-400"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-5 w-5 fill-current"
              >
                <path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.85.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.15-4.56-5.11 0-1.13.39-2.05 1.03-2.78-.1-.26-.45-1.32.1-2.75 0 0 .84-.28 2.75 1.06A9.24 9.24 0 0 1 12 6.9c.85 0 1.71.12 2.51.34 1.91-1.34 2.75-1.06 2.75-1.06.55 1.43.2 2.49.1 2.75.64.73 1.03 1.65 1.03 2.78 0 3.97-2.35 4.84-4.58 5.1.36.33.68.96.68 1.95 0 1.41-.01 2.55-.01 2.9 0 .27.18.59.69.49A10.26 10.26 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z" />
              </svg>
            </a>

            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Visitar perfil de LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition hover:border-sky-400 hover:text-sky-400"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-5 w-5 fill-current"
              >
                <path d="M5.19 3.5A1.69 1.69 0 1 1 1.81 3.5a1.69 1.69 0 0 1 3.38 0ZM2.16 21.5h3.06V8.11H2.16V21.5ZM7.14 8.11V21.5h3.05v-6.63c0-1.75.33-3.45 2.5-3.45 2.14 0 2.17 2.02 2.17 3.56v6.52h3.06v-7.17c0-3.52-.74-6.23-4.83-6.23-1.96 0-3.27 1.09-3.81 2.12h-.04V8.11H7.14Z" />
              </svg>
            </a>
          </div>

          <p className="mt-4 text-sm leading-6 text-slate-400">
            Revisa mis proyectos, experiencia técnica y avances de aprendizaje.
          </p>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-5 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} MATS Digital Solutions.</p>

          <p>Desarrollado con Next.js, React y TypeScript.</p>
        </div>
      </div>
    </footer>
  );
}