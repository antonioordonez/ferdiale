'use client';

import { motion } from 'framer-motion';
import Button from './Button';

const services = [
  {
    id: 1,
    title: 'Diseño e ingeniería a medida',
    description: `Analizamos cada necesidad para desarrollar soluciones personalizadas que se adapten a los procesos, espacios, forma de trabajo y objetivos de producción de cada cliente.

Apostamos por la innovación, el uso de tecnologías avanzadas y el diseño optimizado de cada componente.`,
    tags: ['Diseño personalizado', 'Innovación tecnológica', 'Asesoramiento al cliente'],
  },
  {
    id: 2,
    title: 'Fabricación y montaje',
    description: `Contamos con un equipo técnico especializado y medios propios para fabricar transportadores, mesas de acumulación, elevadores, descensores, sistemas de transferencia, etc. de alta calidad.

Cada proyecto se construye con precisión y materiales duraderos, asegurando un rendimiento óptimo en entornos exigentes.`,
    tags: ['Equipo especializado', 'Medios propios', 'Materiales de calidad'],
  },
  {
    id: 3,
    title: 'Automatización e integración',
    description: `Implementamos soluciones automatizadas con las que conseguimos un flujo continuo en la producción, gracias a la sincronización de todas las máquinas que conforman la Línea.

Hacemos crecer el OEE de tu Línea.`,
    tags: ['Automatización', 'Líneas de producción'],
  },
  {
    id: 4,
    title: 'Asistencia técnica y mantenimiento',
    description: `Acompañamos a nuestros clientes durante todo el ciclo de vida del proyecto.

Ofrecemos soporte técnico, mantenimiento preventivo y actualizaciones para garantizar la continuidad y eficiencia de la producción.`,
    tags: ['Soporte técnico', 'Mantenimiento', 'Acompañamiento'],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-primary py-16 md:py-24 lg:py-[100px] px-6 md:px-10 lg:px-[100px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Sidebar */}
          <div className="lg:w-[280px] shrink-0 lg:sticky lg:top-[120px] lg:self-start lg:h-fit">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-[30px] h-px bg-white" />
              <span className="text-white text-base">Nuestros Servicios</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white text-base leading-relaxed mb-8"
            >
              Optimiza tu Línea de producción con soluciones de Ingeniería a medida, que cubren tus necesidades.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button href="/contacto" variant="white">
                Háblanos de tu proyecto
              </Button>
            </motion.div>
          </div>

          {/* Services Cards with Stacking Effect */}
          <div className="flex-1 max-w-[811px]">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-white text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-[38px] md:leading-[46px] lg:leading-[52px] mb-12 lg:mb-20"
            >
              Ingeniería que impulsa tu productividad.
            </motion.h2>

            {/* Stacking Cards Container */}
            <div className="relative">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="sticky"
                  style={{
                    top: `${80 + index * 20}px`,
                    zIndex: index + 1,
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-dark rounded-[20px] p-6 md:p-8 lg:p-10 border border-white/30 mb-6 lg:mb-10 shadow-xl"
                  >
                    <h3 className="text-white text-[24px] md:text-[28px] lg:text-[32px] font-bold leading-[30px] md:leading-[34px] lg:leading-[38px] mb-5">
                      {service.title}
                    </h3>

                    <p className="text-white text-[16px] leading-[22px] mb-6 whitespace-pre-line">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-3 mb-8">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-white/20 text-white text-sm md:text-base px-4 py-2.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Button href={`/servicios#servicio-${service.id}`} variant="white">
                      Más detalles
                    </Button>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
