"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Zap,
  PenTool,
  Settings,
  Activity,
  ArrowUpRight,
} from "lucide-react";

const technicalData = [
  {
    category: "Engineering",
    icon: <PenTool className="w-5 h-5" />,
    items: [
      { label: "Hourly Engineering", sub: "Professional PE services billed by the hour for agility." },
      { label: "Structural Submittals", sub: "Calculations & stamped drawings for agency approval." },
      { label: "CAD Strategy", sub: "Seamless digital integration into master site models." }
    ],
    activeBg: "#006def",
    activeText: "#ffffff",
  },
  {
    category: "Technologies",
    icon: <Cpu className="w-5 h-5" />,
    items: [
      { label: "Precast Technologies", sub: "Vertical integration & structural precision." },
      { label: "Ready & Custom Softwares", sub: "Proprietary ERP & design automation." },
      { label: "Rapid Approvals", sub: "Accelerated PE stamping & submittal cycles." }
    ],
    activeBg: "#006def",
    activeText: "#ffffff",
  },
  {
    category: "Manufacturing",
    icon: <Settings className="w-5 h-5" />,
    items: [
      { label: "Mold & Forms Designs", sub: "Parametric modeling for complex geometries." },
      { label: "Mold & Forms Manufacturing", sub: "Precision CNC fabrication & assembly." }
    ],
    activeBg: "#006def",
    activeText: "#ffffff",
  },
  {
    category: "IT & Automation",
    icon: <Activity className="w-5 h-5" />,
    items: [
      { label: "Robotics Implementation", sub: "Automated casting & reinforcement placement." },
      { label: "Digital Process Optimization", sub: "Technology-Assisted Supply Chain Optimization." }
    ],
    activeBg: "#006def",
    activeText: "#ffffff",
  },
];

const GridContent = () => {
  return (
    <section id="technical-vault" className="w-full bg-[#002f7a] text-white overflow-hidden py-2 sm:py-4 md:py-6 border-b border-white/10">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">

        {/* HEADER */}
        <div className="mb-4 md:mb-6 border-l-4 md:border-l-8 border-[#006def] pl-3 sm:pl-4 md:pl-6">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none">
            TECHNICAL <span className="text-[#006def]">SPECS.</span>
          </h2>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {technicalData.map((spec, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                backgroundColor: spec.activeBg,
                transition: { duration: 0.25, ease: "circOut" }
              }}
              viewport={{ once: true }}
              className="relative bg-white text-[#002f7a] hover:text-white p-5 sm:p-6 flex flex-col justify-between h-full group cursor-pointer overflow-hidden shadow-md transition-colors duration-300"
            >
              <div>
                {/* Module Header: Icon Left, Text Right */}
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100 group-hover:border-white/20 transition-colors relative z-10">
                  <div className="p-2.5 bg-[#002f7a]/10 text-[#002f7a] group-hover:bg-white/20 group-hover:text-white transition-colors duration-300 shrink-0">
                    {spec.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-black uppercase tracking-tight text-[#002f7a] group-hover:text-white relative z-10 transition-colors duration-300">
                    {spec.category}
                  </h3>
                </div>

                {/* Technical Bullet Points */}
                <ul className="space-y-3.5 relative z-10">
                  {spec.items.map((item, i) => (
                    <li key={i} className="group/item cursor-default">
                      <div className="flex items-start gap-2.5">
                        <div className="mt-0.5 shrink-0 text-[#006def] group-hover:text-white transition-colors">
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm font-black uppercase tracking-wider mb-0.5 text-[#002f7a] group-hover:text-white transition-colors">
                            {item.label}
                          </p>
                          <p className="text-[11px] sm:text-xs font-semibold leading-relaxed text-[#006def] group-hover:text-white/90 transition-colors">
                            {item.sub}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Faded Background Number */}
              <div className="absolute bottom-2 right-3 font-mono text-[56px] font-black opacity-[0.05] group-hover:opacity-[0.12] select-none text-[#002f7a] group-hover:text-white transition-all pointer-events-none leading-none">
                0{idx + 1}
              </div>
            </motion.div>
          ))}
        </div>

        {/* INNOVATION FOOTER */}
        <div className="mt-4 md:mt-6 relative border-t border-white/15 pt-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white text-xs font-black tracking-[0.2em] uppercase border-l-2 border-[#006def] mb-2">
            <Zap className="w-3.5 h-3.5 text-[#006def]" /> Forward Engineering
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-center font-black text-white tracking-tighter uppercase leading-tight">
            Innovations, More Innovations
            <span className="text-[#006def]"> & Non-Stop Innovations.</span>
          </h2>
        </div>

      </div>
    </section>
  );
};

export default GridContent;