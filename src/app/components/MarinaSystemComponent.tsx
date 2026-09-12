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
           style={{ backgroundImage: `radial-gradient(#1B79EE 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative z-10">
        
        {/* LEFT COLUMN: The "Master Specs" (Occupies 5/12 columns) */}
        <div className="lg:col-span-5 space-y-12">
          <div className="space-y-4">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '80px' }}
              className="h-1 bg-[#1B79EE]"
            />
            <h2 className="text-3xl md:text-5xl font-black text-[#004aad] tracking-tighter leading-none">
              FLOATING <br />
              <span className="text-[#1B79EE]">MARINAS.</span>
            </h2>
            <p className="text-[#004aad]/70 font-medium text-lg leading-relaxed max-w-md">
              Engineered for the harshest marine environments. Our precast floating docks redefine durability through hydro-dynamic design and carbon-fiber reinforcement.
            </p>
          </div>

          <div className="space-y-8 bg-[#004aad]/5 p-10 border-l-8 border-[#004aad]">
            {marinaSpecs.map((spec, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="text-[#1B79EE] shrink-0">{spec.icon}</div>
                <div>
                  <h4 className="text-[#004aad] font-black text-xs uppercase tracking-[0.2em] mb-2 flex items-center gap-3">
                    {spec.title}
                  </h4>
                  <p className="text-[#004aad]/70 text-sm leading-relaxed">{spec.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: The "Visual Component Hub" (Occupies 7/12 columns) */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
          
          {/* Main Visual Card - Embedded Video System */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="md:col-span-2 relative aspect-video bg-[#004aad] overflow-hidden group border border-[#004aad]/10"
          >
            {/* BACKGROUND VIDEO INTERFACE */}
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              suppressHydrationWarning
              className="absolute inset-0 w-full h-full object-cover z-0"
            >
              <source src={getAssetUrl("/assets/video/MARINE_PRODUCT/E20_V1_final.mp4")} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Overlapping Identity Tint Matrix */}
            <div className="absolute inset-0 bg-[#004aad]/40 mix-blend-multiply z-10 group-hover:opacity-30 transition-opacity duration-500" />
            
            {/* Content Layers */}
            <div className="absolute inset-0 flex flex-col justify-end p-12 text-white z-20">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter">Monolithic Concrete Pontoons</h3>
                </div>
                <div className="p-4 rounded-full border border-white/20 bg-[#004aad]/40 group-hover:bg-[#1B79EE] group-hover:border-[#1B79EE] transition-all">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
            </div>
            
            {/* Decorative waves overlaying video depth */}
            <Waves className="absolute top-10 right-10 w-32 h-32 text-white/5 opacity-20 rotate-12 z-10" />
          </motion.div>

          {/* Secondary Sub-Modules */}
          <div className="bg-white border-2 border-[#004aad] p-8 flex justify-between hover:bg-[#004aad]/5 transition-colors group">
             <Anchor className="w-8 h-8 text-[#1B79EE] mb-6" />
             <h4 className="text-sm font-black text-[#004aad] uppercase tracking-tighter">Anchoring <br />Systems</h4>
          </div>

          <div className="bg-[#1B79EE] p-8 flex justify-between text-white hover:bg-[#004aad] transition-colors group">
             <Navigation className="w-10 h-10 text-white mb-6" />
             <h4 className="text-sm font-black uppercase tracking-tighter">Modular <br />Expansion</h4>
          </div>

        </div>

      </div>

    </section>
  );
}