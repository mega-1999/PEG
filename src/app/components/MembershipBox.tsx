"use client";

import React from "react";
import { motion } from "framer-motion";
import { Network, FileText, Shield, ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

const membershipPerks = [
  {
    id: "01",
    icon: <Network className="w-5 h-5" />,
    title: "Global Precaster Network",
    desc: "Connect directly with top-tier precast manufacturing plants and infrastructure specialists across North America."
  },
  {
    id: "02",
    icon: <FileText className="w-5 h-5" />,
    title: "Engineering Vault & Standards",
    desc: "Unlock standardized parametric CAD drawing libraries, DOT compliance packages, and state-specific master calculations."
  },
  {
    id: "03",
    icon: <Shield className="w-5 h-5" />,
    title: "Priority Structural Submittals",
    desc: "Direct 24/7 telemetry and dedicated PE drafting pipelines for fast-turnaround approvals on production floors."
  }
];

const telemetryStats = [
  { label: "State Standard Compliance", val: "50 States" },
  { label: "Turnaround Acceleration", val: "2X Faster" },
  { label: "Submittal Rework Rate", val: "Zero Rework" }
];

export default function MembershipBox() {
  return (
    <section className="w-full bg-white py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 relative overflow-hidden select-none border-t border-[#002f7a]/10">

      {/* CAD WATERMARK BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#002f7a 1.5px, transparent 1.5px), linear-gradient(to right, #002f7a 0.5px, transparent 0.5px), linear-gradient(to bottom, #002f7a 0.5px, transparent 0.5px)`,
          backgroundSize: '40px 40px, 200px 200px, 200px 200px'
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-[1600px] mx-auto w-full bg-[#002f7a] text-white relative overflow-hidden shadow-xl border border-[#002f7a]"
      >
        {/* INTERNAL BLUEPRINT GRID BACKGROUND */}
        <div
          className="absolute inset-0 z-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        {/* ACCENT CORNERS */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#006def] z-10" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#006def] z-10" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12">

          {/* LEFT SIDE: HEAVY CTA */}
          <div className="lg:col-span-6 p-6 sm:p-8 md:p-12 lg:p-14 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#006def] px-3.5 py-1 mb-6 self-start shadow-sm">
                <Zap className="w-3.5 h-3.5 text-white animate-pulse" />
                <span className="font-mono text-[10px] font-black text-white uppercase tracking-[0.25em]">
                  Active Registration Node
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-4">
                Join The Precast <br />
                <span className="text-[#006def]">Family Of Precasters.</span>
              </h2>

              <p className="text-white/80 text-sm md:text-base font-medium leading-relaxed max-w-lg mb-8">
                Become an authorized node in the PEG ecosystem. Scale your plant output, eliminate revision delays, and collaborate seamlessly with licensed structural engineers nationwide.
              </p>
            </div>

            <div>
              {/* Telemetry Stats Bar */}
              <div className="grid grid-cols-3 gap-3 pt-4 pb-6 border-t border-white/10 mb-6">
                {telemetryStats.map((stat, i) => (
                  <div key={i}>
                    <span className="block text-base md:text-lg font-mono font-black text-[#006def]">
                      {stat.val}
                    </span>
                    <span className="block text-[9px] md:text-[10px] text-white/70 font-semibold uppercase tracking-tight">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-3 bg-white hover:bg-[#006def] text-[#002f7a] hover:text-white px-7 py-3.5 font-mono text-xs font-black tracking-widest uppercase transition-all duration-300 shadow-md self-start"
              >
                <span>Initialize Membership</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE: PERKS MATRIX */}
          <div className="lg:col-span-6 bg-[#002663] p-6 sm:p-8 md:p-12 lg:p-14 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/10 relative">

            {/* Status Header */}
            <div className="flex items-center justify-between gap-2 mb-8 pb-4 border-b border-white/10">
              <span className="font-mono text-[10px] font-black text-blue-200 uppercase tracking-widest">
                Network Privileges
              </span>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-[#006def] animate-ping" />
                <span className="text-[10px] font-mono font-bold text-white/70 uppercase">Online Telemetry</span>
              </div>
            </div>

            <div className="space-y-5">
              {membershipPerks.map((perk, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group flex items-start gap-4 p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#006def] transition-all duration-300 cursor-default"
                >
                  <div className="p-2.5 bg-[#006def]/20 text-[#006def] group-hover:bg-[#006def] group-hover:text-white transition-all duration-300 shrink-0 border border-[#006def]/30">
                    {perk.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="text-sm md:text-base font-black text-white uppercase tracking-tight group-hover:text-[#006def] transition-colors leading-snug">
                        {perk.title}
                      </h4>
                      <span className="text-[10px] font-mono font-bold text-white/40 group-hover:text-[#006def] shrink-0 transition-colors">
                        {perk.id}
                      </span>
                    </div>
                    <p className="text-white/70 text-xs leading-relaxed font-medium">
                      {perk.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </motion.div>

    </section>
  );
}