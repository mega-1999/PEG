"use client";

import React, { useState, useRef } from "react";
import {
  ShieldCheck,
  Cpu,
  Boxes,
  Zap,
  Play,
  Pause,
  RotateCcw,
  ArrowRight
} from "lucide-react";
import { getAssetUrl } from "@/lib/utils";
import LazyVideo from "./LazyVideo";

const marqueeItems = [
  "BOX CULVERTS",
  "UTILITY VAULTS",
  "MANHOLES & RISERS",
  "TILT-UP PANELS",
  "GREASE INTERCEPTORS",
  "CATCH BASINS",
  "PRECAST TRENCH SYSTEMS",
  "LEACHING GALLEYS",
  "RETAINING WALLS",
  "ENDWALLS & WINGWALLS",
  "PUMP STATIONS",
  "CUSTOM MODULAR MOLDS",
];

const skeletonSpecs = [
  {
    label: "3D CAD / BIM LEVEL",
    value: "LOD 400 Production",
    code: "CAD-400",
  },
  {
    label: "REBAR TOLERANCE",
    value: "±0.0625\" Zero Clash",
    code: "TOL-06",
  },
  {
    label: "CODE COMPLIANCE",
    value: "AASHTO / ASTM / NPCA",
    code: "SPEC-STD",
  },
  {
    label: "PE STAMP READY",
    value: "All 50 US States",
    code: "PE-CERT",
  },
];

const productNodes = [
  { name: "Underground Infrastructure", count: "180+ Models" },
  { name: "Drainage & Stormwater", count: "120+ Models" },
  { name: "Electrical & Utility Vaults", count: "95+ Models" },
  { name: "Modular Walls & Formwork", count: "140+ Models" },
];

