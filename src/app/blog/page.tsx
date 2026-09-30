import React from "react";
import PrecastBlogSection from "../components/PrecastBlogSection";
import Link from "next/link";
import { ArrowLeft, Box, ShieldCheck } from "lucide-react";

import { ALL_SEO_KEYWORDS } from "../layout";

export const metadata = {
  title: "Precast Concrete Engineering Blog, Drawings & Drafting Vault | PEG",
  description: "Technical articles, precast concrete drawings, culvert drawings, manhole drawings, catch basin drawings, trench drawings, septic tank drawings, and precast testing guides.",
  keywords: ALL_SEO_KEYWORDS,
};

export default function PrecastBlogListingPage() {
  return (
    <main className="min-h-screen bg-[#004aad]/5 text-[#004aad] selection:bg-[#1B79EE] selection:text-white pt-30">
      {/* TOP DIRECTORY HEADER BAR */}
      <div className="bg-white border-b border-[#004aad]/10 py-1 shadow-sm">
        <div className="w-full px-10 md:px-20 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#004aad]/70 hover:text-[#004aad] uppercase tracking-wider transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#1B79EE]" />
            <span>Return to Home Page</span>
          </Link>

          <div className="flex items-center gap-2 text-xs font-extrabold text-[#004aad] uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full border border-[#1B79EE]/20 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#1B79EE]" />
            <span>Precast Knowledge Directory</span>
          </div>
        </div>
      </div>

      {/* RENDER THE COMPLETE PRECAST BLOG SECTION */}
      <PrecastBlogSection />
    </main>
  );
}
