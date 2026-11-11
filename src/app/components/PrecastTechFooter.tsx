"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  HelpCircle,
  Users,
  FileText,
  Code2,
  Activity,
  ShieldCheck,
  Headphones,
  ExternalLink,
  CheckCircle2,
  Globe2
} from "lucide-react";
import { getAssetUrl } from "@/lib/utils";

// =========================================================================
// 1. DEDICATED PRECAST GROUP LOGOS & DEDICATED HYPERLINKS
// =========================================================================
interface DedicatedGroupEntity {
  name: string;
  tagline: string;
  src: string;
  alt: string;
  href: string;
  isExternal: boolean;
}

const dedicatedGroupLogos: DedicatedGroupEntity[] = [
  {
    name: "Precast Engineering Group",
    tagline: "Structural Engineering & PE Stamping",
    src: getAssetUrl("/assets/footer_logo/PEG_T.png"),
    alt: "Precast Engineering Group (PEG)",
    href: "https://www.precastengineering.org",
    isExternal: true,
  },
  {
    name: "Precast Exchange",
    tagline: "Industrial Precast Marketplace & Equipment",
    src: getAssetUrl("/assets/footer_logo/PEX.png"),
    alt: "Precast Exchange",
    href: "https://precastxchange.com",
    isExternal: true,
  },
  {
    name: "Precast Drawings",
    tagline: "Certified Shop Drawings & Production Drafting",
    src: getAssetUrl("/precast_drawings.jpeg"),
    alt: "Precast Drawings",
    href: "#technical-vault",
    isExternal: false,
  },
  {
    name: "Precast Media",
    tagline: "Industrial Media & Technical Animation",
    src: getAssetUrl("/assets/footer_logo/PM.png"),
    alt: "Precast Media",
    href: "https://precastmedia.com",
    isExternal: true,
  },
  {
    name: "Precast Industry",
    tagline: "Knowledge Network & Industry Intelligence",
    src: getAssetUrl("/assets/footer_logo/PI_darkblue.png"),
    alt: "Precast Industry",
    href: "https://www.precastengineering.org",
    isExternal: true,
  },
  {
    name: "Precast Information Management",
    tagline: "MES & Enterprise Automation",
    src: getAssetUrl("/assets/footer_logo/PIM.png"),
    alt: "Precast Information Management",
    href: "https://www.precastengineering.org",
    isExternal: true,
  },
];

