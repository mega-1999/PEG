"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Leaf, Rabbit, Zap, ArrowRight, Activity } from 'lucide-react';
import { getAssetUrl } from '@/lib/utils';

// UPDATED DATA ARRAY: Now includes a specific 'img' path for each initiative
const futureInitiatives = [
  {
    title: "Wildlife Corridors",
    subtitle: "Ecological Continuity",
    description: "Re-engineering culverts into subterranean bridges that restore natural migration paths and reduce vehicle-wildlife collisions.",
    icon: <Rabbit className="w-8 h-8" />,
    img: getAssetUrl("/assets/images/Box_Culvert/11.jpeg"), // IMAGE 1
  },
  {
    title: "Utility Tunnels",
    subtitle: "Modular Smart-Cities",
    description: "Dual-purpose box culverts designed to house fiber optics, power, and water, allowing for maintenance without surface excavation.",
    icon: <Zap className="w-8 h-8" />,
    img: getAssetUrl("/assets/images/Box_Culvert/12.jpeg"), // IMAGE 1
  },
  {
    title: "Eco-Friendly Concrete",
    subtitle: "Lower-Carbon Precast Solutions",
    description: "Implementing Pozzolanic admixtures and CO2 mineralization to create culverts that actively sequester carbon over their Designed for Long Service Life.",
    icon: <Leaf className="w-6 h-6" />,
    img: getAssetUrl("/assets/images/Box_Culvert/13.jpeg"), // IMAGE 1
  }
];

export default function FutureCulvertComponent() {
  return (
    // Base foundation color: PEG Dark Blue (#004aad)
    <section className="w-full bg-[#004aad] overflow-hidden flex flex-col select-none">
      
      {/* 1. HEADER STRIP */}
      <div className="w-full px-10 md:px-20 py-8 flex justify-between items-end border-b border-white/10 relative z-30">
        <div className="space-y-2">
          <h2 className="text-white text-3xl md:text-5xl font-black tracking-tighter leading-[0.9]">
            THE FUTURE OF <br />
            <span style={{ WebkitTextStroke: "1.5px #ffffff", color: "transparent" }}>BOX CULVERTS</span>
          </h2>
        </div>
 
      </div>

      {/* 2. TRIPTYCH GRID: The 3 vertical panels */}
      <div className="w-full px-10 md:px-20 py-8 flex-grow grid grid-cols-1 md:grid-cols-3 h-full">
        {futureInitiatives.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: idx * 0.2 }}
            className="group relative flex flex-col justify-end p-12 overflow-hidden border-r border-white/10 last:border-r-0 min-h-[600px] cursor-pointer"
          >
            
            {/* Background Image Container with established zoom-out effect */}
            <div className="absolute inset-0 z-0 transition-transform duration-[2000ms] scale-110 group-hover:scale-100 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <Image 
                    src={getAssetUrl(item.img)} // UPDATED: Pulling different image from the array
                    alt={`PEG Future Culvert Concept - ${item.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={idx === 0} // Prioritize first panel
                    className="object-cover object-center grayscale-0 brightness-[0.4] group-hover:brightness-[0.8] transition-all duration-700"
                />
            </div>

            {/* Architectural Gradient Overlay - recedes on hover for clear visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#004aad] via-[#004aad]/50 to-transparent z-10 transition-opacity duration-700 group-hover:opacity-20" />

            {/* MAIN CONTENT: Elevated above image and gradient */}
            <div className="relative z-20 space-y-7">
              <div className="flex justify-between items-center">
                <div className="p-4 bg-white text-[#004aad] transition-transform duration-700 group-hover:rotate-[360deg]">
                  {item.icon}
                </div>
              </div>

              <div>
                <p className="text-[#1B79EE] font-black text-xs uppercase tracking-widest mb-2">{item.subtitle}</p>
                {/* Headline using text-shadow for clarity against brighter hovered image */}
                <h3 
                  className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-5 transition-all duration-300 group-hover:text-[#004aad] leading-none"
                  style={{ textShadow: "0px 2px 2px rgba(0, 74, 173, 0.5)" }}
                >
                  {item.title}
                </h3>
                {/* Description using text-shadow for legibility */}
                <p 
                  className="text-white/60 text-sm font-medium leading-relaxed max-w-sm group-hover:text-white transition-colors duration-300"
                  style={{ textShadow: "0px 1px 2px rgba(0, 74, 173, 0.5)" }}
                >
                  {item.description}
                </p>
              </div>

              {/* Call-To-Action reveals on hover */}
              <div className="pt-6 border-t border-white/10 flex items-center gap-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                <span className="text-white font-black text-[10px] uppercase tracking-[0.4em]">Initialize Deployment</span>
                <ArrowRight className="w-5 h-5 text-[#1B79EE]" />
              </div>
            </div>

            {/* Decorative Column Number */}
            <div className="absolute top-12 right-12 z-20 font-mono text-white/10 text-7xl font-black group-hover:text-[#1B79EE]/10 transition-colors cursor-default">
              0{idx + 1}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}