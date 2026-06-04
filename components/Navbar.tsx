import Link from "next/link";

const navItems = [ 
    { label: "Inicio", href: "/" },
    { label: "Sobre mí", href: "/#sobre-mi" },
    {label: "Servicios", href: "/#servicios" },   /*aqui creamos un arreglo de objetos para el menu de nav, luego usamos .map() para generar los links automaticos */
    { label: "Contacto", href: "/contacto" },
  ];

  export default function Navbar() {
    return (
         <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-800/70 bg-slate-950/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-sm font-bold tracking-[0.25em] text-white">
          MATS
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-sky-400"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}