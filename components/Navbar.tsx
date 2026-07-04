"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [ 
    { label: "Inicio", href: "/" },
    { label: "Sobre mí", href: "/#sobre-mi" },
    {label: "Servicios", href: "/#servicios" },  
    { label: "Proyectos", href: "/#proyectos" }, 
    { label: "Contacto", href: "/contacto" },
    
  ];

  export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  function cerrarMenu() {
    setMenuAbierto(false);
  }

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-800/70 bg-slate-950/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          onClick={cerrarMenu}
          className="text-base font-extrabold tracking-[0.22em] text-white"
        >
          MATS
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[15px] font-semibold text-slate-200 transition hover:text-sky-400"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setMenuAbierto((estaAbierto) => !estaAbierto)}
          aria-label={
            menuAbierto
              ? "Cerrar menú de navegación"
              : "Abrir menú de navegación"
          }
          aria-expanded={menuAbierto}
          aria-controls="menu-movil"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 text-slate-200 transition hover:border-sky-400 hover:text-sky-400 md:hidden"
        >
          {menuAbierto ? (
            <span className="text-2xl leading-none">×</span>
          ) : (
            <span className="text-xl leading-none">☰</span>
          )}
        </button>
      </nav>

{menuAbierto && (
  <div
    id="menu-movil"
    className="absolute right-4 top-full mt-2 w-56 rounded-2xl border border-slate-800 bg-slate-950 p-3 shadow-2xl shadow-slate-950/50 md:hidden"
  >
    <div className="flex flex-col gap-1">
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          onClick={cerrarMenu}
          className="rounded-xl px-4 py-3 text-base font-semibold text-slate-200 transition hover:bg-slate-900 hover:text-sky-400"
        >
          {item.label}
        </Link>
      ))}
    </div>
  </div>
)}
    </header>
  );
}