
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getAssetUrl } from '@/lib/utils';
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from '@hugeicons/core-free-icons';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';

const footerLinks = [
  {
    category: "Solutions",
    links: [
      { name: "CAD Drawings", href: "/#services" },
      { name: "State DOT Specs", href: "/#standards" },
      { name: "Precast Products", href: "/#products" },
      { name: "Technical Vault", href: "/#technical-vault" },
      { name: "Knowledge Hub", href: "/#resources" },
      { name: "Manufacturing Hub", href: "/#services" },
    ],
  },
  {
    category: "Insights",
    links: [
      { name: "Precast Engineering Blog", href: "/blog" },
      { name: "DOT Compliance Databank", href: "/#standards" },
      { name: "PEG Resources", href: "/#resources" },
      { name: "About PEG", href: "/#about" },
    ],
  },
  {
    category: "BPM Services",
    links: [
      { name: "Engineering Inquiries", href: "/#contact" },
      { name: "Admin Portal", href: "/admin" },
      { name: "Global Offices", href: "/#locations" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="relative w-full bg-[#023380] text-white overflow-hidden">
      {/* Geometric Background Overlay (Mirroring the ARCAT style) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/2 w-full h-full bg-gradient-to-br from-white/20 to-transparent skew-x-[-20deg] transform origin-top"></div>
      </div>

      <div className="w-full px-10 md:px-20 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left Side: Branding & Mission */}
          <div className="lg:col-span-5">
            <div className='bg-white flex justify-center w-48 p-3 rounded-sm shadow-lg'>
              <Image
                width={170}
                height={50}
                loading='lazy'
                src={getAssetUrl("/peg_logo.png")} // Professional PEG logo
                alt="PEG Logo"
                className="h-10 w-auto object-contain"
              />
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-serif leading-tight max-w-md">
                Your complete source for finding, selecting, detailing and specifying precast products.
              </h2>
              <p className="text-sm text-blue-100/60 font-medium">
                ©2026 Precast Engineering Group, Inc. All rights reserved.
                <br />
                Terms of Use and Privacy Policy are applicable to you.
              </p>
            </div>
          </div>

          {/* Right Side: Navigation & Socials */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* Social Icons - Outlined Box Style */}
            <div className="flex justify-start lg:justify-end gap-3 mb-12">
              <SocialIcon icon={<FaFacebook className="w-5 h-5" />} href="https://facebook.com" />
              <SocialIcon icon={<BsTwitterX className="w-5 h-5" />} href="https://x.com" />
              <SocialIcon icon={<FaYoutube className="w-5 h-5" />} href="https://youtube.com" />
              <SocialIcon icon={<FaInstagram className="w-5 h-5" />} href="https://instagram.com" />
              <SocialIcon icon={<FaLinkedinIn className="w-5 h-5" />} href="https://linkedin.com" />
            </div>

            {/* Link Columns */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {footerLinks.map((col) => (
                <div key={col.category} className="space-y-4">
                  <ul className="space-y-2">
                    {col.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-[13px] font-bold text-blue-50/80 hover:text-white transition-colors"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon, href = "https://linkedin.com" }: { icon: React.ReactNode; href?: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Social Link"
    className="p-2 border border-white/40 hover:border-white hover:bg-white/10 transition-all text-white inline-block"
  >
    {icon}
  </a>
);