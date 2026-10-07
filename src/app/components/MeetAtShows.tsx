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
    img: getAssetUrl("/assets/images/meet-show/woc-india.png"),
    tag: "INDIA",
    link: "https://woc-india.com/"
  },
  {
    title: "World of Concrete Europe at Intermart",
    date: "April 21–24, 2027",
    location: "Paris-Nord Villepinte, France",
    booth: "Intermat",
    description: "Early Bird rates to exhibit ends in November - Book a stand now for the best rates!\n\nAfter the hugely successful second edition of World of Concrete Europe, held concurrently with INTERMAT 2018, the organisers of INTERMAT and World of Concrete have decided to join forces once again to produce World of Concrete Europe during INTERMAT.",
    img: getAssetUrl("/assets/images/meet-show/woc-europ.png"),
    tag: "EUROPE",
    link: "https://www.intermatconstruction.com/en/woce/presentation"
  },
  {
    title: "World of Concrete Show Asia",
    date: "August 12-14, 2026",
    location: "Shanghai New International Expo Centre (E1-E4)",
    booth: "Shanghai WOCA",
    description: "Opening Hours: 9:00am – 5:00pm, Wed to Thu | 9:00am – 2:00pm, Fri\n\nWOCA will showcase the latest technologies and exhibits related to concrete general, concrete surface, mortar & related masonry, and non-concrete flooring.",
    img: getAssetUrl("/assets/images/meet-show/woc-asia.png"),
    tag: "ASIA",
    link: "https://en.wocasia.cn/"
  },
  {
    title: "Concrete Show Brazil",
    date: "August 25-27, 2026",
    location: "Sao Paolo Expo, Sao Paolo, Brazil",
    booth: "Sao Paolo Expo",
    description: "Bringing many experiences and innovations to the industry, Concrete Show 2026 promises three intense days of qualified content, networking and business.\n\nNational and international brands presenting their launches and new trends with the best solutions for your business.",
    img: getAssetUrl("/assets/images/meet-show/cs-informa.png"),
    tag: "SOUTH AMERICA",
    link: "https://www.concreteshow.com.br/en/"
  },
  {
    title: "Expo CIHAC",
    date: "October 15-17, 2025",
    location: "Citibanamex Center, Mexico City",
    booth: "Citibanamex",
    description: "Expo CIHAC is the leading construction, engineering, architecture and design event in Mexico and Latin America.\n\nWith a 34-year trajectory, Expo CIHAC continues to be the reference and single space that gathers all stages of the construction cycle.",
    img: getAssetUrl("/assets/images/meet-show/cihac.png"),
    tag: "LATIN AMERICA",
    link: "https://www.expocihac.com/en/"
  },
  {
    title: "Concret Expo",
    date: "FEB 10-11, 2027",
    location: "Toronto Concret Expo",
    booth: "Toronto",
    description: "Wednesday February 10 – 9:00am to 5:00pm Thursday February 11 – 9:00am to 3:00pm\n\nCanada’s ONLY National Trade Show Dedicated to the Concrete, Construction and Aggregates Industries.",
    img: getAssetUrl("/assets/images/meet-show/canadianconcreteexpo.png"),
    tag: "TORONTO",
    link: "https://canadianconcreteexpo.com/"
  }
];

