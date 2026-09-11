import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  getBlogPostBySlug, 
  getRelatedBlogPosts 
} from "@/app/data/precastBlogs";
import ShareArticleButton from "@/app/components/ShareArticleButton";
import { 
  ArrowLeft, 
  Clock, 
  FileText, 
  CheckCircle2, 
  Play, 
  Layers, 
  Box, 
  ShieldCheck, 
  Download,
  ArrowRight
} from "lucide-react";

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogPageProps) {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug);

  if (!post) {
    return {
      title: "Article Not Found | PEG Precast Engineering",
    };
  }

  return {
    title: `${post.title} | PEG Precast Technical Vault`,
    description: post.excerpt,
  };
}

export default async function BlogSlugPage({ params }: BlogPageProps) {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedBlogPosts(post.relatedSlugs);

  return (
    <main className="min-h-screen bg-[#004aad]/5 text-[#004aad] selection:bg-[#1B79EE] selection:text-white pt-28 pb-20">
      
      {/* TOP NAVIGATION BAR */}
      <div className="bg-white border-b border-[#004aad]/10 py-4 shadow-sm">
        <div className="w-full px-10 md:px-20 flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#004aad]/70 hover:text-[#004aad] uppercase tracking-wider transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#1B79EE]" />
            <span>Back to All Precast Articles</span>
          </Link>

          <div className="flex items-center gap-2 text-xs font-extrabold text-[#004aad] uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-[#1B79EE]/20">
            <ShieldCheck className="w-4 h-4 text-[#1B79EE]" />
            <span>Verified Precast Technical Specification</span>
          </div>
        </div>
      </div>

      <div className="w-full px-10 md:px-20 mt-8">
        
        {/* ARTICLE HEADER BLOCK */}
        <div className="max-w-5xl mx-auto mb-10">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="px-3.5 py-1 rounded-none bg-[#1B79EE] text-white text-xs font-black tracking-widest uppercase shadow-md shadow-[#1B79EE]/20">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-[#004aad]/70 font-bold bg-white px-3 py-1 rounded-none border border-[#1B79EE]/20">
              <Clock className="w-3.5 h-3.5 text-[#1B79EE]" />
              {post.readTime}
            </span>
            <span className="text-xs text-[#1B79EE]/80 font-medium">
              Published: {post.publishedDate}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-[#004aad] uppercase tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="mt-4 text-[#004aad]/80 font-semibold text-lg md:text-xl leading-relaxed">
            {post.subtitle}
          </p>

          {/* AUTHOR BAR */}
          <div className="mt-6 pt-6 border-t border-[#004aad]/10 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#1B79EE] shadow-sm">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-black text-[#004aad] uppercase">{post.author.name}</p>
                <p className="text-xs text-[#004aad]/60 font-bold">{post.author.role}</p>
              </div>
            </div>

            <div className="w-48">
              <ShareArticleButton title={post.title} />
            </div>
          </div>
        </div>

        {/* HERO MEDIA SHOWCASE (FEATURED VIDEO OR HIGH-RES COVER) */}
        <div className="max-w-5xl mx-auto mb-14 rounded-none overflow-hidden bg-[#004aad] border-2 border-[#004aad]/20 shadow-2xl shadow-[#004aad]/10 relative">
          {post.featuredVideo ? (
            <div className="relative w-full aspect-video bg-[#004aad]">
              <video
                src={post.featuredVideo}
                controls
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#004aad]/90 backdrop-blur-md px-3.5 py-1.5 rounded-none text-white text-xs font-bold flex items-center gap-2 border border-white/20">
                <Play className="w-3.5 h-3.5 text-[#1B79EE] fill-[#1B79EE]" />
                <span>Product Demonstration & FEA Video</span>
              </div>
            </div>
          ) : (
            <div className="relative w-full h-[400px] md:h-[500px]">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
        </div>

        {/* MAIN TWO-COLUMN LAYOUT */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* ARTICLE CONTENT (LEFT / MAIN) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* EXCERPT SUMMARY CARD */}
            <div className="bg-blue-50/60 p-6 md:p-8 rounded-none border border-[#1B79EE]/20 text-[#004aad] font-semibold leading-relaxed text-base md:text-lg shadow-sm">
              <p>{post.excerpt}</p>
            </div>

            {/* SECTIONS LOOP */}
            {post.sections.map((section, idx) => (
              <section key={idx} className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-black text-[#004aad] uppercase tracking-tight border-b-2 border-[#1B79EE]/30 pb-2">
                  {section.heading}
                </h2>
                
                {section.subheading && (
                  <h3 className="text-lg font-bold text-[#1B79EE] uppercase tracking-wide">
                    {section.subheading}
                  </h3>
                )}

                <div className="space-y-4 text-[#004aad]/80 font-medium leading-relaxed">
                  {section.content.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>

                {/* CALLOUT BOX */}
                {section.callout && (
                  <div className="my-6 p-5 bg-white rounded-none border-l-4 border-[#004aad] shadow-sm text-[#004aad] font-bold text-sm md:text-base border border-[#1B79EE]/20">
                    <p>{section.callout}</p>
                  </div>
                )}

                {/* SPEC HIGHLIGHT */}
                {section.specHighlight && (
                  <div className="my-6 p-6 bg-[#004aad]/5 rounded-none border border-[#004aad]/10">
                    <h4 className="text-xs font-black text-[#004aad] uppercase tracking-widest mb-3">
                      {section.specHighlight.title}
                    </h4>
                    <ul className="space-y-2">
                      {section.specHighlight.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-center gap-2 text-sm font-semibold text-[#004aad]/80">
                          <CheckCircle2 className="w-4 h-4 text-[#1B79EE] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* SECTION IMAGE */}
                {section.image && (
                  <div className="my-6 rounded-none overflow-hidden border border-[#004aad]/10 shadow-md">
                    <div className="relative w-full h-72 md:h-96 bg-[#004aad]/5">
                      <Image
                        src={section.image.url}
                        alt={section.image.caption}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="bg-white p-3 text-xs font-bold text-[#004aad]/60 text-center border-t border-[#004aad]/5">
                      {section.image.caption}
                    </div>
                  </div>
                )}
              </section>
            ))}

            {/* SECONDARY VIDEOS (IF ANY) */}
            {post.secondaryVideos && post.secondaryVideos.length > 0 && (
              <div className="pt-6">
                <h3 className="text-xl font-black text-[#004aad] uppercase tracking-tight mb-4 flex items-center gap-2">
                  <Play className="w-5 h-5 text-[#1B79EE] fill-[#1B79EE]" />
                  <span>Additional Video Footage & Installation Clips</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {post.secondaryVideos.map((vUrl, vIdx) => (
                    <div key={vIdx} className="rounded-none overflow-hidden bg-[#004aad] border border-[#1B79EE]/30 aspect-video shadow-md">
                      <video src={vUrl} controls className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* GALLERY SHOWCASE */}
            {post.gallery && post.gallery.length > 0 && (
              <div className="pt-6">
                <h3 className="text-xl font-black text-[#004aad] uppercase tracking-tight mb-6 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-[#1B79EE]" />
                  <span>Technical Visual Gallery & Blueprints</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {post.gallery.map((gItem, gIdx) => (
                    <div key={gIdx} className="bg-white rounded-none overflow-hidden border border-[#004aad]/10 shadow-sm group">
                      <div className="relative w-full h-52 bg-[#004aad]/5">
                        {gItem.type === "video" ? (
                          <video src={gItem.url} controls className="w-full h-full object-cover" />
                        ) : (
                          <Image
                            src={gItem.url}
                            alt={gItem.caption}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        )}
                      </div>
                      <div className="p-3.5 bg-white text-xs font-bold text-[#004aad]/70 border-t border-[#004aad]/5">
                        {gItem.caption}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* KEY TAKEAWAYS */}
            <div className="p-6 md:p-8 bg-[#004aad] text-white rounded-none shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-blue-200 text-xs font-black tracking-widest uppercase">
                <Box className="w-4 h-4 text-[#1B79EE]" /> Key Engineering Takeaways
              </div>
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white">
                Summary Specification
              </h3>
              <ul className="space-y-3 pt-2">
                {post.keyTakeaways.map((takeaway, tIdx) => (
                  <li key={tIdx} className="flex items-start gap-3 text-sm md:text-base font-semibold text-blue-50">
                    <CheckCircle2 className="w-5 h-5 text-[#1B79EE] shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* SIDEBAR (RIGHT) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* TECHNICAL SPECS TABLE CARD */}
            <div className="bg-white p-6 rounded-none border border-[#004aad]/10 shadow-lg sticky top-28">
              <div className="flex items-center gap-2 text-[#004aad] mb-4 pb-3 border-b border-[#004aad]/10">
                <FileText className="w-5 h-5 text-[#1B79EE]" />
                <h3 className="font-black text-sm uppercase tracking-wider">Product Technical Specs</h3>
              </div>

              <div className="space-y-3">
                {post.technicalSpecs.map((spec, sIdx) => (
                  <div key={sIdx} className="bg-[#004aad]/5 p-3 rounded-none border border-[#004aad]/10 flex flex-col gap-1">
                    <span className="text-[11px] font-bold text-[#1B79EE] uppercase tracking-wider">{spec.label}</span>
                    <span className="text-xs font-black text-[#004aad]">{spec.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-[#004aad]/10 space-y-3">
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 bg-[#004aad] hover:bg-[#1B79EE] text-white text-xs font-black uppercase tracking-wider rounded-none transition-all shadow-md"
                >
                  <Download className="w-4 h-4" />
                  <span>Request Formwork / CAD Submittal</span>
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* RELATED ARTICLES */}
        {relatedPosts.length > 0 && (
          <div className="max-w-5xl mx-auto mt-20 pt-12 border-t border-[#004aad]/10">
            <h2 className="text-2xl font-black text-[#004aad] uppercase tracking-tight mb-8">
              Related Structural Precast Articles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rPost) => (
                <Link
                  key={rPost.slug}
                  href={`/blog/${rPost.slug}`}
                  className="group bg-white p-5 rounded-none border border-[#004aad]/10 hover:border-[#1B79EE] hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-black text-[#1B79EE] uppercase tracking-widest bg-blue-50 px-2.5 py-1 rounded-none border border-[#1B79EE]/20">
                      {rPost.category}
                    </span>
                    <h3 className="mt-3 text-base font-bold text-[#004aad] group-hover:text-[#1B79EE] transition-colors line-clamp-2 uppercase leading-snug">
                      {rPost.title}
                    </h3>
                  </div>

                  <div className="mt-6 flex items-center justify-between text-xs font-bold text-[#1B79EE]">
                    <span>Read Guide</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </main>
  );
}
