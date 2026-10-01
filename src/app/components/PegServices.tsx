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
    image: getAssetUrl("/assets/images/PAIPING.2_-_Copy.png")
  },
  {
    id: "02",
    title: "Shop Drawings & CAD",
    description: "Highly accurate drafting to eliminate field errors and streamline production workflows.",
    icon: <PenTool className="w-6 h-6" />,
    video: getAssetUrl("/assets/video/E24_v3_final_blue_bg.mp4"),
    image: getAssetUrl("/assets/images/2440_MANHOLE_CUT_VIEW.png")
  },
  {
    id: "03",
    title: "Mold & Formwork Engineering",
    description: "Custom heavy-duty formwork engineering, magnetic shuttering systems, and mold optimization for precast casting.",
    icon: <Box className="w-6 h-6" />,
    video: getAssetUrl("/assets/video/E25_V2_final.mp4"),
    image: getAssetUrl("/assets/images/trench-forms-01-5001.JPG")
  },
  {
    id: "04",
    title: "Precast Detailing",
    description: "Meticulous detailing of connections, rebar, and hardware to specified tolerances.",
    icon: <PencilRuler className="w-6 h-6" />,
    video: getAssetUrl("/assets/video/72_precast_manhole_Doghouse.646.mp4"),
    image: getAssetUrl("/assets/images/72_precast_manhole_Double_Internal_Drop.657.png")
  },
  {
    id: "05",
    title: "Product & Mold Design",
    description: "Custom formwork and component design tailored to your exact manufacturing capabilities.",
    icon: <Wrench className="w-6 h-6" />,
    video: getAssetUrl("/assets/video/E34_V2_final.mp4"),
    image: getAssetUrl("/assets/images/Manhole_Type_1.2.674.png")
  },
  {
    id: "06",
    title: "Specifications & Compliance",
    description: "Rigorous standards compliance to secure Approval-Ready Documentation from all agencies.",
    icon: <ShieldCheck className="w-6 h-6" />,
    video: getAssetUrl("/assets/video/E38_V3_final_blue_bg.mp4"),
    image: getAssetUrl("/assets/images/10_FT_LOW_DOME.117.png")
  },
  {
    id: "07",
    title: "Manufacturing Support",
    description: "On-site and off-site technical guidance to optimize your plant's production pipeline.",
    icon: <Factory className="w-6 h-6" />,
    video: getAssetUrl("/assets/video/MARINE_PRODUCT/E20_V1_final.mp4"),
    image: getAssetUrl("/assets/images/a04.JPG")
  }
];

export default function PegServices() {
  return (
    <section id="services" className="w-full bg-white py-4 border-b border-[#023380]/10">
      <div className="w-full px-10 md:px-20">
        
        {/* Section Header */}
        <div className="mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0271f1]/10 text-[#0271f1] text-xs font-black tracking-[0.2em] uppercase mb-4 border-l-2 border-[#0271f1]">
            Core Competencies
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#023380] tracking-tighter uppercase leading-[0.9]">
            Precast Engineering & <br />
            <span className="text-[#0271f1]">Technical Services.</span>
          </h2>
          <p className="mt-4 text-[#023380] font-semibold max-w-2xl text-sm md:text-base leading-relaxed">
            We provide specialized, end-to-end engineering support exclusively for the precast concrete industry. Each service includes technical video demonstrations and CAD execution blueprints.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-[#023380]/15 hover:border-[#0271f1] shadow-xs hover:shadow-lg transition-all duration-300 group flex flex-col overflow-hidden"
            >
              {/* VIDEO LOOP SHOWCASE THUMBNAIL - CRYSTAL CLEAR */}
              <div className="relative w-full aspect-video bg-white overflow-hidden shrink-0 border-b border-[#023380]/10">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  poster={service.image}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                >
                  <source src={service.video} type="video/mp4" />
                </video>

                <div className="absolute top-2 right-2 z-10 font-mono text-[9px] font-black text-white bg-[#023380] px-2 py-0.5 tracking-widest uppercase shadow-xs">
                  {service.id}
                </div>
              </div>

              {/* CARD CONTENT */}
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 bg-blue-50 border border-[#0271f1]/20 flex items-center justify-center text-[#023380] mb-3 group-hover:bg-[#023380] group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>

                  <h3 className="text-base font-black text-[#023380] uppercase tracking-tight mb-2 leading-tight group-hover:text-[#0271f1] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-[#023380] text-xs font-semibold leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <Link 
                  href="#contact" 
                  className="inline-flex items-center gap-2 text-[#0271f1] text-xs font-bold uppercase tracking-widest group/link mt-auto pt-4 border-t border-[#023380]/10"
                >
                  <span>Request Technical Guide</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
          
          {/* CTA CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: services.length * 0.1 }}
            className="bg-[#023380] text-white p-6 border border-[#023380] flex flex-col justify-between items-start group relative overflow-hidden shrink-0"
          >
            <div className="absolute inset-0 bg-[#0271f1] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />
            
            <div className="relative z-10 my-auto w-full">
              <span className="inline-block px-2.5 py-1 bg-white/10 text-blue-100 font-mono text-[10px] font-black uppercase tracking-widest mb-4 border border-white/20">
                Custom Engineering
              </span>
              <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 leading-tight">
                Need a Custom <br />Solution?
              </h3>
              <p className="text-white/80 text-xs font-medium leading-relaxed mb-8">
                Consult with our PE engineering team for tailored formwork, structural submittals, and plant automation pipelines.
              </p>
              <Link 
                href="#contact"
                className="w-full inline-flex items-center justify-center bg-white text-[#023380] h-11 font-mono text-xs font-black uppercase tracking-widest hover:bg-blue-50 transition-colors"
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
