'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Animated conveyor belt with falling bottle
function ConveyorAnimation() {
  const [cycle, setCycle] = useState(0);
  const beltEnd = 72; // percentage where the belt ends
  const totalMoveDuration = 3; // seconds to cross the belt
  const fallDuration = 0.8;
  const pauseAfterFall = 1;
  const fullCycleDuration = totalMoveDuration + fallDuration + pauseAfterFall;

  useEffect(() => {
    const timer = setInterval(() => {
      setCycle((prev) => prev + 1);
    }, fullCycleDuration * 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-[400px] h-[200px] mx-auto mb-8">
      {/* Conveyor belt */}
      <div className="absolute bottom-[60px] left-0 right-[80px] h-[20px] bg-secondary/30 rounded-[4px]">
        {/* Belt pattern */}
        <div className="absolute inset-0 flex items-center overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="w-[20px] h-[4px] bg-secondary/50 mx-[10px] rounded-full"
              animate={{ x: [-30, 0] }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </div>
      </div>

      {/* Conveyor legs */}
      <div className="absolute bottom-[20px] left-[20px] w-[8px] h-[40px] bg-secondary/40 rounded-[2px]" />
      <div className="absolute bottom-[20px] right-[100px] w-[8px] h-[40px] bg-secondary/40 rounded-[2px]" />

      {/* Gap indicator */}
      <div className="absolute bottom-[40px] right-[40px] text-primary text-[12px] font-bold">
        404
      </div>

      {/* Bottle - full cycle: enter from left, travel across belt, fall off the end */}
      <motion.div
        key={cycle}
        className="absolute bottom-[80px] w-[30px] h-[50px]"
        initial={{ left: '-10%', y: 0, rotate: 0, opacity: 1 }}
        animate={{
          left: ['-10%', `${beltEnd}%`, `${beltEnd}%`],
          y: [0, 0, 140],
          rotate: [0, 0, 45],
          opacity: [1, 1, 0],
        }}
        transition={{
          duration: totalMoveDuration + fallDuration,
          times: [
            0,
            totalMoveDuration / (totalMoveDuration + fallDuration),
            1,
          ],
          ease: ['linear', 'easeIn'],
        }}
      >
        {/* Bottle shape */}
        <svg viewBox="0 0 30 50" fill="none" className="w-full h-full">
          <path
            d="M10 0h10v8h4v4h-4v38H10V12H6V8h4V0z"
            fill="#1E3A5F"
            className="opacity-80"
          />
          <path
            d="M12 15h6v28h-6z"
            fill="#4A90A4"
            className="opacity-60"
          />
        </svg>
      </motion.div>

      {/* Fallen bottles pile */}
      <div className="absolute bottom-[10px] right-[20px] opacity-30">
        <svg viewBox="0 0 60 40" fill="none" className="w-[60px] h-[40px]">
          <path d="M5 40l10-35h8l-5 35H5z" fill="#1E3A5F" transform="rotate(-20 15 40)" />
          <path d="M25 40l10-35h8l-5 35H25z" fill="#1E3A5F" transform="rotate(15 35 40)" />
          <path d="M40 40l10-35h8l-5 35H40z" fill="#1E3A5F" transform="rotate(-5 50 40)" />
        </svg>
      </div>
    </div>
  );
}

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />

      <section className="flex-1 flex items-center justify-center pt-[85px]">
        <div className="max-w-[600px] mx-auto px-6 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Animated illustration */}
            <ConveyorAnimation />

            {/* Error message */}
            <h1 className="text-primary text-[80px] md:text-[120px] font-bold leading-none mb-4">
              404
            </h1>

            <h2 className="text-dark text-[24px] md:text-[32px] font-bold leading-tight mb-4">
              Parece que este envase se cayó de la línea
            </h2>

            <p className="text-text text-[16px] md:text-[18px] leading-relaxed mb-8 max-w-[450px] mx-auto">
              La página que buscas no existe o ha sido movida.
              No te preocupes, nuestros técnicos ya están revisando el transportador.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center bg-primary text-white rounded-[20px] py-3 px-8 text-base font-medium hover:opacity-90 transition-opacity"
              >
                Volver al inicio
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center border border-primary text-primary rounded-[20px] py-3 px-8 text-base font-medium hover:bg-primary/5 transition-colors"
              >
                Contactar
              </Link>
            </div>

            {/* Quick links */}
            <div className="mt-12 pt-8 border-t border-secondary/20">
              <p className="text-text/60 text-[14px] mb-4">
                Quizás estés buscando:
              </p>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                <Link
                  href="/productos"
                  className="text-primary text-[14px] hover:underline"
                >
                  Productos
                </Link>
                <Link
                  href="/servicios"
                  className="text-primary text-[14px] hover:underline"
                >
                  Servicios
                </Link>
                <Link
                  href="/sobre-ferdiale"
                  className="text-primary text-[14px] hover:underline"
                >
                  Sobre Ferdiale
                </Link>
                <Link
                  href="/contacto"
                  className="text-primary text-[14px] hover:underline"
                >
                  Contacto
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
