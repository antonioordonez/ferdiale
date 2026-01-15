import Image from "next/image";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative h-[885px] w-full pt-[85px]">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg-2.png"
          alt="Industrial machinery"
          fill
          className="object-cover"
          priority
        />
        {/* Blue overlay */}
        <div className="absolute inset-0 bg-primario mix-blend-color" />
        <div className="absolute inset-0 bg-black/20" />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 from-25% to-transparent" />
      </div>

      {/* Content */}
      <div className="relative flex h-full items-end pb-[90px]">
        <div className="mx-auto w-full max-w-[1280px] px-20">
          <div className="max-w-[802px]">
            <h1 className="text-[60px] font-black leading-[64px] text-white">
              Movemos tu producción hacia el futuro
            </h1>

            <div className="pt-[30px]">
              <Button variant="white" href="#contacto">
                Contáctanos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
