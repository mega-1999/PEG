"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  PenTool,
  GraduationCap,
  MapPin,
  Calculator,
  Calendar,
  Newspaper,
  ArrowRight,
  Database
} from "lucide-react";

const pegResourceNodes = [
  {
    id: "01",
    title: "Shop Drawings",
    subtitle: "Drafting & Detailing",
    description: "Production-ready shop drawings, automated rebar layouts, and precast manufacturing detailing.",
    icon: <PenTool className="w-5 h-5" />,
    linkText: "View Drawings",
    href: "/#standards"
  },
  {
    id: "02",
    title: "Learning Center",
    subtitle: "Knowledge Vault",
    description: "Expert engineering articles, technical guides, and verified precast know-how.",
    icon: <GraduationCap className="w-5 h-5" />,
    linkText: "Explore Vault",
    href: "/blog"
  },
  {
    id: "03",
    title: "Regional Hubs",
    subtitle: "Offices & Plants",
    description: "Production plants, state engineering contacts, and localized logistical hubs.",
    icon: <MapPin className="w-5 h-5" />,
    linkText: "Find Facility",
    href: "/#locations"
  },
  {
    id: "04",
    title: "Structural Calcs",
    subtitle: "PE Stamped Analysis",
    description: "Certified engineering calculations, load-bearing verification, and finite element modeling.",
    icon: <Calculator className="w-5 h-5" />,
    linkText: "View Packages",
    href: "/#standards"
  },
  {
    id: "05",
    title: "Industry Events",
    subtitle: "Summits & Shows",
    description: "Upcoming technical webinars, live shop-floor exhibitions, and code summits.",
    icon: <Calendar className="w-5 h-5" />,
    linkText: "View Schedule",
    href: "/#shows"
  },
  {
    id: "06",
    title: "Project Intake",
    subtitle: "Telemetry Queue",
    description: "Transmit your project criteria directly to our parametric workflow queue.",
    icon: <Newspaper className="w-5 h-5" />,
    linkText: "Connect Now",
    href: "/#contact"
  }
];

export default function PegResourceGrid() {
  return (
    <section id="resources" className="w-full bg-[#002f7a] text-white py-2 sm:py-4 md:py-6 relative overflow-hidden font-sans select-none border-t border-white/10">

      {/* BRAND ARCHITECTURE BACKGROUND GRID */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 relative z-10 space-y-6">

        {/* STRUCTURAL HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-white/10 pb-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white text-xs font-black tracking-[0.2em] uppercase border-l-2 border-[#006def]">
              <Database className="w-3.5 h-3.5 text-[#006def]" /> Central Repositories & Hub
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none text-white">
              Knowledge Hub <span className="text-[#006def]">& Ecosystem.</span>
            </h2>
            <p className="text-white/80 text-sm md:text-base font-semibold max-w-2xl leading-relaxed">
              Precast Engineering Group digital repositories, state jurisdictions, telemetry queues, and verified know-how.
            </p>
          </div>
        </div>

        {/* ALL 6 CARDS IN ONE ROW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 md:gap-4">
          {pegResourceNodes.map((node, idx) => (
            <motion.a
              key={idx}
              href={node.href}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.3 }}
              whileHover={{ y: -4 }}
              className="group relative bg-white hover:bg-slate-50 text-[#002f7a] border border-white/20 hover:border-[#006def] p-4 flex flex-col justify-between transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer rounded-sm overflow-hidden min-w-0"
            >
              {/* TOP BRAND ACCENT LINE */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-[#006def] group-hover:w-full transition-all duration-300" />

              <div>
                {/* ICON LEFT + TITLE & SUBTITLE RIGHT */}
                <div className="flex items-start gap-2.5 mb-3">
                  <div className="p-2 bg-blue-50 text-[#006def] group-hover:bg-[#002f7a] group-hover:text-white transition-colors duration-300 shrink-0 border border-[#006def]/20 rounded-sm mt-0.5">
                    {node.icon}
                  </div>

                  <div className="flex-1 min-w-0">
                    <span className="text-[9px] font-mono font-bold text-[#006def] uppercase tracking-wider block">
                      {node.subtitle}
                    </span>
                    <h3 className="text-xs sm:text-[13px] font-black uppercase tracking-tight text-[#002f7a] group-hover:text-[#006def] transition-colors leading-tight break-words">
                      {node.title}
                    </h3>
                  </div>
                </div>

                {/* DESCRIPTION */}
                <p className="text-xs text-[#006def] font-medium leading-relaxed">
                  {node.description}
                </p>
              </div>

              {/* ACTION PROMPT */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-[#002f7a] group-hover:text-[#006def] uppercase tracking-wider">
                  {node.linkText}
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-[#006def] group-hover:translate-x-1 transition-transform" />
              </div>

              {/* CORNER NUMBER WATERMARK */}
              <div className="absolute bottom-1 right-2 font-mono text-[24px] font-black text-[#002f7a] opacity-[0.04] pointer-events-none select-none group-hover:opacity-[0.08] transition-opacity">
                {node.id}
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}