import React from "react";
import PrecastBlogSection from "../components/PrecastBlogSection";
import Link from "next/link";
import { ArrowLeft, Box, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Precast Concrete Engineering Blog & Technical Directory | PEG",
  description: "Explore technical articles, CAD blueprints, video demonstrations, and structural load analysis for heavy precast concrete products.",
};

export default function PrecastBlogListingPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 selection:bg-[#1B79EE] selection:text-white pt-30">
      {/* TOP DIRECTORY HEADER BAR */}
      <div className="bg-white border-b border-slate-200 py-6 px-4 sm:px-6 lg:px-8 shadow-sm">
        <div className="w-full px-10 md:px-20 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#004aad] uppercase tracking-wider transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#1B79EE]" />
            <span>Return to Main Site</span>
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
