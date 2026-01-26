import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Aviso Legal',
  description: 'Aviso legal y condiciones de uso del sitio web de Ferdiale Ingeniería S.L. Información sobre propiedad intelectual, responsabilidad y legislación aplicable.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/aviso-legal',
  },
};

export default function AvisoLegal() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <article className="pt-[85px]">
        <div className="max-w-[900px] mx-auto px-6 md:px-10 py-16 md:py-24">
          <h1 className="text-dark text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-tight mb-8">
            Aviso Legal
          </h1>

          <div className="prose prose-lg max-w-none text-text">
            <p className="text-[14px] text-text/60 mb-8">
              Última actualización: Enero 2025
            </p>

            <section className="mb-10">
              <h2 className="text-dark text-[24px] font-bold mb-4">1. Datos identificativos</h2>
              <p className="mb-4">
                En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE), se informa de los siguientes datos:
              </p>
              <ul className="list-none space-y-2 bg-secondary/10 p-6 rounded-[20px]">
                <li><strong>Titular:</strong> FERDIALE INGENIERIA, S.L.</li>
                <li><strong>CIF:</strong> B87711040</li>
                <li><strong>Domicilio social:</strong> Parque Empresarial Oeste, C/ Jardinería, 10 - 11408 Jerez de la Frontera (Cádiz)</li>
                <li><strong>Email:</strong> info@ferdiale.com</li>
                <li><strong>Teléfono:</strong> 911 26 38 30</li>
                <li><strong>Actividad:</strong> Diseño, fabricación y automatización de sistemas de transporte para líneas de envasado</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-dark text-[24px] font-bold mb-4">2. Objeto</h2>
              <p className="mb-4">
                El presente Aviso Legal regula el uso del sitio web <strong>ferdiale.com</strong> (en adelante, el «Sitio Web»), del que es titular FERDIALE INGENIERIA, S.L. (en adelante, «FERDIALE»).
              </p>
              <p>
                La navegación por el Sitio Web atribuye la condición de usuario del mismo e implica la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal, que pueden sufrir modificaciones.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-dark text-[24px] font-bold mb-4">3. Propiedad intelectual e industrial</h2>
              <p className="mb-4">
                Todos los contenidos del Sitio Web, incluyendo, sin carácter limitativo, textos, fotografías, gráficos, imágenes, iconos, tecnología, software, enlaces y demás contenidos audiovisuales, así como su diseño gráfico y códigos fuente, son propiedad intelectual de FERDIALE o de terceros, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación reconocidos por la normativa vigente en materia de propiedad intelectual.
              </p>
              <p className="mb-4">
                Las marcas, nombres comerciales o signos distintivos son titularidad de FERDIALE o de terceros, sin que pueda entenderse que el acceso al Sitio Web atribuya ningún derecho sobre las citadas marcas, nombres comerciales y/o signos distintivos.
              </p>
              <p>
                Queda prohibida la reproducción, transformación, distribución, comunicación pública, puesta a disposición del público y, en general, cualquier otra forma de explotación, parcial o total de los elementos referidos en el apartado anterior. La infracción de estos derechos puede constituir un delito contra la propiedad intelectual e industrial.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-dark text-[24px] font-bold mb-4">4. Condiciones de uso</h2>
              <p className="mb-4">El usuario se compromete a:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Hacer un uso adecuado y lícito del Sitio Web y de los contenidos, de conformidad con la legislación aplicable, el presente Aviso Legal, las buenas costumbres y el orden público.</li>
                <li>No realizar actividades publicitarias o de explotación comercial remitiendo mensajes que utilicen una identidad falsa.</li>
                <li>No introducir o difundir contenidos o propaganda de carácter racista, xenófobo, pornográfico, de apología del terrorismo o que atenten contra los derechos humanos.</li>
                <li>No provocar daños en los sistemas físicos y lógicos del Sitio Web, de sus proveedores o de terceras personas.</li>
                <li>No introducir ni difundir en la red virus informáticos o cualesquiera otros sistemas que sean susceptibles de causar daños.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-dark text-[24px] font-bold mb-4">5. Exclusión de responsabilidad</h2>
              <p className="mb-4">
                FERDIALE no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del Sitio Web o la transmisión de virus o programas maliciosos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
              </p>
              <p>
                FERDIALE se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su Sitio Web, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-dark text-[24px] font-bold mb-4">6. Enlaces</h2>
              <p className="mb-4">
                En el caso de que en el Sitio Web se incluyesen enlaces o hipervínculos hacia otros sitios de Internet, FERDIALE no ejercerá ningún tipo de control sobre dichos sitios y contenidos. En ningún caso FERDIALE asumirá responsabilidad alguna por los contenidos de algún enlace perteneciente a un sitio web ajeno, ni garantizará la disponibilidad técnica, calidad, fiabilidad, exactitud, amplitud, veracidad, validez y constitucionalidad de cualquier material o información contenida en dichos hipervínculos u otros sitios de Internet.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-dark text-[24px] font-bold mb-4">7. Protección de datos</h2>
              <p className="mb-4">
                FERDIALE se compromete al cumplimiento de la normativa vigente en materia de protección de datos personales, reflejada en el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016 (RGPD) y en la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPD-GDD).
              </p>
              <p>
                Para más información sobre el tratamiento de sus datos personales, consulte nuestra{' '}
                <a href="/privacidad" className="text-primary hover:underline">Política de Privacidad</a>.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-dark text-[24px] font-bold mb-4">8. Legislación aplicable y jurisdicción</h2>
              <p className="mb-4">
                La relación entre FERDIALE y el usuario se regirá por la normativa española vigente. Para la resolución de cualquier controversia que pudiera derivarse del acceso al Sitio Web, FERDIALE y el usuario acuerdan someterse expresamente a los Juzgados y Tribunales de Jerez de la Frontera (Cádiz), con renuncia expresa a cualquier otro fuero que pudiera corresponderles.
              </p>
            </section>

            <section>
              <h2 className="text-dark text-[24px] font-bold mb-4">9. Contacto</h2>
              <p>
                Para cualquier consulta relacionada con este Aviso Legal, puede contactar con nosotros a través del correo electrónico{' '}
                <a href="mailto:info@ferdiale.com" className="text-primary hover:underline">info@ferdiale.com</a>{' '}
                o en la dirección postal indicada en el apartado de datos identificativos.
              </p>
            </section>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
