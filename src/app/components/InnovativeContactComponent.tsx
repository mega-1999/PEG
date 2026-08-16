"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Send, 
  Terminal, 
  Cpu, 
  Factory, 
  Truck, 
  ShieldCheck, 
  ArrowRight,
  Activity
} from "lucide-react";

const routingNodes = [
  {
    id: "NODE_CAD_01",
    title: "Engineering & CAD",
    subtitle: "Shop Drawings & Parametrics",
    icon: <Cpu className="w-5 h-5" />,
    eta: "< 4 Hour Sync Time"
  },
  {
    id: "NODE_FAB_02",
    title: "Production & Molds",
    subtitle: "Shop Floor & Batching Telemetry",
    icon: <Factory className="w-5 h-5" />,
    eta: "< 12 Hour Queue Allocation"
  },
  {
    id: "NODE_LOG_03",
    title: "Logistical Grid",
    subtitle: "Just-In-Time Delivery Storage",
    icon: <Truck className="w-5 h-5" />,
    eta: "Real-Time Tracking Dispatch"
  }
];

export default function InnovativeContactComponent() {
  const [selectedNode, setSelectedNode] = useState(routingNodes[0].id);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const activeNodeData = routingNodes.find(n => n.id === selectedNode);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate industrial protocol handshake
    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);
    }, 1500);
  };

  return (
    <section className="w-full bg-white text-[#004aad] py-24 px-6 md:px-10 lg:px-20 relative overflow-hidden font-sans">
      
      {/* TECHNICAL MATHEMATICAL SYSTEM GRID */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#004aad_1px,transparent_1px),linear-gradient(to_bottom,#004aad_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10 items-stretch">
        
        {/* LEFT COLUMN: THE SWITCHBOARD INTERFACE (Spans 5 Columns) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-mono text-[10px] font-black uppercase tracking-[0.4em] text-[#1B79EE]">
              <span className="w-2 h-2 bg-[#1B79EE] animate-ping" /> Comms Protocol v4.26
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-none text-[#004aad]">
              Initialize <br />
              <span className="text-[#1B79EE]">Connection.</span>
            </h2>
            <p className="text-[#004aad]/70 text-sm md:text-base font-medium leading-relaxed max-w-md">
              Route your structural criteria directly into our parametric workflow queue. Select a pipeline node to initialize the diagnostic handshake.
            </p>
          </div>

          {/* THE NODE SELECTOR SWITCHBOARD */}
          <div className="space-y-4 w-full max-w-md">
 
            
            {routingNodes.map((node) => {
              const isActive = selectedNode === node.id;
              return (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => setSelectedNode(node.id)}
                  className={`w-full p-5 border text-left flex items-center justify-between transition-all duration-300 relative overflow-hidden group
                    ${isActive 
                      ? "bg-[#004aad] border-[#004aad] text-white shadow-xl" 
                      : "bg-white border-[#004aad]/10 hover:border-[#1B79EE]/40 hover:bg-[#1B79EE]/5"
                    }
                  `}
                >
                  <div className="flex gap-4 items-center relative z-10">
                    <div className={`p-3 border transition-colors duration-300
                      ${isActive ? "bg-[#1B79EE] border-transparent text-white" : "bg-[#004aad]/5 border-[#004aad]/10 text-[#004aad] group-hover:text-[#1B79EE]"}
                    `}>
                      {node.icon}
                    </div>
                    <div>
                      <h4 className="font-black text-sm uppercase tracking-tight">{node.title}</h4>
                      <p className={`text-[10px] font-medium tracking-tight ${isActive ? "text-white/60" : "text-[#004aad]/50"}`}>
                        {node.subtitle}
                      </p>
                    </div>
                  </div>

                  <ArrowRight className={`w-4 h-4 transition-all duration-300 relative z-10
                    ${isActive ? "text-[#1B79EE] translate-x-0" : "text-[#004aad]/20 group-hover:translate-x-1 group-hover:text-[#1B79EE]"}
                  `} />

                  {/* High-Tech Active Bar Indicator */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeIndicator"
                      className="absolute left-0 top-0 h-full w-1.5 bg-[#1B79EE]"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* LIVE DATA READOUT TELEMETRY BOX */}
          <div className="bg-[#004aad]/5 border border-[#004aad]/10 p-6 w-full max-w-md h-28 flex flex-col justify-between relative overflow-hidden rounded-xs">
             <Terminal className="absolute top-4 right-4 w-4 h-4 text-[#004aad]/20" />
             <div className="flex items-center gap-2">
                <Activity className="w-3 h-3 text-[#1B79EE] animate-pulse" />
                <span className="font-mono text-[8px] font-black text-[#1B79EE] tracking-widest uppercase">Target Pipeline Locked</span>
             </div>
             <AnimatePresence mode="wait">
               <motion.div
                 key={selectedNode}
                 initial={{ opacity: 0, x: -10 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: 10 }}
                 className="font-mono text-[11px] text-[#004aad] font-bold uppercase tracking-wide"
               > 
               </motion.div>
             </AnimatePresence>
          </div>

        </div>

        {/* RIGHT COLUMN: THE BRUTALIST DISPATCH FORM (Spans 7 Columns) */}
        <div className="lg:col-span-7 bg-white border-2 border-[#004aad] shadow-2xl relative p-8 md:p-12 flex flex-col justify-center min-h-[550px]">
          
          {/* Accent Matrix Corners */}
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#1B79EE] m-3" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#1B79EE] m-3" />

          <AnimatePresence mode="wait">
            {!formSubmitted ? (
              <motion.form
                key="contact-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6 flex-grow flex flex-col justify-center"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-mono text-[9px] font-black uppercase tracking-widest text-[#004aad]/50">Authorized Engineer Name *</label>
                    <input 
                      type="text" 
                      required 
                      className="w-full bg-[#004aad]/5 border border-[#004aad]/10 p-4 font-sans text-sm font-semibold text-[#004aad] focus:outline-none focus:border-[#1B79EE] transition-colors rounded-xs" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-[9px] font-black uppercase tracking-widest text-[#004aad]/50">Corporate Secure Email *</label>
                    <input 
                      type="email" 
                      required 
                      className="w-full bg-[#004aad]/5 border border-[#004aad]/10 p-4 font-sans text-sm font-semibold text-[#004aad] focus:outline-none focus:border-[#1B79EE] transition-colors rounded-xs" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-mono text-[9px] font-black uppercase tracking-widest text-[#004aad]/50">Project Location / Coordinates</label>
                    <input 
                      type="text" 
                      className="w-full bg-[#004aad]/5 border border-[#004aad]/10 p-4 font-sans text-sm font-semibold text-[#004aad] focus:outline-none focus:border-[#1B79EE] transition-colors rounded-xs" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-[9px] font-black uppercase tracking-widest text-[#004aad]/50">Linear Footage Estimate</label>
                    <input 
                      type="text" 
                      placeholder="e.g., 10,000 LF"
                      className="w-full bg-[#004aad]/5 border border-[#004aad]/10 p-4 font-sans text-sm font-semibold text-[#004aad] placeholder:text-[#004aad]/30 focus:outline-none focus:border-[#1B79EE] transition-colors rounded-xs" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-[9px] font-black uppercase tracking-widest text-[#004aad]/50">Structural Criteria / Project Parameters *</label>
                  <textarea 
                    rows={5} 
                    required
                    placeholder="Provide depth profiles, vehicle loading expectations (e.g. H-20), or specialized parametric requirements..."
                    className="w-full bg-[#004aad]/5 border border-[#004aad]/10 p-4 font-sans text-sm font-semibold text-[#004aad] placeholder:text-[#004aad]/30 focus:outline-none focus:border-[#1B79EE] transition-colors resize-none rounded-xs"
                  />
                </div>

                {/* HIGH-DENSITY PROTOCOL DISPATCH BUTTON */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-12 bg-[#004aad] hover:bg-[#1B79EE] text-white font-mono text-[11px] font-black uppercase tracking-[0.3em] shadow-xl transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden group mt-4 disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      <span>Transmitting Packet...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      <span>Dispatch Parameters Into Queue</span>
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              /* EXTRAORDINARY SUCCESS STATE TRANSLATION */
              <motion.div
                key="success-message"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-6 py-12 flex flex-col items-center justify-center"
              >
                <div className="w-16 h-16 bg-[#1B79EE]/10 border border-[#1B79EE] text-[#1B79EE] flex items-center justify-center rounded-full mb-2 animate-bounce">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tighter text-[#004aad]">
                  Packet Transmitted <br />
                  <span className="text-[#1B79EE]">Successfully.</span>
                </h3>
                <p className="text-[#004aad]/70 text-sm font-medium max-w-sm mx-auto leading-relaxed">
                  Your project configuration has been routed into line node <strong className="text-[#004aad]">{selectedNode}</strong>. The system has initialized diagnostic sorting.
                </p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="border border-[#004aad]/20 hover:border-[#1B79EE] text-[#004aad] hover:text-[#1B79EE] font-mono text-[10px] font-black uppercase tracking-widest px-8 py-3 transition-colors mt-4"
                >
                  Initialize New Session
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}