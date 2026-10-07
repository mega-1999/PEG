"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  DraftingCompass,
  FileCheck2,
  Zap,
  Undo2,
  Wrench,
  Landmark,
  Briefcase,
  Box,
  FlaskConical,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';

const engineeringServices = [
  {
    id: "01",
    title: "Engineering Drawings",
    subtitle: "Parametric Shop Models",
    desc: "Specified-Tolerance CAD modeling and 2D drafting engineered for flawless factory casting and rapid on-site assembly.",
    icon: <DraftingCompass className="w-6 h-6" />,
    colSpan: "lg:col-span-4", // Wide block (50% on desktop)
    highlight: true
  },
  {
    id: "02",
    title: "Agency Submittals",
    subtitle: "Fast-Track Clearance",
    desc: "Engineering Documentation & Professional Review to secure Approval-Ready Documentation.",
    icon: <Zap className="w-6 h-6" />,
    colSpan: "lg:col-span-4", // 25% on desktop
    highlight: false
  },
  {
    id: "03",
    title: "Get Specified",
    subtitle: "Basis of Design",
    desc: "We integrate your precast products into master CSI specs, making you the default choice for architects.",
    icon: <FileCheck2 className="w-6 h-6" />,
    colSpan: "lg:col-span-4", // 25% on desktop
    highlight: false
  },
  {
    id: "04",
    title: "Molds & Form Design",
    subtitle: "Casting Optimization",
    desc: "Custom formwork consulting to maximize production cycles, minimize waste, and ensure perfect geometry.",
    icon: <Box className="w-6 h-6" />,
    colSpan: "lg:col-span-4", // 25% on desktop
    highlight: false
  },
  {
    id: "05",
    title: "Turnkey Projects",
    subtitle: "End-to-End Execution",
    desc: "From initial schematic concept to final structural deployment. A singular point of accountability for your entire precast scope.",
    icon: <Briefcase className="w-6 h-6" />,
    colSpan: "lg:col-span-4", // Wide block (50% on desktop)
    highlight: true
  },
  {
    id: "06",
    title: "Reverse Engineering",
    subtitle: "Point-Cloud to CAD",
    desc: "Deconstructing legacy components or site conditions into High-Accuracy digital models for replication.",
    icon: <Undo2 className="w-6 h-6" />,
    colSpan: "lg:col-span-4", // 25% on desktop
    highlight: false
  },
  {
    id: "07",
    title: "Governmental Consulting",
    subtitle: "Federal & State Ops",
    desc: "Navigating complex DOT requirements and federal infrastructure compliance with Experienced Regulatory Guidance.",
    icon: <Landmark className="w-6 h-6" />,
    colSpan: "lg:col-span-4", // 25% on desktop
    highlight: false
  },
  {
    id: "08",
    title: "Structural Retrofitting",
    subtitle: "Adaptive Load Upgrades",
    desc: "Re-engineering existing concrete structures for new load capacities and modern seismic codes.",
    icon: <Wrench className="w-6 h-6" />,
    colSpan: "lg:col-span-4", // 25% on desktop
    highlight: false
  },
  {
    id: "09",
    title: "Testing Labs",
    subtitle: "Material Analysis",
    desc: "Rigorous concrete strength, durability, and stress testing to validate performance under Demanding Service Conditions.",
    icon: <FlaskConical className="w-6 h-6" />,
    colSpan: "lg:col-span-4", // 25% on desktop
    highlight: true
  },
  {
    id: "10",
    title: "Certifications",
    subtitle: "Inspections & QA/QC",
    desc: "On-site and in-plant auditing to guarantee Rigorous Standards Compliance to PCI, ACI, and ASTM standards.",
    icon: <ShieldCheck className="w-6 h-6" />,
    colSpan: "lg:col-span-12", // 25% on desktop
    highlight: true
  }
];

export default function EngineeringExecuted() {
  return (
    <section className="w-full bg-white py-8 sm:py-10 md:py-12 lg:py-16 border-b border-[#002f7a]/10 overflow-hidden">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">

        {/* HEADER: Massive Brand Statement */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-10 gap-6 md:gap-10">
          <div className="space-y-4 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: '80px' }}
              className="h-1 bg-[#006def]"
            />
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-[#002f7a] tracking-tighter leading-[0.9] uppercase">
              ENGINEERING <br />
              <span className="text-[#006def]">THAT FITS YOUR PRODUCTION.</span>
            </h2>
          </div>
          <div className="hidden lg:block max-w-sm text-right">
            <p className="text-[#002f7a]/80 font-medium text-sm leading-relaxed">
              A comprehensive suite of precast engineering protocols, tailored to your manufacturing constraints and project parameters.
            </p>
          </div>
        </div>

        {/* 10-ITEM BENTO GRID (12-Column Flexible Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 items-stretch">
          {engineeringServices.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className={`group relative p-6 md:p-8 border transition-all duration-500 cursor-pointer flex flex-col justify-between overflow-hidden
                ${service.highlight
                  ? 'bg-[#002f7a] text-white border-[#002f7a] hover:bg-[#006def] hover:border-[#006def]'
                  : 'bg-white text-[#002f7a] border-slate-200 hover:border-[#006def] hover:shadow-[15px_15px_0px_rgba(0,109,239,0.05)]'} 
                ${service.colSpan}
              `}
            >
              {/* Header: Icon Left, Subtitle & Title & ID Right */}
              <div className="flex items-start gap-4 mb-4 relative z-10">
                <div className={`p-3.5 shrink-0 transition-colors duration-500 
                  ${service.highlight ? 'bg-white/10 text-white group-hover:bg-white group-hover:text-[#006def]' : 'bg-slate-50 text-[#006def] group-hover:bg-[#002f7a] group-hover:text-white'}`}>
                  {service.icon}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <p className={`font-mono text-[10px] uppercase tracking-[0.2em] font-bold
                      ${service.highlight ? 'text-[#006def] group-hover:text-white' : 'text-[#006def]'}`}>
                      {service.subtitle}
                    </p>
                    <span className={`font-mono text-[11px] font-black tracking-widest shrink-0 uppercase
                      ${service.highlight ? 'text-white/40 group-hover:text-white' : 'text-[#006def]'}`}>
                      {service.id}
                    </span>
                  </div>
                  <h3 className={`text-base md:text-lg lg:text-xl font-black uppercase tracking-tight leading-tight
                    ${service.highlight ? 'text-white' : 'text-[#002f7a]'}`}>
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Main Description */}
              <p className={`text-sm font-medium leading-relaxed relative z-10
                ${service.highlight ? 'text-white/80 group-hover:text-white/95' : 'text-[#006def]'}`}>
                {service.desc}
              </p>

              {/* Decorative Accent Line on Hover */}
              {!service.highlight && (
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#006def] group-hover:w-full transition-all duration-500 z-0" />
              )}

              {/* Subtle Arrow Indicator */}
              <div className={`absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0
                  ${service.highlight ? 'text-white' : 'text-[#006def]'}`}>
                <ArrowRight className="w-5 h-5" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}