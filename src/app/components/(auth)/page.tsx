"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cpu,
  ShieldCheck,
  Users,
  Truck,
  Building2,
  ArrowRight,
  ChevronRight
} from "lucide-react";

import Link from "next/link";

// --- Dynamic Typing Logic ---
const words = ["ENGINEERS.", "AGENCIES.", "CUSTOMERS.", "VENDORS.", "TEAM.", "ENTRY."];

export default function PegPortalDashboard() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1500);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  const stakeholders = [
    {
      role: "Engineers & Architects",
      desc: "Structural Data",
      icon: <Cpu className="w-6 h-6" />,
      color: "#006def",
      span: "md:col-span-2",
    },
    {
      role: "Gov. Agencies",
      desc: "Compliance & Oversight",
      icon: <ShieldCheck className="w-6 h-6" />,
      color: "#002f7a",
      span: "md:col-span-1",
    },
    {
      role: "Customers",
      desc: "Project Tracking & Billing",
      icon: <Users className="w-6 h-6" />,
      color: "#006def",
      span: "md:col-span-1",
    },
    {
      role: "Vendors",
      desc: "Supply Chain & Logistics",
      icon: <Truck className="w-6 h-6" />,
      color: "#002f7a",
      span: "md:col-span-1",
    },
    {
      role: "Team Members",
      desc: "Internal ERP & Management",
      icon: <Building2 className="w-6 h-6" />,
      color: "#006def",
      span: "md:col-span-1",
    },
  ];

  return (
    <section className="w-full px-10 md:px-20 py-2 sm:py-4 md:py-6 bg-white select-none border-t border-[#002f7a]/10 relative overflow-hidden">

      {/* CAD WATERMARK BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#002f7a 1.5px, transparent 1.5px), linear-gradient(to right, #002f7a 0.5px, transparent 0.5px), linear-gradient(to bottom, #002f7a 0.5px, transparent 0.5px)`,
          backgroundSize: '40px 40px, 200px 200px, 200px 200px'
        }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full relative z-10">

        {/* LEFT COLUMN: TYPING TEXT & STAKEHOLDER PORTAL INTRO */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#006def]/10 text-[#006def] text-xs font-black tracking-[0.2em] uppercase border-l-2 border-[#006def] w-max">
            Direct Stakeholder Access
          </div>

          <div className="flex flex-col">
            <h2 className="text-3xl md:text-5xl font-black text-[#002f7a] tracking-tighter leading-none uppercase">
              PORTAL:
            </h2>
            {/* Fixed-height container prevents any vertical shifting/flexing during typing */}
            <div className="h-10 md:h-14 flex items-center mt-1 min-w-0">
              <span className="text-3xl md:text-5xl font-black text-[#006def] tracking-tighter leading-none inline-flex items-center truncate">
                <span>{words[index].substring(0, subIndex)}</span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="w-1.5 h-7 md:h-10 bg-[#006def] ml-1.5 shrink-0 inline-block"
                />
              </span>
            </div>
          </div>

          <p className="text-sm md:text-base text-[#002f7a]/70 font-medium leading-relaxed">
            Unified access hub providing real-time engineering deliverables, calculation submittals, vendor logistics, and compliance documentation.
          </p>

          <div className="pt-1">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#006def] bg-[#006def]/5 px-3 py-1.5 border border-[#006def]/20">
              <ShieldCheck className="w-4 h-4 text-[#006def] shrink-0" />
              <span>Encrypted Multi-Tier Role Authentication</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: 5 BOXES IN 2, 2, 1 CONFIGURATION */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {stakeholders.map((s, i) => {
            const isLast = i === stakeholders.length - 1; // 5th item spans 2 columns (2, 2, 1)
            return (
              <motion.div
                key={s.role}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 + 0.3 }}
                className={`group relative p-3.5 sm:p-4 border border-[#002f7a]/15 bg-white transition-all duration-300 hover:border-[#006def] hover:shadow-md cursor-pointer ${isLast ? "sm:col-span-2" : ""}`}
              >
                <Link href="/admin" className="flex items-center justify-between gap-3 w-full h-full">
                  {/* LEFT ICON */}
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <div
                      className="p-2.5 bg-[#F8F9FA] transition-colors group-hover:bg-[#002f7a] shrink-0 border"
                      style={{ borderColor: `${s.color}30` }}
                    >
                      <div className="group-hover:text-white transition-colors [&>svg]:w-5 [&>svg]:h-5" style={{ color: s.color }}>
                        {s.icon}
                      </div>
                    </div>

                    {/* RIGHT TEXT */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-[10px] font-mono font-bold text-[#006def]">0{i + 1}</span>
                        <span className="text-[9px] font-bold text-[#006def] uppercase tracking-wider">Access</span>
                      </div>
                      <h3 className="text-xs sm:text-sm font-black text-[#002f7a] uppercase tracking-tight truncate group-hover:text-[#006def] transition-colors">
                        {s.role}
                      </h3>
                      <p className="text-[10px] text-[#002f7a]/70 font-semibold uppercase tracking-tight truncate mt-0.5">
                        {s.desc}
                      </p>
                    </div>
                  </div>

                  {/* ACTION CHEVRON */}
                  <div className="text-[#006def] opacity-30 group-hover:opacity-100 transition-all translate-x-0 group-hover:translate-x-1 shrink-0">
                    <ChevronRight className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                  </div>
                </Link>

                {/* Corner Accent */}
                <div className="absolute bottom-2 right-2 w-1.5 h-1.5 border-r border-b border-[#002f7a]/20 group-hover:border-[#006def]" />
              </motion.div>
            );
          })}
        </div>

      </div>

    </section>
  );
}