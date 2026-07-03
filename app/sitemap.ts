import type { MetadataRoute } from "next";

const SITE_URL = "https://shahenda-shaheen.vercel.app"; // TODO: replace with your real deployed domain

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
