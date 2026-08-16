"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Database, Workflow, Unlock, ArrowRight, Activity } from 'lucide-react';

export const ContentSection = () => {
  return (
    <section className="w-full bg-[#f8fafc] px-10 md:px-20 py-16 overflow-hidden">
      <div className="">
        
        {/* HEADER: Massive Structural Typography */}
        <div className="mb-4 space-y-6">
 
          <h2 className="text-3xl md:text-5xl font-black text-[#004aad] tracking-tighter leading-[0.9] uppercase">
            SOLUTIONS FOR <br />
            <span style={{ WebkitTextStroke: "1.5px #1B79EE", color: "transparent" }}>THE CRITICAL PATH.</span>
          </h2>
        </div>

        {/* THE ASYMMETRIC GRID SYSTEM (Perfect for 32" screens) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT COLUMN: The "1 AM Scenario" (5 Columns Wide) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 bg-[#004aad] text-white px-12 py-6 md:px-16 md:py-8 flex flex-col justify-between relative overflow-hidden group"
          >
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`, backgroundSize: '24px 24px' }} />
            
            <div className="relative z-10">
                
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-8 leading-none">
                    01:00 HRS.<br />The Midnight<br />Submittal.
                </h3>
                
                <div className="space-y-6 text-white/70 font-medium leading-relaxed text-lg border-l-2 border-[#1B79EE] pl-6">
                    <p>
                        The manufacturers are offline. Time is evaporating. You need to select, document, and integrate four complex precast products before the dawn deadline. 
                    </p>
                    <p>
                        You don't need a sales pitch—you need a high-fidelity precision CSI specs, and exact architectural details. You need an engineering fail-safe.
                    </p>
                    <p className="font-black text-white text-xl mt-8">
                        PEG is your on-demand infrastructure.
                    </p>
                </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: The Solutions Grid (7 Columns Wide) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-rows-2 gap-8">
            
            {/* Top Row: Lifecycle Support */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white border border-slate-200 p-12 group hover:border-[#1B79EE] hover:shadow-2xl transition-all duration-500 flex flex-col justify-center"
            >
                <div className="flex items-start gap-8">
                    <div className="p-5 bg-slate-50 text-[#004aad] group-hover:bg-[#004aad] group-hover:text-white transition-colors duration-500">
                        <Workflow className="w-8 h-8" />
                    </div>
                    <div>
                        <h3 className="text-xl font-black text-[#004aad] uppercase tracking-tighter mb-4">
                            Full-Spectrum Lifecycle Support
                        </h3>
                        <p className="text-slate-500 font-medium leading-relaxed">
                            From conceptual design to on-site construction and facility management, we are integrated into every phase. Browse our engineering directory to extract the exact data, architecture details, and construction specs you require to execute flawlessly.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Bottom Row: Split into two smaller data cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Data Card 1: The Database */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-white border border-slate-200 p-10 group hover:border-[#1B79EE] transition-all flex flex-col justify-between"
                >
                    <div>
                        <Database className="w-8 h-8 text-[#1B79EE] mb-6" />
                        <p className="text-slate-500 text-sm font-medium leading-relaxed">
                            Stop paying agencies to build content. We engineer high-performance CAD with minimal geometry and maximum data logic—ready for immediate download.
                        </p>
                    </div>
                    <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-4 text-[#1B79EE] font-black text-[10px] uppercase tracking-widest cursor-pointer">
                        Access Models <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                </motion.div>

                {/* Data Card 2: Open Access */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-[#1B79EE] text-white p-10 hover:bg-[#004aad] transition-colors duration-500 flex flex-col justify-between"
                >
                    <div>
                        <Unlock className="w-8 h-8 text-white mb-6" />
                        <h4 className="text-lg font-black uppercase tracking-tighter mb-4">Zero-Friction Access</h4>
                        <p className="text-white/80 text-sm font-medium leading-relaxed">
                            No paywalls. No mandatory lead-capture forms requiring your phone number. Our architectural detail library and specs are completely open-source. 
                        </p>
                    </div>
                    <div className="mt-8">
                        <span className="inline-block px-4 py-2 bg-white/10 text-white font-mono text-[9px] uppercase tracking-[0.3em] font-black">
                            Save Time. Save Budget.
                        </span>
                    </div>
                </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};