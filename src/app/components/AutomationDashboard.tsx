"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bot, GitMerge, Factory, Gauge, Terminal, ArrowRight, ScanLine } from 'lucide-react';

const automationNodes = [
  {
    id: "AUTO_ROB_01",
    title: "Robotic Fabrication",
    subtitle: "Zero-Touch Assembly",
    description: "Automated mesh welding, laser-guided formwork plotting, and robotic concrete distribution ensure millimeter precision without human fatigue.",
    icon: <Bot className="w-8 h-8" />,
    metric: "100% CNC Precision",
    colSpan: "lg:col-span-2"
  },
  {
    id: "AUTO_ALG_02",
    title: "Algorithmic Engineering",
    subtitle: "Parametric Generation",
    description: "Our scripts automate the generation of shop drawings, rebar bending schedules, and lifting calculations in seconds, bypassing manual drafting errors.",
    icon: <GitMerge className="w-8 h-8" />,
    metric: "0.02s Render Time",
    colSpan: "lg:col-span-1"
  },
  {
    id: "AUTO_BCH_03",
    title: "IoT Batching Systems",
    subtitle: "Smart Mix Telemetry",
    description: "Sensors continuously monitor aggregate moisture and ambient temperature, automatically adjusting the mix design in real-time for perfect curing.",
    icon: <Gauge className="w-8 h-8" />,
    metric: "Auto-Calibration",
    colSpan: "lg:col-span-1"
  },
  {
    id: "AUTO_YRD_04",
    title: "Autonomous Logistics",
    subtitle: "Smart Yard Management",
    description: "RFID-tagged elements are tracked via drone and autonomous carriers, optimizing yard storage and orchestrating precise just-in-time delivery loading.",
    icon: <Factory className="w-8 h-8" />,
    metric: "Real-Time Tracking",
    colSpan: "lg:col-span-2"
  }
];

export default function AutomationDashboard() {
  const [terminalText, setTerminalText] = useState("INITIALIZING SYSTEM...");
  const logLines = [
    "> RUNNING DIAGNOSTICS... [OK]",
    "> SYNCING ROBOTIC WELDERS... [SYNCED]",
    "> CALIBRATING LASER PLOTTERS... [ACTIVE]",
    "> INITIATING ALGORITHMIC DRAFT... [PROCESSING]",
    "> SYSTEM AUTOMATION RUNNING AT 100% CAPACITY."
  ];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTerminalText(logLines[i % logLines.length]);
      i++;
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-[#004aad] text-white py-32 px-10 md:px-20 overflow-hidden relative font-sans">
      
      {/* ANIMATED BRAND CIRCUIT BACKGROUND */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#1B79EE" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          <motion.line 
            x1="0" y1="200" x2="2000" y2="200" 
            stroke="#1B79EE" strokeWidth="2" 
            animate={{ strokeDashoffset: [1000, 0] }} 
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            strokeDasharray="20 1000"
          />
          <motion.line 
            x1="400" y1="0" x2="400" y2="2000" 
            stroke="#1B79EE" strokeWidth="2" 
            animate={{ strokeDashoffset: [0, 1000] }} 
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            strokeDasharray="50 800"
          />
        </svg>
      </div>

      <div className="relative z-10">
        
        {/* TOP COMMAND STRIP */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-10">
          <div className="space-y-6 max-w-4xl">
            <div className="flex items-center gap-3 text-[#1B79EE] font-mono text-[10px] font-black uppercase tracking-[0.5em]">
              <ScanLine className="w-5 h-5 animate-pulse" /> Autonomous Infrastructure
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none uppercase text-white">
              INDUSTRIAL <br />
              <span className="text-white">AUTOMATION.</span>
            </h2>
          </div>

          {/* BRANDED TERMINAL BOX */}
          <div className="bg-white border border-[#1B79EE]/30 p-6 w-full max-w-md h-32 flex flex-col justify-end relative overflow-hidden rounded-sm shadow-[0_0_20px_rgba(27,121,238,0.1)]">
             <div className="absolute top-4 left-4 flex gap-2">
                <div className="w-2 h-2 rounded-full bg-[#1B79EE]" />
                <div className="w-2 h-2 rounded-full bg-[#1B79EE]/60" />
                <div className="w-2 h-2 rounded-full bg-[#1B79EE]/30" />
             </div>
             <Terminal className="absolute top-4 right-4 w-5 h-5 text-[#1B79EE]/40" />
             <p className="font-mono text-xs text-[#1B79EE] font-bold uppercase tracking-widest mt-4">
               {terminalText}
               <motion.span 
                 animate={{ opacity: [0, 1, 0] }} 
                 transition={{ repeat: Infinity, duration: 0.8 }}
                 className="inline-block w-2 h-3 bg-[#1B79EE] ml-1 translate-y-[2px]" 
               />
             </p>
          </div>
        </div>

        {/* AUTOMATION BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {automationNodes.map((node, idx) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              // Modified hover behavior: changes from clean white background to full bright blue framework matrix
              className={`group relative bg-white border border-[#1B79EE]/20 p-10 hover:bg-[#1B79EE] transition-all duration-500 cursor-pointer flex flex-col justify-between overflow-hidden ${node.colSpan}`}
            >
              
              {/* Top Row: Branded Icon Unit */}
              <div className="flex justify-between items-start mb-12 relative z-10">
                <div className="p-4 border backdrop-blur-sm transition-all duration-500 group-hover:scale-110 bg-[#004aad]/5 text-[#004aad] border-[#004aad]/10 group-hover:bg-white group-hover:text-[#1B79EE] group-hover:border-white group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                  {node.icon}
                </div>
                <div className="text-right">
                  <div className="w-2 h-2 rounded-full mb-2 ml-auto bg-[#1B79EE] group-hover:bg-white transition-colors" />
         
                </div>
              </div>

              {/* Data Content Block */}
              <div className="relative z-10 mb-10">
                <p className="font-mono text-[9px] uppercase tracking-widest font-black mb-3 text-[#1B79EE] group-hover:text-white/80 transition-colors">
                  {node.subtitle}
                </p>
                <h3 className="text-xl lg:text-2xl font-black uppercase tracking-tighter mb-4 text-[#004aad] group-hover:text-white transition-colors">
                  {node.title}
                </h3>
                <p className="text-[#004aad]/70 group-hover:text-white/90 text-sm font-medium leading-relaxed md:max-w-[85%] transition-colors">
                  {node.description}
                </p>
              </div>

              {/* Functional Bottom Bar */}
              <div className="mt-auto pt-6 border-t flex justify-between items-center relative z-10 border-[#004aad]/10 group-hover:border-white/20 transition-colors duration-500">
                <span className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-[#1B79EE] group-hover:text-white transition-colors">
                  {node.metric}
                </span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2 text-[#1B79EE] group-hover:text-white" />
              </div>

              {/* Ambient Micro-Glow inside the container architecture */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none bg-white" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}