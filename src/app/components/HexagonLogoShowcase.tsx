"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const partnerLogos = [
  { id: "NODE_01", src: "/PrecastIndustry%20Links/1.jpg", alt: "PEG Precasters" },
  { id: "NODE_02", src: "/PrecastIndustry%20Links/2.jpg", alt: "Precast Engineering" },
  { id: "NODE_03", src: "/PrecastIndustry%20Links/3.jpg", alt: "P-Xchange" },
  { id: "NODE_04", src: "/PrecastIndustry%20Links/4.jpg", alt: "Total Tech Solutions" },
  { id: "NODE_05", src: "/PrecastIndustry%20Links/5.jpg", alt: "Trench Unlimited" },
  { id: "NODE_06", src: "/PrecastIndustry%20Links/6.jpg", alt: "Alternative Alliance" },
  { id: "NODE_07", src: "/PrecastIndustry%20Links/7.jpg", alt: "Global Mold Tech" },
  { id: "NODE_08", src: "/PrecastIndustry%20Links/8.jpg", alt: "Parametric Vault" },
  { id: "NODE_09", src: "/PrecastIndustry%20Links/9.jpg", alt: "Grid Infrastructure" },
  { id: "NODE_10", src: "/PrecastIndustry%20Links/10.jpg", alt: "Hydro Systems" },
  { id: "NODE_11", src: "/PrecastIndustry%20Links/11.jpg", alt: "PEG Precasters" },
  { id: "NODE_12", src: "/PrecastIndustry%20Links/12.jpg", alt: "Precast Engineering" },
  { id: "NODE_13", src: "/PrecastIndustry%20Links/13.jpg", alt: "P-Xchange" },
  { id: "NODE_14", src: "/PrecastIndustry%20Links/14.jpg", alt: "Total Tech Solutions" },
  { id: "NODE_15", src: "/PrecastIndustry%20Links/15.jpg", alt: "Trench Unlimited" },
  { id: "NODE_16", src: "/PrecastIndustry%20Links/16.jpg", alt: "Alternative Alliance" },
  { id: "NODE_17", src: "/PrecastIndustry%20Links/17.jpg", alt: "Global Mold Tech" },
  { id: "NODE_18", src: "/PrecastIndustry%20Links/18.jpg", alt: "Parametric Vault" },
  { id: "NODE_19", src: "/PrecastIndustry%20Links/19.jpg", alt: "Grid Infrastructure" },
  { id: "NODE_20", src: "/PrecastIndustry%20Links/20.jpg", alt: "Hydro Systems" },
];

export default function HexagonLogoShowcase() {
  return (
    <section className="w-full bg-[#004aad] text-white py-16 md:py-32 overflow-hidden relative font-sans">
      {/* INTEGRATED ARCHITECTURAL GRID */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:40px_40px]" />

      <div className="w-full relative z-10 space-y-12 md:space-y-16">
        {/* HEADER SPECIFICATION */}
        <div className="text-center max-w-2xl mx-auto space-y-4 px-6">
          <div className="w-12 h-1 bg-[#1B79EE] mx-auto" />
          <h2 className="text-xl md:text-3xl font-black uppercase tracking-tighter leading-none">
            Global Ecosystem <br />
            <span className="text-white">& Partner Alliances.</span>
          </h2>
          <p className="text-white font-mono text-[9px] md:text-[10px] tracking-[0.4em] uppercase font-bold">
            Verified Precast Integration Nodes
          </p>
        </div>

        {/* EDGE-TO-EDGE HONEYCOMB MATRIX (Strictly 2 lines) */}
        <div className="flex flex-col items-center justify-center gap-1 w-full overflow-x-auto no-scrollbar py-4 px-4">
          
          {/* LINE 1 - First 10 items spanning edge-to-edge */}
          <div className="flex flex-row gap-1 md:gap-1.5 min-w-max justify-center">
            {partnerLogos.slice(0, 10).map((logo, idx) => (
              <HexagonNode
                key={`r1-${logo.id}`}
                logo={logo}
                delay={idx * 0.04}
              />
            ))}
          </div>

          {/* LINE 2 - Last 10 items offset horizontally for interlocking honeycomb design */}
          <div className="flex flex-row gap-1 md:gap-1.5 min-w-max justify-center translate-x-10 md:translate-x-14 lg:translate-x-16">
            {partnerLogos.slice(10, 20).map((logo, idx) => (
              <HexagonNode
                key={`r2-${logo.id}`}
                logo={logo}
                delay={idx * 0.04}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

/* HEXAGON COMPONENT MODULE */
function HexagonNode({
  logo,
  delay,
}: {
  logo: { src: string; alt: string; id: string };
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      whileHover={{ scale: 1.18, zIndex: 50 }}
      className="group relative w-20 h-24 sm:w-24 sm:h-28 md:w-28 md:h-32 lg:w-32 lg:h-36 shrink-0 cursor-crosshair filter drop-shadow-sm md:drop-shadow-md"
    >
      {/* SOLID WHITE EXTERIOR CONTAINER */}
      <div
        className="absolute inset-0 bg-white transition-all duration-300 flex items-center justify-center p-2.5 sm:p-3 md:p-4 shadow-inner"
        style={{
          clipPath:
            "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        }}
      >
        {/* LOGO IMAGE BOUNDARY WITH SHARP INTERIOR SCALE EFFECT */}
        <div className="relative w-full h-full max-w-[75%] max-h-[75%] transition-transform duration-500 ease-out group-hover:scale-125">
          <Image
            src={logo.src}
            alt={logo.alt}
            fill
            className="object-contain p-0.5 transition-all duration-300"
          />
        </div>

        {/* SUBTLE INNER TECH ACCENT BORDER */}
        <div
          className="absolute inset-[1px] md:inset-[2px] pointer-events-none border border-[#004aad]/5 group-hover:border-white/20 transition-colors"
          style={{
            clipPath:
              "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          }}
        />
      </div>
    </motion.div>
  );
}