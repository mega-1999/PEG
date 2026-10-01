"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Ruler, 
  Shield, 
  Layers, 
  CheckCircle2, 
  Play, 
  X,
  FileText
} from "lucide-react";
import { getAssetUrl } from "@/lib/utils";

// 5 CORE TRENCHING CATEGORIES
const categories = [
  {
    id: "2-side",
    name: "2-SIDE INTERLOCKING",
    countText: "3 VARIANTS",
    subtitle: "Linear Substation & Industrial Utility Runs",
    tag: "2-SIDE INTERLOCK",
    video: getAssetUrl("/TRENCH/TRENCH/GRATE_IMAGES.504.mp4"),
    desc: "Engineered 12ft precast concrete utility channel with dual interlocking male-female side joints. Built for continuous straight alignments with rapid drop-in grate seating.",
    jointType: "Dual-Side Male/Female Interlock",
    loadClass: "AASHTO H-20 / HS-25 Highway Rated",
    length: "12 FT Section Modules",
    grates: [
      {
        name: "ADA Grate",
        image: getAssetUrl("/TRENCH/12_ft_2_side_interlocking_trench_with_ada_grate.1119.png"),
        badge: "ADA COMPLIANT STEEL",
        spec: "AASHTO H-20 / HS-25 Rated"
      },
      {
        name: "Heel-Proof Grate",
        image: getAssetUrl("/TRENCH/12_ft_2_side_interlocking_trench_with_heel_proof_grate.1118.png"),
        badge: "HEEL-PROOF NARROW SLOT",
        spec: "Pedestrian & Heavy Commercial"
      },
      {
        name: "Regular Grate",
        image: getAssetUrl("/TRENCH/12_ft_2_side_interlocking_trench_with_regualar_grate.1120.png"),
        badge: "CAST DUCTILE IRON",
        spec: "Maximum Hydraulic Flow"
      }
    ]
  },
  {
    id: "3-side",
    name: "3-SIDE INTERLOCKING",
    countText: "3 VARIANTS",
    subtitle: "Tri-Directional Branch & T-Junction Routing",
    tag: "3-SIDE INTERLOCK",
    video: getAssetUrl("/TRENCH/TRENCH/12'_all_trench.411.mp4"),
    desc: "Features 3-sided interlocking tongue and groove alignment for complex utility junction nodes, branch channel breakouts, and multi-cable distribution routes.",
    jointType: "3-Side Keyed Interlock",
    loadClass: "AASHTO HS-25 Highway Rated",
    length: "12 FT Section Modules",
    grates: [
      {
        name: "ADA Grate",
        image: getAssetUrl("/TRENCH/12_ft_3_side_interlocking_trench_with_ada_grate.1111.png"),
        badge: "ADA COMPLIANT",
        spec: "H-20 / HS-25 Rated"
      },
      {
        name: "Heel-Proof Grate",
        image: getAssetUrl("/TRENCH/12_ft_3_side_interlocking_trench_with_heel_proof_grate.1110.png"),
        badge: "HEEL-PROOF MESH",
        spec: "Heavy Industrial H-20"
      },
      {
        name: "Regular Grate",
        image: getAssetUrl("/TRENCH/12_ft_3_side_interlocking_trench_with_regular_grate.1109.png"),
        badge: "HEAVY DUCTILE STEEL",
        spec: "AASHTO HS-25 Highway"
      }
    ]
  },
  {
    id: "45-tongue",
    name: "45° TONGUE INTERLOCKING",
    countText: "3 VARIANTS",
    subtitle: "Angled Utility Direction Change Loop",
    tag: "45° ANGLED JUNCTION",
    video: getAssetUrl("/TRENCH/TRENCH/12'_all_trench.414.mp4"),
    desc: "Precision-cast 45-degree angled tongue-and-groove joint system allowing smooth directional change in subterranean utility lines without field miters.",
    jointType: "45° Angled Tongue & Groove",
    loadClass: "AASHTO HS-25 Highway Rated",
    length: "12 FT Section Modules",
    grates: [
      {
        name: "ADA Grate",
        image: getAssetUrl("/TRENCH/12_ft_3_45_degree_toungue_interlocking_trench_with_ada_grate.1116.png"),
        badge: "ADA COMPLIANT",
        spec: "H-20 Commercial"
      },
      {
        name: "Heel-Proof Grate",
        image: getAssetUrl("/TRENCH/12_ft_3_45_degree_toungue_interlocking_trench_with_heel_proof_grate.1117.png"),
        badge: "HEEL-PROOF SAFETY",
        spec: "Heavy Industrial H-20"
      },
      {
        name: "Regular Grate",
        image: getAssetUrl("/TRENCH/12_ft_3_45_degree_toungue_interlocking_trench_with_regualr_grate.1115.png"),
        badge: "DUCTILE IRON HEAVY",
        spec: "AASHTO HS-25 Highway"
      }
    ]
  },
  {
    id: "chamfer",
    name: "CHAMFER INTERLOCKING",
    countText: "3 VARIANTS",
    subtitle: "Spall-Proof Beveled Edge Assembly",
    tag: "CHAMFER BEVELED",
    video: getAssetUrl("/TRENCH/TRENCH/12'_all_trench.465.mp4"),
    desc: "Architectural chamfered-edge precast concrete trench channel featuring precision beveled joints for spall prevention under intense wheel loads.",
    jointType: "Chamfer Beveled Interlock",
    loadClass: "AASHTO HS-25 Heavy Highway",
    length: "12 FT Section Modules",
    grates: [
      {
        name: "ADA Grate",
        image: getAssetUrl("/TRENCH/12_ft_3_champher_interlocking_trench_with_ada_grate.1112.png"),
        badge: "ADA COMPLIANT",
        spec: "H-20 Highway Rated"
      },
      {
        name: "Heel-Proof Grate",
        image: getAssetUrl("/TRENCH/12_ft_3_champher_interlocking_trench_with_heel_proof_grate.1113.png"),
        badge: "HEEL-PROOF SECURITY",
        spec: "Heavy Duty H-20"
      },
      {
        name: "Regular Grate",
        image: getAssetUrl("/TRENCH/12_ft_3_champher_interlocking_trench_with_regualr_grate.1114.png"),
        badge: "DUCTILE IRON GRATE",
        spec: "AASHTO HS-25 Highway"
      }
    ]
  },
  {
    id: "master-assembly",
    name: "MASTER ASSEMBLY",
    countText: "1 SYSTEM",
    subtitle: "Integrated Multi-Branch Precast Network",
    tag: "UNIVERSAL MODULAR",
    video: getAssetUrl("/TRENCH/TRENCH/12'_all_trench.465.mp4"),
    desc: "Complete 12ft modular trench system displaying 2-side, 3-side, 45° tongue, and chamfer interlocking configurations unified into one continuous assembly.",
    jointType: "Universal Modular Interlock",
    loadClass: "Multi-Rating H-20 / HS-25",
    length: "12 FT Master System",
    grates: [
      {
        name: "Complete Master Trench System",
        image: getAssetUrl("/TRENCH/12'_all_trench.1083.png"),
        badge: "UNIVERSAL MODULAR ASSEMBLY",
        spec: "Multi-Rating H-20 / HS-25"
      }
    ]
  }
];

