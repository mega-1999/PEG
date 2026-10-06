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
    <section className="relative w-full bg-white py-8 md:py-16 border-t border-[#002f7a]/10 select-none overflow-hidden">

      {/* CAD WATERMARK BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#002f7a 1.5px, transparent 1.5px), linear-gradient(to right, #002f7a 0.5px, transparent 0.5px), linear-gradient(to bottom, #002f7a 0.5px, transparent 0.5px)`,
          backgroundSize: '40px 40px, 200px 200px, 200px 200px'
        }}
      />

      <div className="w-full px-10 md:px-20 relative z-10">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-[#002f7a]/10 pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#006def]/10 text-[#006def] text-xs font-black tracking-[0.2em] uppercase border-l-2 border-[#006def]">
              <Building2 className="w-3.5 h-3.5" /> Agency & Utility Approvals
            </div>
            <h2 className="text-2xl md:text-4xl font-black text-[#002f7a] uppercase tracking-tight leading-tight">
              Get Approved & Specified <span className="text-[#006def]">By Leading Agencies.</span>
            </h2>
          </div>

          <div className="flex items-center gap-2 text-[#002f7a] text-xs font-mono font-bold bg-blue-50/70 px-4 py-2 border border-[#006def]/20 shadow-xs">
            <ShieldCheck className="w-4 h-4 text-[#006def]" />
            <span>DOT, Municipal & Utility Standard Compliant</span>
          </div>
        </div>

        {/* INFINITE SLIDING CARDS CONTAINER */}
        <div className="relative w-full overflow-hidden py-2 group/slider">

          {/* Gradient Edge Masks */}
          <div className="absolute top-0 left-0 bottom-0 w-16 md:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 right-0 bottom-0 w-16 md:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

          {/* SLIDER ROW 1 (Left Sliding) */}
          <div className="flex gap-3 w-max animate-marquee group-hover/slider:[animation-play-state:paused]">
            {loopAgenciesRow1.map((agency, idx) => (
              <div
                key={`row1-${agency.name}-${idx}`}
                className="w-[170px] sm:w-[195px] h-[64px] sm:h-[68px] bg-white border border-[#002f7a]/15 hover:border-[#006def] shadow-xs hover:shadow-md transition-all duration-200 p-2.5 flex items-center gap-2.5 shrink-0 group/card cursor-pointer"
              >
                {/* LEFT LOGO ICON */}
                <div className="relative w-11 h-11 sm:w-12 sm:h-12 bg-white border border-[#002f7a]/10 p-1 flex items-center justify-center shrink-0 group-hover/card:scale-105 transition-transform">
                  <Image
                    src={getAssetUrl(agency.src)}
                    alt={agency.name}
                    fill
                    sizes="48px"
                    className="object-contain p-0.5"
                  />
                </div>

                {/* RIGHT TEXT CONTENT */}
                <div className="flex-1 min-w-0 flex flex-col justify-center">
                  <span className="text-[8px] font-mono font-black text-[#006def] uppercase tracking-wider block truncate leading-none mb-0.5">
                    {agency.badge}
                  </span>
                  <h3 className="text-[11px] sm:text-xs font-black text-[#002f7a] uppercase tracking-tight truncate leading-tight group-hover/card:text-[#006def] transition-colors">
                    {agency.name}
                  </h3>
                  <p className="text-[9px] text-[#002f7a]/70 font-semibold truncate leading-tight mt-0.5">
                    {agency.category}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* SLIDER ROW 2 (Right Sliding - Reverse) */}
          <div className="flex gap-3 w-max mt-3 animate-marquee-reverse group-hover/slider:[animation-play-state:paused]">
            {loopAgenciesRow2.map((agency, idx) => (
              <div
                key={`row2-${agency.name}-${idx}`}
                className="w-[170px] sm:w-[195px] h-[64px] sm:h-[68px] bg-white border border-[#002f7a]/15 hover:border-[#006def] shadow-xs hover:shadow-md transition-all duration-200 p-2.5 flex items-center gap-2.5 shrink-0 group/card cursor-pointer"
              >
                {/* LEFT LOGO ICON */}
                <div className="relative w-11 h-11 sm:w-12 sm:h-12 bg-white border border-[#002f7a]/10 p-1 flex items-center justify-center shrink-0 group-hover/card:scale-105 transition-transform">
                  <Image
                    src={getAssetUrl(agency.src)}
                    alt={agency.name}
                    fill
                    sizes="48px"
                    className="object-contain p-0.5"
                  />
                </div>

                {/* RIGHT TEXT CONTENT */}
                <div className="flex-1 min-w-0 flex flex-col justify-center">
                  <span className="text-[8px] font-mono font-black text-[#006def] uppercase tracking-wider block truncate leading-none mb-0.5">
                    {agency.badge}
                  </span>
                  <h3 className="text-[11px] sm:text-xs font-black text-[#002f7a] uppercase tracking-tight truncate leading-tight group-hover/card:text-[#006def] transition-colors">
                    {agency.name}
                  </h3>
                  <p className="text-[9px] text-[#002f7a]/70 font-semibold truncate leading-tight mt-0.5">
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