"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Database, FolderSync, Layers, Zap, ArrowRight } from 'lucide-react';

const pegResources = [
  {
    id: "RES_01",
    title: "Master SpecVault",
    subtitle: "Compliance Matrix",
    description: "Instant access to continuously updated state-specific DOT compliance standards, AASHTO guidelines, and regional PCI requirements.",
    icon: <Database className="w-8 h-8" />
  },
  {
    id: "RES_02",
    title: "CAD Component Library",
    subtitle: "Parametric Assets",
    description: "Thousands of pre-modeled, Specified-Tolerance precast connections, lifting inserts, and formwork assemblies ready to drop into your master model.",
    icon: <Layers className="w-8 h-8" />
  },
  {
    id: "RES_03",
    title: "Live Telemetry Hub",
    subtitle: "Direct Node Access",
    description: "Bypass the waiting room. Open direct, secured communication channels with our global PE nodes for immediate project troubleshooting.",
    icon: <Zap className="w-8 h-8" />
  },
  {
    id: "RES_04",
    title: "Automated Submittals",
    subtitle: "Turnkey Documentation",
    description: "Pre-formatted, rigorously engineered calculation packages and shop drawings generated and ready for Approval-Ready Documentation.",
    icon: <FolderSync className="w-8 h-8" />
  }
];

export default function UnchallengedResources() {
  return (
    <section className="w-full bg-[#004aad] text-white relative overflow-hidden">
      
      {/* BACKGROUND: Technical Data Stream */}
      <div className="absolute inset-0 opacity-10 pointer-events-none flex justify-between px-20">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="w-px h-full bg-gradient-to-b from-transparent via-white to-transparent opacity-20" />
        ))}
      </div>

      <div className="w-full px-10 md:px-20 py-16 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          
          {/* LEFT COLUMN: Fixed Headline */}
          <div className="lg:w-1/2 space-y-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-black tracking-tighter leading-[0.9] uppercase text-white"
            >
              Unchallenged <br />
              <span className="text-[#1B79EE]">Resources</span> <br />
              By PEG.
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="border-l-4 border-[#1B79EE] pl-6 py-2 mt-8"
            >
              <p className="text-xl md:text-xl font-black text-white/90 uppercase tracking-tight leading-snug">
                At the snap of your fingers. <br />
                <span className="text-[#1B79EE]">Seamlessly integrated.</span> <br />
                Action ready.
              </p>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: The Interactive Scrollable Vault */}
          <div className="lg:w-1/2 w-full relative">
            
            {/* Scrollable Container with Custom Blue Scrollbar */}
            <div className="flex flex-col gap-6 h-[600px] overflow-y-auto pr-4 pb-10 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-[#004aad] [&::-webkit-scrollbar-thumb]:bg-[#1B79EE] [&::-webkit-scrollbar-thumb]:hover:bg-white">
              {pegResources.map((resource, idx) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  // DEFAULT: Pure White -> HOVER: PEG Bright Blue
                  className="group relative bg-white hover:bg-[#1B79EE] px-10 py-4 transition-all duration-500 cursor-pointer overflow-hidden border border-white/10 hover:shadow-[0_20px_60px_rgba(27,121,238,0.4)] shrink-0"
                >
                  
                  <div className="flex justify-between items-start mb-8 relative z-10">
                    {/* ICON: Dark Blue -> Hovers to White */}
                    <div className="p-4 bg-[#004aad]/5 group-hover:bg-white text-[#004aad] group-hover:text-[#1B79EE] transition-colors duration-500">
                      {resource.icon}
                    </div> 
                  </div>

                  <div className="relative z-10">
                    {/* SUBTITLE: Bright Blue -> Hovers to White */}
                    <p className="text-[#1B79EE] group-hover:text-white font-black text-[10px] uppercase tracking-widest mb-2 transition-colors duration-500">
                      {resource.subtitle}
                    </p>
                    {/* TITLE: Dark Blue -> Hovers to White */}
                    <h3 className="text-xl font-black text-[#004aad] group-hover:text-white uppercase tracking-tighter mb-4 transition-colors duration-500">
                      {resource.title}
                    </h3>
                    {/* DESCRIPTION: Dark Blue -> Hovers to White */}
                    <p className="text-[#004aad]/80 group-hover:text-white/90 text-sm leading-relaxed font-medium transition-colors duration-500">
                      {resource.description}
                    </p>
                  </div>

                  {/* FOOTER ACTION */}
                  <div className="mt-2 pt-2 border-t border-[#004aad]/10 group-hover:border-white/30 flex justify-between items-center relative z-10 transition-colors duration-500">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#004aad] group-hover:text-white transition-colors duration-500">
                      Access Resource
                    </span>
                    <ArrowRight className="w-5 h-5 text-[#004aad]/30 group-hover:text-white transform group-hover:translate-x-2 transition-all duration-500" />
                  </div>

                  {/* BACKGROUND WATERMARK */}
                  <div className="absolute -bottom-10 -right-10 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
                    <div className="scale-[5] text-[#004aad] group-hover:text-white transition-colors duration-500">
                      {resource.icon}
                    </div>
                  </div>

                </motion.div>
              ))}
            </div>

            {/* FADE GRADIENT AT THE BOTTOM (Indicates more content to scroll) */}
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#004aad] to-transparent pointer-events-none" />
            
          </div>
        </div>
      </div>
    </section>
  );
}