import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesHero from '@/components/services/ServicesHero';

export const metadata: Metadata = {
  title: 'Servicios',
  description: 'Servicios integrales de ingeniería industrial: diseño a medida, fabricación, montaje, automatización, integración de sistemas, asistencia técnica y mantenimiento preventivo.',
  keywords: ['diseño industrial', 'fabricación maquinaria', 'automatización', 'mantenimiento industrial', 'ingeniería a medida', 'integración sistemas'],
  openGraph: {
    title: 'Servicios - Ferdiale Ingeniería',
    description: 'Ofrecemos servicios completos: diseño, fabricación, automatización y mantenimiento de sistemas de transporte industrial.',
    url: '/servicios',
    type: 'website',
  },
  alternates: {
    canonical: '/servicios',
  },
};

export default function Servicios() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <ServicesHero />
      <Footer />
    </main>
  );
}
