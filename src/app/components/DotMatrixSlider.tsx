"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  MapPin,
  Layers,
  FileCode2,
  ExternalLink,
  Search,
  Building2,
  Globe,
  ArrowUpRight,
  Filter,
  Sparkles,
  Info,
  CheckCircle,
  HelpCircle,
  FileText
} from "lucide-react";
import { stateData, type StateData } from "@/lib/stateData";
import { getAssetUrl } from "@/lib/utils";

// Define regional USA DOT categories (West, Midwest, South, Northeast)
export type UsRegion = "West" | "Midwest" | "South" | "Northeast";

const tierMap: Record<string, { tier: UsRegion; spec: string }> = {
  Alabama: { tier: "South", spec: "ALDOT Standard Spec Sec 501" },
  Alaska: { tier: "West", spec: "AKDOT Bridge Design Manual Sec 4" },
  Arizona: { tier: "West", spec: "ADOT Roadway Design Guidelines" },
  Arkansas: { tier: "South", spec: "ARDOT Class S(AE) Concrete Spec" },
  California: { tier: "West", spec: "Caltrans Seismic Design Criteria v2.0" },
  Colorado: { tier: "West", spec: "CDOT Class G Concrete Provisions" },
  Connecticut: { tier: "Northeast", spec: "CTDOT Form 818 Specification" },
  Delaware: { tier: "South", spec: "DelDOT Class A Silica Fume Spec" },
  "District of Columbia": { tier: "South", spec: "DDOT Highways & Structures Code" },
  Florida: { tier: "South", spec: "FDOT Structural Design Guidelines" },
  Georgia: { tier: "South", spec: "GDOT Section 500 Concrete Spec" },
  Guam: { tier: "West", spec: "Guam DPW Standard Specifications" },
  Hawaii: { tier: "West", spec: "HDOT Structural Design Manual" },
  Idaho: { tier: "West", spec: "ITD Standard Drawings & Specs" },
  Illinois: { tier: "Midwest", spec: "IDOT Bridge Manual Provisions" },
  Indiana: { tier: "Midwest", spec: "INDOT Structural Concrete Specs" },
  Iowa: { tier: "Midwest", spec: "Iowa DOT Class C Structural Concrete" },
  Kansas: { tier: "Midwest", spec: "KDOT Commercial Grade Concrete Specs" },
  Kentucky: { tier: "South", spec: "KYTC Standard Drawings Division" },
  Louisiana: { tier: "South", spec: "LaDOTD Corrosion-Protection Specs" },
  Maine: { tier: "Northeast", spec: "MaineDOT Bridge Design Guide" },
  Maryland: { tier: "South", spec: "MDOT SHA Standard Specifications" },
  Massachusetts: { tier: "Northeast", spec: "MassDOT Bridge Manual Section 9" },
  Michigan: { tier: "Midwest", spec: "MDOT Structural Silica Fume Concrete" },
  Minnesota: { tier: "Midwest", spec: "MnDOT High Performance Concrete Specs" },
  Mississippi: { tier: "South", spec: "MDOT Roadway Design Manual" },
  Missouri: { tier: "Midwest", spec: "MoDOT Section 703 Structural Concrete" },
  Montana: { tier: "West", spec: "MDT Bridge Design Specs" },
  Nebraska: { tier: "Midwest", spec: "NDOT Specification Section 700" },
  Nevada: { tier: "West", spec: "NDOT Structures Manual Section 8" },
  "New Hampshire": { tier: "Northeast", spec: "NHDOT Standard Specifications" },
  "New Jersey": { tier: "Northeast", spec: "NJDOT High-Performance Concrete Specs" },
  "New Mexico": { tier: "West", spec: "NMDOT Class A / AA Concrete Spec" },
  "New York": { tier: "Northeast", spec: "NYSDOT Standard Sheet Set 500" },
  "North Carolina": { tier: "South", spec: "NCDOT Substructure Concrete Specs" },
  "North Dakota": { tier: "Midwest", spec: "NDDOT Structural Concrete Guide" },
  Ohio: { tier: "Midwest", spec: "ODOT Item 511 Structural Concrete" },
  Oklahoma: { tier: "South", spec: "ODOT Section 509 Bridges Specs" },
  Oregon: { tier: "West", spec: "ODOT Bridge Design Manual Sec 1" },
  Pennsylvania: { tier: "Northeast", spec: "PennDOT Pub 408 Specifications" },
  "Puerto Rico": { tier: "South", spec: "PRHTA Model Drawings & Details" },
  "Rhode Island": { tier: "Northeast", spec: "RIDOT Standard Specifications" },
  "South Carolina": { tier: "South", spec: "SCDOT Structural Concrete Design" },
  "South Dakota": { tier: "Midwest", spec: "SDDOT Bridge Construction Specs" },
  Tennessee: { tier: "South", spec: "TDOT Bridge Design Standards" },
  Texas: { tier: "South", spec: "TxDOT Bridge Design Manual LRFD" },
  Utah: { tier: "West", spec: "UDOT Structural Concrete 03310" },
  Vermont: { tier: "Northeast", spec: "VTrans Bridge Design Manual" },
  Virginia: { tier: "South", spec: "VDOT Road & Bridge Specifications" },
  Washington: { tier: "West", spec: "WSDOT Bridge Design Manual Sec 5" },
  "West Virginia": { tier: "South", spec: "WVDOT Bridge Design Specs" },
  Wisconsin: { tier: "Midwest", spec: "WisDOT Standard Specifications" },
  Wyoming: { tier: "West", spec: "WYDOT LRFD Bridge Design Manual" },
  "FLH Divisions (FHWA)": { tier: "West", spec: "FHWA FLH-18 Standard Drawings" }
};

