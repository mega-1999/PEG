"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Monitor,
  Tablet,
  Smartphone,
  Layers,
  ShieldCheck,
  Zap,
  ArrowRight,
  Tv,
  PlayCircle,
  BookOpen,
  Share2,
  Radio,
  CheckCircle2,
  Cpu,
  Workflow,
  Sparkles
} from 'lucide-react';
import { getAssetUrl } from '@/lib/utils';

interface DeviceMockup {
  id: string;
  name: string;
  role: string;
  badge: string;
  icon: React.ReactNode;
  videoSrc: string;
  headline: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
}

const deviceMockups: DeviceMockup[] = [
  {
    id: "desktop",
    name: "Desktop Workstation",
    role: "Engineering Office & CAD Center",
    badge: "DESKTOP PORTAL",
    icon: <Monitor className="w-4 h-4" />,
    videoSrc: "/assets/video/Mockup/Precast_Engineering_Group_Desktop_Live_Mockup_1.mp4",
    headline: "Full-Scale Structural FEA & Shop Drawing Automation",
    description: "Designed for structural engineers, project managers, and estimators. Perform multi-cell box culvert calculations, generate full fabrication submittal packages, and review PE stamped shop drawings in high resolution.",
    features: [
      "AASHTO H-20 & HL-93 live structural load calculation",
      "Automated bill of materials (BOM) & rebar bending schedules",
      "Direct CAD/BIM export (Revit, AutoCAD, SolidWorks)"
    ],
    specs: [
      { label: "Engine", value: "3D Parametric CAD" },
      { label: "Submittals", value: "PE Stamped (50 States)" },
      { label: "Resolution", value: "Native 4K Ultra-HD" }
    ]
  },
  {
    id: "tablet",
    name: "Tablet & iPad Live",
    role: "Plant Floor & Quality Assurance",
    badge: "SHOP FLOOR QA/QC",
    icon: <Tablet className="w-4 h-4" />,
    videoSrc: "/assets/video/Mockup/Precast_Engineering_Group_I-pad_Live_Mockup_1.mp4",
    headline: "Real-Time Casting Bed QC & Crane Stripping Telemetry",
    description: "Built for plant managers and QA inspectors on the precast production floor. Verify rebar cage clearances, log concrete cylinder pour times, inspect hydraulic mold forms, and sign off NPCA plant certifications.",
    features: [
      "Digital pre-pour inspection checklists & digital signoffs",
      "Hydraulic collapsible core stripping timer & telemetry",
      "Batch plant concrete mix verification & slump logs"
    ],
    specs: [
      { label: "Interface", value: "Touch-Optimized" },
      { label: "Certification", value: "NPCA & PCI Ready" },
      { label: "Turnover", value: "2x Daily Cycle" }
    ]
  },
  {
    id: "mobile",
    name: "Mobile Companion",
    role: "Jobsite Superintendent & Field Dispatch",
    badge: "JOBSITE DISPATCH",
    icon: <Smartphone className="w-4 h-4" />,
    videoSrc: "/assets/video/Mockup/Precast_Engineering_Group_Mobile_Live_Mockup_1.mp4",
    headline: "On-Site Delivery Verification & Instant Spec Lookup",
    description: "Engineered for field superintendents, crane riggers, and DOT inspectors. Scan QR codes on delivered precast vaults, pull up certified lifting diagrams, inspect joint sealant specs, and request instant engineering field revisions.",
    features: [
      "Instant 1-tap QR scan for piece delivery & rigging specs",
      "Offline cache mode for remote highway & rural utility jobsites",
      "Live chat channel direct to PE structural stamping engineers"
    ],
    specs: [
      { label: "Mobility", value: "iOS & Android" },
      { label: "Sync", value: "Instant Cloud Sync" },
      { label: "Access", value: "Offline Capable" }
    ]
  }
];

const digitalChannels = [
  {
    id: "CH_01",
    title: "YouTube Channel",
    subtitle: "PEG Broadcast Network",
    description: "Video engineering breakdowns, mold form timelapses, and structural tutorials delivered in 4K.",
    icon: <PlayCircle className="w-5 h-5" />,
    metric: "12K+ Subs"
  },
  {
    id: "CH_02",
    title: "HeyZine Publication",
    subtitle: "Digital Magazine",
    description: "Our interactive digital catalog. Technical blueprints, case studies, and modern precast tech.",
    icon: <BookOpen className="w-5 h-5" />,
    metric: "Quarterly"
  },
  {
    id: "CH_03",
    title: "Social Media Hub",
    subtitle: "Live Updates",
    description: "Daily production updates from the factory floor, site deployments, and engineering insights.",
    icon: <Share2 className="w-5 h-5" />,
    metric: "@PEG_Global"
  },
  {
    id: "CH_04",
    title: "Engineering Podcast",
    subtitle: "Audio Broadcast",
    description: "Interviews with DOT officials, standard revision debates, and precast engineering analysis.",
    icon: <Radio className="w-5 h-5" />,
    metric: "Weekly"
  }
];

