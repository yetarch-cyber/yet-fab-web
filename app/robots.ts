import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/shop/alherd-pendant/order",
        "/shop/alherd-table/order",
        "/shop/alherd-floor/order",
        "/shop/parasite/inquiry",
        "/contact/inquiry",
      ],
    },
    sitemap: "https://www.yet-fab.com/sitemap.xml",
  };
}
