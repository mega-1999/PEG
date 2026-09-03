"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const sponsorLogos = [
    { src: "/assets/sponsor/NEPCA.JPG", alt: "Sponsor 01" },
    { src: "/assets/sponsor/njpca.jpg", alt: "Sponsor 02" },
    { src: "/assets/sponsor/pcany.jpg", alt: "Sponsor 03" },
    { src: "/assets/sponsor/pcav.jpg", alt: "Sponsor 04" },
    { src: "/assets/sponsor/pcma.png", alt: "Sponsor 05" },
    { src: "/assets/sponsor/ppa.JPG", alt: "Sponsor 06" },
];

export default function SponsorMarquee() {
    // Triple the array to guarantee zero gaps during long animations
    const infiniteLogos = [...sponsorLogos, ...sponsorLogos, ...sponsorLogos];

    return (
        <section className="w-full bg-white py-4 border-t border-b border-[#004aad]/10 overflow-hidden select-none">
            <div className="">

                {/* STRUCTURAL ENGINEERING HEADER */}
                <div className="flex flex-col items-center text-center mb-12 px-6">
                    <h2 className="text-xl md:text-3xl font-black text-[#004aad] uppercase tracking-tighter leading-none">
                        Proudly Supporting <span className="text-[#1B79EE]">& Sponsoring</span>
                    </h2>
                    <div className="w-12 h-1 bg-[#1B79EE] mt-4" />
                </div>

                {/* MARQUEE RUNWAY WRAPPER */}
                <div className="relative w-full overflow-hidden flex items-center h-24">

                    {/* High-density gradient masks for clean entry and exit fading */}
                    <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                    {/* INFINITE LOOP RUNWAY */}
                    <motion.div
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            duration: 25, // Adjust speed here (higher number = slower speed)
                            ease: "linear",
                            repeat: Infinity,
                        }}
                        className="flex items-center w-max   whitespace-nowrap will-change-transform"
                    >
                        {infiniteLogos.map((logo, i) => (
                            <div
                                key={i}
                                className="shrink-0 flex items-center justify-center transition-all duration-300"
                            >
                                {/* Fixed structural wrapper keeping all logo scales unified */}
                                <div className="relative w-36 h-16 opacity-100 transition-all duration-500 cursor-crosshair">
                                    <Image
                                        src={logo.src}
                                        alt={logo.alt}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}