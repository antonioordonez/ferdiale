'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/Button';

const products = [
  {
    id: 1,
    title: 'Transportadores de Envases',
    description: 'Eficiencia que Impulsa tu Producción.',
    media: { type: 'video', src: '/videos/product-envases.mp4' },
    href: '/productos/transportadores-envases',
  },
  {
    id: 2,
    title: 'Sistemas sin presión',
    description: 'Garantiza la fluidez y continuidad del proceso productivo, eliminando presiones, golpes, ruidos, roturas,…',
    media: { type: 'video', src: '/videos/product-sistemas.mp4' },
    href: '/productos/sistemas-sin-presion',
  },
  {
    id: 3,
    title: 'Complementos',
    description: 'Omega, Elevador-Descensor, expulsor envases caídos, cubiertas transportadores, mesa rechazo',
    media: { type: 'image', src: '/images/product-complementos.jpg' },
    href: '/productos/complementos',
  },
  {
    id: 4,
    title: 'Transportadores de Cajas/Packs',
    description: 'Optimiza el flujo interno, mejora la eficiencia y reduce la manipulación manual.',
    media: { type: 'video', src: '/videos/product-cajas.mp4' },
    href: '/productos/transportadores-cajas',
  },
  {
    id: 5,
    title: 'Transportadores de Palets',
    description: 'Garantiza movimientos seguros y continuos',
    media: { type: 'image', src: '/images/product-palets.jpg' },
    href: '/productos/transportadores-palets',
  },
];

const easing = [0.4, 0, 0.2, 1];

export default function ProductAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full overflow-hidden">
      {/* Desktop Accordion */}
      <div className="hidden lg:flex gap-[18px] h-[352px]">
        {products.map((product, index) => {
          const isActive = activeIndex === index;

          return (
            <motion.div
              key={product.id}
              onClick={() => setActiveIndex(index)}
              className={`relative rounded-[18px] border border-white/10 cursor-pointer overflow-hidden ${
                isActive ? 'bg-primary' : 'bg-primary/60'
              }`}
              initial={false}
              animate={{ width: isActive ? 826 : 80 }}
              transition={{ duration: 0.5, ease: easing }}
            >
              {/* Collapsed number - centered */}
              <motion.div
                className="absolute inset-0 flex items-start justify-center pt-[40px] pointer-events-none"
                initial={false}
                animate={{ opacity: isActive ? 0 : 1 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-white font-black text-[54px] leading-[58px]">
                  {product.id}
                </span>
              </motion.div>

              {/* Expanded content - fades in/out without unmounting */}
              <motion.div
                className="absolute inset-0 flex pointer-events-none"
                initial={false}
                animate={{ opacity: isActive ? 1 : 0 }}
                transition={{ duration: isActive ? 0.35 : 0.2, delay: isActive ? 0.15 : 0 }}
              >
                {/* Text content */}
                <div className="flex flex-col items-start gap-[18px] p-[15px] pt-[40px] flex-1 min-w-0 pointer-events-auto">
                  <span className="text-white font-black text-[54px] leading-[58px]">
                    {product.id}
                  </span>
                  <h3 className="text-white font-bold text-[36px] leading-[40px]">
                    {product.title}
                  </h3>
                  <p className="text-white text-[16px] leading-[22px]">
                    {product.description}
                  </p>
                  <Button href={product.href} variant="white-primary" size="small">
                    Más Detalles
                  </Button>
                </div>

                {/* Media */}
                <div className="relative w-[360px] h-full rounded-r-[18px] overflow-hidden flex-shrink-0">
                  {product.media.type === 'video' ? (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    >
                      <source src={product.media.src} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      src={product.media.src}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile/Tablet - Vertical Cards */}
      <div className="lg:hidden flex flex-col gap-4">
        {products.map((product, index) => {
          const isActive = activeIndex === index;

          return (
            <motion.div
              key={product.id}
              onClick={() => setActiveIndex(index)}
              layout
              className={`rounded-[18px] border border-white/10 cursor-pointer overflow-hidden ${
                isActive ? 'bg-primary' : 'bg-primary/60'
              }`}
              transition={{ duration: 0.4, ease: easing }}
            >
              {/* Header - always visible */}
              <div className="flex items-center gap-4 p-4 h-[80px]">
                <span className="text-white font-black text-[36px] md:text-[48px] leading-none w-[50px]">
                  {product.id}
                </span>
                <motion.h3
                  className="text-white font-bold leading-[24px] md:leading-[28px]"
                  initial={false}
                  animate={{
                    fontSize: isActive ? '24px' : '18px',
                    opacity: isActive ? 0 : 1,
                  }}
                  transition={{ duration: 0.3, ease: easing }}
                >
                  {product.title}
                </motion.h3>
              </div>

              {/* Expandable content */}
              <motion.div
                initial={false}
                animate={{
                  height: isActive ? 'auto' : 0,
                  opacity: isActive ? 1 : 0,
                }}
                transition={{
                  height: { duration: 0.4, ease: easing },
                  opacity: { duration: isActive ? 0.3 : 0.15, delay: isActive ? 0.1 : 0 },
                }}
                className="overflow-hidden"
              >
                {/* Media */}
                <div className="relative w-full h-[200px] md:h-[280px]">
                  {product.media.type === 'video' ? (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    >
                      <source src={product.media.src} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      src={product.media.src}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col items-start gap-3 p-4 pt-3">
                  <h3 className="text-white font-bold text-[24px] md:text-[32px] leading-[28px] md:leading-[36px]">
                    {product.title}
                  </h3>
                  <p className="text-white text-[14px] md:text-[16px] leading-[20px] md:leading-[22px]">
                    {product.description}
                  </p>
                  <Button href={product.href} variant="white-primary" size="small">
                    Más Detalles
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