export default function PrecastSkeletonShowcase() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const restartVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="relative w-full bg-[#002f7a] text-white py-2 sm:py-4 md:py-6 overflow-hidden border-b border-[#002f7a]/10 select-none">
      
      {/* 1. TOP MARQUEE STRIP */}
      <div className="w-full bg-[#006def] py-1.5 overflow-hidden mb-4 md:mb-6 relative z-20 shadow-xs">
        <div className="flex w-max animate-marquee">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <div key={index} className="flex items-center mx-3 sm:mx-4 gap-2.5 text-[11px] sm:text-xs font-mono font-black tracking-[0.2em] text-white uppercase">
              <span className="w-1.5 h-1.5 bg-white rounded-full" />
              <span>{item}</span>
              <span className="text-white/40">•</span>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 relative z-10">
        
        {/* 2. MAIN GRID: TOP-LEFT TEXT, CENTER/RIGHT VIDEO, BOTTOM-RIGHT TEXT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
          
          {/* ========================================================= */}
          {/* TOP-LEFT COLUMN: BIG BOLD HEADLINE & TECH SPECS          */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4 sm:space-y-5">
            <div className="space-y-3">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-[#006def] text-xs font-black tracking-[0.2em] uppercase border-l-2 border-[#006def]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#006def]" />
                <span>3D SKELETON ARCHITECTURE</span>
              </div>

              {/* MASSIVE TOP-LEFT HEADLINE */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-black text-white uppercase tracking-tight leading-[0.95]">
                ALL PRODUCTS. <br />
                <span className="text-[#006def]">DIGITIZED &amp;</span> <br />
                ENGINEERED.
              </h2>

              <p className="text-white/90 text-xs sm:text-sm md:text-base font-semibold leading-relaxed">
                Every precast structure in our portfolio is modeled as a millimeter-precision 3D rebar skeleton. From underground vaults to modular civil drainage, we eliminate field clashes before concrete hits the mold.
              </p>
            </div>

            {/* SKELETON SPEC MATRIX CARDS */}
            <div className="grid grid-cols-2 gap-2.5">
              {skeletonSpecs.map((spec, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-md border border-white/20 hover:border-[#006def] p-3 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#006def] mb-0.5 font-black">
                    <span>{spec.code}</span>
                    <Cpu className="w-3.5 h-3.5 text-white group-hover:rotate-90 transition-transform duration-300" />
                  </div>
                  <div className="text-[9px] sm:text-[10px] font-mono font-bold text-white/70 uppercase tracking-wider">
                    {spec.label}
                  </div>
                  <div className="text-xs sm:text-sm font-black text-white mt-0.5 tracking-tight">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>

            {/* PRODUCT CATEGORY SELECTOR PILLS */}
            <div className="space-y-1.5">
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/80 flex items-center gap-2 font-bold">
                <Zap className="w-3 h-3 text-[#006def]" />
                <span>Digitized Library Portfolios</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {productNodes.map((node, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`flex items-center justify-between p-2.5 text-left text-xs font-mono transition-all duration-200 cursor-pointer ${
                      activeTab === idx
                        ? "bg-[#006def] text-white font-black shadow-xs border-l-4 border-white"
                        : "bg-white/10 text-white/90 hover:bg-white/20 border border-white/10"
                    }`}
                  >
                    <span className="truncate">{node.name}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 ml-2 shrink-0 font-bold ${activeTab === idx ? "bg-white text-[#002f7a]" : "bg-white/15 text-white"}`}>
                      {node.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* ========================================================= */}
          {/* CENTER / RIGHT: 3D SKELETON VIDEO VIEWPORT & HUD         */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            
            {/* VIDEO CONTAINER */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] bg-white border border-white/20 shadow-xl group/viewer overflow-hidden">
              
              {/* TOP LABELS & CONTROLS */}
              <div className="absolute top-2.5 left-2.5 z-30 font-mono text-[9px] sm:text-[10px] text-white bg-[#002f7a] px-2.5 py-0.5 font-bold border border-white/20 flex items-center gap-1.5 shadow-xs">
                <span className="w-1.5 h-1.5 bg-[#006def] rounded-full animate-ping" />
                <span>3D SKELETON CAD STREAM</span>
              </div>

              <div className="absolute top-2.5 right-2.5 z-30 flex items-center gap-1.5">
                <button
                  onClick={restartVideo}
                  title="Restart Flow"
                  className="p-1.5 bg-[#002f7a] hover:bg-[#006def] text-white border border-white/20 transition-colors cursor-pointer shadow-xs"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={togglePlay}
                  title={isPlaying ? "Pause" : "Play"}
                  className="p-1.5 bg-[#002f7a] hover:bg-[#006def] text-white border border-white/20 transition-colors cursor-pointer shadow-xs"
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* SKELETON MP4 VIDEO PLAYER */}
              <LazyVideo
                ref={videoRef}
                src={getAssetUrl("/assets/video/All_GT_Skeleton_-_PEG_color_Name.mp4")}
                autoPlayWhenInView={true}
                loop={true}
                muted={true}
                playsInline={true}
                wrapperClassName="w-full h-full relative"
                className="w-full h-full object-cover"
              />

              {/* BOTTOM STATUS BAR */}
              <div className="absolute bottom-0 inset-x-0 z-30 bg-[#002f7a]/95 p-2.5 sm:p-3 flex flex-wrap items-center justify-between gap-2 border-t border-white/20">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 bg-[#006def] text-white">
                    <Boxes className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[11px] sm:text-xs font-black uppercase text-white tracking-wider">
                      Precast Modular Skeleton Sequence
                    </div>
                    <div className="text-[9px] sm:text-[10px] font-mono text-white/80">
                      Multi-Product 3D CAD &amp; Rebar Detailing
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-widest text-white bg-[#006def] px-2.5 py-0.5 border border-white/20">
                    LIVE STREAM
                  </span>
                </div>
              </div>

            </div>

            {/* ========================================================= */}
            {/* BOTTOM-RIGHT BIG BOLD TEXT & CTA ACTIONS                 */}
            {/* ========================================================= */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 border-l-4 border-l-[#006def] p-4 sm:p-6 space-y-3.5 relative">
              
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-white/20 pb-3">
                <div>
                  <div className="text-[9px] sm:text-[10px] font-mono font-bold text-[#006def] uppercase tracking-[0.2em] mb-0.5">
                    PRODUCTION ACCELERATION
                  </div>
                  {/* MASSIVE BOTTOM-RIGHT HEADLINE */}
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white uppercase tracking-tight leading-none">
                    FROM CONCEPT TO FORM. <br />
                    <span className="text-[#006def]">PRODUCTION-READY.</span>
                  </h3>
                </div>

                <div className="text-left sm:text-right">
                  <div className="text-2xl sm:text-3xl font-black text-white font-mono leading-none">500+</div>
                  <div className="text-[9px] sm:text-[10px] font-mono uppercase text-[#006def] font-bold tracking-wider">Precast Assets</div>
                </div>
              </div>

              <p className="text-white/90 text-xs sm:text-sm font-semibold leading-relaxed">
                Whether you need custom box culvert formwork, high-traffic utility vaults, or rapid submittal calculations, our pre-modeled skeletons drastically reduce lead times.
              </p>

              {/* ACTION BUTTONS */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <a
                  href="#contact"
                  className="px-5 py-2.5 bg-[#006def] hover:bg-white hover:text-[#002f7a] text-white text-xs font-mono font-black uppercase tracking-widest transition-all duration-200 flex items-center gap-2 shadow-xs cursor-pointer"
                >
                  <span>REQUEST 3D CAD &amp; SUBMITTAL</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href="/blog"
                  className="px-5 py-2.5 bg-white/10 hover:bg-white hover:text-[#002f7a] text-white text-xs font-mono font-black uppercase tracking-widest border border-white/20 transition-all duration-200 flex items-center gap-2 cursor-pointer"
                >
                  <span>BROWSE SPEC ARTICLES</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* 3. BOTTOM MARQUEE STRIP */}
      <div className="w-full bg-[#006def] py-1.5 overflow-hidden mt-4 md:mb-1 relative z-20 shadow-xs">
        <div className="flex w-max animate-marquee-reverse">
          {[...marqueeItems, ...marqueeItems].reverse().map((item, index) => (
            <div key={index} className="flex items-center mx-3 sm:mx-4 gap-2.5 text-[11px] sm:text-xs font-mono font-black tracking-[0.2em] text-white uppercase">
              <span className="w-1.5 h-1.5 bg-white rounded-full" />
              <span>{item}</span>
              <span className="text-white/40">•</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
