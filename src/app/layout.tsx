import type { Metadata } from "next";
import { Playfair_Display, Geist, Bebas_Neue } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["normal", "italic"],
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://humza-finance.com"),
  title: {
    default: "HUMZA — ACCA Qualified Finance Expert & Corporate Advisor | Lahore, Pakistan",
    template: "%s | Humza, ACCA",
  },
  description:
    "Official advisory portfolio of Humza, ACCA chartered certified accountant based in Lahore, Pakistan. Specializing in statutory IFRS 9/15/16 financial reporting, FBR corporate tax, internal audit governance, and DCF business valuation for Pakistan & GCC enterprises.",
  keywords: [
    "ACCA Pakistan",
    "ACCA Financial Advisor Lahore",
    "IFRS Specialist Pakistan",
    "IFRS 16 Lease Accounting",
    "FBR Corporate Tax Consultant",
    "SECP Corporate Governance",
    "COSO Internal Audit Framework",
    "DCF Valuation Pakistan",
    "Fractional CFO Lahore",
    "GCC Corporate Tax UAE Advisory",
    "CFA Candidate Pakistan",
  ],
  authors: [{ name: "Humza, ACCA", url: "https://humza-finance.com" }],
  creator: "Humza, ACCA",
  publisher: "Humza Advisory",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "HUMZA — ACCA Qualified Corporate Financial Strategist",
    description:
      "Where Precision Meets Capital. Professional advisory practice of Humza, ACCA — serving forward-thinking enterprises in Pakistan and the Gulf.",
    url: "https://humza-finance.com",
    siteName: "HUMZA · ACCA Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/humza-hero-master-4k.jpg",
        width: 1200,
        height: 630,
        alt: "Humza — ACCA Corporate Financial Advisory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HUMZA — ACCA Qualified Corporate Financial Strategist",
    description: "Where Precision Meets Capital. Official portfolio of Humza, ACCA.",
    images: ["/images/humza-hero-master-4k.jpg"],
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://humza-finance.com/#person",
      name: "Humza",
      jobTitle: "ACCA Qualified Corporate Financial Strategist & Advisor",
      description:
        "ACCA-qualified financial expert based in Lahore, Pakistan, advising enterprises on complex IFRS reporting, internal audit, corporate tax optimization, and DCF valuation.",
      url: "https://humza-finance.com",
      image: "https://humza-finance.com/images/humza-about-executive.webp",
      alumniOf: "ACCA UK",
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          name: "ACCA Chartered Certified Accountant",
          credentialCategory: "Chartered Professional Qualification",
          recognizedBy: {
            "@type": "Organization",
            name: "Association of Chartered Certified Accountants",
          },
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "CFA Charterholder Candidate",
          credentialCategory: "Professional Credential",
          recognizedBy: {
            "@type": "Organization",
            name: "CFA Institute",
          },
        },
      ],
      knowsAbout: [
        "IFRS 9, 15 & 16 Standards",
        "Statutory FBR Corporate Tax Strategy",
        "COSO Internal Audit Frameworks",
        "SECP Code of Corporate Governance",
        "DCF Valuation & M&A Due Diligence",
        "State Bank of Pakistan (SBP) Reporting",
        "UAE / GCC Corporate Tax & VAT",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lahore",
        addressRegion: "Punjab",
        addressCountry: "PK",
      },
    },
    {
      "@type": "FinancialService",
      "@id": "https://humza-finance.com/#service",
      name: "Humza · Strategic Capital & Advisory Practice",
      url: "https://humza-finance.com",
      priceRange: "$$$$",
      currenciesAccepted: "PKR, AED, USD",
      areaServed: ["Pakistan", "United Arab Emirates", "Saudi Arabia"],
      geo: {
        "@type": "GeoCoordinates",
        latitude: "31.5204",
        longitude: "74.3587",
      },
      serviceType: [
        "IFRS Financial Reporting",
        "Corporate Tax Advisory",
        "Internal Audit Assurance",
        "M&A Due Diligence",
        "FP&A Financial Modelling",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${geist.variable} ${bebas.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#050505] text-[#FAF8F3] font-sans antialiased min-h-screen">
        {children}
        <div aria-hidden className="grain fixed inset-0 z-[80] pointer-events-none opacity-[0.045]" />
      </body>
    </html>
  );
}
