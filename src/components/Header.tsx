"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Inicio", href: "#" },
  { label: "Sobre Ferdiale", href: "#sobre" },
  { label: "Productos", href: "#productos" },
  { label: "Servicios", href: "#servicios" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex flex-col">
      {/* Top accent bar */}
      <motion.div
        className="h-[10px] w-full bg-primario"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
      />

      {/* Main navigation */}
      <motion.nav
        className={`flex h-[65px] items-center justify-between bg-oscuro px-5 transition-all duration-300 lg:h-[75px] lg:px-10 ${
          isScrolled ? "shadow-lg" : ""
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Link href="/" className="relative z-50">
          <Image
            src="/images/logo-ferdiale-blanco.png"
            alt="Ferdiale"
            width={126}
            height={26}
            className="h-auto w-[100px] lg:w-[126px]"
          />
        </Link>

        {/* Desktop menu */}
        <div className="hidden items-center gap-10 lg:flex">
          {navItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
            >
              <Link
                href={item.href}
                className="group relative text-[14px] font-medium uppercase leading-6 tracking-wide text-white transition-opacity hover:opacity-80"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primario transition-all duration-300 group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          className="hidden lg:block"
        >
          <Link
            href="#contacto"
            className="rounded-[15px] bg-white px-[18px] py-3 text-[14px] font-bold uppercase leading-5 text-primario transition-all duration-300 hover:bg-primario hover:text-white hover:shadow-lg"
          >
            Contacta
          </Link>
        </motion.div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label="Toggle menu"
        >
          <motion.span
            className="block h-0.5 w-6 bg-white"
            animate={{
              rotate: isMenuOpen ? 45 : 0,
              y: isMenuOpen ? 8 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block h-0.5 w-6 bg-white"
            animate={{
              opacity: isMenuOpen ? 0 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block h-0.5 w-6 bg-white"
            animate={{
              rotate: isMenuOpen ? -45 : 0,
              y: isMenuOpen ? -8 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-oscuro lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex h-full flex-col items-center justify-center gap-8 pt-[75px]">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-2xl font-medium uppercase tracking-wide text-white transition-colors hover:text-primario"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <Link
                  href="#contacto"
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-4 inline-block rounded-[15px] bg-white px-8 py-4 text-lg font-bold uppercase text-primario transition-all duration-300 hover:bg-primario hover:text-white"
                >
                  Contacta
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
