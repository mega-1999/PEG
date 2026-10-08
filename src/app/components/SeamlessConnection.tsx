"use client";

import React from "react";
import { motion } from "framer-motion";
import { Monitor, Factory, Waypoints, Smartphone, CheckCircle2, Wifi, Zap } from "lucide-react";
import { getAssetUrl } from "@/lib/utils";
import LazyVideo from "./LazyVideo";

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
            One Seamless Connection <br />
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
            Real-time synchronization connecting structural engineering calculations on your desk with shop floor casting beds and mobile field superintendents.
          </motion.p>
        </div>

        {/* 3-NODE WORKFLOW: DESK (LEFT) -> MOBILE COMPANION (CENTER) -> SHOP FLOOR (RIGHT) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center max-w-6xl mx-auto">

          {/* NODE 1: THE DESK (4 COLS) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="lg:col-span-4 group bg-white hover:bg-slate-50 text-[#002f7a] border border-white/20 p-5 md:p-6 transition-all duration-300 shadow-xl flex flex-col justify-between rounded-sm relative"
          >
            <div className="absolute top-0 left-0 w-0 h-1 bg-[#006def] group-hover:w-full transition-all duration-300" />
            
            <div>
              <div className="w-12 h-12 bg-blue-50 border border-[#006def]/20 flex items-center justify-center mb-3 rounded-sm">
                <Monitor className="w-6 h-6 text-[#006def]" />
              </div>

              <span className="text-[9.5px] font-mono font-black text-[#006def] uppercase tracking-[0.2em] block mb-1">
                Phase 01: Before Pouring
              </span>

              <h3 className="text-lg md:text-xl font-black text-[#002f7a] uppercase tracking-tight mb-2">
                From Your Desk
              </h3>

              <p className="text-[#002f7a]/85 text-xs font-semibold leading-relaxed">
                Advanced CAD drafting, structural calculations, clash detection, and state-specific DOT submittals engineered to perfection before concrete is poured.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-[#002f7a]/10 text-[10px] font-mono font-bold text-[#006def]">
              ✓ Full 3D LOD 400 CAD
            </div>
          </motion.div>

          {/* NODE 2: STRATEGIC STANDALONE MOBILE COMPANION MOCKUP (4 COLS) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="lg:col-span-4 flex flex-col items-center bg-white text-[#002f7a] border border-white/20 p-5 md:p-6 rounded-sm shadow-xl relative overflow-hidden group"
          >
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 w-0 h-1 bg-[#006def] group-hover:w-full transition-all duration-300" />

            {/* Top Pill */}
            <div className="flex items-center justify-between w-full pb-2 mb-3 border-b border-[#002f7a]/10 font-mono text-[9.5px] font-bold text-[#002f7a]">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#006def] animate-pulse" />
                <span className="text-[#006def] uppercase font-black">MOBILE COMPANION</span>
              </div>
              <div className="flex items-center gap-1 text-[#006def]">
                <Wifi className="w-3 h-3 text-[#006def]" />
                <span className="font-bold">Live Sync</span>
              </div>
            </div>

            {/* Live Mobile Video Viewport */}
            <div className="relative aspect-[9/16] w-48 sm:w-52 max-w-full bg-[#001c4b] rounded-sm overflow-hidden border border-[#002f7a]/20 shadow-md flex items-center justify-center p-1">
              <LazyVideo
                src={getAssetUrl("https://pub-506b16bcde4f4fa8849e4eb8030acc3b.r2.dev/assets/video/Mockup/Precast_Engineering_Group_Mobile_Live_Mockup_1.mp4")}
                className="w-full h-full object-contain"
                wrapperClassName="w-full h-full"
                placeholderBg="bg-[#001c4b]"
              />
            </div>

            <div className="mt-3 text-center space-y-0.5">
              <div className="flex items-center justify-center gap-1 text-xs font-mono font-bold text-[#002f7a]">
                <Smartphone className="w-3.5 h-3.5 text-[#006def]" />
                <span className="uppercase">Field Dispatch & Inspection</span>
              </div>
              <p className="text-[11px] text-[#002f7a]/80 font-semibold">
                Instant Submittal Verification on Jobsite
              </p>
            </div>
          </motion.div>

          {/* NODE 3: THE SHOP FLOOR (4 COLS) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="lg:col-span-4 group bg-white hover:bg-slate-50 text-[#002f7a] border border-white/20 p-5 md:p-6 transition-all duration-300 shadow-xl flex flex-col justify-between rounded-sm relative"
          >
            <div className="absolute top-0 left-0 w-0 h-1 bg-[#006def] group-hover:w-full transition-all duration-300" />
            
            <div>
              <div className="w-12 h-12 bg-blue-50 border border-[#006def]/20 flex items-center justify-center mb-3 rounded-sm">
                <Factory className="w-6 h-6 text-[#006def]" />
              </div>

              <span className="text-[9.5px] font-mono font-black text-[#006def] uppercase tracking-[0.2em] block mb-1">
                Phase 02: After Pouring
              </span>

              <h3 className="text-lg md:text-xl font-black text-[#002f7a] uppercase tracking-tight mb-2">
                Back To Your Shop
              </h3>

              <p className="text-[#002f7a]/85 text-xs font-semibold leading-relaxed">
                Parametric formwork fabrication, specified-tolerance component isolation, lifting inserts, and step-by-step erection sequencing deployed to the plant floor.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-[#002f7a]/10 text-[10px] font-mono font-bold text-[#006def]">
              ✓ Precision Casting Run Sheets
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}