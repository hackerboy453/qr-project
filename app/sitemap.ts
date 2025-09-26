import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://www.qranalyticshub.space";

  return [
    {
      url: `${base}/`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 1.0,
      images: [
        {
          loc: `${base}/qr_code.png`, // Image in /public folder
          title: "QR Code Generate and Analytics(100% free)",
        },
      ],
    },
    {
      url: `${base}/dashboard`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
  ];
}
