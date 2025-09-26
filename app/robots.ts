import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  
  // Make sure this environment variable is set in your hosting (Vercel/Netlify)
  // NEXT_PUBLIC_SITE_URL = https://www.qranalyticshub.space
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (!baseUrl) {
    // This prevents errors during the build process if the URL isn't set
    return { rules: [] };
  }

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/auth/', '/api/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
