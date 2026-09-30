"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Ruler, HardHat } from "lucide-react";

// --- Typing Outline Hook ---
const TypingOutline = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const letters = Array.from(text);
  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.05, delayChildren: delay } },
      }}
      className="flex flex-wrap justify-center"
    >
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: { opacity: 1, y: 0 },
          }}
          className="inline-block"
          // PEG Light Blue used for the outline
          style={{
            WebkitTextStroke: "2px #1B79EE",
            color: "transparent",
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default function PegHero() {
  return (
    <section className="relative min-h-screen w-full px-10 md:px-20 py-16 bg-[#F5F5F5] flex flex-col justify-center items-center overflow-hidden font-sans select-none">

      {/* Background: Engineering Matrix Grid (Subtle) */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: `radial-gradient(#004aad 1.5px, transparent 1.5px)`, backgroundSize: '40px 40px' }} />

      <div className="w-full flex flex-col items-center text-center z-10">

        {/* Top Floating Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#004aad] text-white px-6 py-2 mb-10 flex items-center gap-3 shadow-lg"
        >
          <HardHat className="w-4 h-4 text-[#1B79EE]" />
          <span className="text-[10px] font-black tracking-[0.5em] uppercase">
            The Infrastructure Standard
          </span>
        </motion.div>

        <div className="flex flex-col items-center leading-[0.85] mb-8 uppercase text-center">

          {/* Row 1: PEG Dark Blue (Solid) */}
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-black text-[#004aad] tracking-tighter"
          >
            PRECAST
          </motion.h1>

          {/* Row 2: PEG Light Blue (Typing Outline) 
          Using your TypingOutline component for the core service
      */}
          <div className="text-3xl md:text-5xl font-black tracking-tighter mt-2">
            <TypingOutline text="ENGINEERS" delay={0.6} />
          </div>

          {/* Row 3: The "By the Hour" Accent 
          We use a slightly smaller, stretched font style for that premium B2B look
      */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-[#1B79EE] text-2xl md:text-4xl font-black tracking-[0.2em] mt-4 italic"
          >
            BY THE HOUR.
          </motion.div>

          {/* Row 4: Solid Dark Blue Conclusion */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="text-[#004aad] text-3xl md:text-5xl font-black tracking-tight mt-6"
          >
            FOR ANY SITUATION.
          </motion.div>

        </div>

        {/* Professional Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="max-w-2xl text-[#1B79EE] italic text-lg md:text-xl font-medium leading-relaxed mt-4"
        >
          "From municipal streets to international airport runways,
          we provide the vertical precision required for the world's toughest environments."
        </motion.p>

        {/* Actions using PEG Palette */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.4 }}
          className="flex flex-col sm:flex-row gap-5 mt-14 w-full max-w-lg"
        >
          {/* Primary Button: Dark Blue */}
          <Button className="flex-1 bg-[#004aad] hover:bg-[#1B79EE] text-white rounded-none font-black tracking-[0.2em] transition-all duration-500 group shadow-xl">
            INITIALIZE PROPOSAL
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-3" />
          </Button>

          {/* Secondary Button: Outline Dark Blue */}
          <Button variant="outline" className="flex-1 border-2 border-[#004aad] bg-transparent text-[#004aad] rounded-none font-black tracking-[0.2em] hover:bg-[#004aad] hover:text-white transition-all duration-500 uppercase">
            <Ruler className="mr-2 w-5 h-5" />
            CAPABILITIES
          </Button>
        </motion.div>
      </div>

 
    </section>
  );
}