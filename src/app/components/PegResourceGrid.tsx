"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Settings, 
  GraduationCap, 
  MapPin, 
  Cpu, 
  Calendar, 
  Newspaper, 
  ArrowRight 
} from 'lucide-react';

const pegResourceNodes = [
  {
    title: "Technical Resources",
    description: "Access engineering schematics, product specifications, load tables, and compliance standards for your structural project.",
    icon: <Settings className="w-8 h-8" />,
    linkText: "Access Blueprints"
  },
  {
    title: "Learning Center",
    description: "Expand your expertise with professional webinars, engineering workshops, technical seminars, and earn verified PDH credits.",
    icon: <GraduationCap className="w-8 h-8" />,
    linkText: "Explore Courses"
  },
  {
    title: "Regional Operations",
    description: "Locate regional production plants, state engineering contacts, and localized logistical hubs for just-in-time delivery.",
    icon: <MapPin className="w-8 h-8" />,
    linkText: "Find Facility"
  },
  {
    title: "PEG Sync Platform",
    description: "Deploy our proprietary engineering software application to access plant manuals, product catalogs, and automated parametric calculators.",
    icon: <Cpu className="w-8 h-8" />,
    linkText: "Launch Software"
  },
  {
    title: "Industry Events",
    description: "Stay connected with the precast sector. Track upcoming technical webinars, live shop-floor exhibitions, and global code-compliance summits.",
    icon: <Calendar className="w-8 h-8" />,
    linkText: "View Schedule"
  },
  {
    title: "Press & Media Hub",
    description: "Get the latest insights on structural precast breakthroughs, corporate updates, and reach out directly to our media relations department.",
    icon: <Newspaper className="w-8 h-8" />,
    linkText: "Read Updates"
  }
];

export default function PegResourceGrid() {
  return (
    <section className="w-full bg-[#004aad] text-white py-24 px-10 md:px-20 relative overflow-hidden font-sans">
      
      {/* BRAND ARCHITECTURE BACKGROUND GRID */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative z-10 space-y-16">
        
        {/* STRUCTURAL HEADER SECTION */}
        <div className="max-w-3xl space-y-4">
          <div className="w-16 h-1 bg-[#1B79EE]" />
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter leading-none">
            Knowledge Hub <br />
            <span className="text-white">& Infrastructure Ecosystem.</span>
          </h2>
          <p className="text-white/60 text-sm font-medium tracking-wide uppercase">
            Precast Engineering Group Central Repositories
          </p>
        </div>

        {/* 6-CARD CORE GRID (Recreated from image_871ce0.jpg) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pegResourceNodes.map((node, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white border border-[#1B79EE]/20 p-10 flex flex-col justify-between items-center text-center transition-all duration-300 shadow-xl"
            >
              {/* TOP BRAND ACCENT LINE */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-[#1B79EE] group-hover:w-full transition-all duration-500" />

              {/* CARD CORE CONTENT */}
              <div className="flex flex-col items-center space-y-6 w-full">
                
                {/* ICON BOX */}
                <div className="p-4 bg-[#004aad]/5 border border-[#004aad]/10 text-[#004aad] transition-all duration-300 group-hover:bg-[#1B79EE] group-hover:text-white group-hover:border-[#1B79EE] group-hover:shadow-lg">
                  {node.icon}
                </div>

                {/* METADATA IDENTIFIER */}
                <div className="space-y-3">
                  <h3 className="text-lg font-black uppercase tracking-tighter text-[#004aad]">
                    {node.title}
                  </h3>
                  <p className="text-[#004aad]/70 text-xs md:text-sm font-medium leading-relaxed max-w-xs mx-auto">
                    {node.description}
                  </p>
                </div>
              </div>

              {/* CLEAN ACTION PROMPT BUTTON */}
              <div className="w-full pt-8 mt-8 border-t border-[#004aad]/5">
                <button className="inline-flex items-center gap-2 bg-[#004aad] hover:bg-[#1B79EE] text-white px-6 py-3 font-mono text-[10px] font-black uppercase tracking-widest shadow-md transition-all duration-300 group-hover:scale-105">
                  {node.linkText} <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              {/* CORNER BACKGROUND WATERMARK */}
              <div className="absolute bottom-2 right-4 font-mono text-[50px] font-black text-[#004aad] opacity-[0.02] select-none pointer-events-none group-hover:opacity-[0.05] transition-opacity">
                0{idx + 1}
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}