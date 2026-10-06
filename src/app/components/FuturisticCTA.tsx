"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Cpu, Box } from 'lucide-react';
import Link from 'next/link';

export default function FuturisticCTA() {
  return (
    <section className="relative w-full bg-[#002f7a] text-white py-8 md:py-10 px-10 md:px-20 border-t border-white/10 select-none overflow-hidden flex items-center justify-center">

      {/* CAD BLUEPRINT HIGH-TECH BACKGROUND GRID */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 w-full max-w-5xl bg-white/5 border border-white/15 hover:border-[#006def] p-6 md:p-10 flex flex-col items-center text-center shadow-lg hover:shadow-2xl transition-all duration-300 rounded-sm group overflow-hidden">

        {/* TOP ACCENT LINE */}
        <div className="absolute top-0 left-0 w-0 h-1 bg-[#006def] group-hover:w-full transition-all duration-300 z-20" />

        {/* Eyebrow Label */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white text-xs font-black tracking-[0.2em] uppercase mb-4 border-l-2 border-[#006def]">
          <Box className="w-3.5 h-3.5 text-[#006def]" /> Attention Precasters
        </div>

        {/* Main Headline */}
        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none mb-3">
          PEG Your <span className="text-[#006def]">Ideas.</span>
        </h2>

        {/* Sub-headline */}
        <p className="text-sm md:text-base font-semibold text-white/80 max-w-2xl mb-6 leading-relaxed">
          Trust in our specialized engineering team for precision precast structural calculations, shop drawings, and turnkey submittals.
        </p>

        {/* Feature Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6 text-xs font-mono font-bold text-white">
          <div className="flex items-center gap-2 bg-white/10 px-3.5 py-1.5 border border-white/20 shadow-xs rounded-sm">
            <ShieldCheck className="w-4 h-4 text-[#006def]" />
            <span>Stamped Submittals</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 px-3.5 py-1.5 border border-white/20 shadow-xs rounded-sm">
            <Cpu className="w-4 h-4 text-[#006def]" />
            <span>Next-Gen Precast Tech</span>
          </div>
        </div>

        {/* Action Button */}
        <Link
          href="#contact"
          className="inline-flex items-center justify-center gap-2.5 bg-[#006def] hover:bg-white text-white hover:text-[#002f7a] h-11 px-7 text-xs font-bold uppercase tracking-wider transition-all rounded-sm shadow-md cursor-pointer group/btn"
        >
          <span>Initiate Project Consultation</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Link>

      </div>
    </section>
  );
}