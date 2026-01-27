'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import ProductAccordion from '@/components/products/ProductAccordion';
import ProductImageSlider from '@/components/products/ProductImageSlider';

const productData = {
  title: 'Sistemas sin presión',
  description: 'El sistema de acumulación sin presión para líneas de transporte de envases está especialmente diseñado para garantizar la fluidez y continuidad del proceso productivo.',
  sliderItems: [
    { type: 'video' as const, src: '/videos/sin-presion-hero.mp4', alt: 'Sistema sin presión Ferdiale - Vista general' },
    { type: 'video' as const, src: '/videos/sin-presion-slider-1.mp4', alt: 'Sistema sin presión Ferdiale - Funcionamiento' },
    { type: 'video' as const, src: '/videos/sin-presion-slider-2.mp4', alt: 'Sistema sin presión Ferdiale - Detalle' },
  ],
  enQueConsiste: {
    paragraphs: [
      'Su función principal es regular el flujo de envases entre las diferentes etapas del proceso productivo —llenado, tapado, etiquetado, encajonado y paletizado—, evitando cuellos de botella y paradas de Línea.',
      'Su funcionamiento permite desacoplar equipos con distintas velocidades de trabajo, manteniendo una acumulación controlada que optimiza la eficiencia global de la línea. Gracias a su arquitectura modular, puede adaptarse a diversos formatos de envases (botellas, latas, frascos,…) y configuraciones de transporte.',
      'Compatible con sistemas PLC, SCADA y MES, el sistema ofrece una comunicación fluida con la Línea de producción, asegurando un control preciso y una máxima eficiencia operativa. Fabricado con materiales de alta durabilidad y bajo mantenimiento, ofrece una solución fiable y robusta para Líneas de producción de alta exigencia.',
    ],
    beneficios: [
      'Continuidad del flujo de producción.',
      'Funcionamiento sin presión.',
      'Absorción de micro-paradas de máquinas.',
      'Reducción de paradas y tiempos muertos.',
      'Adaptabilidad a distintos formatos y velocidades.',
      'Integración total con sistemas de automatización.',
    ],
  },
  porQueFerdiale: [
    'En cada proyecto combinamos ingeniería de precisión, compromiso con el cliente y soluciones a medida que optimizan procesos reales.',
    'No solo diseñamos maquinaria: nos involucramos en cada etapa para garantizar que cada equipo funcione con eficiencia, fiabilidad y durabilidad. Elegirnos es apostar por una experiencia cercana, técnica y enfocada en resultados tangibles.',
  ],
};

const formFields = [
  { name: 'nombre', label: 'Nombre', type: 'text', required: true },
  { name: 'apellidos', label: 'Apellidos', type: 'text', required: true },
  { name: 'empresa', label: 'Empresa', type: 'text', required: true },
  { name: 'cargo', label: 'Cargo', type: 'text', required: true },
] as const;

const initialFormState = {
  nombre: '',
  apellidos: '',
  empresa: '',
  cargo: '',
  mensaje: '',
  privacidad: false,
};

