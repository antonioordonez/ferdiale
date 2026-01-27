import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sistemas sin Presión',
  description: 'Sistemas de acumulación sin presión para líneas de transporte de envases. Garantizan fluidez y continuidad del proceso productivo, evitando cuellos de botella.',
  keywords: ['sistemas sin presión', 'acumulación sin presión', 'transporte envases', 'línea de producción', 'maquinaria industrial'],
  openGraph: {
    title: 'Sistemas sin Presión - Ferdiale Ingeniería',
    description: 'Sistemas de acumulación sin presión para líneas de transporte de envases. Fluidez y continuidad del proceso productivo.',
    url: '/productos/sistemas-sin-presion',
    type: 'website',
  },
  alternates: {
    canonical: '/productos/sistemas-sin-presion',
  },
};

// JSON-LD for Product
const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Sistemas sin Presión",
  description: "Sistema de acumulación sin presión para líneas de transporte de envases, diseñado para garantizar la fluidez y continuidad del proceso productivo.",
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

export default function SistemasSinPresionLayout({
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
