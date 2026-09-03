"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown, Search, Menu, X, FileText,
  ClipboardCheck, Wrench, Plus, Minus
} from 'lucide-react';

const navData = [
  {
    title: 'ENGINEERING & CAD',
    links: [
      { name: 'CAD Drawings', href: '/products/cad-drawings' },
      { name: 'Structural Submittals', href: '/structural-submittals' },
      { name: 'Engineering Services', href: '/engineering-servics' },
      { name: 'Consulting', href: '/consulting' }
    ]
  },
  {
    title: 'SPECS & COMPLIANCE',
    megaMenu: [
      {
        heading: 'SPECIFICATIONS',
        icon: FileText,
        links: [
          { name: 'Master Specifications', href: '#' },
          { name: 'SpecWizard', href: '#' },
          { name: 'Outline & Short Form Specs', href: '#' },
          { name: 'State DOT Standards Matrix', href: '#' },
        ]
      },
      {
        heading: 'COMPLIANCE & STANDARDS',
        icon: ClipboardCheck,
        links: [
          { name: 'AASHTO & ACI Standards', href: '#' },
          { name: 'Compliance Certifications', href: '#' },
          { name: 'Technical Bulletins', href: '#' },
        ]
      }
    ],
    featured: {
      title: 'STATE DOT STANDARDS DATABANK',
      description: 'Instantly find and access up-to-date compliance requirements for your state.',
      buttonText: 'START COMPLIANCE SEARCH',
      icon: Wrench,
      href: '#'
    }
  },
  {
    title: 'PRODUCTS & SOLUTIONS',
    links: [
      { name: 'Product Categories', href: '/products/product-categories' },
      { name: 'Certifications', href: '/products/certifications' },
      { name: 'Data Sheets', href: '/products/data-sheet' },
      { name: 'Materials', href: '/products/materials' },
    ]
  },
  {
    title: 'RESOURCES & KNOWLEDGE',
    links: [
      { name: 'Precast Engineering Blog', href: '/blog' },
      { name: 'Catalogs & Brochures', href: '/resources/catalogs-brochures' },
      { name: 'Technical Videos', href: '/resources/technical-videos' },
      { name: 'Project Gallery', href: '/resources/project-gallery' },
      { name: 'Global Events/Shows', href: '/resources/global-shows' },
    ]
  },
  {
    title: 'COMPANY',
    links: [
      { name: 'About PEG', href: '/about' },
      { name: 'Precast Blog', href: '/blog' },
      { name: 'Global Locations', href: '/global-location' },
      { name: 'Contacts', href: '#contact' }
    ]
  }
];

