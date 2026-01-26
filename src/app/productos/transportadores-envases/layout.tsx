import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Transportadores de Envases',
  description: 'Transportadores de envases industriales de alto rendimiento. Diseño robusto, sistema ajustable y operación continua para líneas de envasado y embotellado.',
  keywords: ['transportadores de envases', 'transportador industrial', 'línea de envasado', 'sistema de transporte envases', 'maquinaria embotellado'],
  openGraph: {
    title: 'Transportadores de Envases - Ferdiale Ingeniería',
    description: 'Soluciones de transporte de envases con diseño robusto, ajustable y de bajo mantenimiento.',
    url: '/productos/transportadores-envases',
    type: 'website',
  },
  alternates: {
    canonical: '/productos/transportadores-envases',
  },
};

// JSON-LD for Product
const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Transportadores de Envases",
  description: "Transportador industrial diseñado para un rendimiento continuo. Combina durabilidad, precisión y versatilidad con estructura robusta y sistema adaptable.",
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

export default function TransportadoresEnvasesLayout({
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
