"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Maximize2, ShieldCheck, ArrowRight, TreeDeciduous, Factory } from 'lucide-react';

const wallSystems = [
  {
    title: "Precast Walls",
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
    <section className="w-full bg-white py-16 px-10 md:px-20 overflow-hidden">
      <div className="">
        
        {/* HEADER: Technical Alignment */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6 border-b border-[#004aad]/10 pb-8">
          <div className="space-y-2">
            <p className="text-3xl md:text-5xl font-black text-[#004aad] tracking-tighter uppercase">
              Retaining <span style={{ WebkitTextStroke: "1px #1B79EE", color: "transparent" }}>Walls.</span>
            </p>
          </div>
          <p className="text-[#1B79EE] font-mono text-[10px] max-w-[300px] text-right uppercase tracking-widest leading-relaxed font-bold">
            High-performance precast solutions for grade separation and structural earth stabilization.
          </p>
        </div>

        {/* TWO-COLUMN ARCHITECTURAL GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {wallSystems.map((wall, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="group relative flex bg-white border border-[#004aad]/15 overflow-hidden shadow-xs hover:border-[#1B79EE] hover:shadow-lg transition-all duration-300"
            >
              {/* Main Content Area */}
              <div className="flex-1 p-8 md:p-10 relative">
                {/* Header: ID and Icon */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3.5 bg-blue-50 text-[#1B79EE] group-hover:bg-[#004aad] group-hover:text-white transition-colors duration-300">
                    {wall.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold text-[#004aad] uppercase tracking-wider bg-blue-50 px-2.5 py-1">
                      {wall.tag}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-[#1B79EE] bg-white px-2.5 py-1 border border-[#1B79EE]/30">
                      {wall.id}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-black text-[#004aad] uppercase tracking-tighter mb-4 group-hover:text-[#1B79EE] transition-colors">
                  {wall.title}
                </h3>

                <p className="text-[#004aad] text-sm leading-relaxed mb-8 font-semibold">
                  {wall.description}
                </p>

                {/* Technical Spec Grid */}
                <div className="grid grid-cols-3 gap-4 border-t border-[#004aad]/10 pt-6 mb-6">
                  {wall.specs.map((spec, i) => (
                    <div key={i} className="space-y-1">
                      <div className="h-0.5 w-4 bg-[#1B79EE] group-hover:w-full transition-all duration-300" />
                      <p className="text-[9px] font-mono font-black text-[#1B79EE] uppercase tracking-tighter">
                        {spec.split(":")[0]}
                      </p>
                      <p className="text-[11px] font-black text-[#004aad]">
                        {spec.split(":")[1]}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Footer Action */}
                <button className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1B79EE] group-hover:gap-4 transition-all duration-300 cursor-pointer">
                  <span>Engineering Data</span>
                  <ArrowRight className="w-4 h-4" />
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