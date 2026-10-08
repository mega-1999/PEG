"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FileSignature, PenTool, BookOpenCheck, ArrowRight, ShieldCheck, Monitor, CheckCircle2, Zap } from 'lucide-react';
import { getAssetUrl } from '@/lib/utils';
import LazyVideo from './LazyVideo';

const upgradeFeatures = [
  {
    title: "Powerful Submittals",
    subtitle: "Streamlined Documentation",
    description: "Upgrade from basic drafting to comprehensive calculation packages, structural load logic, and PE-stamped documentation engineered for immediate agency approval.",
    icon: <FileSignature className="w-5 h-5" />,
    tag: "PE STAMPED"
  },
  {
    title: "Precision Illustrations",
    subtitle: "Multi-Dimensional Clarity",
    description: "Eliminate site-level confusion. We deliver specified-tolerance shop drawings, mold component detailing, and step-by-step erection sequencing.",
    icon: <PenTool className="w-5 h-5" />,
    tag: "SHOP DRAWINGS"
  },
  {
    title: "Dynamic Standards",
    subtitle: "Always Code-Compliant",
    description: "Never fall behind. Our drafting protocols are continuously synchronized with the latest PCI, AASHTO, ASTM, and state-specific DOT master specifications.",
    icon: <BookOpenCheck className="w-5 h-5" />,
    tag: "AASHTO & PCI"
  }
];

export default function DeliverableUpgrade() {
  return (
    <section className="w-full bg-white text-[#002f7a] py-2 sm:py-4 md:py-6 relative overflow-hidden border-b border-[#002f7a]/10 select-none">

      {/* TECH BLUEPRINT MATRIX BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #002f7a 1px, transparent 1px), linear-gradient(to bottom, #002f7a 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* STANDARDIZED CONTAINER */}
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 relative z-10 space-y-8">

        {/* 1. HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 sm:gap-6 border-b border-[#002f7a]/10 pb-4">
          <div className="space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#006def]/10 text-[#006def] text-xs font-black tracking-[0.2em] uppercase border-l-2 border-[#006def]">
              <ShieldCheck className="w-3.5 h-3.5" /> Production Acceleration
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-[#002f7a] tracking-tighter leading-[0.9] uppercase">
              Upgrade Your <span className="text-[#006def]">Precast Drawings.</span>
            </h2>
            <p className="text-[#002f7a] text-xs sm:text-sm md:text-base font-semibold max-w-2xl leading-relaxed">
              Stop losing time on revisions. Elevate your production pipeline with comprehensive submittals, high-accuracy illustrations, and non-stop code compliance.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#contact"
              className="px-5 py-3 bg-[#002f7a] hover:bg-[#006def] text-white text-xs font-mono font-black uppercase tracking-wider transition-colors flex items-center gap-2 shadow-xs cursor-pointer"
            >
              <span>Request Sample Drawings</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 2. SPLIT LAYOUT: 3 FEATURE PILLARS (LEFT) + STRATEGIC DESKTOP WORKSTATION MOCKUP (RIGHT) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* LEFT: THREE FEATURE PILLARS (5 COLS) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {upgradeFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white border border-[#002f7a]/15 hover:border-[#006def] shadow-xs hover:shadow-lg transition-all duration-300 p-5 flex flex-col justify-between rounded-sm"
              >
                <div>
                  <div className="flex items-start gap-3 mb-2.5">
                    <div className="p-2 bg-blue-50 text-[#006def] group-hover:bg-[#002f7a] group-hover:text-white transition-colors duration-300 shrink-0 border border-[#006def]/20 rounded-sm mt-0.5">
                      {feature.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1 mb-0.5">
                        <span className="text-[9.5px] font-mono font-bold text-[#006def] uppercase tracking-wider truncate">
                          {feature.subtitle}
                        </span>
                        <span className="text-[8.5px] font-mono font-bold text-[#006def] bg-blue-50/70 px-1.5 py-0.5 border border-[#006def]/20 shrink-0 uppercase">
                          {feature.tag}
                        </span>
                      </div>
                      <h3 className="text-sm sm:text-base font-black text-[#002f7a] uppercase tracking-tight group-hover:text-[#006def] transition-colors leading-tight">
                        {feature.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-[#002f7a]/85 font-medium leading-relaxed pl-1">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT: STRATEGIC STANDALONE DESKTOP WORKSTATION MOCKUP (7 COLS) - UNBOXED */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 flex flex-col items-center justify-center"
          >
            {/* STANDALONE DESKTOP VIDEO MOCKUP - NO BOX */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden flex items-center justify-center">
              <LazyVideo
                src={getAssetUrl("https://pub-506b16bcde4f4fa8849e4eb8030acc3b.r2.dev/assets/video/Mockup/Precast_Engineering_Group_Desktop_Live_Mockup_1.mp4")}
                className="w-full h-full object-contain drop-shadow-2xl"
                wrapperClassName="w-full h-full"
                placeholderBg="bg-[#001c4b]"
              />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}