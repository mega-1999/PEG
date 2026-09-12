"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Globe2, ShieldCheck, Zap, Layers, Sparkles } from "lucide-react";
import { getAssetUrl } from "@/lib/utils";

const partnerLogos = [
  { id: "NODE_01", src: getAssetUrl("/PrecastIndustry_Links/1.jpg"), alt: "PEG Precasters", category: "Precast Plant" },
  { id: "NODE_02", src: getAssetUrl("/PrecastIndustry_Links/2.jpg"), alt: "Precast Engineering", category: "Structural CAD" },
  { id: "NODE_03", src: getAssetUrl("/PrecastIndustry_Links/3.jpg"), alt: "P-Xchange", category: "Material Network" },
  { id: "NODE_04", src: getAssetUrl("/PrecastIndustry_Links/4.jpg"), alt: "Total Tech Solutions", category: "Automation" },
  { id: "NODE_05", src: getAssetUrl("/PrecastIndustry_Links/5.jpg"), alt: "Trench Unlimited", category: "Utility Systems" },
  { id: "NODE_06", src: getAssetUrl("/PrecastIndustry_Links/6.jpg"), alt: "Alternative Alliance", category: "Standards" },
  { id: "NODE_07", src: getAssetUrl("/PrecastIndustry_Links/7.jpg"), alt: "Global Mold Tech", category: "Mold Engineering" },
  { id: "NODE_08", src: getAssetUrl("/PrecastIndustry_Links/8.jpg"), alt: "Parametric Vault", category: "CAD Vault" },
  { id: "NODE_09", src: getAssetUrl("/PrecastIndustry_Links/9.jpg"), alt: "Grid Infrastructure", category: "Civil Works" },
  { id: "NODE_10", src: getAssetUrl("/PrecastIndustry_Links/10.jpg"), alt: "Hydro Systems", category: "Stormwater" },
  { id: "NODE_11", src: getAssetUrl("/PrecastIndustry_Links/11.jpg"), alt: "PEG Precasters", category: "Precast Plant" },
  { id: "NODE_12", src: getAssetUrl("/PrecastIndustry_Links/12.jpg"), alt: "Precast Engineering", category: "Structural CAD" },
  { id: "NODE_13", src: getAssetUrl("/PrecastIndustry_Links/13.jpg"), alt: "P-Xchange", category: "Material Network" },
  { id: "NODE_14", src: getAssetUrl("/PrecastIndustry_Links/14.jpg"), alt: "Total Tech Solutions", category: "Automation" },
  { id: "NODE_15", src: getAssetUrl("/PrecastIndustry_Links/15.jpg"), alt: "Trench Unlimited", category: "Utility Systems" },
  { id: "NODE_16", src: getAssetUrl("/PrecastIndustry_Links/16.jpg"), alt: "Alternative Alliance", category: "Standards" },
  { id: "NODE_17", src: getAssetUrl("/PrecastIndustry_Links/17.jpg"), alt: "Global Mold Tech", category: "Mold Engineering" },
  { id: "NODE_18", src: getAssetUrl("/PrecastIndustry_Links/18.jpg"), alt: "Parametric Vault", category: "CAD Vault" },
  { id: "NODE_19", src: getAssetUrl("/PrecastIndustry_Links/19.jpg"), alt: "Grid Infrastructure", category: "Civil Works" },
  { id: "NODE_20", src: getAssetUrl("/PrecastIndustry_Links/20.jpg"), alt: "Hydro Systems", category: "Stormwater" },
];

