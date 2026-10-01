"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Plus,
  Mail,
  Phone,
  MapPin,
  HelpCircle,
  Users,
  FileText,
  Code2,
  Activity,
  ShieldCheck,
  Headphones
} from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { footerData } from "@/lib/data";
import { getAssetUrl } from "@/lib/utils";

// ==========================================
// 1. ORIGINAL FOOTER DATA & ASSETS
// ==========================================
const logos = [
  { src: getAssetUrl("/assets/footer_logo/peg.jpeg"), alt: "Partner 01" },
  { src: getAssetUrl("/assets/footer_logo/precasteng.jpeg"), alt: "Partner 02" },
  { src: getAssetUrl("/assets/footer_logo/pxchange.jpeg"), alt: "Partner 03" },
  { src: getAssetUrl("/assets/footer_logo/totaltech.jpeg"), alt: "Partner 04" },
  { src: getAssetUrl("/assets/footer_logo/trench-unlimited.jpeg"), alt: "Partner 05" },
];

const socialLinks = [
  { icon: FaFacebook, href: "https://facebook.com", label: "Facebook" },
  { icon: BsTwitter, href: "https://x.com", label: "X Network" },
  { icon: FaYoutube, href: "https://youtube.com", label: "YouTube" },
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
];

const originalSeoKeywords = [
  "PRECAST ENGINEERS",
  "PRECAST CONCRETE ENGINEERS",
  "PRECAST ENGINEERING",
  "PRECAST CONCRETE ENGINEERING",
  "precast drawings",
  "precast concrete drawings",
  "precast drafting",
  "precast concrete drafting",
  "DESIGN PRECAST CONCRETE",
  "design precast",
  "PRECAST TESTING",
  "PRECAST CONCRETE TESTING",
  "PRECAST CERTIFICATIONS",
  "PRECAST CONCRETE CERTIFICATIONS",
  "drawings for precast",
  "drawings for precast concrete",
  "culvert drawings",
  "precast concrete culvert drawings",
  "d box drawings",
  "manhole drawings",
  "catch basin drawings",
  "trench drawings",
  "septic tank drawings",
  "grease trap drawings"
];

