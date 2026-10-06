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
        activeBg: "#006def",
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
        activeBg: "#006def",
        activeText: "#ffffff",
    },
    {
        category: "Manufacturing",
        icon: <Settings className="w-6 h-6" />,
        items: [
            { label: "Mold & Forms Designs", sub: "Parametric modeling for complex geometries." },
            { label: "Mold & Forms Manufacturing", sub: "Precision CNC fabrication & assembly." }
        ],
        activeBg: "#006def",
        activeText: "#ffffff",
    },
    {
        category: "IT & Automation",
        icon: <Activity className="w-6 h-6" />,
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
        <section id="technical-vault" className="w-full bg-[#002f7a] text-white overflow-hidden py-16 md:py-20 border-b border-white/10">
            <div className="w-full px-10 md:px-20">

                {/* HEADER: Brutalist Style */}
                <div className="mb-10 border-l-8 border-[#006def] pl-6 md:pl-8">
                    <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase">
                        TECHNICAL <span className="text-[#006def]">SPECS.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                    {technicalData.map((spec, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{
                                backgroundColor: spec.activeBg,
                                transition: { duration: 0.3, ease: "circOut" }
                            }}
                            viewport={{ once: true }}
                            className="relative bg-white text-[#002f7a] hover:text-white p-8 md:p-10 flex flex-col justify-between h-full group cursor-pointer overflow-hidden shadow-lg transition-colors duration-300"
                        >
                            <div>
                                {/* Module Header */}
                                <div className="flex justify-between items-start mb-6 relative z-10">
                                    <div className="p-3.5 bg-[#002f7a]/10 text-[#002f7a] group-hover:bg-white/20 group-hover:text-white transition-colors duration-300">
                                        {spec.icon}
                                    </div>
                                </div>

                                <h3 className="text-xl font-black uppercase tracking-tight mb-8 text-[#002f7a] group-hover:text-white relative z-10 transition-colors duration-300">
                                    {spec.category}
                                </h3>

                                {/* Technical Bullet Points */}
                                <ul className="space-y-6 relative z-10">
                                    {spec.items.map((item, i) => (
                                        <li key={i} className="group/item cursor-default">
                                            <div className="flex items-start gap-3.5">
                                                <div className="mt-1 shrink-0 transition-transform group-hover:rotate-45 text-[#006def] group-hover:text-white">
                                                    <ArrowUpRight className="w-4 h-4" />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-black uppercase tracking-wider mb-1 text-[#002f7a] group-hover:text-white transition-colors">
                                                        {item.label}
                                                    </p>
                                                    <p className="text-xs font-semibold leading-relaxed text-[#006def] group-hover:text-white/90 transition-colors">
                                                        {item.sub}
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Faded Background Number */}
                            <div className="absolute bottom-3 right-5 font-mono text-[70px] font-black opacity-[0.05] group-hover:opacity-[0.12] select-none text-[#002f7a] group-hover:text-white transition-all pointer-events-none">
                                0{idx + 1}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* INNOVATION FOOTER */}
                <div className="mt-6 relative border-t border-white/15 pt-6 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white text-xs font-black tracking-[0.2em] uppercase border-l-2 border-[#006def] mb-4">
                        <Zap className="w-3.5 h-3.5 text-[#006def]" /> Forward Engineering
                    </div>
                    <h2 className='text-2xl md:text-4xl text-center font-black text-white tracking-tighter uppercase'>
                        Innovations, More Innovations
                        <span className="text-[#006def]"> & Non-Stop Innovations.</span>
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
            <div className="bg-white border border-slate-200 p-10 transition-all duration-500 group-hover:border-[#006def] group-hover:shadow-[30px_30px_0px_-10px_rgba(0, 109, 239,0.04)] flex flex-col h-full relative overflow-hidden">

                {/* Top Label */}
                <div className="flex justify-between items-center mb-10">
                    <div className="text-[#006def] scale-125 group-hover:rotate-12 transition-transform duration-500">
                        {icon}
                    </div>
                    <span className="font-mono text-[9px] font-bold text-[#006def] tracking-[0.3em] uppercase">
                        {tag}
                    </span>
                </div>

                <div className="flex flex-col flex-1">
                    <h3 className="text-lg font-black text-[#002f7a] mb-4 tracking-tight group-hover:text-[#006def] transition-colors">
                        {title}
                    </h3>
                    <p className="text-sm font-medium text-[#006def] leading-relaxed mb-8">
                        {description}
                    </p>
                </div>

                <div className="mt-auto pt-6 border-t border-slate-50 flex justify-between items-center">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#006def]">
                        {count}
                    </span>
                    <ArrowRight className="w-5 h-5 text-[#006def] -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                </div>

                {/* Corner Decoration */}
                <div className="absolute top-0 right-0 w-8 h-8 border-r border-t border-transparent group-hover:border-[#006def] transition-all" />
            </div>
        </Link>
    );
}

export default GridContent;