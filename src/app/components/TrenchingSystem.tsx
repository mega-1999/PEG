"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Waypoints, Ruler, Shield, Zap } from "lucide-react";

// Trench data remains the same for easy content management
const trenchData = [
  {
    id: "01",
    title: "Cable Trenching",
    tagline: "The Arteries of Infrastructure.",
    // The specific local image asset path provided by the user
    img: "/assets/images/pre-trench/pre-trench-01.JPG",
    isPrimary: true // This is the 'Cable Trench' to highlight
  },
  {
    id: "02",
    title: "H-20 Road Crossing",
    tagline: "Unyielding Under Pressure.",
    // A second image from the user's provided directory
    img: "/assets/images/pre-trench/pre-trench-05.JPG",
    isPrimary: false
  },
  {
    id: "03",
    title: "Substation Vaults",
    tagline: "Securing the Node.",
    // The specific local image asset path provided by the user
    img: "/assets/images/pre-trench/trench-grates-img-diagonal-view (1).jpg",
    isPrimary: false
  }
];

export default function StaticTrenchingGrid() {
  return (
    // Reverted the section height from 300vh to h-auto. Removed refs and scroll logic.
    <section className="relative h-auto bg-white py-24 border-t-2 border-[#004aad]/10 select-none">

      {/* MILES & MILES BACKGROUND WATERMARK
         Statically positioned relative to the section, not fixed. 
         Fades in on view for technical extraordinary detail effect.
      */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        className="absolute top-10 md:top-20 right-10 md:right-24 pointer-events-none select-none"
      >
        <h2 className="text-[12vw] font-black text-[#004aad] opacity-[0.03] leading-none uppercase">
          Miles & Miles
        </h2>
      </motion.div>

      {/* MAIN CONTAINER WRAPPER
         Centers the static row of cards, constrained to the standard max-width.
      */}
      <div className="px-10 md:px-20 relative z-10 space-y-16">

        {/* SECTION HEADER: Title + Manifesto */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-[#004aad]/5 pb-16">
          <div className="md:col-span-5">
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9] text-[#004aad]">
              Trenching <br /> Systems.
            </h3>
          </div>
          <div className="md:col-span-7 flex flex-col md:flex-row gap-8 items-start md:items-center">
            <p className="text-[#004aad]/70 text-base leading-relaxed font-medium max-w-xl">
              We have undertaken miles and miles of integrated trenching systems, delivering the unyielding backbone for global power and data networks.
            </p>
            <div className="flex items-center gap-3 text-white font-black text-[11px] uppercase tracking-widest bg-[#1B79EE] px-8 py-5 self-start shadow-lg whitespace-nowrap">
              <Ruler className="w-5 h-5" /> 52,800+ Linear Feet
            </div>
          </div>
        </div>

        {/* STATIC ROW GRID (The User Request)
           It is no longer a flex container that slides; it is a fixed grid.
           - Triggering cards at 1024px (lg) instead of 1280px (xl) because there are only 4 items.
           - Mobile: 1 column, LG+: 4 columns (Intro + 3 Data cards)
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* REPURPOSED INTRO BLOCK as a STATIC CARD
             Keeps the engineering scale and PEG authority text visible at all times.
          */}
          <div className="flex h-[500px] w-full flex-col justify-center p-12 bg-[#004aad] text-white relative shadow-xl col-span-1">
            <div className="absolute top-0 left-0 w-3 h-full bg-[#1B79EE]" />
            <Waypoints className="w-12 h-12 text-[#1B79EE] mb-10" />
            <h4 className="text-2xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
              Miles of <br /> Integration.
            </h4>
            <p className="text-white/70 text-sm leading-relaxed font-medium">
              From initial desk-side engineering to final shop-floor fabrication.
            </p>
          </div>

          {/* THE TRENCH CARDS */}
          {trenchData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -15 }}
              className="group relative h-[500px] w-full border transition-all duration-500 overflow-hidden col-span-1 bg-white border-[#004aad]/10 text-[#004aad] hover:border-[#1B79EE] hover:shadow-[0_20px_50px_rgba(0,74,173,0.1)]"
            >
              {/* IMAGE CONTAINER */}
              <div className={`relative h-56 w-full flex items-center justify-center p-10 transition-colors duration-500
                ${item.isPrimary ? 'bg-white' : 'bg-[#004aad]/5 group-hover:bg-[#1B79EE]/5'}
              `}>
                <div className="relative w-full h-full">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    // No zoom on hover for a cleaner data-driven look
                    className="object-contain"
                  />
                </div>
                {/* ID Tag */}
                <div className="absolute top-4 left-4 bg-white px-2 py-0.5 border border-[#004aad]/10">
                  <span className="text-[9px] font-black text-[#004aad] uppercase tracking-widest">{item.id}</span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-10 flex flex-col flex-grow">
                {/* Purged 'Specs' data point to satisfying 'smaller is better' feedback */}
                <h4 className={`text-xl font-black uppercase tracking-tighter leading-tight mb-3 transition-colors group-hover:text-[#1B79EE]`}>
                  {item.title}
                </h4>
                <p className="text-[#004aad] text-xs font-black uppercase tracking-tight opacity-80">
                  {item.tagline}
                </p>

                {/* Footer Action */}
                <div className="mt-auto pt-8 border-t border-[#004aad]/5 flex justify-between items-center">
                  <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-[#004aad] hover:text-[#1B79EE] transition-all group-hover:gap-5">
                    View Blueprint <ArrowRight className="w-4 h-4" />
                  </button>
                  <Shield className="w-5 h-5 text-[#004aad]/20 group-hover:text-[#1B79EE] transition-colors" />
                </div>
              </div>

              {/* Brutalist Top Accent Line only for non-primary cards */}
              {!item.isPrimary && (
                <div className="absolute top-0 left-0 w-0 h-1.5 bg-[#1B79EE] group-hover:w-full transition-all duration-700" />
              )}
            </motion.div>
          ))}
        </div>

        <div className="w-full h-[250px] bg-slate-50 border-4 border-dashed border-[#1B79EE] p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden mt-12">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/assets/images/pre-trench/trench-grates-img-diagonal-view (11).jpeg')]" />

          <div className="relative z-10 max-w-sm">
            <div className="flex items-center gap-3 text-[#1B79EE] mb-6">
              <Zap className="w-6 h-6 animate-spin-slow" />
              <span className="font-mono text-xs font-black tracking-widest">DEPLOYMENT_PROTOCOL</span>
            </div>
            <h3 className="text-3xl font-black text-[#004aad] uppercase tracking-tighter mb-4">
              Scalable. <br /> Secure.
            </h3>
            <p className="text-[#004aad]/60 text-sm leading-relaxed max-w-xs font-medium">
              Seamlessly integrated from desk to shop floor. Action ready.
            </p>
          </div>
          <button className="relative z-10 bg-[#004aad] hover:bg-[#1B79EE] text-white text-[11px] font-black uppercase tracking-widest transition-all shadow-xl whitespace-nowrap self-start md:self-center">
            Initiate Protocol
          </button>
        </div>

      </div>
    </section>
  );
}