export default function MeetAtShows() {
  // 4x duplication ensures perfect seamless -50% loop translation
  const loopExhibitions = [
    ...exhibitionData,
    ...exhibitionData,
    ...exhibitionData,
    ...exhibitionData
  ];

  return (
    <section id="shows" className="w-full py-2 sm:py-4 md:py-6 bg-white border-t border-[#002f7a]/10 overflow-hidden relative select-none">

      {/* CAD WATERMARK BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#002f7a 1.5px, transparent 1.5px), linear-gradient(to right, #002f7a 0.5px, transparent 0.5px), linear-gradient(to bottom, #002f7a 0.5px, transparent 0.5px)`,
          backgroundSize: '40px 40px, 200px 200px, 200px 200px'
        }}
      />

      {/* HEADER SECTION */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 w-full relative z-10 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-[#002f7a]/10 pb-8">

          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#006def]/10 text-[#006def] text-xs font-black tracking-[0.2em] uppercase border-l-2 border-[#006def]">
              <Globe className="w-3.5 h-3.5" /> Worldwide Industry Presence
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#002f7a] tracking-tighter uppercase leading-[0.9]">
              Meet At <span className="text-[#006def]">The Shows.</span>
            </h2>
            <p className="text-[#002f7a] font-semibold text-sm md:text-base max-w-2xl leading-relaxed">
              Connect with our licensed precast structural engineers live on the exhibition floor across major international expos.
            </p>
          </div>

          <div className="border-l-4 border-[#006def] pl-5 py-1">
            <p className="text-[#002f7a] font-black text-sm md:text-base uppercase tracking-tight leading-snug">
              Make Your Presence Count.
            </p>
          </div>

        </div>
      </div>

      {/* ONE-ROW INFINITE SLIDING MARQUEE RUNWAY */}
      <div className="relative w-full overflow-hidden py-2 group/marquee">

        {/* High-density gradient masks for clean entry and exit fading */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

        {/* INFINITE LOOP RUNWAY */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 60, // Slow, elegant gliding speed
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex items-stretch gap-6 w-max whitespace-nowrap will-change-transform px-4"
        >
          {loopExhibitions.map((show, idx) => (
            <div
              key={`show-${show.tag}-${idx}`}
              className="w-[290px] sm:w-[330px] bg-blue-50/80 hover:bg-[#002f7a] border border-[#006def]/20 hover:border-[#002f7a] text-[#002f7a] hover:text-white shadow-xs hover:shadow-2xl transition-all duration-500 flex flex-col justify-between shrink-0 group/card overflow-hidden cursor-pointer"
            >
              {/* TOP IMAGE / LOGO CONTAINER (Solid white for crisp logo clarity) */}
              <div className="relative w-full h-36 bg-white p-6 flex items-center justify-center border-b border-[#002f7a]/10 transition-colors">
                <div className="relative w-full h-full group-hover/card:scale-105 transition-transform duration-500">
                  <Image
                    src={getAssetUrl(show.img)}
                    alt={show.title}
                    fill
                    sizes="330px"
                    className="object-contain p-2"
                  />
                </div>

                <span className="absolute top-3 left-3 px-2 py-0.5 bg-white border border-[#002f7a]/15 text-[#002f7a] text-[8px] font-mono font-bold tracking-widest uppercase shadow-xs">
                  {show.tag}
                </span>

                <a
                  href={show.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 p-1.5 bg-white border border-[#002f7a]/15 text-[#002f7a] hover:text-[#006def] hover:border-[#006def] transition-colors shadow-xs"
                >
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* DETAILED CONTENT AREA */}
              <div className="p-4 flex flex-col justify-between flex-1 space-y-3 whitespace-normal">
                <div>
                  <div className="flex items-center gap-2 text-[#006def] group-hover/card:text-blue-200 text-[11px] font-mono font-bold mb-1.5 transition-colors">
                    <Calendar className="w-3.5 h-3.5 shrink-0" />
                    <span>{show.date}</span>
                  </div>

                  <h3 className="text-sm sm:text-base font-black text-[#002f7a] group-hover/card:text-white uppercase tracking-tight line-clamp-2 leading-snug transition-colors">
                    {show.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-[#002f7a]/70 group-hover/card:text-white/80 text-[11px] font-semibold mt-1 transition-colors">
                    <MapPin className="w-3 h-3 text-[#006def] group-hover/card:text-blue-200 shrink-0 transition-colors" />
                    <span className="truncate">{show.location}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#002f7a]/10 group-hover/card:border-white/20 flex items-center justify-between transition-colors">
                  <span className="text-[10px] font-mono font-bold text-[#002f7a]/60 group-hover/card:text-white/70 uppercase transition-colors">
                    Official Expo
                  </span>
                  <a
                    href={show.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#006def] group-hover/card:text-blue-200 font-bold text-xs inline-flex items-center gap-1 group-hover/card:translate-x-0.5 transition-all"
                  >
                    Event Info <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Top Accent Line */}
              <div className="h-0.5 w-full bg-[#006def] group-hover/card:bg-white opacity-0 group-hover/card:opacity-100 transition-all duration-300" />
            </div>
          ))}
        </motion.div>

      </div>

    </section>
  );
}