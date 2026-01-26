'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
          <motion.div
            key={service.id}
            layout
            onClick={() => setActiveIndex(index)}
            className={`relative rounded-[20px] border border-white/10 cursor-pointer overflow-hidden ${
              isActive ? 'bg-primary' : 'bg-primary/60'
            }`}
            initial={false}
            animate={{
              height: isActive ? 280 : 86,
            }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Collapsed State - Just Title */}
            <AnimatePresence>
              {!isActive && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 flex items-center px-6 lg:px-[25px]"
                >
                  <h3 className="text-white font-bold text-[20px] md:text-[28px] lg:text-[32px] leading-[26px] md:leading-[34px] lg:leading-[38px]">
                    {service.title}
                  </h3>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Expanded State - Full Content */}
            <AnimatePresence>
              {isActive && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="absolute inset-0 flex"
                >
                  {/* Content */}
                  <div className="flex flex-col gap-[26px] p-6 lg:p-[30px] w-full lg:w-[692px]">
                    <h3 className="text-white font-bold text-[24px] md:text-[28px] lg:text-[32px] leading-[30px] md:leading-[34px] lg:leading-[38px]">
                      {service.title}
                    </h3>
                    <p className="text-white text-[14px] md:text-[16px] leading-[20px] md:leading-[22px] whitespace-pre-line">
                      {service.description}
                    </p>
                  </div>

                  {/* Image - Desktop only */}
                  <div className="hidden lg:block absolute right-0 top-0 w-[453px] h-full rounded-r-[20px] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
