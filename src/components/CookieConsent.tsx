'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

const defaultPreferences: CookiePreferences = {
  necessary: true, // Always required
  analytics: false,
  marketing: false,
  preferences: false,
};

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      preferences: prefs,
      timestamp: new Date().toISOString(),
    }));
    setIsVisible(false);

    // Here you would initialize/disable analytics, marketing scripts, etc.
    if (prefs.analytics) {
      // Initialize Google Analytics, etc.
      console.log('Analytics cookies enabled');
    }
    if (prefs.marketing) {
      // Initialize marketing pixels, etc.
      console.log('Marketing cookies enabled');
    }
  };

  const acceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    setPreferences(allAccepted);
    savePreferences(allAccepted);
  };

  const rejectAll = () => {
    savePreferences(defaultPreferences);
  };

  const acceptSelected = () => {
    savePreferences(preferences);
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return; // Can't disable necessary cookies
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const cookieTypes = [
    {
      key: 'necessary' as const,
      title: 'Cookies necesarias',
      description: 'Esenciales para el funcionamiento del sitio web. No se pueden desactivar.',
      required: true,
    },
    {
      key: 'analytics' as const,
      title: 'Cookies analíticas',
      description: 'Nos permiten medir y analizar el uso del sitio para mejorar su funcionamiento.',
      required: false,
    },
    {
      key: 'marketing' as const,
      title: 'Cookies de marketing',
      description: 'Utilizadas para mostrarte publicidad relevante en otros sitios web.',
      required: false,
    },
    {
      key: 'preferences' as const,
      title: 'Cookies de preferencias',
      description: 'Permiten recordar tus preferencias y personalizar tu experiencia.',
      required: false,
    },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
        >
          <div className="max-w-[1240px] mx-auto">
            <div className="bg-dark rounded-[20px] p-6 md:p-8 shadow-2xl border border-white/10">
              {/* Main Banner */}
              <div className={`${showDetails ? 'mb-6' : ''}`}>
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Text Content */}
                  <div className="flex-1">
                    <h3 className="text-white text-[20px] md:text-[24px] font-bold leading-[26px] md:leading-[30px] mb-3">
                      Utilizamos cookies
                    </h3>
                    <p className="text-white/80 text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] mb-4">
                      Usamos cookies propias y de terceros para mejorar tu experiencia, analizar el tráfico y personalizar contenido.
                      Puedes aceptar todas, rechazarlas o configurar tus preferencias. Consulta nuestra{' '}
                      <Link href="/cookies" className="text-secondary underline hover:text-secondary/80 transition-colors">
                        Política de Cookies
                      </Link>{' '}
                      para más información.
                    </p>
                    <button
                      onClick={() => setShowDetails(!showDetails)}
                      className="text-secondary text-[14px] md:text-[16px] font-medium hover:text-secondary/80 transition-colors flex items-center gap-2"
                    >
                      {showDetails ? 'Ocultar configuración' : 'Configurar cookies'}
                      <svg
                        className={`w-4 h-4 transition-transform ${showDetails ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 lg:shrink-0">
                    <button
                      onClick={rejectAll}
                      className="px-6 py-3 rounded-[15px] border border-white/30 text-white text-[14px] md:text-[16px] font-medium hover:bg-white/10 transition-colors"
                    >
                      Rechazar todas
                    </button>
                    <button
                      onClick={acceptAll}
                      className="px-6 py-3 rounded-[15px] bg-primary text-white text-[14px] md:text-[16px] font-medium hover:bg-primary/90 transition-colors"
                    >
                      Aceptar todas
                    </button>
                  </div>
                </div>
              </div>

              {/* Detailed Settings */}
              <AnimatePresence>
                {showDetails && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-white/10 pt-6">
                      <div className="grid gap-4 mb-6">
                        {cookieTypes.map((cookie) => (
                          <div
                            key={cookie.key}
                            className="flex items-start gap-4 p-4 bg-white/5 rounded-[15px]"
                          >
                            {/* Toggle */}
                            <button
                              onClick={() => togglePreference(cookie.key)}
                              disabled={cookie.required}
                              className={`relative shrink-0 w-12 h-7 rounded-full transition-colors ${
                                preferences[cookie.key]
                                  ? 'bg-primary'
                                  : 'bg-white/20'
                              } ${cookie.required ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'}`}
                            >
                              <span
                                className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                                  preferences[cookie.key] ? 'translate-x-5' : 'translate-x-0'
                                }`}
                              />
                            </button>

                            {/* Info */}
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h4 className="text-white text-[16px] font-bold">
                                  {cookie.title}
                                </h4>
                                {cookie.required && (
                                  <span className="text-[12px] text-secondary bg-secondary/20 px-2 py-0.5 rounded-full">
                                    Obligatorias
                                  </span>
                                )}
                              </div>
                              <p className="text-white/70 text-[14px] leading-[20px]">
                                {cookie.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Save Button */}
                      <div className="flex justify-end">
                        <button
                          onClick={acceptSelected}
                          className="px-6 py-3 rounded-[15px] bg-secondary text-white text-[14px] md:text-[16px] font-medium hover:bg-secondary/90 transition-colors"
                        >
                          Guardar preferencias
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Legal Info */}
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-white/50 text-[12px] leading-[16px]">
                  De conformidad con el RGPD (UE) 2016/679 y la LSSI-CE, te informamos que este sitio web utiliza cookies.
                  Puedes ejercer tus derechos de acceso, rectificación, supresión y portabilidad en{' '}
                  <a href="mailto:info@ferdiale.com" className="underline hover:text-white/70">
                    info@ferdiale.com
                  </a>
                  . Más información en nuestra{' '}
                  <Link href="/privacidad" className="underline hover:text-white/70">
                    Política de Privacidad
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
