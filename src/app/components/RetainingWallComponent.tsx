"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Maximize2, ShieldCheck, ArrowRight, TreeDeciduous, Factory } from 'lucide-react';

const wallSystems = [
  {
    title: "Evergreen Walls",
    id: "SYS_EVR_01",
    icon: <TreeDeciduous className="w-6 h-6" />,
    description: "Modular living wall systems combining structural soil retention with vertical greenery integration for ecological aesthetics.",
    specs: ["Max Height: 40ft", "Vegetation: 95% Coverage", "Service Life: 100+ Yrs"],
    tag: "ENVIRONMENTAL"
  },
  {
    title: "Tilt-Up Panels",
    id: "SYS_TLT_02",
    icon: <Factory className="w-6 h-6" />,
    description: "On-site cast efficiency designed for rapid vertical deployment. Engineered for massive industrial loads and seismic resilience.",
    specs: ["Thickness: 6\" - 12\"", "Finish: Custom Textures", "Install: Rapid Lift"],
    tag: "INDUSTRIAL"
  }
];

export default function RetainingWallComponent() {
  return (
    <section className="w-full bg-slate-50 px-10 md:px-20 overflow-hidden">
      <div className="">
        
        {/* HEADER: Technical Alignment */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-slate-200 pb-12">
          <div className="space-y-2">
            <p className="text-3xl md:text-5xl font-black text-[#004aad] tracking-tighter uppercase">
              Retaining <span style={{ WebkitTextStroke: "1px #1B79EE", color: "transparent" }}>Walls.</span>
            </p>
          </div>
          <p className="text-slate-400 font-mono text-[10px] max-w-[300px] text-right uppercase tracking-widest leading-relaxed">
            High-performance precast solutions for grade separation and structural earth stabilization.
          </p>
        </div>

        {/* TWO-COLUMN ARCHITECTURAL GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {wallSystems.map((wall, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="group relative flex bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-[40px_40px_0px_-20px_rgba(27,121,238,0.05)] transition-all duration-700"
            >
              {/* Vertical Side Label (Brutalist Touch) */}
              <div className="hidden md:flex items-center justify-center w-16 bg-[#004aad] text-white/20 select-none">
                <span className="rotate-[-90deg] font-black text-lg tracking-[0.3em] whitespace-nowrap uppercase">
                  {wall.tag}
                </span>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 p-10 md:p-14 relative">
                {/* Header: ID and Icon */}
                <div className="flex justify-between items-start mb-10">
                  <div className="p-4 bg-slate-50 text-[#1B79EE] group-hover:bg-[#1B79EE] group-hover:text-white transition-colors duration-500">
                    {wall.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-black text-[#004aad] uppercase tracking-tighter mb-6 group-hover:text-[#1B79EE] transition-colors">
                  {wall.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed mb-10 max-w-md font-medium">
                  {wall.description}
                </p>

                {/* Technical Spec Grid */}
                <div className="grid grid-cols-3 gap-4 border-t border-slate-100 pt-8 mb-8">
                  {wall.specs.map((spec, i) => (
                    <div key={i} className="space-y-1">
                      <div className="h-1 w-4 bg-[#1B79EE]/20 group-hover:w-full transition-all duration-700" />
                      <p className="text-[9px] font-mono font-black text-slate-400 uppercase tracking-tighter">
                        {spec.split(":")[0]}
                      </p>
                      <p className="text-[11px] font-bold text-[#004aad]">
                        {spec.split(":")[1]}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Footer Action */}
                <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-[#1B79EE] group-hover:gap-6 transition-all duration-500">
                  Engineering Data <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Engineering Corner Decoration */}
              <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                <Maximize2 className="w-20 h-20 text-[#004aad]" />
              </div>
            </motion.div>
          ))}
        </div>
 
      </div>
    </section>
  );
}