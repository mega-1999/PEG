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
          className="fixed inset-0 z-[999] bg-[#001433] flex flex-col justify-between h-[100dvh] max-h-[100dvh] w-full overflow-hidden select-none"
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
          <header className="relative z-20 w-full px-4 sm:px-6 md:px-12 py-3 sm:py-4 flex items-center justify-between border-b border-white/10 bg-[#002f7a]/60 backdrop-blur-md shrink-0">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#006def] animate-ping shrink-0" />
              <div className="flex items-center gap-1.5 sm:gap-2 font-mono text-[11px] sm:text-xs font-black text-white uppercase tracking-wider sm:tracking-widest truncate">
                <Layers className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#006def] shrink-0" />
                <span className="truncate">Precast Engineering Group</span>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-4 shrink-0">
              <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-[#006def]/20 border border-[#006def]/40 text-[#006def] text-[10px] font-mono font-bold uppercase rounded-xs">
                <Radio className="w-3.5 h-3.5 animate-pulse" /> Live System
              </div>
              <button
                onClick={handleStart}
                className="px-3 sm:px-4 py-1 sm:py-1.5 bg-white/10 hover:bg-[#006def] text-white text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider border border-white/20 transition-all rounded-xs cursor-pointer shrink-0"
              >
                Skip Intro &rarr;
              </button>
            </div>
          </header>

          {/* 3. MAIN SPATIAL CANVAS: RESPONSIVE DEVICE VIEWPORT (ONLY 1 VIDEO SHOWN PER DEVICE BREAKPOINT) */}
          <main className="relative z-10 flex-1 w-full max-w-7xl mx-auto px-4 py-2 sm:py-4 md:py-6 flex flex-col items-center justify-center min-h-0 overflow-hidden">

            {/* 1. DESKTOP VIEWPORT: ONLY ON DESKTOP (lg:flex hidden) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="hidden lg:flex flex-col items-center justify-center w-full max-w-4xl max-h-[56vh]"
            >
              <div className="relative aspect-[16/10] w-full max-h-[56vh] overflow-hidden flex items-center justify-center">
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

            {/* 2. TABLET VIEWPORT: ONLY ON TABLET (hidden md:flex lg:hidden) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="hidden md:flex lg:hidden flex-col items-center justify-center w-full max-w-xl max-h-[52vh]"
            >
              <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full max-h-[52vh] overflow-hidden flex items-center justify-center">
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

            {/* 3. MOBILE VIEWPORT: ONLY ON MOBILE (flex md:hidden) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex md:hidden flex-col items-center justify-center w-full max-h-[52vh]"
            >
              <div className="relative aspect-[9/16] h-[46vh] max-h-[360px] max-w-[85vw] w-auto overflow-hidden flex items-center justify-center">
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

          </main>

          {/* 4. BOTTOM COMMAND HUD & ENTER PLATFORM BAR */}
          <footer className="relative z-20 w-full px-4 sm:px-6 md:px-12 py-3 sm:py-4 bg-[#002f7a]/90 border-t border-white/10 backdrop-blur-md shrink-0">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
              
              <div className="space-y-0.5 text-center sm:text-left">
                <div className="inline-flex items-center gap-1.5 text-white text-[11px] sm:text-xs font-black uppercase tracking-wider">
                  <Zap className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#006def]" /> Bridging Precasters &bull; Certified Architecture
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 text-[9.5px] sm:text-[11px] font-mono text-white/70">
                  <span>50 States PE</span>
                  <span>&bull;</span>
                  <span>AASHTO H-20 & HL-93</span>
                  <span>&bull;</span>
                  <span>NPCA Ready</span>
                </div>
              </div>

              {/* PROGRESS & INITIALIZATION BUTTON */}
              <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-4 w-full sm:w-auto">
                <div className="flex-1 sm:w-36 space-y-1">
                  <div className="flex justify-between font-mono text-[8.5px] sm:text-[9px] text-white/70 uppercase">
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
                    className="px-5 sm:px-8 py-2 sm:py-3 bg-[#006def] hover:bg-white text-white hover:text-[#002f7a] font-mono font-black text-[10.5px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] flex items-center justify-center gap-1.5 sm:gap-2 rounded-xs shadow-lg shadow-[#006def]/30 transition-all duration-300 cursor-pointer shrink-0"
                  >
                    <Power className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                    <span>Enter Platform</span>
                    <ArrowRight className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                  </motion.button>
                ) : (
                  <div className="px-4 sm:px-6 py-2 sm:py-3 bg-white/5 border border-white/10 text-center text-white/50 font-mono text-[10px] sm:text-xs uppercase tracking-wider flex items-center gap-1.5 sm:gap-2 rounded-xs shrink-0">
                    <ShieldCheck className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#006def] animate-pulse" />
                    <span>Connecting...</span>
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