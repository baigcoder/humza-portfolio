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
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://humza-finance.com"),
  title: {
    default: "Humza | Finance Advisory in Lahore, Pakistan",
    template: "%s | Humza",
  },
  description:
    "Finance professional in Lahore who completed all ACCA examinations at SKANS, advising on reporting, tax, governance, and valuation in Pakistan and the GCC.",
  authors: [{ name: "Humza", url: "https://humza-finance.com" }],
  creator: "Humza",
  publisher: "Humza Advisory",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Humza | Finance Advisory",
    description:
      "Clear finance advice across reporting, tax, governance, and valuation. Based in Lahore, serving Pakistan and the GCC.",
    url: "https://humza-finance.com",
    siteName: "Humza Finance Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/humza-social.webp",
        width: 1200,
        height: 630,
        alt: "Humza — Finance Advisory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Humza | Finance Advisory",
    description: "Finance advisory across reporting, tax, governance, and valuation in Pakistan and the GCC.",
    images: ["/images/humza-social.webp"],
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
      jobTitle: "Finance Advisor",
      description:
        "Finance professional based in Lahore, Pakistan. Completed all ACCA examinations at SKANS; advises on IFRS reporting, internal audit, corporate tax, and valuation.",
      url: "https://humza-finance.com",
      image: "https://humza-finance.com/images/humza-about-executive.webp",
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
