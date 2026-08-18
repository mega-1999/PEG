"use client";

import React from 'react';
import { motion } from 'framer-motion';
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

const services = [
  {
    id: "01",
    title: "Structural Engineering",
    description: "Comprehensive engineering for precast structures, ensuring load-bearing integrity and code adherence.",
    icon: <Building2 className="w-8 h-8" />
  },
  {
    id: "02",
    title: "Shop Drawings & CAD",
    description: "Highly accurate drafting to eliminate field errors and streamline production workflows.",
    icon: <PenTool className="w-8 h-8" />
  },
  {
    id: "03",
    title: "BIM & 3D Modeling",
    description: "Advanced parametric modeling and clash detection for complex precast assemblies.",
    icon: <Box className="w-8 h-8" />
  },
  {
    id: "04",
    title: "Precast Detailing",
    description: "Meticulous detailing of connections, rebar, and hardware to specified tolerances.",
    icon: <PencilRuler className="w-8 h-8" />
  },
  {
    id: "05",
    title: "Product & Mold Design",
    description: "Custom formwork and component design tailored to your exact manufacturing capabilities.",
    icon: <Wrench className="w-8 h-8" />
  },
  {
    id: "06",
    title: "Specifications & Compliance",
    description: "Rigorous standards compliance to secure Approval-Ready Documentation from all agencies.",
    icon: <ShieldCheck className="w-8 h-8" />
  },
  {
    id: "07",
    title: "Manufacturing Support",
    description: "On-site and off-site technical guidance to optimize your plant's production pipeline.",
    icon: <Factory className="w-8 h-8" />
  }
];

export default function PegServices() {
  return (
    <section className="w-full bg-slate-50 py-24 border-b border-slate-200">
      <div className="w-full px-10 md:px-20 ">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1B79EE]/10 text-[#1B79EE] text-xs font-black tracking-[0.2em] uppercase mb-4 border-l-2 border-[#1B79EE]">
            Core Competencies
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#004aad] tracking-tighter uppercase leading-[0.9]">
            Precast Engineering & <br />
            <span className="text-[#1B79EE]">Technical Services.</span>
          </h2>
          <p className="mt-6 text-slate-500 font-medium max-w-2xl leading-relaxed">
            We provide specialized, end-to-end engineering support exclusively for the precast concrete industry. From conceptual modeling to factory-floor support, our services fit your production.
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
              className="bg-white border border-slate-200 p-8 hover:border-[#1B79EE] hover:shadow-[0_10px_40px_-10px_rgba(27,121,238,0.15)] transition-all duration-300 group flex flex-col"
            >
              <div className="text-slate-300 font-mono text-sm font-bold mb-6">
                //{service.id}
              </div>
              <div className="w-14 h-14 bg-slate-50 border border-slate-100 flex items-center justify-center text-[#004aad] mb-6 group-hover:bg-[#004aad] group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-black text-[#004aad] uppercase tracking-tighter mb-3 leading-tight">
                {service.title}
              </h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 text-[#1B79EE] text-xs font-bold uppercase tracking-widest group/link mt-auto"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
          
          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: services.length * 0.1 }}
            className="bg-[#004aad] text-white p-8 border border-[#004aad] flex flex-col justify-center items-center text-center group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#1B79EE] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />
            <div className="relative z-10">
              <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">
                Need a Custom <br />Solution?
              </h3>
              <p className="text-white/80 text-sm font-medium mb-8">
                Consult with our engineering team to discuss your specific precast challenges.
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-[#004aad] h-12 px-8 font-mono text-xs font-black uppercase tracking-widest hover:bg-slate-100 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
