"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Factory, HardHat, PenTool, Building2, ArrowRight } from 'lucide-react';

const targetAudiences = [
  {
    id: "01",
    title: "Precast Manufacturers",
    subtitle: "Plant Operations",
    description: "For facilities requiring Specified-Tolerance shop drawings, parametric mold designs, and optimized manufacturing workflows to accelerate plant output.",
    icon: <Factory className="w-10 h-10" />
  },
  {
    id: "02",
    title: "Structural Engineers",
    subtitle: "Technical Partners",
    description: "For engineering firms seeking specialized calculations, structural load logic, and rapid PE-stamped submittals tailored exclusively for precast.",
    icon: <PenTool className="w-10 h-10" />
  },
  {
    id: "03",
    title: "Contractors & Erectors",
    subtitle: "Field Logistics",
    description: "For site teams dependent on flawless erection sequencing, form alignment, and zero-rework installations on the job site.",
    icon: <HardHat className="w-10 h-10" />
  },
  {
    id: "04",
    title: "Architects & Specifiers",
    subtitle: "Design Visionaries",
    description: "For establishments needing early-stage feasibility consulting, structural detailing, and seamless integration into structural engineering submittals.",
    icon: <Building2 className="w-10 h-10" />
  }
];

export default function TargetAudience() {
  return (
    <section className="w-full py-8 md:py-10 bg-[#002f7a] text-white border-t border-white/10 overflow-hidden relative select-none">

      {/* TECHNICAL MATRIX GRID OVERLAY */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1.5px, transparent 1.5px), linear-gradient(to right, #ffffff 0.5px, transparent 0.5px), linear-gradient(to bottom, #ffffff 0.5px, transparent 0.5px)`,
          backgroundSize: '40px 40px, 200px 200px, 200px 200px'
        }}
      />

      <div className="w-full px-10 md:px-20 relative z-10">

        {/* 1. HEADER SECTION */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-blue-200 text-xs font-black tracking-[0.2em] uppercase border-l-2 border-[#006def]">
              Target Demographics & Industry Scope
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-[0.9] uppercase text-white">
              Precisely Who <span className="text-[#006def]">is PEG For?</span>
            </h2>
            <p className="text-white/80 text-sm md:text-base font-medium max-w-2xl leading-relaxed">
              Tailored engineering capabilities built specifically for precast stakeholders across every phase of design, plant production, and field installation.
            </p>
          </div>

          <div className="lg:max-w-md border-l-4 border-[#006def] pl-5 py-1">
            <p className="text-white font-black text-sm md:text-base uppercase tracking-tight leading-snug">
              Individuals or establishments associated with Precast & Concrete for further advancement seamlessly & effectively.
            </p>
          </div>
        </div>

        {/* 2. FOUR-QUADRANT AUDIENCE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {targetAudiences.map((audience, idx) => (
            <motion.div
              key={audience.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white hover:bg-blue-50/90 text-[#002f7a] border border-white/20 hover:border-[#006def] p-5 md:p-6 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* ICON LEFT + HEADER RIGHT */}
                <div className="flex items-start gap-3.5 mb-3.5">
                  <div className="p-3 bg-blue-50 text-[#002f7a] group-hover:bg-[#002f7a] group-hover:text-white transition-colors duration-300 shrink-0 border border-[#002f7a]/15">
                    {React.cloneElement(audience.icon as React.ReactElement<{ className?: string }>, { className: "w-5 h-5" })}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-[9px] font-mono font-bold text-[#006def] uppercase tracking-wider truncate">
                        {audience.subtitle}
                      </span>
                      <span className="text-[10px] font-mono font-bold text-[#002f7a]/60 group-hover:text-[#006def] shrink-0 transition-colors">
                        {audience.id}
                      </span>
                    </div>
                    <h3 className="text-base font-black text-[#002f7a] uppercase tracking-tight group-hover:text-[#006def] transition-colors leading-snug">
                      {audience.title}
                    </h3>
                  </div>
                </div>

                {/* CONTENT */}
                <p className="text-xs text-[#002f7a]/85 font-semibold leading-relaxed">
                  {audience.description}
                </p>
              </div>

              {/* FOOTER ACCENT */}
              <div className="mt-5 pt-3 border-t border-[#002f7a]/10 flex justify-between items-center text-[10px] font-mono font-bold text-[#002f7a]">
                <span>Engineering Focus</span>
                <span className="text-[#006def] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 font-black">
                  Explore <ArrowRight className="w-3 h-3" />
                </span>
              </div>

              {/* Corner Accent */}
              <div className="absolute bottom-2 right-2 w-1.5 h-1.5 border-r border-b border-[#002f7a]/20 group-hover:border-[#006def]" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}