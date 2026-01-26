'use client';

import { motion } from 'framer-motion';
import ProductAccordion from './ProductAccordion';

export default function ProductsHero() {
  return (
    <section className="pt-[85px]">
      {/* Light Blue Background Header */}
      <div className="bg-primary/20 pt-16 md:pt-20 lg:pt-[89px] pb-16 md:pb-20 lg:pb-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12">
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-dark text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-[38px] md:leading-[46px] lg:leading-[52px] max-w-[652px]"
            >
              Nuestros Productos
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-dark text-[16px] md:text-[18px] leading-[22px] max-w-[516px]"
            >
              En FERDIALE INGENIERÍA, S.L. transformamos cada desafío en una oportunidad para innovar. Con una sólida experiencia en el diseño, desarrollo e implementación de Líneas de transporte y soluciones integrales de automatización, acompañamos a nuestros clientes en la optimización de sus procesos de envasado.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Product Accordion - On white background */}
      <div className="bg-white">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 pt-16 md:pt-20 lg:pt-24 pb-20 md:pb-28 lg:pb-36">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ProductAccordion />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
