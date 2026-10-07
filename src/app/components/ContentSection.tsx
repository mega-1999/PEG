"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Database, Workflow, Unlock, ArrowRight, Activity, Clock } from 'lucide-react';

export const ContentSection = () => {
  return (
    <section className="w-full bg-[#f8fafc] py-2 sm:py-4 md:py-6 border-t border-[#002f7a]/10 relative overflow-hidden select-none">

      {/* CAD BLUEPRINT HIGH-TECH BACKGROUND GRID */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #002f7a 1px, transparent 1px), linear-gradient(to bottom, #002f7a 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 relative z-10 space-y-6">

        {/* HEADER SECTION */}
        <div className="flex flex-col justify-between items-start border-b border-[#002f7a]/10 pb-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-[#006def] text-xs font-black tracking-[0.2em] uppercase border-l-2 border-[#006def]">
              <Activity className="w-3.5 h-3.5 text-[#006def]" /> Fast Engineering Execution
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#002f7a] tracking-tighter uppercase leading-none">
              SOLUTIONS FOR <span className="text-[#006def]">THE CRITICAL PATH.</span>
            </h2>
            <p className="text-[#002f7a]/85 font-semibold text-sm md:text-base max-w-2xl leading-relaxed">
              On-demand structural engineering, rapid submittal turnarounds, and open-access CAD libraries when time is evaporating.
            </p>
          </div>
        </div>

        {/* ASYMMETRIC GRID SYSTEM */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5 items-stretch">

          {/* LEFT COLUMN: The "1 AM Scenario" (5 Columns Wide) */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-[#002f7a] text-white p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group rounded-sm shadow-xs hover:shadow-xl transition-all duration-300"
          >
            {/* TOP ACCENT LINE */}
            <div className="absolute top-0 left-0 w-0 h-1 bg-[#006def] group-hover:w-full transition-all duration-300 z-20" />

            {/* Background Grid Pattern */}
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{ backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`, backgroundSize: '24px 24px' }}
            />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/10 text-white text-[10px] font-mono font-black tracking-wider uppercase mb-3 border border-white/15 rounded-xs">
                <Clock className="w-3 h-3 text-[#006def]" />
                <span>Mission Critical Scenario</span>
              </div>

              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-3 leading-tight">
                01:00 HRS.<br />The Midnight Submittal.
              </h3>

              <div className="space-y-3 text-white/80 font-medium leading-relaxed text-xs sm:text-sm border-l-2 border-[#006def] pl-3.5">
                <p>
                  The manufacturers are offline. Time is evaporating. You need to select, document, and integrate complex precast products before the dawn deadline.
                </p>
                <p>
                  You don't need a sales pitch—you need high-fidelity precision CSI specs, PE stamped calculations, and exact CAD details.
                </p>
              </div>
            </div>

            <div className="relative z-10 pt-4 mt-4 border-t border-white/10">
              <p className="font-black text-white text-sm sm:text-base uppercase tracking-tight">
                PEG is your on-demand infrastructure.
              </p>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: The Solutions Grid (7 Columns Wide) */}
          <div className="lg:col-span-7 flex flex-col gap-4 md:gap-5 justify-between">

            {/* Top Row: Lifecycle Support */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white hover:bg-slate-50 border border-[#002f7a]/15 hover:border-[#006def] p-6 rounded-sm shadow-xs hover:shadow-xl transition-all duration-300 group flex flex-col justify-center relative overflow-hidden cursor-pointer"
            >
              {/* TOP ACCENT LINE */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-[#006def] group-hover:w-full transition-all duration-300 z-20" />

              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-blue-50 text-[#006def] group-hover:bg-[#002f7a] group-hover:text-white transition-colors duration-300 shrink-0 border border-[#006def]/20 rounded-sm mt-0.5">
                  <Workflow className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-[#002f7a] uppercase tracking-tight mb-1.5 group-hover:text-[#006def] transition-colors leading-snug">
                    Full-Spectrum Lifecycle Support
                  </h3>
                  <p className="text-[#002f7a]/85 font-semibold text-xs sm:text-sm leading-relaxed">
                    From conceptual design to on-site construction and facility management, we are integrated into every phase. Browse our engineering directory to extract the exact data, architecture details, and construction specs you require to execute flawlessly.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Bottom Row: Two Data Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">

              {/* Data Card 1: The Database */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                className="bg-white hover:bg-slate-50 border border-[#002f7a]/15 hover:border-[#006def] p-5 rounded-sm shadow-xs hover:shadow-xl transition-all duration-300 group flex flex-col justify-between relative overflow-hidden cursor-pointer"
              >
                {/* TOP ACCENT LINE */}
                <div className="absolute top-0 left-0 w-0 h-1 bg-[#006def] group-hover:w-full transition-all duration-300 z-20" />

                <div>
                  <div className="p-2 bg-blue-50 text-[#006def] group-hover:bg-[#002f7a] group-hover:text-white transition-colors duration-300 shrink-0 border border-[#006def]/20 rounded-sm w-fit mb-3">
                    <Database className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs sm:text-[13px] font-black uppercase tracking-tight text-[#002f7a] group-hover:text-[#006def] transition-colors mb-1">
                    Parametric Data Logic
                  </h4>
                  <p className="text-xs text-[#002f7a]/85 font-semibold leading-relaxed">
                    Stop paying agencies to build content. We engineer high-performance CAD with minimal geometry and maximum data logic—ready for instant deployment.
                  </p>
                </div>

                <div className="mt-3.5 pt-2.5 border-t border-[#002f7a]/10 flex items-center justify-between text-[#006def] font-black text-[10px] uppercase tracking-wider">
                  <span>Access Models</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>

              {/* Data Card 2: Open Access */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-[#002f7a] hover:bg-[#001f52] text-white border border-[#002f7a] hover:border-[#006def] p-5 rounded-sm shadow-xs hover:shadow-xl transition-all duration-300 group flex flex-col justify-between relative overflow-hidden cursor-pointer"
              >
                {/* TOP ACCENT LINE */}
                <div className="absolute top-0 left-0 w-0 h-1 bg-[#006def] group-hover:w-full transition-all duration-300 z-20" />

                <div>
                  <div className="p-2 bg-white/10 text-white rounded-sm border border-white/20 w-fit mb-3">
                    <Unlock className="w-4 h-4 text-[#006def]" />
                  </div>
                  <h4 className="text-xs sm:text-[13px] font-black uppercase tracking-tight text-white mb-1">
                    Zero-Friction Access
                  </h4>
                  <p className="text-white/80 text-xs font-semibold leading-relaxed">
                    No paywalls. No mandatory lead-capture forms requiring your phone number. Our architectural detail library and specs are completely open-source.
                  </p>
                </div>

                <div className="mt-3.5 pt-2.5 border-t border-white/10 flex items-center justify-between">
                  <span className="px-2 py-0.5 bg-white/10 text-white font-mono text-[9px] uppercase tracking-widest font-black rounded-xs border border-white/15">
                    Save Time & Budget
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#006def] group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};