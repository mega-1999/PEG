"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  PlayCircle,
  BookOpen,
  Share2,
  Radio,
  ArrowRight,
  Tv,
  Globe2,
  ExternalLink
} from 'lucide-react';
import Link from 'next/link';

const digitalChannels = [
  {
    id: "CH_01",
    title: "YouTube Channel",
    subtitle: "PEG Broadcast Network",
    description: "Video engineering breakdowns, mold form timelapses, and structural tutorials delivered in 4K resolution.",
    icon: <PlayCircle className="w-5 h-5" />,
    metric: "12K+ Subs",
    href: "/#resources"
  },
  {
    id: "CH_02",
    title: "HeyZine Publication",
    subtitle: "Digital Magazine",
    description: "Our interactive digital catalog featuring technical blueprints, case studies, and state-of-the-art precast tech.",
    icon: <BookOpen className="w-5 h-5" />,
    metric: "Quarterly",
    href: "/#resources"
  },
  {
    id: "CH_03",
    title: "Social Media Hub",
    subtitle: "Live Updates",
    description: "Daily production updates from the factory floor, site deployments, and cutting-edge engineering insights.",
    icon: <Share2 className="w-5 h-5" />,
    metric: "@PEG_Global",
    href: "/#resources"
  },
  {
    id: "CH_04",
    title: "Engineering Podcast",
    subtitle: "Audio Broadcast",
    description: "In-depth discussions with DOT officials, standard revisions debates, and precast engineering analysis.",
    icon: <Radio className="w-5 h-5" />,
    metric: "Weekly",
    href: "/#resources"
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

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 space-y-6 md:space-y-8 relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-[#002f7a]/10 pb-4">
          <div className="space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-[#006def] text-xs font-black tracking-[0.2em] uppercase border-l-2 border-[#006def]">
              <Tv className="w-3.5 h-3.5 text-[#006def]" /> Digital Media & Knowledge Network
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-[#002f7a] tracking-tighter uppercase leading-none">
              Precasters <span className="text-[#006def]">Go Digital.</span>
            </h2>
            <p className="text-[#002f7a]/85 font-semibold text-xs sm:text-sm md:text-base max-w-2xl leading-relaxed">
              Broadcast channels, digital magazines, and engineering media connecting precasters, DOT inspectors, and civil engineers across North America.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/blog"
              className="px-5 py-3 bg-[#002f7a] hover:bg-[#006def] text-white text-xs font-mono font-black uppercase tracking-wider transition-colors flex items-center gap-2 shadow-xs cursor-pointer"
            >
              <span>Explore All Media</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 4 DIGITAL BROADCAST CHANNELS & PUBLICATIONS */}
        <div>
          <div className="flex items-center justify-between gap-2 mb-4">
            <span className="text-xs font-mono font-bold text-[#006def] uppercase tracking-widest">
              Broadcast Channels & Publications
            </span>
            <span className="text-[10px] font-mono font-bold text-[#002f7a]/60 uppercase">
              4 Media Nodes Active
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {digitalChannels.map((channel, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="group relative bg-white hover:bg-slate-50 text-[#002f7a] border border-[#002f7a]/15 hover:border-[#006def] p-5 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between rounded-sm cursor-pointer overflow-hidden"
              >
                {/* TOP ACCENT LINE */}
                <div className="absolute top-0 left-0 w-0 h-1 bg-[#006def] group-hover:w-full transition-all duration-300" />

                <div>
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2.5 bg-blue-50 text-[#006def] group-hover:bg-[#002f7a] group-hover:text-white transition-colors duration-300 shrink-0 border border-[#006def]/20 rounded-sm mt-0.5">
                      {channel.icon}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1 mb-0.5">
                        <span className="text-[9.5px] font-mono font-bold text-[#006def] uppercase tracking-wider truncate">
                          {channel.subtitle}
                        </span>
                        <span className="text-[8.5px] font-mono font-bold text-[#006def] bg-blue-50 px-1.5 py-0.5 border border-[#006def]/20 shrink-0">
                          {channel.metric}
                        </span>
                      </div>
                      <h3 className="text-sm sm:text-[15px] font-black uppercase tracking-tight text-[#002f7a] group-hover:text-[#006def] transition-colors leading-tight truncate">
                        {channel.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-[#002f7a]/85 font-medium leading-relaxed line-clamp-3">
                    {channel.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#002f7a]/10 flex justify-between items-center">
                  <span className="text-[9.5px] font-mono font-bold text-[#002f7a] uppercase">Explore Channel</span>
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