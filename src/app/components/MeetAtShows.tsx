"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Users, Globe, LayoutGrid, Rows3, ArrowRight, MapPin, Calendar,
  ExternalLink
} from 'lucide-react';
import Link from 'next/link';
import { getAssetUrl } from '@/lib/utils';

const exhibitionData = [
  {
    title: "World of Concrete India",
    date: "June 3-5, 2026",
    location: "Bombay Exhibition Centre, Mumbai",
    booth: "WoCI Expo",
    description: "The upcoming edition of World of Concrete India (WoCI) exhibition will bring together over 10,000 industry professionals and over 200 exhibitors from around the world, showcasing the latest products, technologies, and innovations in the concrete industry.",
    img: "/assets/images/meet-show/woc-india.png",
    tag: "INDIA",
    link: "https://woc-india.com/"
  },
  {
    title: "World of Concrete Europe at Intermart",
    date: "April 21–24, 2027",
    location: "Paris-Nord Villepinte, France",
    booth: "Intermat",
    description: "Early Bird rates to exhibit ends in November - Book a stand now for the best rates!\n\nAfter the hugely successful second edition of World of Concrete Europe, held concurrently with INTERMAT 2018, the organisers of INTERMAT and World of Concrete have decided to join forces once again to produce World of Concrete Europe during INTERMAT.",
    img: "/assets/images/meet-show/woc-europ.png",
    tag: "EUROPE",
    link: "https://www.intermatconstruction.com/en/woce/presentation"
  },
  {
    title: "World of Concrete Show Asia",
    date: "August 12-14, 2026",
    location: "Shanghai New International Expo Centre (E1-E4)",
    booth: "Shanghai WOCA",
    description: "Opening Hours: 9:00am – 5:00pm, Wed to Thu | 9:00am – 2:00pm, Fri\n\nWOCA will showcase the latest technologies and exhibits related to concrete general, concrete surface, mortar & related masonry, and non-concrete flooring.",
    img: "/assets/images/meet-show/woc-asia.png",
    tag: "ASIA",
    link: "https://en.wocasia.cn/"
  },
  {
    title: "Concrete Show Brazil",
    date: "August 25-27, 2026",
    location: "Sao Paolo Expo, Sao Paolo, Brazil",
    booth: "Sao Paolo Expo",
    description: "Bringing many experiences and innovations to the industry, Concrete Show 2026 promises three intense days of qualified content, networking and business.\n\nNational and international brands presenting their launches and new trends with the best solutions for your business.",
    img: "/assets/images/meet-show/cs-informa.png",
    tag: "SOUTH AMERICA",
    link: "https://www.concreteshow.com.br/en/"
  },
  {
    title: "Expo CIHAC",
    date: "October 15-17, 2025",
    location: "Citibanamex Center, Mexico City",
    booth: "Citibanamex",
    description: "Expo CIHAC is the leading construction, engineering, architecture and design event in Mexico and Latin America.\n\nWith a 34-year trajectory, Expo CIHAC continues to be the reference and single space that gathers all stages of the construction cycle.",
    img: "/assets/images/meet-show/cihac.png",
    tag: "LATIN AMERICA",
    link: "https://www.expocihac.com/en/"
  },
  {
    title: "Concret Expo",
    date: "FEB 10-11, 2027",
    location: "Toronto Concret Expo",
    booth: "Toronto",
    description: "Wednesday February 10 – 9:00am to 5:00pm Thursday February 11 – 9:00am to 3:00pm\n\nCanada’s ONLY National Trade Show Dedicated to the Concrete, Construction and Aggregates Industries.",
    img: "/assets/images/meet-show/canadianconcreteexpo.png",
    tag: "TORONTO",
    link: "https://canadianconcreteexpo.com/"
  }
];

type ViewMode = 'grid' | 'stack';