export default function TrenchingSystem() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);
  const [selectedGrateIndex, setSelectedGrateIndex] = useState<number>(0);

  const currentCategory = categories[activeCategoryIndex] || categories[0];
  const currentGrate = currentCategory.grates[selectedGrateIndex] || currentCategory.grates[0];

  return (
    <section id="products" className="relative w-full bg-white py-16 border-t border-[#023380]/10 select-none">
      
      {/* CAD WATERMARK BACKGROUND */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        style={{ 
          backgroundImage: `radial-gradient(#023380 1.5px, transparent 1.5px), linear-gradient(to right, #023380 0.5px, transparent 0.5px), linear-gradient(to bottom, #023380 0.5px, transparent 0.5px)`,
          backgroundSize: '40px 40px, 200px 200px, 200px 200px'
        }} 
      />

      <div className="w-full px-6 md:px-16 lg:px-20 relative z-10 space-y-10">

        {/* 1. HEADER SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-[#023380]/10 pb-8">
          <div className="lg:col-span-7 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0271f1]/10 text-[#0271f1] text-xs font-black tracking-[0.2em] uppercase border-l-2 border-[#0271f1]">
              <Layers className="w-3.5 h-3.5" /> Precast Interlocking Infrastructure
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9] text-[#023380]">
              Trenching <span className="text-[#0271f1]">Systems.</span>
            </h2>
            <p className="text-[#023380] text-sm md:text-base leading-relaxed font-semibold max-w-2xl">
              Engineered 12ft interlocking precast trench channels designed for power substations, industrial facilities, and roadway crossings.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-wrap lg:justify-end gap-3">
            <div className="flex items-center gap-2.5 text-white font-black text-xs uppercase tracking-wider bg-[#023380] px-5 py-3 shadow-xs">
              <Ruler className="w-4 h-4 text-[#0271f1]" /> 12 FT Section Modules
            </div>
            <div className="flex items-center gap-2.5 text-[#023380] font-black text-xs uppercase tracking-wider bg-blue-50 px-5 py-3 border border-[#0271f1]/20 shadow-xs">
              <Shield className="w-4 h-4 text-[#0271f1]" /> AASHTO H-20 & HS-25 Rated
            </div>
          </div>
        </div>

        {/* 2. SINGLE-LINE CATEGORY SELECTOR BAR */}
        <div className="w-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-3 w-full">
            {categories.map((cat, idx) => {
              const isSelected = activeCategoryIndex === idx;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategoryIndex(idx);
                    setSelectedGrateIndex(0);
                  }}
                  className={`p-3 md:py-4 md:px-3 text-center transition-all border flex flex-col items-center justify-center cursor-pointer shadow-xs ${
                    isSelected
                      ? "bg-[#023380] text-white border-[#023380] shadow-md ring-2 ring-[#0271f1]"
                      : "bg-white text-[#023380] border-[#023380]/20 hover:border-[#0271f1] hover:bg-blue-50/60"
                  }`}
                >
                  <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider line-clamp-1">
                    {cat.name}
                  </span>
                  <span className={`text-[10px] font-mono font-bold mt-1 uppercase ${
                    isSelected ? "text-blue-200" : "text-[#0271f1]"
                  }`}>
                    {cat.countText}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. ACTIVE CATEGORY HERO SHOWCASE */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCategory.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="bg-white border border-[#023380]/15 shadow-sm p-6 md:p-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* LEFT: TECHNICAL RENDERING & GRATE TOGGLES */}
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-[#0271f1] text-white text-[10px] font-mono font-black uppercase tracking-widest">
                    {currentCategory.tag}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#0271f1]">
                    {currentCategory.countText}
                  </span>
                </div>

                {/* HIGH-RES IMAGE CONTAINER */}
                <div className="relative w-full aspect-16/10 bg-white border border-[#023380]/15 p-6 flex items-center justify-center overflow-hidden">
                  <Image
                    src={currentGrate.image}
                    alt={`${currentCategory.name} - ${currentGrate.name}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-contain p-4"
                    priority
                  />
                  <div className="absolute top-3 left-3 bg-[#023380] text-white px-2.5 py-0.5 text-[9px] font-mono font-black uppercase tracking-widest">
                    {currentGrate.badge}
                  </div>
                </div>

                {/* GRATE SELECTION PILLS (IF MULTIPLE VARIANTS) */}
                {currentCategory.grates.length > 1 && (
                  <div className="pt-1">
                    <div className="text-[10px] font-mono font-bold text-[#023380] uppercase tracking-wider mb-2">
                      Select Grate Configuration:
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {currentCategory.grates.map((g, gIdx) => {
                        const isGrateSelected = selectedGrateIndex === gIdx;
                        return (
                          <button
                            key={g.name}
                            onClick={() => setSelectedGrateIndex(gIdx)}
                            className={`py-2 px-2 text-[10px] font-mono font-black uppercase tracking-wider transition-all border text-center cursor-pointer ${
                              isGrateSelected
                                ? "bg-[#023380] text-white border-[#023380] shadow-xs"
                                : "bg-white text-[#023380] border-[#023380]/20 hover:border-[#0271f1] hover:bg-blue-50/50"
                            }`}
                          >
                            {g.name}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* RIGHT: 3D VIDEO SIMULATION & ENGINEERING SPECS */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-[#023380] uppercase tracking-tight">
                    {currentCategory.name}
                  </h3>
                  <p className="text-sm font-bold text-[#0271f1] uppercase tracking-wide mt-1">
                    {currentCategory.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-[#023380] font-semibold leading-relaxed mt-3">
                    {currentCategory.desc}
                  </p>
                </div>

                {/* 3D VIDEO SIMULATION */}
                <div className="relative aspect-video bg-[#023380] border border-[#0271f1]/30 overflow-hidden shadow-md">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    suppressHydrationWarning
                    key={currentCategory.video}
                    className="w-full h-full object-cover"
                  >
                    <source src={currentCategory.video} type="video/mp4" />
                  </video>
                  <div className="absolute top-2 left-2 z-10 bg-[#0271f1] text-white px-2.5 py-0.5 text-[9px] font-mono font-black uppercase tracking-wider shadow-xs flex items-center gap-1.5">
                    <Play className="w-2.5 h-2.5" /> 3D Joint Simulation
                  </div>
                  <div className="absolute bottom-2 right-2 z-10 bg-[#023380]/90 text-white px-2.5 py-1 text-[10px] font-mono font-bold uppercase backdrop-blur-xs">
                    12FT Module Jointing
                  </div>
                </div>

                {/* SPECIFICATIONS GRID */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-blue-50/60 p-3 border border-[#0271f1]/20">
                    <span className="text-[9px] font-mono font-bold text-[#023380] uppercase block">Section Length</span>
                    <span className="text-xs font-mono font-black text-[#023380]">{currentCategory.length}</span>
                  </div>
                  <div className="bg-blue-50/60 p-3 border border-[#0271f1]/20">
                    <span className="text-[9px] font-mono font-bold text-[#023380] uppercase block">Joint Geometry</span>
                    <span className="text-xs font-mono font-black text-[#0271f1] truncate block">{currentCategory.jointType}</span>
                  </div>
                  <div className="bg-blue-50/60 p-3 border border-[#0271f1]/20">
                    <span className="text-[9px] font-mono font-bold text-[#023380] uppercase block">Load Class</span>
                    <span className="text-xs font-mono font-black text-[#023380]">{currentCategory.loadClass}</span>
                  </div>
                  <div className="bg-blue-50/60 p-3 border border-[#0271f1]/20">
                    <span className="text-[9px] font-mono font-bold text-[#023380] uppercase block">Active Grate</span>
                    <span className="text-xs font-mono font-black text-[#023380] truncate block">{currentGrate.name}</span>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-2">
                  <a
                    href="#contact"
                    className="w-full py-3.5 bg-[#023380] hover:bg-[#0271f1] text-white text-xs font-mono font-black uppercase tracking-widest transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Request Shop Drawing & Submittal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}