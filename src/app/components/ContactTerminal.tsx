"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, Phone, Mail, Globe, Send, Server, 
  TerminalSquare, Building2, UserCircle 
} from 'lucide-react';

const globalNodes = {
  usa: [
    { region: "Northeast", address: "105 Maxess Road", city: "Melville, NY 11747", phone: "(631) 452-1111" },
    { region: "South", address: "850 NW Federal Hwy", city: "Stuart, FL 34994", phone: "(772) 297-0700" },
    { region: "Midwest", address: "2200 Hunt Street", city: "Detroit, MI 48207", phone: "(631) 452-1111" },
    { region: "Westcoast", address: "1824 Store St 2nd Floor", city: "Victoria, BC V8T 4R4 Canada", phone: "604 200 0616" }
  ],
  international: [
    { region: "Canada - East", address: "One Yonge Street", city: "Toronto, Ontario M5E 1R4", phone: "+1 (438) 805-9990" },
    { region: "Canada - West", address: "1824 Store St, 2nd Floor", city: "Victoria, BC V8T 4R4", phone: "(604) 200-0616" },
    { region: "Caribbean / LatAm", address: "Crypto Isle - Green Roofs", city: "1 E Bay St, Nassau", phone: "(242) 802-8000" }
  ]
};

export default function ContactTerminal() {
  const [formState, setFormState] = useState({
    name: '', company: '', email: '', phone: '', subject: '', message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      setErrorMessage("Please provide a valid email address.");
      return;
    }

    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitSuccess(true);
      setFormState({ name: '', company: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 6000);
    } catch (err: any) {
      setErrorMessage(err?.message || "Failed to transmit telemetry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full py-16 md:py-24 bg-white text-[#023380] overflow-hidden relative select-none">
      
      <div className="w-full px-6 md:px-16 lg:px-20 relative z-10">
        
        {/* TERMINAL HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 border-b border-[#023380]/10 pb-8">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0271f1]/10 text-[#0271f1] text-xs font-black tracking-[0.2em] uppercase border-l-2 border-[#0271f1]">
              <Server className="w-3.5 h-3.5" /> Direct Engineering Comms
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#023380] tracking-tighter leading-[0.9] uppercase">
              Initiate <span className="text-[#0271f1]">Contact.</span>
            </h2>
            <p className="text-[#023380] text-sm md:text-base font-semibold leading-relaxed">
              Connect directly with our engineering nodes across North America and International territories for immediate project telemetry.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 items-start">
          
          {/* LEFT PANEL: ACTIVE GLOBAL NODES (Spans 5 Columns) */}
          <div className="xl:col-span-5 space-y-8">
            
            {/* USA Nodes */}
            <div>
              <div className="flex items-center gap-2 border-b border-[#023380]/10 pb-3 mb-4">
                <Globe className="w-4 h-4 text-[#0271f1]" />
                <h3 className="font-mono text-xs font-black uppercase tracking-widest text-[#023380]">United States Hubs</h3>
              </div>
              <div className="space-y-3">
                {globalNodes.usa.map((node, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="group flex gap-4 p-4 bg-white border border-[#023380]/15 shadow-xs hover:border-[#0271f1] hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex flex-col items-center gap-1 mt-1">
                      <div className="w-2 h-2 rounded-full bg-[#0271f1]" />
                      <div className="w-px h-full bg-[#023380]/10 group-hover:bg-[#0271f1]/40 transition-colors" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <h4 className="text-sm font-black uppercase tracking-tight text-[#023380] group-hover:text-[#0271f1] transition-colors">
                        {node.region} Node
                      </h4>
                      <p className="font-mono text-[10px] text-[#023380] flex items-center gap-1.5 uppercase font-bold">
                        <MapPin className="w-3 h-3 text-[#0271f1]" /> {node.address}, {node.city}
                      </p>
                      <p className="font-mono text-[10px] text-[#023380] flex items-center gap-1.5 uppercase font-bold">
                        <Phone className="w-3 h-3 text-[#0271f1]" /> {node.phone}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* International Nodes */}
            <div>
              <div className="flex items-center gap-2 border-b border-[#023380]/10 pb-3 mb-4">
                <Globe className="w-4 h-4 text-[#0271f1]" />
                <h3 className="font-mono text-xs font-black uppercase tracking-widest text-[#023380]">International Hubs</h3>
              </div>
              <div className="space-y-3">
                {globalNodes.international.map((node, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (idx + 3) * 0.05 }}
                    className="group flex gap-4 p-4 bg-white border border-[#023380]/15 shadow-xs hover:border-[#0271f1] hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex flex-col items-center gap-1 mt-1">
                      <div className="w-2 h-2 rounded-full bg-[#0271f1]" />
                      <div className="w-px h-full bg-[#023380]/10 group-hover:bg-[#0271f1]/40 transition-colors" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <h4 className="text-sm font-black uppercase tracking-tight text-[#023380] group-hover:text-[#0271f1] transition-colors">
                        {node.region}
                      </h4>
                      <p className="font-mono text-[10px] text-[#023380] flex items-center gap-1.5 uppercase font-bold">
                        <MapPin className="w-3 h-3 text-[#0271f1]" /> {node.address}, {node.city}
                      </p>
                      <p className="font-mono text-[10px] text-[#023380] flex items-center gap-1.5 uppercase font-bold">
                        <Phone className="w-3 h-3 text-[#0271f1]" /> {node.phone}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT PANEL: TRANSMISSION FORM (Spans 7 Columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="xl:col-span-7 bg-white border border-[#023380]/20 p-6 md:p-10 shadow-sm relative"
          >
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#023380]/10">
              <h3 className="text-lg md:text-xl font-black uppercase tracking-tight text-[#023380]">
                Direct Project Inquiry Form
              </h3>
              <TerminalSquare className="w-6 h-6 text-[#0271f1]" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] font-black uppercase tracking-widest text-[#023380] flex items-center gap-1.5">
                    <UserCircle className="w-3.5 h-3.5 text-[#0271f1]" /> Contact Name
                  </label>
                  <input 
                    type="text" name="name" required
                    value={formState.name} onChange={handleChange}
                    placeholder="Enter Full Name"
                    className="w-full bg-white border border-[#023380]/20 p-3 text-sm text-[#023380] placeholder:text-[#023380]/40 focus:outline-none focus:border-[#0271f1] transition-all font-semibold shadow-xs"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] font-black uppercase tracking-widest text-[#023380] flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-[#0271f1]" /> Company / Organization
                  </label>
                  <input 
                    type="text" name="company"
                    value={formState.company} onChange={handleChange}
                    placeholder="Company Name"
                    className="w-full bg-white border border-[#023380]/20 p-3 text-sm text-[#023380] placeholder:text-[#023380]/40 focus:outline-none focus:border-[#0271f1] transition-all font-semibold shadow-xs"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] font-black uppercase tracking-widest text-[#023380] flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#0271f1]" /> Email Address
                  </label>
                  <input 
                    type="email" name="email" required
                    value={formState.email} onChange={handleChange}
                    placeholder="name@domain.com"
                    className="w-full bg-white border border-[#023380]/20 p-3 text-sm text-[#023380] placeholder:text-[#023380]/40 focus:outline-none focus:border-[#0271f1] transition-all font-semibold shadow-xs"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] font-black uppercase tracking-widest text-[#023380] flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#0271f1]" /> Phone Number
                  </label>
                  <input 
                    type="tel" name="phone"
                    value={formState.phone} onChange={handleChange}
                    placeholder="(XXX) XXX-XXXX"
                    className="w-full bg-white border border-[#023380]/20 p-3 text-sm text-[#023380] placeholder:text-[#023380]/40 focus:outline-none focus:border-[#0271f1] transition-all font-semibold shadow-xs"
                  />
                </div>
              </div>

              {/* Row 3 */}
              <div className="space-y-1.5">
                <label className="font-mono text-[10px] font-black uppercase tracking-widest text-[#023380] flex items-center gap-1.5">
                  <Server className="w-3.5 h-3.5 text-[#0271f1]" /> Service Requested
                </label>
                <select 
                  name="subject" required
                  value={formState.subject} onChange={handleChange}
                  className="w-full bg-white border border-[#023380]/20 p-3 text-sm text-[#023380] focus:outline-none focus:border-[#0271f1] transition-all font-semibold appearance-none cursor-pointer shadow-xs"
                >
                  <option value="" className="bg-white text-[#023380]">Select Inquiry Type...</option>
                  <option value="engineering" className="bg-white text-[#023380]">Precast Engineering & Shop Drawings</option>
                  <option value="culverts" className="bg-white text-[#023380]">Box Culvert Calculations & ASTM C1577</option>
                  <option value="trenching" className="bg-white text-[#023380]">Trenching Systems & Grate Submittals</option>
                  <option value="retaining" className="bg-white text-[#023380]">Retaining Wall Engineering</option>
                  <option value="molds" className="bg-white text-[#023380]">Steel Molds & Formwork Tooling</option>
                  <option value="other" className="bg-white text-[#023380]">General Inquiry / Hourly PE Consultation</option>
                </select>
              </div>

              {/* Row 4 */}
              <div className="space-y-1.5">
                <label className="font-mono text-[10px] font-black uppercase tracking-widest text-[#023380] flex items-center gap-1.5">
                  <TerminalSquare className="w-3.5 h-3.5 text-[#0271f1]" /> Project Details & Specifications
                </label>
                <textarea 
                  name="message" required rows={4}
                  value={formState.message} onChange={handleChange}
                  placeholder="Describe your structure dimensions, project location, DOT requirements, or timeline..."
                  className="w-full bg-white border border-[#023380]/20 p-3 text-sm text-[#023380] placeholder:text-[#023380]/40 focus:outline-none focus:border-[#0271f1] transition-all font-semibold resize-none shadow-xs"
                />
              </div>

              {errorMessage && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs font-bold flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full animate-ping" />
                  {errorMessage}
                </div>
              )}

              {submitSuccess && (
                <div className="p-4 bg-emerald-50 border border-emerald-400 text-emerald-800 text-xs font-black uppercase tracking-wider flex items-center justify-between shadow-xs">
                  <span>Inquiry Transmitted Successfully &bull; PE Review Initiated</span>
                  <span className="font-mono text-[10px] text-emerald-600">CONFIRMED</span>
                </div>
              )}

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#023380] hover:bg-[#0271f1] text-white flex items-center justify-center gap-3 py-4 text-xs font-mono font-black tracking-widest uppercase transition-all shadow-md cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? "Transmitting..." : "Submit Engineering Inquiry"}</span>
                <Send className="w-4 h-4" />
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}