export const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mobileExpandedNode, setMobileExpandedNode] = useState<string | null>(null);

  const navRef = useRef<HTMLElement>(null);

  const toggleMenu = (title: string) => {
    if (activeMenu === title) {
      setActiveMenu(null);
    } else {
      setActiveMenu(title);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header ref={navRef} className="fixed top-0 left-0 w-full z-[100] flex flex-col shadow-sm">

      {/* 1. TOP UTILITY BAR */}
      {/* Adjusted padding for smaller screens */}
      <div className="bg-[#004aad] text-white h-10 w-full px-6 xl:px-20 flex justify-between">
        <div className="h-full flex justify-end items-center gap-2 text-[11px] font-bold tracking-wider">
          <div className="uppercase hidden md:block">PEG</div>
          <div className="uppercase hidden md:block">|</div>
          <div className="hidden md:block">peg.com</div>
        </div>
        <div className="h-full flex justify-end items-center gap-6 pr-14 xl:pr-0 text-[11px] font-bold tracking-wider">

          <Link href={'/blog'} className="hover:text-blue-200 transition-colors uppercase font-black text-[11px] tracking-wider px-2.5 py-1 bg-white/15 hover:bg-white/25 rounded border border-white/25 flex items-center gap-1 shadow-sm">
            BLOG
          </Link>

          <Link href={'#portal'}>
            <button className="flex items-center gap-1 hover:cursor-pointer transition-colors uppercase">
              PORTALS <ChevronDown className="w-3 h-3" />
            </button>
          </Link>

          {/* Integrated Search Bar - Hidden on very small screens to save space */}
          <div className="hidden sm:flex items-center bg-white/10 rounded px-3 py-1.5 w-48 md:w-64 border border-white/20 focus-within:border-[#1B79EE] transition-colors">
            <Search className="w-3.5 h-3.5 text-white/70 mr-2 shrink-0" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border-0 text-[11px] w-full text-white placeholder:text-white/60 focus:outline-none focus:ring-0"
            />
          </div>

          <div className="uppercase hidden lg:block">
            CONTACT: +1 631 452-1111
          </div>

        </div>
      </div>

      {/* 2. MAIN NAVIGATION BAR */}
      <div className="bg-white border-b border-[#004aad]/10 h-18 w-full relative">
        {/* Adjusted padding to flow nicely when zoomed in */}
        <div className="w-full px-6 xl:px-20 h-full flex justify-between items-center relative">

          {/* Logo */}
          <Link href="/" onClick={() => setActiveMenu(null)} className="shrink-0 flex items-center border-r border-[#004aad]/10 h-10">
            <Image
              src="/PEG.png"
              alt="PEG Precast Engineering Group"
              width={330} // Scaled down slightly to help fit on zoomed screens
              height={55}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation Links - Shifted to xl breakpoint (1280px) */}
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
                    onClick={() => toggleMenu(item.title)}
                    // Added whitespace-nowrap and slightly smaller horizontal padding (px-3) for zoom tolerance
                    className={`h-full px-3 2xl:px-4 whitespace-nowrap flex items-center gap-1 text-[12px] font-black uppercase tracking-tight transition-all duration-200 border-t-4
                      ${isOpen ? 'text-[#004aad] border-[#004aad] bg-[#004aad]/5' : 'text-[#004aad]/70 border-transparent hover:text-[#1B79EE]'}
                    `}
                  >
                    {item.title}
                    <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#004aad]' : 'text-[#004aad]/50'}`} />
                  </button>

                  {/* DROP DOWN / MEGA MENU RENDERER */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        transition={{ duration: 0.2 }}
                        className={`absolute top-full left-1/2 -translate-x-1/2 bg-white border border-[#004aad]/10 shadow-[0_20px_50px_rgba(0,74,173,0.1)] rounded-b-md overflow-hidden z-50
                          ${hasMegaMenu ? 'w-[800px]' : 'w-[280px]'}
                        `}
                      >
                        {/* Standard Link Dropdown */}
                        {!hasMegaMenu && item.links && (
                          <ul className="flex flex-col py-2 border-t-2 border-[#1B79EE]">
                            {item.links.map((link) => (
                              <li key={link.name}>
                                <Link
                                  href={link.href}
                                  onClick={() => setActiveMenu(null)}
                                  className="block px-6 py-3 text-xs font-bold text-[#004aad]/70 hover:bg-[#004aad]/5 hover:text-[#004aad] transition-colors"
                                >
                                  {link.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}

                        {/* Mega Menu */}
                        {hasMegaMenu && (
                          <div className="flex h-[320px] border-t-2 border-[#1B79EE]">
                            {item.megaMenu?.map((col, idx) => {
                              const Icon = col.icon;
                              return (
                                <div key={idx} className="flex-1 p-8 border-r border-[#004aad]/5">
                                  <div className="flex items-center gap-2 text-[#004aad] mb-6">
                                    <Icon className="w-5 h-5" />
                                    <h4 className="font-black text-xs uppercase tracking-widest">{col.heading}</h4>
                                  </div>
                                  <ul className="space-y-4">
                                    {col.links.map(link => (
                                      <li key={link.name}>
                                        <Link
                                          href={link.href}
                                          onClick={() => setActiveMenu(null)}
                                          className="text-xs font-medium text-[#004aad]/70 hover:text-[#1B79EE] transition-colors"
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
                            <div className="w-[280px] p-8 bg-[#004aad]/5 flex flex-col">
                              <div className="flex items-center gap-2 text-[#004aad] mb-6">
                                <Wrench className="w-5 h-5" />
                                <h4 className="font-black text-xs uppercase tracking-widest">Featured Tool</h4>
                              </div>

                              <div className="w-full h-24 bg-white border border-[#1B79EE]/20 rounded mb-4 flex items-center justify-center text-[#1B79EE]/40">
                                [Illustration]
                              </div>

                              <h5 className="font-bold text-xs text-[#004aad] mb-2 leading-tight uppercase">{item.featured?.title}</h5>
                              <p className="text-xs text-[#004aad]/60 mb-6 leading-relaxed">{item.featured?.description}</p>

                              <Link
                                href={item.featured?.href || "#"}
                                onClick={() => setActiveMenu(null)}
                                className="mt-auto block text-center w-full border-2 border-[#004aad] text-[#004aad] py-2 text-[10px] font-black uppercase tracking-wider hover:bg-[#004aad] hover:text-white transition-colors"
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
          </nav>

          {/* Desktop CTA Button - Shifted to xl breakpoint */}
          <div className="hidden xl:flex shrink-0 pl-4 xl:pl-8 border-l border-[#004aad]/10 h-10 items-center">
            <Link
              href="#technical-vault"
              className="bg-[#004aad] whitespace-nowrap hover:bg-[#1B79EE] text-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded transition-colors"
            >
              Access Vault
            </Link>
          </div>

          {/* Mobile Hamburger - Shifted to xl breakpoint */}
          <div className="xl:hidden flex items-center gap-4">
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="bg-[#004aad] hover:bg-[#1B79EE] transition-colors p-2 rounded text-white"
            >
              {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* 3. MOBILE MENU (Accordion Style) */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 w-[300px] h-screen bg-white shadow-[-20px_0_50px_rgba(0,74,173,0.1)] z-[200] flex flex-col"
          >
            <div className="flex justify-between items-center p-6 border-b border-[#004aad]/10">
              <Image src="/PEG.png" alt="PEG" width={100} height={30} className="object-contain" />
              <button onClick={() => setIsMobileOpen(false)}>
                <X className="w-6 h-6 text-[#004aad]" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              {navData.map((item) => {
                const isExpanded = mobileExpandedNode === item.title;

                return (
                  <div key={item.title} className="border-b border-[#004aad]/5">
                    <button
                      onClick={() => setMobileExpandedNode(isExpanded ? null : item.title)}
                      className={`w-full flex justify-between items-center px-6 py-4 text-xs font-black uppercase tracking-wider transition-colors
                        ${isExpanded ? 'bg-[#004aad]/5 text-[#1B79EE]' : 'text-[#004aad]'}
                      `}
                    >
                      {item.title}
                      {isExpanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: 'auto' }}
                          exit={{ height: 0 }}
                          className="overflow-hidden bg-[#004aad]/5 border-t border-[#1B79EE]/10"
                        >
                          <ul className="px-6 py-2 pb-6 space-y-3">
                            {(item.links || item.megaMenu?.flatMap(m => m.links))?.map((link: any, i) => (
                              <li key={i}>
                                <Link
                                  href={link.href}
                                  onClick={() => setIsMobileOpen(false)}
                                  className="text-sm font-medium text-[#004aad]/70 pl-4 border-l-2 border-[#1B79EE]/30 hover:border-[#1B79EE] hover:text-[#004aad] block py-1 transition-all"
                                >
                                  {link.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            <div className="p-6 border-t border-[#004aad]/10">
              <Link
                href="#technical-vault"
                onClick={() => setIsMobileOpen(false)}
                className="block text-center w-full bg-[#004aad] hover:bg-[#1B79EE] text-white py-4 text-xs font-bold uppercase tracking-wider rounded transition-colors"
              >
                Access Vault
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
};