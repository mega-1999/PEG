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
import Link from "next/link";

// 4 CORE TRENCHING CATEGORIES BASED ON PRE-TRENCH SPECIFICATIONS
const categories = [
  {
    id: "2-side",
    name: "2-SIDE INTERLOCKING",
    countText: "3 VARIANTS",
    subtitle: "Linear Substation & Industrial Utility Runs",
    tag: "2-SIDE INTERLOCK",
    video: getAssetUrl("/TRENCH/TRENCH/12'_all_trench.414.mp4"),
    desc: "Engineered 12ft precast concrete utility channel with dual interlocking male-female side joints. Built for continuous straight alignments with rapid drop-in grate seating.",
    jointType: "Dual-Side Male/Female Interlock",
    loadClass: "AASHTO H-20 / HS-25 Highway Rated",
    length: "12 FT Section Modules",
    grates: [
      {
        name: "ADA Grate",
        image: getAssetUrl("/assets/images/pre-trench/12_ft_2_side_interlocking_trench_with_ada_grate.1221.png"),
        badge: "ADA COMPLIANT STEEL",
        spec: "AASHTO H-20 / HS-25 Rated"
      },
      {
        name: "Heel-Proof Grate",
        image: getAssetUrl("/assets/images/pre-trench/12_ft_2_side_interlocking_trench_with_heel_proof_grate.1222.png"),
        badge: "HEEL-PROOF NARROW SLOT",
        spec: "Pedestrian & Heavy Commercial"
      },
      {
        name: "Regular Grate",
        image: getAssetUrl("/assets/images/pre-trench/12_ft_2_side_interlocking_trench_with_regualar_grate.1220.png"),
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
        image: getAssetUrl("/assets/images/pre-trench/12_ft_3_side_interlocking_trench_with_heel_ADA_grate.1224.png"),
        badge: "ADA COMPLIANT",
        spec: "H-20 / HS-25 Rated"
      },
      {
        name: "Heel-Proof Grate",
        image: getAssetUrl("/assets/images/pre-trench/12_ft_3_side_interlocking_trench_with_heel_proof_grate.1223.png"),
        badge: "HEEL-PROOF MESH",
        spec: "Heavy Industrial H-20"
      },
      {
        name: "Regular Grate",
        image: getAssetUrl("/assets/images/pre-trench/12_ft_3_side_interlocking_trench_with_heel_regualr_grate.1225.png"),
        badge: "HEAVY DUCTILE STEEL",
        spec: "AASHTO HS-25 Highway"
      }
    ]
  },
  {
    id: "45-degree",
    name: "45° INTERLOCKING",
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
        image: getAssetUrl("/assets/images/pre-trench/12_ft_45_degree_interlocking_trench_with_ADA_grate.1229.png"),
        badge: "ADA COMPLIANT",
        spec: "H-20 Commercial"
      },
      {
        name: "Heel-Proof Grate",
        image: getAssetUrl("/assets/images/pre-trench/12_ft_45_degree_interlocking_trench_with_heel_proof_grate.1230.png"),
        badge: "HEEL-PROOF SAFETY",
        spec: "Heavy Industrial H-20"
      },
      {
        name: "Regular Grate",
        image: getAssetUrl("/assets/images/pre-trench/12_ft_45_degree_interlocking_trench_with_regular_grate.1231.png"),
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
        image: getAssetUrl("/assets/images/pre-trench/12_ft_chamfer_interlocking_trench_with_ADA_grate.1228.png"),
        badge: "ADA COMPLIANT",
        spec: "H-20 Highway Rated"
      },
      {
        name: "Heel-Proof Grate",
        image: getAssetUrl("/assets/images/pre-trench/12_ft_chamfer_interlocking_trench_with_heel_proof_grate.1227.png"),
        badge: "HEEL-PROOF SECURITY",
        spec: "Heavy Duty H-20"
      },
      {
        name: "Regular Grate",
        image: getAssetUrl("/assets/images/pre-trench/12_ft_chamfer_interlocking_trench_with_regualr_grate.1226.png"),
        badge: "DUCTILE IRON GRATE",
        spec: "AASHTO HS-25 Highway"
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
    <section id="products" className="relative w-full bg-white text-[#002f7a] py-2 sm:py-4 md:py-6 border-t border-[#002f7a]/10 select-none overflow-hidden">

      {/* CAD BLUEPRINT HIGH-TECH BACKGROUND GRID */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #002f7a 1px, transparent 1px), linear-gradient(to bottom, #002f7a 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 w-full relative z-10 space-y-6 md:space-y-8">

        {/* 1. HEADER SECTION */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4 border-b border-[#002f7a]/10 pb-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-[#006def] text-xs font-black tracking-[0.2em] uppercase border-l-2 border-[#006def]">
              <Layers className="w-3.5 h-3.5 text-[#006def]" /> Precast Interlocking Infrastructure
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none text-[#002f7a]">
              Trenching <span className="text-[#006def]">Systems.</span>
            </h2>
            <p className="text-[#002f7a]/85 text-sm md:text-base leading-relaxed font-semibold max-w-2xl">
              Engineered 12ft interlocking precast trench channels designed for power substations, industrial facilities, and roadway crossings.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-wider bg-[#002f7a] px-3.5 py-2 rounded-sm shadow-xs">
              <Ruler className="w-4 h-4 text-[#006def]" />
              <span>12 FT Modules</span>
            </div>
            <div className="flex items-center gap-2 text-[#002f7a] font-bold text-xs uppercase tracking-wider bg-blue-50 px-3.5 py-2 border border-[#006def]/20 rounded-sm shadow-xs">
              <Shield className="w-4 h-4 text-[#006def]" />
              <span>AASHTO HS-25 Rated</span>
            </div>
          </div>
        </div>

        {/* 2. SINGLE-LINE CATEGORY SELECTOR BAR */}
        <div className="w-full">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 md:gap-3 w-full">
            {categories.map((cat, idx) => {
              const isSelected = activeCategoryIndex === idx;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategoryIndex(idx);
                    setSelectedGrateIndex(0);
                  }}
                  className={`p-3 md:py-3.5 md:px-3 text-center transition-all duration-200 border flex flex-col items-center justify-center cursor-pointer rounded-sm shadow-xs ${
                    isSelected
                      ? "bg-[#002f7a] text-white border-[#002f7a] shadow-sm"
                      : "bg-white text-[#002f7a] border-[#002f7a]/20 hover:border-[#006def] hover:bg-slate-50"
                  }`}
                >
                  <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider line-clamp-1">
                    {cat.name}
                  </span>
                  <span className={`text-[10px] font-mono font-bold mt-0.5 uppercase ${
                    isSelected ? "text-blue-200" : "text-[#006def]"
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
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="bg-white border border-[#002f7a]/15 hover:border-[#006def] shadow-xs hover:shadow-xl transition-all duration-300 p-6 md:p-8 rounded-sm relative group overflow-hidden"
          >
            {/* TOP ACCENT LINE */}
            <div className="absolute top-0 left-0 w-0 h-1 bg-[#006def] group-hover:w-full transition-all duration-300 z-20" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

              {/* LEFT: TECHNICAL RENDERING & GRATE TOGGLES */}
              <div className="lg:col-span-6 space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="px-2.5 py-0.5 bg-[#006def] text-white text-[10px] font-mono font-black uppercase tracking-widest rounded-xs">
                      {currentCategory.tag}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#006def]">
                      {currentCategory.countText}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-[#002f7a] uppercase tracking-tight leading-tight">
                    {currentCategory.name}
                  </h3>
                  <p className="text-xs font-bold text-[#006def] uppercase tracking-wider mt-0.5">
                    {currentCategory.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-[#002f7a]/85 font-semibold leading-relaxed mt-2.5">
                    {currentCategory.desc}
                  </p>
                </div>

                {/* HIGH-RES IMAGE CONTAINER */}
                <div className="relative w-full aspect-16/10 bg-white border border-[#002f7a]/15 rounded-sm p-4 flex items-center justify-center overflow-hidden">
                  <Image
                    src={currentGrate.image}
                    alt={`${currentCategory.name} - ${currentGrate.name}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute top-3 left-3 bg-[#002f7a] text-white px-2.5 py-0.5 text-[9px] font-mono font-black uppercase tracking-widest rounded-xs shadow-xs">
                    {currentGrate.badge}
                  </div>
                </div>

                {/* GRATE SELECTION PILLS (IF MULTIPLE VARIANTS) */}
                {currentCategory.grates.length > 1 && (
                  <div className="pt-1">
                    <div className="text-[10px] font-mono font-bold text-[#002f7a] uppercase tracking-wider mb-2">
                      Select Grate Configuration:
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {currentCategory.grates.map((g, gIdx) => {
                        const isGrateSelected = selectedGrateIndex === gIdx;
                        return (
                          <button
                            key={g.name}
                            onClick={() => setSelectedGrateIndex(gIdx)}
                            className={`py-1.5 px-2 text-[10px] font-mono font-bold uppercase tracking-wider transition-all duration-200 border text-center cursor-pointer rounded-xs ${
                              isGrateSelected
                                ? "bg-[#002f7a] text-white border-[#002f7a] shadow-xs"
                                : "bg-white text-[#002f7a] border-[#002f7a]/20 hover:border-[#006def] hover:bg-blue-50/50"
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
              <div className="lg:col-span-6 space-y-4">

                {/* 3D VIDEO SIMULATION */}
                <div className="relative aspect-video bg-white border border-[#006def]/20 rounded-sm overflow-hidden shadow-md">
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

                  <div className="absolute bottom-2.5 right-2.5 z-10 bg-[#002f7a]/90 text-white px-2.5 py-1 text-[10px] font-mono font-bold uppercase backdrop-blur-xs rounded-xs border border-[#006def]/30">
                    12FT Module Jointing
                  </div>
                </div>

                {/* SPECIFICATIONS GRID */}
                <div className="grid grid-cols-3 gap-2.5 pt-1">
                  <div className="bg-blue-50/70 p-2.5 border border-[#006def]/20 rounded-sm">
                    <span className="text-[9px] font-mono font-bold text-[#006def] uppercase block">Section Length</span>
                    <span className="text-xs font-mono font-black text-[#002f7a] truncate block">{currentCategory.length}</span>
                  </div>
                  <div className="bg-blue-50/70 p-2.5 border border-[#006def]/20 rounded-sm">
                    <span className="text-[9px] font-mono font-bold text-[#006def] uppercase block">Joint Geometry</span>
                    <span className="text-xs font-mono font-black text-[#002f7a] truncate block">{currentCategory.jointType}</span>
                  </div>
                  <div className="bg-blue-50/70 p-2.5 border border-[#006def]/20 rounded-sm">
                    <span className="text-[9px] font-mono font-bold text-[#006def] uppercase block">Load Class</span>
                    <span className="text-xs font-mono font-black text-[#002f7a] truncate block">{currentCategory.loadClass}</span>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-1">
                  <Link
                    href="#contact"
                    className="w-full py-3 bg-[#002f7a] hover:bg-[#006def] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 rounded-sm shadow-xs cursor-pointer group/btn"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Request Shop Drawing & Submittal</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}