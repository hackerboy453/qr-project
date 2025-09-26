import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.qranalyticshub.space";

  return [
    {
      url: `${base}/`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 1.0,
      images: [
        {
          loc: `${base}/qr_code.png`,
          title: "QR Analytics Hub QR Code",
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
