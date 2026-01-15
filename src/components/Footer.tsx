"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "./Button";
import { FadeIn } from "./animations";

const footerLinks = [
  { label: "Inicio", href: "#" },
  { label: "Sobre Ferdiale", href: "#sobre" },
  { label: "Productos", href: "#productos" },
  { label: "Servicios", href: "#servicios" },
];

export default function Footer() {
  return (
    <footer className="bg-oscuro overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-5 pt-12 md:px-10 lg:px-[100px] lg:pt-20">
        {/* Main footer content */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          {/* Logo and social */}
          <FadeIn direction="up">
            <div className="flex flex-col gap-6 lg:gap-[30px]">
              <Image
                src="/images/logo-ferdiale-blanco.png"
                alt="Ferdiale"
                width={149}
                height={30}
                className="h-auto w-[120px] lg:w-[149px]"
              />
              <div className="flex gap-2">
                {/* LinkedIn */}
                <motion.a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-secundario transition-colors hover:bg-primario"
                  aria-label="LinkedIn"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    className="h-4 w-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </motion.a>
                {/* Instagram */}
                <motion.a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-secundario transition-colors hover:bg-primario"
                  aria-label="Instagram"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    className="h-4 w-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </FadeIn>

          {/* Navigation and CTA */}
          <div className="flex flex-col gap-8 sm:flex-row sm:gap-16 lg:gap-[90px]">
            {/* Links */}
            <FadeIn delay={0.1}>
              <div className="flex flex-col gap-2 lg:gap-[6px]">
                {footerLinks.map((link, index) => (
                  <motion.div key={link.label} whileHover={{ x: 5 }}>
                    <Link
                      href={link.href}
                      className="text-[15px] leading-[22px] text-white transition-colors hover:text-secundario lg:text-[16px]"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </FadeIn>

            {/* CTA */}
            <FadeIn delay={0.2}>
              <Button variant="outline" href="#contacto">
                Contáctanos
              </Button>
            </FadeIn>
          </div>
        </div>

        {/* Divider and legal */}
        <FadeIn delay={0.3}>
          <div className="mt-12 border-t border-white/20 pt-6 lg:mt-[108px] lg:pt-[31px]">
            <p className="text-[13px] leading-[22px] text-white/80 lg:text-[16px]">
              <span className="hover:text-white cursor-pointer transition-colors">Política de privacidad</span>
              {" | "}
              <span className="hover:text-white cursor-pointer transition-colors">Aviso Legal</span>
              {" | "}
              <span className="hover:text-white cursor-pointer transition-colors">Política de cookies</span>
            </p>
          </div>
        </FadeIn>

        {/* Partner logos */}
        <FadeIn delay={0.4}>
          <div className="flex flex-col items-center justify-between gap-6 py-8 sm:flex-row lg:py-10">
            <Image
              src="/images/logo-prtr.png"
              alt="Plan de Recuperación"
              width={180}
              height={47}
              className="h-[35px] w-auto object-contain lg:h-[47px]"
            />
            <Image
              src="/images/logo-eu.png"
              alt="Financiado por la Unión Europea"
              width={180}
              height={47}
              className="h-[35px] w-auto object-contain lg:h-[47px]"
            />
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
