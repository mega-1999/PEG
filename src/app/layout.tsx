import type { Metadata } from "next";
import { Geist, Geist_Mono, Figtree } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { cn } from "@/lib/utils";
import ExtraordinaryFooter from "./components/ExtraordinaryFooter";
import EntrySystem from "./components/EntrySystem";
import FloatingTelemetryHub from "./components/FloatingTelemetryHub";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ALL USER SPECIFIED SEO KEYWORDS
export const ALL_SEO_KEYWORDS = [
  "PRECAST ENGINEERS",
  "PRECAST CONCRETE ENGINEERS",
  "PRECAST ENGINEERING",
  "PRECAST CONCRETE ENGINEERING",
  "precast drawings",
  "precast concrete drawings",
  "precast drafting",
  "precast concrete drafting",
  "DESIGN PRECAST CONCRETE",
  "design precast",
  "PRECAST TESTING",
  "PRECAST CONCRETE TESTING",
  "PRECAST CERTIFICATIONS",
  "PRECAST CONCRETE CERTIFICATIONS",
  "drawings for precast",
  "drawings for precast concrete",
  "culvert drawings",
  "precast concrete culvert drawings",
  "d box drawings",
  "manhole drawings",
  "catch basin drawings",
  "trench drawings",
  "septic tank drawings",
  "grease trap drawings",
];

// COMPREHENSIVE SEO METADATA
export const metadata: Metadata = {
  title: {
    default: "Precast Concrete Engineers & Drawings | PEG Precast Engineering Group",
    template: "%s | PEG Precast Engineering Group",
  },
  description:
    "Leading Precast Concrete Engineers providing professional precast engineering, structural design precast concrete, precast drafting, testing, certifications, and structural drawings for culverts, d-boxes, manholes, catch basins, trenches, septic tanks, and grease traps.",
  keywords: ALL_SEO_KEYWORDS,
  authors: [{ name: "Precast Engineering Group (PEG)", url: "https://www.precastengineering.org" }],
  creator: "Precast Engineering Group",
  publisher: "Precast Engineering Group",
  metadataBase: new URL("https://www.precastengineering.org"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.precastengineering.org",
    title: "Precast Concrete Engineering, Drawings & Drafting Services | PEG",
    description:
      "Certified Precast Concrete Engineers offering structural design, drafting, testing, NPCA certifications, and engineering drawings for culverts, manholes, catch basins, trenches, septic tanks, and grease traps.",
    siteName: "Precast Engineering Group",
    images: [
      {
        url: "https://pub-506b16bcde4f4fa8849e4eb8030acc3b.r2.dev/assets/images/Box_Culvert/13.jpeg",
        width: 1200,
        height: 630,
        alt: "PEG Precast Engineering & Drawings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Precast Concrete Engineers & Drawings | PEG",
    description:
      "Certified Precast Concrete Engineers delivering structural calculations, drafting, testing, certifications, and drawings for precast concrete structures.",
    images: ["https://pub-506b16bcde4f4fa8849e4eb8030acc3b.r2.dev/assets/images/Box_Culvert/13.jpeg"],
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
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data Schema for Google Search Indexing
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EngineeringService",
    "name": "Precast Engineering Group (PEG)",
    "url": "https://www.precastengineering.org",
    "logo": "https://www.precastengineering.org/favicon.png",
    "description":
      "Professional Precast Concrete Engineers offering structural precast engineering, design precast concrete, precast drafting, precast concrete testing, certifications, and production drawings for culverts, d-boxes, manholes, catch basins, trenches, septic tanks, and grease traps.",
    "serviceType": ALL_SEO_KEYWORDS,
    "areaServed": "Global",
    "knowsAbout": ALL_SEO_KEYWORDS,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Precast Engineering & Drafting Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Precast Engineering & Design",
            "description": "Certified structural precast concrete engineering, design precast concrete, testing, and certifications.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Precast Concrete Drafting & Drawings",
            "description":
              "Production drawings for precast, culvert drawings, d box drawings, manhole drawings, catch basin drawings, trench drawings, septic tank drawings, and grease trap drawings.",
          },
        },
      ],
    },
  };

  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", figtree.variable)}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <EntrySystem />
        <FloatingTelemetryHub />
        <div className="flex-grow">{children}</div>
        <ExtraordinaryFooter />
      </body>
    </html>
  );
}
