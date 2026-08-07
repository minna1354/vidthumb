import { MetadataRoute } from "next";

interface PostEntry {
  slug: string;
  lastModified: string;
  priority: number;
}

const POSTS: PostEntry[] = [
  { slug: "youtube-thumbnail-size-guide", lastModified: "2026-08-04", priority: 0.8 },
  { slug: "youtube-shorts-thumbnail-size", lastModified: "2026-08-04", priority: 0.8 },
  { slug: "youtube-banner-size", lastModified: "2026-08-05", priority: 0.9 },
  { slug: "youtube-description-tips", lastModified: "2026-08-04", priority: 0.8 },
  { slug: "youtube-thumbnail-tips-for-clicks", lastModified: "2026-08-04", priority: 0.8 },
  { slug: "vidthumb-7-day-sprint-retrospective", lastModified: "2026-08-06", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vidthumb.co";
  const today = new Date().toISOString().slice(0, 10);
  return [
    {
      url: baseUrl,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: baseUrl + "/blog",
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...POSTS.map((p) => ({
      url: baseUrl + "/blog/" + p.slug,
      lastModified: p.lastModified,
      changeFrequency: "monthly" as const,
      priority: p.priority,
    })),
  ];
}
