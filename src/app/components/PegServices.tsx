"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Building2,
  PenTool,
  Box,
  PencilRuler,
  Wrench,
  ShieldCheck,
  Factory,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import { getAssetUrl } from '@/lib/utils';

const services = [
  {
    id: "01",
    title: "Structural Engineering",
    description: "Comprehensive engineering for precast structures, ensuring load-bearing integrity and code adherence.",
    icon: <Building2 className="w-6 h-6" />,
    video: getAssetUrl("/assets/video/E20_V1_final.mp4"),
    image: getAssetUrl("/assets/images/PAIPING.2_-_Copy.png"),
    videoBg: "bg-white" // Changeable: "bg-white" | "bg-[#002f7a]" | "bg-slate-900"
  },
  {
    id: "02",
    title: "Shop Drawings & CAD",
    description: "Highly accurate drafting to eliminate field errors and streamline production workflows.",
    icon: <PenTool className="w-6 h-6" />,
    video: getAssetUrl("/assets/video/Shop_Drawings_CAD.mp4"),
    image: getAssetUrl("/assets/images/2440_MANHOLE_CUT_VIEW.png"),
    videoBg: "bg-white" // Changeable: "bg-white" | "bg-[#002f7a]" | "bg-slate-900"
  },
  {
    id: "03",
    title: "Mold & Formwork Engineering",
    description: "Custom heavy-duty formwork engineering, magnetic shuttering systems, and mold optimization for precast casting.",
    icon: <Box className="w-6 h-6" />,
    video: getAssetUrl("/assets/video/E25_V2_final.mp4"),
    image: getAssetUrl("/assets/images/trench-forms-01-5001.JPG"),
    videoBg: "bg-white" // Changeable: "bg-white" | "bg-[#002f7a]" | "bg-slate-900"
  },
  {
    id: "04",
    title: "Precast Detailing",
    description: "Meticulous detailing of connections, rebar, and hardware to specified tolerances.",
    icon: <PencilRuler className="w-6 h-6" />,
    video: getAssetUrl("/assets/video/Precast_Detailing.mp4"),
    image: getAssetUrl("/assets/images/72_precast_manhole_Double_Internal_Drop.657.png"),
    videoBg: "bg-white" // Changeable: "bg-white" | "bg-[#002f7a]" | "bg-slate-900"
  },
  {
    id: "05",
    title: "Product & Mold Design",
    description: "Custom formwork and component design tailored to your exact manufacturing capabilities.",
    icon: <Wrench className="w-6 h-6" />,
    video: getAssetUrl("/assets/video/E34_V2_final.mp4"),
    image: getAssetUrl("/assets/images/Manhole_Type_1.2.674.png"),
    videoBg: "bg-white" // Changeable: "bg-white" | "bg-[#002f7a]" | "bg-slate-900"
  },
  {
    id: "06",
    title: "Specifications & Compliance",
    description: "Rigorous standards compliance to secure Approval-Ready Documentation from all agencies.",
    icon: <ShieldCheck className="w-6 h-6" />,
    video: getAssetUrl("/assets/video/Specifications_and_Compliance.mp4"),
    image: getAssetUrl("/assets/images/10_FT_LOW_DOME.117.png"),
    videoBg: "bg-white" // Changeable: "bg-white" | "bg-[#002f7a]" | "bg-slate-900"
  },
  {
    id: "07",
    title: "Manufacturing Support",
    description: "On-site and off-site technical guidance to optimize your plant's production pipeline.",
    icon: <Factory className="w-6 h-6" />,
    video: getAssetUrl("/assets/video/MARINE_PRODUCT/E20_V1_final.mp4"),
    image: getAssetUrl("/assets/images/a04.JPG"),
    videoBg: "bg-white" // Changeable: "bg-white" | "bg-[#002f7a]" | "bg-slate-900"
  }
];

