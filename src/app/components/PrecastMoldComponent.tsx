"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  Layers,
  Wrench,
  ShieldCheck,
  ArrowRight,
  Settings,
  Cpu,
  Compass
} from 'lucide-react';
import { getAssetUrl } from '@/lib/utils';

const moldFeatures = [
  {
    title: "Heavy-Duty Steel Formwork",
    id: "MOLD_STL_01",
    icon: <Box className="w-5 h-5" />,
    description: "Engineered heavy-gauge structural steel faceplates designed for 1,000+ pour cycles with zero hydrostatic deflection.",
    specs: ["Durability: 1,000+ Pours", "Deflection: < ±1/16\"", "Faceplate: 3/8\" Steel"],
    tag: "STEEL FORMS"
  },
  {
    title: "Hydraulic Collapsible Cores",
    id: "MOLD_HYD_02",
    icon: <Settings className="w-5 h-5" />,
    description: "Automated collapsing internal core molds for box culverts, vaults, and manholes, drastically reducing crane stripping time.",
    specs: ["Stripping: Hydraulic", "Turnover: 2x Daily", "Operation: Remote"],
    tag: "AUTOMATED CORE"
  },
  {
    title: "Magnetic Side Shuttering",
    id: "MOLD_MAG_03",
    icon: <Layers className="w-5 h-5" />,
    description: "Self-locating high-power magnetic side forms for rapid adjustment on precast slab and wall panel casting beds.",
    specs: ["Adhesion: 2,000 kg", "Changeover: < 5 Mins", "Flexibility: Modular"],
    tag: "MAGNETIC SHUTTER"
  },
  {
    title: "Pneumatic Compaction Mounts",
    id: "MOLD_VIB_04",
    icon: <Cpu className="w-5 h-5" />,
    description: "Precision-placed vibrator mounting brackets ensuring optimal energy transfer for dense, void-free concrete placement.",
    specs: ["Compaction: Void-Free", "Finish: Architectural", "Frequency: High-Vibe"],
    tag: "COMPACTION"
  }
];

