'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from './Button';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <section ref={sectionRef} className="relative h-screen min-h-[700px] flex items-end pb-16 md:pb-24 pt-[85px]">
      {/* Video Background with Parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y: videoY }}
          className="absolute inset-0 h-[130%] -top-[15%]"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute w-full h-full object-cover"
          >
            {/* WebM ofrece mejor calidad/compresión - añadir si disponible */}
            {/* <source src="/videos/hero-video.webm" type="video/webm" /> */}
            <source src="/videos/hero-video.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Blue overlay */}
        <div className="absolute inset-0 bg-primary mix-blend-color" />
        <div className="absolute inset-0 bg-black/20" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-10 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-[802px]"
        >
          <h1 className="text-white text-[36px] md:text-[48px] lg:text-[60px] font-black leading-[40px] md:leading-[52px] lg:leading-[64px]">
            Mejoramos el rendimiento de tu línea de producción
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 md:mt-8"
          >
            <Button href="#contact" variant="white">
              Contáctanos
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
