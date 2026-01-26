import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductsHero from '@/components/products/ProductsHero';

export const metadata: Metadata = {
  title: 'Productos',
  description: 'Descubre nuestra gama de sistemas de transporte industrial: transportadores de envases, sistemas sin presión, complementos y soluciones personalizadas para líneas de envasado.',
  keywords: ['transportadores de envases', 'sistemas sin presión', 'complementos industriales', 'maquinaria envasado', 'transportadores industriales'],
  openGraph: {
    title: 'Productos - Ferdiale Ingeniería',
    description: 'Gama completa de sistemas de transporte para líneas de envasado: transportadores, sistemas sin presión y complementos.',
    url: '/productos',
    type: 'website',
  },
  alternates: {
    canonical: '/productos',
  },
};

export default function Productos() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <ProductsHero />
      <Footer />
    </main>
  );
}
