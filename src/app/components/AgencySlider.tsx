"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { getAssetUrl } from "@/lib/utils";

export interface AgencyItem {
  src: string;
  alt: string;
  size?: string;
  x?: string;
  y?: string;
  delay?: number;
  duration?: number;
}

const AGENCY_LOGOS: AgencyItem[] = [
  { src: "/agency-Logos/NDOTLogo.webp", alt: "NDOT Logo", size: "w-28 h-28 md:w-36 md:h-36", x: "left-[5%]", y: "top-[10%]", delay: 0.1, duration: 4 },
  { src: "/agency-Logos/arizona-water-company.jpg", alt: "Arizona Water Company", size: "w-20 h-20 md:w-24 md:h-24", x: "left-[25%]", y: "top-[25%]", delay: 0.3, duration: 5 },
  { src: "/agency-Logos/att.webp", alt: "AT&T", size: "w-24 h-24 md:w-32 md:h-32", x: "left-[12%]", y: "bottom-[15%]", delay: 0.2, duration: 4.5 },
  { src: "/agency-Logos/caltrans.webp", alt: "CalTrans", size: "w-32 h-32 md:w-44 md:h-44", x: "left-[40%]", y: "top-[5%]", delay: 0.4, duration: 6 },
  { src: "/agency-Logos/edison.webp", alt: "Edison", size: "w-20 h-20 md:w-28 md:h-28", x: "right-[42%]", y: "bottom-[10%]", delay: 0.15, duration: 3.8 },
  { src: "/agency-Logos/la-dwp.webp", alt: "LA DWP", size: "w-28 h-28 md:w-36 md:h-36", x: "right-[28%]", y: "top-[20%]", delay: 0.5, duration: 5.2 },
  { src: "/agency-Logos/las-vegas-water-district-1.jpg", alt: "Las Vegas Water District", size: "w-20 h-20 md:w-24 md:h-24", x: "left-[32%]", y: "bottom-[30%]", delay: 0.25, duration: 4.2 },
  { src: "/agency-Logos/nv-energy-1-1.webp", alt: "NV Energy", size: "w-28 h-28 md:w-40 md:h-40", x: "right-[10%]", y: "top-[8%]", delay: 0.35, duration: 5.8 },
  { src: "/agency-Logos/sdge.webp", alt: "SDGE", size: "w-24 h-24 md:w-32 md:h-32", x: "right-[15%]", y: "bottom-[20%]", delay: 0.45, duration: 4.7 },
  { src: "/agency-Logos/smud.png", alt: "SMUD", size: "w-20 h-20 md:w-26 md:h-26", x: "right-[30%]", y: "bottom-[40%]", delay: 0.12, duration: 3.5 },
  { src: "/agency-Logos/verizon.jpg", alt: "Verizon", size: "w-24 h-24 md:w-32 md:h-32", x: "left-[55%]", y: "top-[35%]", delay: 0.55, duration: 4.9 },
];

