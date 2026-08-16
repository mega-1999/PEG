"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Power, Activity, HardHat, Hammer } from 'lucide-react';

export default function EntrySystem() {
    const [isInitialized, setIsInitialized] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [progress, setProgress] = useState(0);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        if (progress < 100) {
            const timer = setTimeout(() => setProgress(prev => prev + 1), 30);
            return () => clearTimeout(timer);
        }
    }, [progress]);

    useEffect(() => {
        audioRef.current = new Audio('/assets/audio/background.mpeg');
        audioRef.current.loop = true;
    }, []);

    const handleStart = () => {
        setIsInitialized(true);
        if (audioRef.current) {
            audioRef.current.play();
            audioRef.current.volume = 0.4;
        }
    };

    const toggleMute = () => {
        if (audioRef.current) {
            audioRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <>
            <AnimatePresence>
                {!isInitialized && (
                    <motion.div
                        exit={{ opacity: 0, scale: 1.05 }}
                        className="fixed inset-0 z-[999] bg-[#004aad] flex items-center justify-center p-6 overflow-hidden"
                    >
                        {/* GLOBAL BACKGROUND GRID (Subtle) */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none" />

                        {/* CENTRAL INTERFACE CARD */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="w-full max-w-xl bg-[#004aad] border border-white/10 rounded-sm overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.5)]"
                        >
                            {/* TOP SECTION: VIDEO HEADER (Opacity 100) */}
                            <div className="relative w-full h-64 overflow-hidden border-b border-[#1B79EE]/30">
                                <video 
                                    autoPlay 
                                    loop 
                                    muted 
                                    playsInline
                                    className="absolute inset-0 w-full h-full object-cover"
                                >
                                    <source src="/assets/video/6029794_Lofoten Drone Ocean Sea_By_Kristian_Ozer_Kettner_Artlist_HD.mp4" type="video/mp4" />
                                </video> 
 
                            </div>

                            {/* BOTTOM SECTION: TELEMETRY & CONTROLS */}
                            <div className="p-10 space-y-8">
                                <div className="space-y-2">
                                    <h2 className="text-white text-xl font-black uppercase tracking-tighter leading-none">
                                        The site is under  <span className="text-[#1B79EE]">Progress</span>
                                    </h2>
                                    <div className="flex items-center gap-3">
                                        <Activity className="w-4 h-4 text-[#1B79EE] animate-pulse" />
                                        <p className="text-[#1B79EE] font-mono text-[9px] tracking-[0.4em] uppercase font-bold">
                                            {progress < 100 ? "Loading Infrastructure..." : "Ready for Deployment"}
                                        </p>
                                    </div>
                                </div>

                                {/* PROGRESS SYSTEM */}
                                <div className="w-full space-y-3">
                                    <div className="flex justify-between font-mono text-[9px] text-white/40 uppercase tracking-widest font-bold">
                                        <span>Sync Status</span>
                                        <span>{progress}%</span>
                                    </div>
                                    <div className="h-[2px] w-full bg-white/5 relative">
                                        <motion.div 
                                            className="absolute top-0 left-0 h-full bg-[#1B79EE]"
                                            initial={{ width: 0 }}
                                            animate={{ width: `${progress}%` }}
                                        />
                                    </div>
                                </div>

                                {/* ENTRY PROTOCOL BUTTON */}
                                <div className="h-20 flex items-center justify-center">
                                    {progress === 100 ? (
                                        <motion.button
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            onClick={handleStart}
                                            className="group relative w-full py-5 border border-[#1B79EE] bg-transparent transition-all overflow-hidden"
                                        >
                                            <div className="absolute inset-0 bg-[#1B79EE] -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                                            <span className="relative z-10 flex items-center justify-center gap-4 text-white font-black text-xs uppercase tracking-[0.5em]">
                                                <Power className="w-4 h-4" /> Enter Site
                                            </span>
                                        </motion.button>
                                    ) : (
                                        <div className="flex gap-6 opacity-30 grayscale">
                                            <Hammer className="w-5 h-5 text-white animate-bounce" />
                                            <HardHat className="w-5 h-5 text-white animate-bounce delay-150" />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* FLOATING AUDIO CONTROLLER */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={isInitialized ? { opacity: 1 } : {}}
                className="fixed top-0.5 right-4 z-[100] flex items-center"
            >
                <button
                    onClick={toggleMute}
                    className="p-3 text-white transition-colors"
                >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
            </motion.div>
        </>
    );
}