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

export default function MarinaSystemComponent() {
  return (
    <section className="w-full bg-white py-16 md:py-20 px-10 md:px-20 relative overflow-hidden select-none border-b border-[#002f7a]/10">

      {/* BACKGROUND DECORATION: Technical Dot Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: `radial-gradient(#006def 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative z-10">

        {/* LEFT COLUMN: The "Master Specs" (Occupies 5/12 columns) */}
        <div className="lg:col-span-5 space-y-12">
          <div className="space-y-4">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '80px' }}
              className="h-1 bg-[#006def]"
            />
            <h2 className="text-3xl md:text-5xl font-black text-[#002f7a] tracking-tighter leading-none uppercase">
              PRECAST <br />
              <span className="text-[#006def]">UTILITY VAULTS.</span>
            </h2>
            <p className="text-[#002f7a] font-semibold text-lg leading-relaxed max-w-md">
              Engineered for underground power distribution, telecommunications, and multi-service municipal networks. High-load modular utility vaults built for 100+ year service life.
            </p>
          </div>

          <div className="space-y-6 bg-white p-6 md:p-8 border-l-4 border-[#006def] shadow-sm">
            {utilitySpecs.map((spec, i) => (
              <div key={i} className="flex gap-5 group">
                <div className="text-[#006def] shrink-0 p-2 bg-blue-50/80 rounded-sm">{spec.icon}</div>
                <div>
                  <h4 className="text-[#002f7a] font-black text-xs uppercase tracking-[0.2em] mb-1.5 flex items-center gap-3">
                    {spec.title}
                  </h4>
                  <p className="text-[#002f7a] font-semibold text-sm leading-relaxed">{spec.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: The "Visual Component Hub" (Occupies 7/12 columns) */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8 h-full">

          {/* Main Visual Card - Embedded Video System */}
          <motion.div
            whileHover={{ y: -6 }}
            className="md:col-span-2 relative aspect-video bg-white overflow-hidden group shadow-lg border border-[#002f7a]/10 flex items-center justify-center"
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
            <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-6 md:p-8 bg-gradient-to-t from-[#002f7a]/95 via-[#002f7a]/50 to-transparent text-white z-20 pointer-events-none">
              <div className="flex justify-between items-end pointer-events-auto">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest bg-[#006def] px-2.5 py-1 text-white inline-block mb-2 shadow-xs">
                    Subterranean Infrastructure
                  </span>
                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter">Heavy-Duty Precast Utility Vaults</h3>
                </div>
                <a
                  href="#contact"
                  className="p-3.5 rounded-full bg-[#002f7a] border border-[#006def] text-white hover:bg-[#006def] transition-all shadow-md cursor-pointer shrink-0 ml-4"
                  title="Explore Utility Vault Specs"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Secondary Feature Card 1 */}
          <div className="bg-white border border-[#002f7a]/15 p-6 flex items-center justify-between hover:border-[#006def] hover:shadow-md transition-all group">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-50 text-[#006def] group-hover:bg-[#006def] group-hover:text-white transition-colors">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-black text-[#002f7a] uppercase tracking-tight">Power & Telecom Inlets</h4>
                <p className="text-xs font-semibold text-[#006def]">Multi-Duct Knockout Arrays</p>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-[#006def] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>

          {/* Secondary Feature Card 2 */}
          <div className="bg-white border border-[#002f7a]/15 p-6 flex items-center justify-between hover:border-[#006def] hover:shadow-md transition-all group">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-50 text-[#006def] group-hover:bg-[#006def] group-hover:text-white transition-colors">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-black text-[#002f7a] uppercase tracking-tight">AASHTO HS-25 Proof</h4>
                <p className="text-xs font-semibold text-[#006def]">Full Dynamic Wheel Load Rated</p>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-[#006def] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>

        </div>

      </div>

    </section>
  );
}