const stateAbbrs: Record<string, string> = {
  Alabama: "AL", Alaska: "AK", Arizona: "AZ", Arkansas: "AR", California: "CA",
  Colorado: "CO", Connecticut: "CT", Delaware: "DE", "District of Columbia": "DC",
  Florida: "FL", Georgia: "GA", Guam: "GU", Hawaii: "HI", Idaho: "ID",
  Illinois: "IL", Indiana: "IN", Iowa: "IA", Kansas: "KS", Kentucky: "KY",
  Louisiana: "LA", Maine: "ME", Maryland: "MD", Massachusetts: "MA", Michigan: "MI",
  Minnesota: "MN", Mississippi: "MS", Missouri: "MO", Montana: "MT", Nebraska: "NE",
  Nevada: "NV", "New Hampshire": "NH", "New Jersey": "NJ", "New Mexico": "NM",
  "New York": "NY", "North Carolina": "NC", "North Dakota": "ND", Ohio: "OH",
  Oklahoma: "OK", Oregon: "OR", Pennsylvania: "PA", "Puerto Rico": "PR",
  "Rhode Island": "RI", "South Carolina": "SC", "South Dakota": "SD", Tennessee: "TN",
  Texas: "TX", Utah: "UT", Vermont: "VT", Virginia: "VA", Washington: "WA",
  "West Virginia": "WV", Wisconsin: "WI", Wyoming: "WY", "FLH Divisions (FHWA)": "FHWA"
};

// Design system colors based on USA Geographic Region (Official PEG Palette)
const tierColors: Record<UsRegion, { bg: string; text: string; border: string; accent: string }> = {
  West: {
    bg: "bg-blue-50",
    text: "text-[#002f7a]",
    border: "border-[#002f7a]/30",
    accent: "#002f7a"
  },
  Midwest: {
    bg: "bg-blue-100/70",
    text: "text-[#006def]",
    border: "border-[#006def]/30",
    accent: "#006def"
  },
  South: {
    bg: "bg-slate-100",
    text: "text-[#002f7a]",
    border: "border-[#002f7a]/20",
    accent: "#002f7a"
  },
  Northeast: {
    bg: "bg-sky-50",
    text: "text-[#006def]",
    border: "border-[#006def]/30",
    accent: "#006def"
  }
};

