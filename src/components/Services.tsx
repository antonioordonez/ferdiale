"use client";

import { motion } from "framer-motion";
import Button from "./Button";
import { FadeIn } from "./animations";

const services = [
  {
    title: "Diseño e ingeniería a medida",
    description: [
      "Analizamos cada necesidad para desarrollar soluciones personalizadas que se adapten a los procesos, espacios, forma de trabajo y objetivos de producción de cada cliente.",
      "Apostamos por la innovación, el uso de tecnologías avanzadas y el diseño optimizado de cada componente.",
    ],
    tags: ["Diseño personalizado", "Análisis exhaustivo", "Innovación tecnológica"],
  },
  {
    title: "Fabricación y montaje",
    description: [
      "Contamos con un equipo técnico especializado y medios propios para fabricar transportadores, mesas de acumulación, elevadores, descensores, sistemas de transferencia, etc. de alta calidad.",
      "Cada proyecto se construye con precisión y materiales duraderos, asegurando un rendimiento óptimo en entornos exigentes.",
    ],
    tags: ["Equipo especializado", "Medios propios", "Materiales premium"],
  },
  {
    title: "Automatización e integración",
    description: [
      "Diseñamos sistemas automatizados que se integran de forma fluida con los equipos existentes.",
      "Implementamos soluciones de gestión de Líneas productivas para mejorar el flujo de trabajo y maximizar la productividad.",
    ],
    tags: ["Automatización", "Líneas de producción"],
  },
  {
    title: "Asistencia técnica y mantenimiento",
    description: [
      "Acompañamos a nuestros clientes durante todo el ciclo de vida del proyecto.",
      "Ofrecemos soporte técnico, mantenimiento preventivo y actualizaciones para garantizar la continuidad y eficiencia de la producción.",
    ],
    tags: ["Soporte técnico", "Mantenimiento", "Acompañamiento"],
  },
];

export default function Services() {
  return (
    <section id="servicios" className="bg-primario px-5 py-16 md:px-10 lg:px-[100px] lg:py-[100px]">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        {/* Left sidebar */}
        <div className="lg:sticky lg:top-[120px]">
          <div className="flex flex-col gap-6 lg:gap-7">
            {/* Section label */}
            <FadeIn>
              <div className="flex items-center gap-3">
                <div className="h-px w-[30px] bg-white" />
                <span className="text-[14px] leading-[22px] text-white lg:text-[16px]">
                  Nuestros Servicios
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="max-w-[280px] text-[15px] leading-[22px] text-white lg:w-[252px] lg:text-[16px]">
                Optimiza tu Línea de envasado con soluciones de ingeniería hechas
                para durar.
              </p>
            </FadeIn>

            <FadeIn delay={0.2} className="hidden lg:block">
              <Button variant="white" href="#contacto">
                Háblanos de tu proyecto
              </Button>
            </FadeIn>
          </div>
        </div>

        {/* Right content - cards */}
        <div className="max-w-full flex-1 lg:max-w-[811px]">
          {/* Heading */}
          <FadeIn>
            <h2 className="mb-10 text-[28px] font-bold leading-[1.15] text-white sm:text-[36px] md:text-[42px] lg:mb-20 lg:text-[48px] lg:leading-[52px]">
              Ingeniería que impulsa tu productividad.
            </h2>
          </FadeIn>

          {/* Service cards */}
          <div className="flex flex-col gap-6 lg:gap-10">
            {services.map((service, index) => (
              <FadeIn key={index} delay={index * 0.15}>
                <motion.div
                  className="rounded-[20px] border border-white/30 bg-oscuro p-6 lg:sticky lg:top-[120px] lg:p-10"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="mb-4 text-[22px] font-bold leading-[1.2] text-white sm:text-[26px] lg:mb-5 lg:text-[32px] lg:leading-[38px]">
                    {service.title}
                  </h3>

                  <div className="mb-5 space-y-3 lg:space-y-4">
                    {service.description.map((paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className="text-[14px] leading-[22px] text-white/90 lg:text-[16px]"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="mb-6 flex flex-wrap gap-2 lg:mb-8 lg:gap-[15px]">
                    {service.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        className="rounded-full bg-white/20 px-3 py-2 text-[13px] leading-[18px] text-white lg:px-[17px] lg:py-[11px] lg:text-[16px] lg:leading-[22px]"
                        whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  <Button variant="white" href="#" size="small">
                    Más detalles
                  </Button>
                </motion.div>
              </FadeIn>
            ))}
          </div>

          {/* Mobile CTA */}
          <FadeIn delay={0.6} className="mt-8 lg:hidden">
            <Button variant="white" href="#contacto">
              Háblanos de tu proyecto
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