// =========================================================================
// 2. DIRECTORY COLUMNS (INCLUDING PRECAST EXCHANGE & PRECAST DRAWINGS)
// =========================================================================
const newFooterColumns = [
  {
    title: "PLATFORM",
    links: [
      { name: "Precast Exchange", href: "https://precastxchange.com", isExternal: true },
      { name: "Precast Drawings", href: "#technical-vault" },
      { name: "CRM & Sales", href: "#" },
      { name: "Tender & Bid", href: "#" },
      { name: "Estimating & Takeoff", href: "#" },
      { name: "Quoting & Contracts", href: "#" },
      { name: "BIM & Modelling", href: "#" },
      { name: "CAD/CAM Export", href: "#" },
    ],
  },
  {
    title: "OPERATIONS",
    links: [
      { name: "Production Planning", href: "#" },
      { name: "Shop Floor & MES", href: "#" },
      { name: "Quality & QC", href: "#" },
      { name: "Inventory & MRP", href: "#" },
      { name: "Yard Management", href: "#" },
      { name: "Logistics & Dispatch", href: "#" },
      { name: "Erection & Field", href: "#" },
      { name: "Maintenance", href: "#" },
    ],
  },
  {
    title: "SOLUTIONS",
    links: [
      { name: "AI Platform", href: "#" },
      { name: "Analytics & KPIs", href: "#" },
      { name: "Element Passport", href: "#" },
      { name: "Compliance Engine", href: "#" },
      { name: "Sustainability & EPD", href: "#" },
      { name: "Mobile & Offline", href: "#" },
      { name: "Bed Nesting", href: "#" },
      { name: "Integrations", href: "#" },
    ],
  },
  {
    title: "INDUSTRIES",
    links: [
      { name: "Structural Precast", href: "#" },
      { name: "Infrastructure & DOT", href: "#" },
      { name: "Underground & Drainage", href: "#" },
      { name: "Architectural Precast", href: "#" },
      { name: "Modular & Volumetric", href: "#" },
      { name: "Utility & Energy", href: "#" },
      { name: "Rail & Transit", href: "#" },
      { name: "Water & Wastewater", href: "#" },
    ],
  },
  {
    title: "RESOURCES",
    links: [
      { name: "Precast Exchange Hub", href: "https://precastxchange.com", isExternal: true },
      { name: "Technical Library", href: "#" },
      { name: "Standards Index", href: "#" },
      { name: "Product Library", href: "#" },
      { name: "Benchmarks", href: "#" },
      { name: "Case Studies", href: "#" },
      { name: "ROI Calculator", href: "#" },
      { name: "Academy", href: "#" },
    ],
  },
  {
    title: "SERVICES",
    links: [
      { name: "Shop Drawings & Detailing", href: "#technical-vault" },
      { name: "50-State PE Stamping", href: "#contact" },
      { name: "Implementation", href: "#" },
      { name: "Data Migration", href: "#" },
      { name: "Machine Integration", href: "#" },
      { name: "Custom Development", href: "#" },
      { name: "Training & Enablement", href: "#" },
      { name: "Plant Audit", href: "#" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { name: "About PEG", href: "#" },
      { name: "News & Insights", href: "/blog" },
      { name: "Careers", href: "#" },
      { name: "Partners", href: "#" },
      { name: "Press Kit", href: "#" },
      { name: "Events", href: "#" },
      { name: "Contact", href: "#contact" },
      { name: "Book a Demo", href: "#contact" },
    ],
  },
];

// =========================================================================
// 3. REGIONAL OPERATIONS: ONLY USA & CANADA
// =========================================================================
const usaCanadaOperations = [
  {
    country: "United States",
    coverage: "All 50 States (PE Stamped & DOT Compliant)",
    tag: "50-State PE Licensure",
    description:
      "Full PE stamping, calculation books, and state DOT compliant standard designs across all 50 states.",
    standards: "ACI 318, PCI MNL-116/117, NPCA, ASTM C913/C890, AASHTO H-20 & HL-93.",
    keyRegions: "Northeast, Mid-Atlantic, Southeast, Midwest, Gulf Coast, Southwest, Pacific Northwest & West Coast.",
  },
  {
    country: "Canada",
    coverage: "All Provinces & Territories",
    tag: "CSA / CPCQA Certified",
    description:
      "Dual imperial and metric engineering compliance with provincial transportation requirements across Canada.",
    standards: "CSA A23.4 (Precast Concrete), CPCQA Plant Certification, CSA S6 (Canadian Highway Bridge Design Code).",
    keyRegions: "Ontario, Quebec, British Columbia, Alberta, Prairies & Atlantic Provinces.",
  },
];

const supportItems = [
  { label: "Help Centre", icon: HelpCircle, href: "#" },
  { label: "Implementation", icon: Users, href: "#" },
  { label: "Documentation", icon: FileText, href: "#" },
  { label: "API Reference", icon: Code2, href: "#" },
  { label: "System Status", icon: Activity, href: "#" },
  { label: "Security", icon: ShieldCheck, href: "#" },
  { label: "Talk to Support", icon: Headphones, href: "#" },
];

const complianceBadges = [
  "50 STATES PE STAMPED",
  "AASHTO H-20 & HL-93",
  "ACI 318 & PCI MNL",
  "CSA A23.4 / CPCQA",
  "NPCA CERTIFIED",
  "SOC 2 TYPE II",
];

const builtToStandards = [
  "PCAV", "PCMA", "PPA", "NEPCA", "NJPCA", "PCANY", "NPCA", "PCI", "ACI", "ASTM", "AASHTO", "CSA A23.4", "ISO 9001"
];

const legalLinks = [
  "Privacy Policy",
  "Terms of Service",
  "Cookie Policy",
  "Accessibility",
  "Sub-processors",
  "Sitemap",
];

const socialLinksNew = [
  { name: "LinkedIn", href: "https://linkedin.com" },
  { name: "YouTube", href: "https://youtube.com" },
  { name: "X", href: "https://x.com" },
  { name: "GitHub", href: "https://github.com" },
];

export default function PrecastTechFooter() {
  return (
    <footer className="w-full bg-[#002f7a] py-6 sm:py-8 border-t-2 border-[#006def]/30">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 space-y-10">

        {/* 1. SEVEN DIRECTORY COLUMNS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 border-b border-white/10 pb-9">
          {newFooterColumns.map((col) => (
            <div key={col.title} className="space-y-4">
              <h3 className="text-white text-[11px] font-black uppercase tracking-[0.3em] flex items-center gap-2">
                <span className="w-2 h-2 bg-[#006def]" />
                <span>{col.title}</span>
              </h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.name}>
                    {link.isExternal ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] mt-2.5 font-bold text-white/80 hover:text-[#006def] uppercase tracking-wider transition-colors duration-150 flex items-center gap-1 group leading-tight"
                      >
                        <span className="group-hover:translate-x-0.5 transition-transform">{link.name}</span>
                        <ExternalLink className="w-2.5 h-2.5 opacity-60 group-hover:opacity-100" />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-[11px] mt-2.5 font-bold text-white/80 hover:text-white uppercase tracking-wider transition-colors duration-150 block leading-tight hover:translate-x-0.5 transform"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 2. BRANDING (LEFT) & RIGHT SIDE: CONTACT INFO + OUR GROUP DEDICATED TO PRECAST */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-white/10 pb-8">

          {/* LEFT: PEG LOGO & PRECAST DRAWINGS LOGO + MISSION */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start space-y-5">
            {/* DUAL BRANDING LOGO CARDS */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-[380px]">
              {/* 1. PEG PRIMARY LOGO */}
              <Link
                href="/"
                className="bg-white p-3 rounded-lg shadow-sm border border-white/20 flex flex-col items-center justify-center h-20 hover:border-[#006def] transition-all group"
                title="Precast Engineering Group (PEG)"
              >
                <Image
                  src={getAssetUrl("/peg_logo.png")}
                  alt="Precast Engineering Group"
                  width={200}
                  height={65}
                  className="w-auto h-auto max-h-12 object-contain group-hover:scale-105 transition-transform"
                  style={{ width: "auto" }}
                  priority
                />
              </Link>

              {/* 2. PRECAST DRAWINGS LOGO */}
              <Link
                href="#technical-vault"
                className="bg-white p-3 rounded-lg shadow-sm border border-white/20 flex flex-col items-center justify-center h-20 hover:border-[#006def] transition-all group"
                title="Precast Drawings — Shop Drawings & Detailing"
              >
                <Image
                  src={getAssetUrl("/precast_drawings.jpeg")}
                  alt="Precast Drawings"
                  width={200}
                  height={65}
                  className="w-auto h-auto max-h-12 object-contain mix-blend-multiply group-hover:scale-105 transition-transform"
                  style={{ width: "auto" }}
                  priority
                />
              </Link>
            </div>

            <p className="text-white/80 font-medium text-xs sm:text-sm leading-relaxed text-center lg:text-left max-w-md">
              <strong className="text-white">Precast Engineering Group (PEG)</strong> &amp;{" "}
              <strong className="text-white">Precast Drawings</strong> are dedicated exclusively to advancing structural precast technology, engineering, PE stamping, and production drafting across the{" "}
              <span className="text-white font-bold underline decoration-[#006def] decoration-2">United States and Canada</span>.
            </p>
          </div>

          {/* RIGHT SIDE AREA (7 COLS): CONTACT INFO + OUR GROUP DEDICATED (HYPERLINKED) */}
          <div className="lg:col-span-7 flex flex-col gap-6">

            {/* 1ST LINE: ALL CONTACT INFO (4 COLS) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
              {/* GENERAL */}
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-[#006def]">
                  <Mail className="w-3.5 h-3.5 text-[#006def]" />
                  <span>GENERAL</span>
                </div>
                <a
                  href="mailto:ask@precastengineering.org"
                  className="text-xs font-bold text-white/80 hover:text-white transition-colors block truncate"
                >
                  ask@precastengineering.org
                </a>
              </div>

              {/* INQUIRIES */}
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-[#006def]">
                  <Mail className="w-3.5 h-3.5 text-[#006def]" />
                  <span>INQUIRIES</span>
                </div>
                <a
                  href="mailto:ask@precastengineering.org"
                  className="text-xs font-bold text-white/80 hover:text-white transition-colors block truncate"
                >
                  ask@precastengineering.org
                </a>
              </div>

              {/* PHONE */}
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-[#006def]">
                  <Phone className="w-3.5 h-3.5 text-[#006def]" />
                  <span>PHONE (USA)</span>
                </div>
                <a
                  href="tel:+16314521111"
                  className="text-xs font-bold text-white/80 hover:text-white transition-colors block"
                >
                  +1 (631) 452-1111
                </a>
              </div>

              {/* HEAD OFFICE */}
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-[#006def]">
                  <MapPin className="w-3.5 h-3.5 text-[#006def]" />
                  <span>USA HEAD OFFICE</span>
                </div>
                <p className="text-xs font-bold text-white/80 leading-tight">
                  105 Maxess Road, Melville, NY 11747
                </p>
              </div>
            </div>

            {/* 2ND LINE: OUR GROUP DEDICATED TO PRECAST WITH DEDICATED HYPERLINKS */}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#006def] rounded-full animate-pulse" />
                  <h4 className="text-xs font-mono font-black uppercase tracking-wider text-white">
                    Our Group Dedicated to Precast
                  </h4>
                  <span className="text-[10px] text-white/60 font-mono hidden sm:inline">
                    (Click logo for dedicated portal)
                  </span>
                </div>
              </div>

              {/* DEDICATED LOGO GRID WITH ACTIVE HYPERLINKS */}
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
                {dedicatedGroupLogos.map((entity) => (
                  <motion.a
                    key={entity.name}
                    href={entity.href}
                    target={entity.isExternal ? "_blank" : undefined}
                    rel={entity.isExternal ? "noopener noreferrer" : undefined}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="relative h-13 bg-white rounded-md flex items-center justify-center p-1.5 shadow-sm hover:shadow-md border border-white/30 hover:border-[#006def] transition-all duration-200 group cursor-pointer"
                    title={`${entity.name} — ${entity.tagline}`}
                  >
                    <Image
                      src={getAssetUrl(entity.src)}
                      alt={entity.alt}
                      fill
                      sizes="120px"
                      className={`object-contain p-1 group-hover:scale-105 transition-transform ${
                        entity.src.includes(".jpeg") ? "mix-blend-multiply" : ""
                      }`}
                    />
                  </motion.a>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* 3. WHERE WE OPERATE SECTION: EXCLUSIVELY USA & CANADA */}
        <div className="space-y-5 border-b border-white/10 pb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h4 className="text-white text-xs font-mono font-black uppercase tracking-[0.25em] flex items-center gap-2">
              <Globe2 className="w-4 h-4 text-[#006def]" />
              <span>WHERE WE OPERATE — UNITED STATES &amp; CANADA</span>
            </h4>
            <span className="text-[10px] font-mono text-[#006def] bg-white/5 border border-[#006def]/30 px-2.5 py-0.5 rounded uppercase font-bold self-start sm:self-auto">
              North America Exclusive Coverage
            </span>
          </div>

          <p className="text-white/80 font-medium text-xs sm:text-sm leading-relaxed max-w-4xl">
            Precast Engineering Group (PEG) and Precast Drawings provide certified engineering, PE calculations, and production shop drawings exclusively across the <strong className="text-white">United States and Canada</strong>. All systems, calculations, and drawings conform directly to individual State DOT mandates, ACI/PCI/ASTM/AASHTO specifications, and provincial Canadian CSA/CPCQA requirements.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {usaCanadaOperations.map((op) => (
              <div
                key={op.country}
                className="bg-white/5 border border-white/10 hover:border-[#006def]/40 rounded-lg p-4 sm:p-5 space-y-3 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#006def] rounded-full" />
                    <h5 className="text-sm font-black text-white uppercase tracking-wider font-mono">
                      {op.country}
                    </h5>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#006def] bg-[#002f7a] px-2 py-0.5 rounded border border-[#006def]/30">
                    {op.tag}
                  </span>
                </div>

                <p className="text-xs font-semibold text-white/90 leading-relaxed">
                  {op.coverage}
                </p>

                <p className="text-xs text-white/70 leading-relaxed">
                  {op.description}
                </p>

                <div className="pt-2 border-t border-white/10 space-y-1.5 text-[11px] font-mono">
                  <div className="text-white/60">
                    <span className="text-[#006def] font-bold">STANDARDS: </span>
                    <span className="text-white/90">{op.standards}</span>
                  </div>
                  <div className="text-white/60">
                    <span className="text-[#006def] font-bold">REGIONS: </span>
                    <span className="text-white/80">{op.keyRegions}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. SUPPORT LINKS & COMPLIANCE BADGES */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 border-b border-white/10 pb-4">
          {/* SUPPORT LINKS */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {supportItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-1.5 text-[11px] font-bold text-white/80 hover:text-white uppercase tracking-wider transition-colors"
                >
                  <Icon className="w-3.5 h-3.5 text-[#006def]" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* COMPLIANCE BADGES */}
          <div className="flex flex-wrap items-center gap-2">
            {complianceBadges.map((badge) => (
              <span
                key={badge}
                className="px-2.5 py-1 text-[10px] font-mono font-bold tracking-wider text-white/90 border border-[#006def]/40 uppercase bg-[#006def]/10 rounded-xs flex items-center gap-1"
              >
                <CheckCircle2 className="w-3 h-3 text-[#006def]" />
                <span>{badge}</span>
              </span>
            ))}
          </div>
        </div>

        {/* 5. BUILT TO INDUSTRY STANDARDS STRIP */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 border-b border-white/10 pb-4 text-white/80">
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#006def] shrink-0">
            BUILT TO STANDARDS:
          </span>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {builtToStandards.map((std) => (
              <span
                key={std}
                className="text-[10px] font-mono font-bold tracking-wider text-white hover:text-[#006def] transition-colors"
              >
                {std}
              </span>
            ))}
          </div>
        </div>

        {/* 6. BOTTOM LEGAL & SOCIAL COPYRIGHT BAR */}
        <div className="pt-0">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            {/* COPYRIGHT */}
            <div className="space-y-1">
              <p className="font-mono text-[9px] text-white/80 font-bold tracking-widest uppercase">
                &copy; 2026 PRECAST ENGINEERING GROUP (PEG) &bull; PRECAST DRAWINGS &bull; ALL RIGHTS RESERVED
              </p>
              <p className="text-white/70 font-medium text-xs max-w-xl leading-relaxed">
                The operating standard for the precast concrete industry across the United States and Canada &mdash; structural engineering, PE stamping, shop drawings, detailing, and quality compliance.
              </p>
            </div>

            {/* LEGAL & SOCIAL RIGHT STACK */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:gap-8">
              {/* LEGAL LINKS */}
              <div className="flex flex-wrap items-center gap-3.5 font-mono text-[9px] text-white/80 font-bold tracking-widest uppercase">
                {legalLinks.map((link) => (
                  <Link
                    key={link}
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    {link}
                  </Link>
                ))}
              </div>

              {/* SOCIAL LINKS */}
              <div className="flex items-center gap-3.5 font-mono text-[9px] font-bold text-white/80 uppercase">
                {socialLinksNew.map((soc) => (
                  <a
                    key={soc.name}
                    href={soc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#006def] transition-colors"
                  >
                    {soc.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
