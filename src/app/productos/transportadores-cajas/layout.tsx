import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Transportadores de Cajas / Packs',
  description: 'Transportadores de cajas y packs para líneas de producción. Estructura modular en acero inoxidable, velocidad regulable y adaptación a diferentes tamaños y pesos.',
  keywords: ['transportadores de cajas', 'transportador packs', 'transporte cajas industrial', 'línea de producción', 'maquinaria industrial'],
  openGraph: {
    title: 'Transportadores de Cajas / Packs - Ferdiale Ingeniería',
    description: 'Transportadores de cajas y packs diseñados para optimizar el flujo interno y mejorar la eficiencia en líneas de producción.',
    url: '/productos/transportadores-cajas',
    type: 'website',
  },
  alternates: {
    canonical: '/productos/transportadores-cajas',
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Transportadores de Cajas / Packs",
  description: "Transportador de cajas y packs diseñado para optimizar el movimiento de productos en líneas de producción con estructura modular en acero inoxidable.",
  brand: {
    "@type": "Brand",
    name: "Ferdiale Ingeniería",
  },
  manufacturer: {
    "@type": "Organization",
    name: "Ferdiale Ingeniería S.L.",
  },
  category: "Sistemas de Transporte Industrial",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "EUR",
    seller: {
      "@type": "Organization",
      name: "Ferdiale Ingeniería S.L.",
    },
  },
};

export default function TransportadoresCajasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />
      {children}
    </>
  );
}
