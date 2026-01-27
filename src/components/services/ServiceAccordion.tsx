'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    id: 1,
    title: 'Diseño e ingeniería a medida',
    description: 'Analizamos cada necesidad para desarrollar soluciones personalizadas que se adapten a los procesos, espacios, forma de trabajo y objetivos de producción de cada cliente.\n\nApostamos por la innovación, el uso de tecnologías avanzadas y el diseño optimizado de cada componente.',
    image: '/images/service-diseno.png',
  },
  {
    id: 2,
    title: 'Fabricación y montaje',
    description: 'Contamos con un equipo técnico especializado y medios propios para fabricar transportadores, mesas de acumulación, elevadores, descensores, sistemas de transferencia, etc. de alta calidad.\n\nCada proyecto se construye con precisión y materiales duraderos, asegurando un rendimiento óptimo en entornos exigentes.',
    image: '/images/service-fabricacion.png',
  },
  {
    id: 3,
    title: 'Automatización e integración',
    description: 'Diseñamos sistemas automatizados que se integran de forma fluida con los equipos existentes.\n\nImplementamos soluciones de gestión de Líneas productivas para mejorar el flujo de trabajo y maximizar la productividad.',
    image: '/images/service-automatizacion.png',
  },
  {
    id: 4,
    title: 'Asistencia técnica y mantenimiento',
    description: 'Acompañamos a nuestros clientes durante todo el ciclo de vida del proyecto.\n\nOfrecemos soporte técnico, mantenimiento preventivo y actualizaciones para garantizar la continuidad y eficiencia de la producción.',
    image: '/images/service-asistencia.png',
  },
];

export default function ServiceAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full flex flex-col gap-5">
      {services.map((service, index) => {
        const isActive = activeIndex === index;

        return (
          <div
            key={service.id}
            onClick={() => setActiveIndex(index)}
            className={`rounded-[20px] border border-white/10 cursor-pointer overflow-hidden transition-colors duration-300 ${
              isActive ? 'bg-primary' : 'bg-primary/60'
            }`}
          >
            {/* Collapsed State - Just Title */}
            {!isActive && (
              <div className="flex items-center px-6 lg:px-[25px] h-[86px]">
                <h3 className="text-white font-bold text-[20px] md:text-[28px] lg:text-[32px] leading-[26px] md:leading-[34px] lg:leading-[38px]">
                  {service.title}
                </h3>
              </div>
            )}

            {/* Expanded State - Full Content */}
            {isActive && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {/* Desktop: side-by-side layout with fixed height */}
                <div className="relative lg:h-[280px]">
                  {/* Content */}
                  <div className="flex flex-col gap-[26px] p-6 lg:p-[30px] w-full lg:w-[692px]">
                    <h3 className="text-white font-bold text-[24px] md:text-[28px] lg:text-[32px] leading-[30px] md:leading-[34px] lg:leading-[38px]">
                      {service.title}
                    </h3>
                    <p className="text-white text-[14px] md:text-[16px] leading-[20px] md:leading-[22px] whitespace-pre-line">
                      {service.description}
                    </p>
                  </div>

                  {/* Image - Mobile: below content, Desktop: absolute right */}
                  <div className="relative w-full h-[200px] md:h-[240px] lg:absolute lg:right-0 lg:top-0 lg:w-[453px] lg:h-full rounded-b-[20px] lg:rounded-b-none lg:rounded-r-[20px] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        );
      })}
    </div>
  );
}
