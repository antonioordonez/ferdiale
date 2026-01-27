'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from './Button';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 px-6 md:px-10 lg:px-[100px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="shrink-0"
          >
            <Image
              src="/images/logo-ferdiale.png"
              alt="Ferdiale"
              width={209}
              height={42}
              className="w-[150px] md:w-[209px]"
            />
          </motion.div>

          {/* Content */}
          <div className="flex-1 max-w-[829px]">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-dark text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-[38px] md:leading-[46px] lg:leading-[52px] mb-8 md:mb-10"
            >
              Diseñamos, fabricamos y automatizamos sistemas de transporte para Líneas de envasado y embotellado.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-text text-[16px] leading-[22px] mb-8 md:mb-10"
            >
              Combinamos tecnología, experiencia e innovación para ofrecer soluciones eficientes y seguras, adaptadas a las necesidades de cada cliente.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button href="/sobre-ferdiale" variant="primary">
                Más Sobre Nosotros
              </Button>
            </motion.div>

            {/* Cards */}
            <div className="grid md:grid-cols-2 gap-6 mt-12 md:mt-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-light-blue rounded-[20px] p-8 md:p-10 flex flex-col justify-between min-h-[350px] md:min-h-[398px]"
              >
                <h3 className="text-dark text-[28px] md:text-[32px] font-bold leading-[34px] md:leading-[38px]">
                  Nuestro compromiso
                </h3>
                <p className="text-dark text-[16px] leading-[22px]">
                  Optimizar los procesos productivos con equipos a medida, integraciones precisas y un servicio cercano que garantiza rendimiento, fiabilidad y tranquilidad en cada proyecto.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-light-blue rounded-[20px] p-8 md:p-10 flex flex-col justify-between min-h-[350px] md:min-h-[398px]"
              >
                <h3 className="text-dark text-[28px] md:text-[32px] font-bold leading-[34px] md:leading-[38px]">
                  Nuestro objetivo
                </h3>
                <p className="text-dark text-[16px] leading-[22px]">
                  Queremos ser tu socio tecnológico de confianza en el crecimiento y automatización de tu Línea de producción.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
