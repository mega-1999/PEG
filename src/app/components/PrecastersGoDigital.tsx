"use client";

import React from 'react';
import { getAssetUrl } from '@/lib/utils';

const mockups = [
  {
    id: "desktop",
    name: "Desktop Workstation",
    role: "Engineering Office & CAD Center",
    videoSrc: "https://pub-506b16bcde4f4fa8849e4eb8030acc3b.r2.dev/assets/video/Mockup/Precast_Engineering_Group_Desktop_Live_Mockup_1.mp4",
  },
  {
    id: "tablet",
    name: "Tablet & iPad Live",
    role: "Plant Floor & QA/QC",
    videoSrc: "https://pub-506b16bcde4f4fa8849e4eb8030acc3b.r2.dev/assets/video/Mockup/Precast_Engineering_Group_I-pad_Live_Mockup_1.mp4",
  },
  {
    id: "mobile",
    name: "Mobile Companion",
    role: "Field Dispatch & Jobsite",
    videoSrc: "https://pub-506b16bcde4f4fa8849e4eb8030acc3b.r2.dev/assets/video/Mockup/Precast_Engineering_Group_Mobile_Live_Mockup_1.mp4",
  }
];

export default function PrecastersGoDigital() {
  return (
    <section className="w-full bg-white py-8 sm:py-10 md:py-12 lg:py-16 overflow-hidden select-none border-t border-[#002f7a]/10">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-[#006def] text-xs font-black tracking-[0.2em] uppercase border-l-2 border-[#006def] mb-3">
            Digital Multi-Device Ecosystem
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#002f7a] tracking-tighter uppercase leading-none">
            Precasters <span className="text-[#006def]">Go Digital.</span>
          </h2>
          <p className="text-[#002f7a]/80 font-semibold text-sm md:text-base mt-3 leading-relaxed">
            Unified digital workflows connecting engineering workstations, plant tablets, and field mobile devices.
          </p>
        </div>

        {/* 3 MOCKUPS BY THEMSELVES - NO BOXES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 items-center">
          {mockups.map((mockup) => (
            <div key={mockup.id} className="flex flex-col items-center">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-square lg:aspect-[4/3] flex items-center justify-center">
                <video
                  src={getAssetUrl(mockup.videoSrc)}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  suppressHydrationWarning
                  className="w-full h-full object-contain"
                >
                  <source src={getAssetUrl(mockup.videoSrc)} type="video/mp4" />
                </video>
              </div>
              <div className="text-center mt-3">
                <h3 className="text-sm md:text-base font-black text-[#002f7a] uppercase tracking-tight">
                  {mockup.name}
                </h3>
                <p className="text-xs font-semibold text-[#006def] mt-0.5">
                  {mockup.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}