// Breadcrumb component with Schema.org markup
function Breadcrumb() {
  const items = [
    { label: 'Inicio', href: '/' },
    { label: 'Productos', href: '/productos' },
    { label: productData.title, href: null },
  ];

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol
        className="flex flex-wrap items-center gap-2 text-[14px]"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {items.map((item, index) => (
          <li
            key={item.label}
            className="flex items-center gap-2"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            {item.href ? (
              <Link
                href={item.href}
                className="text-primary hover:text-primary/80 transition-colors"
                itemProp="item"
              >
                <span itemProp="name">{item.label}</span>
              </Link>
            ) : (
              <span className="text-text" itemProp="name" aria-current="page">
                {item.label}
              </span>
            )}
            <meta itemProp="position" content={String(index + 1)} />
            {index < items.length - 1 && (
              <span className="text-text/50" aria-hidden="true">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

// Reusable form field component
function FormField({
  name,
  label,
  type,
  required,
  value,
  onChange,
}: {
  name: string;
  label: string;
  type: string;
  required: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const inputId = `contact-${name}`;

  return (
    <div className="flex flex-col gap-[5px]">
      <label htmlFor={inputId} className="text-dark text-[16px] leading-[22px]">
        {label}{required && '*'}
      </label>
      <input
        id={inputId}
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        autoComplete={name === 'empresa' ? 'organization' : name}
        className="h-[54px] bg-white rounded-[10px] px-4 text-dark text-[16px] focus:outline-none focus:ring-2 focus:ring-primary/30"
      />
    </div>
  );
}

export default function SistemasSinPresion() {
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          producto: productData.title,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar el mensaje');
      }

      setSubmitStatus('success');
      setFormData(initialFormState);
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Error al enviar el mensaje');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-[85px]" aria-labelledby="product-title">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 pt-12 md:pt-16 lg:pt-[80px]">
          <Breadcrumb />

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 flex flex-col justify-center lg:max-w-[473px]"
            >
              <h1
                id="product-title"
                className="text-dark text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-[38px] md:leading-[46px] lg:leading-[52px] mb-6 lg:mb-8"
              >
                {productData.title}
              </h1>
              <p className="text-text text-[16px] leading-[22px] mb-6 lg:mb-8">
                {productData.description}
              </p>
              <div>
                <Button href="/contacto" variant="primary">
                  Contacto
                </Button>
              </div>
            </motion.div>

            {/* Right: Video Slider */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-full lg:flex-1 h-[300px] md:h-[400px] lg:h-[550px] relative rounded-[20px] overflow-hidden"
            >
              <ProductImageSlider items={productData.sliderItems} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16 lg:py-20" aria-labelledby="features-title">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10">
          <div className="border-t border-text/30 pt-12 md:pt-16 lg:pt-20">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
              {/* Left: Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex-1 lg:max-w-[702px]"
              >
                {/* En qué consiste */}
                <article className="mb-12 lg:mb-16">
                  <h2
                    id="features-title"
                    className="text-dark text-[28px] md:text-[32px] lg:text-[36px] font-bold leading-[34px] md:leading-[38px] lg:leading-[40px] mb-5"
                  >
                    En qué consiste
                  </h2>
                  <div className="text-text text-[16px] leading-[22px] space-y-4 mb-5">
                    {productData.enQueConsiste.paragraphs.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="text-text text-[16px] leading-[22px]">
                    <p className="font-bold mb-2">Beneficios clave:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      {productData.enQueConsiste.beneficios.map((beneficio, index) => (
                        <li key={index}>{beneficio}</li>
                      ))}
                    </ul>
                  </div>
                </article>

                {/* ¿Por qué Ferdiale? */}
                <article aria-labelledby="why-ferdiale">
                  <h2
                    id="why-ferdiale"
                    className="text-dark text-[28px] md:text-[32px] lg:text-[36px] font-bold leading-[34px] md:leading-[38px] lg:leading-[40px] mb-5"
                  >
                    ¿Por qué Ferdiale?
                  </h2>
                  <div className="text-text text-[16px] leading-[22px] space-y-4">
                    {productData.porQueFerdiale.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              </motion.div>

              {/* Right: Form */}
              <motion.aside
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full lg:w-[380px] shrink-0"
                aria-labelledby="contact-form-title"
              >
                <h3 id="contact-form-title" className="sr-only">
                  Formulario de contacto para {productData.title}
                </h3>
                <form
                  onSubmit={handleSubmit}
                  className="bg-secondary/10 rounded-[40px] p-6 lg:p-[25px]"
                  noValidate
                >
                  <fieldset className="flex flex-col gap-[15px]">
                    <legend className="sr-only">Datos de contacto</legend>

                    {formFields.map((field) => (
                      <FormField
                        key={field.name}
                        name={field.name}
                        label={field.label}
                        type={field.type}
                        required={field.required}
                        value={formData[field.name as keyof typeof formData] as string}
                        onChange={handleChange}
                      />
                    ))}

                    {/* Mensaje */}
                    <div className="flex flex-col gap-[5px]">
                      <label htmlFor="contact-mensaje" className="text-dark text-[16px] leading-[22px]">
                        Mensaje*
                      </label>
                      <textarea
                        id="contact-mensaje"
                        name="mensaje"
                        required
                        value={formData.mensaje}
                        onChange={handleChange}
                        rows={6}
                        className="h-[154px] bg-white rounded-[10px] px-4 py-3 text-dark text-[16px] resize-none focus:outline-none focus:ring-2 focus:ring-primary/30"
                      />
                    </div>

                    {/* Checkbox y botón */}
                    <div className="flex flex-col gap-[25px]">
                      <div className="flex items-start gap-[10px]">
                        <input
                          id="contact-privacidad"
                          type="checkbox"
                          name="privacidad"
                          checked={formData.privacidad}
                          onChange={handleChange}
                          required
                          className="w-4 h-4 mt-1 border border-primary rounded bg-transparent appearance-none checked:bg-primary cursor-pointer shrink-0"
                          aria-describedby="privacy-description"
                        />
                        <label
                          htmlFor="contact-privacidad"
                          id="privacy-description"
                          className="text-dark text-[16px] leading-[22px] cursor-pointer"
                        >
                          He leído y acepto la{' '}
                          <Link href="/privacidad" className="text-primary underline hover:text-primary/80">
                            política de privacidad
                          </Link>{' '}
                          y{' '}
                          <Link href="/aviso-legal" className="text-primary underline hover:text-primary/80">
                            aviso legal
                          </Link>.
                        </label>
                      </div>

                      {/* Status Messages */}
                      <AnimatePresence mode="wait">
                        {submitStatus === 'success' && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="bg-green-50 border border-green-200 rounded-[10px] p-3"
                            role="status"
                            aria-live="polite"
                          >
                            <p className="text-green-800 text-[14px]">
                              Mensaje enviado. Nos pondremos en contacto contigo pronto.
                            </p>
                          </motion.div>
                        )}
                        {submitStatus === 'error' && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="bg-red-50 border border-red-200 rounded-[10px] p-3"
                            role="alert"
                            aria-live="assertive"
                          >
                            <p className="text-red-800 text-[14px]">
                              {errorMessage}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        aria-busy={isSubmitting}
                        className="bg-dark text-white text-[16px] font-medium h-[44px] px-6 rounded-[15px] hover:bg-dark/90 transition-colors w-fit disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin w-4 h-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            <span>Enviando...</span>
                          </>
                        ) : (
                          'Contactar'
                        )}
                      </button>
                    </div>
                  </fieldset>
                </form>
              </motion.aside>
            </div>
          </div>
        </div>
      </section>

      {/* Products Banner Section */}
      <section
        className="relative py-16 md:py-20 lg:py-[149px] overflow-hidden"
        aria-labelledby="more-products-title"
      >
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        >
          <source src="/videos/product-sistemas.mp4" type="video/mp4" />
        </video>

        {/* Blue + Dark Overlay */}
        <div className="absolute inset-0 bg-primary mix-blend-color" aria-hidden="true" />
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

        <div className="relative z-10 max-w-[1240px] mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 lg:mb-12"
          >
            <h2
              id="more-products-title"
              className="text-white text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-[38px] md:leading-[46px] lg:leading-[52px] max-w-[700px]"
            >
              Conectemos tu visión con nuestras soluciones.
            </h2>
          </motion.div>

          <ProductAccordion />
        </div>
      </section>

      <Footer />
    </main>
  );
}
