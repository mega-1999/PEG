"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const AGENCY_LOGOS = [
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

export default function ExtraordinaryAgencyCluster() {
  return (
    <section className="relative w-full min-h-[90vh] md:min-h-screen bg-white overflow-hidden select-none py-16 md:py-24">
      
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

      {/* CORE FRAMEWORK ELEMENT LAYER */}
      <div className="w-full h-full min-h-[70vh] md:min-h-[80vh] relative max-w-[1700px] mx-auto px-6 md:px-10 mt-12 flex flex-wrap gap-6 justify-center md:block">
        
        {/* INTERLOCKING LOGO MATRIX NODES */}
        {AGENCY_LOGOS.map((logo, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: logo.delay, duration: 0.6 }}
            // Infinite subtle organic hover float animation
            animate={{
              y: [0, -10, 0],
            }}
            style={{ originX: 0.5, originY: 0.5 }}
            className={`
              relative md:absolute ${logo.size} ${logo.x} ${logo.y}
              shrink-0 flex items-center justify-center p-4 rounded-full bg-white 
              border border-[#004aad]/10 shadow-[0_10px_30px_rgba(0,74,173,0.05)]
              hover:border-[#1B79EE] hover:shadow-[0_20px_50px_rgba(27,121,238,0.2)]
              transition-all duration-500 cursor-crosshair group z-10 hover:z-30
            `}
            // Dynamic subtle speeds for organic complexity
            css-duration={`${logo.duration}s`} 
          >
            {/* INNER HIGH-TECH ENCLOSURE PROTOCOL */}
            <div className="relative w-full h-full rounded-full border border-dashed border-[#004aad]/5 group-hover:border-[#1B79EE]/30 transition-colors flex items-center justify-center p-3">
              <div className="relative w-full h-full transition-transform duration-500 ease-out group-hover:scale-110">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100px, 200px"
                />
              </div>
            </div>

            {/* NODE CONNECTION GRAPHICS (Only on Large Screens) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border border-[#1B79EE]/0 group-hover:border-[#1B79EE]/10 scale-70 group-hover:scale-100 transition-all duration-700 pointer-events-none rounded-full" />
          </motion.div>
        ))}

        {/* STATIC CENTERPIECE OVERLAY HUB */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center justify-center pointer-events-none text-center bg-white/80 backdrop-blur-md p-10 rounded-full border border-[#004aad]/5 shadow-2xl z-20 w-80 h-80">
          <p className="text-[10px] font-black tracking-[0.5em] text-[#1B79EE] uppercase mb-2">System Approvals</p>
          <h2 className="text-4xl font-black text-[#004aad] tracking-tighter uppercase leading-[0.9]">
            Agency <br /> Standards.
          </h2>
          <div className="w-8 h-0.5 bg-[#1B79EE] mt-4" />
        </div>

      </div>
    </section>
  );
}