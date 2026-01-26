'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Inicio', sections: ['/'] },
  { href: '/sobre-ferdiale', label: 'Sobre Ferdiale', sections: ['/sobre-ferdiale'] },
  { href: '/productos', label: 'Productos', sections: ['/productos'] },
  { href: '/servicios', label: 'Servicios', sections: ['/servicios'] },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('/');
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Detect scroll for header background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Detect active section based on scroll position and pathname
  useEffect(() => {
    // If on a dedicated page, set that as active
    if (pathname !== '/') {
      setActiveSection(pathname);
      return;
    }

    const handleScroll = () => {
      const sections = ['services', 'products', 'about'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(`#${section}`);
            return;
          }
        }
      }
      setActiveSection('/');
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top accent bar */}
      <div className="h-[10px] bg-primary" />

      {/* Main navigation */}
      <nav className={`bg-dark h-[75px] flex items-center justify-between px-6 lg:px-10 transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
        {/* Logo */}
        <Link href="/" className="relative h-[26px] w-[126px]">
          <Image
            src="/images/logo-ferdiale-blanco.png"
            alt="Ferdiale"
            fill
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = link.sections.includes(activeSection) || (link.href === '/' && activeSection === '/' && pathname === '/');

            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-white text-[14px] font-medium uppercase tracking-wide py-2 group"
              >
                <span className="relative">
                  {link.label}

                  {/* Underline - visible when active */}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-[2px] bg-white"
                    initial={false}
                    animate={{
                      width: isActive ? '100%' : '0%',
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  />

                  {/* Hover underline animation */}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white/60 group-hover:w-full transition-all duration-300 ease-out" />
                </span>
              </Link>
            );
          })}
        </div>

        {/* CTA Button - Desktop */}
        <Link
          href="/contacto"
          className="hidden lg:block bg-white text-primary text-[14px] font-bold uppercase px-5 py-3 rounded-[15px] hover:bg-opacity-90 transition-all"
        >
          Contacta
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu - Full Screen */}
      <motion.div
        initial={false}
        animate={{
          opacity: isMenuOpen ? 1 : 0,
          pointerEvents: isMenuOpen ? 'auto' : 'none',
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="lg:hidden fixed inset-0 top-[85px] bg-dark z-40"
      >
        <div className="flex flex-col justify-center items-center h-full gap-8">
          {navLinks.map((link, index) => {
            const isActive = activeSection === link.href;

            return (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : 20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className={`text-white text-[24px] font-bold uppercase tracking-wide transition-colors ${isActive ? 'text-primary' : 'hover:text-primary/80'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </motion.div>
            );
          })}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : 20 }}
            transition={{ duration: 0.4, delay: navLinks.length * 0.1 }}
            className="mt-4"
          >
            <Link
              href="/contacto"
              className="bg-white text-primary text-[18px] font-bold uppercase px-8 py-4 rounded-[15px] inline-block"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacta
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </header>
  );
}
