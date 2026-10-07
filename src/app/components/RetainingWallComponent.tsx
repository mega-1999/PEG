"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Maximize2, ArrowRight, TreeDeciduous, Factory } from 'lucide-react';
import Link from 'next/link';

const wallSystems = [
  {
    title: "Precast Walls",
    id: "SYS_EVR_01",
    icon: <TreeDeciduous className="w-5 h-5" />,
    description: "Modular living wall systems combining structural soil retention with vertical greenery integration for ecological aesthetics.",
    specs: ["Max Height: 40ft", "Vegetation: 95% Coverage", "Service Life: 100+ Yrs"],
    tag: "ENVIRONMENTAL",
    isFeatured: true
  },
  {
    title: "Tilt-Up Panels",
    id: "SYS_TLT_02",
    icon: <Factory className="w-5 h-5" />,
    description: "On-site cast efficiency designed for rapid vertical deployment. Engineered for massive industrial loads and seismic resilience.",
    specs: ["Thickness: 6\" - 12\"", "Finish: Custom Textures", "Install: Rapid Lift"],
    tag: "INDUSTRIAL",
    isFeatured: false
  }
];

export default function RetainingWallComponent() {
  return (
    <section className="relative w-full bg-[#002f7a] text-white py-8 sm:py-10 md:py-12 lg:py-16 border-t border-white/10 select-none overflow-hidden">
      {/* CAD BLUEPRINT HIGH-TECH BACKGROUND GRID */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 relative z-10 space-y-6">

        {/* HEADER: Technical Alignment */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-3 border-b border-white/10 pb-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white text-xs font-black tracking-[0.2em] uppercase border-l-2 border-[#006def]">
              <Layers className="w-3.5 h-3.5 text-[#006def]" /> Grade Separation & Soil Stabilization
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none">
              Retaining <span className="text-[#006def]">Walls.</span>
            </h2>
          </div>
          <p className="text-blue-200 font-mono text-[10px] sm:text-xs max-w-sm md:text-right uppercase tracking-widest leading-relaxed font-bold">
            High-performance precast solutions for grade separation and structural earth stabilization.
          </p>
        </div>

        {/* TWO-COLUMN ARCHITECTURAL GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {wallSystems.map((wall, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`group relative flex rounded-sm overflow-hidden shadow-xl transition-all duration-300 border ${
                wall.isFeatured
                  ? "bg-[#00183f] text-white border-[#006def]/40 hover:border-[#006def]"
                  : "bg-white text-[#002f7a] border-white/20 hover:border-[#006def]"
              }`}
            >
              {/* TOP ACCENT LINE */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-[#006def] group-hover:w-full transition-all duration-300 z-20" />

              {/* Main Content Area */}
              <div className="flex-1 p-6 md:p-7 relative z-10 space-y-4">
                {/* Header: ID and Icon */}
                <div className="flex justify-between items-start">
                  <div className={`p-2.5 rounded-xs transition-colors duration-300 ${
                    wall.isFeatured
                      ? "bg-white/10 text-[#006def] group-hover:bg-[#006def] group-hover:text-white"
                      : "bg-blue-50 text-[#006def] group-hover:bg-[#002f7a] group-hover:text-white"
                  }`}>
                    {wall.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-xs ${
                      wall.isFeatured
                        ? "bg-[#006def] text-white"
                        : "bg-[#002f7a] text-white"
                    }`}>
                      {wall.tag}
                    </span>
                    <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-xs border ${
                      wall.isFeatured
                        ? "bg-white/10 text-white border-white/20"
                        : "bg-white text-[#006def] border-[#006def]/30"
                    }`}>
                      {wall.id}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className={`text-xl sm:text-2xl font-black uppercase tracking-tight group-hover:text-[#006def] transition-colors ${
                    wall.isFeatured ? "text-white" : "text-[#002f7a]"
                  }`}>
                    {wall.title}
                  </h3>
                  <p className={`text-xs sm:text-sm leading-relaxed font-semibold mt-1.5 ${
                    wall.isFeatured ? "text-white/85" : "text-[#002f7a]/85"
                  }`}>
                    {wall.description}
                  </p>
                </div>

                {/* Technical Spec Grid */}
                <div className={`grid grid-cols-3 gap-2.5 border-t pt-4 ${
                  wall.isFeatured ? "border-white/10" : "border-[#002f7a]/10"
                }`}>
                  {wall.specs.map((spec, i) => (
                    <div key={i} className={`p-2 border rounded-xs space-y-0.5 ${
                      wall.isFeatured
                        ? "bg-white/5 border-white/15"
                        : "bg-blue-50/70 border-[#006def]/20"
                    }`}>
                      <p className="text-[9px] font-mono font-bold text-[#006def] uppercase tracking-wider truncate">
                        {spec.split(":")[0]}
                      </p>
                      <p className={`text-[11px] font-mono font-black truncate ${
                        wall.isFeatured ? "text-white" : "text-[#002f7a]"
                      }`}>
                        {spec.split(":")[1]}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Footer Action */}
                <div className="pt-1">
                  <Link
                    href="#contact"
                    className={`inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                      wall.isFeatured
                        ? "text-[#006def] group-hover:text-white group-hover:gap-3"
                        : "text-[#006def] group-hover:text-[#002f7a] group-hover:gap-3"
                    }`}
                  >
                    <span>Request Engineering Submittal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Engineering Corner Decoration */}
              <div className="absolute top-0 right-0 p-4 opacity-[0.04] group-hover:opacity-10 transition-opacity pointer-events-none">
                <Maximize2 className={`w-20 h-20 ${wall.isFeatured ? "text-white" : "text-[#002f7a]"}`} />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}