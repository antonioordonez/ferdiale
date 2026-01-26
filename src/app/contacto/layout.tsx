import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Contacta con Ferdiale Ingeniería. Oficinas en Madrid y fábrica en Jerez de la Frontera. Solicita presupuesto para sistemas de transporte industrial.',
  keywords: ['contacto Ferdiale', 'presupuesto transporte industrial', 'oficina Madrid', 'fábrica Jerez', 'solicitar información'],
  openGraph: {
    title: 'Contacto - Ferdiale Ingeniería',
    description: 'Conecta con nosotros. Oficinas en Madrid y Jerez de la Frontera. Solicita información sobre sistemas de transporte.',
    url: '/contacto',
    type: 'website',
  },
  alternates: {
    canonical: '/contacto',
  },
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
