'use client';

import { motion } from 'framer-motion';
import ServiceAccordion from './ServiceAccordion';

export default function ServicesHero() {
  return (
    <section className="pt-[85px] bg-white">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="pt-16 md:pt-20 lg:pt-[92px] pb-12 md:pb-16 lg:pb-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-dark text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-[38px] md:leading-[46px] lg:leading-[52px] mb-5"
          >
            Nuestros Servicios
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-text text-[16px] md:text-[18px] leading-[22px] max-w-[690px] mx-auto"
          >
            En FERDIALE INGENIERÍA, S.L., ofrecemos un servicio integral para acompañar al cliente en todas las etapas del proyecto: desde el análisis de las necesidades particulares, el diseño inicial hasta la instalación y mantenimiento de sistemas completos de transporte y automatización.
          </motion.p>
        </div>

        {/* Service Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pb-20 md:pb-28 lg:pb-36"
        >
          <ServiceAccordion />
        </motion.div>
      </div>
    </section>
  );
}
