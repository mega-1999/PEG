"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Waves, Anchor, Shield, Navigation, ArrowUpRight, Droplets, Activity } from 'lucide-react';
import { getAssetUrl } from '@/lib/utils';

const marinaSpecs = [
  {
    title: "Structural Buoyancy",
    detail: "High-strength, fiber-reinforced precast shell with an expanded polystyrene (EPS) core for unsinkable stability.",
    icon: <Droplets className="w-5 h-5" />
  },
  {
    title: "Seismic Attenuation",
    detail: "Flexible connection systems designed to absorb wave energy and high-magnitude tidal shifts.",
    icon: <Activity className="w-5 h-5" />
  },
  {
    title: "Utility Integration",
    detail: "Internalized raceways for power, water, and fiber optics, protected from saltwater corrosion.",
    icon: <Shield className="w-5 h-5" />
  }
];

export default function MarinaSystemComponent() {
  return (
    <section className="w-full min-h-screen bg-white py-24 px-10 md:px-20 relative overflow-hidden">
      
      {/* BACKGROUND DECORATION: Nautical Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#0271f1 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative z-10">
        
        {/* LEFT COLUMN: The "Master Specs" (Occupies 5/12 columns) */}
        <div className="lg:col-span-5 space-y-12">
          <div className="space-y-4">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '80px' }}
              className="h-1 bg-[#0271f1]"
            />
            <h2 className="text-3xl md:text-5xl font-black text-[#023380] tracking-tighter leading-none">
              FLOATING <br />
              <span className="text-[#0271f1]">MARINAS.</span>
            </h2>
            <p className="text-[#023380] font-semibold text-lg leading-relaxed max-w-md">
              Engineered for the harshest marine environments. Our precast floating docks redefine durability through hydro-dynamic design and carbon-fiber reinforcement.
            </p>
          </div>

          <div className="space-y-6 bg-white p-6 md:p-8 border-l-4 border-[#0271f1] shadow-sm">
            {marinaSpecs.map((spec, i) => (
              <div key={i} className="flex gap-5 group">
                <div className="text-[#0271f1] shrink-0 p-2 bg-blue-50/80 rounded-sm">{spec.icon}</div>
                <div>
                  <h4 className="text-[#023380] font-black text-xs uppercase tracking-[0.2em] mb-1.5 flex items-center gap-3">
                    {spec.title}
                  </h4>
                  <p className="text-[#023380] font-semibold text-sm leading-relaxed">{spec.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: The "Visual Component Hub" (Occupies 7/12 columns) */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
          
          {/* Main Visual Card - Embedded Video System without grey tints */}
          <motion.div 
            whileHover={{ y: -6 }}
            className="md:col-span-2 relative aspect-video bg-white overflow-hidden group shadow-lg border border-[#023380]/10"
          >
            {/* BACKGROUND VIDEO INTERFACE - CRYSTAL CLEAR */}
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              preload="auto"
              suppressHydrationWarning
              className="absolute inset-0 w-full h-full object-cover z-0"
            >
              <source src={getAssetUrl("/assets/video/MARINE_PRODUCT/E20_V1_final.mp4")} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Bottom Title Bar with Clear High Contrast */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-[#023380]/90 via-transparent to-transparent text-white z-20">
              <div className="flex justify-between items-end">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest bg-[#0271f1] px-2.5 py-1 text-white inline-block mb-2">
                    Marine Engineering
                  </span>
                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter">Monolithic Concrete Pontoons</h3>
                </div>
                <div className="p-3.5 rounded-full bg-[#023380] border border-[#0271f1] text-white group-hover:bg-[#0271f1] transition-all shadow-md">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Secondary Feature Card */}
          <div className="bg-white border border-[#023380]/15 p-6 flex items-center justify-between hover:border-[#0271f1] hover:shadow-md transition-all group">
             <div className="flex items-center gap-4">
               <div className="p-3 bg-blue-50 text-[#0271f1] group-hover:bg-[#0271f1] group-hover:text-white transition-colors">
                 <Anchor className="w-6 h-6" />
               </div>
               <div>
                 <h4 className="text-sm font-black text-[#023380] uppercase tracking-tight">Anchoring Systems</h4>
                 <p className="text-xs font-semibold text-[#0271f1]">Flexible High-Load Mooring</p>
               </div>
             </div>
             <ArrowUpRight className="w-5 h-5 text-[#0271f1] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>

          <div className="bg-white border border-[#023380]/15 p-6 flex items-center justify-between hover:border-[#0271f1] hover:shadow-md transition-all group">
             <div className="flex items-center gap-4">
               <div className="p-3 bg-blue-50 text-[#0271f1] group-hover:bg-[#0271f1] group-hover:text-white transition-colors">
                 <Waves className="w-6 h-6" />
               </div>
               <div>
                 <h4 className="text-sm font-black text-[#023380] uppercase tracking-tight">Hydrodynamics</h4>
                 <p className="text-xs font-semibold text-[#0271f1]">Wave Dampening Geometry</p>
               </div>
             </div>
             <ArrowUpRight className="w-5 h-5 text-[#0271f1] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>

        </div>

      </div>

    </section>
  );
}