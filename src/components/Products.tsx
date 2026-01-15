import Image from "next/image";
import Link from "next/link";

const products = [
  "Transportadores de Envases",
  "Sistemas de Acumulación",
  "Cubiertas para transportadores",
  "Transportadores de Cajas / Packs",
  "Transportadores de Palets",
];

export default function Products() {
  return (
    <section id="productos" className="relative bg-oscuro">
      <div className="mx-auto flex max-w-[1440px] items-center">
        {/* Background image - left side */}
        <div className="relative h-[811px] w-[720px] shrink-0">
          <Image
            src="/images/productos-bg.png"
            alt="Industrial machinery"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0">
            <Image
              src="/images/productos-overlay.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Content - right side */}
        <div className="flex flex-1 flex-col gap-10 px-[100px] py-[100px]">
          {/* Section label */}
          <div className="flex items-center gap-3">
            <div className="h-px w-[30px] bg-white" />
            <span className="text-[16px] leading-[22px] text-white">
              Nuestros Productos
            </span>
          </div>

          {/* Products list */}
          <div className="border-t border-white/10">
            {products.map((product, index) => (
              <Link
                key={index}
                href="#"
                className="group flex items-center border-b border-white/10 py-[30px] transition-colors hover:border-white/30"
              >
                <span className="text-[36px] font-bold leading-[40px] text-white transition-opacity group-hover:opacity-80">
                  {product}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
