"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Ruler, 
  Shield, 
  Zap, 
  Box, 
  Layers, 
  Grid, 
  CheckCircle2, 
  Play, 
  Maximize2, 
  X,
  Compass,
  FileCode2,
  Filter
} from "lucide-react";
import { getAssetUrl } from "@/lib/utils";

// 4 FEATURED VIDEO DEMONSTRATIONS FROM /public/TRENCH/TRENCH/
const trenchVideos = [
  {
    id: "VID-01",
    title: "2-Side Interlocking 24-18 Assembly",
    subtitle: "12ft Dual Male/Female Joint Demonstration",
    video: getAssetUrl("/TRENCH/TRENCH/2_side_24-18.1027.mp4"),
    tag: "2-SIDE INTERLOCK"
  },
  {
    id: "VID-02",
    title: "3-Side Interlocking System",
    subtitle: "Tri-Directional Branch Channel Placement",
    video: getAssetUrl("/TRENCH/TRENCH/12'_all_trench.411.mp4"),
    tag: "3-SIDE INTERLOCK"
  },
  {
    id: "VID-03",
    title: "45° Tongue & Groove Junction",
    subtitle: "Angled Utility Direction Change Loop",
    video: getAssetUrl("/TRENCH/TRENCH/12'_all_trench.414.mp4"),
    tag: "45° ANGLED JUNCTION"
  },
  {
    id: "VID-04",
    title: "Chamfer Beveled Interlocking System",
    subtitle: "Spall-Proof Beveled Edge Assembly",
    video: getAssetUrl("/TRENCH/TRENCH/12'_all_trench.465.mp4"),
    tag: "CHAMFER BEVELED"
  }
];

