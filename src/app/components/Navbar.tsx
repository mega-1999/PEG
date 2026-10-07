"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown, Search, Menu, X, FileText,
  ClipboardCheck, Wrench, Plus, Minus, Mail, Phone
} from 'lucide-react';
import { getAssetUrl, cn } from '@/lib/utils';

// ==========================================
// VECTOR FLAG ICONS
// ==========================================
export const USFlag = ({ className = "w-5 h-3.5" }: { className?: string }) => (
  <svg className={cn("rounded-[2px] shadow-xs shrink-0 inline-block overflow-hidden", className)} viewBox="0 0 741 390" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="741" height="390" fill="#B22234"/>
    <path d="M0 30h741M0 90h741M0 150h741M0 210h741M0 270h741M0 330h741" stroke="#FFFFFF" strokeWidth="30"/>
    <rect width="296.4" height="210" fill="#3C3B6E"/>
    <g fill="#FFFFFF">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((row) => {
        const isEven = row % 2 === 0;
        const count = isEven ? 6 : 5;
        const xOffset = isEven ? 24.7 : 49.4;
        const y = 17.5 + row * 21;
        return Array.from({ length: count }).map((_, col) => {
          const x = xOffset + col * 49.4;
          return (
            <polygon
              key={`us-star-${row}-${col}`}
              points={`${x},${y - 6} ${x + 2},${y - 2} ${x + 6},${y - 2} ${x + 3},${y + 1} ${x + 4.5},${y + 5} ${x},${y + 2.5} ${x - 4.5},${y + 5} ${x - 3},${y + 1} ${x - 6},${y - 2} ${x - 2},${y - 2}`}
            />
          );
        });
      })}
    </g>
  </svg>
);

export const CAFlag = ({ className = "w-5 h-3.5" }: { className?: string }) => (
  <svg className={cn("rounded-[2px] shadow-xs shrink-0 inline-block overflow-hidden", className)} viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="600" fill="#D80027"/>
    <rect x="300" width="600" height="600" fill="#FFFFFF"/>
    <path
      fill="#D80027"
      d="M600 90l17.7 75.8 45.4-23.7-18.7 54.8 62.4 20.8-37.4 46.8 54.8 31.2-56.9 26.6 9.4 67.2-61.9-28.1-9.4 148.6h-10.8l-9.4-148.6-61.9 28.1 9.4-67.2-56.9-26.6 54.8-31.2-37.4-46.8 62.4-20.8-18.7-54.8 45.4 23.7z"
    />
  </svg>
);

export const LATAMFlag = ({ className = "w-5 h-3.5" }: { className?: string }) => (
  <svg className={cn("rounded-[2px] shadow-xs shrink-0 inline-block overflow-hidden", className)} viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="latamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00529B"/>
        <stop offset="100%" stopColor="#007A3D"/>
      </linearGradient>
    </defs>
    <rect width="600" height="400" fill="url(#latamGrad)"/>
    {/* Yellow Diamond / Emblem Base */}
    <polygon points="300,40 540,200 300,360 60,200" fill="#FFCC00" />
    <circle cx="300" cy="200" r="95" fill="#002F7A" />
    {/* Stylized Southern Cross & Americas Meridian Arc */}
    <path d="M225,200 Q300,140 375,200 Q300,260 225,200 Z" fill="#FFFFFF" fillOpacity="0.25" />
    <circle cx="300" cy="155" r="7" fill="#FFFFFF" />
    <circle cx="300" cy="245" r="7" fill="#FFFFFF" />
    <circle cx="260" cy="200" r="7" fill="#FFFFFF" />
    <circle cx="340" cy="200" r="7" fill="#FFFFFF" />
    <circle cx="320" cy="225" r="5" fill="#FFFFFF" />
  </svg>
);

