"use client";

import { useState, type FormEvent } from "react";
const MAX_MESSAGE_LENGTH = 1000;

function isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function ContactForm() {
const [mensaje, setMensaje] = useState<string>("");
const [mensajeFueTocado, setMensajeFueTocado] = useState(false);
const [email, setEmail] = useState<string>("");
const [emailFueTocado, setEmailFueTocado] = useState(false);
const [nombres, setNombres] = useState<string>("");
const [nombresFueTocado, setNombresFueTocado] = useState(false);
const [apellidoPaterno, setApellidoPaterno] = useState<string>("");
const [apellidoMaterno, setApellidoMaterno] = useState<string>("");
const [servicio, setServicio] = useState<string>("");
const [servicioFueTocado, setServicioFueTocado] = useState(false);
const [formularioEnviado, setFormularioEnviado] = useState(false);
const [estaEnviando, setEstaEnviando] = useState(false);
const [errorEnvio, setErrorEnvio] = useState("");


    
    const mensajeEstaVacio = mensaje.trim().length === 0;
    const mostrarErrorMensaje = mensajeFueTocado && mensajeEstaVacio;
    const mensajeAlcanzoMaximo = mensaje.length >= MAX_MESSAGE_LENGTH;
    
    const emailLimpio = email.trim();
    const emailEstaVacio = emailLimpio.length === 0;
    const emailTieneFormatoInvalido = !emailEstaVacio && !isValidEmail(emailLimpio);

    const mostrarErrorEmailVacio = emailFueTocado && emailEstaVacio;
    const mostrarErrorEmailFormato = emailFueTocado && emailTieneFormatoInvalido;
    
    const nombresEstaVacio = nombres.trim().length === 0;
    const mostrarErrorNombres = nombresFueTocado && nombresEstaVacio;

    const servicioEstaVacio = servicio.trim().length === 0;
    const mostrarErrorServicio = servicioFueTocado && servicioEstaVacio; 


    const formularioTieneErrores =
      nombres.trim().length === 0 ||
      emailEstaVacio ||
      emailTieneFormatoInvalido ||
      servicioEstaVacio ||
      mensajeEstaVacio;

async function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  setFormularioEnviado(false);
  setErrorEnvio("");

  setNombresFueTocado(true);
  setEmailFueTocado(true);
  setServicioFueTocado(true);
  setMensajeFueTocado(true);

  if (formularioTieneErrores) {
    return;
  }

  const contacto = {
    nombres: nombres.trim(),
    apellidoPaterno: apellidoPaterno.trim(),
    apellidoMaterno: apellidoMaterno.trim(),
    email: emailLimpio,
    servicio,
    mensaje: mensaje.trim(),
  };

  try {
    setEstaEnviando(true);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contacto),
    });

    const data = await response.json();

    if (!response.ok) {
      setErrorEnvio(data.message ?? "No se pudo enviar el formulario.");
      return;
    }

    console.log("Respuesta de la API:", data);

    setFormularioEnviado(true);
  } catch (error) {
    console.error("Error al enviar formulario:", error);
    setErrorEnvio("Ocurrió un error inesperado al enviar el formulario.");
  } finally {
    setEstaEnviando(false);
  }
}
    return (
        
 <form
        onSubmit={handleSubmit}
         className="mt-10 grid gap-6 rounded-3xl border border-slate-800 bg-slate-900/50 p-6">
      <div className="grid gap-2">
        <label htmlFor="nombres" className="text-sm font-semibold text-slate-200">
          Nombres
        </label>
        <input
          id="nombres"
          name="nombres"
          type="text"
          value={nombres}
          onChange={(evento) => setNombres(evento.target.value)}
          onBlur={() => setNombresFueTocado(true)}
          maxLength={80}
          placeholder="Ej: Juan Carlos"
          aria-invalid={mostrarErrorNombres}
          className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400"
        />
        {mostrarErrorNombres && (
             <p className="text-sm text-red-400">
                 Ingresa tu nombre. Este campo no puede quedar vacío.
            </p>
)}
      </div>

      <div className="grid gap-2">
        <label
          htmlFor="apellidoPaterno"
          className="text-sm font-semibold text-slate-200"
        >
          Apellido Paterno
        </label>
        <input
          id="apellidoPaterno"
          name="apellidoPaterno"
          type="text"
          value={apellidoPaterno}
          onChange={(evento) => setApellidoPaterno(evento.target.value)}
          maxLength={80}
          placeholder="Ej: Pérez"
          className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400"
        />
        <p className="text-xs text-slate-500"> Campo opcional. Máximo 80 caracteres.</p>
      </div>

      <div className="grid gap-2">
        <label
          htmlFor="apellidoMaterno"
          className="text-sm font-semibold text-slate-200"
        >
          Apellido Materno
        </label>
        <input
          id="apellidoMaterno"
          name="apellidoMaterno"
          type="text"
          value={apellidoMaterno}
          onChange={(evento) => setApellidoMaterno(evento.target.value)}
          maxLength={80}
          placeholder="Ej: González"
          className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400"
        />
        <p className="text-xs text-slate-500"> Campo opcional. Máximo 80 caracteres.</p>
      </div>

      <div className="grid gap-2">
        <label htmlFor="email" className="text-sm font-semibold text-slate-200">
          Correo electrónico
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          onBlur={() => setEmailFueTocado(true)}
          placeholder="correo@ejemplo.com"
          aria-invalid={mostrarErrorEmailVacio || mostrarErrorEmailFormato}
          className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400"
        />
        {mostrarErrorEmailVacio && (
            <p className="text-sm text-red-400">
                Ingresa tu correo electrónico. Este campo no puede quedar vacío.
            </p>
        )}
        {mostrarErrorEmailFormato && (
            <p className="text-sm text-red-400">
                Ingresa un correo válido. Ejemplo: nombre@dominio.com
            </p>
        )}
      </div>

      <div className="grid gap-2">
        <label htmlFor="servicio" className="text-sm font-semibold text-slate-200">
          Servicio de interés
        </label>
        <select
          id="servicio"
          name="servicio"
          value={servicio}
          onChange={(event) => setServicio(event.target.value)}
          onBlur={() => setServicioFueTocado(true)}
          aria-invalid={mostrarErrorServicio}
          className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-sky-400"
        >
          <option value="" disabled>
            Selecciona una opción
          </option>
          <option value="pagina-web">Página web</option>
          <option value="consultoria-digital">Consultoría digital</option>
          <option value="automatizacion">Automatización básica</option>
          <option value="otro">Otro</option>
        </select>
        {mostrarErrorServicio && (
            <p className="text-sm text-red-400">
                Selecciona una opción.
            </p>
        )}
      </div>

      <div className="grid gap-2">
        <label htmlFor="mensaje" className="text-sm font-semibold text-slate-200">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={5}
          maxLength={MAX_MESSAGE_LENGTH}
          value={mensaje}
          onChange={(event) => setMensaje(event.target.value)}
          onBlur={() => setMensajeFueTocado(true)}
          aria-invalid={mostrarErrorMensaje}
          placeholder="Cuéntame brevemente qué necesitas"
          className="resize-none rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400"
        />
        {mostrarErrorMensaje && (
            <p className="text-sm text-red-400"> Ingresa un mensaje. Este campo no puede quedar vacío.</p>
        )}
        {mensajeAlcanzoMaximo && (
            <p className="text-sm text-red-400"> Has alcanzado el máximo de caracteres permitidos.</p>
        )}

        <div className="flex items-center justify-between text-xs">
            <p className={mensajeAlcanzoMaximo ? "text-red-400" : "text-slate-500"}>
                {mensajeAlcanzoMaximo
                ? "Máximo de caracteres alcanzado."
                : "Máximo 1000 caracteres"} 
                </p>       
                
                <p className={mensajeAlcanzoMaximo ? "text-red-400" : "text-slate-500"}>
                    {mensaje.length} / {MAX_MESSAGE_LENGTH} </p>
                </div>
      </div>

<button
  type="submit"
  disabled={estaEnviando}
  className="rounded-full bg-sky-500 px-8 py-3 font-semibold text-slate-950 transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-60"
>
  {estaEnviando ? "Enviando..." : "Enviar mensaje"}
</button>
{errorEnvio && (
    <p className="rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300">
    {errorEnvio}
  </p>) }
{formularioEnviado && (
  <p className="rounded-xl border border-sky-500/40 bg-sky-500/10 px-4 py-3 text-sm text-sky-300">
    Mensaje enviado correctamente. La API recibió y validó la información.
  </p>
)} 
    </form>
    );
}