// ALL 13 TRENCH PRODUCTS DEFINED FROM /public/TRENCH/
const trenchProducts = [
  // 2-SIDE INTERLOCKING
  {
    id: "TR-2S-ADA",
    category: "2-Side Interlocking",
    title: "12ft 2-Side Interlocking Trench (ADA Grate)",
    subtitle: "Heavy-Duty Utility Trench with Pedestrian ADA Compliance",
    img: getAssetUrl("/TRENCH/12_ft_2_side_interlocking_trench_with_ada_grate.1119.png"),
    video: getAssetUrl("/TRENCH/TRENCH/2_side_24-18.1027.mp4"),
    grateType: "ADA Compliant Steel",
    length: "12 FT Section",
    jointType: "Dual-Side Male/Female Interlock",
    loadClass: "H-20 / HS-25 Highway Rated",
    description: "Engineered precast concrete utility channel with dual interlocking male-female side joints. Equipped with high-flow ADA compliant surface grates."
  },
  {
    id: "TR-2S-HP",
    category: "2-Side Interlocking",
    title: "12ft 2-Side Interlocking Trench (Heel-Proof Grate)",
    subtitle: "High-Traffic Pedestrian Channel with Heel-Proof Steel Grate",
    img: getAssetUrl("/TRENCH/12_ft_2_side_interlocking_trench_with_heel_proof_grate.1118.png"),
    video: getAssetUrl("/TRENCH/TRENCH/2_side_24-18.1027.mp4"),
    grateType: "Heel-Proof Narrow Slot",
    length: "12 FT Section",
    jointType: "Dual-Side Male/Female Interlock",
    loadClass: "H-20 Heavy Traffic",
    description: "Designed for commercial plazas and industrial walkways requiring tight-aperture heel-proof grates without compromising drainage throughput."
  },
  {
    id: "TR-2S-REG",
    category: "2-Side Interlocking",
    title: "12ft 2-Side Interlocking Trench (Regular Grate)",
    subtitle: "Standard Industrial High-Capacity Utility Trench",
    img: getAssetUrl("/TRENCH/12_ft_2_side_interlocking_trench_with_regualar_grate.1120.png"),
    video: getAssetUrl("/TRENCH/TRENCH/2_side_24-18.1027.mp4"),
    grateType: "Standard Cast Ductile Iron",
    length: "12 FT Section",
    jointType: "Dual-Side Male/Female Interlock",
    loadClass: "AASHTO H-20 Heavy Commercial",
    description: "Maximum hydraulic efficiency trench channel for substation cable management, industrial manufacturing facilities, and roadway crossings."
  },

  // 3-SIDE INTERLOCKING
  {
    id: "TR-3S-ADA",
    category: "3-Side Interlocking",
    title: "12ft 3-Side Interlocking Trench (ADA Grate)",
    subtitle: "Tri-Directional Interlocking Trench with ADA Surface Cover",
    img: getAssetUrl("/TRENCH/12_ft_3_side_interlocking_trench_with_ada_grate.1111.png"),
    video: getAssetUrl("/TRENCH/TRENCH/12'_all_trench.411.mp4"),
    grateType: "ADA Compliant Grating",
    length: "12 FT Section",
    jointType: "3-Side Keyed Interlock",
    loadClass: "H-20 / HS-25 Rated",
    description: "Features 3-sided interlocking tongue and groove alignment for complex utility junction nodes and multi-branch cable runs."
  },
  {
    id: "TR-3S-HP",
    category: "3-Side Interlocking",
    title: "12ft 3-Side Interlocking Trench (Heel-Proof Grate)",
    subtitle: "Tri-Directional Channel with Heel-Proof Security Grate",
    img: getAssetUrl("/TRENCH/12_ft_3_side_interlocking_trench_with_heel_proof_grate.1110.png"),
    video: getAssetUrl("/TRENCH/TRENCH/12'_all_trench.411.mp4"),
    grateType: "Heel-Proof Mesh Steel",
    length: "12 FT Section",
    jointType: "3-Side Keyed Interlock",
    loadClass: "Heavy Industrial H-20",
    description: "Tri-directional interlocking concrete vault section engineered to withstand extreme static loadings with safety heel-proof top grate covers."
  },
  {
    id: "TR-3S-REG",
    category: "3-Side Interlocking",
    title: "12ft 3-Side Interlocking Trench (Regular Grate)",
    subtitle: "Heavy-Duty 3-Side Keyed Industrial Drainage Channel",
    img: getAssetUrl("/TRENCH/12_ft_3_side_interlocking_trench_with_regular_grate.1109.png"),
    video: getAssetUrl("/TRENCH/TRENCH/12'_all_trench.411.mp4"),
    grateType: "Heavy Ductile Steel",
    length: "12 FT Section",
    jointType: "3-Side Keyed Interlock",
    loadClass: "AASHTO HS-25 Highway",
    description: "Robust 3-sided interlocking structural channel designed for rapid installation in electrical substations and industrial plants."
  },

  // 3-WAY 45° TONGUE INTERLOCKING
  {
    id: "TR-45-ADA",
    category: "45° Tongue Interlocking",
    title: "12ft 3-Way 45° Tongue Interlocking Trench (ADA Grate)",
    subtitle: "Angled Junction Interlocking Trench with ADA Cover",
    img: getAssetUrl("/TRENCH/12_ft_3_45_degree_toungue_interlocking_trench_with_ada_grate.1116.png"),
    video: getAssetUrl("/TRENCH/TRENCH/12'_all_trench.414.mp4"),
    grateType: "ADA Compliant Grating",
    length: "12 FT Section",
    jointType: "45° Angled Tongue & Groove",
    loadClass: "H-20 Commercial",
    description: "Precision-cast 45-degree angled tongue-and-groove joint system allowing smooth directional change in subterranean utility lines."
  },
  {
    id: "TR-45-HP",
    category: "45° Tongue Interlocking",
    title: "12ft 3-Way 45° Tongue Interlocking Trench (Heel-Proof)",
    subtitle: "45° Directional Branch Trench with Heel-Proof Grate",
    img: getAssetUrl("/TRENCH/12_ft_3_45_degree_toungue_interlocking_trench_with_heel_proof_grate.1117.png"),
    video: getAssetUrl("/TRENCH/TRENCH/12'_all_trench.414.mp4"),
    grateType: "Heel-Proof Safety Grate",
    length: "12 FT Section",
    jointType: "45° Angled Tongue & Groove",
    loadClass: "Heavy Industrial H-20",
    description: "Angled 45-degree interlocking concrete channel engineered for seamless layout transitions around existing structures."
  },
  {
    id: "TR-45-REG",
    category: "45° Tongue Interlocking",
    title: "12ft 3-Way 45° Tongue Interlocking Trench (Regular Grate)",
    subtitle: "High-Capacity Angled Utility Junction Trench",
    img: getAssetUrl("/TRENCH/12_ft_3_45_degree_toungue_interlocking_trench_with_regualr_grate.1115.png"),
    video: getAssetUrl("/TRENCH/TRENCH/12'_all_trench.414.mp4"),
    grateType: "Ductile Iron Heavy Grate",
    length: "12 FT Section",
    jointType: "45° Angled Tongue & Groove",
    loadClass: "AASHTO HS-25 Highway",
    description: "Angled 45° tongue-and-groove precast channel eliminating complex field miters and reducing installation labor."
  },

  // 3-WAY CHAMFER INTERLOCKING
  {
    id: "TR-CH-ADA",
    category: "Chamfer Interlocking",
    title: "12ft 3-Way Chamfer Interlocking Trench (ADA Grate)",
    subtitle: "Beveled Edge Chamfer Interlocking Trench with ADA Cover",
    img: getAssetUrl("/TRENCH/12_ft_3_champher_interlocking_trench_with_ada_grate.1112.png"),
    video: getAssetUrl("/TRENCH/TRENCH/12'_all_trench.465.mp4"),
    grateType: "ADA Compliant Surface",
    length: "12 FT Section",
    jointType: "Chamfer Beveled Interlock",
    loadClass: "H-20 Highway Rated",
    description: "Architectural chamfered-edge precast concrete trench channel featuring precision beveled joints for spall prevention."
  },
  {
    id: "TR-CH-HP",
    category: "Chamfer Interlocking",
    title: "12ft 3-Way Chamfer Interlocking Trench (Heel-Proof)",
    subtitle: "Chamfered Joint Channel with Heel-Proof Grate",
    img: getAssetUrl("/TRENCH/12_ft_3_champher_interlocking_trench_with_heel_proof_grate.1113.png"),
    video: getAssetUrl("/TRENCH/TRENCH/12'_all_trench.465.mp4"),
    grateType: "Heel-Proof High-Security",
    length: "12 FT Section",
    jointType: "Chamfer Beveled Interlock",
    loadClass: "Heavy Duty H-20",
    description: "Chamfered edge design prevents edge chipping under heavy vehicle impacts while providing heel-proof walking surfaces."
  },
  {
    id: "TR-CH-REG",
    category: "Chamfer Interlocking",
    title: "12ft 3-Way Chamfer Interlocking Trench (Regular Grate)",
    subtitle: "Industrial Chamfer Beveled Utility Channel",
    img: getAssetUrl("/TRENCH/12_ft_3_champher_interlocking_trench_with_regualr_grate.1114.png"),
    video: getAssetUrl("/TRENCH/TRENCH/12'_all_trench.465.mp4"),
    grateType: "Ductile Iron Grate",
    length: "12 FT Section",
    jointType: "Chamfer Beveled Interlock",
    loadClass: "AASHTO HS-25 Highway",
    description: "Chamfered heavy industrial precast trench channel engineered for intense load transfer and zero slurry seepage."
  },

  // COMPLETE MASTER ASSEMBLY
  {
    id: "TR-ALL-SYS",
    category: "Master Assembly",
    title: "12ft Complete Interlocking Trench Assembly",
    subtitle: "Integrated Multi-Branch Precast Trench System Overview",
    img: getAssetUrl("/TRENCH/12'_all_trench.1083.png"),
    video: getAssetUrl("/TRENCH/TRENCH/12'_all_trench.465.mp4"),
    grateType: "Modular Interchangeable Grates",
    length: "12 FT Master System",
    jointType: "Universal Modular Interlock",
    loadClass: "Multi-Rating H-20 / HS-25",
    description: "Complete 12ft modular trench system displaying 2-side, 3-side, 45° tongue, and chamfer interlocking configurations."
  }
];