// ==========================================
// 2. NEW FOOTER DATA (FROM USER SCREENSHOT)
// ==========================================
const newFooterColumns = [
  {
    title: "PLATFORM",
    links: [
      { name: "CRM & Sales", href: "#" },
      { name: "Tender & Bid", href: "#" },
      { name: "Estimating & Takeoff", href: "#" },
      { name: "Quoting & Contracts", href: "#" },
      { name: "BIM & Modelling", href: "#" },
      { name: "Shop Drawings", href: "#" },
      { name: "Submittals & RFIs", href: "#" },
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
      { name: "Technical Library", href: "#" },
      { name: "Standards Index", href: "#" },
      { name: "Product Library", href: "#" },
      { name: "Benchmarks", href: "#" },
      { name: "Case Studies", href: "#" },
      { name: "ROI Calculator", href: "#" },
      { name: "Webinars", href: "#" },
      { name: "Academy", href: "#" },
    ],
  },
  {
    title: "SERVICES",
    links: [
      { name: "Implementation", href: "#" },
      { name: "Data Migration", href: "#" },
      { name: "Machine Integration", href: "#" },
      { name: "BIM & Detailing", href: "#" },
      { name: "Custom Development", href: "#" },
      { name: "Managed Services", href: "#" },
      { name: "Training & Enablement", href: "#" },
      { name: "Plant Audit", href: "#" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { name: "About", href: "#" },
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

const regionalOperations = [
  {
    region: "Americas",
    countries: ["United States", "Canada", "Mexico", "Brazil", "Chile", "Colombia", "Peru", "Argentina"],
  },
  {
    region: "Europe",
    countries: [
      "United Kingdom", "Germany", "France", "Netherlands", "Belgium", "Spain", "Italy", "Poland",
      "Sweden", "Norway", "Finland", "Denmark", "Ireland", "Austria", "Switzerland", "Portugal"
    ],
  },
  {
    region: "Middle East & Africa",
    countries: [
      "United Arab Emirates", "Saudi Arabia", "Qatar", "Kuwait", "Oman", "Bahrain",
      "Egypt", "South Africa", "Morocco", "Kenya"
    ],
  },
  {
    region: "Asia Pacific",
    countries: [
      "Australia", "New Zealand", "Singapore", "Malaysia", "India", "Indonesia",
      "Philippines", "Vietnam", "Thailand", "Japan", "South Korea", "Hong Kong"
    ],
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
  "SOC 2 TYPE II",
  "ISO 27001",
  "GDPR READY",
  "WCAG 2.2 AA",
];

const builtToStandards = [
  "PCAV", "PCMA", "PPA", "NEPCA", "NJPCA", "PCANY", "NPCA", "PCI", "ACI", "ASTM", "AASHTO", "ISO 9001"
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

export default function ExtraordinaryFooter() {
  return (
    <footer className="relative w-full bg-[#023380] text-white border-t-2 border-slate-100 overflow-hidden select-none">

      {/* ========================================================================= */}
      {/* SECTION A: EXACT ORIGINAL PEG FOOTER                                      */}
      {/* ========================================================================= */}
      <div className="w-full px-10 md:px-20 py-16">

        {/* 1. TOP BRANDING, GROUP NETWORK & SOCIALS */}
        <div className="w-full pb-10 border-b border-white/10 mb-12">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* 1. LEFT: LOGO + ABOUT */}
            <div className="lg:col-span-3 flex flex-col items-center lg:items-start space-y-6">
              <div className="bg-white p-4 rounded-md shadow-sm w-full max-w-[280px] flex items-center justify-center">
                <Image
                  src={getAssetUrl("/peg_logo.png")}
                  alt="Precast Engineering Group"
                  width={280}
                  height={100}
                  className="object-contain"
                  priority
                />
              </div>

              <p className="text-white/80 font-medium text-sm leading-relaxed text-center lg:text-left max-w-xs">
                <strong className="text-white">Precast Engineering Group (PEG)</strong> is the global authority dedicated to advancing structural precast technology, engineering, and manufacturing.
              </p>
            </div>

            {/* 2. MIDDLE: GROUP MARQUEE */}
            <div className="lg:col-span-6 flex flex-col items-center lg:border-x border-white/10 px-0 lg:px-10">
              <h3 className="text-xl font-black text-white uppercase tracking-tighter mb-6 text-center">
                Our Group Dedicated to Precast
              </h3>

              <div className="relative w-full flex items-center justify-center">
                <div className="flex flex-wrap items-center justify-center gap-4">
                  {logos.map((logo, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.08 }}
                      className="relative w-20 h-12 bg-white rounded-xl flex items-center justify-center p-1 shadow-sm cursor-pointer transition-transform duration-300"
                    >
                      <Image
                        src={getAssetUrl(logo.src)}
                        alt={logo.alt}
                        fill
                        sizes="80px"
                        className="object-contain p-1"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. RIGHT: SOCIAL ICONS */}
            <div className="lg:col-span-3 flex items-center justify-center lg:justify-end">
              <div className="flex flex-row gap-3">
                {socialLinks.map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      whileHover={{ y: -4 }}
                      className="w-12 h-12 bg-white flex items-center justify-center shadow-sm transition-all duration-300 group hover:bg-[#0271f1] cursor-pointer"
                    >
                      <Icon className="w-5 h-5 text-[#023380] group-hover:text-white transition-colors duration-300" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

        {/* 2. FOOTER LINK DIRECTORY (6-COLUMN GRID) */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 border-b border-white/10 pb-12 mb-8">
          {footerData.map((section, idx) => (
            <div key={idx} className="flex flex-col gap-6">
              <h3 className="text-white text-[11px] font-black uppercase tracking-[0.3em] flex items-center gap-2">
                <span className="w-2 h-2 bg-[#0271f1]" />
                {section.title}
              </h3>

              <ul className="flex flex-col gap-3">
                {section.links.map((link, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ x: 5 }}
                    className="group flex items-center gap-2 cursor-pointer"
                  >
                    <Plus className="w-3 h-3 text-white opacity-40 group-hover:opacity-100 group-hover:rotate-90 transition-all" />
                    <span className="text-[11px] font-bold text-white/80 uppercase tracking-wider group-hover:text-white transition-colors">
                      {link}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 3. SEO CAPABILITIES DIRECTORY */}
        <div className="border-b border-white/10 pb-8 mb-8">
          <h4 className="text-white text-[10px] font-mono font-black uppercase tracking-[0.25em] mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#0271f1]" />
            <span>PRECAST ENGINEERING & DRAFTING CAPABILITIES DIRECTORY</span>
          </h4>
          <div className="flex flex-wrap gap-2 text-[10px] font-mono font-bold text-white/70 uppercase">
            {originalSeoKeywords.map((kw, i) => (
              <span
                key={i}
                className="px-2.5 py-1 bg-white/10 hover:bg-[#0271f1] hover:text-white border border-white/15 transition-colors cursor-default"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 5PX SOLID WHITE SEPARATOR LINE BETWEEN BOTH FOOTERS                       */}
      {/* ========================================================================= */}
      <div className="w-full h-[5px] bg-white shadow-xs" />

      {/* ========================================================================= */}
      {/* SECTION B: NEW PRECASTTECH OPERATING SYSTEM FOOTER (FROM SCREENSHOT)       */}
      {/* ========================================================================= */}
      <div className="w-full bg-[#023380] px-6 sm:px-10 md:px-14 lg:px-20 py-12 space-y-9">

        {/* 1. SEVEN DIRECTORY COLUMNS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 border-b border-white/10 pb-9">
          {newFooterColumns.map((col) => (
            <div key={col.title} className="space-y-4">
              <h3 className="text-white text-[11px] font-black uppercase tracking-[0.3em] flex items-center gap-2">
                <span className="w-2 h-2 bg-[#0271f1]" />
                <span>{col.title}</span>
              </h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[11px] mt-3 font-bold text-white/80 hover:text-white uppercase tracking-wider transition-colors duration-150 block leading-tight"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 2. BRANDING & CONTACT DETAILS STRIP */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-white/10 pb-3">

          {/* LEFT: PRECAST ENGINEERING GROUP LOGO & MISSION STATEMENT */}
          <div className="lg:col-span-4 space-y-3 pr-0 lg:pr-6">
            <Link href="/" className="inline-block bg-white p-2.5 shadow-sm">
              <Image
                src={getAssetUrl("/peg_logo.png")}
                alt="Precast Engineering Group (PEG)"
                width={200}
                height={70}
                className="h-8 md:h-10 w-auto object-contain"
                priority
              />
            </Link>
            <p className="text-white/80 font-medium text-sm leading-relaxed max-w-sm">
              The digital operating system for the precast concrete industry — estimating, engineering, production, quality, yard, logistics and erection on one platform.
            </p>
          </div>

          {/* RIGHT: 4 CONTACT INFO BOXES */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 pt-1">

            {/* GENERAL */}
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-[#0271f1]">
                <Mail className="w-3 h-3 text-[#0271f1]" />
                <span>GENERAL</span>
              </div>
              <a
                href="mailto:contact@precastengineering.org"
                className="text-xs font-bold text-white/80 hover:text-white transition-colors block truncate"
              >
                contact@precastengineering.org
              </a>
            </div>

            {/* SALES */}
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-[#0271f1]">
                <Mail className="w-3 h-3 text-[#0271f1]" />
                <span>SALES</span>
              </div>
              <a
                href="mailto:sales@precastengineering.org"
                className="text-xs font-bold text-white/80 hover:text-white transition-colors block truncate"
              >
                sales@precastengineering.org
              </a>
            </div>

            {/* PHONE */}
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-[#0271f1]">
                <Phone className="w-3 h-3 text-[#0271f1]" />
                <span>PHONE</span>
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
              <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-[#0271f1]">
                <MapPin className="w-3 h-3 text-[#0271f1]" />
                <span>HEAD OFFICE</span>
              </div>
              <p className="text-xs font-bold text-white/80 leading-tight">
                105 Maxess Road, Melville, NY 11747
              </p>
            </div>

          </div>

        </div>

        {/* 3. WHERE WE OPERATE SECTION */}
        <div className="space-y-4 border-b border-white/10 pb-4">
          <div className="space-y-1">
            <h4 className="text-white text-[10px] font-mono font-black uppercase tracking-[0.25em] flex items-center gap-2">
              <span className="w-2 h-2 bg-[#0271f1]" />
              <span>WHERE WE OPERATE</span>
            </h4>
            <p className="text-white/80 font-medium text-sm leading-relaxed max-w-4xl">
              Unit systems, standards and compliance packs ship per region — imperial and ACI/PCI in North America, metric and Eurocode across Europe, and the local authority requirements everywhere else.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-1">
            {regionalOperations.map((reg) => (
              <div key={reg.region} className="space-y-1.5">
                <h5 className="text-xs font-bold text-white uppercase tracking-wider">
                  {reg.region}
                </h5>
                <p className="text-xs font-medium text-white/70 leading-relaxed">
                  {reg.countries.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. SUPPORT LINKS & COMPLIANCE BADGES */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 border-b border-white/10">

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
                  <Icon className="w-3.5 h-3.5 text-[#0271f1]" />
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
                className="px-2.5 py-1 text-[10px] font-mono font-bold tracking-wider text-white/80 border border-white/20 uppercase bg-white/5"
              >
                {badge}
              </span>
            ))}
          </div>

        </div>

        {/* 5. BUILT TO INDUSTRY STANDARDS STRIP */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 border-b border-white/10 pb-2 text-white/80">
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#0271f1] shrink-0">
            BUILT TO
          </span>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {builtToStandards.map((std) => (
              <span
                key={std}
                className="text-[10px] font-mono font-bold tracking-wider text-white hover:text-[#0271f1] transition-colors"
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
                © 2026 PRECAST ENGINEERING GROUP (PEG) &bull; ALL RIGHTS RESERVED
              </p>
              <p className="text-white/70 font-medium text-xs max-w-xl leading-relaxed">
                The digital operating system for the precast concrete industry — estimating, engineering, production, quality, yard, logistics and erection on one platform.
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
                    className="hover:text-[#0271f1] transition-colors"
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