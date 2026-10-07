"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Layers, ArrowUpRight, Droplets, Cable, Box, Wrench } from 'lucide-react';
import { getAssetUrl } from '@/lib/utils';

const utilitySpecs = [
  {
    title: "Heavy Load Ratings",
    detail: "Engineered to AASHTO H-20 & HS-25 standards for heavy highway traffic, industrial facilities, and airport runway loading conditions.",
    icon: <ShieldCheck className="w-5 h-5" />
  },
  {
    title: "Modular Cable & Pipe Raceways",
    detail: "Integrated conduit knockouts, terminators, and pull-iron inserts for rapid fiber-optic, electrical, and gas distribution cabling.",
    icon: <Zap className="w-5 h-5" />
  },
  {
    title: "Watertight Seal Engineering",
    detail: "Pre-installed gasketed male-female joints and butyl mastic sealant grooves ensuring complete sub-grade moisture and water ingress protection.",
    icon: <Droplets className="w-5 h-5" />
  }
];

export default function UtilityVaultSystem() {
  return (
    <section className="w-full bg-[#002f7a] text-white py-8 sm:py-10 md:py-12 lg:py-16 relative overflow-hidden select-none border-b border-white/10">

      {/* BACKGROUND DECORATION: Technical Dot Grid */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:50px_50px]"
      />

      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

        {/* LEFT COLUMN: The "Master Specs" (Occupies 5/12 columns) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-3">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '80px' }}
              className="h-1 bg-[#006def]"
            />
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white tracking-tighter leading-none uppercase">
              PRECAST <br />
              <span className="text-[#006def]">UTILITY VAULTS.</span>
            </h2>
            <p className="text-white/80 font-medium text-sm md:text-base leading-relaxed max-w-md">
              Engineered for underground power distribution, telecommunications, and multi-service municipal networks. High-load modular utility vaults built for 100+ year service life.
            </p>
          </div>

          <div className="space-y-4 bg-white/5 p-4 md:p-5 border-l-4 border-l-[#006def] border border-white/15 shadow-sm">
            {utilitySpecs.map((spec, i) => (
              <div key={i} className="flex items-start gap-3.5 group">
                <div className="w-10 h-10 flex items-center justify-center bg-white/10 border border-white/20 text-white shrink-0 group-hover:bg-[#006def] group-hover:border-[#006def] transition-colors">
                  {spec.icon}
                </div>
                <div>
                  <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-1 flex items-center gap-2">
                    {spec.title}
                  </h4>
                  <p className="text-white font-medium text-xs sm:text-sm leading-relaxed">{spec.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: The "Visual Component Hub" (Occupies 7/12 columns) */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 h-full">

          {/* Main Visual Card - Embedded Video System */}
          <motion.div
            whileHover={{ y: -4 }}
            className="md:col-span-2 relative aspect-video bg-white overflow-hidden group shadow-md border border-white/15 flex items-center justify-center"
          >
            {/* BACKGROUND VIDEO INTERFACE */}
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              suppressHydrationWarning
              className="w-full h-full object-contain z-0"
            >
              <source src={getAssetUrl("/assets/video/E25_V2_final.mp4")} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Bottom Title Bar with Clear High Contrast */}
            <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-5 md:p-6 bg-gradient-to-t from-[#002f7a]/95 via-[#002f7a]/50 to-transparent text-white z-20 pointer-events-none">
              <div className="flex justify-between items-end pointer-events-auto">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest bg-[#006def] px-2.5 py-1 text-white inline-block mb-1.5 shadow-xs">
                    Subterranean Infrastructure
                  </span>
                  <h3 className="text-lg md:text-xl font-black uppercase tracking-tighter text-white">Heavy-Duty Precast Utility Vaults</h3>
                </div>
                <a
                  href="#contact"
                  className="w-10 h-10 flex items-center justify-center bg-[#002f7a] border border-[#006def] text-white hover:bg-[#006def] transition-all shadow-md cursor-pointer shrink-0 ml-4"
                  title="Explore Utility Vault Specs"
                >
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Secondary Feature Card 1 */}
          <div className="bg-white/5 border border-white/15 hover:border-[#006def] hover:bg-white/10 p-4 flex items-center justify-between transition-all group">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 flex items-center justify-center bg-white/10 border border-white/20 text-white group-hover:bg-[#006def] group-hover:border-[#006def] transition-colors shrink-0">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-xs font-black text-white uppercase tracking-tight">Power & Telecom Inlets</h4>
                <p className="text-[11px] font-semibold text-white/90 group-hover:text-white">Multi-Duct Knockout Arrays</p>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-white group-hover:text-[#006def] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>

          {/* Secondary Feature Card 2 */}
          <div className="bg-white/5 border border-white/15 hover:border-[#006def] hover:bg-white/10 p-4 flex items-center justify-between transition-all group">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 flex items-center justify-center bg-white/10 border border-white/20 text-white group-hover:bg-[#006def] group-hover:border-[#006def] transition-colors shrink-0">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-xs font-black text-white uppercase tracking-tight">AASHTO HS-25 Proof</h4>
                <p className="text-[11px] font-semibold text-white/90 group-hover:text-white">Full Dynamic Wheel Load Rated</p>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-white group-hover:text-[#006def] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>

        </div>

        </div>
      </div>

    </section>
  );
}