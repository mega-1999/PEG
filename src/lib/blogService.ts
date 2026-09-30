import { supabase } from "@/lib/supabase";
import { PrecastBlogPost } from "@/app/data/precastBlogs";
import { getAssetUrl } from "@/lib/utils";

// Map database record to PrecastBlogPost interface
function mapDbRecordToBlogPost(item: any): PrecastBlogPost {
  return {
    slug: item.slug,
    title: item.title,
    subtitle: item.subtitle || "",
    category: item.category || "Engineering",
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
  };
}

/**
 * Fetch ALL published blog posts EXCLUSIVELY from Supabase.
 * No dummy or local fallback data.
 */
export async function fetchAllBlogPosts(): Promise<PrecastBlogPost[]> {
  try {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Supabase fetchAllBlogPosts error:", error.message);
      return [];
    }

    if (!data || data.length === 0) {
      return [];
    }

    return data.map(mapDbRecordToBlogPost);
  } catch (err) {
    console.error("Error fetching blogs from Supabase:", err);
    return [];
  }
}

/**
 * Fetch a single blog post EXCLUSIVELY from Supabase by slug.
 * Returns undefined if not found in database.
 */
export async function fetchBlogPostBySlug(slug: string): Promise<PrecastBlogPost | undefined> {
  try {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("slug", slug)
      .single();

    if (error || !data) {
      console.error(`Supabase fetchBlogPostBySlug (${slug}) error:`, error?.message);
      return undefined;
    }

    return mapDbRecordToBlogPost(data);
  } catch (err) {
    console.error(`Error fetching blog post (${slug}) from Supabase:`, err);
    return undefined;
  }
}

/**
 * Save / Create / Update a blog post directly in Supabase.
 */
export async function saveBlogPost(post: Partial<PrecastBlogPost>): Promise<{ success: boolean; error?: string }> {
  try {
    const slug = post.slug?.trim() || post.title?.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || `post-${Date.now()}`;

    const payload = {
      slug,
      title: post.title || "Untitled Precast Technical Article",
      subtitle: post.subtitle || "",
      category: post.category || "Box_Culverts",
      cover_image: post.coverImage || "/assets/images/Box_Culvert/13.jpeg",
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
      console.error("Supabase saveBlogPost error:", error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err: any) {
    console.error("Error saving blog post to Supabase:", err);
    return { success: false, error: err.message || "An unexpected error occurred." };
  }
}

/**
 * Delete a blog post directly from Supabase.
 */
export async function deleteBlogPost(slug: string): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabase
      .from("blog_posts")
      .delete()
      .eq("slug", slug);

    if (error) {
      console.error("Supabase deleteBlogPost error:", error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err: any) {
    console.error("Error deleting blog post from Supabase:", err);
    return { success: false, error: err.message || "Failed to delete post." };
  }
}
