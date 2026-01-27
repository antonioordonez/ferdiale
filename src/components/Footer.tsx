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
