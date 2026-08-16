"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Cpu, Box } from 'lucide-react';
import Link from 'next/link';

export default function FuturisticCTA() {
  return (
    <section className="relative w-full px-10 md:px-20 py-12 bg-[#004aad] overflow-hidden flex items-center justify-center">
      
      {/* BACKGROUND: Futuristic CAD Grid & Glows */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#004aad] rounded-full blur-[150px] opacity-30 z-0 pointer-events-none" />

      {/* CONTENT CONTAINER */}
      <div className="relative z-10 w-full flex flex-col items-center text-center">
        
        {/* Eyebrow Label */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 bg-[#004aad]/20 border border-[#1B79EE]/70 px-6 py-2 mb-8 backdrop-blur-sm"
        >
          <Box className="w-4 h-4 text-white animate-pulse" />
          <span className="font-mono text-[11px] font-black uppercase tracking-[0.4em] text-white">
            Attention Precasters
          </span>
          <Box className="w-4 h-4 text-white animate-pulse" />
        </motion.div>

        {/* Main Headline */}
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-6"
        >
          PEG YOUR 
          <span className="text-transparent bg-clip-text pl-2 bg-gradient-to-r from-white to-[#1B79EE]">
            IDEAS.
          </span>
        </motion.h2>

        {/* Sub-headline / Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center gap-4 mb-16"
        >
          <p className="text-lg md:text-2xl font-bold text-slate-300 tracking-tight leading-snug">
            Trust in us for <span className="text-white italic">futuristic</span> precasting.
          </p>
          <div className="flex items-center gap-6 mt-4 opacity-70">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-white">
              <ShieldCheck className="w-4 h-4" /> Unwavering Trust
            </div>
            <div className="w-1 h-1 bg-white/30 rounded-full" />
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-white">
              <Cpu className="w-4 h-4" /> Next-Gen Engineering
            </div>
          </div>
        </motion.div>

        {/* Brutalist Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link 
            href="/contact"
            className="group relative inline-flex items-center justify-center gap-3 bg-white text-[#004aad] h-14 px-10 overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.4)]"
          >
            {/* Hover Sweep Effect */}
            <div className="absolute inset-0 bg-[#1B79EE] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />
            
            <span className="relative z-10 font-mono text-sm font-black uppercase tracking-[0.2em] group-hover:text-white transition-colors">
              Initiate Deployment
            </span>
            <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 group-hover:text-white transition-transform" />
          </Link>
        </motion.div>

      </div>

      {/* Decorative Border Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#004aad] via-[#1B79EE] to-[#004aad]" />
    </section>
  );
}