import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function ContactoPage() {
    return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-6 pt-24">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
          ¡Contactanos! y hagamos realidad tu visión digital.
        </p>

        <h1 className="text-4xl font-bold md:text-6xl">
          Conversemos sobre tu idea o necesidad digital.
        </h1>

       <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Completa el siguiente formulario para iniciar una conversación sobre una
            página web, consultoría digital o automatización básica.
        </p>
<form className="mt-10 grid gap-6 rounded-3xl border border-slate-800 bg-slate-900/50 p-6">
  <div className="grid gap-2">
    <label htmlFor="nombre" className="text-sm font-semibold text-slate-200">
      Nombre
    </label>
    <input
      id="nombre"
      name="nombre"
      type="text"
      placeholder="Ingresa tu nombre"
      className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400"
    />
  </div>

  <div className="grid gap-2">
    <label htmlFor="correo" className="text-sm font-semibold text-slate-200">
      Correo electrónico
    </label>
    <input
      id="correo"
      name="correo"
      type="email"
      placeholder="correo@ejemplo.com"
      className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400"
    />
  </div>

  <div className="grid gap-2">
    <label htmlFor="servicio" className="text-sm font-semibold text-slate-200">
      Servicio de interés
    </label>
    <select
      id="servicio"
      name="servicio"
      className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-sky-400"
      defaultValue=""
    >
      <option value="" disabled>
        Selecciona una opción
      </option>
      <option value="pagina-web">Página web</option>
      <option value="consultoria-digital">Consultoría digital</option>
      <option value="automatizacion">Automatización básica</option>
      <option value="otro">Otro</option>
    </select>
  </div>

  <div className="grid gap-2">
    <label htmlFor="mensaje" className="text-sm font-semibold text-slate-200">
      Mensaje
    </label>
    <textarea
      id="mensaje"
      name="mensaje"
      rows={5}
      placeholder="Cuéntame brevemente qué necesitas"
      className="resize-none rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400"
    />
  </div>

  <button
    type="button"
    className="rounded-full bg-sky-500 px-8 py-3 font-semibold text-slate-950 transition hover:bg-sky-400"
  >
    Enviar mensaje
  </button>
</form>
        <div className="mt-10">
          <Link
            href="/"
            className="text-sm font-semibold text-sky-400 transition hover:text-sky-300"
          >
            ← Volver al inicio
          </Link>
        </div>
      </section>
    </main>
    );
}