export default function HexagonLogoShowcase() {
  const row1 = partnerLogos.slice(0, 10);
  const row2 = partnerLogos.slice(10, 20);

  return (
    <section className="w-full bg-[#004aad]/5 text-[#004aad] py-20 overflow-hidden relative border-y border-[#004aad]/10">
      
      {/* CAD BLUEPRINT GRID BACKGROUND */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none" 
        style={{ 
          backgroundImage: `radial-gradient(#004aad 1.5px, transparent 1.5px), linear-gradient(to right, #004aad 0.5px, transparent 0.5px), linear-gradient(to bottom, #004aad 0.5px, transparent 0.5px)`,
          backgroundSize: '40px 40px, 200px 200px, 200px 200px'
        }} 
      />

      <div className="w-full relative z-10 space-y-16">
        
        {/* HEADER SECTION */}
        <div className="w-full px-10 md:px-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-[#004aad]/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1B79EE]/10 text-[#1B79EE] text-xs font-black tracking-[0.2em] uppercase rounded-none mb-3 border border-[#1B79EE]/20">
              <Globe2 className="w-3.5 h-3.5" /> Industry Alliances
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#004aad] tracking-tighter uppercase leading-none">
              PRECAST INDUSTRY <span className="text-[#1B79EE]">& PARTNER NETWORK.</span>
            </h2>
          </div>
          <p className="text-[#004aad]/70 font-medium text-sm md:text-base max-w-md">
            Verified precast concrete manufacturers, formwork suppliers, structural software platforms, and DOT certified infrastructure partners.
          </p>
        </div>

        {/* INFINITE TICKER MARQUEE - ROW 1 (LEFT TO RIGHT) */}
        <div className="relative w-full overflow-hidden py-2">
          <motion.div 
            className="flex gap-6 min-w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
          >
            {[...row1, ...row1].map((logo, idx) => (
              <PartnerCard key={`row1-${idx}`} logo={logo} />
            ))}
          </motion.div>
        </div>

        {/* INFINITE TICKER MARQUEE - ROW 2 (RIGHT TO LEFT) */}
        <div className="relative w-full overflow-hidden py-2">
          <motion.div 
            className="flex gap-6 min-w-max"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 38 }}
          >
            {[...row2, ...row2].map((logo, idx) => (
              <PartnerCard key={`row2-${idx}`} logo={logo} />
            ))}
          </motion.div>
        </div>

        {/* BOTTOM METRIC BADGES BAR */}
        <div className="w-full px-10 md:px-20 pt-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white p-6 border border-[#004aad]/10 shadow-sm">
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold text-[#1B79EE] uppercase tracking-widest">Global Partners</span>
              <p className="text-xl md:text-2xl font-black text-[#004aad]">250+ Plants</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold text-[#1B79EE] uppercase tracking-widest">Integration</span>
              <p className="text-xl md:text-2xl font-black text-[#004aad]">NPCA & PCI</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold text-[#1B79EE] uppercase tracking-widest">Formwork Tech</span>
              <p className="text-xl md:text-2xl font-black text-[#004aad]">Steel & Magnetic</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold text-[#1B79EE] uppercase tracking-widest">Compliance</span>
              <p className="text-xl md:text-2xl font-black text-[#004aad]">50 State DOTs</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* PARTNER CARD COMPONENT */
function PartnerCard({ logo }: { logo: { id: string; src: string; alt: string; category: string } }) {
  return (
    <div className="group relative w-64 h-36 bg-white border border-[#004aad]/10 hover:border-[#1B79EE] shadow-sm hover:shadow-xl hover:shadow-[#1B79EE]/15 transition-all duration-300 rounded-none overflow-hidden shrink-0 flex flex-col justify-between p-4 cursor-pointer">
      
      {/* CARD TOP HEADER */}
      <div className="flex justify-between items-center text-[10px] font-mono font-bold">
        <span className="text-[#1B79EE] bg-blue-50 px-2 py-0.5 border border-[#1B79EE]/20">
          {logo.id}
        </span>
        <span className="text-[#004aad]/60 uppercase tracking-wider">
          {logo.category}
        </span>
      </div>

      {/* LOGO IMAGE CONTAINER */}
      <div className="relative w-full h-16 my-2 flex items-center justify-center">
        <Image
          src={getAssetUrl(logo.src)}
          alt={logo.alt}
          fill
          sizes="150px"
          className="object-contain p-1 group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* CARD FOOTER */}
      <div className="flex justify-between items-center pt-2 border-t border-[#004aad]/5">
        <span className="text-xs font-bold text-[#004aad] group-hover:text-[#1B79EE] transition-colors truncate">
          {logo.alt}
        </span>
        <ShieldCheck className="w-3.5 h-3.5 text-[#1B79EE] shrink-0" />
      </div>

      {/* TOP ACCENT LINE ON HOVER */}
      <div className="absolute top-0 left-0 w-0 h-1 bg-[#1B79EE] group-hover:w-full transition-all duration-500" />
    </div>
  );
}