// Official State DOT Logo mapping from public/assets/images/USA_DOT_Logos
const stateDotLogos: Record<string, string> = {
  Alabama: "/assets/images/USA_DOT_Logos/Alabama_Department_of_Transportation_logo.png",
  Alaska: "/assets/images/USA_DOT_Logos/DOTPF-logo-color-600res-4x4.jpg",
  Arizona: "/assets/images/USA_DOT_Logos/ArizonaDOTlogo.png",
  Arkansas: "/assets/images/USA_DOT_Logos/ArkansasDOTlogo.svg",
  California: "/assets/images/USA_DOT_Logos/Caltrans.svg",
  Colorado: "/assets/images/USA_DOT_Logos/colorado_dot.png",
  Connecticut: "/assets/images/USA_DOT_Logos/Connecticut_Department_of_Transportation_Logo.svg",
  Delaware: "/assets/images/USA_DOT_Logos/DelDOTLogo640x570.png",
  "District of Columbia": "/assets/images/USA_DOT_Logos/TransportationLogoVDark.png",
  Florida: "/assets/images/USA_DOT_Logos/Florida_Department_of_Transportation_logo.png",
  Georgia: "/assets/images/USA_DOT_Logos/DOT-GA-US-Logo-2018.png",
  Guam: "/assets/images/USA_DOT_Logos/TransportationLogoVDark.png",
  Hawaii: "/assets/images/USA_DOT_Logos/Seal_of_the_Hawaii_Department_of_Transportation.svg",
  Idaho: "/assets/images/USA_DOT_Logos/idaho_dot.png",
  Illinois: "/assets/images/USA_DOT_Logos/illinois_dot.jpeg",
  Indiana: "/assets/images/USA_DOT_Logos/Seal_of_the_Indiana_Department_of_Transportation.svg",
  Iowa: "/assets/images/USA_DOT_Logos/Iowa_DOT.png",
  Kansas: "/assets/images/USA_DOT_Logos/KSDoT_logo.png",
  Kentucky: "/assets/images/USA_DOT_Logos/2024_Kentucky_Transportation_Cabinet_logo.jpg",
  Louisiana: "/assets/images/USA_DOT_Logos/louisiana_dot.png",
  Maine: "/assets/images/USA_DOT_Logos/Maine_Department_of_Transportation_logo.png",
  Maryland: "/assets/images/USA_DOT_Logos/MDOT_Logo.svg",
  Massachusetts: "/assets/images/USA_DOT_Logos/MassDOT_Logo.svg",
  Michigan: "/assets/images/USA_DOT_Logos/Michigan_Department_of_Transportation_logo.svg",
  Minnesota: "/assets/images/USA_DOT_Logos/MnDOT_horizontal_logo_2016.svg",
  Mississippi: "/assets/images/USA_DOT_Logos/MississippiDOTlogo.svg",
  Missouri: "/assets/images/USA_DOT_Logos/missouri_dot.png",
  Montana: "/assets/images/USA_DOT_Logos/Montana_Department_of_Transportation_logo.png",
  Nebraska: "/assets/images/USA_DOT_Logos/Nebraska_Department_of_Transportation-logo.png",
  Nevada: "/assets/images/USA_DOT_Logos/Nevada_DOT.svg",
  "New Hampshire": "/assets/images/USA_DOT_Logos/NHDOTlogo.PNG",
  "New Jersey": "/assets/images/USA_DOT_Logos/Seal_of_the_New_Jersey_Department_of_Transportation.svg",
  "New Mexico": "/assets/images/USA_DOT_Logos/nmdotIdentityVertical-1.png",
  "New York": "/assets/images/USA_DOT_Logos/New_York_State_DOT_logo.png",
  "North Carolina": "/assets/images/USA_DOT_Logos/NCDOT_Social_Image.jpg",
  "North Dakota": "/assets/images/USA_DOT_Logos/nddot-logo-lockup-large.png",
  Ohio: "/assets/images/USA_DOT_Logos/Emblem_of_the_Ohio_Department_of_Transportation.svg",
  Oklahoma: "/assets/images/USA_DOT_Logos/TransportationLogoVDark.png",
  Oregon: "/assets/images/USA_DOT_Logos/Oregon_Department_of_Transportation_logo.svg",
  Pennsylvania: "/assets/images/USA_DOT_Logos/Pennsylvania_Department_of_Transportation_Logo.svg",
  "Puerto Rico": "/assets/images/USA_DOT_Logos/TransportationLogoVDark.png",
  "Rhode Island": "/assets/images/USA_DOT_Logos/Rhode_Island_Department_of_Transportation_logo.svg",
  "South Carolina": "/assets/images/USA_DOT_Logos/SCDOTlogo.svg",
  "South Dakota": "/assets/images/USA_DOT_Logos/South_Dakota_Department_of_Transportation_logo.png",
  Tennessee: "/assets/images/USA_DOT_Logos/Tennessee_Department_of_Transportation_logo.png",
  Texas: "/assets/images/USA_DOT_Logos/TxDOT_logo_as_of_2023.svg",
  Utah: "/assets/images/USA_DOT_Logos/UtahDOTlogo.png",
  Vermont: "/assets/images/USA_DOT_Logos/VAOT_LOGO.png",
  Virginia: "/assets/images/USA_DOT_Logos/Virginia_Department_of_Transportation_logo.svg",
  Washington: "/assets/images/USA_DOT_Logos/WSDOT_Logo.svg",
  "West Virginia": "/assets/images/USA_DOT_Logos/WVDOT_Logo.png",
  Wisconsin: "/assets/images/USA_DOT_Logos/Seal_of_the_Wisconsin_Department_of_Transportation.svg",
  Wyoming: "/assets/images/USA_DOT_Logos/WYDOT.svg",
  "FLH Divisions (FHWA)": "/assets/images/USA_DOT_Logos/TransportationLogoVDark.png",
};