export default function MeetAtShows() {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');

  return (
    <section className="w-full py-24 bg-slate-50 px-10 md:px-20 overflow-hidden">
      <div className="">

        {/* HEADER & CONTROLS */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-2 border-slate-200 pb-10 gap-8">

          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-3xl md:text-5xl font-black text-[#004aad] tracking-tighter uppercase leading-none">
                Meet at <span style={{ WebkitTextStroke: "1px #1B79EE", color: "transparent" }}>the Shows.</span>
              </p>
            </div>

            {/* NEW TAGLINE ADDED HERE */}
            <p className="text-xl md:text-lg font-black text-[#004aad]/80 tracking-tight uppercase border-l-4 border-[#1B79EE] pl-4">
              Make Your Presence Count.
            </p>
          </div>

          <div className="flex flex-col items-end gap-6">
            <div className="hidden md:block text-right">
              <div className="flex justify-end items-center gap-3 text-[#004aad] font-black text-xs tracking-widest uppercase mb-2">
                <Globe className="w-4 h-4 text-[#1B79EE] animate-pulse" /> Worldwide Presence
              </div>
              <p className="text-slate-400 font-mono text-[9px] uppercase tracking-widest">Connect with our PE's live on the floor.</p>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex bg-white border border-slate-200 p-1 shadow-sm">
                {[
                  { mode: 'grid', icon: LayoutGrid, title: 'Column View' },
                  { mode: 'stack', icon: Rows3, title: 'List View' }
                ].map(item => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.mode}
                      onClick={() => setViewMode(item.mode as ViewMode)}
                      className={`p-2.5 transition-all duration-300 ${viewMode === item.mode ? 'bg-[#004aad]/5 text-[#004aad] shadow-inner border border-[#004aad]/10' : 'text-slate-400 hover:text-[#1B79EE]'}`}
                      title={item.title}
                    >
                      <Icon className="w-5 h-5" />
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* DYNAMIC LAYOUT CONTAINER */}
        <div className={`
            transition-all duration-500 ease-in-out
            ${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-4' : ''}
            ${viewMode === 'stack' ? 'flex flex-col gap-10 pt-4 max-w-5xl mx-auto' : ''}
          `}
        >
          {exhibitionData.map((show, idx) => (
            <motion.div
              key={idx}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className={`
                group relative bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-[0_20px_50px_rgba(0,74,173,0.1)] hover:border-slate-300 transition-all duration-500
                ${viewMode === 'grid' ? 'flex flex-col h-full' : ''}
                ${viewMode === 'stack' ? 'flex flex-col md:flex-row h-auto w-full' : ''}
              `}
            >

              {/* THE IMAGE/LOGO CONTAINER - Adjusted for smaller logo with padding */}
              <div className={`relative overflow-hidden bg-slate-50 shrink-0 transition-all duration-500 border-b border-slate-100
                ${viewMode === 'stack' ? 'w-full md:w-87.5 h-55 md:h-auto p-12' : 'w-full h-40 p-10'}
              `}>
                <div className="relative h-full w-full group-hover:scale-105 transition-transform duration-700 ease-out">
                  <Image
                    src={getAssetUrl(show.img)}
                    alt={show.title}
                    fill
                    className="object-contain" // Changed to contain so logos aren't cropped
                  />
                </div>
                <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-white border border-slate-200 text-[#004aad] text-[8px] font-black tracking-widest uppercase shadow-sm">
                  {show.tag}
                </div>
                <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-white border border-slate-200 cursor-pointer text-[#004aad] text-[8px] font-black tracking-widest uppercase shadow-sm">
                  <Link href={show.link}>
                    <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
                <div className="absolute bottom-0 right-4 z-10 text-[#004aad] text-[8px] font-black tracking-widest uppercase shadow-sm">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-3.5 h-3.5 text-[#1B79EE] shrink-0 mt-0.5" />
                    <span className="font-bold text-slate-700 text-[13px]">{show.date}</span>
                  </div>
                </div>
              </div>

              {/* DETAILED CONTENT AREA */}
              <div className="relative px-8 pt-2 flex flex-col flex-1 bg-white z-10">

                <h3 className="text-lg font-black text-[#004aad] uppercase tracking-tighter group-hover:text-[#1B79EE] transition-colors duration-300 leading-tight mb-6">
                  {show.title}
                </h3>

                {/* Telemetry Data Box */}
                {/* <div className="bg-slate-50 border border-slate-100 p-4 space-y-3 mb-6 group-hover:bg-[#004aad]/5 group-hover:border-[#004aad]/10 transition-colors duration-300">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-3.5 h-3.5 text-[#1B79EE] shrink-0 mt-0.5" />
                    <span className="font-bold text-slate-700 text-[13px]">{show.date}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-3.5 h-3.5 text-[#1B79EE] shrink-0 mt-0.5" />
                    <span className="font-medium text-slate-600 text-[13px]">{show.location}</span>
                  </div>
                </div> */}

                {/* Multiline Description */}
                {/* <div className="text-slate-500 text-[13px] leading-relaxed space-y-4 flex-1 mb-8 font-medium">
                  {show.description.split('\n\n').map((paragraph, pIdx) => {
                    const isBold = paragraph.includes("Early Bird") || paragraph.includes("Opening Hours");
                    return (
                      <p key={pIdx} className={isBold ? "font-bold text-[#004aad]" : ""}>
                        {paragraph}
                      </p>
                    )
                  })}
                </div> */}

                {/* <div className="mt-auto">
                  <a
                    href={show.link}
                    className="group/btn flex items-center justify-center gap-3 bg-[#004aad] text-white py-4 font-mono text-[10px] font-black uppercase tracking-widest hover:bg-[#1B79EE] transition-all duration-300 shadow-lg shadow-[#004aad]/20"
                  >
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div> */}

              </div>

              {/* ACCENT LINE LOGIC */}
              <div className={`absolute bg-[#1B79EE] transition-all duration-700 z-20 
                ${viewMode === 'stack'
                  ? 'left-0 top-0 h-full w-1 group-hover:w-2'
                  : 'top-0 left-0 h-1 w-0 group-hover:w-full'
                }
              `} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}