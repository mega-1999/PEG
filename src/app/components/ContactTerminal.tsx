"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send,
  Cpu,
  Factory,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Mail,
  Phone,
  ArrowRight,
  Boxes,
  FileCheck,
  Layers
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const serviceNodes = [
  {
    id: "NODE_CAD",
    title: "Structural Engineering & CAD",
    subtitle: "Shop Drawings, FEA Modeling & PE Stamping",
    icon: <Cpu className="w-5 h-5" />,
    eta: "< 4 Hour Sync SLA"
  },
  {
    id: "NODE_MOLD",
    title: "Molds & Formwork Systems",
    subtitle: "Custom Steel Molds & Magnetic Shuttering",
    icon: <Factory className="w-5 h-5" />,
    eta: "Direct Plant Logistics"
  },
  {
    id: "NODE_CIVIL",
    title: "Civil & Infrastructure Products",
    subtitle: "Trench Channels, Box Culverts & Vaults",
    icon: <Boxes className="w-5 h-5" />,
    eta: "Standardized Spec Packages"
  },
  {
    id: "NODE_CONSULT",
    title: "General Technical Advisory",
    subtitle: "Feasibility Consulting & Retainers",
    icon: <FileCheck className="w-5 h-5" />,
    eta: "Priority Senior PE Queue"
  }
];

