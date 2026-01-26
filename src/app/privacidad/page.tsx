import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Política de privacidad de Ferdiale Ingeniería S.L. Información sobre tratamiento de datos personales conforme al RGPD y LOPD-GDD.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/privacidad',
  },
};

export default function Privacidad() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <article className="pt-[85px]">
        <div className="max-w-[900px] mx-auto px-6 md:px-10 py-16 md:py-24">
          <h1 className="text-dark text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-tight mb-8">
            Política de Privacidad
          </h1>

          <div className="prose prose-lg max-w-none text-text">
            <p className="text-[14px] text-text/60 mb-8">
              Última actualización: Enero 2025
            </p>

            <section className="mb-10">
              <h2 className="text-dark text-[24px] font-bold mb-4">1. Responsable del tratamiento</h2>
              <ul className="list-none space-y-2 bg-secondary/10 p-6 rounded-[20px]">
                <li><strong>Identidad:</strong> FERDIALE INGENIERIA, S.L.</li>
                <li><strong>CIF:</strong> B87711040</li>
                <li><strong>Dirección:</strong> Parque Empresarial Oeste, C/ Jardinería, 10 - 11408 Jerez de la Frontera (Cádiz)</li>
                <li><strong>Email:</strong> info@ferdiale.com</li>
                <li><strong>Teléfono:</strong> 911 26 38 30</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-dark text-[24px] font-bold mb-4">2. Datos que recopilamos</h2>
              <p className="mb-4">
                En FERDIALE INGENIERIA, S.L. (en adelante, «FERDIALE») tratamos los datos personales que nos facilita voluntariamente a través de:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Formularios de contacto:</strong> nombre, apellidos, empresa, cargo, email y mensaje.</li>
                <li><strong>Comunicaciones por email:</strong> dirección de correo electrónico y contenido del mensaje.</li>
                <li><strong>Datos de navegación:</strong> dirección IP, tipo de navegador, páginas visitadas y tiempo de permanencia (mediante cookies).</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-dark text-[24px] font-bold mb-4">3. Finalidad del tratamiento</h2>
              <p className="mb-4">Sus datos personales serán tratados con las siguientes finalidades:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Gestionar las consultas y solicitudes de información que nos remita a través del formulario de contacto.</li>
                <li>Enviar comunicaciones comerciales sobre nuestros productos y servicios, siempre que haya prestado su consentimiento.</li>
                <li>Elaborar presupuestos y propuestas comerciales a petición del interesado.</li>
                <li>Mantener la relación comercial o contractual que pudiera derivarse.</li>
                <li>Mejorar la experiencia de navegación y el funcionamiento del sitio web.</li>
                <li>Cumplir con las obligaciones legales que nos sean aplicables.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-dark text-[24px] font-bold mb-4">4. Legitimación del tratamiento</h2>
              <p className="mb-4">La base legal para el tratamiento de sus datos es:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Consentimiento del interesado:</strong> al enviar el formulario de contacto o suscribirse a comunicaciones comerciales (art. 6.1.a RGPD).</li>
                <li><strong>Ejecución de un contrato:</strong> cuando el tratamiento sea necesario para la elaboración de presupuestos o la prestación de servicios solicitados (art. 6.1.b RGPD).</li>
                <li><strong>Interés legítimo:</strong> para la mejora de nuestros servicios y la prevención del fraude (art. 6.1.f RGPD).</li>
                <li><strong>Cumplimiento de obligaciones legales:</strong> en relación con la normativa fiscal, mercantil y otras que resulten aplicables (art. 6.1.c RGPD).</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-dark text-[24px] font-bold mb-4">5. Plazo de conservación</h2>
              <p className="mb-4">
                Los datos personales se conservarán mientras se mantenga la relación comercial o durante el tiempo necesario para cumplir con las obligaciones legales. Una vez finalizada la relación, los datos serán bloqueados durante los plazos de prescripción legal aplicables:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Datos de clientes y proveedores: 6 años (Código de Comercio).</li>
                <li>Datos fiscales: 4 años (Ley General Tributaria).</li>
                <li>Datos de consultas: 3 años desde la última comunicación.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-dark text-[24px] font-bold mb-4">6. Destinatarios de los datos</h2>
              <p className="mb-4">
                Sus datos personales no serán cedidos a terceros, salvo obligación legal. No obstante, podrán tener acceso a sus datos los siguientes encargados del tratamiento:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Proveedores de servicios de hosting y alojamiento web.</li>
                <li>Proveedores de servicios de correo electrónico.</li>
                <li>Asesores fiscales, laborales y legales, en cumplimiento de obligaciones legales.</li>
              </ul>
              <p>
                Todos nuestros proveedores han suscrito los correspondientes contratos de encargo del tratamiento, garantizando el cumplimiento del RGPD.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-dark text-[24px] font-bold mb-4">7. Transferencias internacionales</h2>
              <p className="mb-4">
                Algunos de nuestros proveedores de servicios pueden estar ubicados fuera del Espacio Económico Europeo. En estos casos, nos aseguramos de que existan garantías adecuadas para la protección de sus datos, tales como:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Decisiones de adecuación de la Comisión Europea.</li>
                <li>Cláusulas contractuales tipo aprobadas por la Comisión Europea.</li>
                <li>Certificaciones de marcos de privacidad reconocidos.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-dark text-[24px] font-bold mb-4">8. Derechos del interesado</h2>
              <p className="mb-4">
                De acuerdo con el RGPD y la LOPD-GDD, usted tiene derecho a:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Acceso:</strong> conocer qué datos personales tratamos sobre usted.</li>
                <li><strong>Rectificación:</strong> solicitar la corrección de datos inexactos o incompletos.</li>
                <li><strong>Supresión:</strong> solicitar la eliminación de sus datos cuando ya no sean necesarios.</li>
                <li><strong>Oposición:</strong> oponerse al tratamiento de sus datos en determinadas circunstancias.</li>
                <li><strong>Limitación:</strong> solicitar la limitación del tratamiento en determinados supuestos.</li>
                <li><strong>Portabilidad:</strong> recibir sus datos en un formato estructurado y de uso común.</li>
                <li><strong>Retirar el consentimiento:</strong> en cualquier momento, sin que ello afecte a la licitud del tratamiento previo.</li>
              </ul>
              <p className="mb-4">
                Para ejercer estos derechos, puede dirigirse a nosotros mediante:
              </p>
              <ul className="list-none space-y-2 bg-secondary/10 p-6 rounded-[20px] mb-4">
                <li><strong>Email:</strong> info@ferdiale.com</li>
                <li><strong>Correo postal:</strong> FERDIALE INGENIERIA, S.L. - Parque Empresarial Oeste, C/ Jardinería, 10 - 11408 Jerez de la Frontera (Cádiz)</li>
              </ul>
              <p>
                Asimismo, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) si considera que sus derechos no han sido debidamente atendidos:{' '}
                <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.aepd.es</a>
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-dark text-[24px] font-bold mb-4">9. Medidas de seguridad</h2>
              <p className="mb-4">
                FERDIALE ha adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad de los datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado, teniendo en cuenta el estado de la tecnología, la naturaleza de los datos almacenados y los riesgos a que están expuestos.
              </p>
              <p>
                Entre otras, se han implementado medidas como: cifrado de comunicaciones (SSL/TLS), control de accesos, copias de seguridad periódicas, y formación del personal en materia de protección de datos.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-dark text-[24px] font-bold mb-4">10. Modificaciones de la política</h2>
              <p>
                FERDIALE se reserva el derecho a modificar la presente Política de Privacidad para adaptarla a novedades legislativas o jurisprudenciales, así como a prácticas de la industria. En dichos supuestos, se anunciará en esta página los cambios introducidos con razonable antelación a su puesta en práctica.
              </p>
            </section>

            <section>
              <h2 className="text-dark text-[24px] font-bold mb-4">11. Contacto</h2>
              <p>
                Para cualquier consulta relacionada con el tratamiento de sus datos personales, puede contactar con nosotros a través del correo electrónico{' '}
                <a href="mailto:info@ferdiale.com" className="text-primary hover:underline">info@ferdiale.com</a>.
              </p>
            </section>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
