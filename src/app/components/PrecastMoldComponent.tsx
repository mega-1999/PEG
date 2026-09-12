"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Box, 
  Layers, 
  Wrench, 
  ShieldCheck, 
  ArrowRight, 
  Maximize2, 
  Settings, 
  Cpu, 
  Compass, 
  ArrowUpRight 
} from 'lucide-react';
import { getAssetUrl } from '@/lib/utils';

const moldFeatures = [
  {
    title: "Heavy-Duty Steel Formwork",
    id: "MOLD_STL_01",
    icon: <Box className="w-6 h-6" />,
    description: "Engineered heavy-gauge structural steel faceplates designed for 1,000+ pour cycles with zero hydrostatic deflection.",
    specs: ["Durability: 1,000+ Pours", "Deflection: < ±1/16\"", "Faceplate: 3/8\" Steel"],
    tag: "STEEL FORMS"
  },
  {
    title: "Hydraulic Collapsible Cores",
    id: "MOLD_HYD_02",
    icon: <Settings className="w-6 h-6" />,
    description: "Automated collapsing internal core molds for box culverts, vaults, and manholes, drastically reducing crane stripping time.",
    specs: ["Stripping: Hydraulic Collapsible", "Bed Turnover: 2x Daily", "Operation: Remote Control"],
    tag: "AUTOMATED CORE"
  },
  {
    title: "Magnetic Side Shuttering",
    id: "MOLD_MAG_03",
    icon: <Layers className="w-6 h-6" />,
    description: "Self-locating high-power magnetic side forms for rapid adjustment on precast slab and wall panel casting beds.",
    specs: ["Adhesion: 2,000 kg Force", "Changeover: Under 5 Mins", "Flexibility: Modular Sizing"],
    tag: "MAGNETIC SHUTTER"
  },
  {
    title: "Pneumatic Compaction Mounts",
    id: "MOLD_VIB_04",
    icon: <Cpu className="w-6 h-6" />,
    description: "Precision-placed vibrator mounting brackets ensuring optimal energy transfer for dense, void-free concrete placement.",
    specs: ["Compaction: Void-Free", "Finish: Smooth Architectural", "Frequency: High-Vibe Pneumatic"],
    tag: "COMPACTION"
  }
];

export default function PrecastMoldComponent() {
  return (
    <section className="w-full bg-white py-20 px-10 md:px-20 relative overflow-hidden border-t border-[#004aad]/10">
      
      {/* CAD BLUEPRINT GRID PATTERN */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: `radial-gradient(#004aad 1.5px, transparent 1.5px), linear-gradient(to right, #004aad 0.5px, transparent 0.5px), linear-gradient(to bottom, #004aad 0.5px, transparent 0.5px)`,
          backgroundSize: '40px 40px, 200px 200px, 200px 200px'
        }} 
      />

      <div className="relative z-10 w-full">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6 border-b border-[#004aad]/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1B79EE]/10 text-[#1B79EE] text-xs font-black tracking-[0.2em] uppercase rounded-none mb-3 border border-[#1B79EE]/20">
              <Wrench className="w-3.5 h-3.5" /> High-Precision Tooling
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#004aad] tracking-tighter uppercase leading-none">
              PRECAST MOLD <span className="text-[#1B79EE]">& FORMWORK SYSTEMS.</span>
            </h2>
          </div>
          <p className="text-[#004aad]/70 font-medium text-sm md:text-base max-w-md">
            Custom heavy-duty steel mold design, magnetic shuttering systems, and hydraulic collapsing cores engineered for maximum casting bed turnover.
          </p>
        </div>

        {/* TOP FEATURE SHOWCASE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16 bg-[#004aad]/5 p-8 md:p-12 border border-[#004aad]/10">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#004aad] text-white text-xs font-black tracking-widest uppercase">
              <Compass className="w-3.5 h-3.5 text-[#1B79EE]" /> Custom Mold Engineering
            </div>
            <h3 className="text-2xl md:text-4xl font-black text-[#004aad] uppercase tracking-tight leading-tight">
              Tailored Formwork Engineering for Any Precast Element
            </h3>
            <p className="text-[#004aad]/80 text-sm md:text-base font-medium leading-relaxed">
              We design custom steel molds that withstand continuous high-pressure pours while maintaining tight NPCA tolerances. From multi-cell box culverts to architectural wall panels, our formwork guarantees rapid stripping and zero slurry leakage.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#004aad] bg-white px-3.5 py-2 border border-[#1B79EE]/20 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-[#1B79EE]" /> NPCA & AASHTO Form Tolerances
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#004aad] bg-white px-3.5 py-2 border border-[#1B79EE]/20 shadow-sm">
                <Settings className="w-4 h-4 text-[#1B79EE]" /> Fast Hydraulic Stripping
              </div>
            </div>
          </div>

          {/* VIDEO / VISUAL CONTAINER */}
          <div className="lg:col-span-6 relative aspect-video bg-[#004aad] shadow-xl border border-[#1B79EE]/30 group">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              suppressHydrationWarning
              className="w-full h-full object-cover"
            >
              <source src={getAssetUrl("/assets/video/E25_V2_final.mp4")} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-[#004aad]/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 z-10 text-white">
              <span className="text-[10px] font-mono uppercase tracking-widest bg-[#1B79EE] px-2.5 py-1 font-bold">
                Automated Formwork Operation
              </span>
              <h4 className="text-sm font-black uppercase tracking-wider mt-1">Hydraulic Core & Mold Assembly</h4>
            </div>
          </div>

        </div>

        {/* MOLD SYSTEM CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {moldFeatures.map((mold, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative flex bg-white border border-[#004aad]/10 overflow-hidden shadow-sm hover:border-[#1B79EE] hover:shadow-xl hover:shadow-[#1B79EE]/10 transition-all duration-500"
            >
              {/* Vertical Side Tag */}
              <div className="hidden md:flex items-center justify-center w-14 bg-[#004aad] text-white/20 select-none shrink-0">
                <span className="rotate-[-90deg] font-black text-xs tracking-[0.3em] whitespace-nowrap uppercase">
                  {mold.tag}
                </span>
              </div>

              {/* Card Content */}
              <div className="flex-1 p-8 md:p-10 relative flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-blue-50 text-[#1B79EE] group-hover:bg-[#1B79EE] group-hover:text-white transition-colors duration-500">
                      {mold.icon}
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#1B79EE] bg-blue-50 px-2.5 py-1 border border-[#1B79EE]/20">
                      {mold.id}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-[#004aad] uppercase tracking-tight mb-3 group-hover:text-[#1B79EE] transition-colors">
                    {mold.title}
                  </h3>

                  <p className="text-[#004aad]/70 text-xs md:text-sm leading-relaxed mb-6 font-medium">
                    {mold.description}
                  </p>
                </div>

                {/* Technical Specifications Bar */}
                <div>
                  <div className="grid grid-cols-3 gap-2 border-t border-[#004aad]/10 pt-6 mb-6">
                    {mold.specs.map((spec, i) => (
                      <div key={i} className="space-y-1">
                        <div className="h-0.5 w-3 bg-[#1B79EE]/40 group-hover:w-full transition-all duration-500" />
                        <p className="text-[9px] font-mono font-bold text-[#1B79EE] uppercase tracking-tighter">
                          {spec.split(":")[0]}
                        </p>
                        <p className="text-[11px] font-black text-[#004aad]">
                          {spec.split(":")[1]}
                        </p>
                      </div>
                    ))}
                  </div>

                  <button className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1B79EE] group-hover:text-[#004aad] group-hover:gap-4 transition-all duration-300">
                    <span>Explore Mold Spec</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
