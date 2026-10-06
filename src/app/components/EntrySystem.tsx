"use client";

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Power,
  Activity,
  Layers,
  ShieldCheck,
  Monitor,
  Tablet,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  Zap,
  Radio
} from 'lucide-react';
import { getAssetUrl } from '@/lib/utils';

interface MockupNode {
  id: string;
  name: string;
  role: string;
  badge: string;
  icon: React.ReactNode;
  videoSrc: string;
  tagline: string;
  spec: string;
}

const mockupNodes: MockupNode[] = [
  {
    id: "desktop",
    name: "Desktop Workstation",
    role: "Engineering CAD & FEA",
    badge: "DESKTOP PORTAL",
    icon: <Monitor className="w-3.5 h-3.5" />,
    videoSrc: "https://pub-506b16bcde4f4fa8849e4eb8030acc3b.r2.dev/assets/video/Mockup/Precast_Engineering_Group_Desktop_Live_Mockup_1.mp4",
    tagline: "Parametric Structural Automation",
    spec: "AASHTO H-20 / HL-93"
  },
  {
    id: "tablet",
    name: "Tablet & iPad Live",
    role: "Plant Floor QC & Stripping",
    badge: "PLANT QA/QC",
    icon: <Tablet className="w-3.5 h-3.5" />,
    videoSrc: "https://pub-506b16bcde4f4fa8849e4eb8030acc3b.r2.dev/assets/video/Mockup/Precast_Engineering_Group_I-pad_Live_Mockup_1.mp4",
    tagline: "Hydraulic Mold & Pour Telemetry",
    spec: "NPCA / PCI Ready"
  },
  {
    id: "mobile",
    name: "Mobile Companion",
    role: "Jobsite Dispatch & Field",
    badge: "JOBSITE DISPATCH",
    icon: <Smartphone className="w-3.5 h-3.5" />,
    videoSrc: "https://pub-506b16bcde4f4fa8849e4eb8030acc3b.r2.dev/assets/video/Mockup/Precast_Engineering_Group_Mobile_Live_Mockup_1.mp4",
    tagline: "1-Tap Rigging Diagrams & QR",
    spec: "iOS & Android Cloud"
  }
];

