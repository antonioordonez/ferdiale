'use client';

import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

export default function Footer() {
  return (
    <footer id="contact" className="bg-dark text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[100px] pt-16 md:pt-20 pb-10">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-20">
          {/* Left: Logo and Social */}
          <div className="flex flex-col gap-8">
            <Link href="/" className="relative h-[30px] w-[149px]">
              <Image
                src="/images/logo-ferdiale-blanco.png"
                alt="Ferdiale"
                fill
                className="object-contain"
              />
            </Link>

            <div className="flex gap-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="LinkedIn"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="YouTube"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Navigation and CTA */}
          <div className="flex flex-col sm:flex-row gap-10 lg:gap-24">
            {/* Navigation Links */}
            <nav aria-label="Footer navigation" className="flex flex-col gap-1.5">
              <Link href="/" className="text-white text-base leading-[22px] hover:opacity-80 transition-opacity">
                Inicio
              </Link>
              <Link href="/sobre-ferdiale" className="text-white text-base leading-[22px] hover:opacity-80 transition-opacity">
                Sobre Ferdiale
              </Link>
              <Link href="/productos" className="text-white text-base leading-[22px] hover:opacity-80 transition-opacity">
                Productos
              </Link>
              <Link href="/servicios" className="text-white text-base leading-[22px] hover:opacity-80 transition-opacity">
                Servicios
              </Link>
            </nav>

            {/* CTA Button */}
            <div>
              <Button href="/contacto" variant="outline">
                Contáctanos
              </Button>
            </div>
          </div>
        </div>

        {/* Divider and Legal Links */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <nav aria-label="Legal links" className="flex flex-wrap justify-center gap-x-2 text-white text-base">
            <Link href="/privacidad" className="hover:opacity-80 transition-opacity">
              Política de privacidad
            </Link>
            <span className="opacity-60" aria-hidden="true">|</span>
            <Link href="/aviso-legal" className="hover:opacity-80 transition-opacity">
              Aviso Legal
            </Link>
            <span className="opacity-60" aria-hidden="true">|</span>
            <Link href="/cookies" className="hover:opacity-80 transition-opacity">
              Política de cookies
            </Link>
          </nav>
        </div>

        {/* EU Logos and Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8 mt-10">
          <div className="flex items-center gap-8">
            <div className="relative h-[40px] w-[120px] shrink-0">
              <Image
                src="/images/logo-prtr.png"
                alt="Plan de Recuperación, Transformación y Resiliencia"
                fill
                className="object-contain"
              />
            </div>

            <div className="relative h-[40px] w-[180px] shrink-0">
              <Image
                src="/images/logo-eu.png"
                alt="Financiado por la Unión Europea - NextGenerationEU"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <a
            href="https://abalun.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-white/60 hover:text-white/80 transition-colors text-sm"
          >
            <span>Designed and built by</span>
            <span className="font-medium text-white">Abalun</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
