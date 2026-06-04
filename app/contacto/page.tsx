import Link from "next/link";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";

export default function ContactoPage() {
    return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-6 pt-24">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
          ¡Contactanos! Hagamos realidad tu visión digital.
        </p>

        <h1 className="text-4xl font-bold md:text-6xl">
          Conversemos sobre tu idea o necesidad digital.
        </h1>

       <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Completa el siguiente formulario para iniciar una conversación sobre una
            página web, consultoría digital o automatización básica.
        </p>
        <ContactForm />
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