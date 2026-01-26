'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const locations = {
  madrid: {
    title: 'Oficina Madrid',
    address: 'C/Cidro, 2 – Despacho 3, 28044 MADRID',
    coordinates: '40.3833,-3.7328',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Calle+Cidro+2+28044+Madrid+Spain',
  },
  jerez: {
    title: 'Fábrica Jerez',
    address: 'C/Jardinería, 10, 11408 Jerez de la Frontera, CÁDIZ',
    coordinates: '36.6892,-6.1378',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Parque+empresarial+Oeste+Calle+Jardineria+10+Jerez+de+la+Frontera+Cadiz+Spain',
  },
};

const contactCards = [
  {
    icon: '/images/icon-location.svg',
    title: 'Fábrica Jerez',
    lines: ['Parque empresarial Oeste', 'C/Jardinería, 10', '11408 Jerez de la Frontera, CÁDIZ'],
    href: locations.jerez.googleMapsUrl,
    external: true,
  },
  {
    icon: '/images/icon-location.svg',
    title: 'Oficina Madrid',
    lines: ['C/Cidro, 2 – Despacho 3', '28044 MADRID'],
    href: locations.madrid.googleMapsUrl,
    external: true,
  },
  {
    icon: '/images/icon-phone.svg',
    title: 'Teléfono',
    lines: ['911 26 38 30'],
    href: 'tel:+34911263830',
  },
  {
    icon: '/images/icon-email.svg',
    title: 'Email Address',
    lines: ['info@ferdiale.com'],
    href: 'mailto:info@ferdiale.com',
  },
];

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    empresa: '',
    cargo: '',
    email: '',
    mensaje: '',
    privacidad: false,
  });
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
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar el mensaje');
      }

      setSubmitStatus('success');
      setFormData({
        nombre: '',
        apellidos: '',
        empresa: '',
        cargo: '',
        email: '',
        mensaje: '',
        privacidad: false,
      });
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

      <section className="pt-[85px]">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 pt-16 md:pt-24 lg:pt-[140px]">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 lg:mb-12"
          >
            <h1 className="text-dark text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-[38px] md:leading-[46px] lg:leading-[52px] mb-4">
              Trabajemos juntos
            </h1>
            <p className="text-text text-[16px] leading-[22px] max-w-[390px]">
              Conectemos tu visión con nuestras soluciones. Contacta con nosotros.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-6">
            {/* Left: Maps */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-full lg:w-[461px] flex flex-col gap-6"
            >
              {/* Oficina Madrid */}
              <div>
                <h3 className="text-primary text-[20px] md:text-[24px] font-bold leading-[30px] mb-3">
                  {locations.madrid.title}
                </h3>
                <a
                  href={locations.madrid.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative w-full h-[200px] md:h-[280px] lg:h-[298px] rounded-[20px] overflow-hidden"
                >
                  <iframe
                    src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(locations.madrid.address)}`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-[20px]"
                  />
                </a>
              </div>

              {/* Fábrica Jerez */}
              <div>
                <h3 className="text-primary text-[20px] md:text-[24px] font-bold leading-[30px] mb-3">
                  {locations.jerez.title}
                </h3>
                <a
                  href={locations.jerez.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative w-full h-[200px] md:h-[280px] lg:h-[298px] rounded-[20px] overflow-hidden"
                >
                  <iframe
                    src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(locations.jerez.address)}`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-[20px]"
                  />
                </a>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1"
            >
              <form
                onSubmit={handleSubmit}
                className="bg-secondary/10 rounded-[20px] p-5 md:p-6 lg:p-10"
              >
                <div className="flex flex-col gap-5">
                  {/* Row 1: Nombre y Apellidos */}
                  <div className="flex flex-col md:flex-row gap-5">
                    <div className="flex-1 flex flex-col gap-3">
                      <label className="text-dark text-[16px] leading-[22px]">Nombre*</label>
                      <input
                        type="text"
                        name="nombre"
                        required
                        value={formData.nombre}
                        onChange={handleChange}
                        className="h-[54px] bg-white rounded-[10px] px-5 text-dark text-[16px] focus:outline-none focus:ring-2 focus:ring-primary/30"
                      />
                    </div>
                    <div className="flex-1 flex flex-col gap-3">
                      <label className="text-dark text-[16px] leading-[22px]">Apellidos *</label>
                      <input
                        type="text"
                        name="apellidos"
                        required
                        value={formData.apellidos}
                        onChange={handleChange}
                        className="h-[54px] bg-white rounded-[10px] px-5 text-dark text-[16px] focus:outline-none focus:ring-2 focus:ring-primary/30"
                      />
                    </div>
                  </div>

                  {/* Row 2: Empresa y Cargo */}
                  <div className="flex flex-col md:flex-row gap-5">
                    <div className="flex-1 flex flex-col gap-3">
                      <label className="text-dark text-[16px] leading-[22px]">Empresa*</label>
                      <input
                        type="text"
                        name="empresa"
                        required
                        value={formData.empresa}
                        onChange={handleChange}
                        className="h-[54px] bg-white rounded-[10px] px-5 text-dark text-[16px] focus:outline-none focus:ring-2 focus:ring-primary/30"
                      />
                    </div>
                    <div className="flex-1 flex flex-col gap-3">
                      <label className="text-dark text-[16px] leading-[22px]">Cargo*</label>
                      <input
                        type="text"
                        name="cargo"
                        required
                        value={formData.cargo}
                        onChange={handleChange}
                        className="h-[54px] bg-white rounded-[10px] px-5 text-dark text-[16px] focus:outline-none focus:ring-2 focus:ring-primary/30"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-3">
                    <label className="text-dark text-[16px] leading-[22px]">Email*</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="h-[54px] bg-white rounded-[10px] px-5 text-dark text-[16px] focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </div>

                  {/* Mensaje */}
                  <div className="flex flex-col gap-3">
                    <label className="text-dark text-[16px] leading-[22px]">Mensaje*</label>
                    <textarea
                      name="mensaje"
                      required
                      value={formData.mensaje}
                      onChange={handleChange}
                      className="h-[150px] bg-white rounded-[10px] px-5 py-4 text-dark text-[16px] resize-none focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </div>

                  {/* Checkbox */}
                  <label className="flex items-center gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      name="privacidad"
                      checked={formData.privacidad}
                      onChange={handleChange}
                      required
                      className="w-4 h-4 border border-primary rounded bg-transparent appearance-none checked:bg-primary cursor-pointer"
                    />
                    <span className="text-dark text-[16px] leading-[22px]">
                      He leído y acepto la política de privacidad y aviso legal.
                    </span>
                  </label>

                  {/* Status Messages */}
                  <AnimatePresence mode="wait">
                    {submitStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="bg-green-50 border border-green-200 rounded-[10px] p-4"
                      >
                        <p className="text-green-800 text-[16px]">
                          Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.
                        </p>
                      </motion.div>
                    )}
                    {submitStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="bg-red-50 border border-red-200 rounded-[10px] p-4"
                      >
                        <p className="text-red-800 text-[16px]">
                          {errorMessage}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center bg-white border border-primary rounded-[20px] py-[5px] px-[6px] group hover:opacity-95 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      <span className="text-dark text-base pl-[19px] pr-[25px]">
                        {isSubmitting ? 'Enviando...' : 'Contáctanos'}
                      </span>
                      <span className="w-[45px] h-[45px] rounded-[14px] bg-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                        {isSubmitting ? (
                          <svg className="animate-spin w-5 h-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                        ) : (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                            <path d="M6 18L18 6" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M9 6h9v9" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </motion.div>
          </div>

          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12 lg:mt-16 pb-20 md:pb-28 lg:pb-36"
          >
            {contactCards.map((card, index) => (
              <a
                key={index}
                href={card.href}
                target={card.external ? '_blank' : undefined}
                rel={card.external ? 'noopener noreferrer' : undefined}
                className="border border-primary rounded-[15px] p-5 h-[280px] md:h-[350px] flex flex-col hover:bg-primary/5 transition-colors group"
              >
                <div className="w-[30px] h-[30px] mb-auto">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={30}
                    height={30}
                  />
                </div>
                <div>
                  <h4 className="text-primary text-[20px] md:text-[24px] font-bold leading-[30px] mb-2 group-hover:text-dark transition-colors">
                    {card.title}
                  </h4>
                  <p className="text-text text-[16px] leading-[22px] whitespace-pre-line group-hover:text-dark transition-colors">
                    {card.lines.join('\n')}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
