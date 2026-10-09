"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Globe2,
  ShieldCheck,
  Sparkles,
  FileCheck2,
  X,
  Layers,
  ArrowUpRight,
} from "lucide-react";
import { getAssetUrl } from "@/lib/utils";

interface PartnerItem {
  id: string;
  code: string;
  src: string;
  name: string;
  shortName: string;
  category: string;
  description: string;
  specCode: string;
  established: string;
  badge: string;
}

const partnerLogos: PartnerItem[] = [
  // COLUMN 1 (5 items)
  {
    id: "ORG_01",
    code: "NODE-01",
    src: getAssetUrl("/PrecastIndustry_Links/1.jpg"),
    name: "Alberta Roadbuilders & Heavy Construction Association",
    shortName: "ARHCA",
    category: "Roadbuilders & Heavy Civil",
    description: "North America's heavy civil infrastructure advocate for durable transport corridors.",
    specCode: "DOT-TRAN-884",
    established: "Est. 1953",
    badge: "Heavy Civil",
  },
  {
    id: "ORG_02",
    code: "NODE-02",
    src: getAssetUrl("/PrecastIndustry_Links/2.jpg"),
    name: "American Concrete Pipe Association",
    shortName: "ACPA",
    category: "Concrete Pipe & Precast Drainage",
    description: "The authoritative voice for precast concrete pipe and box culvert engineering integrity.",
    specCode: "ASTM-C76 / C1433",
    established: "Est. 1907",
    badge: "Pipe & Culvert",
  },
  {
    id: "ORG_03",
    code: "NODE-03",
    src: getAssetUrl("/PrecastIndustry_Links/3.jpg"),
    name: "American Concrete Institute",
    shortName: "ACI",
    category: "Concrete Standards & Technical Codes",
    description: "Global consensus codes for structural design, mix durability, and precast detailing.",
    specCode: "ACI-318 / 350-06",
    established: "Est. 1904",
    badge: "Global Code",
  },
  {
    id: "ORG_04",
    code: "NODE-04",
    src: getAssetUrl("/PrecastIndustry_Links/4.jpg"),
    name: "Association of Consulting Engineering Companies",
    shortName: "ACEC Canada",
    category: "Consulting Engineering & Policy",
    description: "Apex national organization representing elite consulting engineering and advisory practices.",
    specCode: "ENG-CONS-119",
    established: "Est. 1925",
    badge: "Engineering",
  },
  {
    id: "ORG_05",
    code: "NODE-05",
    src: getAssetUrl("/PrecastIndustry_Links/5.jpg"),
    name: "ASTM International",
    shortName: "ASTM",
    category: "Global Material Specifications",
    description: "Globally recognized technical standards for raw aggregates, cement blends, and tensile rebar.",
    specCode: "ASTM-A615 / C33",
    established: "Est. 1898",
    badge: "Material Spec",
  },

  // COLUMN 2 (5 items)
  {
    id: "ORG_06",
    code: "NODE-06",
    src: getAssetUrl("/PrecastIndustry_Links/6.jpg"),
    name: "Building Industry and Land Development",
    shortName: "BILD Calgary",
    category: "Building & Land Development",
    description: "Advancing resilient urban housing, commercial precincts, and modern utility corridors.",
    specCode: "DEV-COMM-440",
    established: "Est. 1946",
    badge: "Development",
  },
  {
    id: "ORG_07",
    code: "NODE-07",
    src: getAssetUrl("/PrecastIndustry_Links/7.jpg"),
    name: "British Precast (Mineral Products Association)",
    shortName: "British Precast",
    category: "Precast Concrete Alliance",
    description: "European & transatlantic precast manufacturing benchmark alliance for zero-defect production.",
    specCode: "BS-EN-13369",
    established: "Est. 1918",
    badge: "Transatlantic",
  },
  {
    id: "ORG_08",
    code: "NODE-08",
    src: getAssetUrl("/PrecastIndustry_Links/8.jpg"),
    name: "Canadian Public Works Association",
    shortName: "CPWA",
    category: "Municipal Public Works & Utilities",
    description: "National public works network managing resilient subterranean drainage and utility grids.",
    specCode: "PW-MUNI-902",
    established: "Est. 1986",
    badge: "Public Works",
  },
  {
    id: "ORG_09",
    code: "NODE-09",
    src: getAssetUrl("/PrecastIndustry_Links/9.jpg"),
    name: "Canadian Precast/Prestressed Concrete Institute",
    shortName: "CPCI",
    category: "Precast & Prestressed Concrete",
    description: "The primary technical guide authority for precast architectural & prestressed structural elements.",
    specCode: "CSA-A23.4 CERT",
    established: "Est. 1961",
    badge: "Precast Authority",
  },
  {
    id: "ORG_10",
    code: "NODE-10",
    src: getAssetUrl("/PrecastIndustry_Links/10.jpg"),
    name: "CSA Group (Canadian Standards Association)",
    shortName: "CSA Group",
    category: "National Standards & Certification",
    description: "Essential Canadian codes for precast manufacturing, testing rigor, and structural certification.",
    specCode: "CSA-S6 / A23.1",
    established: "Est. 1919",
    badge: "National Standard",
  },

  // COLUMN 3 (5 items)
  {
    id: "ORG_11",
    code: "NODE-11",
    src: getAssetUrl("/PrecastIndustry_Links/11.jpg"),
    name: "Cement Association of Canada",
    shortName: "CAC",
    category: "Cement & Sustainable Concrete",
    description: "Driving net-zero carbon precast formulations, Portland-limestone cements, and green mixes.",
    specCode: "ENV-LC3-SPEC",
    established: "Est. 1916",
    badge: "Green Concrete",
  },
  {
    id: "ORG_12",
    code: "NODE-12",
    src: getAssetUrl("/PrecastIndustry_Links/12.jpg"),
    name: "Centre for Advancement of Trenchless Technologies",
    shortName: "CATT Waterloo",
    category: "Trenchless Technologies & R&D",
    description: "University of Waterloo research hub dedicated to microtunneling and subterranean culvert placement.",
    specCode: "R&D-WAT-302",
    established: "Est. 1994",
    badge: "Trenchless R&D",
  },
  {
    id: "ORG_13",
    code: "NODE-13",
    src: getAssetUrl("/PrecastIndustry_Links/13.jpg"),
    name: "North American Society for Trenchless Technology",
    shortName: "NASTT NW",
    category: "Trenchless Engineering Practice",
    description: "Advancing underground infrastructure installation without surface disruption.",
    specCode: "TR-PIPE-JACK-01",
    established: "Est. 1990",
    badge: "Subsurface Tech",
  },
  {
    id: "ORG_14",
    code: "NODE-14",
    src: getAssetUrl("/PrecastIndustry_Links/14.jpg"),
    name: "Ontario Good Roads Association",
    shortName: "OGRA",
    category: "Transportation & Civil Corridors",
    description: "Over a century of building heavy transportation arteries, culvert corridors, and bridges.",
    specCode: "MTO-OPSD-BRIDGE",
    established: "Est. 1894",
    badge: "Transport Civil",
  },
  {
    id: "ORG_15",
    code: "NODE-15",
    src: getAssetUrl("/PrecastIndustry_Links/15.jpg"),
    name: "Ontario Sewer & Watermain Construction Assoc.",
    shortName: "OSWCA",
    category: "Sewer & Watermain Construction",
    description: "Specialist contractors delivering major storm, sanitary, and high-pressure precast systems.",
    specCode: "CIV-WATER-501",
    established: "Est. 1971",
    badge: "Storm & Sanitary",
  },

  // COLUMN 4 (5 items)
  {
    id: "ORG_16",
    code: "NODE-16",
    src: getAssetUrl("/PrecastIndustry_Links/16.jpg"),
    name: "Rediscover Concrete Initiative",
    shortName: "Rediscover",
    category: "Industry Innovation Initiative",
    description: "Collaborative platform showcasing architectural elegance and longevity of modern precast.",
    specCode: "INNOV-ARCH-77",
    established: "Est. 2012",
    badge: "Innovation",
  },
  {
    id: "ORG_17",
    code: "NODE-17",
    src: getAssetUrl("/PrecastIndustry_Links/17.jpg"),
    name: "TUBÉCON Pipe & Box Culvert Alliance",
    shortName: "TUBÉCON",
    category: "Precast Pipe & Box Culverts",
    description: "Dedicated precast culvert, tunnel segment, and hydraulic structure technical consortium.",
    specCode: "BOX-CULVERT-2026",
    established: "Est. 1978",
    badge: "Hydraulics",
  },
  {
    id: "ORG_18",
    code: "NODE-18",
    src: getAssetUrl("/PrecastIndustry_Links/18.jpg"),
    name: "Transportation Association of Canada",
    shortName: "TAC",
    category: "Highway & Transit Standards",
    description: "National forum developing transportation roadway guidelines and precast barrier safety ratings.",
    specCode: "TAC-GEOM-DES",
    established: "Est. 1914",
    badge: "Highway Standard",
  },
  {
    id: "ORG_19",
    code: "NODE-19",
    src: getAssetUrl("/PrecastIndustry_Links/19.jpg"),
    name: "Urban Development Institute",
    shortName: "UDI Pacific",
    category: "Urban Infrastructure Development",
    description: "Non-profit association of real estate, master planners, and utility engineering developers.",
    specCode: "URB-ZONE-801",
    established: "Est. 1972",
    badge: "Urban Planning",
  },
  {
    id: "ORG_20",
    code: "NODE-20",
    src: getAssetUrl("/PrecastIndustry_Links/20.jpg"),
    name: "Western Canada Water & Wastewater Association",
    shortName: "WCWWA",
    category: "Water & Wastewater Networks",
    description: "Technical network for water treatment plants, precast chambers, and lift station infrastructure.",
    specCode: "EPA-WATER-RES",
    established: "Est. 1948",
    badge: "Water Networks",
  },
];

