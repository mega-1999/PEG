import React from "react";
import Link from "next/link";
import { ShieldAlert, ArrowLeft, Home, Search, BookOpen, Layers } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white text-[#002f7a] flex flex-col items-center justify-center px-6 py-24 selection:bg-[#006def] selection:text-white">
      <div className="w-full max-w-xl bg-white border border-[#002f7a]/10 p-10 md:p-14 shadow-2xl relative text-center">
        {/* Decorative Top Accent */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#002f7a] via-[#006def] to-[#002f7a]" />

        <div className="w-16 h-16 bg-blue-50 border border-[#006def]/20 rounded-full flex items-center justify-center mx-auto mb-6 text-[#006def]">
          <ShieldAlert className="w-8 h-8" />
        </div>

        <span className="font-mono text-xs font-black tracking-[0.3em] uppercase text-[#006def] bg-blue-50 px-3 py-1 rounded-full border border-[#006def]/20 inline-block mb-4">
          Status 404 &bull; Missing Specification
        </span>

        <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-[#002f7a] mb-3">
          Drawing Not Found
        </h1>

        <p className="text-[#002f7a] text-sm md:text-base font-semibold leading-relaxed mb-8">
          The requested engineering resource, article slug, or standard drawing route does not exist in the active PEG database or has been re-indexed.
        </p>

        {/* Action Grid */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#002f7a] text-white font-mono text-xs font-black uppercase tracking-wider hover:bg-[#006def] transition-all shadow-md"
          >
            <Home className="w-4 h-4" />
            <span>Return to Hub</span>
          </Link>

          <Link
            href="/blog"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-50 text-[#002f7a] border border-[#006def]/30 font-mono text-xs font-black uppercase tracking-wider hover:bg-blue-100 transition-all"
          >
            <BookOpen className="w-4 h-4 text-[#006def]" />
            <span>Browse Precast Vault</span>
          </Link>
        </div>

        {/* Directory Links */}
        <div className="mt-10 pt-6 border-t border-[#002f7a]/10 flex items-center justify-center gap-6 text-xs font-black text-[#002f7a] uppercase tracking-widest flex-wrap">
          <Link href="/#services" className="hover:text-[#006def] transition-colors">
            Services
          </Link>
          <span>&bull;</span>
          <Link href="/#standards" className="hover:text-[#006def] transition-colors">
            DOT Standards
          </Link>
          <span>&bull;</span>
          <Link href="/#contact" className="hover:text-[#006def] transition-colors">
            Contact Support
          </Link>
        </div>
      </div>
    </main>
  );
}
