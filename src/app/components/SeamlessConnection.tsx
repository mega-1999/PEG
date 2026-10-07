"use client";

import React from "react";
import { motion } from "framer-motion";
import { Monitor, Factory, Waypoints, ChevronRight } from "lucide-react";

export default function SeamlessConnection() {
  return (
    <section className="w-full bg-[#002f7a] text-white py-2 sm:py-4 md:py-6 overflow-hidden relative font-sans select-none border-t border-white/10">

      {/* BACKGROUND ACCENT: Clean, subtle blueprint grid */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:50px_50px]"
      />

      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 relative z-10 space-y-6 md:space-y-8">

        {/* HEADER SECTION */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white text-xs font-black tracking-[0.2em] uppercase border-l-2 border-[#006def]"
          >
            <Waypoints className="w-3.5 h-3.5 text-[#006def] animate-pulse" />
            <span>The PEG Workflow Bridge</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-5xl font-black text-white tracking-tighter leading-none uppercase"
          >
            One Unique Connection <br />
            For All Your Precast Concrete <br />
            <span className="text-[#006def]">Before & After Pouring.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/80 font-semibold text-sm md:text-base leading-relaxed max-w-2xl"
          >
            How do we assist from your desk back to your shop floor seamlessly?
          </motion.p>
        </div>

        {/* CONNECTION PIPELINE GRAPHIC */}
        <div className="relative mt-4">

          {/* VISUAL CONNECTING ARROW LINE (Desktop Only) */}
          <div className="hidden md:flex absolute top-1/2 left-[30%] right-[30%] -translate-y-1/2 z-0 items-center justify-center pointer-events-none">
            {/* Structural Dashed Line */}
            <div className="w-full h-[1px] border-t-2 border-dashed border-[#006def]/60 relative flex items-center justify-center">
              {/* Central Directional Arrows */}
              <div className="z-10 flex flex-row bg-[#002f7a] px-3 py-1 border border-white/20 rounded-full">
                <ChevronRight className="w-4 h-4 text-[#006def] animate-pulse" />
                <ChevronRight className="w-4 h-4 text-[#006def] animate-pulse delay-75" />
                <ChevronRight className="w-4 h-4 text-white animate-pulse delay-150" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 relative z-10 max-w-5xl mx-auto">

            {/* NODE 1: THE DESK */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4 }}
              whileHover={{ y: -4 }}
              className="group bg-white hover:bg-blue-50/90 text-[#002f7a] border border-white/20 hover:border-[#006def] p-6 md:p-8 transition-all duration-300 shadow-xl flex flex-col items-center text-center relative rounded-sm cursor-pointer"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-[#006def] group-hover:w-full transition-all duration-300" />

              <div className="w-16 h-16 bg-blue-50 border border-[#006def]/20 group-hover:bg-[#002f7a] flex items-center justify-center mb-4 transition-colors duration-300 shrink-0 rounded-sm">
                <Monitor className="w-8 h-8 text-[#006def] group-hover:text-white transition-colors duration-300" />
              </div>

              <span className="text-[10px] font-mono font-black text-[#006def] uppercase tracking-[0.2em] mb-1">
                Phase 01: Before Pouring
              </span>

              <h3 className="text-xl md:text-2xl font-black text-[#002f7a] uppercase tracking-tight mb-3">
                From Your Desk
              </h3>

              <p className="text-[#002f7a]/85 text-xs sm:text-sm font-semibold leading-relaxed max-w-md">
                Advanced CAD drafting, structural calculations, clash detection, and state-specific DOT submittals engineered to perfection before a single drop of concrete is poured.
              </p>
            </motion.div>

            {/* NODE 2: THE SHOP */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.4 }}
              whileHover={{ y: -4 }}
              className="group bg-white hover:bg-blue-50/90 text-[#002f7a] border border-white/20 hover:border-[#006def] p-6 md:p-8 transition-all duration-300 shadow-xl flex flex-col items-center text-center relative rounded-sm cursor-pointer"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-[#006def] group-hover:w-full transition-all duration-300" />

              <div className="w-16 h-16 bg-blue-50 border border-[#006def]/20 group-hover:bg-[#002f7a] flex items-center justify-center mb-4 transition-colors duration-300 shrink-0 rounded-sm">
                <Factory className="w-8 h-8 text-[#006def] group-hover:text-white transition-colors duration-300" />
              </div>

              <span className="text-[10px] font-mono font-black text-[#006def] uppercase tracking-[0.2em] mb-1">
                Phase 02: After Pouring
              </span>

              <h3 className="text-xl md:text-2xl font-black text-[#002f7a] uppercase tracking-tight mb-3">
                Back To Your Shop
              </h3>

              <p className="text-[#002f7a]/85 text-xs sm:text-sm font-semibold leading-relaxed max-w-md">
                Parametric formwork fabrication, specified-tolerance component isolation, lifting inserts, and step-by-step erection sequencing deployed directly to the plant floor.
              </p>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}