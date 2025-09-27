import type React from "react";
import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Ads from "@/components/ads";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

// --- SEO Configuration ---
const siteUrl = "https://www.qranalyticshub.space"; // Your actual domain
const siteName = "QR Analytics Hub";
const siteTitle = "Free QR Code Generator with Analytics & Tracking | QR Analytics Hub";
const siteDescription =
  "Create dynamic, custom QR codes with logos for free. Track scans, location, device, and more with our real-time analytics dashboard. No sign-up required.";
const imageUrl = `${siteUrl}/qr_code.png`;

// --- Enhanced SEO Keywords ---
const keywords = [
  // Core & Primary
  "qr code generator",
  "free qr code generator",
  "qr code analytics",
  "dynamic qr code",
  "qr code track",
  "create qr code",
  "qr code maker",
  "barcode scanner",
  "qr scanner",

  // Features & Functionality
  "qr code with logo",
  "custom qr code",
  "trackable qr codes",
  "qr code tracking",
  "scan analytics",
  "url to qr code",
  "link to qr code",
  "vcard qr code",
  "pdf to qr code",
  "qr code for website",
  "qr code for business card",

  // User Intent & Long-Tail
  "generate qr code for url",
  "how to track qr code scans",
  "best free qr code generator",
  "create qr code online",
  "free qr code generator no sign up",
  "qr code generator free online",
  "dynamic qr code generator",
  
  // Related Tools
  "qr code reader",
  "qr code scanner online",
  "barcode generator"
];

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  manifest: "/manifest.json",

  applicationName: "QR Analytics Hub",
  keywords: keywords,
  authors: [{ name: "QR Analytics Hub Team", url: siteUrl }],
  creator: "QR Analytics Hub Team",
  publisher: "QR Analytics Hub",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName,
    images: [
      {
        url: imageUrl,
        width: 512,
        height: 512,
        alt: "QR Analytics Hub Logo",
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [imageUrl],
  },

  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },

  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],

  icons: {
    icon: [{ url: "/qr_code.png", sizes: "any" }],
    apple: [{ url: "/qr_code.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${roboto_mono.variable} antialiased`}
    >
      {/* Google Tag Manager */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PXH5SLS9');
        `}
      </Script>

      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PXH5SLS9"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <main>{children}</main>
        <Ads />

        {/* --- Enhanced Schema.org JSON-LD --- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication", // More specific type for your service
              name: siteName,
              url: siteUrl,
              logo: imageUrl,
              description: siteDescription,
              applicationCategory: "BusinessApplication",
              operatingSystem: "All", // Web-based
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: siteName,
              url: siteUrl,
            }),
          }}
        />
      </body>
    </html>
  );
}
