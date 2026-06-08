import type { Metadata } from "next";
import localFont from "next/font/local";
import { Noto_Serif, Noto_Sans, Great_Vibes } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/layout/Footer";

const molot = localFont({
  src: "../public/font/Molot.otf",
  variable: "--font-molot",
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const SITE_URL = "https://illashimwe.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Illashimwe Adventure | Premium Tanzania Safaris",
    template: "%s | Illashimwe Adventure",
  },
  description:
    "Private luxury safaris crafted in the heart of Tanzania. Serengeti, Ngorongoro, Kilimanjaro expeditions and Zanzibar escapes — tailored exclusively for you.",
  keywords: [
    "Tanzania safari",
    "luxury safari Tanzania",
    "Serengeti tour",
    "Kilimanjaro climb",
    "Ngorongoro crater",
    "Zanzibar beach",
    "private safari Africa",
    "Illashimwe Adventure",
    "Arusha tours",
  ],
  authors: [{ name: "Illashimwe Adventure", url: SITE_URL }],
  creator: "Illashimwe Adventure",
  publisher: "Illashimwe Adventure",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Illashimwe Adventure",
    title: "Illashimwe Adventure | Premium Tanzania Safaris",
    description:
      "Private luxury safaris crafted in the heart of Tanzania. Serengeti, Ngorongoro, Kilimanjaro and Zanzibar — tailored exclusively for you.",
    images: [
      {
        url: "/hero_serengeti_migration_1768491216654.webp",
        width: 1200,
        height: 630,
        alt: "Serengeti Migration Safari — Illashimwe Adventure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Illashimwe Adventure | Premium Tanzania Safaris",
    description:
      "Private luxury safaris crafted in the heart of Tanzania. Serengeti, Ngorongoro, Kilimanjaro and Zanzibar.",
    images: ["/hero_serengeti_migration_1768491216654.webp"],
    creator: "@illashimwe_adventure",
    site: "@illashimwe_adventure",
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    // Add your Google Search Console verification token here:
    // google: "YOUR_GOOGLE_VERIFICATION_TOKEN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${molot.variable} ${notoSerif.variable} ${notoSans.variable} ${greatVibes.variable}`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        {/* JSON-LD: Local Business structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TouristInformationCenter",
              name: "Illashimwe Adventure",
              description:
                "Private luxury safaris crafted in the heart of Tanzania.",
              url: SITE_URL,
              logo: `${SITE_URL}/logo/illashimwe logo.webp`,
              image: `${SITE_URL}/hero_serengeti_migration_1768491216654.webp`,
              telephone: "+255755310533",
              email: "info@illashimwe.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Main St",
                addressLocality: "Arusha",
                addressCountry: "TZ",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -3.3869,
                longitude: 36.6829,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "07:00",
                closes: "20:00",
              },
              sameAs: [
                "https://www.facebook.com/illashimweadventure",
                "https://www.instagram.com/illashimwe_adventure",
              ],
              priceRange: "$$$",
              currenciesAccepted: "USD",
              paymentAccepted: "Cash, Credit Card, Bank Transfer",
              areaServed: {
                "@type": "Country",
                name: "Tanzania",
              },
              hasMap: "https://maps.google.com/?q=Arusha,Tanzania",
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
