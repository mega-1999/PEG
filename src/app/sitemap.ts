import type { MetadataRoute } from "next";
import { fetchAllBlogPosts } from "@/lib/blogService";

const BASE_URL = "https://www.precastengineering.org";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await fetchAllBlogPosts();

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    ...blogEntries,
  ];
}
