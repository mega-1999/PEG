"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Building2, Columns3, Flame, Component, Settings2, ArrowUpRight } from 'lucide-react';

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
    subtitle: "Tooling & Custom Forms",
    description: "Engineering close-tolerance master molds and heavy steel formwork optimized for infinite high-frequency casting cycles.",
    icon: <Layers className="w-6 h-6" />,
    metric: "±1mm Tolerance",
    tag: "TOOLING_CORE"
  },
  {
    id: "CELL_02",
    title: "Municipal Castings",
    subtitle: "Subsurface Access Systems",
    description: "Heavy-duty gray iron and structural steel castings designed to meet rigorous AASHTO H-20 wheel loading regulations.",
    icon: <Building2 className="w-6 h-6" />,
    metric: "H-20 / HS-20 Rated",
    tag: "CIVIL_INFRA"
  },
  {
    id: "CELL_03",
    title: "Trench Containment",
    subtitle: "Linear Fluid & Cable runs",
    description: "Mass-production of modular high-capacity linear trenches, complete with interlocking joints and custom integrated racking.",
    icon: <Columns3 className="w-6 h-6" />,
    metric: "High-Velocity Flow",
    tag: "FLUID_MGMT"
  },
  {
    id: "CELL_04",
    title: "Industrial Forgings",
    subtitle: "High-Tensile Components",
    description: "Precision-forged steel anchorages, connection plates, and high-stress structural inserts engineered for structural permanence.",
    icon: <Flame className="w-6 h-6" />,
    metric: "Grade 60+ Steel",
    tag: "METALLURGY"
  },
  {
    id: "CELL_05",
    title: "Modular Precast Parts",
    subtitle: "Systemized Components",
    description: "Standardized, high-early-strength plant-produced precast segments ready for rapid just-in-time logistics routing.",
    icon: <Component className="w-6 h-6" />,
    metric: "Self-Consolidating",
    tag: "READY_DEPLOY"
  }
];

export default function ManufacturingHub() {
  return (
    <section className="w-full bg-white py-32 px-10 md:px-20 overflow-hidden relative">
      
      {/* TECH BACKGROUND MATRIX */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none"
        style={{ 
          backgroundImage: `linear-gradient(to right, #023380 1px, transparent 1px), linear-gradient(to bottom, #023380 1px, transparent 1px)`,
          backgroundSize: '50px 50px' 
        }}
      />

      <div className="relative z-10">
        
        {/* LINE SYSTEM HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b-2 border-slate-100 pb-12 gap-8">
          <div className="space-y-4 max-w-4xl">
            <div className="flex items-center gap-3 text-[#0271f1] font-mono text-[10px] font-black uppercase tracking-[0.5em]">
              <Settings2 className="w-4 h-4 animate-spin-slow" /> Fabrication & Casting Complexes
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#023380] tracking-tighter leading-[0.9] uppercase">
              HEAVY INDUSTRIAL <br />
              <span style={{ WebkitTextStroke: "1px #0271f1", color: "transparent" }}>PRODUCTION LINE.</span>
            </h2>
          </div>
          <div className="hidden xl:block text-right">
            <p className="text-[#0271f1] font-mono text-[9px] uppercase tracking-widest leading-relaxed max-w-xs">
              Monitored plant operations processing high-performance material infrastructure to exact specification matrixes.
            </p>
          </div>
        </div>

        {/* 5-COLUMN ASSEMBLY LINE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6 items-stretch">
          {manufacturingSectors.map((cell, idx) => (
            <motion.div
              key={cell.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-white border border-[#023380]/15 p-7 flex flex-col justify-between h-[480px] hover:border-[#0271f1] hover:shadow-lg transition-all duration-300"
            >
              {/* TOP READOUT */}
              <div>
                <div className="flex justify-between items-center mb-8">
                  <span className="font-mono text-[10px] font-black text-[#0271f1] bg-blue-50 px-2 py-0.5 border border-[#0271f1]/20">
                    {cell.id}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                </div>

                <div className="mb-5 text-[#023380] group-hover:text-[#0271f1] transition-colors duration-300">
                  {cell.icon}
                </div>

                <p className="text-[#0271f1] font-mono text-[9px] uppercase tracking-widest font-black mb-1.5">
                  {cell.subtitle}
                </p>
                <h3 className="text-lg font-black text-[#023380] uppercase tracking-tighter leading-tight mb-3">
                  {cell.title}
                </h3>
                <p className="text-[#023380] text-xs font-semibold leading-relaxed">
                  {cell.description}
                </p>
              </div>

              {/* BOTTOM TELEMETRY METRICS */}
              <div className="mt-auto">
                <div className="border-t border-[#023380]/10 pt-4 mb-2 flex flex-col gap-1">
                  <span className="text-xs font-black text-[#023380] uppercase tracking-tight">{cell.metric}</span>
                </div>

                <div className="flex justify-between items-center pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-mono text-[8px] font-bold text-[#0271f1] uppercase tracking-widest">{cell.tag}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#0271f1]" />
                </div>
              </div>

              {/* TOP CONNECTIVITY BAR (Simulates an unbroken pipeline track across columns) */}
              <div className="absolute top-0 left-0 w-0 h-[3px] bg-[#0271f1] group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
 

      </div>
    </section>
  );
}