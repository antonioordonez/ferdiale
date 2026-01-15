import Button from "./Button";

const reasons = [
  {
    title: "Experiencia que marca la diferencia",
    description:
      "Contamos con una sólida trayectoria en el desarrollo de Líneas de envasado y sistemas de transporte para el sector alimentario y de bebidas, aplicando todo nuestro conocimiento para ofrecer soluciones fiables y duraderas.",
  },
  {
    title: "Innovación constante",
    description:
      "Apostamos por la tecnología y la mejora continua. Incorporamos sistemas de automatización avanzados y un enfoque de ingeniería flexible que nos permite adaptarnos a las necesidades de cada proyecto, por complejo que sea.",
  },
  {
    title: "Calidad y fiabilidad",
    description:
      "Cada componente se diseña y fabrica con los más altos estándares de calidad. Nuestros equipos están pensados para funcionar de forma estable y segura, reduciendo tiempos de parada y optimizando el rendimiento de la línea.",
  },
  {
    title: "Cercanía y compromiso",
    description:
      "Nos implicamos en cada proyecto como si fuera propio. Escuchamos, asesoramos y acompañamos a nuestros clientes en cada etapa, construyendo relaciones basadas en la transparencia, la confianza y el servicio continuo.",
  },
];

export default function WhyUs() {
  return (
    <section className="px-[100px] py-[100px]">
      {/* Header */}
      <div className="mb-[60px] flex items-center justify-between">
        <div className="max-w-[689px]">
          <h2 className="mb-[15px] text-[48px] font-bold leading-[52px] text-oscuro">
            Tu socio tecnológico en soluciones de transporte y automatización.
          </h2>
          <div className="space-y-4 text-[16px] leading-[22px] text-texto">
            <p>
              En FERDIALE INGENIERÍA, S.L. no solo diseñamos equipos, diseñamos
              confianza. Cada proyecto nace del compromiso con nuestros clientes,
              la excelencia técnica y una visión clara: hacer que los procesos
              sean más eficientes, seguros y rentables.
            </p>
            <p>Elige una Ingeniería que entiende tu negocio.</p>
          </div>
        </div>

        <Button variant="dark" href="#contacto">
          Contáctanos
        </Button>
      </div>

      {/* Cards */}
      <div className="flex justify-end gap-6">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="w-[292px] rounded-[10px] bg-primario-light px-5 py-[30px]"
          >
            <h3 className="mb-5 text-[24px] font-bold leading-[30px] text-oscuro">
              {reason.title}
            </h3>
            <p className="text-[16px] leading-[22px] text-oscuro">
              {reason.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
