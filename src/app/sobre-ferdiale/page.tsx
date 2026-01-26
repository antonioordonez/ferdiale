import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHero from '@/components/about/AboutHero';
import AboutValues from '@/components/about/AboutValues';
import AboutContact from '@/components/about/AboutContact';

export const metadata: Metadata = {
  title: 'Sobre Ferdiale',
  description: 'Conoce Ferdiale Ingeniería: más de 20 años diseñando soluciones de transporte industrial. Innovación, calidad y compromiso con la excelencia en cada proyecto.',
  keywords: ['sobre Ferdiale', 'historia empresa', 'ingeniería industrial España', 'empresa transporte industrial', 'valores corporativos'],
  openGraph: {
    title: 'Sobre Ferdiale - Ferdiale Ingeniería',
    description: 'Más de 20 años transformando desafíos en soluciones innovadoras de transporte industrial.',
    url: '/sobre-ferdiale',
    type: 'website',
  },
  alternates: {
    canonical: '/sobre-ferdiale',
  },
};

export default function SobreFerdiale() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <AboutHero />
      <AboutValues />
      <AboutContact />
      <Footer />
    </main>
  );
}
