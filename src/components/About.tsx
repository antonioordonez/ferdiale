"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "./Button";
import { FadeIn } from "./animations";

export default function About() {
  return (
    <section id="sobre" className="px-5 py-16 md:px-10 lg:px-[100px] lg:py-[141px]">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-20">
        {/* Logo */}
        <FadeIn direction="left" className="shrink-0">
          <Image
            src="/images/logo-ferdiale.png"
            alt="Ferdiale"
            width={138}
            height={28}
            className="h-[24px] w-auto lg:h-[28px]"
          />
        </FadeIn>

        {/* Content */}
        <div className="max-w-[829px]">
          {/* Main text */}
          <div className="flex flex-col gap-6 lg:gap-10">
            <FadeIn>
              <h2 className="text-[28px] font-bold leading-[1.15] text-oscuro sm:text-[36px] md:text-[42px] lg:text-[48px] lg:leading-[52px]">
                Diseñamos, fabricamos y automatizamos sistemas de transporte para
                líneas de envasado de alimentación y bebidas.
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-[15px] leading-[24px] text-texto lg:text-[16px] lg:leading-[22px]">
                Combinamos tecnología, experiencia e innovación para ofrecer
                soluciones eficientes y seguras, adaptadas a las necesidades de
                cada cliente.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Button variant="primary" href="#servicios">
                Más Sobre Nosotros
              </Button>
            </FadeIn>
          </div>

          {/* Cards */}
          <div className="mt-12 flex flex-col gap-6 sm:flex-row lg:mt-[108px] lg:gap-[42px]">
            {/* Card 1 */}
            <FadeIn delay={0.3} className="flex-1">
              <motion.div
                className="flex h-full min-h-[300px] flex-col justify-between rounded-[20px] bg-primario-light p-6 lg:h-[398px] lg:min-h-0 lg:w-[398px] lg:p-10"
                whileHover={{ y: -5, boxShadow: "0 10px 40px rgba(21, 107, 168, 0.15)" }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-[24px] font-bold leading-[1.2] text-oscuro lg:text-[32px] lg:leading-[38px]">
                  Nuestro compromiso
                </h3>
                <p className="mt-4 text-[15px] leading-[22px] text-oscuro lg:mt-0 lg:text-[16px]">
                  Optimizar los procesos productivos con equipos a medida,
                  integraciones precisas y un servicio cercano que garantiza
                  rendimiento, fiabilidad y tranquilidad en cada proyecto.
                </p>
              </motion.div>
            </FadeIn>

            {/* Card 2 */}
            <FadeIn delay={0.4} className="flex-1">
              <motion.div
                className="flex h-full min-h-[300px] flex-col justify-between rounded-[20px] bg-primario-light p-6 lg:h-[398px] lg:min-h-0 lg:w-[398px] lg:p-10"
                whileHover={{ y: -5, boxShadow: "0 10px 40px rgba(21, 107, 168, 0.15)" }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-[24px] font-bold leading-[1.2] text-oscuro lg:text-[32px] lg:leading-[38px]">
                  Nuestro objetivo
                </h3>
                <p className="mt-4 text-[15px] leading-[22px] text-oscuro lg:mt-0 lg:text-[16px]">
                  Queremos ser tu socio tecnológico de confianza en el crecimiento
                  y automatización de tu Línea de producción.
                </p>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
