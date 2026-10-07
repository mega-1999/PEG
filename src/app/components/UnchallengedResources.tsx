"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Database, FolderSync, Layers, Zap, ArrowRight } from 'lucide-react';
import { getAssetUrl } from '@/lib/utils';

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
    <section className="w-full bg-[#002f7a] text-white py-10 sm:py-12 md:py-16 lg:py-20 relative overflow-hidden border-b border-white/10">

      {/* BACKGROUND: Technical Data Stream */}
      <div className="absolute inset-0 opacity-10 pointer-events-none flex justify-between px-6 md:px-20">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="w-px h-full bg-gradient-to-b from-transparent via-white to-transparent opacity-20" />
        ))}
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">

          {/* LEFT COLUMN: Fixed Headline + Bottom Looping Video */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full min-h-[450px] lg:min-h-[580px] space-y-6">
            <div className="space-y-4 sm:space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tighter leading-[0.9] uppercase text-white"
              >
                Unchallenged <br />
                <span className="text-[#006def]">Resources</span> <br />
                By PEG.
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="border-l-4 border-[#006def] pl-6 py-1"
              >
                <p className="text-lg md:text-xl font-black text-white uppercase tracking-tight leading-snug">
                  At the snap of your fingers. <br />
                  <span className="text-[#006def]">Seamlessly integrated.</span> <br />
                  Action ready.
                </p>
              </motion.div>
            </div>

            {/* BOTTOM LEFT: Looping Video Showcase */}
            <div className="relative w-full aspect-video bg-white/5 backdrop-blur-md border border-white/20 overflow-hidden shadow-lg flex items-center justify-center">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                suppressHydrationWarning
                className="w-full h-full object-contain"
              >
                <source src={getAssetUrl("/assets/video/Specifications_and_Compliance.mp4")} type="video/mp4" />
              </video>
              <div className="absolute top-3 left-3 bg-[#002f7a]/85 backdrop-blur-md px-2.5 py-1 border border-white/20">
                <span className="font-mono text-[9px] font-black tracking-widest text-[#006def] uppercase flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#006def] animate-pulse" />
                  TECHNICAL RESOURCES
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: The Interactive Scrollable Vault */}
          <div className="lg:col-span-6 w-full relative">

            {/* Scrollable Container with Custom Blue Scrollbar */}
            <div className="flex flex-col gap-6 h-[540px] md:h-[580px] overflow-y-auto pr-3 pb-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-[#002f7a] [&::-webkit-scrollbar-thumb]:bg-[#006def] [&::-webkit-scrollbar-thumb]:hover:bg-white">
              {pegResources.map((resource, idx) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-white hover:bg-[#006def] p-6 md:p-8 transition-all duration-300 cursor-pointer overflow-hidden border border-white/10 hover:shadow-[0_20px_60px_rgba(0,109,239,0.3)] shrink-0"
                >

                  <div className="flex items-start gap-4 mb-4 relative z-10">
                    {/* ICON: Dark Blue -> Hovers to White */}
                    <div className="p-3 bg-[#002f7a]/5 group-hover:bg-white text-[#002f7a] group-hover:text-[#006def] transition-colors duration-300 shrink-0">
                      {resource.icon}
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="text-[#006def] group-hover:text-white font-mono text-[10px] font-black uppercase tracking-widest mb-1 transition-colors duration-300">
                        {resource.subtitle}
                      </p>
                      <h3 className="text-lg md:text-xl font-black text-[#002f7a] group-hover:text-white uppercase tracking-tighter leading-tight transition-colors duration-300">
                        {resource.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-[#006def] group-hover:text-white text-sm leading-relaxed font-semibold transition-colors duration-300 relative z-10 mb-4">
                    {resource.description}
                  </p>

                  {/* FOOTER ACTION */}
                  <div className="pt-3 border-t border-[#002f7a]/10 group-hover:border-white/30 flex justify-between items-center relative z-10 transition-colors duration-300">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#002f7a] group-hover:text-white transition-colors duration-300">
                      Access Resource
                    </span>
                    <ArrowRight className="w-5 h-5 text-[#006def] group-hover:text-white transform group-hover:translate-x-2 transition-all duration-300" />
                  </div>

                  {/* BACKGROUND WATERMARK */}
                  <div className="absolute -bottom-6 -right-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none">
                    <div className="scale-[3] text-[#002f7a] group-hover:text-white transition-colors duration-300">
                      {resource.icon}
                    </div>
                  </div>

                </motion.div>
              ))}
            </div>

            {/* FADE GRADIENT AT THE BOTTOM */}
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#002f7a] to-transparent pointer-events-none" />

          </div>
        </div>
      </div>
    </section>
  );
}