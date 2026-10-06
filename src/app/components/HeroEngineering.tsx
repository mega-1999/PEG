"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const searchPhrases = [
  "Box Culverts",
  "Tilt-Up Panels",
  "Utility",
  "Leaching Galleys",
  "Hollow-Core Slabs"
];

const HeroEngineering = () => {
  const [currentText, setCurrentText] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {
    const currentFullText = `Search ${searchPhrases[phraseIdx]}...`;
    let timeout: NodeJS.Timeout;

    if (!isDeleting && currentText === currentFullText) {
      // Pause when full phrase is typed
      timeout = setTimeout(() => setIsDeleting(true), 1600);
    } else if (isDeleting && currentText === "Search ") {
      // Pause before typing next phrase
      setIsDeleting(false);
      setPhraseIdx((prev) => (prev + 1) % searchPhrases.length);
    } else {
      const delta = isDeleting ? 40 : 80;
      timeout = setTimeout(() => {
        if (!isDeleting) {
          setCurrentText(currentFullText.slice(0, currentText.length + 1));
        } else {
          setCurrentText(currentFullText.slice(0, currentText.length - 1));
        }
      }, delta);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, phraseIdx]);

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const query = searchVal.trim() || searchPhrases[phraseIdx];
    window.location.href = `/blog?search=${encodeURIComponent(query)}`;
  };

  return (
    <section className="relative w-full py-16 md:py-20 flex flex-col items-center justify-center border-b border-white/10 bg-[#002f7a] text-white overflow-hidden">

      {/* 1. THE GRID SYSTEM */}
      <div className="absolute inset-0 -z-10 opacity-[0.04] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]"></div>

      <div className="w-full px-10 md:px-20 flex flex-col items-center text-center space-y-8 z-10">
        <div className="space-y-6 w-full">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-3xl md:text-5xl font-black text-white tracking-tighter leading-none'
          >
            PEG SOLUTIONS{" "}
            <span className="text-[#006def]">FOR THE WHOLE TEAM.</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 text-left w-full">
            <div className="p-8 md:p-10 bg-white/10 backdrop-blur-md border border-white/20 border-l-4 border-l-white space-y-2 text-left">
              <h3 className="text-base md:text-lg font-black text-white uppercase tracking-tight flex items-center gap-2">
                <span className="w-2 h-2 bg-white shrink-0" />
                What is Precast Engineering Group (PEG)?
              </h3>
              <p className="text-white/85 font-medium text-sm md:text-base leading-relaxed">
                Precast Engineering Group (PEG) is a specialized engineering powerhouse delivering PE-stamped calculations, CAD drafting, formwork optimization, and on-demand technical support exclusively built for the precast concrete industry.
              </p>
            </div>

            <div className="p-8 md:p-10 bg-white/10 backdrop-blur-md border border-white/20 border-l-4 border-l-[#006def] space-y-2 text-left">
              <h3 className="text-base md:text-lg font-black text-white uppercase tracking-tight flex items-center gap-2">
                <span className="w-2 h-2 bg-[#006def] shrink-0" />
                Why PEG?
              </h3>
              <p className="text-white/85 font-medium text-sm md:text-base leading-relaxed">
                We bridge structural precision and manufacturing speed—delivering rapid turnaround, agency approval-ready submittals, and flexible hourly or project-based engineering tailored to your plant's exact production needs.
              </p>
            </div>
          </div>
        </div>

        {/* 3. THE SEARCH ENGINE */}
        <motion.form
          onSubmit={handleSearch}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="w-full max-w-4xl flex items-center gap-0 bg-white border-2 border-white/20 rounded-none overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
        >
          <div className="pl-4">
            <Search className="w-5 h-5 text-[#006def]" />
          </div>
          <Input
            type="text"
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            placeholder={currentText || "search Box Culverts..."}
            className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-base py-6 text-[#002f7a] placeholder:text-[#006def] font-semibold"
          />
          <Button
            type="submit"
            className="rounded-none bg-[#006def] hover:bg-[#002f7a] text-white font-black transition-all tracking-widest cursor-pointer px-6 md:px-8"
          >
            INITIALIZE SEARCH
          </Button>
        </motion.form>

        {/* 4. POPULAR TAGS */}
        <div className="flex flex-wrap justify-center gap-x-6 md:gap-x-8 gap-y-2 text-[10px] font-black uppercase tracking-[0.2em]">
          <span className="text-white/70">Popular_Nodes:</span>
          {searchPhrases.map((phrase) => (
            <span
              key={phrase}
              onClick={() => {
                setSearchVal(phrase);
                window.location.href = `/blog?search=${encodeURIComponent(phrase)}`;
              }}
              className="text-[#006def] hover:text-white cursor-pointer transition-colors"
            >
              {phrase}
            </span>
          ))}
        </div>

      </div>
    </section>
  )
}

export default HeroEngineering;