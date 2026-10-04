"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Layers, ShieldCheck, Factory, ArrowRight } from 'lucide-react';

const techPillars = [
  {
    id: "01",
    title: "Parametric Mold Precision",
    category: "Engineering & CAD",
    description: "We eliminate field errors before concrete is ever poured. Our Specified-Tolerance shop drawings and custom mold isolation ensure flawless geometry and formwork accuracy across every module.",
    icon: <Layers className="w-8 h-8" />
  },
  {
    id: "02",
    title: "Automated Code Compliance",
    category: "Specs & Compliance",
    description: "Algorithmic alignment with the latest PCI, AASHTO, ASTM, and state DOT master specifications. We engineer structural submittals designed for zero-friction, Approval-Ready Documentation.",
    icon: <ShieldCheck className="w-8 h-8" />
  },
  {
    id: "03",
    title: "Algorithmic Manufacturing",
    category: "IT & Automation",
    description: "Powered by proprietary ERP and Digital Process Optimization. We bridge the gap between complex digital modeling and automated factory-floor robotics, maximizing structural output.",
    icon: <Cpu className="w-8 h-8" />
  },
  {
    id: "04",
    title: "Vertical Integration",
    category: "Products & Solutions",
    description: "The ultimate convergence of engineering intellect and manufacturing speed. From custom mold design to final erection sequencing, technology drives every phase of the PEG lifecycle.",
    icon: <Factory className="w-8 h-8" />
  }
];

export default function AdvancedEngineeringTech() {
  return (
    <section className="w-full py-16 md:py-20 bg-[#002f7a] text-white overflow-hidden relative border-b border-white/10">

      {/* Background Accent Lines */}
      <div className="absolute top-0 left-10 md:left-20 w-px h-full bg-white/5 pointer-events-none" />
      <div className="absolute top-0 right-10 md:right-20 w-px h-full bg-white/5 pointer-events-none" />

      <div className="w-full px-10 md:px-20 relative z-10">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-10">
          <div className="space-y-4 max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-black tracking-tighter leading-[0.9] uppercase text-white"
            >
              Advanced Engineering <br />
              <span className="text-[#006def]">& Technologies.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="hidden lg:block text-right max-w-sm"
          >
            <p className="text-white/80 font-medium text-sm leading-relaxed">
              What is important to us? Utilizing next-generation technology to protect your margins, accelerate production, and ensure High-Precision Engineering.
            </p>
          </motion.div>
        </div>

        {/* STACKED HORIZONTAL GRID */}
        <div className="border-t-4 border-[#006def]">
          {techPillars.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col md:flex-row items-start md:items-center border-b border-white/15 hover:bg-[#006def] transition-all duration-300 cursor-pointer p-6 md:px-8 md:py-6 gap-8 relative overflow-hidden"
            >

              {/* LARGE WATERMARK */}
              <div className="absolute top-1/2 -translate-y-1/2 right-10 text-[180px] font-black text-white opacity-[0.03] group-hover:opacity-[0.1] transition-all duration-500 pointer-events-none select-none">
                {pillar.id}
              </div>

              {/* NUMBER & ICON */}
              <div className="flex items-center gap-8 shrink-0 relative z-10">
                <span className="text-2xl md:text-3xl font-black text-[#006def] group-hover:text-white transition-colors duration-300">
                  {pillar.id}
                </span>
                <div className="p-4 bg-white/10 group-hover:bg-white text-white group-hover:text-[#002f7a] transition-colors duration-300">
                  {pillar.icon}
                </div>
              </div>

              {/* TEXT CONTENT */}
              <div className="flex-1 relative z-10">
                <p className="text-[#006def] group-hover:text-white font-mono text-[10px] font-black uppercase tracking-[0.2em] mb-2 transition-colors duration-300">
                  {pillar.category}
                </p>
                <h3 className="text-lg md:text-2xl font-black text-white uppercase tracking-tighter mb-3 transition-colors duration-300">
                  {pillar.title}
                </h3>
                <p className="text-white/85 group-hover:text-white text-sm leading-relaxed font-medium max-w-3xl transition-colors duration-300">
                  {pillar.description}
                </p>
              </div>

              {/* ARROW ACTION */}
              <div className="hidden md:flex items-center justify-center shrink-0 w-14 h-14 border-2 border-white/20 group-hover:border-white text-white/60 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                <ArrowRight className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" />
              </div>

              {/* Mobile Arrow Action */}
              <div className="md:hidden flex items-center gap-4 mt-2 text-[#006def] font-black text-xs uppercase tracking-widest group-hover:text-white">
                Explore Technology <ArrowRight className="w-4 h-4" />
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}