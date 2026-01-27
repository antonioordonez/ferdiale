'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
              layout
              onClick={() => setActiveIndex(index)}
              className={`relative rounded-[18px] border border-white/10 cursor-pointer overflow-hidden ${
                isActive ? 'bg-primary' : 'bg-primary/60'
              }`}
              initial={false}
              animate={{
                width: isActive ? 826 : 80,
              }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* Collapsed State - Just Number */}
              <AnimatePresence>
                {!isActive && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex items-start justify-center pt-10"
                  >
                    <span className="text-white font-black text-[54px] leading-[58px]">
                      {product.id}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Expanded State - Full Content */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="absolute inset-0 flex"
                  >
                    {/* Content */}
                    <div className="flex flex-col items-start gap-[18px] p-[15px] pt-[40px] w-[440px]">
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
                    <div className="absolute right-0 top-0 w-[420px] h-full rounded-r-[18px] overflow-hidden">
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
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile/Tablet - Vertical Cards */}
      <div className="lg:hidden flex flex-col gap-4">
        {products.map((product, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={product.id}
              onClick={() => setActiveIndex(index)}
              className={`rounded-[18px] border border-white/10 cursor-pointer overflow-hidden transition-colors duration-300 ${
                isActive ? 'bg-primary' : 'bg-primary/60'
              }`}
            >
              {/* Collapsed State */}
              {!isActive && (
                <div className="flex items-center gap-4 p-4 h-[80px]">
                  <span className="text-white font-black text-[36px] md:text-[48px] leading-none w-[50px]">
                    {product.id}
                  </span>
                  <h3 className="text-white font-bold text-[18px] md:text-[24px] leading-[24px] md:leading-[28px]">
                    {product.title}
                  </h3>
                </div>
              )}

              {/* Expanded Content */}
              {isActive && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Header */}
                  <div className="flex items-center gap-4 p-4 h-[80px]">
                    <span className="text-white font-black text-[36px] md:text-[48px] leading-none w-[50px]">
                      {product.id}
                    </span>
                  </div>

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
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
