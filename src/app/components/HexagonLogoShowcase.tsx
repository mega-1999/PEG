"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Globe2, ShieldCheck } from "lucide-react";
import { getAssetUrl } from "@/lib/utils";

interface PartnerItem {
  id: string;
  src: string;
  alt: string;
  category: string;
}

const partnerLogos: PartnerItem[] = [
  { id: "ORG_01", src: getAssetUrl("/PrecastIndustry_Links/1.jpg"), alt: "ARHCA", category: "Roadbuilders & Heavy Civil" },
  { id: "ORG_02", src: getAssetUrl("/PrecastIndustry_Links/2.jpg"), alt: "American Concrete Pipe Assoc. (ACPA)", category: "Concrete Pipe & Precast" },
  { id: "ORG_03", src: getAssetUrl("/PrecastIndustry_Links/3.jpg"), alt: "American Concrete Institute (ACI)", category: "Concrete Standards & Codes" },
  { id: "ORG_04", src: getAssetUrl("/PrecastIndustry_Links/4.jpg"), alt: "ACEC Canada", category: "Consulting Engineering" },
  { id: "ORG_05", src: getAssetUrl("/PrecastIndustry_Links/5.jpg"), alt: "ASTM International", category: "Material Specifications" },
  { id: "ORG_06", src: getAssetUrl("/PrecastIndustry_Links/6.jpg"), alt: "BILD Calgary Region", category: "Building & Land Development" },
  { id: "ORG_07", src: getAssetUrl("/PrecastIndustry_Links/7.jpg"), alt: "British Precast (MPA)", category: "Precast Concrete Alliance" },
  { id: "ORG_08", src: getAssetUrl("/PrecastIndustry_Links/8.jpg"), alt: "Canadian Public Works Assoc. (CPWA)", category: "Municipal Public Works" },
  { id: "ORG_09", src: getAssetUrl("/PrecastIndustry_Links/9.jpg"), alt: "CPCI", category: "Precast & Prestressed Concrete" },
  { id: "ORG_10", src: getAssetUrl("/PrecastIndustry_Links/10.jpg"), alt: "CSA Group", category: "Standards & Certification" },
  { id: "ORG_11", src: getAssetUrl("/PrecastIndustry_Links/11.jpg"), alt: "Cement Association of Canada (CAC)", category: "Cement & Sustainable Concrete" },
  { id: "ORG_12", src: getAssetUrl("/PrecastIndustry_Links/12.jpg"), alt: "CATT at Waterloo", category: "Trenchless Technologies" },
  { id: "ORG_13", src: getAssetUrl("/PrecastIndustry_Links/13.jpg"), alt: "NASTT Northwest Chapter", category: "Trenchless Engineering" },
  { id: "ORG_14", src: getAssetUrl("/PrecastIndustry_Links/14.jpg"), alt: "Ontario Good Roads Assoc. (OGRA)", category: "Transportation & Civil" },
  { id: "ORG_15", src: getAssetUrl("/PrecastIndustry_Links/15.jpg"), alt: "OSWCA", category: "Sewer & Watermain Construction" },
  { id: "ORG_16", src: getAssetUrl("/PrecastIndustry_Links/16.jpg"), alt: "Rediscover Concrete", category: "Industry Initiative" },
  { id: "ORG_17", src: getAssetUrl("/PrecastIndustry_Links/17.jpg"), alt: "TUBÉCON", category: "Precast Pipe & Box Culverts" },
  { id: "ORG_18", src: getAssetUrl("/PrecastIndustry_Links/18.jpg"), alt: "Transportation Assoc. of Canada (TAC)", category: "Highway & Transit Standards" },
  { id: "ORG_19", src: getAssetUrl("/PrecastIndustry_Links/19.jpg"), alt: "UDI Pacific Region", category: "Urban Development" },
  { id: "ORG_20", src: getAssetUrl("/PrecastIndustry_Links/20.jpg"), alt: "WCWWA", category: "Water & Wastewater" },
];

