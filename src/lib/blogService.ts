import { supabase } from "@/lib/supabase";
import { PRECAST_BLOG_POSTS, PrecastBlogPost } from "@/app/data/precastBlogs";
import { getAssetUrl } from "@/lib/utils";

export async function fetchAllBlogPosts(): Promise<PrecastBlogPost[]> {
  try {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .order("created_at", { ascending: false });

    if (error || !data || data.length === 0) {
      console.warn("Supabase fetch fallback to static precast blogs:", error?.message);
      return PRECAST_BLOG_POSTS;
    }

    // Map database snake_case columns to PrecastBlogPost interface
    const mapped: PrecastBlogPost[] = data.map((item: any) => ({
      slug: item.slug,
      title: item.title,
      subtitle: item.subtitle || "",
      category: item.category || "General",
      coverImage: getAssetUrl(item.cover_image || item.coverImage || ""),
      featuredVideo: item.featured_video ? getAssetUrl(item.featured_video) : undefined,
      secondaryVideos: item.secondary_videos ? item.secondary_videos.map(getAssetUrl) : [],
      publishedDate: item.published_date || item.publishedDate || "Recently Published",
      readTime: item.read_time || item.readTime || "5 min read",
      author: {
        name: item.author?.name || "Marcus Vance, PE",
        role: item.author?.role || "Lead Structural Engineer",
        avatar: getAssetUrl(item.author?.avatar || "/PrecastIndustry_Links/1.jpg"),
      },
      excerpt: item.excerpt || "",
      technicalSpecs: item.technical_specs || item.technicalSpecs || [],
      gallery: (item.gallery || []).map((g: any) => ({
        ...g,
        url: getAssetUrl(g.url),
      })),
      sections: (item.sections || []).map((s: any) => ({
        ...s,
        image: s.image ? { ...s.image, url: getAssetUrl(s.image.url) } : undefined,
      })),
      keyTakeaways: item.key_takeaways || item.keyTakeaways || [],
      relatedSlugs: item.related_slugs || item.relatedSlugs || [],
    }));

    return mapped;
  } catch (err) {
    console.error("Error fetching blogs from Supabase:", err);
    return PRECAST_BLOG_POSTS;
  }
}

export async function fetchBlogPostBySlug(slug: string): Promise<PrecastBlogPost | undefined> {
  try {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("slug", slug)
      .single();

    if (error || !data) {
      return PRECAST_BLOG_POSTS.find((p) => p.slug === slug);
    }

    return {
      slug: data.slug,
      title: data.title,
      subtitle: data.subtitle || "",
      category: data.category || "General",
      coverImage: getAssetUrl(data.cover_image || data.coverImage || ""),
      featuredVideo: data.featured_video ? getAssetUrl(data.featured_video) : undefined,
      secondaryVideos: data.secondary_videos ? data.secondary_videos.map(getAssetUrl) : [],
      publishedDate: data.published_date || "Recently Published",
      readTime: data.read_time || "5 min read",
      author: {
        name: data.author?.name || "Marcus Vance, PE",
        role: data.author?.role || "Lead Structural Engineer",
        avatar: getAssetUrl(data.author?.avatar || "/PrecastIndustry_Links/1.jpg"),
      },
      excerpt: data.excerpt || "",
      technicalSpecs: data.technical_specs || [],
      gallery: (data.gallery || []).map((g: any) => ({
        ...g,
        url: getAssetUrl(g.url),
      })),
      sections: (data.sections || []).map((s: any) => ({
        ...s,
        image: s.image ? { ...s.image, url: getAssetUrl(s.image.url) } : undefined,
      })),
      keyTakeaways: data.key_takeaways || [],
      relatedSlugs: data.related_slugs || [],
    };
  } catch (err) {
    return PRECAST_BLOG_POSTS.find((p) => p.slug === slug);
  }
}

export async function saveBlogPost(post: Partial<PrecastBlogPost>): Promise<{ success: boolean; error?: string }> {
  try {
    const payload = {
      slug: post.slug,
      title: post.title,
      subtitle: post.subtitle || "",
      category: post.category || "Engineering",
      cover_image: post.coverImage || "",
      featured_video: post.featuredVideo || null,
      secondary_videos: post.secondaryVideos || [],
      published_date: post.publishedDate || new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
      read_time: post.readTime || "5 min read",
      author: post.author || { name: "Marcus Vance, PE", role: "Lead Structural Engineer", avatar: "/PrecastIndustry_Links/1.jpg" },
      excerpt: post.excerpt || "",
      technical_specs: post.technicalSpecs || [],
      gallery: post.gallery || [],
      sections: post.sections || [],
      key_takeaways: post.keyTakeaways || [],
      related_slugs: post.relatedSlugs || [],
      published: true,
      updated_at: new Date().toISOString(),
    };

    const { error } = await supabase
      .from("blog_posts")
      .upsert(payload, { onConflict: "slug" });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err: any) {
    return { success: false, error: err.message || "An unexpected error occurred." };
  }
}

export async function deleteBlogPost(slug: string): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabase
      .from("blog_posts")
      .delete()
      .eq("slug", slug);

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err: any) {
    return { success: false, error: err.message || "Failed to delete post." };
  }
}
