import type { MetadataRoute } from "next";

/**
 * This function generates the robots.txt file for your site.
 * A robots.txt file tells search engine crawlers which pages or files 
 * they can or cannot access on your site.
 */
export default function robots(): MetadataRoute.Robots {
  
  // IMPORTANT: Set this in your hosting environment (Vercel, Netlify, etc.)
  // It should be your full domain: https://www.qranalyticshub.space
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  // Fallback for local development, will not be used in production if the above is set.
  if (!baseUrl) {
    return {
      rules: [], // Return no rules if the base URL isn't set.
    };
  }

  return {
    rules: [
      {
        // This rule applies to all search engines ('*').
        userAgent: '*',
        
        // This command allows them to crawl everything on your site.
        allow: '/',
        
        // This command specifically BLOCKS them from crawling your authentication
        // and API folders, which is good practice.
        disallow: ['/auth/', '/api/'],
      },
    ],
    // This tells search engines where to find your sitemap.
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}