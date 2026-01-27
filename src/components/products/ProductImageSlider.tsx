'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

type SliderItem =
  | { type: 'image'; src: string; alt: string }
  | { type: 'video'; src: string; alt: string };

interface ProductImageSliderProps {
  items: SliderItem[];
  autoPlayInterval?: number;
}

export default function ProductImageSlider({
  items,
  autoPlayInterval = 5000,
}: ProductImageSliderProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % items.length);
  }, [items.length]);

  // Autoplay only for image-only sliders
  const hasOnlyImages = items.every((item) => item.type === 'image');
  useEffect(() => {
    if (!hasOnlyImages) return;
    const timer = setInterval(goNext, autoPlayInterval);
    return () => clearInterval(timer);
  }, [goNext, autoPlayInterval, hasOnlyImages]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? '-100%' : '100%',
      opacity: 0,
    }),
  };

  const currentItem = items[current];

  return (
    <div className="relative w-full h-full group">
      {/* Media */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0"
        >
          {currentItem.type === 'video' ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              aria-label={currentItem.alt}
            >
              <source src={currentItem.src} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={currentItem.src}
              alt={currentItem.alt}
              fill
              className="object-cover"
              priority={current === 0}
              sizes="(max-width: 1024px) 100vw, 580px"
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      {items.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              aria-label={`Ir a elemento ${index + 1}`}
              aria-current={index === current ? 'true' : undefined}
              className="relative w-2 h-2 rounded-full transition-all duration-300 cursor-pointer"
            >
              <span
                className={`block w-full h-full rounded-full transition-all duration-300 ${
                  index === current
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            </button>
          ))}
        </div>
      )}

      {/* Arrow buttons - visible on hover */}
      {items.length > 1 && (
        <>
          <button
            onClick={() => {
              setDirection(-1);
              setCurrent((prev) => (prev - 1 + items.length) % items.length);
            }}
            aria-label="Elemento anterior"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/30 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/50 cursor-pointer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            onClick={() => {
              setDirection(1);
              setCurrent((prev) => (prev + 1) % items.length);
            }}
            aria-label="Elemento siguiente"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/30 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/50 cursor-pointer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}
