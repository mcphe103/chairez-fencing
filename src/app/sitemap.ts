import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: "https://www.chairezfencing.com/", lastModified: now },
    { url: "https://www.chairezfencing.com/about", lastModified: now },
    { url: "https://www.chairezfencing.com/services", lastModified: now },
    { url: "https://www.chairezfencing.com/gallery", lastModified: now },
    { url: "https://www.chairezfencing.com/gallery/wood", lastModified: now },
    { url: "https://www.chairezfencing.com/gallery/iron", lastModified: now },
    { url: "https://www.chairezfencing.com/gallery/decks", lastModified: now },
    { url: "https://www.chairezfencing.com/contact", lastModified: now },
  ];
}
