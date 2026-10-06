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
    icon: <Monitor className="w-4 h-4" />,
    videoSrc: "https://pub-506b16bcde4f4fa8849e4eb8030acc3b.r2.dev/assets/video/Mockup/Precast_Engineering_Group_Desktop_Live_Mockup_1.mp4",
    tagline: "Parametric Structural Automation & Stamped Submittals",
    spec: "AASHTO H-20 / HL-93"
  },
  {
    id: "tablet",
    name: "Tablet & iPad Live",
    role: "Plant Floor QC & Stripping",
    badge: "PLANT QA/QC",
    icon: <Tablet className="w-4 h-4" />,
    videoSrc: "https://pub-506b16bcde4f4fa8849e4eb8030acc3b.r2.dev/assets/video/Mockup/Precast_Engineering_Group_I-pad_Live_Mockup_1.mp4",
    tagline: "Hydraulic Mold Telemetry & Digital Pour Verification",
    spec: "NPCA / PCI Ready"
  },
  {
    id: "mobile",
    name: "Mobile Companion",
    role: "Jobsite Dispatch & Verification",
    badge: "JOBSITE DISPATCH",
    icon: <Smartphone className="w-4 h-4" />,
    videoSrc: "https://pub-506b16bcde4f4fa8849e4eb8030acc3b.r2.dev/assets/video/Mockup/Precast_Engineering_Group_Mobile_Live_Mockup_1.mp4",
    tagline: "1-Tap Rigging Diagrams & Offline Field Inspection",
    spec: "iOS & Android Cloud"
  }
];

