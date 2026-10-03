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
    <section className="w-full bg-white py-16 md:py-20 relative overflow-hidden border-b border-[#002f7a]/10 select-none">

      {/* STANDARDIZED CONTAINER */}
      <div className="w-full px-10 md:px-20 relative z-10">

        {/* 1. HEADER STRIP */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6 border-b border-[#002f7a]/10 pb-8">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#006def]/10 text-[#006def] text-xs font-black tracking-[0.2em] uppercase border-l-2 border-[#006def]">
            <Box className="w-3.5 h-3.5" /> Engineered Precast Infrastructure
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#002f7a] tracking-tighter leading-[0.9] uppercase">
            The Future of <span className="text-[#006def]">Box Culverts.</span>
          </h2>
          <p className="text-[#002f7a] text-sm md:text-base font-semibold max-w-2xl leading-relaxed">
            Standard and custom ASTM C1577 precast box culverts engineered for stream crossings, underground detention, and multi-utility corridors.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-blue-50 px-4 py-2.5 border border-[#006def]/20 text-[#002f7a] font-mono text-xs font-bold uppercase">
            <ShieldCheck className="w-4 h-4 text-[#006def]" /> ASTM C1577 & AASHTO
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
            className="group bg-[#002f7a] text-white border border-white/15 hover:border-[#006def] shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            {/* Image Preview Container with White Background */}
            <div className="relative w-full h-64 sm:h-72 bg-white border-b border-[#002f7a]/15 overflow-hidden flex items-center justify-center p-4">
              <Image
                src={item.img}
                alt={`PEG Culvert - ${item.title}`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-contain p-4 group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute top-3 left-3 bg-[#002f7a] text-white p-2 shadow-xs z-10">
                {item.icon}
              </div>
              <div className="absolute top-3 right-3 bg-[#002f7a] text-white px-2.5 py-0.5 text-[9px] font-mono font-black uppercase tracking-widest border border-white/20 z-10 shadow-xs">
                INITIATIVE 0{idx + 1}
              </div>
            </div>

            {/* Content Area */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-[10px] font-mono font-bold text-[#006def] group-hover:text-white uppercase tracking-widest block mb-1 transition-colors">
                  {item.subtitle}
                </span>
                <h3 className="text-xl font-black text-white uppercase tracking-tight group-hover:text-[#006def] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/80 font-medium mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 space-y-3">
                <div className="text-[10px] font-mono font-bold text-white bg-white/10 px-2.5 py-1.5 border border-white/15">
                  {item.specs}
                </div>

                <a
                  href="#contact"
                  className="w-full py-2.5 bg-white group-hover:bg-[#006def] text-[#002f7a] group-hover:text-white border border-white/20 text-[10px] font-mono font-black uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
                >
                  <span>Explore Culvert Specs</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  );
}