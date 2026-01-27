import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Transportadores de Palets',
  description: 'Transportadores de palets para líneas de producción. Movimientos precisos, seguros y continuos con estructura robusta para cargas pesadas.',
  keywords: ['transportadores de palets', 'transporte palets industrial', 'paletización', 'línea de producción', 'maquinaria industrial'],
  openGraph: {
    title: 'Transportadores de Palets - Ferdiale Ingeniería',
    description: 'Transportadores de palets diseñados para optimizar el flujo de materiales con movimientos precisos, seguros y continuos.',
    url: '/productos/transportadores-palets',
    type: 'website',
  },
  alternates: {
    canonical: '/productos/transportadores-palets',
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Transportadores de Palets",
  description: "Transportador de palets diseñado para optimizar el flujo de materiales en líneas de producción, garantizando movimientos precisos, seguros y continuos.",
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

export default function TransportadoresPaletsLayout({
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