// Helper component for State DOT badges
function StateLogoBadge({ state, abbr, isActive, size = "sm" }: { state: string; abbr: string; isActive?: boolean; size?: "sm" | "lg" }) {
  const logoPath = stateDotLogos[state];

  if (size === "lg") {
    return (
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-2xl p-2 shadow-md flex items-center justify-center overflow-hidden shrink-0 border border-slate-200">
        {logoPath ? (
          <Image
            src={getAssetUrl(logoPath)}
            alt={`${state} DOT Logo`}
            width={80}
            height={80}
            className="w-full h-full object-contain"
          />
        ) : (
          <div className="w-full h-full bg-[#002f7a] rounded-xl flex flex-col items-center justify-center text-white">
            <span className="text-base font-black uppercase leading-none">{abbr}</span>
            <span className="text-[8px] font-mono text-blue-200 uppercase mt-0.5">DOT</span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border transition-all p-1.5 overflow-hidden ${
      isActive
        ? "bg-white border-[#006def] shadow-sm"
        : "bg-white border-slate-200 shadow-xs"
    }`}>
      {logoPath ? (
        <Image
          src={getAssetUrl(logoPath)}
          alt={`${state} DOT Logo`}
          width={44}
          height={44}
          className="w-full h-full object-contain"
        />
      ) : (
        <span className="text-xs font-black uppercase text-[#002f7a]">{abbr}</span>
      )}
    </div>
  );
}

export default function DotMatrixSlider() {
  const [activeState, setActiveState] = useState<StateData>(stateData[4] || stateData[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTier, setSelectedTier] = useState<string>("All");

  // Dynamic enrichment of stateData with Tier & Abbreviation info
  const enrichedStates = useMemo(() => {
    return stateData.map((item) => {
      const info = tierMap[item.state] || { tier: "West" as UsRegion, spec: "AASHTO LRFD 9th Ed." };
      const abbr = stateAbbrs[item.state] || item.state.slice(0, 2).toUpperCase();

      return {
        ...item,
        abbr,
        tier: info.tier,
        spec: info.spec
      };
    });
  }, []);

  // Region count statistics for filters
  const regionCounts = useMemo(() => {
    const counts: Record<string, number> = { All: enrichedStates.length };
    enrichedStates.forEach((s) => {
      counts[s.tier] = (counts[s.tier] || 0) + 1;
    });
    return counts;
  }, [enrichedStates]);

  // Filter & Search Logic
  const filteredStates = useMemo(() => {
    return enrichedStates.filter((item) => {
      const matchesSearch =
        item.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.abbr.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTier = selectedTier === "All" || item.tier === selectedTier;

      return matchesSearch && matchesTier;
    });
  }, [enrichedStates, searchQuery, selectedTier]);

  // Auto-sync active inspector item when filter changes
  useEffect(() => {
    if (filteredStates.length > 0 && !filteredStates.some(s => s.state === activeState.state)) {
      setActiveState(filteredStates[0]);
    }
  }, [filteredStates, activeState.state]);

  // Distribute filtered items across 3 sliding tracks
  const track1 = useMemo(() => {
    const items = filteredStates.slice(0, Math.ceil(filteredStates.length / 3));
    return [...items, ...items, ...items]; // Triple for smooth continuous slider
  }, [filteredStates]);

  const track2 = useMemo(() => {
    const items = filteredStates.slice(Math.ceil(filteredStates.length / 3), Math.ceil(filteredStates.length / 3) * 2);
    return [...items, ...items, ...items];
  }, [filteredStates]);

  const track3 = useMemo(() => {
    const items = filteredStates.slice(Math.ceil(filteredStates.length / 3) * 2);
    return [...items, ...items, ...items];
  }, [filteredStates]);

  // Current active item tier style details
  const activeEnriched = useMemo(() => {
    return enrichedStates.find(s => s.state === activeState.state) || enrichedStates[0];
  }, [enrichedStates, activeState]);

  const activeColors = tierColors[activeEnriched.tier as UsRegion] || tierColors.West;

  return (
    <section id="standards" className="w-full bg-[#002f7a] py-2 sm:py-4 md:py-6 border-t border-blue-900 overflow-hidden relative select-none">
      {/* Visual background details */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#006def]/20 rounded-full filter blur-3xl pointer-events-none opacity-50 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full filter blur-3xl pointer-events-none opacity-40 -translate-x-1/3 translate-y-1/3" />

      <div className="w-full px-6 sm:px-10 lg:px-20 relative z-10">

        {/* HEADER AREA */}
        <div className="mb-4 md:mb-6 border-b border-blue-800/80 pb-3 md:pb-4">
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight leading-none uppercase">
              State DOT Drawings
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200"> Compliance Databank</span>
            </h2>
            <p className="text-blue-100 font-medium text-xs sm:text-sm max-w-2xl leading-relaxed">
              Verify precast concrete standard drawings, roadway plans, and bridge structural details across all 50+ United States jurisdictions in real-time.
            </p>
          </div>
        </div>

        {/* INTERACTIVE WORKSPACE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

          {/* LEFT INSPECT PANEL (4 Columns) */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col justify-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeEnriched.state}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.25 }}
                className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] relative overflow-hidden flex flex-col justify-between border-t-4"
                style={{ borderTopColor: activeColors.accent }}
              >
                {/* Background watermark official DOT logo */}
                <div className="absolute top-2 right-2 w-36 h-36 opacity-10 pointer-events-none flex items-center justify-center">
                  {stateDotLogos[activeEnriched.state] ? (
                    <div className="relative w-32 h-32">
                      <Image
                        src={getAssetUrl(stateDotLogos[activeEnriched.state])}
                        alt={`${activeEnriched.state} DOT Logo`}
                        fill
                        sizes="128px"
                        className="object-contain grayscale contrast-125"
                      />
                    </div>
                  ) : (
                    <ShieldCheck className="w-32 h-32" style={{ color: activeColors.accent }} />
                  )}
                </div>

                <div className="space-y-3.5 relative z-10">
                  {/* State Title & DOT Icon */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-1.5">
                        <span className={`px-2 py-0.5 rounded text-[11px] font-black tracking-widest border uppercase ${activeColors.bg} ${activeColors.text} ${activeColors.border}`}>
                          {activeEnriched.abbr}
                        </span>
                        <span className="text-[10px] font-mono font-black text-[#006def] uppercase tracking-widest">
                          DOT Jurisdiction
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-black text-[#002f7a] tracking-tight">
                        {activeEnriched.state}
                      </h3>
                      <p className="text-[#006def] font-bold text-xs uppercase tracking-wider flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 shrink-0" /> Regional DOT Portal
                      </p>
                    </div>

                    {/* DOT Logo Badge Container */}
                    <StateLogoBadge state={activeEnriched.state} abbr={activeEnriched.abbr} size="lg" />
                  </div>

                  {/* Specifications and provisions details */}
                  <div className="bg-[#006def]/5 rounded-xl p-3 border border-[#006def]/10 flex gap-2.5 items-start">
                    <Info className="w-4 h-4 text-[#006def] flex-shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <p className="font-mono text-[9px] uppercase tracking-widest text-[#006def] font-black">Spec Provision</p>
                      <p className="text-xs text-[#006def] font-semibold leading-snug">
                        {activeEnriched.spec}. All precast structural components must satisfy regional requirements.
                      </p>
                    </div>
                  </div>

                  {/* Links / Resources List */}
                  <div className="space-y-2 pt-1">
                    <p className="text-[#006def] font-mono text-[9px] uppercase tracking-widest flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-[#006def]" /> Compiled Resources ({activeEnriched.links.length})
                    </p>

                    {activeEnriched.links.length === 0 ? (
                      <div className="flex items-center gap-2 p-2.5 text-xs bg-slate-50 border border-slate-100 text-[#006def] rounded-xl font-bold">
                        <HelpCircle className="w-4 h-4" /> No specific drawing links registered
                      </div>
                    ) : (
                      <div className="space-y-1.5 max-h-[140px] overflow-y-auto pr-1">
                        {activeEnriched.links.map((link, idx) => (
                          <a
                            key={idx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-2.5 bg-white border border-slate-100 hover:border-[#006def] hover:bg-[#006def]/5 rounded-xl group transition-all duration-150"
                          >
                            <div className="flex items-center gap-2.5 min-w-0">
                              <div className="w-7 h-7 bg-slate-50 group-hover:bg-[#002f7a] group-hover:text-white text-[#002f7a] rounded-lg flex items-center justify-center p-1 border border-slate-100 flex-shrink-0 transition-colors">
                                <FileText className="w-3.5 h-3.5" />
                              </div>
                              <div className="min-w-0">
                                <p className="text-xs font-black text-[#002f7a] truncate" title={link.label}>
                                  {link.label}
                                </p>
                                <p className="text-[10px] text-[#006def] font-semibold truncate">
                                  {link.tooltip || "Click to open official drawing portal"}
                                </p>
                              </div>
                            </div>
                            <ArrowUpRight className="w-3.5 h-3.5 text-[#006def] group-hover:text-[#006def] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150 flex-shrink-0 ml-2" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Verification Checkmark */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-bold text-[#006def]">
                  <span className="flex items-center gap-1 text-[#006def] bg-blue-50 px-2 py-0.5 rounded text-[11px] border border-[#006def]/20">
                    <CheckCircle className="w-3 h-3 text-[#006def]" />
                    PEG VERIFIED
                  </span>
                  <span className="text-[11px]">REF ID: {activeEnriched.abbr}-DOT</span>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT MULTI-TRACK COMPLIANCE SLIDERS (8 Columns) */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-start space-y-3">
            {/* Region Filter Buttons / Legend at Top of Short Cards */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-1">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-200">
                USA Regional Filter:
              </span>
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                {(["All", "West", "Midwest", "South", "Northeast"] as const).map((region) => {
                  const isSelected = selectedTier === region;
                  const color = region !== "All" ? tierColors[region as UsRegion] : null;

                  return (
                    <button
                      key={region}
                      type="button"
                      onClick={() => setSelectedTier(region)}
                      className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl text-[11px] sm:text-xs font-black uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 border select-none ${
                        isSelected
                          ? "bg-white text-[#002f7a] border-white shadow-md font-black"
                          : "bg-white/10 hover:bg-white/20 text-blue-100 border-white/20"
                      }`}
                    >
                      {color && (
                        <span
                          className="w-2 h-2 rounded-full shrink-0"
                          style={{ backgroundColor: color.accent }}
                        />
                      )}
                      <span>{region}</span>
                      <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-md font-bold ${
                        isSelected ? "bg-[#002f7a] text-white" : "bg-white/15 text-blue-200"
                      }`}>
                        {regionCounts[region] || 0}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="relative py-1 space-y-3.5">

              {/* Fade gradients over slider edges */}
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#002f7a] to-transparent z-20 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#002f7a] to-transparent z-20 pointer-events-none" />

              {filteredStates.length === 0 ? (
                <div className="h-[280px] bg-white border border-slate-200 rounded-2xl flex flex-col items-center justify-center text-center p-8">
                  <Building2 className="w-12 h-12 text-[#006def] mb-3" />
                  <p className="text-[#006def] font-extrabold">No state DOT portals match search criteria</p>
                  <p className="text-[#006def] text-xs mt-1">Try resetting the filter tier or search string.</p>
                  <button
                    onClick={() => { setSearchQuery(""); setSelectedTier("All"); }}
                    className="mt-4 px-4 py-2 bg-[#002f7a] text-white text-xs font-black rounded-lg uppercase tracking-wider hover:bg-[#006def] transition-all cursor-pointer"
                  >
                    Clear Filter
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Inline style for guaranteed instant marquee pause on hover */}
                  <style>{`
                    .dot-marquee-row:hover .dot-marquee-inner,
                    .dot-marquee-inner:hover {
                      animation-play-state: paused !important;
                    }
                  `}</style>

                  {/* Sliding Row 1 */}
                  {track1.length > 0 && (
                    <div className="dot-marquee-row flex whitespace-nowrap overflow-hidden">
                      <div
                        className="dot-marquee-inner flex gap-3.5 w-max animate-dot-track1"
                      >
                        {track1.map((item, idx) => {
                          const isActive = activeState.state === item.state;
                          const colors = tierColors[item.tier as UsRegion] || tierColors.West;
                          return (
                            <div
                              key={`${item.state}-r1-${idx}`}
                              onMouseEnter={() => setActiveState(item)}
                              onClick={() => setActiveState(item)}
                              className={`cursor-pointer px-4 py-2.5 sm:px-5 sm:py-3 border-2 rounded-xl flex items-center gap-3 transition-colors duration-150 select-none shrink-0 w-auto ${isActive
                                ? "bg-white border-[#006def] text-[#002f7a] shadow-lg"
                                : "bg-white/95 hover:bg-white border-transparent hover:border-white text-[#002f7a] shadow-sm"
                                }`}
                            >
                              <StateLogoBadge state={item.state} abbr={item.abbr} isActive={isActive} size="sm" />
                              <div className="flex flex-col">
                                <p className="text-xs sm:text-sm font-black whitespace-nowrap leading-tight text-[#002f7a]">
                                  {item.state}
                                </p>
                                <span className={`text-[9px] font-mono font-bold tracking-wider uppercase whitespace-nowrap mt-0.5 ${colors.text}`}>
                                  {item.abbr} • {item.tier}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Sliding Row 2 (Moves in Reverse) */}
                  {track2.length > 0 && (
                    <div className="dot-marquee-row flex whitespace-nowrap overflow-hidden">
                      <div
                        className="dot-marquee-inner flex gap-3.5 w-max animate-dot-track2"
                      >
                        {track2.map((item, idx) => {
                          const isActive = activeState.state === item.state;
                          const colors = tierColors[item.tier as UsRegion] || tierColors.West;
                          return (
                            <div
                              key={`${item.state}-r2-${idx}`}
                              onMouseEnter={() => setActiveState(item)}
                              onClick={() => setActiveState(item)}
                              className={`cursor-pointer px-4 py-2.5 sm:px-5 sm:py-3 border-2 rounded-xl flex items-center gap-3 transition-colors duration-150 select-none shrink-0 w-auto ${isActive
                                ? "bg-white border-[#006def] text-[#002f7a] shadow-lg"
                                : "bg-white/95 hover:bg-white border-transparent hover:border-white text-[#002f7a] shadow-sm"
                                }`}
                            >
                              <StateLogoBadge state={item.state} abbr={item.abbr} isActive={isActive} size="sm" />
                              <div className="flex flex-col">
                                <p className="text-xs sm:text-sm font-black whitespace-nowrap leading-tight text-[#002f7a]">
                                  {item.state}
                                </p>
                                <span className={`text-[9px] font-mono font-bold tracking-wider uppercase whitespace-nowrap mt-0.5 ${colors.text}`}>
                                  {item.abbr} • {item.tier}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Sliding Row 3 */}
                  {track3.length > 0 && (
                    <div className="dot-marquee-row flex whitespace-nowrap overflow-hidden">
                      <div
                        className="dot-marquee-inner flex gap-3.5 w-max animate-dot-track3"
                      >
                        {track3.map((item, idx) => {
                          const isActive = activeState.state === item.state;
                          const colors = tierColors[item.tier as UsRegion] || tierColors.West;
                          return (
                            <div
                              key={`${item.state}-r3-${idx}`}
                              onMouseEnter={() => setActiveState(item)}
                              onClick={() => setActiveState(item)}
                              className={`cursor-pointer px-4 py-2.5 sm:px-5 sm:py-3 border-2 rounded-xl flex items-center gap-3 transition-colors duration-150 select-none shrink-0 w-auto ${isActive
                                ? "bg-white border-[#006def] text-[#002f7a] shadow-lg"
                                : "bg-white/95 hover:bg-white border-transparent hover:border-white text-[#002f7a] shadow-sm"
                                }`}
                            >
                              <StateLogoBadge state={item.state} abbr={item.abbr} isActive={isActive} size="sm" />
                              <div className="flex flex-col">
                                <p className="text-xs sm:text-sm font-black whitespace-nowrap leading-tight text-[#002f7a]">
                                  {item.state}
                                </p>
                                <span className={`text-[9px] font-mono font-bold tracking-wider uppercase whitespace-nowrap mt-0.5 ${colors.text}`}>
                                  {item.abbr} • {item.tier}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}