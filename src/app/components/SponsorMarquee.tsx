"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { getAssetUrl } from '@/lib/utils';

const sponsorLogos = [
    { src: getAssetUrl("/assets/sponsor/NEPCA.JPG"), alt: "Sponsor 01" },
    { src: getAssetUrl("/assets/sponsor/njpca.jpg"), alt: "Sponsor 02" },
    { src: getAssetUrl("/assets/sponsor/pcany.jpg"), alt: "Sponsor 03" },
    { src: getAssetUrl("/assets/sponsor/pcav.jpg"), alt: "Sponsor 04" },
    { src: getAssetUrl("/assets/sponsor/pcma.png"), alt: "Sponsor 05" },
    { src: getAssetUrl("/assets/sponsor/ppa.JPG"), alt: "Sponsor 06" },
];

export default function SponsorMarquee() {
    // 4x duplication ensures -50% translation aligns perfectly for a seamless infinite loop
    const infiniteLogos = [...sponsorLogos, ...sponsorLogos, ...sponsorLogos, ...sponsorLogos];

    return (
        <section className="w-full bg-white py-10 md:py-14 border-t border-b border-[#002f7a]/10 overflow-hidden select-none">
            <div className="w-full">

                {/* STRUCTURAL ENGINEERING HEADER */}
                <div className="flex flex-col items-center text-center mb-4 px-6">
                    <h2 className="text-xl md:text-3xl font-black text-[#002f7a] uppercase tracking-tighter leading-none">
                        Proudly Supporting <span className="text-[#006def]">& Sponsoring</span>
                    </h2>
                    <div className="w-12 h-1 bg-[#006def] mt-2" />
                </div>

                {/* MARQUEE RUNWAY WRAPPER */}
                <div className="relative w-full overflow-hidden flex items-center h-20 md:h-24">

                    {/* High-density gradient masks for clean entry and exit fading */}
                    <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                    {/* INFINITE LOOP RUNWAY */}
                    <motion.div
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            duration: 35,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                        className="flex items-center w-max gap-3 md:gap-4 whitespace-nowrap will-change-transform"
                    >
                        {infiniteLogos.map((logo, i) => (
                            <div
                                key={i}
                                className="shrink-0 flex items-center justify-center transition-all duration-300 px-1.5"
                            >
                                {/* Refined logo wrapper with balanced proportions */}
                                <div className="relative w-28 md:w-36 h-14 md:h-18 opacity-95 hover:opacity-100 transition-all duration-300">
                                    <Image
                                        src={logo.src}
                                        alt={logo.alt}
                                        fill
                                        sizes="(max-width: 768px) 112px, 144px"
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