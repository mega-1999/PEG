"use client";

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import {
  FolderKanban, Video, BookOpen, Leaf, Mail, FileText,
  GraduationCap, MonitorPlay, Mic, Award, FileDigit, Accessibility, Play,
  SkipForward, SkipBack, PlayCircle
} from 'lucide-react';
import { getAssetUrl } from '@/lib/utils';

const resourceColumns = [
  {
    links: [
      { name: 'PROJECTS', href: '#projects', badge: 'PORTFOLIO', icon: <FolderKanban className="w-4 h-4" /> },
      { name: 'VIDEOS', href: '#videos', icon: <Video className="w-4 h-4" /> },
      { name: 'CATALOGS', href: '#catalogs', icon: <BookOpen className="w-4 h-4" /> },
      { name: 'GREENREPORTS', href: '#sustainability', icon: <Leaf className="w-4 h-4" /> },
      { name: 'NEWSLETTER', href: '#news', icon: <Mail className="w-4 h-4" /> },
      { name: 'OUTLINE', href: '#outline-specs', icon: <FileText className="w-4 h-4" /> },
    ]
  },
  {
    links: [
      { name: 'CONTINUING ED', href: '#education', badge: 'PE CREDITS', icon: <GraduationCap className="w-4 h-4" /> },
      { name: 'WEBINARS', href: '#webinars', icon: <MonitorPlay className="w-4 h-4" /> },
      { name: 'DETAILED PODCAST', href: '#podcasts', italic: true, icon: <Mic className="w-4 h-4" /> },
      { name: 'CERTIFICATIONS', href: '#certs', icon: <Award className="w-4 h-4" /> },
      { name: 'DATA SHEETS', href: '#data-sheets', icon: <FileDigit className="w-4 h-4" /> },
      { name: 'ADA PRODUCTS', href: '#ada', icon: <Accessibility className="w-4 h-4" /> },
    ]
  }
];

const videoPlaylist = [
  getAssetUrl("/assets/video/72_precast_manhole_Doghouse.646.mp4"),
  getAssetUrl("/assets/video/E20_V1_final.mp4"),
  getAssetUrl("/assets/video/E24_v3_final_blue_bg.mp4"),
  getAssetUrl("/assets/video/E25_V2_final.mp4"),
  getAssetUrl("/assets/video/E38_V3_final_blue_bg.mp4"),
];


export const ResourceDirectory = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.warn("Video autoplay prevented by browser:", error);
      });
    }
  }, [currentVideoIndex]);

  // Advance to next video, loop to start
  const playNextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoPlaylist.length);
  };

  // Go to previous video, loop to end
  const playPrevVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + videoPlaylist.length) % videoPlaylist.length);
  };

  return (
    <section className="w-full bg-[#002f7a] text-white overflow-hidden pt-8 md:pt-10 pb-16 md:pb-20">
      <div className="w-full px-10 md:px-20">

        {/* Title Block */}
        <div className="max-w-2xl mb-10">
          <h2 className="text-2xl md:text-4xl font-black tracking-tighter leading-[0.95] uppercase">
            BEYOND
            <span className="text-transparent pl-1 bg-clip-text bg-gradient-to-r from-[#006def] to-[#006def]">
              SPECIFICATIONS...
            </span>
          </h2>
          <p className="mt-4 text-white/80 font-medium leading-relaxed text-[14px] md:text-base">
            Access our master library of engineering reports, structural calculations, CAD blueprints, and technical podcasts.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-stretch">

          {/* LEFT PANEL: FROSTED GLASS DIRECTORY BOX (Spans 7 Columns) */}
          <div className="xl:col-span-7 bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-10 shadow-[0_20px_50px_rgba(0,47,122,0.3)] flex flex-col justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-center">
              {resourceColumns.map((col, idx) => (
                <ul key={idx} className="space-y-4">
                  {col.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="group flex items-center gap-4 text-xs font-black tracking-widest text-white hover:text-sm"
                      >
                        <div className="p-2 bg-white/10 border border-white/20 group-hover:bg-[#006def]/20 group-hover:border-[#006def] transition-all duration-300 shrink-0">
                          {link.icon}
                        </div>

                        <span className={`uppercase truncate ${link.italic ? 'italic' : ''}`}>
                          {link.name}
                        </span>

                        {link.badge && (
                          <span className="ml-auto text-[8px] font-mono font-bold bg-white text-[#002f7a] px-2 py-0.5 tracking-widest shadow-sm shrink-0">
                            {link.badge}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          {/* RIGHT PANEL: PLAYLIST VIDEO PLAYER & CONTROLS (Spans 5 Columns) */}
          <div className="xl:col-span-5 flex flex-col justify-between">
            {/* FIXED SIZE VIDEO CONTAINER */}
            <div className="relative w-full aspect-video bg-white/5 backdrop-blur-md border border-white/20 overflow-hidden flex items-center justify-center shadow-[0_20px_50px_rgba(0,47,122,0.3)] flex-1 min-h-[260px]">
              <video
                key={currentVideoIndex}
                ref={videoRef}
                autoPlay
                muted
                playsInline
                preload="metadata"
                suppressHydrationWarning
                onEnded={playNextVideo}
                className="w-full h-full object-contain"
              >
                <source src={videoPlaylist[currentVideoIndex]} type="video/mp4" />
              </video>
            </div>

            {/* INTERACTIVE CONTROLS BAR (OUTSIDE OF VIDEO) */}
            <div className="mt-4 flex items-center justify-between p-3.5 bg-white/10 backdrop-blur-xl border border-white/20">
              {/* Playlist Counter */}
              <div className="flex items-center gap-2.5 px-3 py-1 bg-white/10 border border-white/15">
                <PlayCircle className="w-4 h-4 text-[#006def]" />
                <span className="font-mono text-xs tracking-widest text-white uppercase font-bold">
                  VIDEO {currentVideoIndex + 1} / {videoPlaylist.length}
                </span>
              </div>

              {/* Prev / Next Navigation Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={playPrevVideo}
                  className="flex justify-center items-center h-9 w-10 bg-white/10 hover:bg-[#006def] border border-white/20 hover:border-[#006def] text-white transition-all duration-300 group/btn"
                  aria-label="Previous Video"
                >
                  <SkipBack className="w-4 h-4 group-hover/btn:-translate-x-0.5 transition-transform" />
                </button>

                <button
                  onClick={playNextVideo}
                  className="flex justify-center items-center h-9 w-10 bg-white/10 hover:bg-[#006def] border border-white/20 hover:border-[#006def] text-white transition-all duration-300 group/btn"
                  aria-label="Next Video"
                >
                  <SkipForward className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};