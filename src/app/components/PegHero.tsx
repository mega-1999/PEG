"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { getAssetUrl } from "@/lib/utils";

const typingSituations = [
  "FOR ANY SITUATION",
  "FULL-TIME",
  "AFTER HOURS",
  "BY THE TASK",
  "BY PROJECT",
  "TO A TIMELINE",
  "PART-TIME",
  "ON HOLIDAYS",
  "ON-CALL"
];

const telemetryStats = [
  { val: "50+", label: "States & Canadian Provinces" },
  { val: "100+ YR", label: "Design Life Standards" },
  { val: "AASHTO", label: "ASTM & CSA Certified" },
  { val: "0", label: "Submittal Regressions" }
];

export default function PegHero() {
  const [currentText, setCurrentText] = useState("");
  const [situationIdx, setSituationIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = typingSituations[situationIdx];
    let timer: NodeJS.Timeout;

    if (!isDeleting && currentText === fullText) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setSituationIdx((prev) => (prev + 1) % typingSituations.length);
    } else {
      const speed = isDeleting ? 40 : 80;
      timer = setTimeout(() => {
        if (!isDeleting) {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        } else {
          setCurrentText(fullText.slice(0, currentText.length - 1));
        }
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, situationIdx]);

  return (
    <section className="relative w-full min-h-[92vh] flex flex-col justify-between text-white overflow-hidden select-none border-t border-[#002f7a]/20">

      {/* 1. BACKGROUND VIDEO LAYER */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={getAssetUrl("/assets/video/E20_V1_final.mp4")} type="video/mp4" />
      </video>

      {/* 2. DEEP BLUE BRAND GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#002f7a]/95 via-[#002f7a]/85 to-[#002f7a]/65 z-10" />

      {/* 3. TECHNICAL MATRIX DOT GRID OVERLAY */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none z-10"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: "36px 36px"
        }}
      />
 

      {/* MAIN HERO CONTENT */}
      <div className="w-full px-10 md:px-20 pt-20 pb-12 z-20 flex-grow flex flex-col justify-center">
        <div className="max-w-5xl space-y-6">

          {/* Top Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-mono font-bold tracking-widest uppercase text-white shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#006def] animate-ping" />
            <span>PRECAST ENGINEERING ON DEMAND</span>
          </motion.div>

          {/* Primary Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-1"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-[0.95] uppercase">
              Precast Engineers, <br />
              <span className="text-[#006def]">By The Hour.</span>
            </h1>
          </motion.div>

          {/* Sub-label & Animated Typewriter Headline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="space-y-2 pt-2"
          >
            <div className="flex items-center gap-2 text-[11px] font-mono font-black uppercase tracking-[0.25em] text-white">
              <span>THE INFRASTRUCTURE STANDARD</span>
              <span className="text-white">&bull;&bull;&bull;&bull;&bull;</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white flex items-center min-h-[1.2em]">
              <span>{currentText || "FOR ANY SITUATION"}</span>
              <span className="inline-block w-1 md:w-1.5 h-7 sm:h-10 md:h-12 bg-[#006def] ml-2 animate-pulse" />
            </h2>
          </motion.div>

          {/* Subtext Quote & Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-white/90 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-3xl pt-1"
          >
            &ldquo;From municipal streets to international airport runways, we provide the vertical precision required for the world&apos;s toughest environments.&rdquo; Hire verified precast structural engineers for finite element modeling, CAD drafting, production formwork optimization, and 50-state PE/SE stamped submittals.
          </motion.p>
  
          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <Link href="#contact">
              <Button className="bg-[#006def] hover:bg-white hover:text-[#002f7a] text-white h-13 px-8 rounded-md font-black tracking-wider transition-all duration-300 group shadow-xl uppercase text-xs cursor-pointer flex items-center gap-2">
                <span>Initialize Proposal</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>

            <Link href="#services">
              <Button className="bg-white hover:bg-white/90 text-[#002f7a] h-13 px-8 rounded-md font-black tracking-wider transition-all duration-300 shadow-xl uppercase text-xs cursor-pointer">
                Capabilities & Portfolio
              </Button>
            </Link>
          </motion.div>

        </div>
      </div>

      {/* 4. BOTTOM METRICS & TELEMETRY RIBBON */}
      <div className="w-full border-t border-white/15 bg-black/20 backdrop-blur-md px-10 md:px-20 py-6 z-20">
        <div className="w-full space-y-4">
          <div className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-white/70">
            BUILT FOR PRECAST INFRASTRUCTURE &bull; FROM STRUCTURAL CALCULATION TO CASTING
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {telemetryStats.map((stat, i) => (
              <div key={i} className="border-l-2 border-[#006def] pl-4 space-y-0.5">
                <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  {stat.val}
                </div>
                <div className="text-xs text-white/75 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