export default function PrecastMoldComponent() {
  return (
    <section className="w-full bg-[#002f7a] text-white py-8 md:py-10 px-10 md:px-20 relative overflow-hidden select-none border-t border-white/10">

      {/* CAD BLUEPRINT GRID PATTERN */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 w-full space-y-6 md:space-y-8">

        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-white/10 pb-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white text-xs font-black tracking-[0.2em] uppercase border-l-2 border-[#006def]">
              <Wrench className="w-3.5 h-3.5 text-[#006def]" /> High-Precision Tooling
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none">
              PRECAST MOLD <span className="text-[#006def]">& FORMWORK SYSTEMS.</span>
            </h2>
            <p className="text-white/80 font-semibold text-sm md:text-base max-w-2xl leading-relaxed">
              Custom heavy-duty steel mold design, magnetic shuttering systems, and hydraulic collapsing cores engineered for maximum casting bed turnover.
            </p>
          </div>
        </div>

        {/* TOP FEATURE SHOWCASE GRID */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center bg-[#00183f] text-white border border-[#006def]/30 hover:border-[#006def] p-6 md:p-8 rounded-sm shadow-xl transition-all duration-300 group overflow-hidden">

          {/* TOP ACCENT LINE */}
          <div className="absolute top-0 left-0 w-0 h-1 bg-[#006def] group-hover:w-full transition-all duration-300 z-20" />

          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white text-xs font-black tracking-widest uppercase border-l-2 border-[#006def]">
              <Compass className="w-3.5 h-3.5 text-[#006def]" /> Custom Mold Engineering
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight leading-snug">
              Tailored Formwork Engineering for Any Precast Element
            </h3>
            <p className="text-white/85 text-sm md:text-base font-semibold leading-relaxed">
              We design custom steel molds that withstand continuous high-pressure pours while maintaining tight NPCA tolerances. From multi-cell box culverts to architectural wall panels, our formwork guarantees rapid stripping and zero slurry leakage.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 text-xs font-bold text-white bg-white/10 px-3.5 py-1.5 border border-white/20 shadow-xs rounded-sm">
                <ShieldCheck className="w-4 h-4 text-[#006def]" />
                <span>NPCA & AASHTO Form Tolerances</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-white bg-white/10 px-3.5 py-1.5 border border-white/20 shadow-xs rounded-sm">
                <Settings className="w-4 h-4 text-[#006def]" />
                <span>Fast Hydraulic Stripping</span>
              </div>
            </div>
          </div>

          {/* VIDEO / VISUAL CONTAINER */}
          <div className="lg:col-span-6 relative aspect-video bg-white shadow-xl border border-white/20 rounded-sm group/vid overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              suppressHydrationWarning
              className="w-full h-full object-cover"
            >
              <source src={getAssetUrl("/TRENCH/TRENCH/2_side_24-18.1027.mp4")} type="video/mp4" />
            </video>
            <div className="absolute bottom-3 left-3 z-10">
              <span className="text-[10px] font-mono uppercase tracking-widest bg-[#002f7a] text-white px-2.5 py-1 font-bold shadow-md border border-[#006def]/40 rounded-xs">
                Automated Formwork Operation
              </span>
            </div>
          </div>

        </div>

        {/* MOLD SYSTEM CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {moldFeatures.map((mold, idx) => {
            const isBlue = idx === 0;
            return (
              <motion.div
                key={mold.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className={`group relative flex flex-col justify-between border overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 rounded-sm cursor-pointer p-6 md:p-7 ${
                  isBlue
                    ? "bg-[#00183f] hover:bg-[#001538] text-white border-[#006def]/40 hover:border-[#006def]"
                    : "bg-white hover:bg-slate-50 text-[#002f7a] border-[#002f7a]/15 hover:border-[#006def]"
                }`}
              >
                {/* TOP ACCENT LINE */}
                <div className="absolute top-0 left-0 w-0 h-1 bg-[#006def] group-hover:w-full transition-all duration-300 z-20" />

                <div>
                  {/* ICON LEFT + METADATA RIGHT */}
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-2.5 rounded-sm shrink-0 transition-colors duration-300 ${
                      isBlue
                        ? "bg-white/10 text-white group-hover:bg-[#006def] group-hover:text-white border border-white/20"
                        : "bg-blue-50 text-[#006def] group-hover:bg-[#002f7a] group-hover:text-white border border-[#006def]/20"
                    }`}>
                      {mold.icon}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-xs ${
                        isBlue
                          ? "bg-white/10 text-white/90 border border-white/20"
                          : "bg-blue-50 text-[#002f7a] border border-[#006def]/20"
                      }`}>
                        {mold.tag}
                      </span>
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-xs ${
                        isBlue
                          ? "bg-white/10 text-[#006def] border border-[#006def]/40"
                          : "bg-white text-[#006def] border border-[#006def]/30"
                      }`}>
                        {mold.id}
                      </span>
                    </div>
                  </div>

                  <h3 className={`text-lg md:text-xl font-black uppercase tracking-tight mb-2 transition-colors leading-snug ${
                    isBlue
                      ? "text-white group-hover:text-[#006def]"
                      : "text-[#002f7a] group-hover:text-[#006def]"
                  }`}>
                    {mold.title}
                  </h3>

                  <p className={`text-xs sm:text-sm leading-relaxed mb-4 font-semibold ${
                    isBlue
                      ? "text-white/85"
                      : "text-[#002f7a]/85"
                  }`}>
                    {mold.description}
                  </p>
                </div>

                {/* Technical Specifications Bar */}
                <div>
                  <div className={`grid grid-cols-3 gap-2 border-t pt-3.5 mb-4 ${
                    isBlue ? "border-white/10" : "border-[#002f7a]/10"
                  }`}>
                    {mold.specs.map((spec, i) => (
                      <div key={i} className="space-y-1">
                        <p className="text-[9px] font-mono font-bold text-[#006def] uppercase tracking-tight truncate">
                          {spec.split(":")[0]}
                        </p>
                        <p className={`text-[11px] font-mono font-bold px-1.5 py-0.5 rounded-xs truncate ${
                          isBlue
                            ? "text-white bg-white/10 border border-white/20"
                            : "text-[#002f7a] bg-blue-50 border border-[#006def]/20"
                        }`}>
                          {spec.split(":")[1]?.trim()}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className={`flex items-center gap-1.5 text-xs font-black uppercase tracking-wider transition-colors duration-300 ${
                    isBlue
                      ? "text-[#006def] group-hover:text-white"
                      : "text-[#006def] group-hover:text-[#002f7a]"
                  }`}>
                    <span>Explore Mold Spec</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