// 4 Distinct Columns of 5 items each
const col1 = partnerLogos.slice(0, 5);
const col2 = partnerLogos.slice(5, 10);
const col3 = partnerLogos.slice(10, 15);
const col4 = partnerLogos.slice(15, 20);

export default function HexagonLogoShowcase() {
  const [selectedPartner, setSelectedPartner] = useState<PartnerItem | null>(null);

  return (
    <section className="w-full bg-white text-[#002f7a] py-2 sm:py-4 md:py-6 overflow-hidden relative select-none border-t border-[#002f7a]/15">
      {/* CAD BLUEPRINT GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #002f7a 1px, transparent 1px),
            linear-gradient(to bottom, #002f7a 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* AMBIENT RADIAL LIGHTING */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#006def]/[0.035] rounded-full blur-[120px] pointer-events-none" />

      {/* VERTICAL MARQUEE KEYFRAMES & HOVER STYLES */}
      <style>{`
        @keyframes marquee-up {
          0% { transform: translateY(0%); }
          100% { transform: translateY(-50%); }
        }
        @keyframes marquee-down {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0%); }
        }
        .animate-marquee-up {
          animation: marquee-up 32s linear infinite;
        }
        .animate-marquee-down {
          animation: marquee-down 32s linear infinite;
        }
        .vertical-marquee-col:hover .animate-marquee-up,
        .vertical-marquee-col:hover .animate-marquee-down,
        .animate-marquee-up:hover,
        .animate-marquee-down:hover {
          animation-play-state: paused !important;
        }
      `}</style>

      <div className="w-full relative z-10 space-y-8">
        {/* SECTION HEADER (MATCHES STANDARD PAGE CONTAINER PADDING) */}
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 text-center space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-blue-50/90 border border-[#006def]/30 text-[#006def] text-xs font-mono font-black tracking-[0.2em] uppercase rounded-full shadow-xs">
            <Globe2 className="w-3.5 h-3.5 text-[#006def]" />
            <span>4-Column Alliance Matrix</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#002f7a] tracking-tight uppercase leading-none">
            PRECAST ALLIANCE <span className="text-[#006def]">& PARTNER NETWORK.</span>
          </h2>

          <p className="text-[#002f7a]/80 font-medium text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            North American engineering institutes, municipal networks, and precast concrete standards councils in continuous synchronization.
          </p>
        </div>

        {/* 4-COLUMN VERTICAL MARQUEE BAND (FULL-WIDTH BACKGROUND, STANDARD INNER CONTENT PADDING) */}
        <div className="w-full border-y border-[#006def]/30 bg-[#002f7a] relative py-3 sm:py-4 overflow-hidden">
          {/* INNER BLUEPRINT GRID */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `
                radial-gradient(circle at 50% 50%, #006def 1px, transparent 1px),
                linear-gradient(to right, rgba(0,109,239,0.2) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0,109,239,0.2) 1px, transparent 1px)
              `,
              backgroundSize: "24px 24px, 48px 48px, 48px 48px",
            }}
          />

          {/* 4 COLUMNS GRID - ALIGNED TO PAGE CONTAINER PADDING */}
          <div className="max-w-[1600px] py-4 mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 w-full h-[540px] sm:h-[580px] md:h-[620px] relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 h-full">
              {/* COLUMN 1: UP */}
              <div className="vertical-marquee-col relative h-full overflow-hidden">
                <div
                  className="animate-marquee-up flex flex-col gap-3.5"
                  style={{ animationDuration: "28s" }}
                >
                  {[...col1, ...col1, ...col1, ...col1].map((item, idx) => (
                    <VerticalPartnerCard
                      key={`c1-${idx}`}
                      item={item}
                      onClick={() => setSelectedPartner(item)}
                    />
                  ))}
                </div>
              </div>

              {/* COLUMN 2: DOWN */}
              <div className="vertical-marquee-col relative h-full overflow-hidden">
                <div
                  className="animate-marquee-down flex flex-col gap-3.5"
                  style={{ animationDuration: "34s" }}
                >
                  {[...col2, ...col2, ...col2, ...col2].map((item, idx) => (
                    <VerticalPartnerCard
                      key={`c2-${idx}`}
                      item={item}
                      onClick={() => setSelectedPartner(item)}
                    />
                  ))}
                </div>
              </div>

              {/* COLUMN 3: UP (HIDDEN ON SMALL SCREENS, VISIBLE ON MD+) */}
              <div className="vertical-marquee-col relative h-full overflow-hidden hidden md:block">
                <div
                  className="animate-marquee-up flex flex-col gap-3.5"
                  style={{ animationDuration: "30s" }}
                >
                  {[...col3, ...col3, ...col3, ...col3].map((item, idx) => (
                    <VerticalPartnerCard
                      key={`c3-${idx}`}
                      item={item}
                      onClick={() => setSelectedPartner(item)}
                    />
                  ))}
                </div>
              </div>

              {/* COLUMN 4: DOWN (HIDDEN ON SMALL SCREENS, VISIBLE ON MD+) */}
              <div className="vertical-marquee-col relative h-full overflow-hidden hidden md:block">
                <div
                  className="animate-marquee-down flex flex-col gap-3.5"
                  style={{ animationDuration: "36s" }}
                >
                  {[...col4, ...col4, ...col4, ...col4].map((item, idx) => (
                    <VerticalPartnerCard
                      key={`c4-${idx}`}
                      item={item}
                      onClick={() => setSelectedPartner(item)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM METRIC SUMMARY BAR (MATCHES STANDARD PAGE CONTAINER PADDING) */}
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 border border-[#002f7a]/15 rounded-xl p-4 text-center shadow-xs">
            <div className="space-y-0.5">
              <span className="text-[10px] font-mono text-[#006def] font-bold uppercase tracking-wider">
                Network Scale
              </span>
              <p className="text-base sm:text-lg font-black text-[#002f7a]">20 Accredited Entities</p>
            </div>
            <div className="space-y-0.5 border-l border-[#002f7a]/10">
              <span className="text-[10px] font-mono text-[#006def] font-bold uppercase tracking-wider">
                Governing Codes
              </span>
              <p className="text-base sm:text-lg font-black text-[#002f7a]">ACI, CPCI, CSA, ASTM</p>
            </div>
            <div className="space-y-0.5 border-l border-[#002f7a]/10">
              <span className="text-[10px] font-mono text-[#006def] font-bold uppercase tracking-wider">
                Infrastructure Scope
              </span>
              <p className="text-base sm:text-lg font-black text-[#002f7a]">DOT & Municipal</p>
            </div>
            <div className="space-y-0.5 border-l border-[#002f7a]/10">
              <span className="text-[10px] font-mono text-[#006def] font-bold uppercase tracking-wider">
                Verification Mode
              </span>
              <p className="text-base sm:text-lg font-black text-[#006def]">Continuous Live Loop</p>
            </div>
          </div>
        </div>
      </div>

      {/* POPUP SPECIFICATION MODAL ON CARD CLICK */}
      <AnimatePresence>
        {selectedPartner && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#002f7a]/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 15 }}
              className="relative w-full max-w-lg bg-white border border-[#002f7a]/20 rounded-2xl p-6 sm:p-8 shadow-2xl text-[#002f7a] overflow-hidden"
            >
              {/* TOP ACCENT LINE */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#002f7a] via-[#006def] to-[#002f7a]" />

              {/* CLOSE BUTTON */}
              <button
                type="button"
                onClick={() => setSelectedPartner(null)}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-[#002f7a] transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-5">
                {/* MODAL HEADER */}
                <div className="flex items-center gap-2 text-xs font-mono text-[#006def] font-bold">
                  <span className="w-2 h-2 rounded-full bg-[#006def] animate-ping" />
                  <span>ALLIANCE SPECIFICATION NODE [{selectedPartner.code}]</span>
                </div>

                {/* MODAL LOGO HERO */}
                <div className="relative w-full h-28 bg-slate-50 rounded-xl p-4 flex items-center justify-center border border-[#002f7a]/10 shadow-inner">
                  <Image
                    src={selectedPartner.src}
                    alt={selectedPartner.name}
                    fill
                    sizes="300px"
                    className="object-contain p-3"
                  />
                </div>

                {/* MODAL TITLE */}
                <div className="space-y-1">
                  <span className="inline-block px-2.5 py-0.5 bg-blue-50 border border-[#006def]/30 rounded-sm text-[10px] font-mono font-bold text-[#006def] uppercase">
                    {selectedPartner.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#002f7a] leading-tight">
                    {selectedPartner.name}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#002f7a]/80 leading-relaxed font-medium">
                  {selectedPartner.description}
                </p>

                {/* SPECS GRID */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-slate-50 border border-[#002f7a]/10 rounded-lg p-3">
                    <span className="text-[10px] font-mono text-[#002f7a]/60 uppercase flex items-center gap-1 font-bold">
                      <FileCheck2 className="w-3.5 h-3.5 text-[#006def]" /> Specification
                    </span>
                    <p className="text-xs font-mono font-black text-[#002f7a] mt-1">
                      {selectedPartner.specCode}
                    </p>
                  </div>
                  <div className="bg-slate-50 border border-[#002f7a]/10 rounded-lg p-3">
                    <span className="text-[10px] font-mono text-[#002f7a]/60 uppercase flex items-center gap-1 font-bold">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Compliance
                    </span>
                    <p className="text-xs font-mono font-black text-emerald-700 mt-1">
                      Verified Alliance
                    </p>
                  </div>
                </div>

                {/* ACTION CTA */}
                <div className="pt-3 border-t border-[#002f7a]/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-[#002f7a]/60 font-semibold">
                    {selectedPartner.established}
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedPartner(null)}
                    className="px-5 py-2 bg-[#002f7a] hover:bg-[#006def] text-white rounded-lg font-bold text-xs uppercase tracking-wider transition-all shadow-md"
                  >
                    Close Inspector
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* VERTICAL MARQUEE CARD COMPONENT */
function VerticalPartnerCard({
  item,
  onClick,
}: {
  item: PartnerItem;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="group relative bg-white border border-[#002f7a]/15 hover:border-[#006def] shadow-xs hover:shadow-lg transition-all duration-300 rounded-xl p-3.5 flex flex-col justify-between cursor-pointer min-h-[148px] shrink-0 overflow-hidden"
    >
      {/* HOVER ACCENT BAR */}
      <div className="absolute top-0 left-0 w-0 h-1 bg-[#006def] group-hover:w-full transition-all duration-300" />

      {/* TOP META: CODE & CATEGORY */}
      <div className="flex items-center justify-between text-[9px] font-mono">
        <span className="font-bold text-[#006def] bg-blue-50 px-1.5 py-0.5 rounded-xs border border-[#006def]/20">
          {item.code}
        </span>
        <span className="text-[#002f7a]/60 uppercase font-semibold truncate max-w-[110px]">
          {item.badge}
        </span>
      </div>

      {/* LOGO IMAGE CENTERED */}
      <div className="relative w-full h-14 my-1.5 flex items-center justify-center bg-slate-50/70 rounded-lg p-1.5 border border-[#002f7a]/5 group-hover:bg-white transition-colors">
        <Image
          src={item.src}
          alt={item.name}
          fill
          sizes="160px"
          className="object-contain p-1 group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* BOTTOM NAME & STATUS */}
      <div className="flex items-center justify-between pt-1.5 border-t border-[#002f7a]/10">
        <span className="text-xs font-black text-[#002f7a] group-hover:text-[#006def] transition-colors truncate max-w-[130px]">
          {item.shortName}
        </span>
        <ArrowUpRight className="w-3.5 h-3.5 text-[#002f7a]/40 group-hover:text-[#006def] transition-colors shrink-0" />
      </div>
    </div>
  );
}