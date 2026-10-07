"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  PlayCircle,
  BookOpen,
  Share2,
  Radio,
  ArrowRight,
  Monitor,
  Tablet,
  Smartphone,
  Tv
} from 'lucide-react';
import { getAssetUrl } from '@/lib/utils';

const mockups = [
  {
    id: "desktop",
    name: "Desktop Workstation",
    role: "Engineering Office & CAD Center",
    badge: "DESKTOP PORTAL",
    icon: <Monitor className="w-4 h-4 text-[#006def]" />,
    videoSrc: "https://pub-506b16bcde4f4fa8849e4eb8030acc3b.r2.dev/assets/video/Mockup/Precast_Engineering_Group_Desktop_Live_Mockup_1.mp4",
  },
  {
    id: "tablet",
    name: "Tablet & iPad Live",
    role: "Plant Floor & QA/QC",
    badge: "SHOP FLOOR QA/QC",
    icon: <Tablet className="w-4 h-4 text-[#006def]" />,
    videoSrc: "https://pub-506b16bcde4f4fa8849e4eb8030acc3b.r2.dev/assets/video/Mockup/Precast_Engineering_Group_I-pad_Live_Mockup_1.mp4",
  },
  {
    id: "mobile",
    name: "Mobile Companion",
    role: "Field Dispatch & Jobsite",
    badge: "JOBSITE DISPATCH",
    icon: <Smartphone className="w-4 h-4 text-[#006def]" />,
    videoSrc: "https://pub-506b16bcde4f4fa8849e4eb8030acc3b.r2.dev/assets/video/Mockup/Precast_Engineering_Group_Mobile_Live_Mockup_1.mp4",
  }
];

const digitalChannels = [
  {
    id: "CH_01",
    title: "YouTube Channel",
    subtitle: "PEG Broadcast Network",
    description: "Video engineering breakdowns, mold form timelapses, and structural tutorials delivered in 4K.",
    icon: <PlayCircle className="w-5 h-5" />,
    metric: "12K+ Subs"
  },
  {
    id: "CH_02",
    title: "HeyZine Publication",
    subtitle: "Digital Magazine",
    description: "Our interactive digital catalog. Technical blueprints, case studies, and modern precast tech.",
    icon: <BookOpen className="w-5 h-5" />,
    metric: "Quarterly"
  },
  {
    id: "CH_03",
    title: "Social Media Hub",
    subtitle: "Live Updates",
    description: "Daily production updates from the factory floor, site deployments, and engineering insights.",
    icon: <Share2 className="w-5 h-5" />,
    metric: "@PEG_Global"
  },
  {
    id: "CH_04",
    title: "Engineering Podcast",
    subtitle: "Audio Broadcast",
    description: "Interviews with DOT officials, standard revision debates, and precast engineering analysis.",
    icon: <Radio className="w-5 h-5" />,
    metric: "Weekly"
  }
];

export default function PrecastersGoDigital() {
  return (
    <section className="w-full bg-white py-2 sm:py-4 md:py-6 overflow-hidden select-none border-t border-[#002f7a]/10 relative">

      {/* CAD BLUEPRINT HIGH-TECH BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #002f7a 1px, transparent 1px), linear-gradient(to bottom, #002f7a 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 space-y-10 md:space-y-14 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-[#006def] text-xs font-black tracking-[0.2em] uppercase border-l-2 border-[#006def]">
            <Tv className="w-3.5 h-3.5 text-[#006def]" /> Digital Multi-Device Ecosystem
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#002f7a] tracking-tighter uppercase leading-none">
            Precasters <span className="text-[#006def]">Go Digital.</span>
          </h2>
          <p className="text-[#002f7a]/85 font-semibold text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Unified digital cloud ecosystem connecting structural design offices, casting beds, and on-site superintendents in real time.
          </p>
        </div>

        {/* 3 MOCKUPS BY THEMSELVES - FLOATING ELEVATION WITH NO HEAVY CARD BOXES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 items-end">
          {mockups.map((mockup, idx) => (
            <motion.div
              key={mockup.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="flex flex-col items-center group cursor-pointer"
            >
              {/* TOP PILL BADGE */}
              <div className="mb-3 flex items-center gap-2 px-3 py-1 bg-slate-50 border border-[#002f7a]/15 rounded-full shadow-xs group-hover:border-[#006def] transition-colors">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-mono font-bold text-[#002f7a] uppercase tracking-wider">
                  {mockup.badge}
                </span>
              </div>

              {/* VIDEO MOCKUP CONTAINER - FLOATING SHADOW WITHOUT BOX */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-square lg:aspect-[4/3] flex items-center justify-center rounded-md overflow-hidden bg-slate-950 shadow-[0_20px_45px_rgba(0,47,122,0.18)] group-hover:shadow-[0_25px_55px_rgba(0,109,239,0.25)] group-hover:scale-[1.02] transition-all duration-500 border border-[#002f7a]/10 group-hover:border-[#006def]/40 p-1.5 sm:p-2">
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

              {/* BOTTOM LABEL */}
              <div className="text-center mt-3.5 space-y-0.5">
                <div className="flex items-center justify-center gap-1.5 text-xs font-mono font-bold text-[#006def]">
                  {mockup.icon}
                  <span className="uppercase tracking-wider">{mockup.name}</span>
                </div>
                <p className="text-xs font-semibold text-[#002f7a]/80">
                  {mockup.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 4 DIGITAL BROADCAST CHANNELS & PUBLICATIONS */}
        <div className="pt-4 border-t border-[#002f7a]/10">
          <div className="flex items-center justify-between gap-2 mb-4">
            <span className="text-xs font-mono font-bold text-[#006def] uppercase tracking-widest">
              Broadcast Channels & Publications
            </span>
            <span className="text-[10px] font-mono font-bold text-[#002f7a]/60 uppercase">
              4 Media Nodes Active
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 md:gap-4">
            {digitalChannels.map((channel, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="group relative bg-white hover:bg-slate-50 text-[#002f7a] border border-[#002f7a]/15 hover:border-[#006def] p-4 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between rounded-sm cursor-pointer overflow-hidden"
              >
                {/* TOP ACCENT LINE */}
                <div className="absolute top-0 left-0 w-0 h-1 bg-[#006def] group-hover:w-full transition-all duration-300" />

                <div>
                  <div className="flex items-start gap-2.5 mb-2.5">
                    <div className="p-2 bg-blue-50 text-[#006def] group-hover:bg-[#002f7a] group-hover:text-white transition-colors duration-300 shrink-0 border border-[#006def]/20 rounded-sm mt-0.5">
                      {channel.icon}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1 mb-0.5">
                        <span className="text-[9px] font-mono font-bold text-[#006def] uppercase tracking-wider truncate">
                          {channel.subtitle}
                        </span>
                        <span className="text-[8px] font-mono font-bold text-[#006def] bg-blue-50 px-1.5 py-0.5 border border-[#006def]/20 shrink-0">
                          {channel.metric}
                        </span>
                      </div>
                      <h3 className="text-xs sm:text-[13px] font-black uppercase tracking-tight text-[#002f7a] group-hover:text-[#006def] transition-colors leading-tight truncate">
                        {channel.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-[#002f7a]/85 font-semibold leading-relaxed line-clamp-2">
                    {channel.description}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-[#002f7a]/10 flex justify-between items-center">
                  <span className="text-[9px] font-mono font-bold text-[#002f7a] uppercase">Explore</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#006def] group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}