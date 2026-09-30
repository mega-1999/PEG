import React from "react";
import Link from "next/link";
import { ShieldAlert, ArrowLeft, Home, Search, BookOpen, Layers } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white text-[#004aad] flex flex-col items-center justify-center px-6 py-24 selection:bg-[#1B79EE] selection:text-white">
      <div className="w-full max-w-xl bg-white border border-[#004aad]/10 p-10 md:p-14 shadow-2xl relative text-center">
        {/* Decorative Top Accent */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#004aad] via-[#1B79EE] to-[#004aad]" />

        <div className="w-16 h-16 bg-blue-50 border border-[#1B79EE]/20 rounded-full flex items-center justify-center mx-auto mb-6 text-[#1B79EE]">
          <ShieldAlert className="w-8 h-8" />
        </div>

        <span className="font-mono text-xs font-black tracking-[0.3em] uppercase text-[#1B79EE] bg-blue-50 px-3 py-1 rounded-full border border-[#1B79EE]/20 inline-block mb-4">
          Status 404 &bull; Missing Specification
        </span>

        <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-[#004aad] mb-3">
          Drawing Not Found
        </h1>

        <p className="text-[#004aad] text-sm md:text-base font-semibold leading-relaxed mb-8">
          The requested engineering resource, article slug, or standard drawing route does not exist in the active PEG database or has been re-indexed.
        </p>

        {/* Action Grid */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#004aad] text-white font-mono text-xs font-black uppercase tracking-wider hover:bg-[#1B79EE] transition-all shadow-md"
          >
            <Home className="w-4 h-4" />
            <span>Return to Hub</span>
          </Link>

          <Link
            href="/blog"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-50 text-[#004aad] border border-[#1B79EE]/30 font-mono text-xs font-black uppercase tracking-wider hover:bg-blue-100 transition-all"
          >
            <BookOpen className="w-4 h-4 text-[#1B79EE]" />
            <span>Browse Precast Vault</span>
          </Link>
        </div>

        {/* Directory Links */}
        <div className="mt-10 pt-6 border-t border-[#004aad]/10 flex items-center justify-center gap-6 text-xs font-black text-[#004aad] uppercase tracking-widest flex-wrap">
          <Link href="/#services" className="hover:text-[#1B79EE] transition-colors">
            Services
          </Link>
          <span>&bull;</span>
          <Link href="/#standards" className="hover:text-[#1B79EE] transition-colors">
            DOT Standards
          </Link>
          <span>&bull;</span>
          <Link href="/#contact" className="hover:text-[#1B79EE] transition-colors">
            Contact Support
          </Link>
        </div>
      </div>
    </main>
  );
}
