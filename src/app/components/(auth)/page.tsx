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
      color: "#0271f1",
      span: "md:col-span-2",
    },
    {
      role: "Gov. Agencies",
      desc: "Compliance & Oversight",
      icon: <ShieldCheck className="w-6 h-6" />,
      color: "#023380",
      span: "md:col-span-1",
    },
    {
      role: "Customers",
      desc: "Project Tracking & Billing",
      icon: <Users className="w-6 h-6" />,
      color: "#0271f1",
      span: "md:col-span-1",
    },
    {
      role: "Vendors",
      desc: "Supply Chain & Logistics",
      icon: <Truck className="w-6 h-6" />,
      color: "#023380",
      span: "md:col-span-1",
    },
    {
      role: "Team Members",
      desc: "Internal ERP & Management",
      icon: <Building2 className="w-6 h-6" />,
      color: "#0271f1",
      span: "md:col-span-1",
    },
  ];

  return (
    <section className="w-full px-6 md:px-16 lg:px-20 py-16 bg-white flex flex-col items-center justify-center select-none">
      
      {/* 1. DYNAMIC TYPING HEADER */}
      <div className="w-full mb-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0271f1]/10 text-[#0271f1] text-xs font-black tracking-[0.2em] uppercase border-l-2 border-[#0271f1] mb-4">
          Direct Stakeholder Access
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-[#023380] tracking-tighter flex flex-wrap justify-center items-center gap-x-4">
          <span>PORTAL:</span>
          <span className="relative min-w-[280px] text-left inline-flex items-center text-[#0271f1]">
            <span>
              {words[index].substring(0, subIndex)}
            </span>
            <motion.span 
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="w-1.5 h-10 md:h-12 bg-[#0271f1] ml-1.5"
            />
          </span>
        </h2>
      </div>

      {/* 2. STAKEHOLDER BENTO GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
        {stakeholders.map((s, i) => (
          <motion.div
            key={s.role}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 + 0.5 }}
            className={`group relative p-8 border border-slate-200 bg-white transition-all duration-500 hover:border-[#0271f1] hover:shadow-[30px_30px_0px_-10px_rgba(2,113,241,0.05)] cursor-pointer ${s.span}`}
          >
            <Link href="/admin" className="block w-full h-full">
              <div className="flex justify-between items-start mb-12">
                <div 
                  className="p-4 bg-[#F8F9FA] transition-colors group-hover:bg-[#023380]"
                  style={{ border: `1px solid ${s.color}30` }}
                >
                  <div className="group-hover:text-white transition-colors" style={{ color: s.color }}>
                    {s.icon}
                  </div>
                </div>
                <span className="text-xs font-mono text-[#0271f1]">0{i + 1}</span>
              </div>

              <div>
                <h3 className="text-xl font-black text-[#023380] uppercase tracking-tight mb-2">
                  {s.role}
                </h3>
                <p className="text-xs font-medium text-[#0271f1] uppercase tracking-widest leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="mt-10 flex items-center gap-2 text-[#0271f1] opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0">
                <span className="text-[10px] font-black tracking-widest uppercase">Authorized Access</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </Link>

            {/* Corner Accent for Apple/Engineering style */}
            <div className="absolute bottom-4 right-4 w-2 h-2 border-r border-b border-slate-200 group-hover:border-[#0271f1]" />
          </motion.div>
        ))}
      </div>
 
    </section>
  );
}