import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Volume2, ArrowRight } from 'lucide-react';

const podcastEpisodes = [
  { id: 151, title: 'Modular Precast Systems', detail: 'Architectural Versatility' },
  { id: 150, title: 'Structural Integrity', detail: 'Bridge and Deck Engineering' },
  { id: 149, title: 'Sustainability in Concrete', detail: 'Carbon-Neutral Precast' },
  { id: 148, title: 'Rapid Deployment', detail: 'Industrial Logistics' },
];

export const BusinessPodcastSection = () => {
  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-2">
      
      {/* LEFT: BPM Solutions & Testimonial */}
      <div className="bg-white p-8 md:p-16 flex flex-col justify-center">
        <div className="max-w-xl space-y-6">
          <h2 className="text-xl font-bold text-[#004aad] tracking-tight">
            Solutions for BPM's
          </h2>
          <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
            <p className="font-semibold text-slate-800">Want to be seen when and where your audience is searching?</p>
            <p>Don’t miss out on the opportunity to be considered at the beginning stages of product selection. Find out how PEG can augment your outreach, even before architects, engineers, and specifiers are ready to connect you directly.</p>
            <p>Don’t take our word for it, see what some of our happy customers have to say:</p>
          </div>

          {/* Light Blue Testimonial Box */}
          <div className="bg-[#1B79EE]/20 p-8 border-l-4 border-[#1B79EE] mt-8">
            <p className="italic text-[#004aad] font-medium mb-4">
              "Specifiers rely on PEG as a trusted resource, and being present there ensures our products are discovered at the right time in their design process... Maintaining a steady presence on PEG builds familiarity and trust, and ultimately helps turn early interest into specification."
            </p>
            <p className="text-sm font-bold text-slate-700">Trish B, Sales Manager at Fire Trol Fireproof</p>
            <Button variant="outline" className="mt-6 border-[#004aad] text-[#004aad] hover:bg-[#004aad] hover:text-white rounded-none uppercase font-bold tracking-widest">
              More Testimonials <ArrowRight className="ml-2 w-3 h-3" />
            </Button>
          </div>

          <Button className="w-full md:w-auto bg-[#004aad] hover:bg-[#004aad] text-white rounded-none uppercase font-bold tracking-tighter mt-8">
            Discover all the benefits of PEG
          </Button>
        </div>
      </div>

      {/* RIGHT: Podcast Sidebar */}
      <div className="bg-[#004aad] p-8 md:p-16 text-white relative overflow-hidden">
        {/* Decorative architectural background element */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/building-bg.jpg')] bg-cover bg-center"></div>
        
        <div className="relative z-10 max-w-xl">
          <h2 className="text-2xl font-light italic mb-2">Tune into <span className="font-bold not-italic">Detailed</span></h2>
          <p className="text-blue-100/70 text-sm mb-12 max-w-md">
            Every building has a story. Our popular podcast introduces you to some of the most complex, interesting, and unusual ones around.
          </p>

          <div className="space-y-0">
            {podcastEpisodes.map((ep) => (
              <Link 
                key={ep.id} 
                href="#" 
                className="group flex items-center justify-between py-6 border-b border-white/10 hover:bg-white/5 px-4 -mx-4 transition-colors"
              >
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-blue-300 uppercase tracking-widest mb-1">#{ep.id} {ep.title}</span>
                  <span className="text-sm font-medium text-white/90 group-hover:text-white">{ep.detail}</span>
                </div>
                <Volume2 className="w-5 h-5 text-blue-300 group-hover:scale-110 transition-transform" />
              </Link>
            ))}
          </div>

          <Button variant="outline" className="mt-12 border-white text-white hover:bg-white hover:text-[#004aad] rounded-none uppercase font-bold tracking-widest bg-transparent">
            More Episodes <ArrowRight className="ml-2 w-3 h-3" />
          </Button>
        </div>
      </div>
      
    </section>
  );
};