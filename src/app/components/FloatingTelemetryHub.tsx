"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import { FaYoutube } from 'react-icons/fa';

const quickActions = [
  { id: "CALL", icon: <Phone className="w-5 h-5" />, href: "tel:+16314521111", isExternal: false },
  { id: "YOUTUBE", icon: <FaYoutube className="w-5 h-5" />, href: "https://youtube.com", isExternal: true },
  { id: "Mail", icon: <Mail className="w-5 h-5" />, href: "/#contact", isExternal: false }
];

export default function FloatingTelemetryHub() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4 pointer-events-none">

      {/* 1. SOCIAL MEDIA QUICK LINKS */}
      <div className="flex flex-col items-end gap-2 pointer-events-auto">
        {quickActions.map((social, idx) => (
          <Link
            key={idx}
            href={social.href}
            target={social.isExternal ? "_blank" : undefined}
            rel={social.isExternal ? "noopener noreferrer" : undefined}
            aria-label={social.id}
            className="group relative flex justify-end"
          >
            <div className="flex items-center w-12 h-12 rounded-full bg-[#002f7a] border border-white text-white group-hover:w-36 group-hover:bg-[#006def] group-hover:border-[#006def] transition-all duration-500 overflow-hidden shadow-[0_8px_20px_rgba(0, 47, 122,0.2)]">
              <span className="absolute left-5 opacity-0 group-hover:opacity-100 font-mono text-[10px] font-black tracking-widest whitespace-nowrap transition-opacity duration-300 delay-100">
                {social.id}
              </span>
              <div className="absolute right-0 w-12 h-12 rounded-full flex items-center justify-center">
                {social.icon}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* 2. SCROLL TO TOP ARROW CIRCLE BUTTON */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto relative group"
          >
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              title="Back to Top"
              className="relative w-12 h-12 rounded-full bg-[#002f7a] text-white border-2 border-[#006def]/40 flex items-center justify-center overflow-hidden shadow-[0_8px_25px_rgba(0, 47, 122,0.3)] hover:shadow-[0_0_30px_rgba(0, 109, 239,0.6)] hover:bg-[#006def] hover:border-[#006def] transition-all duration-300 cursor-pointer"
            >
              {/* GRADIENT HOVER OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#006def] to-[#002f7a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* ARROW UP ICON WITH MICRO-ANIMATION */}
              <ArrowUp className="w-5 h-5 relative z-10 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>

            {/* HOVER TOOLTIP */}
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 z-50 transform translate-x-1 group-hover:translate-x-0">
              <div className="bg-[#002f7a] text-white text-[10px] font-black py-1.5 px-3 rounded-lg shadow-xl whitespace-nowrap border border-[#006def]/40 uppercase tracking-widest">
                Back to Top
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}