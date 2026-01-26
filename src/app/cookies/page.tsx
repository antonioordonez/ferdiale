import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Política de Cookies',
  description: 'Política de cookies de Ferdiale Ingeniería S.L. Información sobre tipos de cookies, finalidades y cómo gestionarlas según la normativa LSSI-CE.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/cookies',
  },
};

export default function Cookies() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <article className="pt-[85px]">
        <div className="max-w-[900px] mx-auto px-6 md:px-10 py-16 md:py-24">
          <h1 className="text-dark text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-tight mb-8">
            Política de Cookies
          </h1>

          <div className="prose prose-lg max-w-none text-text">
            <p className="text-[14px] text-text/60 mb-8">
              Última actualización: Enero 2025
            </p>

            <section className="mb-10">
              <h2 className="text-dark text-[24px] font-bold mb-4">1. ¿Qué son las cookies?</h2>
              <p className="mb-4">
                Las cookies son pequeños archivos de texto que los sitios web almacenan en su dispositivo (ordenador, tablet o móvil) cuando los visita. Estas cookies permiten que el sitio web recuerde sus acciones y preferencias (como inicio de sesión, idioma, tamaño de fuente y otras preferencias de visualización) durante un período de tiempo, para que no tenga que volver a introducirlas cada vez que vuelva al sitio o navegue de una página a otra.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-dark text-[24px] font-bold mb-4">2. ¿Quién utiliza las cookies?</h2>
              <ul className="list-none space-y-2 bg-secondary/10 p-6 rounded-[20px]">
                <li><strong>Responsable:</strong> FERDIALE INGENIERIA, S.L.</li>
                <li><strong>CIF:</strong> B87711040</li>
                <li><strong>Dirección:</strong> Parque Empresarial Oeste, C/ Jardinería, 10 - 11408 Jerez de la Frontera (Cádiz)</li>
                <li><strong>Email:</strong> info@ferdiale.com</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-dark text-[24px] font-bold mb-4">3. Tipos de cookies que utilizamos</h2>

              <h3 className="text-dark text-[20px] font-bold mb-3 mt-6">3.1. Según su finalidad</h3>

              <div className="mb-6">
                <h4 className="text-dark text-[18px] font-bold mb-2">Cookies técnicas o necesarias</h4>
                <p className="mb-2">
                  Son aquellas que permiten al usuario la navegación a través del sitio web y la utilización de las diferentes opciones o servicios que en ella existen. Son imprescindibles para el funcionamiento del sitio web.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-text/20 text-[14px] mb-4">
                    <thead>
                      <tr className="bg-secondary/10">
                        <th className="border border-text/20 p-3 text-left">Cookie</th>
                        <th className="border border-text/20 p-3 text-left">Finalidad</th>
                        <th className="border border-text/20 p-3 text-left">Duración</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-text/20 p-3">cookieConsent</td>
                        <td className="border border-text/20 p-3">Almacena las preferencias de cookies del usuario</td>
                        <td className="border border-text/20 p-3">1 año</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-dark text-[18px] font-bold mb-2">Cookies analíticas</h4>
                <p className="mb-2">
                  Son aquellas que permiten realizar el seguimiento y análisis del comportamiento de los usuarios del sitio web. La información recogida se utiliza para medir la actividad del sitio web y elaborar perfiles de navegación con el fin de introducir mejoras.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-text/20 text-[14px] mb-4">
                    <thead>
                      <tr className="bg-secondary/10">
                        <th className="border border-text/20 p-3 text-left">Cookie</th>
                        <th className="border border-text/20 p-3 text-left">Proveedor</th>
                        <th className="border border-text/20 p-3 text-left">Finalidad</th>
                        <th className="border border-text/20 p-3 text-left">Duración</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-text/20 p-3">_ga</td>
                        <td className="border border-text/20 p-3">Google Analytics</td>
                        <td className="border border-text/20 p-3">Distinguir usuarios únicos</td>
                        <td className="border border-text/20 p-3">2 años</td>
                      </tr>
                      <tr>
                        <td className="border border-text/20 p-3">_ga_*</td>
                        <td className="border border-text/20 p-3">Google Analytics</td>
                        <td className="border border-text/20 p-3">Mantener el estado de la sesión</td>
                        <td className="border border-text/20 p-3">2 años</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-dark text-[18px] font-bold mb-2">Cookies de marketing</h4>
                <p className="mb-2">
                  Son aquellas que permiten gestionar los espacios publicitarios y mostrar publicidad personalizada según el perfil de navegación del usuario.
                </p>
                <p className="text-[14px] italic">
                  Actualmente no utilizamos cookies de marketing en nuestro sitio web.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-dark text-[18px] font-bold mb-2">Cookies de preferencias</h4>
                <p className="mb-2">
                  Son aquellas que permiten recordar información para que el usuario acceda al servicio con determinadas características que pueden diferenciar su experiencia de la de otros usuarios.
                </p>
                <p className="text-[14px] italic">
                  Actualmente no utilizamos cookies de preferencias adicionales en nuestro sitio web.
                </p>
              </div>

              <h3 className="text-dark text-[20px] font-bold mb-3 mt-6">3.2. Según su titularidad</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Cookies propias:</strong> son aquellas que se envían al equipo terminal del usuario desde nuestros propios servidores.</li>
                <li><strong>Cookies de terceros:</strong> son aquellas que se envían al equipo terminal del usuario desde un equipo o dominio que no es gestionado por nosotros, sino por otra entidad que trata los datos obtenidos a través de las cookies.</li>
              </ul>

              <h3 className="text-dark text-[20px] font-bold mb-3 mt-6">3.3. Según su duración</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Cookies de sesión:</strong> son aquellas diseñadas para recabar y almacenar datos mientras el usuario accede a una página web. Se suelen emplear para almacenar información que solo interesa conservar para la prestación del servicio solicitado por el usuario en una sola ocasión.</li>
                <li><strong>Cookies persistentes:</strong> son aquellas en las que los datos siguen almacenados en el terminal y pueden ser accedidos y tratados durante un período definido por el responsable de la cookie.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-dark text-[24px] font-bold mb-4">4. ¿Cómo gestionar las cookies?</h2>
              <p className="mb-4">
                Puede configurar sus preferencias de cookies a través del banner que aparece al acceder a nuestro sitio web por primera vez, o en cualquier momento a través de la configuración de su navegador.
              </p>

              <h3 className="text-dark text-[20px] font-bold mb-3 mt-6">Configuración en navegadores</h3>
              <p className="mb-4">
                La mayoría de los navegadores permiten gestionar las preferencias de cookies. A continuación, le indicamos cómo hacerlo en los principales navegadores:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  <strong>Google Chrome:</strong>{' '}
                  <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Configuración de cookies en Chrome
                  </a>
                </li>
                <li>
                  <strong>Mozilla Firefox:</strong>{' '}
                  <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Configuración de cookies en Firefox
                  </a>
                </li>
                <li>
                  <strong>Safari:</strong>{' '}
                  <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Configuración de cookies en Safari
                  </a>
                </li>
                <li>
                  <strong>Microsoft Edge:</strong>{' '}
                  <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Configuración de cookies en Edge
                  </a>
                </li>
              </ul>
              <p className="mb-4">
                <strong>Importante:</strong> Si desactiva las cookies, es posible que algunas funcionalidades del sitio web no estén disponibles o no funcionen correctamente.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-dark text-[24px] font-bold mb-4">5. Base legal para el uso de cookies</h2>
              <p className="mb-4">
                La base legal para el tratamiento de datos a través de cookies es:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Cookies necesarias:</strong> interés legítimo del responsable (art. 6.1.f RGPD) para garantizar el correcto funcionamiento del sitio web.</li>
                <li><strong>Cookies analíticas y de marketing:</strong> consentimiento del usuario (art. 6.1.a RGPD), otorgado a través del banner de cookies.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-dark text-[24px] font-bold mb-4">6. Transferencias internacionales</h2>
              <p className="mb-4">
                Algunos de los terceros que instalan cookies en nuestro sitio web pueden transferir datos a países fuera del Espacio Económico Europeo. Puede consultar las políticas de privacidad de estos terceros para conocer las garantías aplicables:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  <strong>Google Analytics:</strong>{' '}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Política de privacidad de Google
                  </a>
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-dark text-[24px] font-bold mb-4">7. Actualización de la política</h2>
              <p>
                FERDIALE INGENIERIA, S.L. puede modificar esta Política de Cookies en función de exigencias legislativas, reglamentarias, o con la finalidad de adaptar dicha política a las instrucciones dictadas por la Agencia Española de Protección de Datos. Por ello, le aconsejamos que revise periódicamente esta política.
              </p>
            </section>

            <section>
              <h2 className="text-dark text-[24px] font-bold mb-4">8. Contacto</h2>
              <p>
                Para cualquier consulta sobre esta Política de Cookies, puede contactar con nosotros a través del correo electrónico{' '}
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
