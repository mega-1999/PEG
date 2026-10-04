"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  PlayCircle,
  BookOpen,
  Share2,
  Radio,
  ArrowRight,
  Tv
} from 'lucide-react';

const digitalChannels = [
  {
    id: "CH_01",
    title: "YouTube Channel",
    subtitle: "PEG Broadcast Network",
    description: "High-fidelity video engineering breakdowns, installation timelapses, and structural tutorials delivered in 4K.",
    icon: <PlayCircle className="w-5 h-5" />,
    metric: "12K+ Subs"
  },
  {
    id: "CH_02",
    title: "HeyZine Publication",
    subtitle: "Digital Magazine",
    description: "Our interactive digital magazine. Deep-dive editorials, parametric case studies, and the future of precast tech.",
    icon: <BookOpen className="w-5 h-5" />,
    metric: "Quarterly Issue"
  },
  {
    id: "CH_03",
    title: "Social Media Hub",
    subtitle: "Real-Time Updates",
    description: "Join the daily conversation. Live updates from the factory floor, site deployments, and structural engineering insights.",
    icon: <Share2 className="w-5 h-5" />,
    metric: "@PEG_Global"
  },
  {
    id: "CH_04",
    title: "Engineering Podcast",
    subtitle: "Audio Deep-Dives",
    description: "Executive interviews, technical debates on standard revisions, and real-world failure analysis on all major podcast platforms.",
    icon: <Radio className="w-5 h-5" />,
    metric: "Weekly Episodes"
  }
];

export default function PrecastersGoDigital() {
  return (
    <section className="w-full bg-white text-[#002f7a] py-8 md:py-10 px-10 md:px-20 border-t border-[#002f7a]/10 relative overflow-hidden select-none">

      {/* CAD WATERMARK BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#002f7a 1.5px, transparent 1.5px), linear-gradient(to right, #002f7a 0.5px, transparent 0.5px), linear-gradient(to bottom, #002f7a 0.5px, transparent 0.5px)`,
          backgroundSize: '40px 40px, 200px 200px, 200px 200px'
        }}
      />

      <div className="relative z-10">
        {/* 1. BROADCAST HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-4 md:mb-6 gap-6 border-b border-[#002f7a]/10 pb-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#006def]/10 text-[#006def] text-xs font-black tracking-[0.2em] uppercase border-l-2 border-[#006def]">
              <Tv className="w-3.5 h-3.5" /> Digital Media & Community
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#002f7a] tracking-tighter leading-[0.9] uppercase">
              Precasters <span className="text-[#006def]">Go Digital.</span>
            </h2>
            <p className="text-[#002f7a] text-sm md:text-base font-semibold max-w-2xl leading-relaxed">
              Stay connected with the latest innovations, structural tutorials, technical articles, and audio engineering broadcasts.
            </p>
          </div>
        </div>

        {/* 2. COMPACT SINGLE-ROW 4-COLUMN DIGITAL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {digitalChannels.map((channel, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white hover:bg-blue-50/90 text-[#002f7a] border border-[#002f7a]/15 hover:border-[#006def] p-5 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* ICON LEFT + TITLE & METRIC RIGHT */}
                <div className="flex items-start gap-3.5 mb-3">
                  <div className="p-3 bg-blue-50 text-[#006def] group-hover:bg-[#002f7a] group-hover:text-white transition-colors duration-300 shrink-0 border border-[#006def]/20">
                    {React.cloneElement(channel.icon as React.ReactElement<{ className?: string }>, { className: "w-5 h-5" })}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="text-[9px] font-mono font-bold text-[#006def] uppercase tracking-wider truncate">
                        {channel.subtitle}
                      </span>
                      <span className="text-[9px] font-mono font-black text-[#002f7a] bg-blue-50 px-1.5 py-0.5 border border-[#006def]/20 shrink-0">
                        {channel.metric}
                      </span>
                    </div>
                    <h3 className="text-base font-black text-[#002f7a] uppercase tracking-tight group-hover:text-[#006def] transition-colors leading-snug">
                      {channel.title}
                    </h3>
                  </div>
                </div>

                {/* CONTENT */}
                <p className="text-xs text-[#002f7a]/85 font-semibold leading-relaxed">
                  {channel.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#002f7a]/10 flex justify-between items-center">
                <span className="text-[10px] font-mono font-bold text-[#002f7a] uppercase">Explore Channel</span>
                <ArrowRight className="w-4 h-4 text-[#006def] group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}