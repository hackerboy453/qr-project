import type React from "react";
import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Ads from "@/components/ads";
import Script from "next/script";

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

export const metadata: Metadata = {
  title: "QR Analytics - Generate and Track QR Codes(100% Free)",
  description: "Create QR codes and track their performance with detailed analytics",
  generator: 'v0.app',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/qr_code.png',
    shortcut: '/qr_code.png',
    apple: '/qr_code.png',
  },
  keywords: [
    'QR code generator',
    'QR code analytics',
    'QR tracking',
    'scan analytics',
    'device type analytics',
    'country analytics',
    'browser analytics',
    'barcode generator'
  ],
  openGraph: {
    type: 'website',
    url: '/',
    title: 'QR Analytics - Generate and Track QR Codes(100% Free)',
    description: 'Generate QR codes and track scans, countries, device type, browser, OS and time.',
    siteName: 'QR Analytics',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QR Analytics - Generate and Track QR Codes(100% Free)',
    description: 'Generate QR codes and track scans, countries, device type, browser, OS and time.',
  },
  // Add the verification object here for search engines
  verification: {
    yandex: 'f7b9834cf84d3aba', // Yandex verification code added here
    // You can also add Google verification here in the future if needed
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto_mono.variable} antialiased`}>
      <body>
        <main>
          {children}
          <Ads />
        </main>
        {/* Organization JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'QR Analytics',
              url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
              logo: (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000') + '/placeholder-logo.png'
            })
          }}
        />
        {/* WebSite JSON-LD with search action */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'QR Analytics',
              url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
            })
          }}
        />
        {/* Google Tag scripts */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17593082211"
        />
        <Script id="google-ads-config">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-17593082211');
          `}
        </Script>
      </body>
    </html>
  );
}
