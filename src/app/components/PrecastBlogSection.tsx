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
    <section id="precast-engineering-insights" className="relative w-full bg-white text-[#023380] py-14 overflow-hidden select-none border-t border-[#023380]/10">
      
      {/* CAD BLUEPRINT HIGH-TECH BACKGROUND GRID */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: `radial-gradient(#023380 1.5px, transparent 1.5px), linear-gradient(to right, #023380 0.5px, transparent 0.5px), linear-gradient(to bottom, #023380 0.5px, transparent 0.5px)`,
          backgroundSize: '40px 40px, 200px 200px, 200px 200px'
        }} 
      />

      <div className="relative w-full px-6 md:px-16 lg:px-20 z-10 space-y-8">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#023380]/10 pb-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0271f1]/10 text-[#0271f1] text-xs font-black tracking-[0.2em] uppercase border-l-2 border-[#0271f1]">
              <Box className="w-3.5 h-3.5" /> Precast Knowledge Vault
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#023380] uppercase tracking-tighter leading-tight">
              Precast Product <span className="text-[#0271f1]">& Technical Articles</span>
            </h2>
            <p className="text-[#023380] font-semibold max-w-2xl text-sm md:text-base leading-relaxed">
              In-depth technical guides, mold formwork blueprints, video demonstrations, and structural load analysis for heavy precast concrete products.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/admin"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-50 hover:bg-blue-100 text-[#023380] text-xs font-bold uppercase tracking-wider border border-[#0271f1]/20 transition-all shadow-xs"
            >
              <PlusCircle className="w-4 h-4 text-[#0271f1]" />
              <span>Admin Manage Blogs</span>
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#023380] hover:bg-[#0271f1] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-xs shrink-0"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* LOADING STATE */}
        {loading && (
          <div className="py-20 flex flex-col items-center justify-center space-y-4">
            <Loader2 className="w-8 h-8 text-[#0271f1] animate-spin" />
            <p className="font-mono text-xs font-bold text-[#023380] uppercase tracking-widest">
              Connecting to Supabase Database & Loading Articles...
            </p>
          </div>
        )}

        {/* EMPTY STATE (IF NO BLOGS IN SUPABASE) */}
        {!loading && posts.length === 0 && (
          <div className="py-16 px-6 bg-blue-50/40 border border-[#023380]/15 text-center space-y-4 max-w-xl mx-auto">
            <FileText className="w-10 h-10 text-[#0271f1] mx-auto opacity-70" />
            <h3 className="text-lg font-black uppercase tracking-tight text-[#023380]">
              No Blog Posts in Supabase Database
            </h3>
            <p className="text-xs text-[#023380] font-semibold leading-relaxed">
              You are currently viewing live Supabase data only. Log into the Admin panel to create and publish technical precast articles.
            </p>
            <Link
              href="/admin"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#023380] hover:bg-[#0271f1] text-white text-xs font-mono font-black uppercase tracking-wider transition-all shadow-xs"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Add First Blog in Admin</span>
            </Link>
          </div>
        )}

        {/* CATEGORY FILTER TABS */}
        {!loading && posts.length > 0 && categories.length > 1 && (
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`
                    px-4 py-2 text-xs md:text-sm font-bold transition-all duration-200 shrink-0 flex items-center gap-2 border cursor-pointer shadow-xs
                    ${
                      isActive
                        ? "bg-[#023380] text-white border-[#023380] shadow-md scale-102"
                        : "bg-white text-[#023380] font-bold border-[#023380]/20 hover:text-white hover:bg-[#023380]"
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
            <div className="relative bg-white border border-[#023380]/15 overflow-hidden shadow-xs hover:border-[#0271f1] transition-all duration-300 group grid grid-cols-1 lg:grid-cols-12 gap-0">
              
              {/* IMAGE & VIDEO SHOWCASE THUMBNAIL */}
              <div className="lg:col-span-7 relative min-h-[280px] lg:min-h-[380px] overflow-hidden bg-slate-50">
                <Image
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                />
                
                {/* VIDEO BADGE OVERLAY */}
                {featuredPost.featuredVideo && (
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1 bg-white/95 text-xs font-black text-[#023380] shadow-xs border border-[#0271f1]/20">
                    <Play className="w-3.5 h-3.5 text-[#0271f1] fill-[#0271f1]" />
                    <span>Includes 3D Simulation</span>
                  </div>
                )}

                <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 px-3 py-1 bg-white/95 text-xs font-bold text-[#023380] border border-[#0271f1]/20 shadow-xs">
                  <Clock className="w-3.5 h-3.5 text-[#0271f1]" />
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>

              {/* ARTICLE METADATA & SUMMARY */}
              <div className="lg:col-span-5 p-6 md:p-8 flex flex-col justify-between bg-white space-y-4">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2.5 py-0.5 bg-[#0271f1] text-white text-[10px] font-mono font-black tracking-wider uppercase">
                      {featuredPost.category}
                    </span>
                    <span className="text-xs text-[#0271f1] font-bold">
                      {featuredPost.publishedDate}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-black text-[#023380] tracking-tight uppercase leading-snug group-hover:text-[#0271f1] transition-colors">
                    <Link href={`/blog/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </Link>
                  </h3>

                  <p className="mt-2 text-[#023380] text-xs sm:text-sm font-semibold line-clamp-3 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  {/* KEY TECH SPEC BADGES */}
                  {featuredPost.technicalSpecs && featuredPost.technicalSpecs.length > 0 && (
                    <div className="mt-4 space-y-1.5 border-t border-[#023380]/10 pt-3">
                      {featuredPost.technicalSpecs.slice(0, 3).map((spec, i) => (
                        <div key={i} className="flex items-center justify-between text-xs font-mono">
                          <span className="text-[#023380] font-bold">{spec.label}:</span>
                          <span className="text-[#023380] font-black bg-blue-50 px-2 py-0.5 border border-[#0271f1]/20">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-[#023380]/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#0271f1]">
                      <Image
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                        fill
                        sizes="32px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#023380]">{featuredPost.author.name}</p>
                      <p className="text-[10px] text-[#0271f1] font-semibold">{featuredPost.author.role}</p>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-black text-[#0271f1] hover:text-[#023380] uppercase tracking-wider transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* PRECAST PRODUCT ARTICLES GRID */}
        {!loading && posts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {gridPosts.map((post, idx) => (
                <motion.article
                  key={post.slug}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="group flex flex-col bg-white border border-[#023380]/15 hover:border-[#0271f1] shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  {/* COVER IMAGE & MEDIA INDICATOR */}
                  <div className="relative w-full h-52 overflow-hidden bg-slate-50 border-b border-[#023380]/10">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    
                    {/* CATEGORY TAG */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-2.5 py-0.5 bg-white text-[#023380] text-[9px] font-mono font-black tracking-wider uppercase border border-[#023380]/20 shadow-xs">
                        {post.category}
                      </span>
                    </div>

                    {/* MEDIA CONTENT BADGE */}
                    {post.featuredVideo && (
                      <div className="absolute top-3 right-3 z-10 bg-[#023380] text-white p-1.5 shadow-xs group-hover:bg-[#0271f1] transition-colors">
                        <Play className="w-3 h-3 fill-white" />
                      </div>
                    )}

                    <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 text-[10px] font-mono font-bold text-[#023380] bg-white/90 px-2 py-0.5 border border-[#023380]/10">
                      <Clock className="w-3 h-3 text-[#0271f1]" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* CONTENT AREA */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-base font-black text-[#023380] tracking-tight uppercase leading-snug group-hover:text-[#0271f1] transition-colors line-clamp-2">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h3>

                      <p className="mt-2 text-[#023380] text-xs font-semibold line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* BOTTOM FOOTER */}
                    <div className="pt-3 border-t border-[#023380]/10 flex items-center justify-between">
                      <span className="text-[10px] text-[#0271f1] font-mono font-bold">
                        {post.publishedDate}
                      </span>

                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-black text-[#0271f1] group-hover:text-[#023380] uppercase tracking-wider transition-colors"
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
