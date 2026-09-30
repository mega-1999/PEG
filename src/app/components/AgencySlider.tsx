"use client";

import React from "react";
import Image from "next/image";
import { Building2, ShieldCheck, CheckCircle2 } from "lucide-react";
import { getAssetUrl } from "@/lib/utils";

export interface AgencyItem {
  src: string;
  name: string;
  category: string;
  badge: string;
}

const AGENCIES: AgencyItem[] = [
  { 
    src: "/agency-Logos/caltrans.webp", 
    name: "Caltrans", 
    category: "Dept of Transportation", 
    badge: "State DOT" 
  },
  { 
    src: "/agency-Logos/NDOTLogo.webp", 
    name: "Nevada DOT", 
    category: "Dept of Transportation", 
    badge: "State DOT" 
  },
  { 
    src: "/agency-Logos/la-dwp.webp", 
    name: "LA DWP", 
    category: "Water & Power", 
    badge: "Municipal Utility" 
  },
  { 
    src: "/agency-Logos/edison.webp", 
    name: "SoCal Edison", 
    category: "Power & Energy", 
    badge: "Power Grid" 
  },
  { 
    src: "/agency-Logos/nv-energy-1-1.webp", 
    name: "NV Energy", 
    category: "Electric Utility", 
    badge: "Energy Grid" 
  },
  { 
    src: "/agency-Logos/sdge.webp", 
    name: "SDG&E", 
    category: "Gas & Electric", 
    badge: "Regional Utility" 
  },
  { 
    src: "/agency-Logos/las-vegas-water-district-1.jpg", 
    name: "LV Water District", 
    category: "Water Authority", 
    badge: "Water & Sewer" 
  },
  { 
    src: "/agency-Logos/arizona-water-company.jpg", 
    name: "Arizona Water Co", 
    category: "Water Utility", 
    badge: "Water Authority" 
  },
  { 
    src: "/agency-Logos/smud.png", 
    name: "SMUD", 
    category: "Municipal Utility", 
    badge: "Electric Utility" 
  },
  { 
    src: "/agency-Logos/att.webp", 
    name: "AT&T", 
    category: "Telecom Network", 
    badge: "Telecom Standard" 
  },
  { 
    src: "/agency-Logos/verizon.jpg", 
    name: "Verizon", 
    category: "Communications", 
    badge: "Telecom Infrastructure" 
  },
];

export default function AgencySlider() {
  // Duplicate list to create seamless infinite loop animation
  const loopAgenciesRow1 = [...AGENCIES, ...AGENCIES, ...AGENCIES];
  const loopAgenciesRow2 = [...AGENCIES.slice(5), ...AGENCIES.slice(0, 5), ...AGENCIES, ...AGENCIES];

  return (
    <section className="relative w-full bg-white py-14 border-t border-[#004aad]/10 select-none overflow-hidden">
      
      {/* CAD WATERMARK BACKGROUND */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        style={{ 
          backgroundImage: `radial-gradient(#004aad 1.5px, transparent 1.5px), linear-gradient(to right, #004aad 0.5px, transparent 0.5px), linear-gradient(to bottom, #004aad 0.5px, transparent 0.5px)`,
          backgroundSize: '40px 40px, 200px 200px, 200px 200px'
        }} 
      />

      <div className="w-full px-6 md:px-16 lg:px-20 relative z-10 space-y-8">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-[#004aad]/10 pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1B79EE]/10 text-[#1B79EE] text-xs font-black tracking-[0.2em] uppercase border-l-2 border-[#1B79EE]">
              <Building2 className="w-3.5 h-3.5" /> Agency & Utility Approvals
            </div>
            <h2 className="text-2xl md:text-4xl font-black text-[#004aad] uppercase tracking-tight leading-tight">
              Approved & Specified <span className="text-[#1B79EE]">By Leading Agencies.</span>
            </h2>
          </div>

          <div className="flex items-center gap-2 text-[#004aad] text-xs font-mono font-bold bg-blue-50/70 px-4 py-2 border border-[#1B79EE]/20 shadow-xs">
            <ShieldCheck className="w-4 h-4 text-[#1B79EE]" />
            <span>DOT, Municipal & Utility Standard Compliant</span>
          </div>
        </div>

        {/* INFINITE SLIDING CARDS CONTAINER */}
        <div className="relative w-full overflow-hidden py-2 group/slider">
          
          {/* Gradient Edge Masks */}
          <div className="absolute top-0 left-0 bottom-0 w-16 md:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 right-0 bottom-0 w-16 md:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

          {/* SLIDER ROW 1 (Left Sliding) */}
          <div className="flex gap-4 w-max animate-marquee group-hover/slider:[animation-play-state:paused]">
            {loopAgenciesRow1.map((agency, idx) => (
              <div
                key={`row1-${agency.name}-${idx}`}
                className="w-[200px] sm:w-[230px] h-[90px] sm:h-[95px] bg-white border border-[#004aad]/15 hover:border-[#1B79EE] shadow-xs hover:shadow-md transition-all duration-200 p-3.5 flex items-center gap-3.5 shrink-0 group/card cursor-pointer"
              >
                {/* LOGO BOX */}
                <div className="relative w-14 h-14 bg-white border border-[#004aad]/10 p-1.5 flex items-center justify-center shrink-0 group-hover/card:scale-105 transition-transform">
                  <Image
                    src={getAssetUrl(agency.src)}
                    alt={agency.name}
                    fill
                    sizes="56px"
                    className="object-contain p-1"
                  />
                </div>

                {/* INFO */}
                <div className="flex-1 min-w-0">
                  <span className="text-[9px] font-mono font-black text-[#1B79EE] uppercase tracking-wider block truncate">
                    {agency.badge}
                  </span>
                  <h3 className="text-xs font-black text-[#004aad] uppercase tracking-tight truncate group-hover/card:text-[#1B79EE] transition-colors">
                    {agency.name}
                  </h3>
                  <p className="text-[10px] text-[#004aad]/70 font-semibold truncate mt-0.5">
                    {agency.category}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* SLIDER ROW 2 (Right Sliding - Reverse) */}
          <div className="flex gap-4 w-max mt-4 animate-marquee-reverse group-hover/slider:[animation-play-state:paused]">
            {loopAgenciesRow2.map((agency, idx) => (
              <div
                key={`row2-${agency.name}-${idx}`}
                className="w-[200px] sm:w-[230px] h-[90px] sm:h-[95px] bg-white border border-[#004aad]/15 hover:border-[#1B79EE] shadow-xs hover:shadow-md transition-all duration-200 p-3.5 flex items-center gap-3.5 shrink-0 group/card cursor-pointer"
              >
                {/* LOGO BOX */}
                <div className="relative w-14 h-14 bg-white border border-[#004aad]/10 p-1.5 flex items-center justify-center shrink-0 group-hover/card:scale-105 transition-transform">
                  <Image
                    src={getAssetUrl(agency.src)}
                    alt={agency.name}
                    fill
                    sizes="56px"
                    className="object-contain p-1"
                  />
                </div>

                {/* INFO */}
                <div className="flex-1 min-w-0">
                  <span className="text-[9px] font-mono font-black text-[#1B79EE] uppercase tracking-wider block truncate">
                    {agency.badge}
                  </span>
                  <h3 className="text-xs font-black text-[#004aad] uppercase tracking-tight truncate group-hover/card:text-[#1B79EE] transition-colors">
                    {agency.name}
                  </h3>
                  <p className="text-[10px] text-[#004aad]/70 font-semibold truncate mt-0.5">
                    {agency.category}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
}