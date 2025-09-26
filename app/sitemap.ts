import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.qranalyticshub.space";

  return [
    {
      url: `${base}/`,
      lastModified: new Date(), // ISO string will be handled automatically
      changeFrequency: "weekly",
      priority: 1.0,
      images: [
        {
          url: `${base}/qr_code.png`, // Use "url" instead of "loc"
          title: "QR Analytics Hub QR Code",
        },
      ],
    },
    {
      url: `${base}/dashboard`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
  ];
}
