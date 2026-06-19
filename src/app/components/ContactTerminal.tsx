"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, Phone, Mail, Globe, Send, Server, 
  TerminalSquare, Building2, UserCircle 
} from 'lucide-react';

// Using your exact corrected location data
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Transmitting Data:", formState);
    // Add your form submission logic here
  };

  return (
    <section className="w-full py-32 bg-[#004aad] text-white overflow-hidden relative font-sans">
      
      {/* Background Tech Grid */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`, backgroundSize: '50px 50px' }}
      />

      <div className="w-full max-w-[1700px] mx-auto px-10 md:px-20 relative z-10">
        
        {/* TERMINAL HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
          <div className="space-y-4 max-w-4xl">
            <div className="flex items-center gap-3 text-white font-mono text-[10px] font-black uppercase tracking-[0.5em]">
              <Server className="w-4 h-4 text-[#1B79EE] animate-pulse" /> Global Communications Hub
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] uppercase">
              INITIATE <br />
              <span className="text-[#1B79EE]">
                CONTACT.
              </span>
            </h2>
          </div>
          <div className="hidden xl:block text-right max-w-sm">
            <p className="text-white/80 font-mono text-[9px] uppercase tracking-widest leading-relaxed">
              Connect directly with our engineering nodes across North America and International territories for immediate project telemetry.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 items-start">
          
          {/* LEFT PANEL: ACTIVE GLOBAL NODES (Spans 5 Columns) */}
          <div className="xl:col-span-5 space-y-12">
            
            {/* USA Nodes */}
            <div>
              <div className="flex items-center gap-3 border-b border-white/20 pb-4 mb-6">
                <Globe className="w-5 h-5 text-[#1B79EE]" />
                <h3 className="font-mono text-sm font-black uppercase tracking-widest text-white">United States Hubs</h3>
              </div>
              <div className="space-y-4">
                {globalNodes.usa.map((node, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="group flex gap-6 p-6 bg-white border border-[#004aad]/10 shadow-lg hover:border-[#1B79EE] hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="flex flex-col items-center gap-2 mt-1">
                      <div className="w-2 h-2 rounded-full bg-[#1B79EE] group-hover:animate-ping absolute" />
                      <div className="w-2 h-2 rounded-full bg-[#1B79EE] relative z-10" />
                      <div className="w-px h-full bg-[#004aad]/10 group-hover:bg-[#1B79EE]/50 transition-colors" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <h4 className="text-lg font-black uppercase tracking-tighter text-[#004aad] group-hover:text-[#1B79EE] transition-colors">
                        {node.region} Node
                      </h4>
                      <div className="space-y-1.5">
                        <p className="font-mono text-[10px] text-[#004aad]/70 flex items-center gap-2 uppercase tracking-wider font-bold">
                          <MapPin className="w-3 h-3 text-[#1B79EE]" /> {node.address}, {node.city}
                        </p>
                        <p className="font-mono text-[10px] text-[#004aad]/70 flex items-center gap-2 uppercase tracking-wider font-bold">
                          <Phone className="w-3 h-3 text-[#1B79EE]" /> {node.phone}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* International Nodes */}
            <div>
              <div className="flex items-center gap-3 border-b border-white/20 pb-4 mb-6">
                <Globe className="w-5 h-5 text-[#1B79EE]" />
                <h3 className="font-mono text-sm font-black uppercase tracking-widest text-white">International Hubs</h3>
              </div>
              <div className="space-y-4">
                {globalNodes.international.map((node, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (idx + 3) * 0.1 }}
                    className="group flex gap-6 p-6 bg-white border border-[#004aad]/10 shadow-lg hover:border-[#1B79EE] hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="flex flex-col items-center gap-2 mt-1">
                      <div className="w-2 h-2 rounded-full bg-[#1B79EE] relative z-10 transition-colors" />
                      <div className="w-px h-full bg-[#004aad]/10 group-hover:bg-[#1B79EE]/50 transition-colors" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <h4 className="text-lg font-black uppercase tracking-tighter text-[#004aad] group-hover:text-[#1B79EE] transition-colors">
                        {node.region}
                      </h4>
                      <div className="space-y-1.5">
                        <p className="font-mono text-[10px] text-[#004aad]/70 flex items-center gap-2 uppercase tracking-wider font-bold">
                          <MapPin className="w-3 h-3 text-[#1B79EE]" /> {node.address}, {node.city}
                        </p>
                        <p className="font-mono text-[10px] text-[#004aad]/70 flex items-center gap-2 uppercase tracking-wider font-bold">
                          <Phone className="w-3 h-3 text-[#1B79EE]" /> {node.phone}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT PANEL: TRANSMISSION FORM (Spans 7 Columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="xl:col-span-7 bg-white border-2 border-[#004aad]/10 p-10 md:p-14 shadow-2xl relative"
          >
            {/* Form Decorative Accents */}
            <div className="absolute top-0 left-0 w-full h-1 bg-[#1B79EE]" />
            <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-[#1B79EE]" />
            <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-[#1B79EE]" />

            <div className="flex items-center justify-between mb-10">
              <h3 className="text-3xl font-black uppercase tracking-tighter text-[#004aad]">Project Telemetry Link</h3>
              <TerminalSquare className="w-8 h-8 text-[#004aad]/20" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Row 1: Identity */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#004aad]/50 flex items-center gap-2">
                    <UserCircle className="w-3 h-3 text-[#1B79EE]" /> Operative Name
                  </label>
                  <input 
                    type="text" name="name" required
                    value={formState.name} onChange={handleChange}
                    placeholder="Enter Full Name"
                    className="w-full bg-[#004aad]/5 border-b-2 border-[#004aad]/10 px-4 py-3 text-[#004aad] placeholder:text-[#004aad]/30 focus:outline-none focus:border-[#1B79EE] focus:bg-[#004aad]/[0.02] transition-all font-semibold"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#004aad]/50 flex items-center gap-2">
                    <Building2 className="w-3 h-3 text-[#1B79EE]" /> Corporate Entity
                  </label>
                  <input 
                    type="text" name="company"
                    value={formState.company} onChange={handleChange}
                    placeholder="Organization or Firm"
                    className="w-full bg-[#004aad]/5 border-b-2 border-[#004aad]/10 px-4 py-3 text-[#004aad] placeholder:text-[#004aad]/30 focus:outline-none focus:border-[#1B79EE] focus:bg-[#004aad]/[0.02] transition-all font-semibold"
                  />
                </div>
              </div>

              {/* Row 2: Comms */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#004aad]/50 flex items-center gap-2">
                    <Mail className="w-3 h-3 text-[#1B79EE]" /> Comms Protocol (Email)
                  </label>
                  <input 
                    type="email" name="email" required
                    value={formState.email} onChange={handleChange}
                    placeholder="system@domain.com"
                    className="w-full bg-[#004aad]/5 border-b-2 border-[#004aad]/10 px-4 py-3 text-[#004aad] placeholder:text-[#004aad]/30 focus:outline-none focus:border-[#1B79EE] focus:bg-[#004aad]/[0.02] transition-all font-semibold"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#004aad]/50 flex items-center gap-2">
                    <Phone className="w-3 h-3 text-[#1B79EE]" /> Direct Telecom
                  </label>
                  <input 
                    type="tel" name="phone"
                    value={formState.phone} onChange={handleChange}
                    placeholder="(XXX) XXX-XXXX"
                    className="w-full bg-[#004aad]/5 border-b-2 border-[#004aad]/10 px-4 py-3 text-[#004aad] placeholder:text-[#004aad]/30 focus:outline-none focus:border-[#1B79EE] focus:bg-[#004aad]/[0.02] transition-all font-semibold"
                  />
                </div>
              </div>

              {/* Row 3: Subject Dropdown */}
              <div className="space-y-2">
                <label className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#004aad]/50 flex items-center gap-2">
                  <Server className="w-3 h-3 text-[#1B79EE]" /> Routing Directive
                </label>
                <select 
                  name="subject" required
                  value={formState.subject} onChange={handleChange}
                  className="w-full bg-[#004aad]/5 border-b-2 border-[#004aad]/10 px-4 py-3 text-[#004aad] focus:outline-none focus:border-[#1B79EE] focus:bg-[#004aad]/[0.02] transition-all font-semibold appearance-none cursor-pointer"
                >
                  <option value="" className="bg-white text-[#004aad]">Select Primary Inquiry...</option>
                  <option value="engineering" className="bg-white text-[#004aad]">Engineering & Drawings</option>
                  <option value="manufacturing" className="bg-white text-[#004aad]">Manufacturing Capabilities</option>
                  <option value="consulting" className="bg-white text-[#004aad]">Governmental Consulting</option>
                  <option value="other" className="bg-white text-[#004aad]">General Information / Other</option>
                </select>
              </div>

              {/* Row 4: Message */}
              <div className="space-y-2">
                <label className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#004aad]/50 flex items-center gap-2">
                  <TerminalSquare className="w-3 h-3 text-[#1B79EE]" /> Transmission Data (Project Specs)
                </label>
                <textarea 
                  name="message" required rows={5}
                  value={formState.message} onChange={handleChange}
                  placeholder="Detail your engineering requirements, constraints, and project parameters here..."
                  className="w-full bg-[#004aad]/5 border-b-2 border-[#004aad]/10 px-4 py-3 text-[#004aad] placeholder:text-[#004aad]/30 focus:outline-none focus:border-[#1B79EE] focus:bg-[#004aad]/[0.02] transition-all font-semibold resize-none"
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="w-full group relative bg-[#004aad] text-white py-5 flex items-center justify-center gap-3 overflow-hidden transition-all shadow-xl hover:shadow-[#1B79EE]/30 mt-6"
              >
                {/* Button Hover Fill */}
                <div className="absolute inset-0 bg-[#1B79EE] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />
                
                <span className="relative z-10 font-mono text-[12px] font-black tracking-[0.3em] uppercase">
                  Transmit Data
                </span>
                <Send className="relative z-10 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}