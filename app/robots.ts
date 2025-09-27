import type { MetadataRoute } from "next";

/**
 * Generates the robots.txt file for the website.
 * This file tells web crawlers which pages or files the crawler can or can't request from your site.
 *
 * @returns {MetadataRoute.Robots} The robots.txt configuration object.
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/robots
 */
export default function robots(): MetadataRoute.Robots {
  // Retrieve the site's base URL from environment variables.
  // This is crucial for correctly specifying the sitemap URL.
  // Make sure this is set in your hosting environment (e.g., Vercel, Netlify).
  // Example: NEXT_PUBLIC_SITE_URL=https://www.qranalyticshub.space
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  // If the base URL is not set, return an empty ruleset.
  // This prevents build errors if the environment variable is missing.
  if (!baseUrl) {
    return {
      rules: [],
    };
  }

  return {
    rules: [
      {
        // Applies to all web crawlers.
        userAgent: '*',
        // Allows crawlers to access all content by default.
        allow: '/',
        // Prevents crawlers from indexing authentication and API routes.
        disallow: ['/auth/', '/api/'],
      },
    ],
    // Specifies the location of your sitemap.
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
