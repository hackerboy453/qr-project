import type React from "react";
import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Ads from "@/components/ads";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: "--font-inter",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: 'swap',
  variable: "--font-roboto-mono",
});

// SEO-Enhanced Metadata
export const metadata: Metadata = {
  // --- Core Metadata ---
  title: "QR Analytics - Generate and Track QR Codes (100% Free)",
  description: "Create QR codes and track their performance with detailed analytics. Instantly generate, share, and track QR codes with real-time analytics.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  manifest: "/manifest.json",

  // --- SEO Best Practices ---
  applicationName: 'QR Analytics Hub',
  keywords: [
    'QR code generator', 'QR code analytics', 'QR tracking', 'scan analytics',
    'device type analytics', 'country analytics', 'browser analytics', 'barcode generator',
    'free qr code generator', 'trackable qr codes'
  ],
  authors: [{ name: 'QR Analytics Team', url: process.env.NEXT_PUBLIC_SITE_URL }],
  creator: 'QR Analytics Team',
  publisher: 'QR Analytics',

  // --- Robots Meta Tag for Crawlers ---
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // --- Open Graph (for Facebook, LinkedIn, etc.) ---
  openGraph: {
    type: 'website',
    url: '/',
    title: 'QR Analytics - Generate and Track QR Codes (100% Free)',
    description: 'Generate QR codes and track scans, countries, device type, browser, OS and time.',
    siteName: 'QR Analytics',
    images: [
      {
        url: '/qr_code.png', // <<< Updated image path
        width: 512, // Assuming standard dimensions for a QR code image
        height: 512,
        alt: 'QR Analytics QR Code',
      },
    ],
    locale: 'en_US',
  },

  // --- Twitter Card (for Twitter sharing) ---
  twitter: {
    card: 'summary', // Use 'summary_large_image' if you have a larger banner
    title: 'QR Analytics - Generate and Track QR Codes (100% Free)',
    description: 'Generate QR codes and track scans, countries, device type, browser, OS and time.',
    // creator: '@YourTwitterHandle', // Optional: Add your Twitter handle
    images: ['/qr_code.png'], // <<< Updated image path
  },

  // --- Viewport and Theme ---
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  return (
    <html lang="en" className={`${inter.variable} ${roboto_mono.variable} antialiased`}>
      <body>
        <main>{children}</main>
        <Ads />

        {/* --- Scripts --- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'QR Analytics',
              url: siteUrl,
              logo: `${siteUrl}/qr_code.png` // <<< Updated logo path
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'QR Analytics',
              url: siteUrl
            })
          }}
        />
      </body>
    </html>
  );
}
