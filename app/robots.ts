import type { MetadataRoute } from "next";

const SITE_URL = "https://shahenda-shaheen.vercel.app"; // TODO: replace with your real deployed domain

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