export default function EntrySystem() {
  const pathname = usePathname();
  const [isInitialized, setIsInitialized] = useState(false);
  const [progress, setProgress] = useState(0);

  // Check session storage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hasSeen = sessionStorage.getItem("peg_entry_seen");
      if (hasSeen === "true") {
        setIsInitialized(true);
      }
    }
  }, []);

  // Initialization progress ticker
  useEffect(() => {
    if (progress < 100) {
      const timer = setTimeout(() => setProgress(prev => Math.min(prev + 2, 100)), 20);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  const handleStart = () => {
    setIsInitialized(true);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("peg_entry_seen", "true");
    }
  };

  // ONLY render EntrySystem on the Home Page ("/")
  if (pathname !== "/") {
    return null;
  }

  return (
    <AnimatePresence>
      {!isInitialized && (
        <motion.div
          exit={{ opacity: 0, scale: 1.02, transition: { duration: 0.35 } }}
          className="fixed inset-0 z-[999] bg-[#00183f] flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-y-auto select-none backdrop-blur-md"
        >
          {/* HIGH-TECH BLUEPRINT GRID BACKGROUND */}
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, #006def 1px, transparent 1px), linear-gradient(to bottom, #006def 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}
          />

          {/* GLOWING AMBIENT CORE */}
          <div className="absolute w-[600px] h-[600px] rounded-full bg-[#006def]/15 blur-[140px] pointer-events-none" />

          {/* MAIN MODAL CONTAINER */}
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="w-full max-w-6xl bg-[#002f7a] border border-white/20 rounded-sm shadow-[0_25px_80px_rgba(0,0,0,0.7)] relative z-10 overflow-hidden my-auto"
          >
            {/* TOP STATUS HEADER BAR */}
            <div className="bg-[#00183f] px-4 sm:px-6 py-2.5 border-b border-white/15 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#006def] animate-ping" />
                <div className="flex items-center gap-1.5 font-mono text-xs font-black text-white uppercase tracking-widest">
                  <Layers className="w-3.5 h-3.5 text-[#006def]" />
                  <span>PEG Digital Ecosystem</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#006def]/20 border border-[#006def]/40 text-[#006def] text-[10px] font-mono font-bold uppercase rounded-xs">
                  <Radio className="w-3 h-3 text-[#006def] animate-pulse" /> Live Multi-Device Video Stream
                </span>
                <button
                  onClick={handleStart}
                  className="text-white/60 hover:text-white text-[11px] font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Skip Intro &rarr;
                </button>
              </div>
            </div>

            {/* TITLE BAR */}
            <div className="px-5 sm:px-8 pt-4 pb-2 flex flex-col md:flex-row md:items-end justify-between gap-2 border-b border-white/10 bg-[#002868]">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#006def]/20 text-[#006def] text-[9px] font-mono font-black tracking-widest uppercase border-l-2 border-[#006def] mb-1">
                  <Zap className="w-3 h-3" /> Certified Precast Engineering Suite
                </div>
                <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight leading-tight">
                  Bridging <span className="text-[#006def]">Precasters.</span>
                </h2>
              </div>
              <p className="text-white/80 text-[11px] sm:text-xs font-medium max-w-md leading-relaxed">
                Autonomous multi-device workflow spanning office engineering, plant floor QA, and field jobsite dispatch.
              </p>
            </div>

            {/* ALL 3 VIDEOS SIMULTANEOUSLY PLAYING IN 3-COLUMN GRID */}
            <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 bg-[#001f54]/60">
              {mockupNodes.map((node) => (
                <div
                  key={node.id}
                  className="bg-[#002f7a] border border-white/15 hover:border-[#006def] transition-all rounded-xs overflow-hidden flex flex-col shadow-lg group relative"
                >
                  {/* TOP ACCENT LINE */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#006def] to-transparent" />

                  {/* VIDEO CARD HEADER */}
                  <div className="p-2.5 sm:p-3 bg-[#00183f]/90 border-b border-white/10 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="w-6 h-6 rounded-xs bg-[#006def]/20 text-[#006def] flex items-center justify-center shrink-0 border border-[#006def]/30">
                        {node.icon}
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-white text-[11px] sm:text-xs font-black uppercase tracking-wide truncate">
                          {node.name}
                        </h4>
                        <p className="text-[9px] font-mono text-[#006def] font-bold uppercase truncate">
                          {node.role}
                        </p>
                      </div>
                    </div>

                    <span className="px-1.5 py-0.5 bg-[#006def] text-white text-[8px] font-mono font-black uppercase tracking-wider rounded-xs shrink-0">
                      {node.badge}
                    </span>
                  </div>

                  {/* CONTINUOUS LIVE VIDEO PLAYER */}
                  <div className="relative aspect-[16/10] w-full bg-slate-950 flex items-center justify-center p-1 overflow-hidden">
                    <video
                      key={node.videoSrc}
                      src={getAssetUrl(node.videoSrc)}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      suppressHydrationWarning
                      className="w-full h-full object-contain"
                    >
                      <source src={getAssetUrl(node.videoSrc)} type="video/mp4" />
                    </video>

                    {/* LIVE STATUS INDICATOR */}
                    <div className="absolute top-2 left-2 z-10">
                      <span className="px-1.5 py-0.5 bg-black/80 backdrop-blur-xs text-white text-[8px] font-mono font-bold uppercase tracking-wider rounded-xs border border-white/20 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Live
                      </span>
                    </div>

                    {/* BOTTOM SPEC TAG */}
                    <div className="absolute bottom-2 right-2 z-10">
                      <span className="px-1.5 py-0.5 bg-[#002f7a]/90 backdrop-blur-xs text-white text-[8px] font-mono font-bold uppercase tracking-wider rounded-xs border border-[#006def]/50">
                        {node.spec}
                      </span>
                    </div>
                  </div>

                  {/* VIDEO FOOTER CAPABILITY */}
                  <div className="p-2.5 bg-[#002868] border-t border-white/10 mt-auto">
                    <p className="text-white/80 text-[10px] font-medium leading-tight line-clamp-2">
                      {node.tagline}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* BOTTOM HUD CONTROLS & ENTER BUTTON */}
            <div className="px-5 sm:px-8 py-3.5 bg-[#00183f] border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
              
              {/* PROGRESS SYSTEM */}
              <div className="w-full sm:max-w-md space-y-1.5">
                <div className="flex justify-between font-mono text-[9px] sm:text-[10px] text-white/70 uppercase tracking-widest font-bold">
                  <span className="flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-[#006def] animate-pulse" />
                    {progress < 100 ? "Syncing 3-Node Architecture..." : "All 3 Nodes Connected & Stamped"}
                  </span>
                  <span className="text-[#006def] font-black">{progress}%</span>
                </div>

                {/* PROGRESS BAR */}
                <div className="h-1.5 w-full bg-white/10 relative overflow-hidden rounded-full">
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-400 via-[#006def] to-cyan-400"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ ease: "easeOut" }}
                  />
                </div>
              </div>

              {/* ENTER BUTTON */}
              <div className="w-full sm:w-auto shrink-0">
                {progress === 100 ? (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    onClick={handleStart}
                    className="group relative w-full sm:w-auto px-8 py-2.5 bg-[#006def] hover:bg-white text-white hover:text-[#002f7a] transition-all duration-300 font-mono font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 rounded-xs shadow-lg shadow-[#006def]/30 cursor-pointer"
                  >
                    <Power className="w-4 h-4 transition-transform group-hover:scale-110" />
                    <span>Enter Platform</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                ) : (
                  <div className="px-6 py-2.5 bg-white/5 border border-white/10 text-center text-white/50 font-mono text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 rounded-xs">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#006def] animate-pulse" />
                    <span>Authorizing System...</span>
                  </div>
                )}
              </div>

            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}