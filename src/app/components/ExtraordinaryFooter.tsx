"use client";

import React from "react";
import { motion } from "framer-motion";
import { Plus, ArrowUpRight } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { BsTwitter } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { footerData } from "@/lib/data";
import { getAssetUrl } from "@/lib/utils";

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

export default function ExtraordinaryFooter() {
  return (
    <footer className="relative w-full bg-[#004aad] text-white border-t-2 border-slate-100 overflow-hidden select-none">

      <div className="w-full px-10 md:px-20 py-16">
        
        {/* 1. TOP BRANDING, GROUP NETWORK & SOCIALS */}
        <div className="w-full pb-10 border-b border-white/10 mb-12">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* 1. LEFT: LOGO + ABOUT */}
            <div className="lg:col-span-3 flex flex-col items-center lg:items-start space-y-6">
              <div className="bg-white p-4 rounded-md shadow-sm w-full max-w-[280px] flex items-center justify-center">
                <Image
                  src={getAssetUrl("/PEG.png")}
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
                      className="w-12 h-12 bg-white flex items-center justify-center shadow-sm transition-all duration-300 group hover:bg-[#1B79EE] cursor-pointer"
                    >
                      <Icon className="w-5 h-5 text-[#004aad] group-hover:text-white transition-colors duration-300" />
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
                <span className="w-2 h-2 bg-[#1B79EE]" />
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
            <span className="w-2 h-2 bg-[#1B79EE]" />
            <span>PRECAST ENGINEERING & DRAFTING CAPABILITIES DIRECTORY</span>
          </h4>
          <div className="flex flex-wrap gap-2 text-[10px] font-mono font-bold text-white/70 uppercase">
            {[
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
            ].map((kw, i) => (
              <span 
                key={i}
                className="px-2.5 py-1 bg-white/10 hover:bg-[#1B79EE] hover:text-white border border-white/15 transition-colors cursor-default"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>

        {/* 4. BOTTOM BAR: LEGAL & STATUS */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-mono text-[9px] text-white/80 font-bold tracking-widest flex items-center gap-8">
            <span>© 2026 PRECAST ENGINEERING GROUP (PEG) &bull; ALL RIGHTS RESERVED</span>
            <span className="hidden md:block w-[1px] h-3 bg-white/20" />
            <span className="hover:text-white cursor-pointer transition-colors uppercase">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors uppercase">Terms of Service</span>
          </div>
        </div>

      </div>

    </footer>
  );
}