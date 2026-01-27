import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Complementos',
  description: 'Complementos para líneas de transporte industrial: cubiertas para transportadores, expulsores de envases, sistemas omega, mesas de rechazo y más.',
  keywords: ['complementos transportadores', 'cubiertas transportadores', 'expulsor envases', 'omega', 'mesa rechazo', 'acumulación calles'],
  openGraph: {
    title: 'Complementos - Ferdiale Ingeniería',
    description: 'Complementos industriales para líneas de transporte: cubiertas, expulsores, sistemas omega y mesas de rechazo.',
    url: '/productos/complementos',
    type: 'website',
  },
  alternates: {
    canonical: '/productos/complementos',
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Complementos",
  description: "Complementos para líneas de transporte industrial: cubiertas para transportadores, expulsores de envases, sistemas omega, mesas de rechazo y acumulación en calles.",
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

export default function ComplementosLayout({
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