export const EUFlag = ({ className = "w-5 h-3.5" }: { className?: string }) => (
  <svg className={cn("rounded-[2px] shadow-xs shrink-0 inline-block overflow-hidden", className)} viewBox="0 0 810 540" xmlns="http://www.w3.org/2000/svg">
    <rect width="810" height="540" fill="#003399"/>
    <g fill="#FFCC00" transform="translate(405,270)">
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const r = 160;
        const x = r * Math.sin(rad);
        const y = -r * Math.cos(rad);
        return (
          <polygon
            key={`eu-star-${i}`}
            transform={`translate(${x},${y}) scale(15)`}
            points="0,-1 0.588,0.809 -0.951,-0.309 0.951,-0.309 -0.588,0.809"
          />
        );
      })}
    </g>
  </svg>
);

export const CARIBFlag = ({ className = "w-5 h-3.5" }: { className?: string }) => (
  <svg className={cn("rounded-[2px] shadow-xs shrink-0 inline-block overflow-hidden", className)} viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
    {/* CARICOM Dual Blue Stripe Flag */}
    <rect width="600" height="200" fill="#002868"/>
    <rect y="200" width="600" height="200" fill="#00A3E0"/>
    {/* Yellow Sun & Twin-C Emblem */}
    <circle cx="300" cy="200" r="90" fill="#FFD100"/>
    <path d="M295 155 A45 45 0 1 0 295 245" fill="none" stroke="#002868" strokeWidth="16" strokeLinecap="round"/>
    <path d="M305 155 A45 45 0 1 0 305 245" fill="none" stroke="#00A3E0" strokeWidth="12" strokeLinecap="round"/>
  </svg>
);

export const CountryFlag = ({ code, className = "w-6.5 h-4.5 sm:w-7 sm:h-5" }: { code: string; className?: string }) => {
  const renderFlag = () => {
    switch (code) {
      case "US":
        return <USFlag className="w-full h-full object-cover rounded-[2px]" />;
      case "CA":
        return <CAFlag className="w-full h-full object-cover rounded-[2px]" />;
      case "LATAM":
        return <LATAMFlag className="w-full h-full object-cover rounded-[2px]" />;
      case "EU":
        return <EUFlag className="w-full h-full object-cover rounded-[2px]" />;
      case "CARIB":
        return <CARIBFlag className="w-full h-full object-cover rounded-[2px]" />;
      default:
        return <USFlag className="w-full h-full object-cover rounded-[2px]" />;
    }
  };

  return (
    <span className={cn("inline-flex items-center justify-center bg-white p-[1.5px] sm:p-[2px] rounded-[3.5px] shadow-sm border border-white/70 shrink-0 overflow-hidden", className)}>
      {renderFlag()}
    </span>
  );
};

// ==========================================
// NAVIGATION DATA
// ==========================================
const navData = [
  {
    title: 'ENGINEERING & CAD',
    links: [
      { name: 'CAD Drawings', href: '/#services' },
      { name: 'Structural Submittals', href: '/#services' },
      { name: 'Engineering Services', href: '/#services' },
      { name: 'Technical Consultation', href: '/#contact' }
    ]
  },
  {
    title: 'SPECS & COMPLIANCE',
    megaMenu: [
      {
        heading: 'SPECIFICATIONS',
        icon: FileText,
        links: [
          { name: 'Master Specifications', href: '/#standards' },
          { name: 'SpecWizard Matrix', href: '/#standards' },
          { name: 'Outline & Short Form Specs', href: '/#standards' },
          { name: 'State DOT Standards Matrix', href: '/#standards' },
        ]
      },
      {
        heading: 'COMPLIANCE & STANDARDS',
        icon: ClipboardCheck,
        links: [
          { name: 'AASHTO & ACI Standards', href: '/#standards' },
          { name: 'Compliance Certifications', href: '/#standards' },
          { name: 'Technical Bulletins & Blogs', href: '/blog' },
        ]
      }
    ],
    featured: {
      title: 'STATE DOT STANDARDS DATABANK',
      description: 'Instantly find and access up-to-date compliance requirements for your state.',
      buttonText: 'START COMPLIANCE SEARCH',
      icon: Wrench,
      href: '/#standards'
    }
  },
  {
    title: 'PRODUCTS & SOLUTIONS',
    links: [
      { name: 'Product Categories', href: '/#products' },
      { name: 'Culvert & Trench Systems', href: '/#products' },
      { name: 'State DOT Drawings', href: '/#standards' },
      { name: 'Engineering Applications', href: '/#products' },
    ]
  },
  {
    title: 'RESOURCES & KNOWLEDGE',
    links: [
      { name: 'Precast Engineering Blog', href: '/blog' },
      { name: 'Precast Knowledge Vault', href: '/#technical-vault' },
      { name: 'Technical Media Library', href: '/#resources' },
      { name: 'Industry Shows & Expos', href: '/#shows' },
    ]
  },
  {
    title: 'COMPANY',
    links: [
      { name: 'About PEG', href: '/#about' },
      { name: 'Precast Articles', href: '/blog' },
      { name: 'Global Locations', href: '/#locations' },
      { name: 'Initiate Contact', href: '/#contact' }
    ]
  }
];

