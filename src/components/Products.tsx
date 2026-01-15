"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "./animations";

const products = [
  "Transportadores de Envases",
  "Sistemas de Acumulación",
  "Cubiertas para transportadores",
  "Transportadores de Cajas / Packs",
  "Transportadores de Palets",
];

export default function Products() {
  return (
    <section id="productos" className="relative bg-oscuro">
      <div className="mx-auto flex max-w-[1440px] flex-col lg:flex-row lg:items-center">
        {/* Background image - left side */}
        <div className="relative h-[300px] w-full sm:h-[400px] lg:h-[811px] lg:w-[720px] lg:shrink-0">
          <Image
            src="/images/productos-bg.png"
            alt="Industrial machinery"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0">
            <Image
              src="/images/productos-overlay.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Content - right side */}
        <div className="flex flex-1 flex-col gap-8 px-5 py-12 md:px-10 lg:gap-10 lg:px-[100px] lg:py-[100px]">
          {/* Section label */}
          <FadeIn>
            <div className="flex items-center gap-3">
              <div className="h-px w-[30px] bg-white" />
              <span className="text-[14px] leading-[22px] text-white lg:text-[16px]">
                Nuestros Productos
              </span>
            </div>
          </FadeIn>

          {/* Products list */}
          <div className="border-t border-white/10">
            {products.map((product, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <Link href="#" className="group block">
                  <motion.div
                    className="flex items-center border-b border-white/10 py-5 lg:py-[30px]"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-[20px] font-bold leading-[1.2] text-white transition-colors group-hover:text-secundario sm:text-[28px] lg:text-[36px] lg:leading-[40px]">
                      {product}
                    </span>
                    <motion.svg
                      className="ml-auto h-6 w-6 text-white opacity-0 transition-opacity group-hover:opacity-100"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </motion.svg>
                  </motion.div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
