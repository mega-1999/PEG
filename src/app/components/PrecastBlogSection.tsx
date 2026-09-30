"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  PRECAST_BLOG_POSTS, 
  PrecastBlogPost 
} from "../data/precastBlogs";
import { fetchAllBlogPosts } from "@/lib/blogService";
import { 
  Play, 
  ArrowRight, 
  Clock, 
  FileText, 
  Layers, 
  CheckCircle2, 
  Sparkles, 
  Box, 
  SlidersHorizontal 
} from "lucide-react";

const CATEGORIES = [
  "All Products",
  "Box_Culverts",
  "Trenching",
  "Piping",
  "Structural",
  "Manhole"
];

export default function PrecastBlogSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Products");
  const [posts, setPosts] = useState<PrecastBlogPost[]>(PRECAST_BLOG_POSTS);

  useEffect(() => {
    let isMounted = true;
    async function loadDynamicPosts() {
      const livePosts = await fetchAllBlogPosts();
      if (isMounted && livePosts && livePosts.length > 0) {
        setPosts(livePosts);
      }
    }
    loadDynamicPosts();
    return () => { isMounted = false; };
  }, []);

  const filteredPosts = useMemo(() => {
    if (selectedCategory === "All Products") {
      return posts;
    }
    return posts.filter((post) => post.category === selectedCategory);
  }, [selectedCategory, posts]);

  const featuredPost = posts[0] || PRECAST_BLOG_POSTS[0];
  const gridPosts = filteredPosts.length > 0 ? filteredPosts : posts;

  return (
    <section id="precast-engineering-insights" className="relative w-full bg-white text-[#004aad] py-4 overflow-hidden select-none border-t border-[#004aad]/10">
      
      {/* CAD BLUEPRINT HIGH-TECH BACKGROUND GRID */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none" 
        style={{ 
          backgroundImage: `radial-gradient(#004aad 1.5px, transparent 1.5px), linear-gradient(to right, #004aad 0.5px, transparent 0.5px), linear-gradient(to bottom, #004aad 0.5px, transparent 0.5px)`,
          backgroundSize: '40px 40px, 200px 200px, 200px 200px'
        }} 
      />

      {/* AMBIENT BRAND BLUE ACCENT GLOWS */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-[#1B79EE]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-[#004aad]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative w-full px-10 md:px-20 z-10">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-4 border-b border-[#004aad]/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#1B79EE]/10 text-[#1B79EE] text-xs font-black tracking-[0.2em] uppercase rounded-full mb-4 border border-[#1B79EE]/20">
              <Box className="w-3.5 h-3.5" /> Precast Knowledge Vault
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#004aad] uppercase tracking-tighter leading-tight">
              Precast Product <span className="text-[#1B79EE]">& Technical Articles</span>
            </h2>
            <p className="mt-3 text-[#004aad] font-semibold max-w-2xl text-sm md:text-base">
              In-depth technical guides, mold formwork blueprints, video demonstrations, and structural load analysis for heavy precast concrete products.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#004aad] hover:bg-[#1B79EE] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-[#004aad]/15 hover:shadow-[#1B79EE]/25 shrink-0 self-start md:self-auto"
          >
            <span>Explore All Precast Articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* CATEGORY FILTER TABS */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`
                  px-4 py-2 rounded-none text-xs md:text-sm font-bold transition-all duration-300 shrink-0 flex items-center gap-2 border cursor-pointer
                  ${
                    isActive
                      ? "bg-[#004aad] text-white border-[#004aad] shadow-md shadow-[#004aad]/20 scale-105"
                      : "bg-white text-[#004aad] font-bold border-[#004aad]/20 hover:text-white hover:bg-[#004aad]"
                  }
                `}
              >
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* FEATURED MAIN ARTICLE (SHOW ON "ALL PRODUCTS") */}
        {selectedCategory === "All Products" && (
          <div className="mb-14">
            <div className="relative rounded-none bg-white border border-[#004aad]/15 overflow-hidden shadow-md group grid grid-cols-1 lg:grid-cols-12 gap-0">
              
              {/* IMAGE & VIDEO SHOWCASE THUMBNAIL */}
              <div className="lg:col-span-7 relative min-h-[320px] lg:min-h-[440px] overflow-hidden bg-white">
                <Image
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#004aad]/60 via-transparent to-transparent" />
                
                {/* VIDEO BADGE OVERLAY */}
                {featuredPost.featuredVideo && (
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3.5 py-1.5 bg-white/95 backdrop-blur-md rounded-none border border-[#1B79EE]/30 text-xs font-black text-[#004aad] shadow-md">
                    <Play className="w-3.5 h-3.5 text-[#1B79EE] fill-[#1B79EE]" />
                    <span>Includes Video Showcase</span>
                  </div>
                )}

                <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 px-3 py-1 bg-white/90 backdrop-blur-md rounded-none text-xs font-bold text-[#004aad] border border-[#1B79EE]/20 shadow-sm">
                  <Clock className="w-3.5 h-3.5 text-[#1B79EE]" />
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>

              {/* ARTICLE METADATA & SUMMARY */}
              <div className="lg:col-span-5 p-6 md:p-10 flex flex-col justify-between bg-white">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-none bg-[#1B79EE] text-white text-xs font-black tracking-wider uppercase">
                      {featuredPost.category}
                    </span>
                    <span className="text-xs text-[#1B79EE] font-bold">
                      {featuredPost.publishedDate}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black text-[#004aad] tracking-tight uppercase leading-snug group-hover:text-[#1B79EE] transition-colors">
                    <Link href={`/blog/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </Link>
                  </h3>

                  <p className="mt-3 text-[#004aad] text-sm md:text-base font-semibold line-clamp-3 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  {/* KEY TECH SPEC BADGES */}
                  <div className="mt-6 space-y-2 border-t border-[#004aad]/10 pt-4">
                    {featuredPost.technicalSpecs.slice(0, 3).map((spec, i) => (
                      <div key={i} className="flex items-center justify-between text-xs">
                        <span className="text-[#004aad] font-bold">{spec.label}:</span>
                        <span className="text-[#004aad] font-black bg-blue-50 px-2 py-0.5 rounded-none border border-[#1B79EE]/20">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#004aad]/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-[#1B79EE]">
                      <Image
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                        fill
                        sizes="32px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#004aad]">{featuredPost.author.name}</p>
                      <p className="text-[10px] text-[#004aad] font-semibold">{featuredPost.author.role}</p>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-black text-[#1B79EE] hover:text-[#004aad] uppercase tracking-wider transition-colors"
                  >
                    <span>Read Article & Watch Video</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* PRECAST PRODUCT ARTICLES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {gridPosts.map((post, idx) => (
              <motion.article
                key={post.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group flex flex-col bg-white rounded-none border border-[#004aad]/10 overflow-hidden hover:border-[#1B79EE] hover:shadow-xl hover:shadow-[#1B79EE]/10 transition-all duration-500"
              >
                {/* COVER IMAGE & MEDIA INDICATOR */}
                <div className="relative w-full h-56 overflow-hidden bg-white">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#004aad]/50 via-transparent to-transparent" />
                  
                  {/* CATEGORY TAG */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-md text-[#004aad] text-[10px] font-black tracking-wider uppercase border border-[#1B79EE]/20 shadow-sm">
                      {post.category}
                    </span>
                  </div>

                  {/* MEDIA CONTENT BADGE */}
                  {post.featuredVideo && (
                    <div className="absolute top-4 right-4 z-10 bg-[#004aad] text-white p-2 rounded-full shadow-md group-hover:scale-110 transition-transform">
                      <Play className="w-3.5 h-3.5 fill-white" />
                    </div>
                  )}

                  <div className="absolute bottom-3 left-4 z-10 flex items-center gap-2 text-[11px] font-bold text-white">
                    <Clock className="w-3.5 h-3.5 text-[#1B79EE]" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* CONTENT AREA */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#004aad] tracking-tight uppercase leading-snug group-hover:text-[#1B79EE] transition-colors line-clamp-2">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>

                    <p className="mt-3 text-[#004aad] text-xs md:text-sm font-semibold line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* BOTTOM FOOTER */}
                  <div className="mt-6 pt-4 border-t border-[#004aad]/10 flex items-center justify-between">
                    <span className="text-[11px] text-[#1B79EE] font-bold">
                      {post.publishedDate}
                    </span>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-black text-[#1B79EE] group-hover:text-[#004aad] uppercase tracking-wider transition-colors"
                    >
                      <span>Read Product Spec</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