export default function ContactTerminal() {
  const [selectedNode, setSelectedNode] = useState(serviceNodes[0].id);
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: 'Structural Calculations & PE Stamp',
    timeline: 'Immediate (< 48 Hours)',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      setErrorMessage("Please enter a valid business email address.");
      return;
    }

    if (!formState.name.trim() || !formState.message.trim()) {
      setErrorMessage("Please complete all required fields before submitting.");
      return;
    }

    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1200));
      setSubmitSuccess(true);
      setFormState({
        name: '',
        company: '',
        email: '',
        phone: '',
        projectType: 'Structural Calculations & PE Stamp',
        timeline: 'Immediate (< 48 Hours)',
        message: ''
      });
      setTimeout(() => setSubmitSuccess(false), 7000);
    } catch (err: any) {
      setErrorMessage(err?.message || "Transmission failed. Please try again or reach out directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full bg-white text-[#002f7a] py-2 sm:py-4 md:py-6 relative overflow-hidden select-none border-t border-[#002f7a]/10">

      {/* CAD WATERMARK BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#002f7a 1.5px, transparent 1.5px), linear-gradient(to right, #002f7a 0.5px, transparent 0.5px), linear-gradient(to bottom, #002f7a 0.5px, transparent 0.5px)`,
          backgroundSize: '40px 40px, 200px 200px, 200px 200px'
        }}
      />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 relative z-10">

        {/* 1. SECTION HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 md:mb-8 gap-6 border-b border-[#002f7a]/10 pb-4 md:pb-6">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#006def]/10 text-[#006def] text-xs font-black tracking-[0.2em] uppercase border-l-2 border-[#006def]">
              <Layers className="w-3.5 h-3.5" /> Direct Engineering Telemetry
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#002f7a] tracking-tighter leading-[0.9] uppercase">
              Initiate <span className="text-[#006def]">Proposal & Comms.</span>
            </h2>
            <p className="text-[#002f7a] text-sm md:text-base font-semibold leading-relaxed">
              Connect directly with our precast engineering team for fast submittal reviews, parametric modeling, production formwork, and 50-state PE/SE stamped packages.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-blue-50 px-4 py-2 border border-[#006def]/20 flex items-center gap-2 text-xs font-mono font-bold text-[#002f7a]">
              <Clock className="w-4 h-4 text-[#006def]" />
              <span>Average Response: &lt; 4 Hours</span>
            </div>
          </div>
        </div>

        {/* 2. MAIN 2-COLUMN SPLIT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">

          {/* LEFT COLUMN: SERVICE ROUTING & TRUST METRICS (Spans 5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">

            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#002f7a]/10 pb-2">
                <span className="font-mono text-xs font-black uppercase tracking-widest text-[#002f7a]">
                  Select Project Discipline
                </span>
                <span className="text-[10px] font-mono font-bold text-[#006def]">
                  Instant Routing
                </span>
              </div>

              {/* Service Pipeline Switchboard */}
              <div className="space-y-3">
                {serviceNodes.map((node) => {
                  const isActive = selectedNode === node.id;
                  return (
                    <button
                      key={node.id}
                      type="button"
                      onClick={() => {
                        setSelectedNode(node.id);
                        if (node.id === "NODE_CAD") setFormState(prev => ({ ...prev, projectType: "Structural Calculations & PE Stamp" }));
                        if (node.id === "NODE_MOLD") setFormState(prev => ({ ...prev, projectType: "Formwork & Mold Engineering" }));
                        if (node.id === "NODE_CIVIL") setFormState(prev => ({ ...prev, projectType: "Trenching & Box Culvert Products" }));
                        if (node.id === "NODE_CONSULT") setFormState(prev => ({ ...prev, projectType: "Senior PE Technical Advisory" }));
                      }}
                      className={`w-full p-4 border text-left flex items-center justify-between transition-all duration-200 relative group cursor-pointer ${
                        isActive
                          ? "bg-[#002f7a] border-[#002f7a] text-white shadow-md"
                          : "bg-white border-[#002f7a]/15 hover:border-[#006def] hover:bg-blue-50/50"
                      }`}
                    >
                      <div className="flex gap-3.5 items-center relative z-10">
                        <div className={`p-2.5 border transition-colors duration-200 shrink-0 ${
                          isActive
                            ? "bg-[#006def] border-transparent text-white"
                            : "bg-blue-50 border-[#006def]/20 text-[#002f7a] group-hover:text-[#006def]"
                        }`}>
                          {node.icon}
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="font-black text-xs md:text-sm uppercase tracking-tight truncate">
                            {node.title}
                          </h4>
                          <p className={`text-[10px] font-semibold truncate ${
                            isActive ? "text-blue-100" : "text-[#006def]"
                          }`}>
                            {node.subtitle}
                          </p>
                        </div>
                      </div>

                      <ArrowRight className={`w-4 h-4 transition-transform shrink-0 relative z-10 ${
                        isActive ? "text-white" : "text-[#006def] group-hover:translate-x-1"
                      }`} />

                      {isActive && (
                        <div className="absolute left-0 top-0 h-full w-1.5 bg-[#006def]" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Direct Comms & Certification Highlights */}
            <div className="space-y-3 pt-2">
              <div className="p-4 bg-blue-50/70 border border-[#006def]/20 space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-mono font-black text-[#002f7a] uppercase">
                  <ShieldCheck className="w-4 h-4 text-[#006def]" />
                  <span>Licensed Engineering Guarantee</span>
                </div>
                <p className="text-xs text-[#002f7a] font-semibold leading-relaxed">
                  50-State & Canadian Provincial licensed PE/SE stamps with strict non-disclosure security and zero submittal regressions.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 font-mono text-[11px] font-bold">
                <div className="p-3 bg-white border border-[#002f7a]/15 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#006def] shrink-0" />
                  <span className="truncate">info@peg-usa.com</span>
                </div>
                <div className="p-3 bg-white border border-[#002f7a]/15 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#006def] shrink-0" />
                  <span className="truncate">(631) 452-1111</span>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: THE COMPREHENSIVE PROPOSAL FORM (Spans 7 Columns) */}
          <div className="lg:col-span-7 bg-white border border-[#002f7a]/20 shadow-lg p-6 md:p-8 flex flex-col justify-between relative">

            <AnimatePresence mode="wait">
              {submitSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-16 flex flex-col items-center justify-center text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-blue-50 text-[#006def] border border-[#006def]/30 flex items-center justify-center shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-[#002f7a] uppercase tracking-tight">
                    Proposal Dispatch Received
                  </h3>
                  <p className="text-sm font-semibold text-[#002f7a]/80 max-w-md leading-relaxed">
                    Your criteria has been logged into our engineering dispatch queue. A licensed precast engineer will contact you within 4 hours.
                  </p>
                  <Button
                    onClick={() => setSubmitSuccess(false)}
                    className="mt-4 bg-[#002f7a] hover:bg-[#006def] text-white text-xs font-black uppercase tracking-wider px-6 py-2.5 rounded-none"
                  >
                    Send Another Transmission
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">

                  <div className="flex items-center justify-between border-b border-[#002f7a]/10 pb-3 mb-2">
                    <div>
                      <h3 className="text-lg font-black text-[#002f7a] uppercase tracking-tight">
                        Project Diagnostic Form
                      </h3>
                      <p className="text-xs text-[#006def] font-bold">
                        Transmit CAD models, drawing requests, or structural specs
                      </p>
                    </div>
                    <span className="text-[10px] font-mono font-black uppercase px-2.5 py-1 bg-[#002f7a] text-white">
                      SSL 256-Bit
                    </span>
                  </div>

                  {errorMessage && (
                    <div className="p-3 bg-red-50 border-l-4 border-red-500 text-red-700 text-xs font-bold">
                      {errorMessage}
                    </div>
                  )}

                  {/* Row 1: Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[11px] font-mono font-bold uppercase text-[#002f7a] block">
                        Full Name <span className="text-[#006def]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="e.g. David Vance, PE"
                        className="w-full px-3.5 py-2.5 bg-white border border-[#002f7a]/20 text-[#002f7a] text-xs font-semibold focus:outline-none focus:border-[#006def] focus:ring-1 focus:ring-[#006def]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-mono font-bold uppercase text-[#002f7a] block">
                        Organization / Plant Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        placeholder="e.g. Apex Precast Solutions"
                        className="w-full px-3.5 py-2.5 bg-white border border-[#002f7a]/20 text-[#002f7a] text-xs font-semibold focus:outline-none focus:border-[#006def] focus:ring-1 focus:ring-[#006def]"
                      />
                    </div>
                  </div>

                  {/* Row 2: Business Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[11px] font-mono font-bold uppercase text-[#002f7a] block">
                        Corporate Email <span className="text-[#006def]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="e.g. dvance@company.com"
                        className="w-full px-3.5 py-2.5 bg-white border border-[#002f7a]/20 text-[#002f7a] text-xs font-semibold focus:outline-none focus:border-[#006def] focus:ring-1 focus:ring-[#006def]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-mono font-bold uppercase text-[#002f7a] block">
                        Direct Phone / Extension
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder="e.g. (555) 019-2834"
                        className="w-full px-3.5 py-2.5 bg-white border border-[#002f7a]/20 text-[#002f7a] text-xs font-semibold focus:outline-none focus:border-[#006def] focus:ring-1 focus:ring-[#006def]"
                      />
                    </div>
                  </div>

                  {/* Row 3: Project Type & Turnaround Urgency */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[11px] font-mono font-bold uppercase text-[#002f7a] block">
                        Deliverable Category
                      </label>
                      <select
                        name="projectType"
                        value={formState.projectType}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#002f7a]/20 text-[#002f7a] text-xs font-semibold focus:outline-none focus:border-[#006def] focus:ring-1 focus:ring-[#006def]"
                      >
                        <option value="Structural Calculations & PE Stamp">Structural Calculations & PE Stamp</option>
                        <option value="Shop Drawings & 2D/3D CAD">Shop Drawings & 2D/3D CAD</option>
                        <option value="Formwork & Mold Engineering">Formwork & Mold Engineering</option>
                        <option value="Trenching & Box Culvert Products">Trenching & Box Culvert Products</option>
                        <option value="Utility Vaults & Subterranean Elements">Utility Vaults & Subterranean Elements</option>
                        <option value="Senior PE Technical Advisory">Senior PE Technical Advisory / Feasibility</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-mono font-bold uppercase text-[#002f7a] block">
                        Timeline / Urgency
                      </label>
                      <select
                        name="timeline"
                        value={formState.timeline}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#002f7a]/20 text-[#002f7a] text-xs font-semibold focus:outline-none focus:border-[#006def] focus:ring-1 focus:ring-[#006def]"
                      >
                        <option value="Immediate (< 48 Hours)">Immediate (&lt; 48 Hours)</option>
                        <option value="Standard Production (1-2 Weeks)">Standard Production (1-2 Weeks)</option>
                        <option value="Future Bid / Feasibility Study">Future Bid / Feasibility Study</option>
                        <option value="Ongoing Hourly Engineering Retainer">Ongoing Hourly Engineering Retainer</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Scope & Message Details */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono font-bold uppercase text-[#002f7a] block">
                      Scope Overview & Dimensions / Project Criteria <span className="text-[#006def]">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      required
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Outline element specifications, design loads (AASHTO/ASTM), state jurisdiction, or drafting deliverables required..."
                      className="w-full px-3.5 py-2.5 bg-white border border-[#002f7a]/20 text-[#002f7a] text-xs font-semibold focus:outline-none focus:border-[#006def] focus:ring-1 focus:ring-[#006def] resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#006def] hover:bg-[#002f7a] text-white h-12 rounded-none font-black text-xs uppercase tracking-widest transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Routing Telemetry to Engineering Queue...</span>
                        </>
                      ) : (
                        <>
                          <span>Transmit Proposal Request</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </div>

                </form>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>

    </section>
  );
}