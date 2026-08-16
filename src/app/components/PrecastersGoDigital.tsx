"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  PlayCircle, 
  BookOpen, 
  Share2, 
  Users, 
  ArrowRight
} from 'lucide-react';

const digitalChannels = [
  {
    id: "CH_01",
    title: "YouTube",
    subtitle: "PEG Broadcast Network",
    description: "High-fidelity video engineering breakdowns, installation timelapses, and structural tutorials delivered in 4K.",
    icon: <PlayCircle className="w-8 h-8" />,
    metric: "12K+ Subs"
  },
  {
    id: "CH_02",
    title: "HyZine",
    subtitle: "Digital Publication",
    description: "Our interactive digital magazine. Deep-dive editorials, parametric case studies, and the future of precast tech.",
    icon: <BookOpen className="w-8 h-8" />,
    metric: "Read Now"
  },
  {
    id: "CH_03",
    title: "Social Media",
    subtitle: "Real-Time Infrastructure",
    description: "Join the daily conversation. Live updates from the factory floor, site deployments, and structural engineering insights.",
    icon: <Share2 className="w-8 h-8" />,
    metric: "@PEG_Global"
  },
  {
    id: "CH_04",
    title: "Current Customers",
    subtitle: "Client Success Portal",
    description: "Exclusive digital tools, secured project portals, and direct-to-engineer communication for our active global partners.",
    icon: <Users className="w-8 h-8" />,
    metric: "Login Required"
  }
];

export default function PrecastersGoDigital() {
  return (
    <section className="w-full bg-[#004aad] text-white overflow-hidden relative">
      
      {/* BACKGROUND DIGITAL WAVES */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none flex flex-col justify-between py-20">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-full h-[1px] bg-white transform -skew-y-3" />
        ))}
      </div>

      <div className="w-full px-10 md:px-20 py-4 relative z-10">
        
        {/* 1. BROADCAST HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
          <div className="space-y-6 max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-[0.9] uppercase">
              PRECASTERS <br />
              <span style={{ WebkitTextStroke: "1px #ffffff", color: "transparent" }}>GO DIGITAL.</span>
            </h2>
          </div>
        </div>

        {/* 2. THE 4-COLUMN DIGITAL FEED GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {digitalChannels.map((channel, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              viewport={{ once: true }}
              // FIXED HOVER LOGIC: White default -> Bright Blue on hover
              className="group relative flex flex-col h-[440px] bg-white hover:bg-[#1B79EE] border border-white/10 hover:border-[#1B79EE] hover:shadow-[0_20px_50px_rgba(27,121,238,0.5)] transition-all duration-700 cursor-pointer overflow-hidden"
            >
              
              {/* Main Content Area */}
              <div className="flex-grow px-8 py-2 flex flex-col justify-center relative z-10">
                {/* ICON: Dark Blue -> White on hover */}
                <div className="mb-8 text-[#004aad] group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2">
                  {channel.icon}
                </div>
                
                {/* SUBTITLE: Bright Blue -> White on hover */}
                <p className="text-[#1B79EE] group-hover:text-white font-black text-[10px] uppercase tracking-widest mb-2 transition-colors duration-500">
                  {channel.subtitle}
                </p>
                {/* TITLE: Dark Blue -> White on hover */}
                <h3 className="text-2xl font-black text-[#004aad] group-hover:text-white uppercase tracking-tighter mb-4 transition-colors duration-500">
                  {channel.title}
                </h3>
                {/* DESCRIPTION: Faded Dark Blue -> Faded White on hover */}
                <p className="text-[#004aad]/80 group-hover:text-white/90 text-sm font-medium leading-relaxed transition-colors duration-500">
                  {channel.description}
                </p>
              </div>

              {/* Action Footer */}
              {/* FOOTER BACKGROUND: Light Blue Tint -> Slightly Darker Tint on hover */}
              <div className="px-8 py-2 bg-[#004aad]/5 group-hover:bg-[#004aad]/20 transition-colors duration-500 flex justify-between items-center mt-auto relative z-10">
                <span className="font-mono text-[10px] font-black text-[#1B79EE] group-hover:text-white tracking-widest uppercase transition-colors duration-500">
                  {channel.metric}
                </span>
                <ArrowRight className="w-5 h-5 text-[#004aad]/30 group-hover:text-white transition-colors duration-500" />
              </div>

              {/* Hover Top-Border Accent: Dark Blue -> White on hover */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-[#004aad] group-hover:bg-white group-hover:w-full transition-all duration-700 z-20" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}