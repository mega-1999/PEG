"use client";

import React, { useState, useEffect, useRef } from 'react';
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
  Radio,
  Maximize2
} from 'lucide-react';
import { getAssetUrl } from '@/lib/utils';

export default function EntrySystem() {
  const pathname = usePathname();
  const [isInitialized, setIsInitialized] = useState(false);
  const [progress, setProgress] = useState(0);

  const bgVideoRef = useRef<HTMLVideoElement>(null);
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const tabletVideoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);

  // Check session storage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hasSeen = sessionStorage.getItem("peg_entry_seen");
      if (hasSeen === "true") {
        setIsInitialized(true);
      }
    }
  }, []);

  // Guarantee automatic playback and infinite looping on all video elements
  useEffect(() => {
    const videoRefs = [bgVideoRef, desktopVideoRef, tabletVideoRef, mobileVideoRef];
    
    const ensurePlayback = () => {
      videoRefs.forEach(ref => {
        const video = ref.current;
        if (video) {
          video.muted = true;
          video.defaultMuted = true;
          video.playsInline = true;
          video.loop = true;
          if (video.paused) {
            video.play().catch(() => {});
          }
        }
      });
    };

    // Initial trigger
    ensurePlayback();

    // Re-verify on document visibility change (e.g. user switching tabs)
    const handleVisibility = () => {
      if (document.visibilityState === 'visible') {
        ensurePlayback();
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    // Continuous interval watchdog to ensure seamless infinite looping without stalling
    const interval = setInterval(ensurePlayback, 1200);

    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [isInitialized]);

  // Handler for video events to ensure loop continuity
  const handleVideoSetup = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const video = e.currentTarget;
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.loop = true;
    video.play().catch(() => {});
  };

  const handleVideoEnded = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const video = e.currentTarget;
    video.currentTime = 0;
    video.play().catch(() => {});
  };

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
          exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.4 } }}
          className="fixed inset-0 z-[999] bg-[#001433] flex flex-col justify-between overflow-x-hidden overflow-y-auto select-none"
        >
          {/* 1. CINEMATIC BRIDGE / OCEAN DRONE VIDEO BACKGROUND LAYER */}
          <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            <video
              ref={bgVideoRef}
              src={getAssetUrl("/assets/video/6029794_Lofoten_Drone_Ocean_Sea_By_Kristian_Ozer_Kettner_Artlist_HD.mp4")}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              onCanPlay={handleVideoSetup}
              onLoadedMetadata={handleVideoSetup}
              onEnded={handleVideoEnded}
              suppressHydrationWarning
              className="absolute inset-0 w-full h-full object-cover scale-100"
            >
              <source
                src={getAssetUrl("/assets/video/6029794_Lofoten_Drone_Ocean_Sea_By_Kristian_Ozer_Kettner_Artlist_HD.mp4")}
                type="video/mp4"
              />
            </video>

            {/* LIGHT TRANSLUCENT BLUEPRINT TINT - ENSURES FULL BRIDGE VISIBILITY */}
            <div className="absolute inset-0 bg-[#002f7a]/30" />
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `linear-gradient(to right, #006def 1px, transparent 1px), linear-gradient(to bottom, #006def 1px, transparent 1px)`,
                backgroundSize: '60px 60px'
              }}
            />
            {/* SUBTLE VIGNETTE AT EDGES ONLY */}
            <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/60" />
          </div>

          {/* 2. TOP HUD BAR */}
          <header className="relative z-20 w-full px-6 md:px-12 py-4 flex items-center justify-between border-b border-white/10 bg-[#002f7a]/60 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#006def] animate-ping" />
              <div className="flex items-center gap-2 font-mono text-xs font-black text-white uppercase tracking-widest">
                <Layers className="w-4 h-4 text-[#006def]" />
                <span>Precast Engineering Group</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-[#006def]/20 border border-[#006def]/40 text-[#006def] text-[10px] font-mono font-bold uppercase rounded-xs">
                <Radio className="w-3.5 h-3.5 animate-pulse" /> Live Multi-Stream Matrix
              </div>
              <button
                onClick={handleStart}
                className="px-4 py-1.5 bg-white/10 hover:bg-[#006def] text-white text-xs font-mono font-bold uppercase tracking-wider border border-white/20 transition-all rounded-xs cursor-pointer"
              >
                Skip Intro &rarr;
              </button>
            </div>
          </header>

          {/* 3. MAIN SPATIAL CANVAS: 3 STANDALONE STRATEGIC DEVICE MOCKUPS */}
          <main className="relative z-10 flex-1 w-full max-w-[1600px] mx-auto p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-center">

            {/* SECTION SUB-HEADER */}
            <div className="text-center mb-6 space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white text-[11px] font-mono font-bold tracking-[0.2em] uppercase border-l-2 border-[#006def]">
                <span>Connected Multi-Device Ecosystem</span>
                <span className="text-white/40">&bull;</span>
                <span className="text-[#006def]">Live Submittal Pipeline</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
                One Engineering Source &bull; Three Strategic Viewports
              </h2>
            </div>

            {/* 3 STRATEGIC STANDALONE MOCKUP STATIONS - COMPLETELY UNBOXED */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center justify-items-center">

              {/* STRATEGIC PLACE 01: STANDALONE DESKTOP WORKSTATION (5 COLS) - NO BOX */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="md:col-span-5 w-full flex flex-col items-center justify-center"
              >
                {/* Standalone Desktop Mockup (Pure Video, No Box) */}
                <div className="relative aspect-[16/10] w-full overflow-hidden flex items-center justify-center">
                  <video
                    ref={desktopVideoRef}
                    src="https://pub-506b16bcde4f4fa8849e4eb8030acc3b.r2.dev/assets/video/Mockup/Precast_Engineering_Group_Desktop_Live_Mockup_1.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    onCanPlay={handleVideoSetup}
                    onLoadedMetadata={handleVideoSetup}
                    onEnded={handleVideoEnded}
                    suppressHydrationWarning
                    className="w-full h-full object-contain drop-shadow-2xl"
                  >
                    <source
                      src="https://pub-506b16bcde4f4fa8849e4eb8030acc3b.r2.dev/assets/video/Mockup/Precast_Engineering_Group_Desktop_Live_Mockup_1.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </motion.div>

              {/* STRATEGIC PLACE 02: STANDALONE IPAD & TABLET (4 COLS) - NO BOX */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="md:col-span-4 w-full flex flex-col items-center justify-center"
              >
                {/* Standalone iPad Mockup (Pure Video, No Box) */}
                <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden flex items-center justify-center">
                  <video
                    ref={tabletVideoRef}
                    src="https://pub-506b16bcde4f4fa8849e4eb8030acc3b.r2.dev/assets/video/Mockup/Precast_Engineering_Group_I-pad_Live_Mockup_1.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    onCanPlay={handleVideoSetup}
                    onLoadedMetadata={handleVideoSetup}
                    onEnded={handleVideoEnded}
                    suppressHydrationWarning
                    className="w-full h-full object-contain drop-shadow-2xl"
                  >
                    <source
                      src="https://pub-506b16bcde4f4fa8849e4eb8030acc3b.r2.dev/assets/video/Mockup/Precast_Engineering_Group_I-pad_Live_Mockup_1.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </motion.div>

              {/* STRATEGIC PLACE 03: STANDALONE MOBILE COMPANION (3 COLS) - NO BOX */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="md:col-span-3 w-full flex flex-col items-center justify-center"
              >
                {/* Standalone Mobile Mockup (Pure Video, No Box) */}
                <div className="relative aspect-[9/16] w-40 sm:w-48 overflow-hidden flex items-center justify-center">
                  <video
                    ref={mobileVideoRef}
                    src="https://pub-506b16bcde4f4fa8849e4eb8030acc3b.r2.dev/assets/video/Mockup/Precast_Engineering_Group_Mobile_Live_Mockup_1.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    onCanPlay={handleVideoSetup}
                    onLoadedMetadata={handleVideoSetup}
                    onEnded={handleVideoEnded}
                    suppressHydrationWarning
                    className="w-full h-full object-contain drop-shadow-2xl"
                  >
                    <source
                      src="https://pub-506b16bcde4f4fa8849e4eb8030acc3b.r2.dev/assets/video/Mockup/Precast_Engineering_Group_Mobile_Live_Mockup_1.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </motion.div>

            </div>

          </main>

          {/* 4. BOTTOM COMMAND HUD & ENTER PLATFORM BAR */}
          <footer className="relative z-20 w-full px-6 md:px-12 py-4 bg-[#002f7a]/90 border-t border-white/10 backdrop-blur-md">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
              
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 text-white text-xs font-black uppercase tracking-wider">
                  <Zap className="w-3.5 h-3.5 text-[#006def]" /> Bridging Precasters &bull; Certified Multi-Platform Architecture
                </div>
                <div className="flex items-center gap-4 text-[11px] font-mono text-white/70">
                  <span>50 States PE Stamped</span>
                  <span>&bull;</span>
                  <span>AASHTO H-20 & HL-93</span>
                  <span>&bull;</span>
                  <span>NPCA & PCI Ready</span>
                </div>
              </div>

              {/* PROGRESS & INITIALIZATION BUTTON */}
              <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="w-40 space-y-1">
                  <div className="flex justify-between font-mono text-[9px] text-white/70 uppercase">
                    <span>Syncing Nodes</span>
                    <span className="text-[#006def] font-bold">{progress}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-400 via-[#006def] to-cyan-400"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ ease: "easeOut" }}
                    />
                  </div>
                </div>

                {progress === 100 ? (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    onClick={handleStart}
                    className="px-8 py-3 bg-[#006def] hover:bg-white text-white hover:text-[#002f7a] font-mono font-black text-xs uppercase tracking-[0.25em] flex items-center justify-center gap-2 rounded-xs shadow-lg shadow-[#006def]/30 transition-all duration-300 cursor-pointer"
                  >
                    <Power className="w-4 h-4" />
                    <span>Enter Platform</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.button>
                ) : (
                  <div className="px-6 py-3 bg-white/5 border border-white/10 text-center text-white/50 font-mono text-xs uppercase tracking-wider flex items-center gap-2 rounded-xs">
                    <ShieldCheck className="w-4 h-4 text-[#006def] animate-pulse" />
                    <span>Connecting Ecosystem...</span>
                  </div>
                )}
              </div>

            </div>
          </footer>

        </motion.div>
      )}
    </AnimatePresence>
  );
}