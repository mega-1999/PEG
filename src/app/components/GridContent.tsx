"use client";

import React from 'react';
import {
    Cpu,
    Binary,
    Workflow,
    ShieldAlert,
    Maximize,
    Zap,
    ArrowRight,
    PenTool
} from "lucide-react";
import {
    Box,
    Settings,
    CheckCircle2,
    MousePointer2,
    Activity,
    ArrowUpRight
} from "lucide-react";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
const technicalData = [
    {
        category: "Engineering",
        icon: <PenTool className="w-6 h-6" />,
        items: [
            { label: "Hourly Engineering", sub: "Professional PE services billed by the hour for agility." },
            { label: "Structural Submittals", sub: "Calculations & stamped drawings for agency approval." },
            { label: "CAD Strategy", sub: "Seamless digital integration into master site models." }
        ],
        // Default colors
        activeBg: "#023380",
        activeText: "#ffffff",
    },
    {
        category: "Technologies",
        icon: <Cpu className="w-6 h-6" />,
        items: [
            { label: "Precast Technologies", sub: "Vertical integration & structural precision." },
            { label: "Ready & Custom Softwares", sub: "Proprietary ERP & design automation." },
            { label: "Rapid Approvals", sub: "Accelerated PE stamping & submittal cycles." }
        ],
        activeBg: "#023380",
        activeText: "#ffffff",
    },
    {
        category: "Manufacturing",
        icon: <Settings className="w-6 h-6" />,
        items: [
            { label: "Mold & Forms Designs", sub: "Parametric modeling for complex geometries." },
            { label: "Mold & Forms Manufacturing", sub: "Precision CNC fabrication & assembly." }
        ],
        activeBg: "#023380",
        activeText: "#ffffff",
    },
    {
        category: "IT & Automation",
        icon: <Activity className="w-6 h-6" />,
        items: [
            { label: "Robotics Implementation", sub: "Automated casting & reinforcement placement." },
            { label: "Digital Process Optimization", sub: "Technology-Assisted Supply Chain Optimization." }
        ],
        activeBg: "#023380",
        activeText: "#ffffff",
    },
];
const GridContent = () => {
    return (
        <section className="w-full bg-white overflow-hidden">
            <div className="w-full px-10 md:px-20 py-16">

                {/* HIGH-IMPACT HEADER SECTION */}
                <div className="mb-8 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className='text-3xl md:text-5xl font-black text-[#023380] tracking-tighter leading-none'
                    >
                        PEG SOLUTIONS <br />
                        <span style={{ WebkitTextStroke: "1px #0271f1", color: "transparent" }}>FOR THE WHOLE TEAM.</span>
                    </motion.h2>

                    <div className="flex flex-col md:flex-row justify-between items-end gap-8 pt-2 border-t border-slate-100">
                        <div className="max-w-2xl">
                            <h3 className="text-xl font-black text-[#023380] uppercase tracking-tight mb-4">
                                What is Precast Engineering?
                            </h3>
                            <p className="text-[#0271f1] font-medium text-lg leading-relaxed">
                                It is the vertical integration of structural precision and manufacturing speed.
                                We provide the calculations, and hourly expertise to turn complex
                                infrastructure into rapid-assembly reality.
                            </p>
                        </div> 
                    </div>
                </div>

                {/* HEADER: Brutalist Style */}
                <div className="mb-8 border-l-8 border-[#0271f1] pl-8">
                    <p className="text-3xl md:text-5xl font-black text-[#023380] tracking-tighter">
                        TECHNICAL <span style={{ WebkitTextStroke: "1px #0271f1", color: "transparent" }}>SPECS.</span>
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                    {technicalData.map((spec, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20, backgroundColor: "#ffffff" }}
                            whileInView={{ opacity: 1, y: 0 }}
                            /* THE MAGIC: 
                               This animates the background color and box shadow on hover.
                            */
                            whileHover={{
                                backgroundColor: spec.activeBg,
                                transition: { duration: 0.3, ease: "circOut" }
                            }}
                            viewport={{ once: true }}
                            className="relative border border-slate-200 px-10 py-4 flex flex-col h-full group cursor-pointer overflow-hidden"
                        >
                            {/* Module Header */}
                            <div className="flex justify-between items-start mb-4 relative z-10">
                                <div className="p-4 bg-[#F1F5F9] text-[#0271f1] group-hover:bg-white/20 group-hover:text-white transition-colors duration-300">
                                    {spec.icon}
                                </div> 
                            </div>

                            <h3 className="text-lg font-black uppercase tracking-tighter mb-10 text-[#023380] group-hover:text-white relative z-10 transition-colors duration-300">
                                {spec.category}
                            </h3>

                            {/* Technical Bullet Points */}
                            <ul className="space-y-8 flex-1 relative z-10">
                                {spec.items.map((item, i) => (
                                    <li key={i} className="group/item cursor-default">
                                        <div className="flex items-start gap-4">
                                            <div className="mt-1.5 shrink-0 transition-transform group-hover:rotate-45 text-[#0271f1] group-hover:text-white">
                                                <ArrowUpRight className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-black uppercase tracking-wider mb-1 text-[#023380] group-hover:text-white transition-colors">
                                                    {item.label}
                                                </p>
                                                <p className="text-[11px] font-medium leading-relaxed text-[#0271f1] group-hover:text-white/70 transition-colors">
                                                    {item.sub}
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            {/* Faded Background Number */}
                            <div className="absolute bottom-4 right-6 font-mono text-[60px] font-black opacity-[0.03] select-none text-[#023380] group-hover:text-white group-hover:opacity-[0.07] transition-all">
                                0{idx + 1}
                            </div>
                        </motion.div>
                    ))}
                </div>
                {/* INNOVATION FOOTER */}
                <div className="mt-12 relative border-t border-[#023380]/10 pt-8 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0271f1]/10 text-[#0271f1] text-xs font-black tracking-[0.2em] uppercase border-l-2 border-[#0271f1] mb-4">
                        <Zap className="w-3.5 h-3.5" /> Forward Engineering
                    </div>
                    <h2 className='text-2xl md:text-4xl text-center font-black text-[#023380] tracking-tighter uppercase'>
                        Innovations, More Innovations <br />
                        <span className="text-[#0271f1]">& Non-Stop Innovations.</span>
                    </h2>
                </div>

            </div>

        </section>
    )
}

function QuickLinkCard({ icon, title, description, href, count, tag }: {
    icon: React.ReactNode,
    title: string,
    description: string,
    href: string,
    count: string,
    tag: string
}) {
    return (
        <Link href={href} className="group">
            <div className="bg-white border border-slate-200 p-10 transition-all duration-500 group-hover:border-[#0271f1] group-hover:shadow-[30px_30px_0px_-10px_rgba(2,113,241,0.04)] flex flex-col h-full relative overflow-hidden">

                {/* Top Label */}
                <div className="flex justify-between items-center mb-10">
                    <div className="text-[#0271f1] scale-125 group-hover:rotate-12 transition-transform duration-500">
                        {icon}
                    </div>
                    <span className="font-mono text-[9px] font-bold text-[#0271f1] tracking-[0.3em] uppercase">
                        {tag}
                    </span>
                </div>

                <div className="flex flex-col flex-1">
                    <h3 className="text-lg font-black text-[#023380] mb-4 tracking-tight group-hover:text-[#0271f1] transition-colors">
                        {title}
                    </h3>
                    <p className="text-sm font-medium text-[#0271f1] leading-relaxed mb-8">
                        {description}
                    </p>
                </div>

                <div className="mt-auto pt-6 border-t border-slate-50 flex justify-between items-center">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0271f1]">
                        {count}
                    </span>
                    <ArrowRight className="w-5 h-5 text-[#0271f1] -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                </div>

                {/* Corner Decoration */}
                <div className="absolute top-0 right-0 w-8 h-8 border-r border-t border-transparent group-hover:border-[#0271f1] transition-all" />
            </div>
        </Link>
    );
}

export default GridContent;