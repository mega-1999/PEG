"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Leaf, Rabbit, Zap, ArrowRight, ShieldCheck, Box } from 'lucide-react';
import { getAssetUrl } from '@/lib/utils';

const futureInitiatives = [
  {
    title: "Wildlife Corridors",
    subtitle: "Ecological Continuity",
    description: "Re-engineering culverts into subterranean bridges that restore natural migration paths and reduce vehicle-wildlife collisions.",
    icon: <Rabbit className="w-5 h-5" />,
    img: getAssetUrl("/assets/images/Box_Culvert/10_FT_Culvert_box__-_PEG.1243.png"),
    specs: "AASHTO HS-25 • Multi-Cell • Custom Inverts"
  },
  {
    title: "Utility Tunnels",
    subtitle: "Modular Smart-Cities",
    description: "Dual-purpose box culverts designed to house fiber optics, power, and water, allowing for maintenance without surface excavation.",
    icon: <Zap className="w-5 h-5" />,
    img: getAssetUrl("/assets/images/Box_Culvert/Culvert_box_full_assembly_-_PEG.1241.png"),
    specs: "H-20 Highway • Integrated Cable Trays • Watertight"
  },
  {
    title: "Eco-Friendly Concrete",
    subtitle: "Lower-Carbon Precast Solutions",
    description: "Implementing Pozzolanic admixtures and CO2 mineralization to create culverts that actively sequester carbon over their 100+ year service life.",
    icon: <Leaf className="w-5 h-5" />,
    img: getAssetUrl("/assets/images/Box_Culvert/new_one.28.png"),
    specs: "ASTM C1577 • Low Clinker • 100+ Yr Durability"
  }
];

export default function FutureCulvertComponent() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-16 lg:px-20 border-t border-[#023380]/10 select-none">
      
      {/* 1. HEADER STRIP */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6 border-b border-[#023380]/10 pb-8">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0271f1]/10 text-[#0271f1] text-xs font-black tracking-[0.2em] uppercase border-l-2 border-[#0271f1]">
            <Box className="w-3.5 h-3.5" /> Engineered Precast Infrastructure
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#023380] tracking-tighter leading-[0.9] uppercase">
            The Future of <span className="text-[#0271f1]">Box Culverts.</span>
          </h2>
          <p className="text-[#023380] text-sm md:text-base font-semibold max-w-2xl leading-relaxed">
            Standard and custom ASTM C1577 precast box culverts engineered for stream crossings, underground detention, and multi-utility corridors.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-blue-50 px-4 py-2.5 border border-[#0271f1]/20 text-[#023380] font-mono text-xs font-bold uppercase">
            <ShieldCheck className="w-4 h-4 text-[#0271f1]" /> ASTM C1577 & AASHTO
          </div>
        </div>
      </div>

      {/* 2. COMPACT PRODUCT-WISE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {futureInitiatives.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group bg-white border border-[#023380]/15 hover:border-[#0271f1] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            {/* Image Preview Container */}
            <div className="relative w-full h-64 sm:h-72 bg-gradient-to-b from-slate-50 to-blue-50/20 border-b border-[#023380]/10 overflow-hidden flex items-center justify-center p-4">
              <Image 
                src={item.img}
                alt={`PEG Culvert - ${item.title}`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-contain p-4 group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute top-3 left-3 bg-[#023380] text-white p-2 shadow-xs z-10">
                {item.icon}
              </div>
              <div className="absolute top-3 right-3 bg-white/95 text-[#023380] px-2.5 py-0.5 text-[9px] font-mono font-black uppercase tracking-widest border border-[#023380]/20 z-10">
                INITIATIVE 0{idx + 1}
              </div>
            </div>

            {/* Content Area */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-[10px] font-mono font-bold text-[#0271f1] uppercase tracking-widest block mb-1">
                  {item.subtitle}
                </span>
                <h3 className="text-xl font-black text-[#023380] uppercase tracking-tight group-hover:text-[#0271f1] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#023380] font-semibold mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#023380]/10 space-y-3">
                <div className="text-[10px] font-mono font-bold text-[#0271f1] bg-blue-50/70 px-2.5 py-1 border border-[#0271f1]/20">
                  {item.specs}
                </div>

                <a
                  href="#contact"
                  className="w-full py-2.5 bg-white group-hover:bg-[#023380] text-[#023380] group-hover:text-white border border-[#023380]/20 text-[10px] font-mono font-black uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
                >
                  <span>Explore Culvert Specs</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}