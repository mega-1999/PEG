"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FileSignature, PenTool, BookOpenCheck, ArrowRight } from 'lucide-react';

const upgradeFeatures = [
  {
    title: "Powerful Submittals",
    subtitle: "Streamlined Approval Process",
    description: "Upgrade from basic drafting to comprehensive calculation packages, structural load logic, and PE-stamped documentation engineered for Approval-Ready Documentation.",
    icon: <FileSignature className="w-8 h-8" />,
  },
  {
    title: "Precision Illustrations",
    subtitle: "Multi-Dimensional Clarity",
    description: "Eliminate site-level confusion. We deliver Specified-Tolerance shop drawings, 3D component isolation, and step-by-step erection sequencing.",
    icon: <PenTool className="w-8 h-8" />,
  },
  {
    title: "Dynamic Standards",
    subtitle: "Always Code-Compliant",
    description: "Never fall behind. Our drafting protocols are continuously synchronized with the latest PCI, AASHTO, ASTM, and state-specific DOT master specifications.",
    icon: <BookOpenCheck className="w-8 h-8" />,
  }
];

export default function DeliverableUpgrade() {
  return (
    <section className="relative w-full bg-[#004aad] text-white overflow-hidden">
      
      {/* BACKGROUND BLUEPRINT GRID */}
      <div 
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{ 
          backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
          backgroundSize: '40px 40px' 
        }}
      />

      {/* GLOWING ACCENT (Behind the grid) */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#1B79EE] rounded-full blur-[200px] opacity-30 pointer-events-none" />

      <div className="w-full px-10 md:px-20 py-8 relative z-10 mx-auto">
        
        {/* 1. MASSIVE TYPOGRAPHY HEADER */}
        <div className="max-w-5xl mb-8 space-y-6">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-[0.9] uppercase">
            Upgrade your <br />
            {/* ONLY White and Bright Blue used here */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#1B79EE]">
              Precast Drawings.
            </span>
          </h2>
          
          <p className="text-xl md:text-lg text-white/80 font-medium max-w-3xl leading-relaxed mt-2 border-l-4 border-[#1B79EE] pl-6">
            Stop losing time on revisions. Elevate your production pipeline with Comprehensive Submittals, High-Accuracy illustrations, and non-stop code compliance.
          </p>
        </div>

        {/* 2. THE THREE-PILLAR UPGRADE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {upgradeFeatures.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              viewport={{ once: true }}
              // CARD BACKGROUND: White -> Hovers to PEG Bright Blue
              className="group relative bg-white border border-[#004aad]/10 px-10 py-2 hover:bg-[#1B79EE] hover:border-[#1B79EE] hover:shadow-[0_20px_60px_rgba(27,121,238,0.5)] transition-all duration-500 cursor-pointer flex flex-col h-full overflow-hidden"
            >
              
              {/* TOP STRIP */}
              <div className="flex justify-between items-start mb-8 relative z-10">
                {/* ICON BOX: Dark Blue -> Hovers to White */}
                <div className="p-5 bg-[#004aad] text-white group-hover:bg-white group-hover:text-[#1B79EE] transition-all duration-500 group-hover:-translate-y-2 group-hover:rotate-6 group-hover:shadow-[0_10px_20px_rgba(0,0,0,0.15)]">
                  {feature.icon}
                </div>
              </div>

              {/* CONTENT */}
              <div className="relative z-10 flex-grow">
                {/* Subtitle: Bright Blue -> Hovers to White */}
                <p className="text-[#1B79EE] group-hover:text-white font-black text-[10px] uppercase tracking-widest mb-3 transition-colors duration-500">
                  {feature.subtitle}
                </p>
                {/* Title: Dark Blue -> Hovers to White */}
                <h3 className="text-[#004aad] group-hover:text-white text-xl font-black uppercase tracking-tighter mb-3 leading-none transition-colors duration-500">
                  {feature.title}
                </h3>
                {/* Description: Dark Blue faded -> Hovers to White faded */}
                <p className="text-[#004aad]/80 group-hover:text-white/90 text-sm leading-relaxed font-medium transition-colors duration-500">
                  {feature.description}
                </p>
              </div>

              {/* ACTION FOOTER */}
              {/* Border: Dark Blue faded -> Hovers to White faded */}
              <div className="mt-4 pt-4 border-t border-[#004aad]/10 group-hover:border-white/30 flex justify-between items-center relative z-10 transition-colors duration-500">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#004aad] group-hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-500">
                  Initialize Upgrade
                </span>
                {/* Arrow: Dark Blue -> Hovers to White */}
                <ArrowRight className="w-5 h-5 text-[#004aad]/30 group-hover:text-white transition-colors duration-500" />
              </div>

              {/* HOVER ACCENT: Large background watermark icon */}
              {/* Dark Blue -> Hovers to White */}
              <div className="absolute -bottom-10 -right-10 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
                <div className="scale-[4] text-[#004aad] group-hover:text-white transition-colors duration-500">
                  {feature.icon}
                </div>
              </div>
              
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}