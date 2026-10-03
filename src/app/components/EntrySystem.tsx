"use client";

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Power, Activity, Layers, ShieldCheck } from 'lucide-react';
import { getAssetUrl } from '@/lib/utils';

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

    useEffect(() => {
        if (progress < 100) {
            const timer = setTimeout(() => setProgress(prev => prev + 1), 25);
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
                    exit={{ opacity: 0, scale: 1.02 }}
                    className="fixed inset-0 z-[999] bg-[#002f7a] flex items-center justify-center p-6 overflow-hidden select-none"
                >
                    {/* GLOBAL BACKGROUND GRID */}
                    <div
                        className="absolute inset-0 opacity-[0.04] pointer-events-none"
                        style={{
                            backgroundImage: `radial-gradient(#006def 1.5px, transparent 1.5px), linear-gradient(to right, #006def 0.5px, transparent 0.5px), linear-gradient(to bottom, #006def 0.5px, transparent 0.5px)`,
                            backgroundSize: '40px 40px, 200px 200px, 200px 200px'
                        }}
                    />

                    {/* CENTRAL INTERFACE CARD */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="w-full max-w-xl bg-[#002f7a] border border-white/15 rounded-none overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.6)]"
                    >
                        {/* TOP SECTION: VIDEO HEADER */}
                        <div className="relative w-full h-64 overflow-hidden border-b border-[#006def]/30">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                preload="auto"
                                suppressHydrationWarning
                                className="absolute inset-0 w-full h-full object-cover"
                            >
                                <source src={getAssetUrl("/assets/video/6029794_Lofoten_Drone_Ocean_Sea_By_Kristian_Ozer_Kettner_Artlist_HD.mp4")} type="video/mp4" />
                            </video>
                        </div>

                        {/* BOTTOM SECTION: TELEMETRY & CONTROLS */}
                        <div className="p-8 md:p-10 space-y-6">
                            <div className="space-y-2">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#006def]/20 text-white text-[10px] font-mono font-black tracking-[0.2em] uppercase border-l-2 border-[#006def]">
                                    <Layers className="w-3.5 h-3.5" /> Precast Engineering Group
                                </div>
                                <h2 className="text-white text-2xl md:text-3xl font-black uppercase tracking-tight leading-tight">
                                    Bridging <span className="text-[#006def]">Precasters.</span>
                                </h2>
                                <div className="flex items-center gap-2.5 pt-1">
                                    <Activity className="w-4 h-4 text-[#006def] animate-pulse" />
                                    <p className="text-white/80 font-mono text-[10px] tracking-[0.2em] uppercase font-bold">
                                        {progress < 100 ? "Connecting Global Engineering Nodes..." : "Network Ready &bull; Authorization Confirmed"}
                                    </p>
                                </div>
                            </div>

                            {/* PROGRESS SYSTEM */}
                            <div className="w-full space-y-2 pt-2">
                                <div className="flex justify-between font-mono text-[10px] text-white/60 uppercase tracking-widest font-bold">
                                    <span>Initialization Status</span>
                                    <span className="text-[#006def]">{progress}%</span>
                                </div>
                                <div className="h-[3px] w-full bg-white/10 relative overflow-hidden">
                                    <motion.div
                                        className="absolute top-0 left-0 h-full bg-[#006def]"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${progress}%` }}
                                    />
                                </div>
                            </div>

                            {/* ENTRY PROTOCOL BUTTON */}
                            <div className="pt-2">
                                {progress === 100 ? (
                                    <motion.button
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        onClick={handleStart}
                                        className="group relative w-full py-4 border-2 border-[#006def] bg-[#006def] hover:bg-[#002f7a] transition-all overflow-hidden cursor-pointer shadow-lg"
                                    >
                                        <span className="relative z-10 flex items-center justify-center gap-3 text-white font-black text-xs font-mono uppercase tracking-[0.3em]">
                                            <Power className="w-4 h-4 text-white group-hover:text-[#006def] transition-colors" /> Enter Platform
                                        </span>
                                    </motion.button>
                                ) : (
                                    <div className="w-full py-4 bg-white/5 border border-white/10 text-center text-white/40 font-mono text-xs uppercase tracking-widest flex items-center justify-center gap-2">
                                        <ShieldCheck className="w-4 h-4 text-[#006def] animate-pulse" />
                                        <span>Synchronizing Precast Vault...</span>
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