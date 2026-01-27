'use client';

import { motion } from 'framer-motion';
import Button from './Button';

const features = [
  {
    id: 1,
    title: 'Experiencia que marca la diferencia',
    description: 'Contamos con una sólida trayectoria en el desarrollo de Líneas de envasado y sistemas de transporte para el sector alimentario y de bebidas, aplicando todo nuestro conocimiento para ofrecer soluciones fiables y duraderas.',
  },
  {
    id: 2,
    title: 'Innovación constante',
    description: 'Apostamos por la tecnología y la mejora continua. Incorporamos sistemas de automatización avanzados y un enfoque de ingeniería flexible que nos permite adaptarnos a las necesidades de cada proyecto, por complejo que sea.',
  },
  {
    id: 3,
    title: 'Calidad y fiabilidad',
    description: 'Cada componente se diseña y fabrica con los más altos estándares de calidad. Nuestros equipos están pensados para funcionar de forma estable y segura, reduciendo tiempos de parada y optimizando el rendimiento de la línea.',
  },
  {
    id: 4,
    title: 'Cercanía y compromiso',
    description: 'Nos implicamos en cada proyecto como si fuera propio. Escuchamos, asesoramos y acompañamos a nuestros clientes en cada etapa, construyendo relaciones basadas en la transparencia, la confianza y el servicio continuo.',
  },
];

export default function WhyUs() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 md:px-10 lg:px-[100px]">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-12 lg:mb-16">
          <div className="max-w-[713px]">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-dark text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-[38px] md:leading-[46px] lg:leading-[52px] mb-6"
            >
              Tu socio tecnológico en soluciones de transporte y automatización.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-text text-base leading-relaxed"
            >
              <p className="mb-4">
                En FERDIALE INGENIERÍA, S.L. no solo diseñamos equipos, diseñamos confianza. Cada proyecto nace del compromiso con nuestros clientes, la excelencia técnica y una visión clara: hacer que los procesos sean más eficientes, seguros y rentables.
              </p>
              <p>
                Elige una Ingeniería que entiende tu negocio.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button href="/contacto" variant="dark">
              Contáctanos
            </Button>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-light-blue rounded-[10px] p-6 md:p-8"
            >
              <h3 className="text-dark text-[20px] md:text-[22px] lg:text-[24px] font-bold leading-[26px] md:leading-[28px] lg:leading-[30px] mb-5">
                {feature.title}
              </h3>
              <p className="text-dark text-[16px] leading-[22px]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
