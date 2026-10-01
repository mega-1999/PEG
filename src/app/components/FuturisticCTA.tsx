"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Cpu, Box } from 'lucide-react';
import Link from 'next/link';

export default function FuturisticCTA() {
  return (
    <section className="relative w-full px-6 md:px-16 lg:px-20 py-16 bg-white border-t border-[#023380]/10 select-none flex items-center justify-center">
      
      <div className="relative z-10 w-full max-w-5xl bg-blue-50/50 border-2 border-[#023380]/20 p-8 md:p-14 flex flex-col items-center text-center shadow-sm">
        
        {/* Eyebrow Label */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#023380] text-white text-xs font-black tracking-[0.25em] uppercase mb-6 shadow-xs">
          <Box className="w-3.5 h-3.5 text-[#0271f1]" /> Attention Precasters
        </div>

        {/* Main Headline */}
        <h2 className="text-3xl md:text-5xl font-black text-[#023380] uppercase tracking-tighter leading-[0.9] mb-4">
          PEG Your <span className="text-[#0271f1]">Ideas.</span>
        </h2>

        {/* Sub-headline */}
        <p className="text-base md:text-xl font-bold text-[#023380] tracking-tight leading-snug max-w-2xl mb-8">
          Trust in our specialized engineering team for precision precast structural calculations, shop drawings, and turnkey submittals.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-xs font-mono font-bold text-[#023380]">
          <div className="flex items-center gap-2 bg-white px-3.5 py-1.5 border border-[#0271f1]/20 shadow-xs">
            <ShieldCheck className="w-4 h-4 text-[#0271f1]" /> Stamped Submittals
          </div>
          <div className="flex items-center gap-2 bg-white px-3.5 py-1.5 border border-[#0271f1]/20 shadow-xs">
            <Cpu className="w-4 h-4 text-[#0271f1]" /> Next-Gen Precast Tech
          </div>
        </div>

        {/* Action Button */}
        <Link 
          href="#contact"
          className="inline-flex items-center justify-center gap-3 bg-[#023380] hover:bg-[#0271f1] text-white h-13 px-8 text-xs font-mono font-black uppercase tracking-[0.2em] transition-all shadow-md cursor-pointer"
        >
          <span>Initiate Project Consultation</span>
          <ArrowRight className="w-4 h-4" />
        </Link>

      </div>
    </section>
  );
}