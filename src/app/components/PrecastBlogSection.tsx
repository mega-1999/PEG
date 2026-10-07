"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PrecastBlogPost } from "../data/precastBlogs";
import { fetchAllBlogPosts } from "@/lib/blogService";
import {
  Play,
  ArrowRight,
  Clock,
  Box,
  PlusCircle,
  FileText,
  Layers,
  Loader2
} from "lucide-react";

export default function PrecastBlogSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Products");
  const [posts, setPosts] = useState<PrecastBlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;
    async function loadDynamicPosts() {
      try {
        setLoading(true);
        const livePosts = await fetchAllBlogPosts();
        if (isMounted) {
          setPosts(livePosts || []);
        }
      } catch (err) {
        console.error("Failed to load blog posts:", err);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }
    loadDynamicPosts();
    return () => { isMounted = false; };
  }, []);

  // Compute dynamic categories from Supabase blog posts
  const categories = useMemo(() => {
    const set = new Set<string>();
    posts.forEach((p) => {
      if (p.category) set.add(p.category);
    });
    return ["All Products", ...Array.from(set)];
  }, [posts]);

  const filteredPosts = useMemo(() => {
    if (selectedCategory === "All Products") {
      return posts;
    }
    return posts.filter((post) => post.category === selectedCategory);
  }, [selectedCategory, posts]);

  const featuredPost = posts[0];
  const gridPosts = filteredPosts.length > 0 ? filteredPosts : posts;

  return (
    <section id="precast-engineering-insights" className="relative w-full bg-white text-[#002f7a] py-2 sm:py-4 md:py-6 overflow-hidden select-none border-t border-[#002f7a]/10">

      {/* CAD BLUEPRINT HIGH-TECH BACKGROUND GRID */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #002f7a 1px, transparent 1px), linear-gradient(to bottom, #002f7a 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 relative z-10 space-y-6 md:space-y-8">

        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#002f7a]/10 pb-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-[#006def] text-xs font-black tracking-[0.2em] uppercase border-l-2 border-[#006def]">
              <Box className="w-3.5 h-3.5 text-[#006def]" /> Precast Knowledge Vault
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-[#002f7a] uppercase tracking-tighter leading-none">
              Precast Product <span className="text-[#006def]">& Technical Articles</span>
            </h2>
            <p className="text-[#002f7a] font-semibold max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed">
              In-depth technical guides, mold formwork blueprints, video demonstrations, and structural load analysis for heavy precast concrete products.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/admin"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 hover:bg-blue-100 text-[#002f7a] text-xs font-bold uppercase tracking-wider border border-[#006def]/20 transition-all rounded-sm shadow-xs"
            >
              <PlusCircle className="w-4 h-4 text-[#006def]" />
              <span>Admin Manage Blogs</span>
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#002f7a] hover:bg-[#006def] text-white text-xs font-bold uppercase tracking-wider transition-all rounded-sm shadow-xs shrink-0"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* LOADING STATE */}
        {loading && (
          <div className="py-16 flex flex-col items-center justify-center space-y-4">
            <Loader2 className="w-8 h-8 text-[#006def] animate-spin" />
            <p className="font-mono text-xs font-bold text-[#002f7a] uppercase tracking-widest">
              Connecting to Supabase Database & Loading Articles...
            </p>
          </div>
        )}

        {/* EMPTY STATE (IF NO BLOGS IN SUPABASE) */}
        {!loading && posts.length === 0 && (
          <div className="py-12 px-6 bg-blue-50/40 border border-[#002f7a]/15 text-center space-y-4 max-w-xl mx-auto rounded-sm">
            <FileText className="w-10 h-10 text-[#006def] mx-auto opacity-70" />
            <h3 className="text-lg font-black uppercase tracking-tight text-[#002f7a]">
              No Blog Posts in Supabase Database
            </h3>
            <p className="text-xs text-[#002f7a] font-semibold leading-relaxed">
              You are currently viewing live Supabase data only. Log into the Admin panel to create and publish technical precast articles.
            </p>
            <Link
              href="/admin"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#002f7a] hover:bg-[#006def] text-white text-xs font-mono font-black uppercase tracking-wider transition-all rounded-sm shadow-xs"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Add First Blog in Admin</span>
            </Link>
          </div>
        )}

        {/* CATEGORY FILTER TABS */}
        {!loading && posts.length > 0 && categories.length > 1 && (
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`
                    px-3.5 py-1.5 text-xs font-bold transition-all duration-200 shrink-0 flex items-center gap-2 border cursor-pointer rounded-sm shadow-xs
                    ${isActive
                      ? "bg-[#002f7a] text-white border-[#002f7a] shadow-sm"
                      : "bg-white text-[#002f7a] border-[#002f7a]/20 hover:text-white hover:bg-[#002f7a]"
                    }
                  `}
                >
                  <span>{cat}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* FEATURED MAIN ARTICLE (SHOW ON "ALL PRODUCTS" IF AVAILABLE) */}
        {!loading && posts.length > 0 && selectedCategory === "All Products" && featuredPost && (
          <div>
            <div className="relative bg-white border border-[#002f7a]/15 rounded-sm overflow-hidden shadow-xs hover:border-[#006def] hover:shadow-xl transition-all duration-300 group grid grid-cols-1 lg:grid-cols-12 gap-0">

              {/* TOP ACCENT LINE */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-[#006def] group-hover:w-full transition-all duration-300 z-30" />

              {/* IMAGE & VIDEO SHOWCASE THUMBNAIL */}
              <div className="lg:col-span-7 relative min-h-[260px] lg:min-h-[340px] overflow-hidden bg-gradient-to-b from-slate-50 to-blue-50/20 flex items-center justify-center p-4">
                <Image
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                />

                <div className="absolute bottom-3 left-3 z-20 flex items-center gap-2 px-2.5 py-1 bg-white/95 text-xs font-bold text-[#002f7a] border border-[#006def]/20 shadow-xs rounded-sm">
                  <Clock className="w-3.5 h-3.5 text-[#006def]" />
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>

              {/* ARTICLE METADATA & SUMMARY */}
              <div className="lg:col-span-5 p-6 flex flex-col justify-between bg-white space-y-4">
                <div>
                  <div className="flex items-center gap-3 mb-2.5">
                    <span className="px-2 py-0.5 bg-[#006def] text-white text-[10px] font-mono font-black tracking-wider uppercase rounded-xs">
                      {featuredPost.category}
                    </span>
                    <span className="text-xs text-[#006def] font-bold">
                      {featuredPost.publishedDate}
                    </span>
                  </div>

                  <h3 className="text-lg md:text-xl font-black text-[#002f7a] tracking-tight uppercase leading-snug group-hover:text-[#006def] transition-colors">
                    <Link href={`/blog/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </Link>
                  </h3>

                  <p className="mt-2 text-[#002f7a]/85 text-xs sm:text-sm font-semibold line-clamp-3 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  {/* KEY TECH SPEC BADGES */}
                  {featuredPost.technicalSpecs && featuredPost.technicalSpecs.length > 0 && (
                    <div className="mt-3.5 space-y-1.5 border-t border-[#002f7a]/10 pt-3">
                      {featuredPost.technicalSpecs.slice(0, 3).map((spec, i) => (
                        <div key={i} className="flex items-center justify-between text-xs font-mono">
                          <span className="text-[#002f7a] font-bold">{spec.label}:</span>
                          <span className="text-[#002f7a] font-black bg-blue-50 px-2 py-0.5 border border-[#006def]/20 rounded-xs">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-[#002f7a]/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-7 h-7 rounded-full overflow-hidden border border-[#006def]">
                      <Image
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                        fill
                        sizes="28px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#002f7a] leading-tight">{featuredPost.author.name}</p>
                      <p className="text-[10px] text-[#006def] font-semibold leading-tight">{featuredPost.author.role}</p>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-black text-[#006def] hover:text-[#002f7a] uppercase tracking-wider transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* PRECAST PRODUCT ARTICLES GRID */}
        {!loading && posts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            <AnimatePresence mode="popLayout">
              {gridPosts.map((post, idx) => (
                <motion.article
                  key={post.slug}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="group relative flex flex-col bg-white border border-[#002f7a]/15 hover:border-[#006def] shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden rounded-sm cursor-pointer"
                >
                  {/* TOP ACCENT LINE */}
                  <div className="absolute top-0 left-0 w-0 h-1 bg-[#006def] group-hover:w-full transition-all duration-300 z-20" />

                  {/* COVER IMAGE & MEDIA INDICATOR */}
                  <div className="relative w-full h-52 overflow-hidden bg-gradient-to-b from-slate-50 to-blue-50/20 border-b border-[#002f7a]/10 flex items-center justify-center p-3">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-contain p-3 group-hover:scale-105 transition-transform duration-500 ease-out"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* CATEGORY TAG */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-2 py-0.5 bg-white text-[#002f7a] text-[9px] font-mono font-black tracking-wider uppercase border border-[#002f7a]/20 shadow-xs rounded-xs">
                        {post.category}
                      </span>
                    </div>

                    {/* MEDIA CONTENT BADGE */}
                    {post.featuredVideo && (
                      <div className="absolute top-3 right-3 z-10 bg-[#002f7a] text-white p-1.5 shadow-xs group-hover:bg-[#006def] transition-colors rounded-xs">
                        <Play className="w-3 h-3 fill-white" />
                      </div>
                    )}

                    <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 text-[10px] font-mono font-bold text-[#002f7a] bg-white/95 px-2 py-0.5 border border-[#002f7a]/15 rounded-xs">
                      <Clock className="w-3 h-3 text-[#006def]" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* CONTENT AREA */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <h3 className="text-sm sm:text-[15px] font-black text-[#002f7a] tracking-tight uppercase leading-snug group-hover:text-[#006def] transition-colors line-clamp-2">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h3>

                      <p className="mt-2 text-[#002f7a]/85 text-xs font-semibold line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* BOTTOM FOOTER */}
                    <div className="pt-3 border-t border-[#002f7a]/10 flex items-center justify-between">
                      <span className="text-[10px] text-[#006def] font-mono font-bold">
                        {post.publishedDate}
                      </span>

                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-black text-[#006def] group-hover:text-[#002f7a] uppercase tracking-wider transition-colors"
                      >
                        <span>Read Spec</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>

                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        )}

      </div>
    </section>
  );
}
