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
    colSpan: "lg:col-span-2", // Wide block
    highlight: true
  },
  {
    id: "02",
    title: "Agency Submittals",
    subtitle: "Fast-Track Clearance",
    desc: "Engineering Documentation & Professional Review to secure Approval-Ready Documentation.",
    icon: <Zap className="w-6 h-6" />,
    colSpan: "lg:col-span-1",
    highlight: false
  },
  {
    id: "03",
    title: "Get Specified",
    subtitle: "Basis of Design",
    desc: "We integrate your precast products into master CSI specs, making you the default choice for architects.",
    icon: <FileCheck2 className="w-6 h-6" />,
    colSpan: "lg:col-span-1",
    highlight: false
  },
  {
    id: "04",
    title: "Molds & Form Design",
    subtitle: "Casting Optimization",
    desc: "Custom formwork consulting to maximize production cycles, minimize waste, and ensure perfect geometry.",
    icon: <Box className="w-6 h-6" />,
    colSpan: "lg:col-span-1",
    highlight: false
  },
  {
    id: "05",
    title: "Turnkey Projects",
    subtitle: "End-to-End Execution",
    desc: "From initial schematic concept to final structural deployment. A singular point of accountability for your entire precast scope.",
    icon: <Briefcase className="w-6 h-6" />,
    colSpan: "lg:col-span-2", // Wide block
    highlight: true
  },
  {
    id: "06",
    title: "Reverse Engineering",
    subtitle: "Point-Cloud to CAD",
    desc: "Deconstructing legacy components or site conditions into High-Accuracy digital models for replication.",
    icon: <Undo2 className="w-6 h-6" />,
    colSpan: "lg:col-span-1",
    highlight: false
  },
  {
    id: "07",
    title: "Governmental Consulting",
    subtitle: "Federal & State Ops",
    desc: "Navigating complex DOT requirements and federal infrastructure compliance with Experienced Regulatory Guidance.",
    icon: <Landmark className="w-6 h-6" />,
    colSpan: "lg:col-span-1",
    highlight: false
  },
  {
    id: "08",
    title: "Structural Retrofitting",
    subtitle: "Adaptive Load Upgrades",
    desc: "Re-engineering existing concrete structures for new load capacities and modern seismic codes.",
    icon: <Wrench className="w-6 h-6" />,
    colSpan: "lg:col-span-1",
    highlight: false
  },
  {
    id: "09",
    title: "Testing Labs",
    subtitle: "Material Analysis",
    desc: "Rigorous concrete strength, durability, and stress testing to validate performance under Demanding Service Conditions.",
    icon: <FlaskConical className="w-6 h-6" />,
    colSpan: "lg:col-span-1",
    highlight: false
  },
  {
    id: "10",
    title: "Certifications",
    subtitle: "Inspections & QA/QC",
    desc: "On-site and in-plant auditing to guarantee Rigorous Standards Compliance to PCI, ACI, and ASTM standards.",
    icon: <ShieldCheck className="w-6 h-6" />,
    colSpan: "lg:col-span-1",
    highlight: true // Accent block
  }
];

export default function EngineeringExecuted() {
  return (
    <section className="w-full bg-[#f8fafc] py-10 px-10 md:px-20 overflow-hidden">
      <div className="">
        
        {/* HEADER: Massive Brand Statement */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-4 gap-10">
          <div className="space-y-6 max-w-5xl">
            <motion.div 
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: '80px' }}
              className="h-1 bg-[#1B79EE]"
            />
            <h2 className="text-3xl md:text-5xl font-black text-[#004aad] tracking-tighter leading-[0.9] uppercase">
              ENGINEERING <br />
              <span style={{ WebkitTextStroke: "1.5px #1B79EE", color: "transparent" }}>THAT FITS YOUR PRODUCTION.</span>
            </h2>
          </div>
          <div className="hidden lg:block max-w-sm text-right">
             <p className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.2em] leading-relaxed font-bold">
               A comprehensive suite of precast engineering protocols, tailored to your manufacturing constraints and project parameters.
             </p>
          </div>
        </div>

        {/* 10-ITEM BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {engineeringServices.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className={`group relative p-8 md:p-10 border transition-all duration-500 cursor-pointer flex flex-col justify-between overflow-hidden
                ${service.highlight 
                  ? 'bg-[#004aad] text-white border-[#004aad] hover:bg-[#1B79EE] hover:border-[#1B79EE]' 
                  : 'bg-white text-[#004aad] border-slate-200 hover:border-[#1B79EE] hover:shadow-[15px_15px_0px_rgba(27,121,238,0.05)]'} 
                ${service.colSpan}
              `}
            >
              {/* Top Row: Icon & ID */}
              <div className="flex justify-between items-start mb-12 relative z-10">
                <div className={`p-4 transition-colors duration-500 
                  ${service.highlight ? 'bg-white/10 text-white group-hover:bg-white group-hover:text-[#1B79EE]' : 'bg-slate-50 text-[#1B79EE] group-hover:bg-[#004aad] group-hover:text-white'}`}>
                  {service.icon}
                </div>
                <span className={`font-mono text-[12px] font-black tracking-widest uppercase
                  ${service.highlight ? 'text-white/30 group-hover:text-white' : 'text-slate-300 group-hover:text-[#1B79EE]'}`}>
                  {service.id}
                </span>
              </div>

              {/* Main Content */}
              <div className="relative z-10">
                <p className={`font-mono text-[9px] uppercase tracking-[0.2em] mb-3 font-bold
                  ${service.highlight ? 'text-[#1B79EE] group-hover:text-white' : 'text-slate-400'}`}>
                  {service.subtitle}
                </p>
                <h3 className={`text-xl font-black uppercase tracking-tighter mb-4 leading-none
                  ${service.highlight ? 'text-white' : 'text-[#004aad]'}`}>
                  {service.title}
                </h3>
                <p className={`text-sm font-medium leading-relaxed
                  ${service.highlight ? 'text-white/70 group-hover:text-white/90' : 'text-slate-500'}`}>
                  {service.desc}
                </p>
              </div>

              {/* Decorative Accent Line on Hover */}
              {!service.highlight && (
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#1B79EE] group-hover:w-full transition-all duration-700 z-0" />
              )}
              
              {/* Subtle Arrow Indicator */}
              <div className={`absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0
                  ${service.highlight ? 'text-white' : 'text-[#1B79EE]'}`}>
                  <ArrowRight className="w-5 h-5" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}