const ALPHABET = [
  "ALL", "#", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", 
  "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

export default function ExtraordinaryAgencyCluster() {
  const [selectedLetter, setSelectedLetter] = useState<string>("ALL");

  // Helper to extract clean first letter for matching
  const getFirstChar = (name: string): string => {
    const cleaned = name.trim().toUpperCase();
    if (!cleaned) return "#";
    const first = cleaned[0];
    return /[A-Z]/.test(first) ? first : "#";
  };

  // Compute agency counts per letter tab
  const letterCounts = useMemo(() => {
    const counts: Record<string, number> = { ALL: AGENCY_LOGOS.length, "#": 0 };
    ALPHABET.slice(2).forEach((char) => {
      counts[char] = 0;
    });

    AGENCY_LOGOS.forEach((logo) => {
      const char = getFirstChar(logo.alt);
      if (counts[char] !== undefined) {
        counts[char] += 1;
      } else {
        counts["#"] += 1;
      }
    });

    return counts;
  }, []);

  // Filter agencies by selected letter
  const filteredAgencies = useMemo(() => {
    if (selectedLetter === "ALL") return AGENCY_LOGOS;

    if (selectedLetter === "#") {
      return AGENCY_LOGOS.filter((logo) => !/[A-Z]/.test(getFirstChar(logo.alt)));
    }

    return AGENCY_LOGOS.filter((logo) => getFirstChar(logo.alt) === selectedLetter);
  }, [selectedLetter]);

  return (
    <section className="relative w-full min-h-[90vh] md:min-h-screen bg-white overflow-hidden select-none py-12 md:py-16">
      
      {/* CAD BLUEPRINT GRID PATTERN BACKGROUND */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none" 
        style={{ 
          backgroundImage: `radial-gradient(#004aad 1.5px, transparent 1.5px), linear-gradient(to right, #004aad 0.5px, transparent 0.5px), linear-gradient(to bottom, #004aad 0.5px, transparent 0.5px)`,
          backgroundSize: '40px 40px, 200px 200px, 200px 200px'
        }} 
      />

      {/* BACKGROUND BRAND ACCENT RING */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] rounded-full border-2 border-dashed border-[#1B79EE]/10 pointer-events-none hidden md:block" />

      {/* A-Z ALPHABET SORT / FILTER TABS BAR (FULL LINE WITH HOVER COUNT TOOLTIPS) */}
      <div className="relative z-30 w-full px-10 md:px-20 mb-6">
        <div className="bg-white/90 backdrop-blur-md p-3 md:p-4 rounded-none border border-[#004aad]/10 shadow-[0_10px_30px_rgba(0,74,173,0.05)]">
          <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-1.5 w-full">
            {ALPHABET.map((char) => {
              const count = letterCounts[char] || 0;
              const isActive = selectedLetter === char;
              const hasItems = char === "ALL" || count > 0;

              return (
                <button
                  key={char}
                  onClick={() => setSelectedLetter(char)}
                  className={`
                    group relative px-2.5 sm:px-3 py-1.5 rounded-none text-xs md:text-sm font-black transition-all duration-200 flex items-center justify-center shrink-0
                    ${
                      isActive
                        ? "bg-[#004aad] text-white shadow-md shadow-[#004aad]/20 scale-105"
                        : hasItems
                        ? "text-[#004aad] hover:text-[#1B79EE] hover:bg-[#1B79EE]/10 bg-blue-50/50 border border-[#004aad]/10"
                        : "text-[#004aad]/30 hover:text-[#004aad]/50 bg-blue-50/20 border border-[#004aad]/5"
                    }
                  `}
                >
                  <span>{char}</span>

                  {/* FLOATING HOVER COUNT BADGE TOOLTIP */}
                  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 z-50 transform translate-y-1 group-hover:translate-y-0">
                    <div className="bg-[#004aad] text-white text-[10px] font-bold py-1 px-2.5 rounded-none shadow-xl whitespace-nowrap flex items-center gap-1 border border-[#1B79EE]/30">
                      <span className="text-white font-extrabold">{count}</span>
                      <span className="text-blue-100 text-[9px] uppercase font-medium">
                        {char === "ALL" ? "Total" : count === 1 ? "Agency" : "Agencies"}
                      </span>
                    </div>
                    <div className="w-1.5 h-1.5 bg-[#004aad] rotate-45 mx-auto -mt-1" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* CORE FRAMEWORK ELEMENT LAYER (ORIGINAL CLUSTER LAYOUT) */}
      <div className="w-full h-full min-h-[70vh] md:min-h-[80vh] relative px-6 md:px-10 mt-6 flex flex-wrap gap-6 justify-center md:block">
        
        {/* INTERLOCKING LOGO MATRIX NODES */}
        <AnimatePresence>
          {filteredAgencies.map((logo) => (
            <motion.div
              key={logo.alt}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -10, 0],
              }}
              exit={{ opacity: 0, scale: 0.4 }}
              viewport={{ once: true }}
              transition={{
                delay: logo.delay || 0.1,
                duration: 0.5,
                y: {
                  duration: logo.duration || 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                },
              }}
              style={{ originX: 0.5, originY: 0.5 }}
              className={`
                relative md:absolute ${logo.size || "w-28 h-28 md:w-36 md:h-36"} ${logo.x || ""} ${logo.y || ""}
                shrink-0 flex items-center justify-center p-4 rounded-full bg-white 
                border border-[#004aad]/10 shadow-[0_10px_30px_rgba(0,74,173,0.05)]
                hover:border-[#1B79EE] hover:shadow-[0_20px_50px_rgba(27,121,238,0.2)]
                transition-all duration-500 cursor-crosshair group z-10 hover:z-30
              `}
              title={logo.alt}
            >
              {/* INNER HIGH-TECH ENCLOSURE PROTOCOL */}
              <div className="relative w-full h-full rounded-full border border-dashed border-[#004aad]/5 group-hover:border-[#1B79EE]/30 transition-colors flex items-center justify-center p-3">
                <div className="relative w-full h-full transition-transform duration-500 ease-out group-hover:scale-110">
                  <Image
                    src={getAssetUrl(logo.src)}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100px, 200px"
                  />
                </div>
              </div>

              {/* NODE CONNECTION GRAPHICS (Only on Large Screens) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border border-[#1B79EE]/0 group-hover:border-[#1B79EE]/10 scale-70 group-hover:scale-100 transition-all duration-700 pointer-events-none rounded-full" />

              {/* HOVER AGENCY NAME TOOLTIP */}
              <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 z-50 transform translate-y-1 group-hover:translate-y-0">
                <div className="bg-[#004aad] text-white text-[11px] font-extrabold py-1.5 px-3 rounded-xl shadow-2xl whitespace-nowrap border border-[#1B79EE]/40 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1B79EE] animate-pulse" />
                  <span>{logo.alt}</span>
                </div>
                <div className="w-2 h-2 bg-[#004aad] rotate-45 mx-auto -mt-1 border-r border-b border-[#1B79EE]/40" />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}