const countries = [
  { code: "US", name: "United States", spec: "AASHTO / ACI Standards" },
  { code: "CA", name: "Canada", spec: "CSA / ASTM Standards" },
  { code: "LATAM", name: "Latin America", spec: "ACI / Pan-American Codes" },
  { code: "EU", name: "Europe (EU)", spec: "Eurocode 2 / EN 13369" },
  { code: "CARIB", name: "Caribbean", spec: "CUBiC / ASTM Standards" },
];

export const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mobileExpandedNode, setMobileExpandedNode] = useState<string | null>(null);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isCountryOpen, setIsCountryOpen] = useState(false);

  const navRef = useRef<HTMLElement>(null);

  const toggleMenu = (title: string) => {
    if (activeMenu === title) {
      setActiveMenu(null);
    } else {
      setActiveMenu(title);
    }
  };

  // Close menus on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
        setIsCountryOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock body scroll when mobile/tablet drawer is open
  useEffect(() => {
    if (isMobileOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isMobileOpen]);

  // Handle escape key to close drawer/menus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileOpen(false);
        setActiveMenu(null);
        setIsCountryOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header ref={navRef} className="fixed top-0 left-0 w-full z-[100] flex flex-col shadow-sm select-none">

      {/* 1. TOP UTILITY BAR (Mobile, Tablet & Desktop Responsive) */}
      <div className="bg-[#002f7a] text-white h-9 sm:h-10 w-full border-b border-white/10">
        <div className="max-w-[1600px] mx-auto px-3 sm:px-6 md:px-10 lg:px-16 xl:px-20 h-full flex justify-between items-center text-[10px] sm:text-[11px] font-bold tracking-wider">
          
          {/* LEFT: EMAIL & PHONE CONTACT */}
          <div className="h-full flex items-center gap-2 sm:gap-4 shrink-0">
            <a
              href="mailto:contact@precastengineering.org"
              className="flex items-center gap-1.5 hover:text-blue-200 transition-colors py-1"
              title="Email Precast Engineering Group"
            >
              <Mail className="w-3.5 h-3.5 text-white shrink-0" />
              <span className="font-mono text-[10px] sm:text-[10.5px] hidden sm:inline">contact@precastengineering.org</span>
              <span className="font-mono text-[10px] sm:hidden inline">contact@precast...</span>
            </a>
            
            <span className="text-white/30 hidden xs:inline">&bull;</span>
            
            <a
              href="tel:+16314521111"
              className="hidden xs:flex items-center gap-1.5 hover:text-blue-200 transition-colors py-1"
              title="Call Precast Engineering Group"
            >
              <Phone className="w-3.5 h-3.5 text-white shrink-0" />
              <span className="font-mono text-[10px] sm:text-[10.5px]">+1 (631) 452-1111</span>
            </a>
          </div>

          {/* RIGHT: PORTALS, SEARCH & REGION SELECTOR */}
          <div className="h-full flex justify-end items-center gap-2 sm:gap-4 md:gap-5 shrink-0">

            {/* Portals Link */}
            <Link href="/admin" className="hover:text-blue-200 transition-colors">
              <span className="flex items-center gap-1 uppercase text-[10px] sm:text-[11px] font-bold">
                PORTALS <ChevronDown className="w-3 h-3 text-white/80" />
              </span>
            </Link>

            {/* Integrated Search Bar (Desktop & Tablet md+) */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const term = (e.currentTarget.elements.namedItem("search") as HTMLInputElement)?.value;
                if (term) {
                  window.location.href = `/blog?search=${encodeURIComponent(term)}`;
                }
              }}
              className="hidden md:flex items-center bg-white/10 rounded px-2.5 sm:px-3 py-1 w-36 lg:w-52 xl:w-60 border border-white/20 focus-within:border-[#006def] transition-colors"
            >
              <Search className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white/70 mr-1.5 shrink-0" />
              <input
                type="text"
                name="search"
                placeholder="Search drawings, specs..."
                className="bg-transparent border-0 text-[10.5px] sm:text-[11px] w-full text-white placeholder:text-white/60 focus:outline-none focus:ring-0"
              />
            </form>

            {/* Country / Region Selector Menu */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsCountryOpen(!isCountryOpen)}
                className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-2.5 py-1 bg-white/10 hover:bg-white/20 border border-white/20 rounded transition-colors text-[10px] sm:text-[11px] font-bold tracking-wider cursor-pointer"
                aria-label="Select Region"
              >
                <CountryFlag code={selectedCountry.code} className="w-6 h-4 sm:w-7 sm:h-4.5" />
                <span className="hidden lg:inline uppercase">{selectedCountry.name}</span>
                <span className="lg:hidden uppercase">{selectedCountry.code}</span>
                <ChevronDown className={`w-3 h-3 text-white/80 transition-transform duration-200 ${isCountryOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isCountryOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-1.5 w-64 bg-white text-[#002f7a] border border-[#002f7a]/15 shadow-2xl rounded-md overflow-hidden z-50 py-1"
                  >
                    <div className="px-3.5 py-1.5 border-b border-[#002f7a]/10 text-[9.5px] font-mono font-black uppercase text-[#006def] tracking-widest bg-blue-50/50">
                      Select Region & Standards
                    </div>
                    {countries.map((c) => {
                      const isSelected = selectedCountry.code === c.code;
                      return (
                        <button
                          key={c.code}
                          type="button"
                          onClick={() => {
                            setSelectedCountry(c);
                            setIsCountryOpen(false);
                          }}
                          className={`w-full px-3.5 py-2.5 text-left flex items-center justify-between hover:bg-blue-50/80 transition-colors cursor-pointer text-xs ${
                            isSelected ? "bg-blue-50/60 font-black text-[#006def]" : "font-bold text-[#002f7a]"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <CountryFlag code={c.code} className="w-8 h-5.5 shadow-sm" />
                            <div className="flex flex-col">
                              <span className="uppercase text-[11px] leading-tight font-bold">{c.name}</span>
                              <span className="text-[9px] font-mono text-[#006def] font-semibold">{c.spec}</span>
                            </div>
                          </div>
                          {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#006def]" />}
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION BAR */}
      <div className="bg-white border-b border-[#002f7a]/10 h-16 sm:h-20 md:h-24 xl:h-26 w-full relative">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 w-full h-full flex justify-between items-center relative">

          {/* BRAND LOGO & TAGLINE */}
          <Link href="/" onClick={() => setActiveMenu(null)} className="shrink-0 flex flex-col justify-center items-start group">
            <Image
              src={getAssetUrl("/peg_logo.png")}
              alt="PEG Precast Engineering Group"
              width={260}
              height={80}
              className="h-10 sm:h-14 md:h-18 xl:h-20 w-auto object-contain transition-all"
              style={{ width: "auto" }}
              priority
            />
            <span className="text-[8px] xs:text-[9.5px] sm:text-[10px] md:text-[11.5px] font-bold tracking-wider text-[#002f7a] uppercase group-hover:text-[#006def] transition-colors leading-tight mt-0.5 font-mono">
              Advanced Precast Engineering...
            </span>
          </Link>

          {/* DESKTOP NAVIGATION LINKS (xl breakpoint - 1280px+) */}
          <nav className="hidden xl:flex items-center h-full flex-1 justify-center gap-1">
            {navData.map((item) => {
              const isOpen = activeMenu === item.title;
              const hasMegaMenu = !!item.megaMenu;

              return (
                <div
                  key={item.title}
                  className="h-full flex items-center relative"
                >
                  <button
                    type="button"
                    onClick={() => toggleMenu(item.title)}
                    className={`h-full px-3 2xl:px-4 whitespace-nowrap flex items-center gap-1 text-sm font-black uppercase tracking-tight transition-all duration-200 border-t-4 cursor-pointer
                      ${isOpen ? 'text-[#002f7a] border-[#002f7a] bg-[#002f7a]/5' : 'text-[#006def] border-transparent hover:text-[#002f7a] hover:border-[#002f7a]'}
                    `}
                  >
                    {item.title}
                    <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#002f7a]' : 'text-[#006def]'}`} />
                  </button>

                  {/* DROP DOWN / MEGA MENU RENDERER */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        transition={{ duration: 0.2 }}
                        className={`absolute top-full left-1/2 -translate-x-1/2 bg-white border border-[#002f7a]/10 shadow-[0_20px_50px_rgba(0, 47, 122,0.1)] rounded-b-md overflow-hidden z-50
                          ${hasMegaMenu ? 'w-[800px]' : 'w-[280px]'}
                        `}
                      >
                        {/* Standard Link Dropdown */}
                        {!hasMegaMenu && item.links && (
                          <ul className="flex flex-col py-2 border-t-2 border-[#006def]">
                            {item.links.map((link) => (
                              <li key={link.name}>
                                <Link
                                  href={link.href}
                                  onClick={() => setActiveMenu(null)}
                                  className="block px-6 py-3 text-xs font-bold text-[#006def] hover:bg-[#002f7a]/5 hover:text-[#002f7a] transition-colors"
                                >
                                  {link.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}

                        {/* Mega Menu */}
                        {hasMegaMenu && (
                          <div className="flex h-[320px] border-t-2 border-[#006def]">
                            {item.megaMenu?.map((col, idx) => {
                              const Icon = col.icon;
                              return (
                                <div key={idx} className="flex-1 p-8 border-r border-[#002f7a]/5">
                                  <div className="flex items-center gap-2 text-[#002f7a] mb-6">
                                    <Icon className="w-5 h-5 text-[#006def]" />
                                    <h4 className="font-black text-xs uppercase tracking-widest">{col.heading}</h4>
                                  </div>
                                  <ul className="space-y-4">
                                    {col.links.map(link => (
                                      <li key={link.name}>
                                        <Link
                                          href={link.href}
                                          onClick={() => setActiveMenu(null)}
                                          className="text-xs font-bold text-[#006def] hover:text-[#002f7a] transition-colors"
                                        >
                                          {link.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )
                            })}

                            {/* Featured Tool Box */}
                            <div className="w-[280px] p-8 bg-[#002f7a]/5 flex flex-col">
                              <div className="flex items-center gap-2 text-[#002f7a] mb-6">
                                <Wrench className="w-5 h-5 text-[#006def]" />
                                <h4 className="font-black text-xs uppercase tracking-widest">Featured Tool</h4>
                              </div>

                              <div className="w-full h-24 bg-white border border-[#006def]/20 rounded mb-4 flex items-center justify-center text-[#006def]">
                                [Illustration]
                              </div>

                              <h5 className="font-black text-xs text-[#002f7a] mb-2 leading-tight uppercase">{item.featured?.title}</h5>
                              <p className="text-xs text-[#002f7a] font-semibold mb-6 leading-relaxed">{item.featured?.description}</p>

                              <Link
                                href={item.featured?.href || "#"}
                                onClick={() => setActiveMenu(null)}
                                className="mt-auto block text-center w-full border-2 border-[#002f7a] text-[#002f7a] py-2 text-[10px] font-black uppercase tracking-wider hover:bg-[#002f7a] hover:text-white transition-colors"
                              >
                                {item.featured?.buttonText}
                              </Link>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            {/* BLOG LINK DIRECTLY IN MAIN NAVBAR */}
            <Link
              href="/blog"
              onClick={() => setActiveMenu(null)}
              className="h-full px-3 2xl:px-4 whitespace-nowrap flex items-center text-sm font-black uppercase tracking-tight text-[#006def] border-t-4 border-transparent hover:text-[#002f7a] hover:border-[#002f7a] transition-all duration-200"
            >
              BLOG
            </Link>
          </nav>

          {/* DESKTOP CTA BUTTON (xl breakpoint - 1280px+) */}
          <div className="hidden xl:flex shrink-0 pl-4 xl:pl-8 border-l border-[#002f7a]/10 h-10 items-center">
            <Link
              href="#technical-vault"
              className="bg-[#002f7a] whitespace-nowrap hover:bg-[#006def] text-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded transition-colors shadow-sm hover:shadow"
            >
              Access Vault
            </Link>
          </div>

          {/* TABLET & MOBILE RIGHT ACTIONS (<1280px) */}
          <div className="xl:hidden flex items-center gap-2.5 sm:gap-3">
            {/* Quick Vault button on Tablet (sm to lg screens) */}
            <Link
              href="#technical-vault"
              className="hidden sm:inline-flex items-center bg-[#002f7a]/10 hover:bg-[#002f7a] text-[#002f7a] hover:text-white px-3.5 py-2 text-[11px] font-black uppercase tracking-wider rounded transition-all border border-[#002f7a]/20"
            >
              Vault
            </Link>

            {/* Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="bg-[#002f7a] hover:bg-[#006def] transition-colors p-2.5 sm:p-3 rounded-md text-white cursor-pointer shadow-sm flex items-center justify-center"
              aria-label={isMobileOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {isMobileOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* 3. MOBILE & TABLET SLIDE-OVER DRAWER WITH BACKDROP */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Dark Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs z-[190] cursor-pointer"
              aria-hidden="true"
            />

            {/* Slide-over Drawer Panel */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
              className="fixed top-0 right-0 w-[88vw] max-w-[360px] sm:max-w-[420px] md:max-w-[460px] h-full bg-white shadow-[-20px_0_50px_rgba(0,47,122,0.15)] z-[200] flex flex-col justify-between overflow-hidden"
            >
              {/* Drawer Top Header */}
              <div className="flex justify-between items-center p-4 sm:p-5 border-b border-[#002f7a]/10 bg-slate-50/50">
                <div className="flex flex-col">
                  <Image
                    src={getAssetUrl("/peg_logo.png")}
                    alt="PEG"
                    width={160}
                    height={44}
                    className="h-8 sm:h-9 w-auto object-contain"
                    style={{ width: "auto" }}
                  />
                  <span className="text-[9px] sm:text-[10px] font-bold tracking-wider text-[#002f7a] uppercase font-mono leading-none mt-1">
                    Advanced Precast Engineering..
                  </span>
                </div>
                
                <button
                  type="button"
                  onClick={() => setIsMobileOpen(false)}
                  className="p-2 rounded-full hover:bg-[#002f7a]/10 text-[#002f7a] transition-colors cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>

              {/* Mobile Drawer Search Box */}
              <div className="p-3 sm:p-4 bg-slate-100/70 border-b border-[#002f7a]/10">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const term = (e.currentTarget.elements.namedItem("mobileSearch") as HTMLInputElement)?.value;
                    if (term) {
                      setIsMobileOpen(false);
                      window.location.href = `/blog?search=${encodeURIComponent(term)}`;
                    }
                  }}
                  className="flex items-center bg-white rounded border border-[#002f7a]/20 px-3 py-2 shadow-inner focus-within:border-[#006def]"
                >
                  <Search className="w-4 h-4 text-[#006def] mr-2 shrink-0" />
                  <input
                    type="text"
                    name="mobileSearch"
                    placeholder="Search drawings, specs, DOTs..."
                    className="bg-transparent border-0 text-xs w-full text-[#002f7a] placeholder:text-slate-400 focus:outline-none focus:ring-0 font-medium"
                  />
                </form>
              </div>

              {/* Drawer Navigation List */}
              <div className="flex-1 overflow-y-auto divide-y divide-[#002f7a]/5">
                {navData.map((item) => {
                  const isExpanded = mobileExpandedNode === item.title;

                  return (
                    <div key={item.title} className="bg-white">
                      <button
                        type="button"
                        onClick={() => setMobileExpandedNode(isExpanded ? null : item.title)}
                        className={`w-full flex justify-between items-center px-5 sm:px-6 py-3.5 sm:py-4 text-xs font-black uppercase tracking-wider transition-colors cursor-pointer
                          ${isExpanded ? 'bg-[#002f7a]/5 text-[#002f7a]' : 'text-[#006def] hover:text-[#002f7a] hover:bg-slate-50'}
                        `}
                      >
                        <span>{item.title}</span>
                        {isExpanded ? (
                          <Minus className="w-4 h-4 text-[#002f7a] shrink-0" />
                        ) : (
                          <Plus className="w-4 h-4 text-[#006def] shrink-0" />
                        )}
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden bg-[#002f7a]/5 border-t border-[#006def]/10"
                          >
                            {/* Standard Sublinks */}
                            {item.links && (
                              <ul className="px-5 sm:px-6 py-2.5 space-y-2.5">
                                {item.links.map((link, i) => (
                                  <li key={i}>
                                    <Link
                                      href={link.href}
                                      onClick={() => setIsMobileOpen(false)}
                                      className="text-xs sm:text-sm font-bold text-[#006def] pl-3 border-l-2 border-[#006def] hover:border-[#002f7a] hover:text-[#002f7a] block py-1 transition-all"
                                    >
                                      {link.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}

                            {/* Mega Menu Layout for Mobile */}
                            {item.megaMenu && (
                              <div className="px-5 sm:px-6 py-3 space-y-4">
                                {item.megaMenu.map((sec, secIdx) => {
                                  const Icon = sec.icon;
                                  return (
                                    <div key={secIdx} className="space-y-2">
                                      <div className="flex items-center gap-1.5 text-[#002f7a] text-[11px] font-black uppercase tracking-wider">
                                        <Icon className="w-3.5 h-3.5 text-[#006def]" />
                                        <span>{sec.heading}</span>
                                      </div>
                                      <ul className="space-y-2 pl-2">
                                        {sec.links.map((link, linkIdx) => (
                                          <li key={linkIdx}>
                                            <Link
                                              href={link.href}
                                              onClick={() => setIsMobileOpen(false)}
                                              className="text-xs sm:text-sm font-bold text-[#006def] pl-2.5 border-l-2 border-[#006def]/40 hover:border-[#002f7a] hover:text-[#002f7a] block py-0.5 transition-all"
                                            >
                                              {link.name}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  );
                                })}

                                {item.featured && (
                                  <div className="p-3 bg-white border border-[#006def]/20 rounded-md mt-2">
                                    <h6 className="font-black text-[11px] text-[#002f7a] uppercase mb-1">
                                      {item.featured.title}
                                    </h6>
                                    <p className="text-[10.5px] text-[#002f7a]/80 mb-2 leading-tight">
                                      {item.featured.description}
                                    </p>
                                    <Link
                                      href={item.featured.href}
                                      onClick={() => setIsMobileOpen(false)}
                                      className="inline-block w-full text-center py-1.5 px-3 bg-[#002f7a] hover:bg-[#006def] text-white text-[10px] font-black uppercase tracking-wider rounded transition-colors"
                                    >
                                      {item.featured.buttonText}
                                    </Link>
                                  </div>
                                )}
                              </div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}

                {/* Direct Links */}
                <div className="bg-white">
                  <Link
                    href="/blog"
                    onClick={() => setIsMobileOpen(false)}
                    className="w-full flex justify-between items-center px-5 sm:px-6 py-3.5 sm:py-4 text-xs sm:text-sm font-black uppercase tracking-wider text-[#006def] hover:text-[#002f7a] hover:bg-slate-50 transition-colors"
                  >
                    <span>BLOG</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-blue-50 text-[#006def] font-bold rounded">Articles</span>
                  </Link>
                </div>

                <div className="bg-white">
                  <Link
                    href="/admin"
                    onClick={() => setIsMobileOpen(false)}
                    className="w-full flex justify-between items-center px-5 sm:px-6 py-3.5 sm:py-4 text-xs sm:text-sm font-black uppercase tracking-wider text-[#006def] hover:text-[#002f7a] hover:bg-slate-50 transition-colors"
                  >
                    <span>PORTALS / CLIENT GATEWAY</span>
                    <ChevronDown className="w-3.5 h-3.5 text-[#006def] -rotate-90" />
                  </Link>
                </div>

                {/* Region Selector inside Mobile Drawer */}
                <div className="p-5 sm:px-6 bg-slate-50/70 border-t border-[#002f7a]/10">
                  <div className="text-[10px] font-mono font-bold uppercase text-[#002f7a] tracking-wider mb-2">
                    Region & Engineering Code:
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {countries.map((c) => {
                      const isSelected = selectedCountry.code === c.code;
                      return (
                        <button
                          key={c.code}
                          type="button"
                          onClick={() => setSelectedCountry(c)}
                          className={`flex items-center gap-2.5 p-2 rounded text-left border text-[11px] transition-all cursor-pointer ${
                            isSelected
                              ? "bg-[#002f7a] text-white border-[#002f7a] font-black shadow-xs"
                              : "bg-white text-[#002f7a] border-slate-200 hover:border-[#006def]"
                          }`}
                        >
                          <CountryFlag code={c.code} className="w-8 h-5.5 shadow-xs" />
                          <span className="truncate font-bold">{c.code}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Drawer Bottom Actions & Contacts */}
              <div className="p-4 sm:p-5 border-t border-[#002f7a]/10 bg-slate-50 space-y-3 shrink-0">
                <div className="flex items-center justify-between text-[11px] font-mono font-bold text-[#002f7a] px-1">
                  <a href="tel:+16314521111" className="flex items-center gap-1.5 hover:text-[#006def]">
                    <Phone className="w-3.5 h-3.5 text-[#006def]" />
                    <span>+1 (631) 452-1111</span>
                  </a>
                  <a href="mailto:contact@precastengineering.org" className="flex items-center gap-1.5 hover:text-[#006def]">
                    <Mail className="w-3.5 h-3.5 text-[#006def]" />
                    <span>Email Us</span>
                  </a>
                </div>

                <Link
                  href="#technical-vault"
                  onClick={() => setIsMobileOpen(false)}
                  className="block text-center w-full bg-[#002f7a] hover:bg-[#006def] text-white py-3.5 text-xs font-black uppercase tracking-wider rounded shadow-md transition-colors"
                >
                  Access Technical Vault
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </header>
  );
};