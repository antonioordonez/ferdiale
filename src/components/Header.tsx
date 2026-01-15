import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Inicio", href: "#" },
  { label: "Sobre Ferdiale", href: "#sobre" },
  { label: "Productos", href: "#productos" },
  { label: "Servicios", href: "#servicios" },
];

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex flex-col">
      {/* Top accent bar */}
      <div className="h-[10px] w-full bg-primario" />

      {/* Main navigation */}
      <nav className="flex h-[75px] items-center justify-between bg-oscuro px-10">
        <Link href="/">
          <Image
            src="/images/logo-ferdiale-blanco.png"
            alt="Ferdiale"
            width={126}
            height={26}
            className="h-auto w-[126px]"
          />
        </Link>

        {/* Desktop menu */}
        <div className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[14px] font-medium uppercase leading-6 tracking-wide text-white transition-opacity hover:opacity-80"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          href="#contacto"
          className="rounded-[15px] bg-white px-[18px] py-3 text-[14px] font-bold uppercase leading-5 text-primario transition-opacity hover:opacity-90"
        >
          Contacta
        </Link>
      </nav>
    </header>
  );
}
