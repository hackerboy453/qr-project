import type React from "react";
import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const siteName = "QR Analytics";
const siteTitle = "QR Analytics - Generate and Track QR Codes (100% Free)";
const siteDescription =
  "Create QR codes and track their performance with detailed analytics. Instantly generate, share, and track QR codes with real-time analytics.";
const imageUrl = `${siteUrl}/qr_code.png`;

// ✅ SEO-Enhanced Metadata
export const metadata: Metadata = {
  // --- Core Metadata ---
  title: siteTitle,
  description: siteDescription,
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.json",

  // --- SEO Best Practices ---
  applicationName: "QR Analytics Hub",
  keywords: [
    "QR code generator",
    "QR code analytics",
    "QR tracking",
    "scan analytics",
    "device type analytics",
    "country analytics",
    "browser analytics",
    "barcode generator",
    "free qr code generator",
    "trackable qr codes",
  ],
  authors: [{ name: "QR Analytics Team", url: siteUrl }],
  creator: "QR Analytics Team",
  publisher: "QR Analytics",

  // --- Robots Meta Tag for Crawlers ---
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // --- Open Graph (for Facebook, LinkedIn, etc.) ---
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
        alt: "QR Analytics QR Code",
      },
    ],
    locale: "en_US",
  },

  // --- Twitter Card (for Twitter sharing) ---
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [imageUrl],
  },

  // --- Viewport and Theme ---
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],

  // --- Icons (Favicon for Chrome Tab, iOS, Android) ---
  icons: {
    icon: [
      { url: "/qr_code.png", sizes: "any" }, // ✅ Tab icon
    ],
    apple: [{ url: "/qr_code.png", sizes: "180x180", type: "image/png" }],
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
      className={`${inter.variable} ${roboto_mono.variable} antialiased`}
    >
      <body>
        <main>{children}</main>
        <Ads />

        {/* --- Schema.org JSON-LD --- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: siteName,
              url: siteUrl,
              logo: imageUrl, // ✅ Using qr_code.png as logo
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
