"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Youtube, Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 border-b border-white/5  ${isMenuOpen?'bg-black':'bg-space-dark/80 backdrop-blur-md'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* LEFT SECTION: Logo & Name Only */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-10 w-10 overflow-hidden  group-hover:border-purple-500/50 transition-colors">
  <Image 
      src="/HBMlogo.svg" 
      alt="Maths Yaka Logo" 
      fill 
      sizes="40px" 
      className="object-contain scale-450" // Changed to object-contain and added scale
    />
  </div>
          <span className="text-xl font-bold tracking-wide text-white">
            HackBerry<span className="text-purple-400">Maths</span>
          </span>
        </Link>
        
        {/* RIGHT SECTION: YouTube Icon and Contact Button together */}
        <div className="hidden md:flex items-center gap-4">
          {/* New Collection Button */}
          <Link
            href="/collection"
            className="flex items-center gap-2 rounded-full border border-purple-500/30 bg-gradient-to-r from-orange-500 to-pink-600 px-5 py-2 text-sm font-bold text-white shadow-[0_0_15px_rgba(249,115,22,0.3)] transition-all hover:from-orange-600 hover:to-pink-700"
          >
            Collection
          </Link>

          {/* Circular YouTube Icon */}
        {/*  <a>
            href="https://youtube.com/@MathsYaka"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center h-10 w-10 rounded-full border border-red-500/30 bg-red-500/10 text-red-500 transition-all hover:bg-red-500/20 hover:border-red-500/60 hover:shadow-[0_0_15px_rgba(220,38,38,0.3)]"
            title="YouTube Channel"
          >
            <Youtube className="h-5 w-5 transition-transform group-hover:scale-110" />
          </a>*/}

            <a href="https://www.tiktok.com/@hackberrymaths?is_from_webapp=1&sender_device=pc" target="_blank"
                        className="flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2 text-sm font-bold text-purple-100 hover:bg-purple-500/20 transition-all shadow-[0_0_15px_rgba(168,85,247,0.1)]"
                      >
                        TikTok
                      </a>

          {/* Contact Us Button */}
          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2 text-sm font-bold text-purple-100 hover:bg-purple-500/20 transition-all shadow-[0_0_15px_rgba(168,85,247,0.1)]"
          >
            Contact Us
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white ">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

 {/* Mobile Menu */}
{isMenuOpen && (
  <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/5">
    <div className="flex flex-col items-center gap-4 py-8">
      {/* Using 'w-64' to ensure all buttons have the same width. 
          'justify-center' ensures text stays centered inside the button.
      */}
      
      <Link
        href="/"
        onClick={() => setIsMenuOpen(false)}
        className="flex w-64 items-center justify-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-3 text-sm font-bold text-purple-100 transition-all active:scale-95"
      >
        Home
      </Link>

      <Link
        href="/collection"
        onClick={() => setIsMenuOpen(false)}
        className="flex w-64 items-center justify-center gap-2 rounded-full border border-purple-500/30 bg-gradient-to-r from-orange-500 to-pink-600 px-5 py-3 text-sm font-bold text-white shadow-[0_0_15px_rgba(249,115,22,0.3)] transition-all active:scale-95"
      >
        Collection
      </Link>

      <Link
        href="/contact"
        onClick={() => setIsMenuOpen(false)}
        className="flex w-64 items-center justify-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-3 text-sm font-bold text-purple-100 transition-all active:scale-95"
      >
        Contact Us
      </Link>

      <a 
        href="https://www.tiktok.com/@hackberrymaths" 
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-64 items-center justify-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-3 text-sm font-bold text-purple-100 transition-all active:scale-95"
      >
        TikTok
      </a>
    </div>
  </div>
)}
    </nav>
  );
}