export default function EntrySystem() {
  const pathname = usePathname();
  const [isInitialized, setIsInitialized] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeDeviceId, setActiveDeviceId] = useState<string>("desktop");

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

  const activeMockup = mockupNodes.find(m => m.id === activeDeviceId) || mockupNodes[0];

  return (
    <AnimatePresence>
      {!isInitialized && (
        <motion.div
          exit={{ opacity: 0, scale: 1.02, transition: { duration: 0.35 } }}
          className="fixed inset-0 z-[999] bg-[#00183f] flex items-center justify-center p-3 sm:p-6 md:p-8 overflow-y-auto select-none backdrop-blur-md"
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
          <div className="absolute w-[500px] h-[500px] rounded-full bg-[#006def]/15 blur-[120px] pointer-events-none" />

          {/* MAIN MODAL CONTAINER */}
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="w-full max-w-4xl bg-[#002f7a] border border-white/20 rounded-sm shadow-[0_25px_80px_rgba(0,0,0,0.7)] relative z-10 overflow-hidden my-auto"
          >
            {/* TOP STATUS HEADER BAR */}
            <div className="bg-[#00183f] px-4 sm:px-6 py-3 border-b border-white/15 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#006def] animate-ping" />
                <div className="flex items-center gap-1.5 font-mono text-xs font-black text-white uppercase tracking-widest">
                  <Layers className="w-3.5 h-3.5 text-[#006def]" />
                  <span>PEG Digital Ecosystem</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 bg-[#006def]/20 border border-[#006def]/40 text-[#006def] text-[10px] font-mono font-bold uppercase rounded-xs">
                  <Radio className="w-3 h-3 text-[#006def] animate-pulse" /> Live Multi-Device Sync
                </span>
                <button
                  onClick={handleStart}
                  className="text-white/60 hover:text-white text-[11px] font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Skip Intro &rarr;
                </button>
              </div>
            </div>

            {/* MAIN CONTENT GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">

              {/* LEFT: 3-DEVICE MOCKUP PREVIEW SCREEN */}
              <div className="lg:col-span-7 p-4 sm:p-6 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 bg-[#001f54]/60">

                {/* DEVICE SELECTOR TABS */}
                <div className="grid grid-cols-3 gap-2 mb-3">
                  {mockupNodes.map((node) => {
                    const isSelected = activeDeviceId === node.id;
                    return (
                      <button
                        key={node.id}
                        onClick={() => setActiveDeviceId(node.id)}
                        className={`p-2 sm:p-2.5 flex flex-col items-center justify-center gap-1 rounded-xs border text-center transition-all cursor-pointer ${
                          isSelected
                            ? "bg-[#006def] text-white border-[#006def] shadow-md shadow-[#006def]/20"
                            : "bg-[#002f7a]/80 text-white/80 border-white/15 hover:border-[#006def]/50 hover:bg-[#002f7a]"
                        }`}
                      >
                        <div className="flex items-center gap-1.5">
                          {node.icon}
                          <span className="text-[10px] sm:text-[11px] font-mono font-black uppercase tracking-wider truncate">
                            {node.id}
                          </span>
                        </div>
                        <span className={`text-[8px] font-mono font-bold uppercase truncate ${
                          isSelected ? "text-blue-100" : "text-white/50"
                        }`}>
                          {node.spec}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* ACTIVE VIDEO CONTAINER */}
                <div className="relative aspect-[16/10] sm:aspect-video w-full bg-slate-950 border border-white/20 rounded-xs overflow-hidden shadow-2xl flex items-center justify-center p-1 sm:p-2">
                  <video
                    key={activeMockup.videoSrc}
                    src={getAssetUrl(activeMockup.videoSrc)}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    suppressHydrationWarning
                    className="w-full h-full object-contain"
                  >
                    <source src={getAssetUrl(activeMockup.videoSrc)} type="video/mp4" />
                  </video>

                  {/* VIDEO CORNER BADGE */}
                  <div className="absolute top-2 left-2 z-10">
                    <span className="px-2 py-0.5 bg-black/80 backdrop-blur-xs text-white text-[9px] font-mono font-black uppercase tracking-wider rounded-xs border border-white/20 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {activeMockup.badge}
                    </span>
                  </div>

                  {/* BOTTOM TELEMETRY OVERLAY */}
                  <div className="absolute bottom-2 right-2 z-10">
                    <span className="px-2 py-0.5 bg-[#002f7a]/90 backdrop-blur-xs text-white text-[9px] font-mono font-bold uppercase tracking-wider rounded-xs border border-[#006def]/50">
                      {activeMockup.spec}
                    </span>
                  </div>
                </div>

                {/* ACTIVE CAPABILITY SUMMARY */}
                <div className="pt-3 space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-white text-xs sm:text-sm font-black uppercase tracking-wide">
                      {activeMockup.name}
                    </h4>
                    <span className="text-[10px] font-mono font-bold text-[#006def] uppercase">
                      {activeMockup.role}
                    </span>
                  </div>
                  <p className="text-white/80 text-[11px] font-medium leading-relaxed">
                    {activeMockup.tagline}
                  </p>
                </div>

              </div>

              {/* RIGHT: PLATFORM INITIALIZATION & ENTRY SYSTEM */}
              <div className="lg:col-span-5 p-5 sm:p-6 flex flex-col justify-between space-y-5 bg-[#002f7a]">

                {/* PLATFORM HEADLINE */}
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#006def]/20 text-[#006def] text-[10px] font-mono font-black tracking-widest uppercase border-l-2 border-[#006def]">
                    <Zap className="w-3.5 h-3.5" /> Certified Precast Tech
                  </div>
                  <h2 className="text-white text-2xl sm:text-3xl font-black uppercase tracking-tight leading-tight">
                    Bridging <span className="text-[#006def]">Precasters.</span>
                  </h2>
                  <p className="text-white/80 text-xs font-medium leading-relaxed">
                    Access structural calculations, 3D CAD parametric automation, and 50-state PE stamped engineering solutions.
                  </p>
                </div>

                {/* 3 CORE PILLARS OVERVIEW */}
                <div className="space-y-2 pt-1 border-t border-white/10">
                  <div className="flex items-center gap-2 text-white/90 text-xs font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#006def] shrink-0" />
                    <span>AASHTO H-20 / HL-93 Certified Calcs</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/90 text-xs font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#006def] shrink-0" />
                    <span>50-State PE Stamped Shop Drawings</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/90 text-xs font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#006def] shrink-0" />
                    <span>NPCA & PCI Quality Assurance Ready</span>
                  </div>
                </div>

                {/* PROGRESS & INITIALIZATION HUD */}
                <div className="space-y-3 pt-2 border-t border-white/10">
                  <div className="flex justify-between font-mono text-[10px] text-white/70 uppercase tracking-widest font-bold">
                    <span className="flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5 text-[#006def] animate-pulse" />
                      {progress < 100 ? "Syncing Platform Nodes..." : "Authorization Confirmed"}
                    </span>
                    <span className="text-[#006def] font-black">{progress}%</span>
                  </div>

                  {/* PROGRESS BAR */}
                  <div className="h-1.5 w-full bg-white/10 relative overflow-hidden rounded-full">
                    <motion.div
                      className="absolute top-0 left-0 h-full bg-linear-to-r from-blue-400 via-[#006def] to-cyan-400"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ ease: "easeOut" }}
                    />
                  </div>

                  {/* ENTER PLATFORM ACTION BUTTON */}
                  <div className="pt-1">
                    {progress === 100 ? (
                      <motion.button
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        onClick={handleStart}
                        className="group relative w-full py-3.5 bg-[#006def] hover:bg-white text-white hover:text-[#002f7a] transition-all duration-300 font-mono font-black text-xs uppercase tracking-[0.25em] flex items-center justify-center gap-2.5 rounded-xs shadow-lg shadow-[#006def]/30 cursor-pointer"
                      >
                        <Power className="w-4 h-4 transition-transform group-hover:scale-110" />
                        <span>Enter Platform</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    ) : (
                      <div className="w-full py-3.5 bg-white/5 border border-white/10 text-center text-white/50 font-mono text-[11px] uppercase tracking-widest flex items-center justify-center gap-2 rounded-xs">
                        <ShieldCheck className="w-4 h-4 text-[#006def] animate-pulse" />
                        <span>Loading Certified Nodes...</span>
                      </div>
                    )}
                  </div>
                </div>

              </div>

            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}