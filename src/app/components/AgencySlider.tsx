"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Agency logos (public/agency-Logos)
const AGENCY_LOGOS = [
  { src: "/agency-Logos/NDOTLogo.webp", alt: "NDOT Logo" },
  { src: "/agency-Logos/arizona-water-company.jpg", alt: "Arizona Water Company" },
  { src: "/agency-Logos/att.webp", alt: "AT&T" },
  { src: "/agency-Logos/caltrans.webp", alt: "CalTrans" },
  { src: "/agency-Logos/edison.webp", alt: "Edison" },
  { src: "/agency-Logos/la-dwp.webp", alt: "LA DWP" },
  { src: "/agency-Logos/las-vegas-water-district-1.jpg", alt: "Las Vegas Water District" },
  { src: "/agency-Logos/nv-energy-1-1.webp", alt: "NV Energy" },
  { src: "/agency-Logos/sdge.webp", alt: "SDGE" },
  { src: "/agency-Logos/smud.png", alt: "SMUD" },
  { src: "/agency-Logos/verizon.jpg", alt: "Verizon" },
];

export default function FullWidthAgencySlider() {
  return (
    /* Cleaned out neutral background to match your strict theme palette */
    <section className="relative w-full bg-white overflow-x-hidden select-none py-16 md:py-24">
      
      {/* INTEGRATED ARCHITECTURAL GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[size:40px_40px]" />

      {/* 1. HEADER: FULL WIDTH WITH PADDING */}
      <div className="w-full px-10 md:px-20 mb-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#004aad]/10 pb-10"
        >
          <div className="space-y-2">
            <p className="text-5xl md:text-7xl font-black text-[#004aad] tracking-tighter leading-none">
              AGENCY <span style={{ WebkitTextStroke: "1.5px #1B79EE", color: "transparent" }}>STANDARDS</span>
            </p>
          </div>
        </motion.div>
      </div>

      {/* 2. THE SLIDER: EDGE-TO-EDGE WITH SYMMETRICAL CARDS */}
      <div className="relative flex flex-col gap-6 w-full relative z-10">
        
        {/* Row 1: Sliding Left */}
        <div className="relative w-full flex overflow-hidden group">
          {/* Edge Fading Masks over Pure White background */}
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 35, // Optimized speed for seamless reading
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex flex-nowrap whitespace-nowrap gap-6 pr-6"
          >
            {[...AGENCY_LOGOS, ...AGENCY_LOGOS].map((logo, idx) => (
              <div
                key={`left-${idx}`}
                className="flex items-center justify-center shrink-0 py-4"
              >
                {/* WHITE CARD CONTAINER: Forces identical size, alignment, and hover lift */}
                <div className="relative w-24 h-24 bg-white rounded-full flex items-center justify-center p-4 border border-[#004aad]/10 shadow-sm transition-all duration-300 hover:scale-110 hover:border-[#1B79EE] hover:shadow-md cursor-crosshair group/inner">
                  <div className="relative w-full h-full">
                    <Image 
                      src={logo.src} 
                      alt={logo.alt} 
                      fill 
                      className="object-contain transition-transform duration-300 group-hover/inner:scale-110" 
                    />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Sliding Right */}
        <div className="relative w-full flex overflow-hidden group">
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              duration: 40,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex flex-nowrap whitespace-nowrap gap-6 pr-6"
          >
            {[...AGENCY_LOGOS, ...AGENCY_LOGOS].reverse().map((logo, idx) => (
              <div
                key={`right-${idx}`}
                className="flex items-center justify-center shrink-0 py-4"
              >
                {/* MATCHING WHITE CARD CONTAINER */}
                <div className="relative w-24 h-24 bg-white rounded-full flex items-center justify-center p-4 border border-[#004aad]/10 shadow-sm transition-all duration-300 hover:scale-110 hover:border-[#1B79EE] hover:shadow-md cursor-crosshair group/inner">
                  <div className="relative w-full h-full">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      className="object-contain transition-transform duration-300 group-hover/inner:scale-110"
                    />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
}