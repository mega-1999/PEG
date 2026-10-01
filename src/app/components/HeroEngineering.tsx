"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Activity } from 'lucide-react';

const HeroEngineering = () => {
  return ( 
    <section className="relative w-full py-12 flex flex-col items-center justify-center border-b bg-white overflow-hidden">
      
      {/* 1. THE GRID SYSTEM: Increased opacity slightly for 32" monitors */}
      <div className="absolute inset-0 -z-10 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]"></div>
      
 

      <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-10 z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 max-w-5xl"
        >
          {/* PEG Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-[#023380] text-white text-xs font-mono font-black tracking-[0.25em] uppercase mb-4 shadow-sm border-l-4 border-[#0271f1]">
            <span className="w-2 h-2 bg-[#0271f1] animate-ping" />
            PRECAST ENGINEERING GROUP
          </div>

          {/* THE NEW HEADLINE */}
          <h1 className="text-3xl md:text-5xl font-black tracking-tighter text-[#023380] leading-[0.9] uppercase">
            PRECAST ENGINEERING & <br />
            <span style={{ WebkitTextStroke: "1.5px #0271f1", color: "transparent" }}>TECHNICAL SERVICES.</span>
          </h1>

          {/* THE UPDATED TEXT */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-lg text-[#0271f1] max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Providing specialized engineering, CAD, and technical support exclusively for the precast concrete industry.
          </motion.p>
        </motion.div>

        {/* 3. THE SEARCH ENGINE: Brutalist shadow and scaling */}
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="w-full max-w-4xl flex items-center gap-0 bg-white border-[3px] border-[#023380] rounded-none overflow-hidden shadow-[10px_10px_0px_-5px_rgba(2,51,128,0.05)]"
        >
          <div className="pl-4">
            <Search className="w-5 h-5 text-[#0271f1]" />
          </div>
          <Input
            type="text"
            placeholder="Search structural precast, or technical specs..."
            className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-base py-6 placeholder:text-[#0271f1] font-medium"
          />
          <Button className="rounded-none bg-[#023380] hover:bg-[#0271f1] text-white font-black transition-all tracking-widest">
            INITIALIZE SEARCH
          </Button>
        </motion.div>
        
        {/* 4. POPULAR TAGS: Technical styling */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-[10px] font-black text-[#023380] uppercase tracking-[0.2em]">
          <span className="hover:text-[#0271f1] cursor-pointer transition-colors">Popular_Nodes:</span>
          <span className="hover:text-[#023380] cursor-pointer transition-colors text-[#0271f1]">Wall Panels</span>
          <span className="hover:text-[#023380] cursor-pointer transition-colors text-[#0271f1]">Hollow-Core Slabs</span>
          <span className="hover:text-[#023380] cursor-pointer transition-colors text-[#0271f1]">Bridge Girders</span>
          <span className="hover:text-[#023380] cursor-pointer transition-colors text-[#0271f1]">Culvert Systems</span>
        </div>

      </div>
    </section>
  )
}

export default HeroEngineering;