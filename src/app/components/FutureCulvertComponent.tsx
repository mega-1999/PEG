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
    img: getAssetUrl("/assets/images/Box_Culvert/11.jpeg"),
    specs: "AASHTO HS-25 • Multi-Cell • Custom Inverts"
  },
  {
    title: "Utility Tunnels",
    subtitle: "Modular Smart-Cities",
    description: "Dual-purpose box culverts designed to house fiber optics, power, and water, allowing for maintenance without surface excavation.",
    icon: <Zap className="w-5 h-5" />,
    img: getAssetUrl("/assets/images/Box_Culvert/12.jpeg"),
    specs: "H-20 Highway • Integrated Cable Trays • Watertight"
  },
  {
    title: "Eco-Friendly Concrete",
    subtitle: "Lower-Carbon Precast Solutions",
    description: "Implementing Pozzolanic admixtures and CO2 mineralization to create culverts that actively sequester carbon over their 100+ year service life.",
    icon: <Leaf className="w-5 h-5" />,
    img: getAssetUrl("/assets/images/Box_Culvert/13.jpeg"),
    specs: "ASTM C1577 • Low Clinker • 100+ Yr Durability"
  }
];

export default function FutureCulvertComponent() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-16 lg:px-20 border-t border-[#004aad]/10 select-none">
      
      {/* 1. HEADER STRIP */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6 border-b border-[#004aad]/10 pb-8">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1B79EE]/10 text-[#1B79EE] text-xs font-black tracking-[0.2em] uppercase border-l-2 border-[#1B79EE]">
            <Box className="w-3.5 h-3.5" /> Engineered Precast Infrastructure
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#004aad] tracking-tighter leading-[0.9] uppercase">
            The Future of <span className="text-[#1B79EE]">Box Culverts.</span>
          </h2>
          <p className="text-[#004aad] text-sm md:text-base font-semibold max-w-2xl leading-relaxed">
            Standard and custom ASTM C1577 precast box culverts engineered for stream crossings, underground detention, and multi-utility corridors.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-blue-50 px-4 py-2.5 border border-[#1B79EE]/20 text-[#004aad] font-mono text-xs font-bold uppercase">
            <ShieldCheck className="w-4 h-4 text-[#1B79EE]" /> ASTM C1577 & AASHTO
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
            className="group bg-white border border-[#004aad]/15 hover:border-[#1B79EE] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            {/* Image Preview Container */}
            <div className="relative w-full aspect-16/10 bg-slate-50 border-b border-[#004aad]/10 overflow-hidden">
              <Image 
                src={item.img}
                alt={`PEG Culvert - ${item.title}`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute top-3 left-3 bg-[#004aad] text-white p-2 shadow-xs">
                {item.icon}
              </div>
              <div className="absolute top-3 right-3 bg-white/95 text-[#004aad] px-2.5 py-0.5 text-[9px] font-mono font-black uppercase tracking-widest border border-[#004aad]/20">
                INITIATIVE 0{idx + 1}
              </div>
            </div>

            {/* Content Area */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-[10px] font-mono font-bold text-[#1B79EE] uppercase tracking-widest block mb-1">
                  {item.subtitle}
                </span>
                <h3 className="text-xl font-black text-[#004aad] uppercase tracking-tight group-hover:text-[#1B79EE] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#004aad] font-semibold mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#004aad]/10 space-y-3">
                <div className="text-[10px] font-mono font-bold text-[#1B79EE] bg-blue-50/70 px-2.5 py-1 border border-[#1B79EE]/20">
                  {item.specs}
                </div>

                <a
                  href="#contact"
                  className="w-full py-2.5 bg-white group-hover:bg-[#004aad] text-[#004aad] group-hover:text-white border border-[#004aad]/20 text-[10px] font-mono font-black uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
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