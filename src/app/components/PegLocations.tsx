"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  Copy,
  Check,
  Building2,
  Navigation,
  Globe2,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import { getAssetUrl } from "@/lib/utils";

interface LocationItem {
  id: string;
  category: "usa" | "international";
  region: string;
  badge: string;
  tagline: string;
  address: string;
  city: string;
  country: string;
  postalCode?: string;
  phone: string;
  email: string;
  timezone: string;
  hours: string;
  mapQuery: string;
  image?: string;
  capabilities: string[];
}

const locationData: LocationItem[] = [
  {
    id: "ny-hq",
    category: "usa",
    region: "Northeast — HQ",
    badge: "Global Headquarters",
    tagline: "Corporate Engineering, Structural R&D & Master Detailing Center",
    address: "105 Maxess Road",
    city: "Melville, NY 11747",
    country: "United States",
    phone: "(631) 452-1111",
    email: "ny@precastengineering.org",
    timezone: "Eastern Time (ET • UTC-5)",
    hours: "Mon – Fri: 08:00 AM – 06:00 PM EST",
    mapQuery: "105 Maxess Road, Melville, NY 11747, USA",
    image: "/assets/northeast.webp",
    capabilities: [
      "DOT Precast Certifications",
      "Structural Engineering Analysis",
      "Culvert & Trench Systems",
      "Master BIM Detailing",
    ],
  },
  {
    id: "fl-hub",
    category: "usa",
    region: "South — Florida",
    badge: "Regional Engineering Center",
    tagline: "Coastal Engineering, Utility Vaults & Infrastructure Hub",
    address: "850 NW Federal Hwy",
    city: "Stuart, FL 34994",
    country: "United States",
    phone: "(772) 297-0700",
    email: "fl@precastengineering.org",
    timezone: "Eastern Time (ET • UTC-5)",
    hours: "Mon – Fri: 08:00 AM – 05:30 PM EST",
    mapQuery: "850 NW Federal Hwy, Stuart, FL 34994, USA",
    capabilities: [
      "Coastal & Marine Precast",
      "Underground Drainage Vaults",
      "Stormwater Management",
      "Hurricane-Resistant Design",
    ],
  },
  {
    id: "mi-hub",
    category: "usa",
    region: "Midwest — Detroit",
    badge: "Industrial Drafting Center",
    tagline: "Heavy Industrial, DOT Bridge & Transportation Engineering",
    address: "2200 Hunt Street",
    city: "Detroit, MI 48207",
    country: "United States",
    phone: "(631) 452-1111",
    email: "detroit@precastengineering.org",
    timezone: "Eastern Time (ET • UTC-5)",
    hours: "Mon – Fri: 08:00 AM – 05:00 PM EST",
    mapQuery: "2200 Hunt Street, Detroit, MI 48207, USA",
    capabilities: [
      "Heavy Civil & Bridge Precast",
      "Industrial Retaining Walls",
      "Automated Rebar Layouts",
      "Precaster QC Verification",
    ],
  },
  {
    id: "bc-west",
    category: "usa",
    region: "West Coast — Pacific",
    badge: "Pacific Drafting Hub",
    tagline: "Seismic Design, Architectural Precast & Modular Detailing",
    address: "1824 Store St, 2nd Floor",
    city: "Victoria, BC V8T 4R4",
    country: "North America / Pacific",
    phone: "(604) 200-0616",
    email: "west@precastengineering.org",
    timezone: "Pacific Time (PT • UTC-8)",
    hours: "Mon – Fri: 08:30 AM – 05:30 PM PST",
    mapQuery: "1824 Store St, Victoria, BC V8T 4R4, Canada",
    capabilities: [
      "Seismic Dynamic Analysis",
      "Architectural Wall Panels",
      "Precision Mold Tooling",
      "3D Mesh & CAM Generation",
    ],
  },
  {
    id: "ca-east",
    category: "international",
    region: "Canada — East",
    badge: "Canadian Regional Hub",
    tagline: "CSA Standards, High-Rise Modular & Eastern Infrastructure",
    address: "One Yonge Street",
    city: "Toronto, Ontario M5E 1R4",
    country: "Canada",
    phone: "+1 (438) 805-9990",
    email: "toronto@precastengineering.org",
    timezone: "Eastern Time (ET • UTC-5)",
    hours: "Mon – Fri: 08:30 AM – 05:30 PM EST",
    mapQuery: "1 Yonge St, Toronto, ON M5E 1E5, Canada",
    capabilities: [
      "CSA A23.4 Precast Standards",
      "Cold-Climate Thermal Modeling",
      "Modular Commercial Structures",
      "Municipal Water Systems",
    ],
  },
  {
    id: "ca-west",
    category: "international",
    region: "Canada — West",
    badge: "Western Canada Office",
    tagline: "Precast Concrete Detailing & Marine Infrastructure",
    address: "1824 Store St, 2nd Floor",
    city: "Victoria, BC V8T 4R4",
    country: "Canada",
    phone: "(604) 200-0616",
    email: "victoria@precastengineering.org",
    timezone: "Pacific Time (PT • UTC-8)",
    hours: "Mon – Fri: 08:30 AM – 05:00 PM PST",
    mapQuery: "1824 Store St, Victoria, BC V8T 4R4, Canada",
    capabilities: [
      "Marine Dock & Pier Elements",
      "Custom Box Culverts",
      "CAD/CAM Production Export",
      "Structural Shop Drawings",
    ],
  },
  {
    id: "caribbean",
    category: "international",
    region: "Caribbean & Latin America",
    badge: "Caribbean Center",
    tagline: "Resort Infrastructure, Saltwater Resistant Systems & Islands Hub",
    address: "Crypto Isle - Green Roofs, 1 E Bay St",
    city: "Nassau, Bahamas",
    country: "Caribbean / LATAM",
    phone: "(242) 802-8000",
    email: "caribbean@precastengineering.org",
    timezone: "Eastern Time (ET • UTC-5)",
    hours: "Mon – Fri: 09:00 AM – 05:00 PM EST",
    mapQuery: "1 E Bay St, Nassau, Bahamas",
    capabilities: [
      "Tropical Marine Concrete Design",
      "Corrosion-Resistant Detailing",
      "Resort Precast Infrastructure",
      "Modular Utility Systems",
    ],
  },
];

