"use client";

import { motion } from "framer-motion";
import Button from "./Button";
import { FadeIn, StaggerContainer, StaggerItem } from "./animations";

const reasons = [
  {
    title: "Experiencia que marca la diferencia",
    description:
      "Contamos con una sólida trayectoria en el desarrollo de Líneas de envasado y sistemas de transporte para el sector alimentario y de bebidas, aplicando todo nuestro conocimiento para ofrecer soluciones fiables y duraderas.",
  },
  {
    title: "Innovación constante",
    description:
      "Apostamos por la tecnología y la mejora continua. Incorporamos sistemas de automatización avanzados y un enfoque de ingeniería flexible que nos permite adaptarnos a las necesidades de cada proyecto, por complejo que sea.",
  },
  {
    title: "Calidad y fiabilidad",
    description:
      "Cada componente se diseña y fabrica con los más altos estándares de calidad. Nuestros equipos están pensados para funcionar de forma estable y segura, reduciendo tiempos de parada y optimizando el rendimiento de la línea.",
  },
  {
    title: "Cercanía y compromiso",
    description:
      "Nos implicamos en cada proyecto como si fuera propio. Escuchamos, asesoramos y acompañamos a nuestros clientes en cada etapa, construyendo relaciones basadas en la transparencia, la confianza y el servicio continuo.",
  },
];

export default function WhyUs() {
  return (
    <section className="px-5 py-16 md:px-10 lg:px-[100px] lg:py-[100px]">
      {/* Header */}
      <div className="mb-10 flex flex-col gap-6 lg:mb-[60px] lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-[689px]">
          <FadeIn>
            <h2 className="mb-4 text-[28px] font-bold leading-[1.15] text-oscuro sm:text-[36px] md:text-[42px] lg:mb-[15px] lg:text-[48px] lg:leading-[52px]">
              Tu socio tecnológico en soluciones de transporte y automatización.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="space-y-3 text-[15px] leading-[24px] text-texto lg:space-y-4 lg:text-[16px] lg:leading-[22px]">
              <p>
                En FERDIALE INGENIERÍA, S.L. no solo diseñamos equipos, diseñamos
                confianza. Cada proyecto nace del compromiso con nuestros clientes,
                la excelencia técnica y una visión clara: hacer que los procesos
                sean más eficientes, seguros y rentables.
              </p>
              <p>Elige una Ingeniería que entiende tu negocio.</p>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} className="hidden lg:block">
          <Button variant="dark" href="#contacto">
            Contáctanos
          </Button>
        </FadeIn>
      </div>

      {/* Cards */}
      <StaggerContainer
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:flex lg:justify-end lg:gap-6"
        staggerDelay={0.1}
      >
        {reasons.map((reason, index) => (
          <StaggerItem key={index} className="w-full lg:w-[292px]">
            <motion.div
              className="h-full rounded-[10px] bg-primario-light p-5 lg:px-5 lg:py-[30px]"
              whileHover={{
                y: -5,
                boxShadow: "0 10px 40px rgba(21, 107, 168, 0.15)",
                backgroundColor: "rgba(21, 107, 168, 0.15)"
              }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="mb-3 text-[20px] font-bold leading-[1.25] text-oscuro lg:mb-5 lg:text-[24px] lg:leading-[30px]">
                {reason.title}
              </h3>
              <p className="text-[14px] leading-[22px] text-oscuro lg:text-[16px]">
                {reason.description}
              </p>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Mobile CTA */}
      <FadeIn delay={0.5} className="mt-8 text-center lg:hidden">
        <Button variant="dark" href="#contacto">
          Contáctanos
        </Button>
      </FadeIn>
    </section>
  );
}
