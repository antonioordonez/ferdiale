"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full pt-[75px] lg:pt-[85px]">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg-2.png"
          alt="Industrial machinery"
          fill
          className="object-cover"
          priority
        />
        {/* Blue overlay */}
        <motion.div
          className="absolute inset-0 bg-primario mix-blend-color"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="absolute inset-0 bg-black/20" />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative flex min-h-[calc(100vh-75px)] items-end pb-16 lg:min-h-[calc(100vh-85px)] lg:pb-[90px]">
        <div className="mx-auto w-full max-w-[1280px] px-5 md:px-10 lg:px-20">
          <div className="max-w-full lg:max-w-[802px]">
            <motion.h1
              className="text-[32px] font-black leading-[1.1] text-white sm:text-[40px] md:text-[50px] lg:text-[60px] lg:leading-[64px]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Movemos tu producción hacia el futuro
            </motion.h1>

            <motion.div
              className="pt-6 lg:pt-[30px]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button variant="white" href="#contacto">
                Contáctanos
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <span className="text-sm text-white/70">Scroll</span>
        <motion.div
          className="h-12 w-6 rounded-full border-2 border-white/30 p-1"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
        >
          <motion.div
            className="h-2 w-2 rounded-full bg-white"
            animate={{ y: [0, 16, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
