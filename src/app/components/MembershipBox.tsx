"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, FileText, Shield, ArrowRight, Zap, Network } from "lucide-react";

const membershipPerks = [
  {
    icon: <Network className="w-5 h-5" />,
    title: "Global Network Sync",
    desc: "Connect directly with top-tier precasters and infrastructure nodes across North America and beyond."
  },
  {
    icon: <FileText className="w-5 h-5" />,
    title: "Proprietary Vault Access",
    desc: "Unlock unlimited access to our engineering schematics, DOT compliance standards, and shop drawing library."
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Priority Engineering",
    desc: "Direct 24/7 telemetry to our CAD drafting and structural design hubs for immediate project support."
  }
];

export default function MembershipBox() {
  return (
    <section className="w-full bg-[#023380] py-4 my-2 px-6 md:px-10 lg:px-20 flex justify-center font-sans">
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full relative overflow-hidden shadow-[0_30px_60px_rgba(2,51,128,0.2)]"
      >
        {/* INTERNAL BLUEPRINT GRID BACKGROUND */}
        <div 
          className="absolute inset-0 z-0 opacity-10 pointer-events-none"
          style={{ 
            backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`, 
            backgroundSize: '40px 40px' 
          }}
        />

        {/* ACCENT CORNERS */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-[#0271f1] z-10" />
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-[#0271f1] z-10" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0">
          
          {/* LEFT SIDE: HEAVY CTA */}
          <div className="p-10 md:p-16 lg:p-20 flex flex-col justify-center">
            
            <div className="inline-flex items-center gap-3 bg-[#0271f1] px-4 py-1.5 mb-8 self-start shadow-md">
              <Zap className="w-4 h-4 text-white animate-pulse" />
              <span className="font-mono text-[10px] font-black text-white uppercase tracking-[0.3em]">
                Active Registration Node
              </span>
            </div>

            <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-6">
              Join The Precast <br />
              <span className="text-[#0271f1]">Family Of Precasters.</span>
            </h2>

            <p className="text-white/80 text-sm md:text-base font-medium leading-relaxed max-w-md mb-10">
              Become an authorized node in the PEG network. Secure your position alongside industry leaders and scale your production with our integrated engineering ecosystem.
            </p>

            <button className="group relative w-full sm:w-auto bg-white text-[#023380] flex items-center justify-center gap-4 overflow-hidden transition-all shadow-xl self-start">
              {/* Button Hover Fill */}
              <div className="absolute inset-0 bg-[#0271f1] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />
              
              <span className="relative z-10 font-mono text-[12px] font-black tracking-[0.2em] uppercase group-hover:text-white transition-colors duration-300">
                Initialize Membership
              </span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
            </button>
          </div>

          {/* RIGHT SIDE: PERKS MATRIX */}
          <div className="bg-[#003882] p-10 md:p-16 lg:p-20 flex flex-col justify-center border-l border-white/5 relative">
            
            {/* Subtle Tech Overlay for Right Side */}
            <div className="absolute top-10 right-10 flex gap-2 opacity-30">
              <div className="w-2 h-2 bg-[#0271f1] rounded-full" />
              <div className="w-2 h-2 bg-[#0271f1] rounded-full" />
              <div className="w-2 h-2 bg-[#0271f1] rounded-full" />
            </div>

            <h3 className="font-mono text-[11px] text-white/50 font-black uppercase tracking-[0.3em] mb-10">
              // System Benefits
            </h3>

            <div className="space-y-8">
              {membershipPerks.map((perk, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="group flex items-start gap-6 cursor-default"
                >
                  <div className="p-3 bg-white/5 border border-white/10 text-[#0271f1] group-hover:bg-[#0271f1] group-hover:text-white transition-all duration-300 shrink-0">
                    {perk.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-white uppercase tracking-tight mb-2 group-hover:text-[#0271f1] transition-colors">
                      {perk.title}
                    </h4>
                    <p className="text-white/60 text-xs md:text-sm font-medium leading-relaxed">
                      {perk.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </motion.div>

    </section>
  );
}