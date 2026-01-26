'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import ImageWithSkeleton from './ImageWithSkeleton';

const products = [
  {
    id: 1,
    name: 'Transportadores de Envases',
    image: '/images/producto-envases.jpg',
    href: '/productos/transportadores-envases',
  },
  {
    id: 2,
    name: 'Sistemas sin presión',
    image: '/images/producto-sin-presion.jpg',
    href: '/productos/sistemas-sin-presion',
  },
  {
    id: 3,
    name: 'Complementos',
    image: '/images/producto-complementos.jpg',
    href: '/productos/complementos',
  },
  {
    id: 4,
    name: 'Transportadores de Cajas / Packs',
    image: '/images/producto-cajas.jpg',
    href: '/productos/transportadores-cajas',
  },
  {
    id: 5,
    name: 'Transportadores de Palets',
    image: '/images/producto-palets.jpg',
    href: '/productos/transportadores-palets',
  },
];

export default function Products() {
  const [activeProduct, setActiveProduct] = useState(0);

  // Get all image URLs for preloading
  const allImageUrls = products.map(p => p.image);

  return (
    <section id="products" className="bg-dark relative overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[700px] lg:min-h-[811px]">
        {/* Image Section */}
        <div className="relative w-full lg:w-1/2 h-[400px] lg:h-auto order-1 lg:order-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProduct}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <ImageWithSkeleton
                src={products[activeProduct].image}
                alt={products[activeProduct].name}
                fill
                className="object-cover"
                priority={activeProduct === 0}
                preloadSrcs={allImageUrls}
              />
              {/* Gradient overlay for mobile text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent lg:hidden" />
            </motion.div>
          </AnimatePresence>

          {/* Blue gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-dark/30 hidden lg:block" />
        </div>

        {/* Content Section */}
        <div className="relative w-full lg:w-1/2 px-6 md:px-10 lg:px-[100px] py-12 lg:py-[100px] flex items-center order-2 lg:order-2">
          <div className="w-full max-w-[552px]">
            {/* Section label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-8 lg:mb-10"
            >
              <div className="w-[30px] h-px bg-white" />
              <span className="text-white text-base">Nuestros Productos</span>
            </motion.div>

            {/* Product List */}
            <div className="border-t border-white/10">
              {products.map((product, index) => {
                const isActive = activeProduct === index;

                return (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onMouseEnter={() => setActiveProduct(index)}
                  >
                    <Link
                      href={product.href}
                      className={`group flex items-center justify-between w-full text-left py-6 lg:py-8 px-4 border-b border-white/10 transition-all duration-300 rounded-lg ${
                        isActive
                          ? 'bg-primary/20 shadow-lg shadow-primary/20'
                          : 'hover:bg-white/5 hover:pl-6'
                      }`}
                    >
                      <span className={`text-white text-[24px] md:text-[30px] lg:text-[36px] font-bold leading-[30px] md:leading-[36px] lg:leading-[40px] transition-all duration-300 ${
                        isActive ? 'opacity-100 translate-x-2' : 'opacity-70 group-hover:opacity-100'
                      }`}>
                        {product.name}
                      </span>

                      {/* Arrow icon */}
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{
                          opacity: isActive ? 1 : 0,
                          x: isActive ? 0 : -10
                        }}
                        transition={{ duration: 0.3 }}
                        className="shrink-0 w-[45px] h-[45px] rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                          <path d="M6 18L18 6" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M9 6h9v9" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </motion.div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
