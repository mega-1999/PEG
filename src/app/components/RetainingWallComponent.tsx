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
    tag: "ENVIRONMENTAL"
  },
  {
    title: "Tilt-Up Panels",
    id: "SYS_TLT_02",
    icon: <Factory className="w-5 h-5" />,
    description: "On-site cast efficiency designed for rapid vertical deployment. Engineered for massive industrial loads and seismic resilience.",
    specs: ["Thickness: 6\" - 12\"", "Finish: Custom Textures", "Install: Rapid Lift"],
    tag: "INDUSTRIAL"
  }
];

export default function RetainingWallComponent() {
  return (
    <section className="relative w-full bg-white text-[#002f7a] py-8 md:py-10 px-10 md:px-20 border-t border-[#002f7a]/10 select-none overflow-hidden">
      {/* CAD BLUEPRINT HIGH-TECH BACKGROUND GRID */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #002f7a 1px, transparent 1px), linear-gradient(to bottom, #002f7a 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="w-full relative z-10 space-y-6">

        {/* HEADER: Technical Alignment */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-3 border-b border-[#002f7a]/10 pb-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-[#006def] text-xs font-black tracking-[0.2em] uppercase border-l-2 border-[#006def]">
              <Layers className="w-3.5 h-3.5 text-[#006def]" /> Grade Separation & Soil Stabilization
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#002f7a] tracking-tighter uppercase leading-none">
              Retaining <span className="text-[#006def]">Walls.</span>
            </h2>
          </div>
          <p className="text-[#006def] font-mono text-[10px] sm:text-xs max-w-sm md:text-right uppercase tracking-widest leading-relaxed font-bold">
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
              className="group relative flex bg-white border border-[#002f7a]/15 rounded-sm overflow-hidden shadow-xs hover:border-[#006def] hover:shadow-xl transition-all duration-300"
            >
              {/* TOP ACCENT LINE */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-[#006def] group-hover:w-full transition-all duration-300 z-20" />

              {/* Main Content Area */}
              <div className="flex-1 p-6 md:p-7 relative z-10 space-y-4">
                {/* Header: ID and Icon */}
                <div className="flex justify-between items-start">
                  <div className="p-2.5 bg-blue-50 text-[#006def] group-hover:bg-[#002f7a] group-hover:text-white transition-colors duration-300 rounded-xs">
                    {wall.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold text-[#002f7a] uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded-xs">
                      {wall.tag}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-[#006def] bg-white px-2.5 py-1 border border-[#006def]/30 rounded-xs">
                      {wall.id}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#002f7a] uppercase tracking-tight group-hover:text-[#006def] transition-colors">
                    {wall.title}
                  </h3>
                  <p className="text-[#002f7a]/85 text-xs sm:text-sm leading-relaxed font-semibold mt-1.5">
                    {wall.description}
                  </p>
                </div>

                {/* Technical Spec Grid */}
                <div className="grid grid-cols-3 gap-2.5 border-t border-[#002f7a]/10 pt-4">
                  {wall.specs.map((spec, i) => (
                    <div key={i} className="bg-blue-50/70 p-2 border border-[#006def]/20 rounded-xs space-y-0.5">
                      <p className="text-[9px] font-mono font-bold text-[#006def] uppercase tracking-wider truncate">
                        {spec.split(":")[0]}
                      </p>
                      <p className="text-[11px] font-mono font-black text-[#002f7a] truncate">
                        {spec.split(":")[1]}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Footer Action */}
                <div className="pt-1">
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#006def] group-hover:text-[#002f7a] group-hover:gap-3 transition-all duration-300 cursor-pointer"
                  >
                    <span>Request Engineering Submittal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Engineering Corner Decoration */}
              <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-10 transition-opacity pointer-events-none">
                <Maximize2 className="w-20 h-20 text-[#002f7a]" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}