"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  PlayCircle, 
  BookOpen, 
  Share2, 
  Users, 
  ArrowRight,
  Tv
} from 'lucide-react';

const digitalChannels = [
  {
    id: "CH_01",
    title: "YouTube Channel",
    subtitle: "PEG Broadcast Network",
    description: "High-fidelity video engineering breakdowns, installation timelapses, and structural tutorials delivered in 4K.",
    icon: <PlayCircle className="w-6 h-6" />,
    metric: "12K+ Subs"
  },
  {
    id: "CH_02",
    title: "HyZine Publication",
    subtitle: "Digital Magazine",
    description: "Our interactive digital magazine. Deep-dive editorials, parametric case studies, and the future of precast tech.",
    icon: <BookOpen className="w-6 h-6" />,
    metric: "Quarterly Issue"
  },
  {
    id: "CH_03",
    title: "Social Media Hub",
    subtitle: "Real-Time Updates",
    description: "Join the daily conversation. Live updates from the factory floor, site deployments, and structural engineering insights.",
    icon: <Share2 className="w-6 h-6" />,
    metric: "@PEG_Global"
  },
  {
    id: "CH_04",
    title: "Client Portal",
    subtitle: "Project Telemetry",
    description: "Exclusive digital tools, secured project portals, and direct-to-engineer communication for active partners.",
    icon: <Users className="w-6 h-6" />,
    metric: "Direct Access"
  }
];

export default function PrecastersGoDigital() {
  return (
    <section className="w-full bg-white text-[#004aad] py-16 px-6 md:px-16 lg:px-20 border-t border-[#004aad]/10 select-none">
      
      {/* 1. BROADCAST HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6 border-b border-[#004aad]/10 pb-8">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1B79EE]/10 text-[#1B79EE] text-xs font-black tracking-[0.2em] uppercase border-l-2 border-[#1B79EE]">
            <Tv className="w-3.5 h-3.5" /> Digital Media & Community
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#004aad] tracking-tighter leading-[0.9] uppercase">
            Precasters <span className="text-[#1B79EE]">Go Digital.</span>
          </h2>
          <p className="text-[#004aad] text-sm md:text-base font-semibold max-w-2xl leading-relaxed">
            Stay connected with the latest innovations, structural tutorials, technical articles, and direct client portal telemetry.
          </p>
        </div>
      </div>

      {/* 2. COMPACT 4-COLUMN DIGITAL GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {digitalChannels.map((channel, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group bg-white border border-[#004aad]/15 hover:border-[#1B79EE] shadow-xs hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-blue-50 text-[#1B79EE] group-hover:bg-[#004aad] group-hover:text-white transition-colors duration-300">
                  {channel.icon}
                </div>
                <span className="text-[10px] font-mono font-bold text-[#1B79EE] bg-blue-50/70 px-2.5 py-1 border border-[#1B79EE]/20">
                  {channel.metric}
                </span>
              </div>

              <span className="text-[10px] font-mono font-bold text-[#1B79EE] uppercase tracking-widest block mb-1">
                {channel.subtitle}
              </span>
              <h3 className="text-lg font-black text-[#004aad] uppercase tracking-tight group-hover:text-[#1B79EE] transition-colors mb-2">
                {channel.title}
              </h3>
              <p className="text-xs text-[#004aad] font-semibold leading-relaxed">
                {channel.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#004aad]/10 flex justify-between items-center">
              <span className="text-[10px] font-mono font-bold text-[#004aad] uppercase">Network Link</span>
              <ArrowRight className="w-4 h-4 text-[#1B79EE] group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}