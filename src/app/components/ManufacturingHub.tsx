"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Building2,
  Columns3,
  Flame,
  Component,
  Settings2,
  ArrowUpRight,
  Factory
} from "lucide-react";

// 1. DEFINE STRICT TYPESCRIPT INTERFACES
interface MfgItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  metric: string;
  tag: string;
}

const manufacturingSectors: MfgItem[] = [
  {
    id: "CELL_01",
    title: "Master Mold Fabrication",
    subtitle: "Tooling & Forms",
    description: "Close-tolerance master molds and heavy steel formwork optimized for high-frequency casting cycles.",
    icon: <Layers className="w-5 h-5" />,
    metric: "±1mm Tolerance",
    tag: "TOOLING"
  },
  {
    id: "CELL_02",
    title: "Municipal Castings",
    subtitle: "Subsurface Access",
    description: "Heavy-duty gray iron and structural steel castings designed to meet AASHTO H-20 wheel loading.",
    icon: <Building2 className="w-5 h-5" />,
    metric: "H-20 / HS-20",
    tag: "CIVIL"
  },
  {
    id: "CELL_03",
    title: "Trench Containment",
    subtitle: "Fluid & Cable Runs",
    description: "Mass-production modular high-capacity trenches with interlocking joints and custom integrated racking.",
    icon: <Columns3 className="w-5 h-5" />,
    metric: "High-Velocity",
    tag: "FLUID"
  },
  {
    id: "CELL_04",
    title: "Industrial Forgings",
    subtitle: "High-Tensile Parts",
    description: "Precision-forged steel anchorages, connection plates, and structural inserts for structural permanence.",
    icon: <Flame className="w-5 h-5" />,
    metric: "Grade 60+ Steel",
    tag: "METALLURGY"
  },
  {
    id: "CELL_05",
    title: "Modular Precast Parts",
    subtitle: "Systemized Units",
    description: "Standardized, high-early-strength plant-produced precast segments ready for rapid logistics routing.",
    icon: <Component className="w-5 h-5" />,
    metric: "Self-Consolidating",
    tag: "DEPLOY"
  }
];

export default function ManufacturingHub() {
  return (
    <section className="w-full bg-white text-[#002f7a] py-2 sm:py-4 md:py-6 overflow-hidden relative select-none border-t border-[#002f7a]/10">

      {/* TECH BACKGROUND MATRIX */}
      <div
        className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #002f7a 1px, transparent 1px), linear-gradient(to bottom, #002f7a 1px, transparent 1px)`,
          backgroundSize: "50px 50px"
        }}
      />

      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 relative z-10 space-y-6">

        {/* LINE SYSTEM HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-[#002f7a]/10 pb-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-[#006def] text-xs font-black tracking-[0.2em] uppercase border-l-2 border-[#006def]">
              <Factory className="w-3.5 h-3.5 text-[#006def]" /> Fabrication & Casting Complexes
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-[#002f7a] tracking-tighter leading-none uppercase">
              Heavy Industrial <span className="text-[#006def]">Production Line.</span>
            </h2>
            <p className="text-[#002f7a] font-semibold text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl">
              Monitored plant operations processing high-performance material infrastructure to exact specification matrixes.
            </p>
          </div>
        </div>

        {/* 5-COLUMN ASSEMBLY LINE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3.5 md:gap-4 items-stretch">
          {manufacturingSectors.map((cell, idx) => (
            <motion.div
              key={cell.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
              className="group relative bg-white hover:bg-slate-50 text-[#002f7a] border border-[#002f7a]/15 hover:border-[#006def] p-4 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl rounded-sm overflow-hidden cursor-pointer"
            >
              {/* TOP ACCENT LINE */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-[#006def] group-hover:w-full transition-all duration-300" />

              <div>
                {/* ICON LEFT + TITLE & SUBTITLE RIGHT */}
                <div className="flex items-start gap-2.5 mb-3">
                  <div className="p-2 bg-blue-50 text-[#006def] group-hover:bg-[#002f7a] group-hover:text-white transition-colors duration-300 shrink-0 border border-[#006def]/20 rounded-sm mt-0.5">
                    {cell.icon}
                  </div>

                  <div className="flex-1 min-w-0">
                    <span className="text-[9px] font-mono font-bold text-[#006def] uppercase tracking-wider block truncate">
                      {cell.subtitle}
                    </span>
                    <h3 className="text-xs sm:text-[13px] font-black uppercase tracking-tight text-[#002f7a] group-hover:text-[#006def] transition-colors leading-tight break-words">
                      {cell.title}
                    </h3>
                  </div>
                </div>

                {/* DESCRIPTION */}
                <p className="text-xs text-[#002f7a]/85 font-medium leading-relaxed">
                  {cell.description}
                </p>
              </div>

              {/* BOTTOM TELEMETRY METRICS */}
              <div className="mt-4 pt-3 border-t border-[#002f7a]/10 flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-[#002f7a] uppercase tracking-wider">
                  {cell.metric}
                </span>
                <span className="font-mono text-[8px] font-bold text-[#006def] uppercase tracking-widest bg-blue-50 px-1.5 py-0.5 border border-[#006def]/20">
                  {cell.tag}
                </span>
              </div>

              {/* CORNER NUMBER WATERMARK */}
              <div className="absolute bottom-1 right-2 font-mono text-[24px] font-black text-[#002f7a] opacity-[0.03] pointer-events-none select-none group-hover:opacity-[0.06] transition-opacity">
                0{idx + 1}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}