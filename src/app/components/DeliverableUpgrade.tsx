"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FileSignature, PenTool, BookOpenCheck, ArrowRight, ShieldCheck } from 'lucide-react';

const upgradeFeatures = [
  {
    title: "Powerful Submittals",
    subtitle: "Streamlined Documentation",
    description: "Upgrade from basic drafting to comprehensive calculation packages, structural load logic, and PE-stamped documentation engineered for immediate agency approval.",
    icon: <FileSignature className="w-6 h-6" />,
    tag: "PE STAMPED"
  },
  {
    title: "Precision Illustrations",
    subtitle: "Multi-Dimensional Clarity",
    description: "Eliminate site-level confusion. We deliver specified-tolerance shop drawings, mold component detailing, and step-by-step erection sequencing.",
    icon: <PenTool className="w-6 h-6" />,
    tag: "SHOP DRAWINGS"
  },
  {
    title: "Dynamic Standards",
    subtitle: "Always Code-Compliant",
    description: "Never fall behind. Our drafting protocols are continuously synchronized with the latest PCI, AASHTO, ASTM, and state-specific DOT master specifications.",
    icon: <BookOpenCheck className="w-6 h-6" />,
    tag: "AASHTO & PCI"
  }
];

export default function DeliverableUpgrade() {
  return (
    <section className="w-full bg-white text-[#002f7a] py-2 sm:py-4 md:py-6 relative overflow-hidden border-b border-[#002f7a]/10 select-none">

      {/* STANDARDIZED CONTAINER */}
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 relative z-10">

        {/* 1. HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-4 md:mb-6 gap-4 sm:gap-6 border-b border-[#002f7a]/10 pb-4">
          <div className="space-y-3">
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

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="px-5 py-3 bg-[#002f7a] hover:bg-[#006def] text-white text-xs font-mono font-black uppercase tracking-wider transition-colors flex items-center gap-2 shadow-xs cursor-pointer"
            >
              <span>Request Sample Drawings</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 2. THREE-COLUMN PILLAR GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upgradeFeatures.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white border border-[#002f7a]/15 hover:border-[#006def] shadow-xs hover:shadow-xl transition-all duration-300 p-6 md:p-8 flex flex-col justify-between"
            >
              <div>
                {/* ICON LEFT + HEADER RIGHT */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-blue-50 text-[#006def] group-hover:bg-[#002f7a] group-hover:text-white transition-colors duration-300 shrink-0">
                    {feature.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-[10px] font-mono font-bold text-[#006def] uppercase tracking-widest truncate">
                        {feature.subtitle}
                      </span>
                      <span className="text-[9px] font-mono font-bold text-[#006def] bg-blue-50/70 px-2 py-0.5 border border-[#006def]/20 shrink-0 uppercase">
                        {feature.tag}
                      </span>
                    </div>
                    <h3 className="text-lg md:text-xl font-black text-[#002f7a] uppercase tracking-tight group-hover:text-[#006def] transition-colors leading-tight">
                      {feature.title}
                    </h3>
                  </div>
                </div>

                {/* CONTENT */}
                <p className="text-xs sm:text-sm text-[#002f7a] font-semibold leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#002f7a]/10 flex justify-between items-center">
                <span className="text-[10px] font-mono font-bold text-[#002f7a] uppercase">Professional Standard</span>
                <span className="text-xs font-black text-[#006def] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Details <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}