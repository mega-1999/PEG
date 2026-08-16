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
    description: "For site teams dependent on flawless 3D erection sequencing, clash detection, and zero-rework installations on the job site.",
    icon: <HardHat className="w-10 h-10" />
  },
  {
    id: "04",
    title: "Architects & Specifiers",
    subtitle: "Design Visionaries",
    description: "For establishments needing early-stage feasibility consulting, structural detailing, and seamless integration into master BIM models.",
    icon: <Building2 className="w-10 h-10" />
  }
];

export default function TargetAudience() {
  return (
    <section className="w-full bg-white overflow-hidden relative">
      
      {/* BACKGROUND ACCENTS */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#004aad]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#1B79EE]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full px-10 md:px-20 py-4 relative z-10">
        
        {/* 1. HEADER SECTION (Using your exact phrasing) */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-8 gap-12">
          
          <div className="space-y-6 max-w-4xl">
 
            
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-black tracking-tighter leading-[0.9] uppercase text-[#004aad]"
            >
              Precisely who <br className="hidden md:block" />
              <span className="text-[#1B79EE]">is PEG for?</span>
            </motion.h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:max-w-md border-l-4 border-[#1B79EE] pl-6"
          >
            <p className="text-[#004aad] font-black text-xl md:text-lg uppercase tracking-tight leading-snug">
              Individuals or establishments associated with Precast & Concrete for further advancement seamlessly & effectively.
            </p>
          </motion.div>
        </div>

        {/* 2. FOUR-QUADRANT AUDIENCE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {targetAudiences.map((audience, idx) => (
            <motion.div
              key={audience.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              // CARD HOVER STATE: Default Dark Blue -> Hovers to Bright Blue
              className="group relative bg-[#004aad] hover:bg-[#1B79EE] px-10 py-6 transition-all duration-500 cursor-pointer flex flex-col h-[380px] overflow-hidden shadow-lg shadow-[#004aad]/10 hover:shadow-[0_20px_50px_rgba(27,121,238,0.4)]"
            >
              
              {/* LARGE BACKGROUND NUMBER */}
              <div className="absolute -top-6 -right-6 font-black text-[120px] text-white opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none select-none">
                {audience.id}
              </div>

              {/* TOP HEADER: Icon & Label */}
              <div className="mb-12 relative z-10">
                <div className="text-white mb-6 transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500">
                  {audience.icon}
                </div>
                <p className="text-[#1B79EE] bg-white inline-block px-3 py-1 font-black text-[10px] uppercase tracking-widest transition-colors duration-500">
                  {audience.subtitle}
                </p>
              </div>

              {/* CONTENT AREA */}
              <div className="relative z-10 flex-grow">
                <h3 className="text-xl font-black text-white uppercase tracking-tighter leading-none mb-4">
                  {audience.title}
                </h3>
                <p className="text-white/70 group-hover:text-white/90 text-sm leading-relaxed font-medium transition-colors duration-500">
                  {audience.description}
                </p>
              </div>
              
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}