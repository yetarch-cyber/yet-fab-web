import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.yet-fab.com";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/shop`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/shop/alherd-pendant`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/policies`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${base}/shop/alherd-table`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/shop/alherd-floor`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/shop/parasite`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/shop/thick`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/shop/turbine`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
  ];
}
