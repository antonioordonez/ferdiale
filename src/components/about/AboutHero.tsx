'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const carouselImages = [
  { src: '/images/carousel-1.png', alt: 'Sistemas de transporte Ferdiale 1' },
  { src: '/images/carousel-2.png', alt: 'Sistemas de transporte Ferdiale 2' },
  { src: '/images/carousel-3.png', alt: 'Sistemas de transporte Ferdiale 3' },
  { src: '/images/carousel-4.png', alt: 'Sistemas de transporte Ferdiale 4' },
  { src: '/images/carousel-5.png', alt: 'Sistemas de transporte Ferdiale 5' },
  { src: '/images/carousel-6.png', alt: 'Sistemas de transporte Ferdiale 6' },
  { src: '/images/carousel-7.png', alt: 'Sistemas de transporte Ferdiale 7' },
];

export default function AboutHero() {
  // Duplicate images for seamless infinite scroll
  const duplicatedImages = [...carouselImages, ...carouselImages];

  return (
    <section className="pt-[85px] overflow-hidden">
      {/* Hero Content */}
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 pt-16 md:pt-24 lg:pt-[119px]">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-12">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-dark text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-[38px] md:leading-[46px] lg:leading-[52px] max-w-[652px]"
          >
            Transformamos{' '}
            <br className="hidden lg:block" />
            cada desafío en una oportunidad para innovar
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-text text-[16px] md:text-[18px] leading-[22px] max-w-[406px]"
          >
            Somos una empresa especializada en el diseño y desarrollo de sistemas de transporte para Línea de envasado, con un valor añadido particular en los sectores de alimentación y bebidas.
          </motion.p>
        </div>
      </div>

      {/* Infinite Carousel */}
      <div className="mt-12 md:mt-16 lg:mt-20 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex gap-6 w-fit animate-carousel"
        >
          {duplicatedImages.map((image, index) => (
            <div
              key={index}
              className="relative shrink-0 w-[280px] md:w-[350px] lg:w-[400px] h-[280px] md:h-[350px] lg:h-[400px] rounded-[30px] overflow-hidden"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
