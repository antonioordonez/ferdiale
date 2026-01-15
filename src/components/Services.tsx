import Button from "./Button";

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
    <section id="servicios" className="bg-primario px-[100px] py-[100px]">
      <div className="flex items-start justify-between">
        {/* Left sidebar - sticky */}
        <div className="sticky top-[120px] flex flex-col gap-7">
          {/* Section label */}
          <div className="flex items-center gap-3">
            <div className="h-px w-[30px] bg-white" />
            <span className="text-[16px] leading-[22px] text-white">
              Nuestros Servicios
            </span>
          </div>

          <p className="w-[252px] text-[16px] leading-[22px] text-white">
            Optimiza tu Línea de envasado con soluciones de ingeniería hechas
            para durar.
          </p>

          <Button variant="white" href="#contacto">
            Háblanos de tu proyecto
          </Button>
        </div>

        {/* Right content - cards */}
        <div className="max-w-[811px] flex-1">
          {/* Heading */}
          <h2 className="mb-20 text-[48px] font-bold leading-[52px] text-white">
            Ingeniería que impulsa tu productividad.
          </h2>

          {/* Service cards */}
          <div className="flex flex-col gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="sticky top-[120px] rounded-[20px] border border-white/30 bg-oscuro p-10"
              >
                <h3 className="mb-5 text-[32px] font-bold leading-[38px] text-white">
                  {service.title}
                </h3>

                <div className="mb-5 space-y-4">
                  {service.description.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-[16px] leading-[22px] text-white"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Tags */}
                <div className="mb-8 flex flex-wrap gap-[15px]">
                  {service.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="rounded-full bg-white/20 px-[17px] py-[11px] text-[16px] leading-[22px] text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button variant="white" href="#">
                  Más detalles
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