export default function PegServices() {
  return (
    <section id="services" className="w-full bg-white py-2 sm:py-4 md:py-6 border-b border-[#002f7a]/10">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">

        {/* Section Header: Left Text, Right Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center mb-4 md:mb-6 border-b border-[#002f7a]/10 pb-4 md:pb-5">
          {/* Left Text */}
          <div className="lg:col-span-8 space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-[#006def]/10 text-[#006def] text-[11px] font-black tracking-[0.2em] uppercase border-l-2 border-[#006def]">
              Core Competencies
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-[#002f7a] tracking-tighter uppercase leading-[0.9]">
              Precast Engineering & <br />
              <span className="text-[#006def]">Technical Services.</span>
            </h2>
            <p className="text-[#002f7a] font-semibold max-w-2xl text-xs sm:text-sm leading-relaxed">
              We provide specialized, end-to-end engineering support exclusively for the precast concrete industry. Each service includes technical video demonstrations and CAD execution blueprints.
            </p>
          </div>

          {/* Right Mockup Graphic - Compact with Fast 2px Auto-Jump Infinite Loop */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={{
                y: [0, -3, 0, 1.5, 0],
              }}
              transition={{
                y: {
                  repeat: Infinity,
                  duration: 1.0,
                  ease: "easeInOut",
                },
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 },
              }}
              className="relative w-full max-w-[260px] sm:max-w-[300px] h-32 sm:h-36 md:h-40 group cursor-pointer"
            >
              <Image
                src={getAssetUrl("/assets/Precast_Engineering_Group_catalog_mockup.png")}
                alt="Precast Engineering Group Catalog Mockup"
                fill
                sizes="(max-width: 768px) 100vw, 30vw"
                className="object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </motion.div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-stretch">
          {services.map((service, index) => {
            const isWhiteVideo = service.videoBg === "bg-white" || service.videoBg?.includes("white");

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`border hover:border-[#006def] shadow-xs hover:shadow-lg transition-all duration-300 group flex flex-col justify-between h-[395px] overflow-hidden ${
                  isWhiteVideo ? "bg-[#002f7a] border-[#002f7a]" : "bg-white border-[#002f7a]/15"
                }`}
              >
                {/* VIDEO LOOP SHOWCASE THUMBNAIL - EXACT 215PX */}
                <div className={`relative w-full h-[215px] ${service.videoBg || 'bg-[#002f7a]'} overflow-hidden shrink-0 border-b ${
                  isWhiteVideo ? "border-[#002f7a]/20" : "border-[#002f7a]/10"
                } flex items-center justify-center p-2`}>
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    suppressHydrationWarning
                    poster={service.image}
                    className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-500"
                  >
                    <source src={service.video} type="video/mp4" />
                  </video>

                  <div className={`absolute top-2 right-2 z-10 font-mono text-[9px] font-black px-2 py-0.5 tracking-widest uppercase shadow-xs ${
                    isWhiteVideo ? "text-white bg-[#002f7a]" : "text-[#002f7a] bg-white border border-[#002f7a]/20"
                  }`}>
                    {service.id}
                  </div>
                </div>

                {/* CARD CONTENT: ICON LEFT + TITLE RIGHT - EXACT 180PX */}
                <div className={`p-4 h-[180px] shrink-0 flex flex-col justify-between ${
                  isWhiteVideo ? "bg-[#002f7a] text-white" : "bg-white text-[#002f7a]"
                }`}>
                  <div className="space-y-2">
                    {/* Horizontal Header: Icon on Left, Title on Right */}
                    <div className="flex items-center gap-2.5">
                      <div className={`w-8 h-8 shrink-0 flex items-center justify-center transition-colors duration-300 ${
                        isWhiteVideo
                          ? "bg-white/10 border border-white/20 text-white group-hover:bg-[#006def]"
                          : "bg-blue-50 border border-[#006def]/20 text-[#002f7a] group-hover:bg-[#002f7a] group-hover:text-white"
                      }`}>
                        {React.cloneElement(service.icon as React.ReactElement<{ className?: string }>, { className: "w-4 h-4" })}
                      </div>

                      <h3 className={`text-xs md:text-sm font-black uppercase tracking-tight leading-snug transition-colors ${
                        isWhiteVideo
                          ? "text-white group-hover:text-blue-200"
                          : "text-[#002f7a] group-hover:text-[#006def]"
                      }`}>
                        {service.title}
                      </h3>
                    </div>

                    <p className={`text-[11px] md:text-xs leading-relaxed line-clamp-3 ${
                      isWhiteVideo
                        ? "text-white/85 font-normal"
                        : "text-[#002f7a] font-semibold"
                    }`}>
                      {service.description}
                    </p>
                  </div>

                  <Link
                    href="#contact"
                    className={`inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest group/link pt-2.5 border-t transition-colors ${
                      isWhiteVideo
                        ? "text-blue-200 hover:text-white border-white/20"
                        : "text-[#006def] border-[#002f7a]/10"
                    }`}
                  >
                    <span>Request Technical Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}

          {/* CTA CARD - EXACT 395PX */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: services.length * 0.1 }}
            className="bg-[#002f7a] text-white p-5 border border-[#002f7a] flex flex-col justify-between items-start group relative overflow-hidden shrink-0 cursor-pointer h-[395px]"
          >
            <div className="absolute inset-0 bg-[#006def] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />

            <div className="relative z-10 my-auto w-full">
              <span className="inline-block px-2 py-0.5 bg-white/10 text-blue-100 group-hover:bg-[#002f7a]/15 font-mono text-[9px] font-black uppercase tracking-widest mb-3 border border-white/20 transition-colors duration-300">
                Custom Engineering
              </span>
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter mb-3 leading-tight group-hover:text-[#002f7a] transition-colors duration-300">
                Need a Custom <br />Solution?
              </h3>
              <p className="text-white/80 text-[11px] md:text-xs font-medium leading-relaxed mb-6 transition-colors duration-300">
                Consult with our PE engineering team for tailored formwork, structural submittals, and plant automation pipelines.
              </p>
              <Link
                href="#contact"
                className="w-full inline-flex items-center justify-center bg-white text-[#002f7a] group-hover:bg-[#002f7a] group-hover:text-white h-10 font-mono text-xs font-black uppercase tracking-widest hover:!bg-white hover:!text-[#002f7a] transition-all duration-300 shadow-sm"
              >
                Contact Engineers
              </Link>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