export default function PrecastersGoDigital() {
  const [activeTab, setActiveTab] = useState<string>("desktop");
  const currentMockup = deviceMockups.find((d) => d.id === activeTab) || deviceMockups[0];

  return (
    <section className="w-full bg-white text-[#002f7a] py-8 md:py-10 px-4 sm:px-6 md:px-10 lg:px-20 border-t border-[#002f7a]/10 relative overflow-hidden select-none">

      {/* CAD BLUEPRINT HIGH-TECH BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #002f7a 1px, transparent 1px), linear-gradient(to bottom, #002f7a 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 space-y-6 md:space-y-8">

        {/* 1. HEADER SECTION */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4 border-b border-[#002f7a]/10 pb-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-[#006def] text-xs font-black tracking-[0.2em] uppercase border-l-2 border-[#006def]">
              <Tv className="w-3.5 h-3.5 text-[#006def]" /> Digital Media & Multi-Device Ecosystem
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-[#002f7a] tracking-tighter uppercase leading-none">
              Precasters <span className="text-[#006def]">Go Digital.</span>
            </h2>
            <p className="text-[#002f7a]/85 font-semibold text-xs sm:text-sm md:text-base max-w-2xl leading-relaxed">
              Experience the unified PEG cloud ecosystem connecting the design office, precast casting floor, and jobsite superintendents in real time.
            </p>
          </div>

          {/* DEVICE SWITCHER BUTTONS */}
          <div className="flex items-center gap-1 sm:gap-1.5 p-1 bg-blue-50/70 border border-[#002f7a]/15 rounded-sm shrink-0 overflow-x-auto max-w-full">
            {deviceMockups.map((dev) => {
              const isActive = activeTab === dev.id;
              return (
                <button
                  key={dev.id}
                  onClick={() => setActiveTab(dev.id)}
                  className={`flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-200 rounded-xs cursor-pointer shrink-0 ${
                    isActive
                      ? "bg-[#002f7a] text-white shadow-xs"
                      : "text-[#002f7a] hover:bg-white hover:text-[#006def]"
                  }`}
                >
                  {dev.icon}
                  <span>{dev.name.split(" ")[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. INTERACTIVE MAIN MOCKUP SHOWCASE CARD */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentMockup.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center bg-white border border-[#002f7a]/15 hover:border-[#006def] p-4 sm:p-6 md:p-8 rounded-sm shadow-xs hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
          >
            {/* TOP ACCENT LINE */}
            <div className="absolute top-0 left-0 w-0 h-1 bg-[#006def] group-hover:w-full transition-all duration-300 z-20" />

            {/* LEFT CONTENT COLUMN */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#006def] text-white text-[10px] font-mono font-black tracking-wider uppercase rounded-xs">
                  {currentMockup.badge}
                </span>
                <span className="text-xs font-mono font-bold text-[#006def]">
                  {currentMockup.role}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#002f7a] uppercase tracking-tight leading-snug">
                {currentMockup.headline}
              </h3>

              <p className="text-[#002f7a]/85 text-xs sm:text-sm md:text-base font-semibold leading-relaxed">
                {currentMockup.description}
              </p>

              {/* KEY CAPABILITIES CHECKLIST */}
              <div className="space-y-2 pt-1 border-t border-[#002f7a]/10">
                {currentMockup.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs font-semibold text-[#002f7a]">
                    <CheckCircle2 className="w-4 h-4 text-[#006def] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* TELEMETRY SPECS PILLS */}
              <div className="grid grid-cols-3 gap-2 pt-3 border-t border-[#002f7a]/10">
                {currentMockup.specs.map((spec, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <p className="text-[9px] font-mono font-bold text-[#006def] uppercase tracking-wider truncate">
                      {spec.label}
                    </p>
                    <p className="text-[11px] sm:text-xs font-mono font-black text-[#002f7a] bg-blue-50 px-2 py-1 border border-[#006def]/20 rounded-xs truncate">
                      {spec.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT VIDEO SHOWCASE FRAME */}
            <div className="lg:col-span-6 relative aspect-[4/3] sm:aspect-video lg:aspect-[16/10] min-h-[240px] sm:min-h-[300px] lg:min-h-[360px] bg-slate-950 rounded-sm overflow-hidden shadow-2xl border border-[#002f7a]/20 group-hover:border-[#006def] transition-colors flex items-center justify-center p-1.5 sm:p-3">
              <video
                key={currentMockup.videoSrc}
                src={getAssetUrl(currentMockup.videoSrc)}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                suppressHydrationWarning
                className="w-full h-full object-contain"
              >
                <source src={getAssetUrl(currentMockup.videoSrc)} type="video/mp4" />
              </video>

              {/* TOP STATUS OVERLAY */}
              <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-2">
                <span className="flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 bg-black/80 backdrop-blur-xs text-white text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider rounded-xs border border-white/20">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live Video Mockup
                </span>
              </div>

              {/* BOTTOM METADATA OVERLAY */}
              <div className="absolute bottom-2.5 right-2.5 z-10">
                <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-[#002f7a]/90 backdrop-blur-xs text-white text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider rounded-xs border border-[#006def]/40">
                  {currentMockup.name}
                </span>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

        {/* 3. THREE-DEVICE PREVIEW CARDS ROW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 md:gap-5">
          {deviceMockups.map((mock, idx) => {
            const isSelected = activeTab === mock.id;
            return (
              <div
                key={mock.id}
                onClick={() => setActiveTab(mock.id)}
                className={`group relative p-4 sm:p-5 border rounded-sm transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden shadow-xs ${
                  isSelected
                    ? "bg-[#002f7a] text-white border-[#002f7a] shadow-lg scale-101"
                    : "bg-white hover:bg-slate-50 text-[#002f7a] border-[#002f7a]/15 hover:border-[#006def]"
                }`}
              >
                {/* TOP ACCENT LINE */}
                <div className={`absolute top-0 left-0 h-1 transition-all duration-300 ${
                  isSelected ? "w-full bg-[#006def]" : "w-0 group-hover:w-full bg-[#006def]"
                }`} />

                <div>
                  <div className="flex justify-between items-start mb-3">
                    <div className={`p-2.5 rounded-sm border transition-colors ${
                      isSelected
                        ? "bg-white/10 text-white border-white/20"
                        : "bg-blue-50 text-[#006def] border-[#006def]/20 group-hover:bg-[#002f7a] group-hover:text-white"
                    }`}>
                      {mock.icon}
                    </div>
                    <span className={`text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-xs ${
                      isSelected
                        ? "bg-white/10 text-white/90 border border-white/20"
                        : "bg-blue-50 text-[#006def] border border-[#006def]/20"
                    }`}>
                      {mock.badge}
                    </span>
                  </div>

                  <h4 className={`text-sm sm:text-base font-black uppercase tracking-tight mb-1.5 leading-snug ${
                    isSelected ? "text-white" : "text-[#002f7a] group-hover:text-[#006def]"
                  }`}>
                    {mock.name}
                  </h4>

                  <p className={`text-xs font-semibold leading-relaxed line-clamp-2 ${
                    isSelected ? "text-white/85" : "text-[#002f7a]/85"
                  }`}>
                    {mock.role}
                  </p>
                </div>

                <div className={`mt-3 pt-3 border-t flex justify-between items-center text-xs font-bold uppercase tracking-wider ${
                  isSelected ? "border-white/10 text-white" : "border-[#002f7a]/10 text-[#006def] group-hover:text-[#002f7a]"
                }`}>
                  <span>{isSelected ? "Active Viewport" : "Switch View"}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* 4. DIGITAL COMMUNITY & BROADCAST CHANNELS */}
        <div className="pt-2">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-bold text-[#006def] uppercase tracking-widest">
              Broadcast Channels & Publications
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5 md:gap-4">
            {digitalChannels.map((channel, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="group relative bg-white hover:bg-slate-50 text-[#002f7a] border border-[#002f7a]/15 hover:border-[#006def] p-4 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between rounded-sm cursor-pointer overflow-hidden"
              >
                {/* TOP ACCENT LINE */}
                <div className="absolute top-0 left-0 w-0 h-1 bg-[#006def] group-hover:w-full transition-all duration-300" />

                <div>
                  <div className="flex items-start gap-2.5 mb-2.5">
                    <div className="p-2 bg-blue-50 text-[#006def] group-hover:bg-[#002f7a] group-hover:text-white transition-colors duration-300 shrink-0 border border-[#006def]/20 rounded-sm mt-0.5">
                      {channel.icon}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1 mb-0.5">
                        <span className="text-[9px] font-mono font-bold text-[#006def] uppercase tracking-wider truncate">
                          {channel.subtitle}
                        </span>
                        <span className="text-[8px] font-mono font-bold text-[#006def] bg-blue-50 px-1.5 py-0.5 border border-[#006def]/20 shrink-0">
                          {channel.metric}
                        </span>
                      </div>
                      <h3 className="text-xs sm:text-[13px] font-black uppercase tracking-tight text-[#002f7a] group-hover:text-[#006def] transition-colors leading-tight truncate">
                        {channel.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-[#002f7a]/85 font-semibold leading-relaxed line-clamp-2">
                    {channel.description}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-[#002f7a]/10 flex justify-between items-center">
                  <span className="text-[9px] font-mono font-bold text-[#002f7a] uppercase">Explore</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#006def] group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}