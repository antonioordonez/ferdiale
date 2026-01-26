'use client';

import { motion } from 'framer-motion';

const values = [
  {
    title: 'Experiencia Multidisciplinar',
    description: 'Combinamos conocimiento técnico, creatividad y especialización para desarrollar soluciones a medida.',
  },
  {
    title: 'Soluciones de Principio a Fin',
    description: 'Acompañamos cada proyecto desde la idea inicial hasta su puesta en marcha, cuidando cada fase.',
  },
  {
    title: 'Sistemas Fiables y Eficientes',
    description: 'Diseñamos soluciones que destacan por su innovación, pero también por su seguridad y estabilidad.',
  },
  {
    title: 'Colaboración Cercana',
    description: 'Trabajamos mano a mano con el cliente, con un trato cercano, personalizado y transparente en todo momento.',
  },
];

export default function AboutValues() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 md:px-10 lg:px-[100px]">
      <div className="max-w-[1240px] mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-16">
          {/* Video/Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[503px] shrink-0"
          >
            <div className="relative w-full h-[400px] md:h-[550px] lg:h-[760px] rounded-[20px] overflow-hidden bg-dark">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/videos/hero-video.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>

          {/* Content */}
          <div className="flex-1">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-dark text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-[38px] md:leading-[46px] lg:leading-[52px] mb-8 lg:mb-10"
            >
              En Ferdiale entendemos que cada planta es única.
            </motion.h2>

            {/* Values List */}
            <div className="border-t border-text/30">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="py-6 lg:py-8 border-b border-text/30"
                >
                  <h3 className="text-dark text-[24px] md:text-[28px] lg:text-[32px] font-bold leading-[30px] md:leading-[34px] lg:leading-[38px] mb-2">
                    {value.title}
                  </h3>
                  <p className="text-text text-[16px] leading-[22px]">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
