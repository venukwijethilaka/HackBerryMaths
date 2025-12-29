"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SpaceBackground } from './components/SpaceBackground';
import { FloatingMathObjects } from './components/FloatingMathObjects';
import { Navbar } from './components/Navbar';
import { Mail, CheckCircle, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const scrollToDemo = () => {
    const demoSection = document.getElementById('demo-section');
    if (demoSection) demoSection.scrollIntoView({ behavior: 'smooth' });
  };

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });
  const yHero = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-space-dark text-white selection:bg-purple-500/30">
      <SpaceBackground />
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt:10 md:pt-20 overflow-hidden">
        <motion.div style={{ y: yHero, opacity: opacityHero }} className="relative z-10 mx-auto max-w-5xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-300 backdrop-blur-md">
            <span className="relative flex h-3 w-3"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span><span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span></span>
            New Video: Area of a Cylinder
          </div>
          <h1 className="mb-8 text-5xl font-extrabold md:text-8xl">Maths Explained in <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">3D Dimension</span></h1>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-400 md:text-xl">We transform boring formulas into immersive 3D visual experiences. See the math, don't just memorize it.</p>
          <button onClick={scrollToDemo} className="group relative rounded-full bg-white px-10 py-5 text-lg font-bold text-black transition-transform hover:scale-105">
            <span className="relative z-10 flex items-center gap-2">Watch Demo <ChevronDown className="h-5 w-5 animate-bounce" /></span>
          </button>
        </motion.div>
      </section>


      {/* Section 2: Video Player */}
<section id="demo-section" className="relative z-10 px-6 py-15 md:py-32">
  <div className="mx-auto max-w-6xl">
    <div className="mb-12 text-center">
      <h2 className="text-3xl font-bold md:text-5xl mb-4">
        <span className="text-purple-400">Introduction</span>
      </h2>
      <p className="text-gray-400">Experience our high-quality 3D explanation.</p>
    </div>

    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-2xl border border-white/20 bg-space-dark shadow-2xl"
    >
      <div className="relative w-full md:h-4/6 aspect-video bg-black overflow-hidden shadow-2xl">
        <iframe 
          src="https://player.vimeo.com/video/1149781376?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"  
          className="absolute top-0 left-0 w-full h-full"
          frameBorder="0" 
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          title="IntroVideo"
        ></iframe>
      </div>
      
      <div className="border-t border-white/10 bg-white/5 p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-sm font-medium text-gray-300">Live Preview</span>
          </div>
          <div className="text-sm text-gray-500">HD 1080p</div>
      </div>
    </motion.div>

    {/* Mobile Only Button - Placed Under the Container */}
    <div className="mt-8 flex justify-center md:hidden">
      <Link
        href="/collection"
        className="flex items-center gap-2 rounded-full border border-purple-500/30 bg-gradient-to-r from-orange-500 to-pink-600 px-8 py-4 text-base font-bold text-white shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all active:scale-95"
      >
        View Full Collection
      </Link>
    </div>

  </div>
</section>

      {/* Section 3: Our Service */}
      <section className="relative z-10 overflow-hidden py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.8 }}
            >
              <h2 className="mb-6 text-3xl font-bold md:text-5xl">
                We Visualize <br />
                <span className="text-cyan-400">Complex Concepts</span>
              </h2>
              <p className="mb-8 text-lg text-gray-300 leading-relaxed">
                This is a premium service creating bespoke 3D math video solutions. 
                Whether you are an educational institute or a content creator, we build 
                the "Math Magic" for you.
              </p>
              
              <ul className="space-y-4 text-gray-300">
                {['Custom 3D Geometries', 'Animated Derivations', 'High-End Rendering'].map((item, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }} 
                    whileInView={{ opacity: 1, x: 0 }} 
                    viewport={{ once: true }} 
                    transition={{ delay: 0.2 + i * 0.1 }} 
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-purple-400" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.8 }} 
              className="relative aspect-square rounded-3xl border border-white/10 bg-white/5 p-2 backdrop-blur-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-3xl" />
              <div className="relative h-full w-full flex items-center justify-center overflow-hidden rounded-2xl">
                 <FloatingMathObjects />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 pt-0 sm:pt-20 pb-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-10 backdrop-blur-xl md:p-14"
        >
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            Do you want our
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Service?
            </span>
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
            Let's discuss how we can bring your mathematical curriculum to life with 3D animation.
          </p>
          
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-lg font-bold text-black transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
          >
            <Mail className="h-5 w-5" />
            Contact Us
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 w-full border-t mt-10 border-white/10 bg-space-dark/80 py-6 text-center text-sm text-gray-500 backdrop-blur-md">
        <p>© 2025 Hackberry Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
}