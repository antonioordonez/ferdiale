import Image from "next/image";
import Button from "./Button";

export default function About() {
  return (
    <section id="sobre" className="px-[100px] py-[141px]">
      <div className="flex items-start justify-between">
        {/* Logo */}
        <Image
          src="/images/logo-ferdiale.png"
          alt="Ferdiale"
          width={138}
          height={28}
          className="h-[28px] w-auto shrink-0"
        />

        {/* Content */}
        <div className="max-w-[829px]">
          {/* Main text */}
          <div className="flex flex-col gap-10">
            <h2 className="text-[48px] font-bold leading-[52px] text-oscuro">
              Diseñamos, fabricamos y automatizamos sistemas de transporte para
              líneas de envasado de alimentación y bebidas.
            </h2>

            <p className="text-[16px] leading-[22px] text-texto">
              Combinamos tecnología, experiencia e innovación para ofrecer
              soluciones eficientes y seguras, adaptadas a las necesidades de
              cada cliente.
            </p>

            <Button variant="primary" href="#servicios">
              Más Sobre Nosotros
            </Button>
          </div>

          {/* Cards */}
          <div className="mt-[108px] flex gap-[42px]">
            {/* Card 1 */}
            <div className="flex h-[398px] w-[398px] flex-col justify-between rounded-[20px] bg-primario-light px-[30px] py-10">
              <h3 className="text-[32px] font-bold leading-[38px] text-oscuro">
                Nuestro compromiso
              </h3>
              <p className="text-[16px] leading-[22px] text-oscuro">
                Optimizar los procesos productivos con equipos a medida,
                integraciones precisas y un servicio cercano que garantiza
                rendimiento, fiabilidad y tranquilidad en cada proyecto.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex h-[398px] w-[398px] flex-col justify-between rounded-[20px] bg-primario-light px-[30px] py-10">
              <h3 className="text-[32px] font-bold leading-[38px] text-oscuro">
                Nuestro objetivo
              </h3>
              <p className="text-[16px] leading-[22px] text-oscuro">
                Queremos ser tu socio tecnológico de confianza en el crecimiento
                y automatización de tu Línea de producción.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
