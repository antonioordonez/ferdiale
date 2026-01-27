'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const videoPins = [
  {
    id: 1,
    video: '/videos/service-pin-1.mp4',
    top: '18.2%',
    left: '77%',
  },
  {
    id: 2,
    video: '/videos/service-pin-2.mp4',
    top: '79.3%',
    left: '87.4%',
  },
  {
    id: 3,
    video: '/videos/service-pin-3.mp4',
    top: '61.4%',
    left: '48.3%',
  },
];

const services = [
  {
    id: 1,
    title: 'Diseño e ingeniería a medida',
    description: 'Analizamos cada necesidad para desarrollar soluciones personalizadas que se adapten a los procesos, espacios, forma de trabajo y objetivos de producción de cada cliente.\n\nApostamos por la innovación, el uso de tecnologías avanzadas y el diseño optimizado de cada componente.',
    image: '/images/service-diseno.png',
  },
  {
    id: 2,
    title: 'Fabricación y montaje',
    description: 'Contamos con un equipo técnico especializado y medios propios para fabricar transportadores, mesas de acumulación, elevadores, descensores, sistemas de transferencia, etc. de alta calidad.\n\nCada proyecto se construye con precisión y materiales duraderos, asegurando un rendimiento óptimo en entornos exigentes.',
    image: '/images/service-fabricacion.png',
  },
  {
    id: 3,
    title: 'Automatización e integración',
    description: 'Diseñamos sistemas automatizados que se integran de forma fluida con los equipos existentes.\n\nImplementamos soluciones de gestión de Líneas productivas para mejorar el flujo de trabajo y maximizar la productividad.',
    image: '/images/service-automatizacion.png',
  },
  {
    id: 4,
    title: 'Asistencia técnica y mantenimiento',
    description: 'Acompañamos a nuestros clientes durante todo el ciclo de vida del proyecto.\n\nOfrecemos soporte técnico, mantenimiento preventivo y actualizaciones para garantizar la continuidad y eficiencia de la producción.',
    image: '/images/service-asistencia.png',
  },
];

function VideoLightbox({ videoSrc, onClose }: { videoSrc: string; onClose: () => void }) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <motion.div
      ref={overlayRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-dark/80 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="relative w-[90vw] max-w-[900px] aspect-video rounded-[20px] overflow-hidden bg-dark shadow-2xl"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          controls
          className="w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-dark/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-dark/80 transition-colors cursor-pointer"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </motion.div>
    </motion.div>
  );
}

export default function ServiceAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxVideo, setLightboxVideo] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const closeLightbox = useCallback(() => setLightboxVideo(null), []);

  useEffect(() => {
    const hash = window.location.hash;
    const match = hash.match(/^#servicio-(\d+)$/);
    if (match) {
      const serviceId = parseInt(match[1], 10);
      const index = services.findIndex((s) => s.id === serviceId);
      if (index !== -1) {
        setActiveIndex(index);
        setTimeout(() => {
          containerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    }
  }, []);

  return (
    <>
      <div ref={containerRef} className="w-full flex flex-col gap-5">
        {services.map((service, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={service.id}
              onClick={() => setActiveIndex(index)}
              className={`rounded-[20px] border border-white/10 cursor-pointer overflow-hidden transition-colors duration-300 ${
                isActive ? 'bg-primary' : 'bg-primary/60'
              }`}
            >
              {/* Collapsed State - Just Title */}
              {!isActive && (
                <div className="flex items-center px-6 lg:px-[25px] h-[86px]">
                  <h3 className="text-white font-bold text-[20px] md:text-[28px] lg:text-[32px] leading-[26px] md:leading-[34px] lg:leading-[38px]">
                    {service.title}
                  </h3>
                </div>
              )}

              {/* Expanded State - Full Content */}
              {isActive && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Desktop: side-by-side layout with fixed height */}
                  <div className="relative lg:h-[280px]">
                    {/* Content */}
                    <div className="flex flex-col gap-[26px] p-6 lg:p-[30px] w-full lg:w-[692px]">
                      <h3 className="text-white font-bold text-[24px] md:text-[28px] lg:text-[32px] leading-[30px] md:leading-[34px] lg:leading-[38px]">
                        {service.title}
                      </h3>
                      <p className="text-white text-[14px] md:text-[16px] leading-[20px] md:leading-[22px] whitespace-pre-line">
                        {service.description}
                      </p>
                    </div>

                    {/* Image - Mobile: below content, Desktop: absolute right */}
                    <div className="relative w-full h-[200px] md:h-[240px] lg:absolute lg:right-0 lg:top-0 lg:w-[453px] lg:h-full rounded-b-[20px] lg:rounded-b-none lg:rounded-r-[20px] overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />

                      {/* Video pins - only on first service */}
                      {index === 0 && (
                        <>
                          {videoPins.map((pin) => (
                            <button
                              key={pin.id}
                              onClick={(e) => {
                                e.stopPropagation();
                                setLightboxVideo(pin.video);
                              }}
                              className="absolute z-10 w-[28px] h-[28px] -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                              style={{ top: pin.top, left: pin.left }}
                            >
                              {/* Pulse ring */}
                              <span className="absolute inset-0 rounded-full bg-secondary/40 animate-ping" />
                              {/* Pin circle */}
                              <span className="relative flex items-center justify-center w-full h-full rounded-full bg-secondary border-2 border-white shadow-lg group-hover:scale-110 transition-transform">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                  <path d="M6 1V11M1 6H11" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                              </span>
                            </button>
                          ))}
                        </>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          );
        })}
      </div>

      {/* Video Lightbox */}
      <AnimatePresence>
        {lightboxVideo && (
          <VideoLightbox videoSrc={lightboxVideo} onClose={closeLightbox} />
        )}
      </AnimatePresence>
    </>
  );
}
