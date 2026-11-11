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

function SituationTypewriter() {
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
    <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white flex items-center min-h-[1.2em]">
      <span>{currentText || "FOR ANY SITUATION"}</span>
      <span className="inline-block w-1.5 md:w-2 h-7 sm:h-10 md:h-12 bg-[#006def] ml-2 animate-pulse shadow-sm" />
    </h2>
  );
}

export default function PegHero() {
  return (
    <section className="relative w-full min-h-[78vh] flex flex-col justify-between bg-[#002f7a] text-white overflow-hidden select-none border-t border-white/10">

      {/* 1. TECHNICAL MATRIX DOT GRID OVERLAY */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none z-0"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1.2px, transparent 1.2px)`,
          backgroundSize: "32px 32px"
        }}
      />

      {/* 2. MAIN SPLIT CONTENT GRID */}
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-2 sm:py-4 md:py-6 z-10 flex-grow flex flex-col justify-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* LEFT COLUMN: HERO HEADLINE & ACTIONS (7 COLS) */}
          <div className="lg:col-span-7 space-y-6">

            {/* Top Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono font-bold tracking-widest uppercase text-white shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#006def] animate-ping" />
              <span className="text-blue-100">PRECAST ENGINEERING ON DEMAND</span>
            </motion.div>

            {/* Primary Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-1"
            >
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-[0.95] uppercase text-white">
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
              className="space-y-2 pt-1"
            >
              <div className="flex items-center gap-2 text-xs font-mono font-black uppercase tracking-[0.25em] text-[#006def]">
                <span>THE INFRASTRUCTURE STANDARD</span>
                <span className="text-white/40">&bull;&bull;&bull;&bull;&bull;</span>
              </div>
              <SituationTypewriter />
            </motion.div>

            {/* Subtext Quote & Description */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-white/90 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-2xl"
            >
              &ldquo;From municipal streets to international airport runways, we provide the vertical precision required for the world&apos;s toughest environments.&rdquo; Hire verified precast structural engineers for finite element modeling, CAD drafting, production formwork optimization, and 50-state PE/SE stamped submittals.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Link href="#contact">
                <Button className="bg-[#006def] hover:bg-white hover:text-[#002f7a] text-white h-12 px-8 rounded-none font-black tracking-wider transition-all duration-300 group shadow-xl uppercase text-xs cursor-pointer flex items-center gap-2">
                  <span>Initialize Proposal</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>

              <Link href="#services">
                <Button className="bg-white hover:bg-blue-50 text-[#002f7a] h-12 px-8 rounded-none font-black tracking-wider transition-all duration-300 shadow-xl uppercase text-xs cursor-pointer border border-white">
                  Capabilities & Portfolio
                </Button>
              </Link>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: 100% CRISP UNBLURRED VIDEO PLAYER (5 COLS) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative w-full aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 bg-white border-2 border-white/20 shadow-2xl overflow-hidden flex items-center justify-center"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              suppressHydrationWarning
              className="w-full h-full object-cover"
            >
              <source src={getAssetUrl("/assets/video/E20_V1_final.mp4")} type="video/mp4" />
            </video>


          </motion.div>

        </div>
      </div>

      {/* 3. BOTTOM METRICS & TELEMETRY RIBBON (PINNED FULL WIDTH) */}
      <div className="w-full border-t border-white/15 bg-[#002f7a] py-5 md:py-6 z-20">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 space-y-3">
          <div className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-white/70 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#006def] rounded-full animate-pulse" />
            <span>BUILT FOR PRECAST INFRASTRUCTURE &bull; FROM STRUCTURAL CALCULATION TO CASTING</span>
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
