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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none border-l-4 border-[#1B79EE] bg-[#1B79EE]/5 text-[#1B79EE] text-[11px] font-black tracking-[0.3em] uppercase mb-4">
            <span className="w-2 h-2 bg-[#1B79EE] animate-ping" />
            Precast Engineering Group
          </div>

          {/* THE NEW HEADLINE */}
          <h1 className="text-3xl md:text-6xl font-black tracking-tighter text-[#004aad] leading-[0.9] uppercase">
            THE FUTURE OF <br />
            <span style={{ WebkitTextStroke: "1.5px #1B79EE", color: "transparent" }}>PRECAST ENGINEERING.</span>
          </h1>

          {/* THE UPDATED TEXT: Typo fixed in "Futuristic" */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium italic"
          >
            "From conception to execution, the Futuristic highway of  <span className="text-[#004aad] font-bold">Precast Engineering</span>, <span className="text-[#004aad] font-bold">Advanced Technologies</span> & beyond."
          </motion.p>
        </motion.div>

        {/* 3. THE SEARCH ENGINE: Brutalist shadow and scaling */}
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="w-full max-w-4xl flex items-center gap-0 bg-white border-[3px] border-[#004aad] rounded-none overflow-hidden shadow-[10px_10px_0px_-5px_rgba(0,74,173,0.05)]"
        >
          <div className="pl-4">
            <Search className="w-5 h-5 text-[#1B79EE]" />
          </div>
          <Input
            type="text"
            placeholder="Search structural precast, or technical specs..."
            className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-base py-6 placeholder:text-slate-300 font-medium"
          />
          <Button className="rounded-none h-14 px-8 bg-[#004aad] hover:bg-[#1B79EE] text-white font-black transition-all text-sm tracking-widest">
            INITIALIZE SEARCH
          </Button>
        </motion.div>
        
        {/* 4. POPULAR TAGS: Technical styling */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-[10px] font-black text-[#004aad] uppercase tracking-[0.2em]">
          <span className="hover:text-[#1B79EE] cursor-pointer transition-colors">Popular_Nodes:</span>
          <span className="hover:text-[#004aad] cursor-pointer transition-colors text-slate-500">Wall Panels</span>
          <span className="hover:text-[#004aad] cursor-pointer transition-colors text-slate-500">Hollow-Core Slabs</span>
          <span className="hover:text-[#004aad] cursor-pointer transition-colors text-slate-500">Bridge Girders</span>
          <span className="hover:text-[#004aad] cursor-pointer transition-colors text-slate-500">Culvert Systems</span>
        </div>

      </div>
    </section>
  )
}

export default HeroEngineering;