export default function HexagonLogoShowcase() {
  const row1 = partnerLogos.slice(0, 10);
  const row2 = partnerLogos.slice(10, 20);

  return (
    <section className="w-full bg-white text-[#002f7a] py-8 md:py-10 overflow-hidden relative select-none border-t border-[#002f7a]/10">

      {/* CAD BLUEPRINT GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #002f7a 1px, transparent 1px), linear-gradient(to bottom, #002f7a 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="w-full relative z-10 space-y-6 md:space-y-8">

        {/* HEADER SECTION - CENTERED */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-2.5 px-6 md:px-10 border-b border-[#002f7a]/10 pb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-[#006def] text-xs font-black tracking-[0.2em] uppercase border-l-2 border-[#006def]">
            <Globe2 className="w-3.5 h-3.5 text-[#006def]" /> Industry Alliances
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#002f7a] tracking-tighter uppercase leading-none">
            PRECAST INDUSTRY <span className="text-[#006def]">& PARTNER NETWORK.</span>
          </h2>
          <p className="text-[#002f7a]/85 font-semibold text-sm md:text-base max-w-2xl leading-relaxed">
            Verified precast concrete manufacturers, engineering councils, testing institutes, and North American infrastructure authorities.
          </p>
        </div>

        {/* INFINITE TICKER MARQUEE - ROW 1 (LEFT TO RIGHT) */}
        <div className="relative w-full overflow-hidden py-1">
          <motion.div
            className="flex gap-4 min-w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
          >
            {[...row1, ...row1].map((logo, idx) => (
              <PartnerCard key={`row1-${idx}`} logo={logo} />
            ))}
          </motion.div>
        </div>

        {/* INFINITE TICKER MARQUEE - ROW 2 (RIGHT TO LEFT) */}
        <div className="relative w-full overflow-hidden py-1">
          <motion.div
            className="flex gap-4 min-w-max"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 38 }}
          >
            {[...row2, ...row2].map((logo, idx) => (
              <PartnerCard key={`row2-${idx}`} logo={logo} />
            ))}
          </motion.div>
        </div>

        {/* BOTTOM METRIC BADGES BAR */}
        <div className="w-full px-10 md:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 bg-slate-50/70 p-4 border border-[#002f7a]/15 rounded-sm shadow-xs text-center">
            <div className="space-y-0.5 flex flex-col items-center justify-center">
              <span className="text-[10px] font-mono font-bold text-[#006def] uppercase tracking-widest">Industry Links</span>
              <p className="text-lg md:text-xl font-black text-[#002f7a]">20+ Affiliations</p>
            </div>
            <div className="space-y-0.5 flex flex-col items-center justify-center">
              <span className="text-[10px] font-mono font-bold text-[#006def] uppercase tracking-widest">Precast Standards</span>
              <p className="text-lg md:text-xl font-black text-[#002f7a]">ACI, CPCI & ASTM</p>
            </div>
            <div className="space-y-0.5 flex flex-col items-center justify-center">
              <span className="text-[10px] font-mono font-bold text-[#006def] uppercase tracking-widest">Infrastructure</span>
              <p className="text-lg md:text-xl font-black text-[#002f7a]">DOT & Municipal</p>
            </div>
            <div className="space-y-0.5 flex flex-col items-center justify-center">
              <span className="text-[10px] font-mono font-bold text-[#006def] uppercase tracking-widest">Compliance</span>
              <p className="text-lg md:text-xl font-black text-[#002f7a]">North America Wide</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* PARTNER CARD COMPONENT */
function PartnerCard({ logo }: { logo: PartnerItem }) {
  return (
    <div className="group relative w-64 h-36 bg-white border border-[#002f7a]/15 hover:border-[#006def] shadow-xs hover:shadow-xl transition-all duration-300 rounded-sm overflow-hidden shrink-0 flex flex-col justify-between p-3.5 cursor-pointer">

      {/* TOP ACCENT LINE ON HOVER */}
      <div className="absolute top-0 left-0 w-0 h-1 bg-[#006def] group-hover:w-full transition-all duration-300 z-20" />

      {/* CARD TOP HEADER */}
      <div className="flex justify-between items-center text-[10px] font-mono font-bold">
        <span className="text-[#006def] bg-blue-50 px-1.5 py-0.5 border border-[#006def]/20 rounded-xs">
          {logo.id}
        </span>
        <span className="text-[#002f7a]/80 uppercase tracking-wider font-bold text-[9px] truncate max-w-[150px]">
          {logo.category}
        </span>
      </div>

      {/* LOGO IMAGE CONTAINER */}
      <div className="relative w-full h-14 my-1 flex items-center justify-center bg-slate-50/50 rounded-xs p-1">
        <Image
          src={getAssetUrl(logo.src)}
          alt={logo.alt}
          fill
          sizes="180px"
          className="object-contain p-1 group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* CARD FOOTER */}
      <div className="flex justify-center items-center gap-1.5 pt-2 border-t border-[#002f7a]/10 text-center">
        <span className="text-xs font-black text-[#002f7a] group-hover:text-[#006def] transition-colors truncate max-w-[200px]">
          {logo.alt}
        </span>
        <ShieldCheck className="w-3.5 h-3.5 text-[#006def] shrink-0" />
      </div>

    </div>
  );
}