const categories = [
  "All Systems",
  "2-Side Interlocking",
  "3-Side Interlocking",
  "45° Tongue Interlocking",
  "Chamfer Interlocking",
  "Master Assembly"
];

export default function TrenchingSystem() {
  const [selectedCategory, setSelectedCategory] = useState("All Systems");
  const [activeModalProduct, setActiveModalProduct] = useState<typeof trenchProducts[0] | null>(null);

  const filteredProducts = selectedCategory === "All Systems" 
    ? trenchProducts 
    : trenchProducts.filter(p => p.category === selectedCategory);

  return (
    <section className="relative w-full bg-white py-20 border-t border-[#004aad]/10 select-none">
      
      {/* CAD WATERMARK BACKGROUND */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        style={{ 
          backgroundImage: `radial-gradient(#004aad 1.5px, transparent 1.5px), linear-gradient(to right, #004aad 0.5px, transparent 0.5px), linear-gradient(to bottom, #004aad 0.5px, transparent 0.5px)`,
          backgroundSize: '40px 40px, 200px 200px, 200px 200px'
        }} 
      />

      <div className="w-full px-10 md:px-20 relative z-10 space-y-16">

        {/* 1. HEADER SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-[#004aad]/10 pb-12">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1B79EE]/10 text-[#1B79EE] text-xs font-black tracking-[0.2em] uppercase border-l-2 border-[#1B79EE]">
              <Layers className="w-3.5 h-3.5" /> Precast Interlocking Infrastructure
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9] text-[#004aad]">
              Trenching <span className="text-[#1B79EE]">Systems.</span>
            </h2>
            <p className="text-[#004aad]/70 text-sm md:text-base leading-relaxed font-medium max-w-2xl">
              Engineered 12ft interlocking precast trench channels designed for power substations, industrial facilities, and roadway crossings. Complete with ADA, Heel-Proof, and Ductile Iron grates.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-wrap lg:justify-end gap-4">
            <div className="flex items-center gap-3 text-white font-black text-xs uppercase tracking-widest bg-[#004aad] px-6 py-4 border border-[#004aad] shadow-md">
              <Ruler className="w-4 h-4 text-[#1B79EE]" /> 12 FT Section Modules
            </div>
            <div className="flex items-center gap-3 text-[#004aad] font-black text-xs uppercase tracking-widest bg-blue-50 px-6 py-4 border border-[#1B79EE]/20 shadow-sm">
              <Shield className="w-4 h-4 text-[#1B79EE]" /> AASHTO H-20 & HS-25 Rated
            </div>
          </div>
        </div>

        {/* 2. FEATURED VIDEO DEMONSTRATIONS ROW */}
        <div>
          <div className="flex items-center justify-between mb-6">
 
            <span className="text-[10px] font-mono font-bold text-[#1B79EE] bg-blue-50 px-2.5 py-1 border border-[#1B79EE]/20">
              3D ANIMATED SIMULATIONS
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trenchVideos.map((item) => (
              <div 
                key={item.id}
                className="group relative bg-[#004aad] border border-[#004aad]/20 overflow-hidden shadow-md flex flex-col justify-between"
              >
                {/* VIDEO WRAPPER */}
                <div className="relative w-full aspect-video bg-[#004aad] overflow-hidden">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    suppressHydrationWarning
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  >
                    <source src={item.video} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#004aad]/90 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute top-3 left-3 bg-[#1B79EE] text-white px-2 py-0.5 text-[9px] font-mono font-black uppercase tracking-wider">
                    {item.tag}
                  </div>
                </div>

                {/* TEXT CONTAINER */}
                <div className="p-4 bg-[#004aad] text-white border-t border-white/10">
                  <h4 className="text-xs font-black uppercase tracking-tight text-white group-hover:text-[#1B79EE] transition-colors leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-[10px] font-medium text-white/70 mt-1">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. CATEGORY FILTER TABS */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#004aad]/10 pb-4">
            <div className="flex items-center gap-2 text-[#004aad]">
              <Filter className="w-4 h-4 text-[#1B79EE]" />
              <span className="text-xs font-black uppercase tracking-widest">Filter Trench Categories ({filteredProducts.length} Items)</span>
            </div>

            {/* TAB BUTTONS */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-[11px] font-black uppercase tracking-wider transition-all duration-200 border ${
                    selectedCategory === cat
                      ? "bg-[#004aad] text-white border-[#004aad] shadow-md"
                      : "bg-white text-[#004aad]/80 border-[#004aad]/20 hover:border-[#1B79EE] hover:text-[#1B79EE]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* 4. ALL 13 TRENCH PRODUCTS GRID */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            <AnimatePresence>
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white border border-[#004aad]/15 hover:border-[#1B79EE] hover:shadow-[0_20px_50px_rgba(27,121,238,0.15)] transition-all duration-500 flex flex-col justify-between overflow-hidden"
                >
                  {/* IMAGE CONTAINER */}
                  <div className="relative w-full aspect-[4/3] bg-white p-6 border-b border-[#004aad]/10 overflow-hidden flex items-center justify-center">
                    <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out">
                      <Image
                        src={getAssetUrl(product.img)}
                        alt={product.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
                        className="object-contain"
                      />
                    </div>

                    {/* BADGES */}
                    <div className="absolute top-3 left-3 bg-[#004aad] text-white px-2 py-0.5 text-[9px] font-mono font-black uppercase tracking-widest">
                      {product.id}
                    </div>

                    <button 
                      onClick={() => setActiveModalProduct(product)}
                      className="absolute bottom-3 right-3 bg-white/90 hover:bg-[#1B79EE] text-[#004aad] hover:text-white p-2 border border-[#004aad]/20 shadow-sm transition-colors"
                      title="Expand Specifications"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* DETAILS CONTENT */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <span className="text-[9px] font-mono font-bold text-[#1B79EE] uppercase tracking-widest block mb-1">
                        {product.category}
                      </span>
                      <h4 className="text-base font-black text-[#004aad] uppercase tracking-tight leading-tight group-hover:text-[#1B79EE] transition-colors">
                        {product.title}
                      </h4>
                      <p className="text-xs font-medium text-[#004aad]/70 mt-2 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* SPEC TAGS */}
                    <div className="space-y-2 pt-2 border-t border-[#004aad]/10">
                      <div className="flex justify-between items-center text-[10px] font-mono">
                        <span className="text-[#004aad]/60 font-bold uppercase">Grate:</span>
                        <span className="font-black text-[#004aad]">{product.grateType}</span>
                      </div>
                      <div className="flex justify-between items-center text-[10px] font-mono">
                        <span className="text-[#004aad]/60 font-bold uppercase">Joint:</span>
                        <span className="font-black text-[#1B79EE]">{product.jointType}</span>
                      </div>
                    </div>

                    {/* ACTION BUTTON */}
                    <button
                      onClick={() => setActiveModalProduct(product)}
                      className="w-full py-3 bg-[#004aad]/5 hover:bg-[#004aad] text-[#004aad] hover:text-white border border-[#004aad]/20 text-[10px] font-mono font-black uppercase tracking-widest transition-colors flex items-center justify-center gap-2 group/btn mt-2"
                    >
                      <span>Technical Specs</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* 5. MODAL / DETAILED INSPECTOR DIALOG */}
        <AnimatePresence>
          {activeModalProduct && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[300] bg-[#004aad]/80 backdrop-blur-md flex items-center justify-center p-4 md:p-10 select-none"
              onClick={() => setActiveModalProduct(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                className="bg-white border-2 border-[#1B79EE] w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* CLOSE BUTTON */}
                <button
                  onClick={() => setActiveModalProduct(null)}
                  className="absolute top-4 right-4 z-20 bg-[#004aad] text-white p-2.5 hover:bg-[#1B79EE] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-12">
                  {/* IMAGE & VIDEO PREVIEW SIDE */}
                  <div className="md:col-span-6 bg-slate-50 p-8 border-b md:border-b-0 md:border-r border-[#004aad]/10 flex flex-col justify-between">
                    <div className="relative w-full aspect-square bg-white border border-[#004aad]/10 p-4 mb-6">
                      <Image
                        src={activeModalProduct.img}
                        alt={activeModalProduct.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-contain"
                      />
                    </div>

                    {/* MINI VIDEO PLAYER */}
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono font-bold text-[#004aad] uppercase tracking-widest flex items-center gap-1.5">
                        <Play className="w-3 h-3 text-[#1B79EE]" /> 3D Joint Simulation Loop
                      </span>
                      <div className="relative w-full aspect-video bg-[#004aad] border border-[#004aad]/20 overflow-hidden">
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                        >
                          <source src={activeModalProduct.video} type="video/mp4" />
                        </video>
                      </div>
                    </div>
                  </div>

                  {/* TECHNICAL DATA SIDE */}
                  <div className="md:col-span-6 p-8 flex flex-col justify-between space-y-6">
                    <div>
                      <span className="inline-block px-2.5 py-1 bg-[#1B79EE]/10 text-[#1B79EE] text-[10px] font-mono font-black uppercase tracking-widest border border-[#1B79EE]/20 mb-3">
                        {activeModalProduct.id} • {activeModalProduct.category}
                      </span>
                      <h3 className="text-xl md:text-2xl font-black text-[#004aad] uppercase tracking-tight leading-tight mb-2">
                        {activeModalProduct.title}
                      </h3>
                      <p className="text-xs font-bold text-[#1B79EE] uppercase tracking-wide mb-4">
                        {activeModalProduct.subtitle}
                      </p>
                      <p className="text-xs text-[#004aad]/70 leading-relaxed font-medium mb-6">
                        {activeModalProduct.description}
                      </p>

                      {/* DETAILED SPEC TABLE */}
                      <div className="space-y-2 border-t border-b border-[#004aad]/10 py-4 font-mono text-xs">
                        <div className="flex justify-between py-1 border-b border-[#004aad]/5">
                          <span className="text-[#004aad]/60 font-bold uppercase">Section Length:</span>
                          <span className="font-black text-[#004aad]">{activeModalProduct.length}</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-[#004aad]/5">
                          <span className="text-[#004aad]/60 font-bold uppercase">Grate Profile:</span>
                          <span className="font-black text-[#004aad]">{activeModalProduct.grateType}</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-[#004aad]/5">
                          <span className="text-[#004aad]/60 font-bold uppercase">Interlock Type:</span>
                          <span className="font-black text-[#1B79EE]">{activeModalProduct.jointType}</span>
                        </div>
                        <div className="flex justify-between py-1">
                          <span className="text-[#004aad]/60 font-bold uppercase">AASHTO Rating:</span>
                          <span className="font-black text-[#004aad]">{activeModalProduct.loadClass}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 pt-4">
                      <a
                        href="#contact"
                        onClick={() => setActiveModalProduct(null)}
                        className="w-full py-4 bg-[#004aad] hover:bg-[#1B79EE] text-white text-xs font-mono font-black uppercase tracking-widest transition-colors flex items-center justify-center gap-2 shadow-lg"
                      >
                        <span>Request Shop Drawing & Submittal</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}