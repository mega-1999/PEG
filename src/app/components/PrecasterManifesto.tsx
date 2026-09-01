"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Users, LayoutTemplate, Target, ArrowRight } from 'lucide-react';

const manifestoData = [
  {
    id: "01",
    title: "The Who",
    subtitle: "PEG Experts",
    headline: "Exclusively Managed and Executed Only By Precasters.",
    description: "We aren't generic drafters. Our entire global engineering node is staffed by veteran precasters who understand the exact realities of the factory floor and the construction site.",
    icon: <Users className="w-10 h-10" />
  },
  {
    id: "02",
    title: "The What",
    subtitle: "Knowledge & Expertise",
    headline: "Vertical Integration of Structural Precision.",
    description: "From structural submittals and stamped calculations to ultra-precise CAD shop drawings and 3D erection sequences, we engineer the complete precast lifecycle.",
    icon: <LayoutTemplate className="w-10 h-10" />
  },
  {
    id: "03",
    title: "The Why",
    subtitle: "Clearly Why",
    headline: "To Streamlined Agency Approvals.",
    description: "Because generic engineering causes site-level failures. We exist to protect your margins, accelerate your production pipeline, and ensure Code-Aligned Engineering.",
    icon: <Target className="w-10 h-10" />
  }
];

export default function PrecasterManifesto() {
  return (
    <section className="w-full py-4 bg-white overflow-hidden relative">
      
      {/* STANDARDIZED CONTAINER */}
      <div className="w-full px-10 md:px-20  relative z-10">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-4 gap-12  ">
          
          <div className="space-y-2 max-w-4xl">

            
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-black tracking-tighter leading-[0.9] uppercase text-[#004aad]"
            >
              By Precasters. <br />
              <span className="text-[#1B79EE]">For Precasters.</span>
            </motion.h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="hidden lg:block text-right pb-2"
          >
            <p className="text-[#004aad] font-black text-lg uppercase tracking-tighter">
              Why, What & Who?
            </p>
          </motion.div>
        </div>

        {/* 3-COLUMN MANIFESTO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {manifestoData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              viewport={{ once: true }}
              // DEFAULT: PEG Dark Blue -> HOVER: PEG Bright Blue
              className="group relative bg-[#004aad] hover:bg-[#1B79EE] px-12 py-6 transition-all duration-500 cursor-pointer flex flex-col h-full overflow-hidden shadow-[15px_15px_0px_#1B79EE] hover:shadow-[15px_15px_0px_#004aad]"
            >
              
              {/* LARGE BACKGROUND WATERMARK */}
              <div className="absolute -top-10 -right-10 font-black text-[150px] leading-none text-white opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none select-none">
                {item.id}
              </div>

              {/* TOP HEADER: Icon & Label */}
              <div className="flex justify-between items-start mb-4 relative z-10">
                <div className="text-white">
                  {item.icon}
                </div>
                <div className="bg-white px-4 py-1">
                  <span className="text-[#004aad] group-hover:text-[#1B79EE] font-black text-[10px] uppercase tracking-widest transition-colors duration-500">
                    {item.title}
                  </span>
                </div>
              </div>

              {/* CONTENT AREA */}
              <div className="relative z-10 flex-grow">
                <p className="text-white/70 group-hover:text-white font-black text-[11px] uppercase tracking-[0.2em] mb-4 transition-colors duration-500">
                  {item.subtitle}
                </p>
                <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter leading-tight mb-6">
                  {item.headline}
                </h3>
                <p className="text-white/80 group-hover:text-white text-sm leading-relaxed font-medium transition-colors duration-500">
                  {item.description}
                </p>
              </div>

              {/* ACTION FOOTER */}
              <div className="mt-2 pt-4 border-t border-white/20 group-hover:border-white/40 flex justify-between items-center relative z-10 transition-colors duration-500">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">
                  Explore {item.title}
                </span>
                <ArrowRight className="w-6 h-6 text-white transform group-hover:translate-x-2 transition-transform duration-500" />
              </div>
              
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}