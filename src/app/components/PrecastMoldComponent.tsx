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
    <section className="w-full bg-white py-20 px-10 md:px-20 relative overflow-hidden border-t border-[#023380]/10">
      
      {/* CAD BLUEPRINT GRID PATTERN */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: `radial-gradient(#023380 1.5px, transparent 1.5px), linear-gradient(to right, #023380 0.5px, transparent 0.5px), linear-gradient(to bottom, #023380 0.5px, transparent 0.5px)`,
          backgroundSize: '40px 40px, 200px 200px, 200px 200px'
        }} 
      />

      <div className="relative z-10 w-full">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6 border-b border-[#023380]/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0271f1]/10 text-[#0271f1] text-xs font-black tracking-[0.2em] uppercase rounded-none mb-3 border border-[#0271f1]/20">
              <Wrench className="w-3.5 h-3.5" /> High-Precision Tooling
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#023380] tracking-tighter uppercase leading-none">
              PRECAST MOLD <span className="text-[#0271f1]">& FORMWORK SYSTEMS.</span>
            </h2>
          </div>
          <p className="text-[#023380] font-semibold text-sm md:text-base max-w-md">
            Custom heavy-duty steel mold design, magnetic shuttering systems, and hydraulic collapsing cores engineered for maximum casting bed turnover.
          </p>
        </div>

        {/* TOP FEATURE SHOWCASE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16 bg-white p-6 md:p-10 border border-[#023380]/15 shadow-sm">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#023380] text-white text-xs font-black tracking-widest uppercase">
              <Compass className="w-3.5 h-3.5 text-[#0271f1]" /> Custom Mold Engineering
            </div>
            <h3 className="text-2xl md:text-4xl font-black text-[#023380] uppercase tracking-tight leading-tight">
              Tailored Formwork Engineering for Any Precast Element
            </h3>
            <p className="text-[#023380] text-sm md:text-base font-semibold leading-relaxed">
              We design custom steel molds that withstand continuous high-pressure pours while maintaining tight NPCA tolerances. From multi-cell box culverts to architectural wall panels, our formwork guarantees rapid stripping and zero slurry leakage.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#023380] bg-blue-50/50 px-3.5 py-2 border border-[#0271f1]/20 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-[#0271f1]" /> NPCA & AASHTO Form Tolerances
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#023380] bg-blue-50/50 px-3.5 py-2 border border-[#0271f1]/20 shadow-xs">
                <Settings className="w-4 h-4 text-[#0271f1]" /> Fast Hydraulic Stripping
              </div>
            </div>
          </div>

          {/* VIDEO / VISUAL CONTAINER - CRYSTAL CLEAR */}
          <div className="lg:col-span-6 relative aspect-video bg-white shadow-xl border border-[#0271f1]/30 group overflow-hidden">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              preload="auto"
              suppressHydrationWarning
              className="w-full h-full object-cover"
            >
              <source src={getAssetUrl("/assets/video/E25_V2_final.mp4")} type="video/mp4" />
            </video>
            <div className="absolute bottom-4 left-4 z-10 text-white">
              <span className="text-[10px] font-mono uppercase tracking-widest bg-[#0271f1] px-2.5 py-1 font-bold shadow-md">
                Automated Formwork Operation
              </span>
              <h4 className="text-sm font-black uppercase tracking-wider mt-1.5 drop-shadow-md">Hydraulic Core & Mold Assembly</h4>
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
              className="group relative flex bg-white border border-[#023380]/15 overflow-hidden shadow-xs hover:border-[#0271f1] hover:shadow-lg transition-all duration-300"
            >
              {/* Card Content */}
              <div className="flex-1 p-8 md:p-10 relative flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-blue-50 text-[#0271f1] group-hover:bg-[#023380] group-hover:text-white transition-colors duration-300">
                      {mold.icon}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold text-[#023380] uppercase tracking-wider bg-blue-50 px-2.5 py-1">
                        {mold.tag}
                      </span>
                      <span className="text-[10px] font-mono font-bold text-[#0271f1] bg-white px-2.5 py-1 border border-[#0271f1]/30">
                        {mold.id}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-[#023380] uppercase tracking-tight mb-3 group-hover:text-[#0271f1] transition-colors">
                    {mold.title}
                  </h3>

                  <p className="text-[#023380] text-xs md:text-sm leading-relaxed mb-6 font-semibold">
                    {mold.description}
                  </p>
                </div>

                {/* Technical Specifications Bar */}
                <div>
                  <div className="grid grid-cols-3 gap-3 border-t border-[#023380]/10 pt-5 mb-5">
                    {mold.specs.map((spec, i) => (
                      <div key={i} className="space-y-1">
                        <div className="h-0.5 w-3 bg-[#0271f1] group-hover:w-full transition-all duration-300" />
                        <p className="text-[9px] font-mono font-bold text-[#0271f1] uppercase tracking-tighter">
                          {spec.split(":")[0]}
                        </p>
                        <p className="text-[11px] font-black text-[#023380]">
                          {spec.split(":")[1]}
                        </p>
                      </div>
                    ))}
                  </div>

                  <button className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#0271f1] group-hover:text-[#023380] group-hover:gap-4 transition-all duration-300">
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
