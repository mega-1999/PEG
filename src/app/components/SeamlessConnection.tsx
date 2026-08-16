"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Factory, Waypoints, ArrowRight, ChevronRight } from 'lucide-react';

export default function SeamlessConnection() {
  return (
    <section className="w-full bg-white overflow-hidden relative font-sans">
      
      {/* BACKGROUND ACCENT: Clean, subtle blueprint grid */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{ 
          backgroundImage: `linear-gradient(#004aad 1px, transparent 1px), linear-gradient(90deg, #004aad 1px, transparent 1px)`, 
          backgroundSize: '40px 40px' 
        }}
      />

      <div className="w-full px-10 md:px-20 pt-16 pb-24 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-16 space-y-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 bg-[#004aad]/5 border border-[#004aad]/10 px-6 py-2"
          >
            <Waypoints className="w-4 h-4 text-[#1B79EE] animate-pulse" />
            <p className="font-mono text-[10px] font-black text-[#004aad] uppercase tracking-[0.3em]">
              The PEG Bridge
            </p>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-[#004aad] tracking-tighter leading-[0.9] uppercase"
          >
            One Unique Connection <br />
            For All Your Precast Concrete <br />
            <span className="text-[#1B79EE]">Before & After Pouring.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-xl font-black text-[#004aad]/80 tracking-tight leading-snug max-w-3xl"
          >
            How do we assist from your desk back to your shop seamlessly?
          </motion.p>
          
        </div>

        {/* CONNECTION PIPELINE GRAPHIC */}
        <div className="relative mt-10">
          
          {/* VISUAL CONNECTING ARROW LINE (Desktop Only) */}
          <div className="hidden md:flex absolute top-1/2 left-[25%] right-[25%] -translate-y-1/2 z-0 items-center justify-center pointer-events-none">
            
            {/* Structural Dashed Line */}
            <div className="w-full h-[1px] border-t-2 border-dashed border-[#1B79EE]/40 relative flex items-center justify-center">
              
              {/* Central Directional Arrow */}
              <div className="z-10 flex flex-row">
                <ChevronRight className="w-6 h-6 text-[#1B79EE]" />
                <ChevronRight className="w-6 h-6 text-[#1B79EE]" />
                <ChevronRight className="w-6 h-6 text-[#1B79EE]" />
                <ChevronRight className="w-6 h-6 text-[#1B79EE]" />
                <ChevronRight className="w-6 h-6 text-[#1B79EE]" />
              </div>
 
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 relative z-10">
            
            {/* NODE 1: THE DESK */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group bg-white border-2 border-[#004aad]/10 hover:border-[#1B79EE] hover:bg-[#1B79EE] p-10 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(27,121,238,0.3)] flex flex-col items-center text-center relative z-10"
            >
              <div className="w-24 h-24 rounded-full bg-[#004aad]/5 group-hover:bg-white flex items-center justify-center mb-6 transition-colors duration-500">
                <Monitor className="w-10 h-10 text-[#004aad] group-hover:text-[#1B79EE] transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-black text-[#004aad] group-hover:text-white uppercase tracking-tighter mb-4 transition-colors duration-500">
                From Your Desk
              </h3>
              <p className="text-[#1B79EE] group-hover:text-white font-mono text-[10px] font-black uppercase tracking-[0.2em] mb-6 transition-colors duration-500">
                Phase 01: Before Pouring
              </p>
              <p className="text-[#004aad]/70 group-hover:text-white/90 text-sm font-medium leading-relaxed transition-colors duration-500 max-w-sm">
                Advanced CAD drafting, structural calculations, clash detection, and state-specific DOT submittals engineered to perfection before a single drop of concrete is poured.
              </p>
            </motion.div>

            {/* NODE 2: THE SHOP */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="group bg-white border-2 border-[#004aad]/10 hover:border-[#1B79EE] hover:bg-[#1B79EE] p-10 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(27,121,238,0.3)] flex flex-col items-center text-center relative z-10"
            >
              <div className="w-24 h-24 rounded-full bg-[#004aad]/5 group-hover:bg-white flex items-center justify-center mb-6 transition-colors duration-500">
                <Factory className="w-10 h-10 text-[#004aad] group-hover:text-[#1B79EE] transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-black text-[#004aad] group-hover:text-white uppercase tracking-tighter mb-4 transition-colors duration-500">
                Back To Your Shop
              </h3>
              <p className="text-[#1B79EE] group-hover:text-white font-mono text-[10px] font-black uppercase tracking-[0.2em] mb-6 transition-colors duration-500">
                Phase 02: After Pouring
              </p>
              <p className="text-[#004aad]/70 group-hover:text-white/90 text-sm font-medium leading-relaxed transition-colors duration-500 max-w-sm">
                Parametric formwork fabrication, exact-tolerance 3D component isolation, lifting inserts, and step-by-step erection sequencing deployed directly to the floor.
              </p>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}