export default function PegLocations() {
  const [activeTab, setActiveTab] = useState<string>("ny-hq");
  const [filter, setFilter] = useState<"all" | "usa" | "international">("all");
  const [copied, setCopied] = useState<boolean>(false);

  const filteredLocations = locationData.filter((loc) => {
    if (filter === "all") return true;
    return loc.category === filter;
  });

  const selectedLocation =
    locationData.find((l) => l.id === activeTab) || locationData[0];

  const handleCopyAddress = () => {
    const fullText = `${selectedLocation.address}, ${selectedLocation.city}, ${selectedLocation.country}`;
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    selectedLocation.mapQuery
  )}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

  const googleMapsDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    selectedLocation.mapQuery
  )}`;

  return (
    <section
      id="locations"
      className="w-full py-8 sm:py-10 md:py-12 lg:py-16 bg-slate-50/60 border-t border-slate-200/80 overflow-hidden select-none"
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 space-y-8">
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b-2 border-slate-200">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#002f7a] text-white text-xs font-black tracking-[0.25em] uppercase border-l-2 border-[#006def]">
              <Globe2 className="w-3.5 h-3.5 text-[#006def]" />
              <span>Global Logistics & Offices</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#002f7a] tracking-tight uppercase">
              Engineering Hubs &{" "}
              <span
                style={{
                  WebkitTextStroke: "1.5px #006def",
                  color: "transparent",
                }}
              >
                Locations
              </span>
            </h2>
            <p className="text-sm md:text-base text-[#006def] font-medium max-w-2xl">
              Select any regional office or international hub below to inspect direct contact channels, working schedules, engineering scope, and interactive maps.
            </p>
          </div>

          {/* FILTER CHIPS */}
          <div className="flex items-center bg-white p-1 rounded-xl border border-slate-200 shadow-xs overflow-x-auto max-w-full">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 text-xs font-black uppercase tracking-wider rounded-lg transition-all ${filter === "all"
                ? "bg-[#002f7a] text-white shadow-xs"
                : "text-[#006def] hover:text-[#002f7a] hover:bg-slate-100"
                }`}
            >
              All ({locationData.length})
            </button>
            <button
              onClick={() => setFilter("usa")}
              className={`px-4 py-2 text-xs font-black uppercase tracking-wider rounded-lg transition-all ${filter === "usa"
                ? "bg-[#002f7a] text-white shadow-xs"
                : "text-[#006def] hover:text-[#002f7a] hover:bg-slate-100"
                }`}
            >
              USA (4)
            </button>
            <button
              onClick={() => setFilter("international")}
              className={`px-4 py-2 text-xs font-black uppercase tracking-wider rounded-lg transition-all ${filter === "international"
                ? "bg-[#002f7a] text-white shadow-xs"
                : "text-[#006def] hover:text-[#002f7a] hover:bg-slate-100"
                }`}
            >
              International (3)
            </button>
          </div>
        </div>

        {/* 2-COLUMN INTERACTIVE HUB LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: LOCATION TAB SELECTOR (5 COLS) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-black uppercase tracking-widest text-[#002f7a]">
                Select Regional Office
              </span>
              <span className="text-[11px] font-mono font-bold text-[#006def]">
                {filteredLocations.length} locations available
              </span>
            </div>

            <div className="space-y-2.5">
              {filteredLocations.map((loc) => {
                const isActive = activeTab === loc.id;
                return (
                  <button
                    key={loc.id}
                    onClick={() => setActiveTab(loc.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-200 relative group flex items-center justify-between gap-4 ${isActive
                      ? "bg-[#002f7a] border-[#002f7a] text-white shadow-md shadow-[#002f7a]/15 translate-x-1"
                      : "bg-white border-slate-200 hover:border-[#006def]/40 text-[#006def] hover:bg-slate-50/80 shadow-xs"
                      }`}
                  >
                    {/* ACTIVE ACCENT BAR */}
                    {isActive && (
                      <motion.div
                        layoutId="activeLocationBar"
                        className="absolute left-0 top-3 bottom-3 w-1.5 bg-[#006def] rounded-r-full"
                      />
                    )}

                    <div className="flex items-start gap-3.5 min-w-0 pl-1">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${isActive
                          ? "bg-white/10 text-white"
                          : "bg-[#006def]/10 text-[#006def] group-hover:bg-[#006def] group-hover:text-white"
                          }`}
                      >
                        <Building2 className="w-5 h-5" />
                      </div>

                      <div className="min-w-0 space-y-0.5">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span
                            className={`text-xs font-black uppercase tracking-wide truncate ${isActive ? "text-white" : "text-[#002f7a]"
                              }`}
                          >
                            {loc.region}
                          </span>
                          <span
                            className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider ${isActive
                              ? "bg-white/15 text-white/90"
                              : "bg-slate-100 text-[#006def]"
                              }`}
                          >
                            {loc.category === "usa" ? "USA" : "INTL"}
                          </span>
                        </div>

                        <p
                          className={`text-xs truncate font-medium ${isActive ? "text-white/80" : "text-[#006def]"
                            }`}
                        >
                          {loc.address}, {loc.city}
                        </p>

                        <div className="flex items-center gap-1.5 pt-1">
                          <Phone
                            className={`w-3 h-3 ${isActive ? "text-[#006def]" : "text-[#006def]"
                              }`}
                          />
                          <span
                            className={`text-[11px] font-mono font-bold ${isActive ? "text-white/90" : "text-[#006def]"
                              }`}
                          >
                            {loc.phone}
                          </span>
                        </div>
                      </div>
                    </div>

                    <ChevronRight
                      className={`w-5 h-5 shrink-0 transition-transform ${isActive
                        ? "text-[#006def] translate-x-0.5"
                        : "text-[#006def] group-hover:text-[#006def] group-hover:translate-x-0.5"
                        }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: DETAILED LOCATION SHOWCASE (7 COLS) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedLocation.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden flex flex-col"
              >
                {/* 1. TOP HEADER BANNER */}
                <div className="bg-[#002f7a] text-white p-6 sm:p-8 relative overflow-hidden">
                  <div className="absolute right-0 top-0 translate-x-6 -translate-y-6 opacity-10 pointer-events-none">
                    <Globe2 className="w-56 h-56 text-white" />
                  </div>

                  <div className="relative z-10 space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-[11px] font-mono font-bold tracking-wider text-white uppercase border border-white/15">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Active Operational Hub</span>
                      </div>
                      <span className="text-xs font-mono font-bold tracking-widest text-[#006def] uppercase bg-white px-2.5 py-1 rounded-sm">
                        {selectedLocation.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black tracking-tight uppercase text-white">
                      {selectedLocation.region}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/80 font-medium leading-relaxed max-w-xl">
                      {selectedLocation.tagline}
                    </p>
                  </div>
                </div>

                {/* 2. CONTACT DETAILS & METADATA GRID */}
                <div className="p-6 sm:p-8 space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* ADDRESS CARD */}
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#002f7a]">
                          <MapPin className="w-4 h-4 text-[#006def]" />
                          <span>Office Address</span>
                        </div>
                        <button
                          onClick={handleCopyAddress}
                          className="text-[11px] font-mono font-bold text-[#006def] hover:text-[#006def] inline-flex items-center gap-1 transition-colors"
                          title="Copy address"
                        >
                          {copied ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                              <span className="text-emerald-600">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                      <div className="text-xs font-bold text-[#006def] leading-relaxed">
                        {selectedLocation.address}
                        <br />
                        {selectedLocation.city}
                        <br />
                        <span className="text-[#006def] font-semibold">
                          {selectedLocation.country}
                        </span>
                      </div>
                    </div>

                    {/* PHONE & DIRECT CONTACT */}
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                      <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#002f7a]">
                        <Phone className="w-4 h-4 text-[#006def]" />
                        <span>Direct Telephone</span>
                      </div>
                      <a
                        href={`tel:${selectedLocation.phone.replace(/[^0-9+]/g, "")}`}
                        className="text-base font-black text-[#006def] hover:underline block tracking-tight"
                      >
                        {selectedLocation.phone}
                      </a>
                      <div className="flex items-center gap-1.5 text-[11px] text-[#006def] font-medium">
                        <Mail className="w-3.5 h-3.5 text-[#006def]" />
                        <a
                          href={`mailto:${selectedLocation.email}`}
                          className="hover:text-[#006def] transition-colors truncate"
                        >
                          {selectedLocation.email}
                        </a>
                      </div>
                    </div>

                    {/* WORKING SCHEDULE */}
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                      <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#002f7a]">
                        <Clock className="w-4 h-4 text-[#006def]" />
                        <span>Office Hours</span>
                      </div>
                      <p className="text-xs font-bold text-[#006def]">
                        {selectedLocation.hours}
                      </p>
                      <p className="text-[11px] font-mono text-[#006def]">
                        {selectedLocation.timezone}
                      </p>
                    </div>

                    {/* CAPABILITIES / SERVICES */}
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                      <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#002f7a]">
                        <ShieldCheck className="w-4 h-4 text-[#006def]" />
                        <span>Hub Specializations</span>
                      </div>
                      <ul className="space-y-1">
                        {selectedLocation.capabilities.slice(0, 3).map((cap, i) => (
                          <li
                            key={i}
                            className="text-[11px] font-medium text-[#006def] flex items-center gap-1.5"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#006def]" />
                            <span className="truncate">{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* 3. LOCATION & REGIONAL VISUAL + INTERACTIVE EMBEDDED GOOGLE MAP */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Regional Coverage / Facility Visual */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Globe2 className="w-4 h-4 text-[#006def]" />
                          <h4 className="text-xs font-black uppercase tracking-wider text-[#002f7a]">
                            Regional Coverage & Territory Map
                          </h4>
                        </div>
                        <div className="w-full h-64 sm:h-72 rounded-xl overflow-hidden border border-slate-200 shadow-inner bg-slate-900/5 relative group">
                          <Image
                            src={getAssetUrl(selectedLocation.image || "/assets/northeast.webp")}
                            alt={`${selectedLocation.region} territory map`}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                            priority={selectedLocation.id === "ny-hq"}
                          />
                          <div className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider text-[#002f7a] shadow-sm border border-slate-200/60 flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span>{selectedLocation.region}</span>
                          </div>
                        </div>
                      </div>

                      {/* Interactive Live Google Map */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Navigation className="w-4 h-4 text-[#006def]" />
                            <h4 className="text-xs font-black uppercase tracking-wider text-[#002f7a]">
                              Interactive Facility Map
                            </h4>
                          </div>

                          <a
                            href={googleMapsDirectionsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-black text-[#006def] hover:text-[#002f7a] uppercase tracking-wider transition-colors"
                          >
                            <span>Google Maps</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>

                        <div className="w-full h-64 sm:h-72 rounded-xl overflow-hidden border border-slate-200 shadow-inner bg-slate-100 relative group">
                          <iframe
                            title={`${selectedLocation.region} Google Map`}
                            src={mapEmbedUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 4. BOTTOM ACTION BAR */}
                  <div className="pt-2 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs font-medium text-[#006def] text-center sm:text-left">
                      Need engineering submittals or on-site consultation in this region?
                    </p>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <a
                        href={`tel:${selectedLocation.phone.replace(/[^0-9+]/g, "")}`}
                        className="flex-1 sm:flex-none px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-[#002f7a] text-xs font-black uppercase tracking-wider rounded-lg transition-colors text-center inline-flex items-center justify-center gap-1.5"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#006def]" />
                        <span>Call Office</span>
                      </a>
                      <a
                        href="#contact"
                        className="flex-1 sm:flex-none px-5 py-2.5 bg-[#006def] hover:bg-[#002f7a] text-white text-xs font-black uppercase tracking-wider rounded-lg transition-all shadow-sm text-center"
                      >
                        Request Consultation
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}