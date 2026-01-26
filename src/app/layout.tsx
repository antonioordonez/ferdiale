import type { Metadata } from "next";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ferdiale.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ferdiale Ingeniería - Sistemas de transporte para líneas de producción",
    template: "%s | Ferdiale Ingeniería",
  },
  description: "Diseñamos, fabricamos y automatizamos sistemas de transporte para líneas de envasado y embotellado. Más de 20 años de experiencia en soluciones industriales a medida.",
  keywords: [
    "sistemas de transporte",
    "líneas de envasado",
    "líneas de embotellado",
    "transportadores industriales",
    "automatización industrial",
    "ingeniería industrial",
    "transportadores de envases",
    "sistemas sin presión",
    "Ferdiale",
    "maquinaria industrial",
    "Jerez de la Frontera",
    "España",
  ],
  authors: [{ name: "Ferdiale Ingeniería S.L." }],
  creator: "Ferdiale Ingeniería S.L.",
  publisher: "Ferdiale Ingeniería S.L.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteUrl,
    siteName: "Ferdiale Ingeniería",
    title: "Ferdiale Ingeniería - Sistemas de transporte para líneas de producción",
    description: "Diseñamos, fabricamos y automatizamos sistemas de transporte para líneas de envasado y embotellado. Más de 20 años de experiencia en soluciones industriales a medida.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ferdiale Ingeniería - Sistemas de transporte industrial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ferdiale Ingeniería - Sistemas de transporte para líneas de producción",
    description: "Diseñamos, fabricamos y automatizamos sistemas de transporte para líneas de envasado y embotellado.",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

// JSON-LD Structured Data for Organization
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ferdiale Ingeniería S.L.",
  alternateName: "FERDIALE INGENIERIA, S.L.",
  url: siteUrl,
  logo: `${siteUrl}/images/logo-ferdiale.png`,
  description: "Empresa especializada en el diseño, fabricación y automatización de sistemas de transporte para líneas de envasado y embotellado.",
  foundingDate: "2000",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Parque Empresarial Oeste, C/ Jardinería, 10",
      addressLocality: "Jerez de la Frontera",
      addressRegion: "Cádiz",
      postalCode: "11408",
      addressCountry: "ES",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "C/Cidro, 2 – Despacho 3",
      addressLocality: "Madrid",
      postalCode: "28044",
      addressCountry: "ES",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+34-911-26-38-30",
    contactType: "sales",
    email: "info@ferdiale.com",
    availableLanguage: ["Spanish", "English"],
  },
  sameAs: [
    "https://www.linkedin.com/company/ferdiale",
    "https://www.youtube.com/@ferdiale",
  ],
  taxID: "B87711040",
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 40.4168,
      longitude: -3.7038,
    },
    geoRadius: "2000 km",
  },
  knowsAbout: [
    "Sistemas de transporte industrial",
    "Líneas de envasado",
    "Líneas de embotellado",
    "Automatización industrial",
    "Transportadores de envases",
  ],
};

// JSON-LD for LocalBusiness (for local SEO)
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#localbusiness`,
  name: "Ferdiale Ingeniería S.L.",
  image: `${siteUrl}/images/logo-ferdiale.png`,
  telephone: "+34-911-26-38-30",
  email: "info@ferdiale.com",
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Parque Empresarial Oeste, C/ Jardinería, 10",
    addressLocality: "Jerez de la Frontera",
    addressRegion: "Cádiz",
    postalCode: "11408",
    addressCountry: "ES",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 36.6892,
    longitude: -6.1378,
  },
  priceRange: "$$$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1E3A5F" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
