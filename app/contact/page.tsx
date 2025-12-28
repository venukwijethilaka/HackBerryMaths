"use client";

import React, { useState, useRef } from 'react';
import { SpaceBackground } from '../components/SpaceBackground';
import { Navbar } from '../components/Navbar';
import { Mail, Phone, Send, Loader2, Sparkles, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const buttonRef = useRef<HTMLButtonElement>(null);

  const triggerButtonConfetti = () => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { 
        x: (rect.left + rect.width / 2) / window.innerWidth, 
        y: (rect.top + rect.height / 2) / window.innerHeight 
      },
      colors: ['#a855f7', '#22d3ee', '#ffffff'],
    });
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "683f5e22-9910-4cdb-9b07-5364941d42ea");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setStatus("success");
        triggerButtonConfetti();
        (event.target as HTMLFormElement).reset();
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (e) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <div className="relative min-h-screen bg-space-dark text-white overflow-hidden">
      <SpaceBackground />
      <Navbar />
      
      <main className="relative z-10 flex min-h-screen flex-col lg:flex-row items-center justify-center p-6 pt-32 lg:p-20">
        {/* Left Side Info */}
        <div className="w-full lg:w-1/2 space-y-8 mb-12 lg:mb-0 lg:pr-12">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">Contact Us</h1>
            <p className="text-gray-400 text-lg max-w-md">Reach out to us for any custom 3D math visualization services.</p>
          </motion.div>

          <div className="space-y-6">
            <div className="flex items-center gap-5 group">
              <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20">
                <Mail className="w-6 h-6 text-purple-400" />
              </div>
              <span className="text-xl">hackberrymaths@gmail.com</span>
            </div>
            <div className="flex items-center gap-5 group">
              <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
                <Phone className="w-6 h-6 text-cyan-400" />
              </div>
              <span className="text-xl">+94 70 290 7734</span>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="w-full lg:w-1/2 max-w-xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/10 backdrop-blur-2xl border border-white/20 p-8 lg:p-12 rounded-[2.5rem] shadow-2xl"
          >
            <h2 className="text-3xl font-bold mb-2">We'd love to hear from you!</h2>
            <p className="text-purple-300 font-medium mb-8">Let's get in touch</p>
            
            <form onSubmit={onSubmit} className="space-y-5">
              <input type="text" name="name" required className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-purple-500 outline-none transition-all" placeholder="Full Name" />
              <input type="email" name="email" required className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-purple-500 outline-none transition-all" placeholder="Email Address" />
              <textarea name="message" required rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-purple-500 outline-none transition-all resize-none" placeholder="Your Message"></textarea>
              
              <motion.button 
                ref={buttonRef}
                type="submit" 
                disabled={status === "sending" || status === "success"}
                animate={status === "error" ? { x: [-10, 10, -10, 10, 0] } : {}}
                className="relative w-full bg-white text-black font-bold py-4 rounded-2xl flex justify-center items-center gap-2 transition-all active:scale-95 disabled:opacity-90 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              >
                <AnimatePresence mode="wait">
                  {status === "idle" && (
                    <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                      Send Message <Send className="w-5 h-5" />
                    </motion.div>
                  )}
                  {status === "sending" && (
                    <motion.div key="sending" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                      <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                    </motion.div>
                  )}
                  {status === "success" && (
                    <motion.div key="success" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-purple-600">
                      Message Sent! <Sparkles className="w-5 h-5" />
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-red-600">
                      Error! Try Again <AlertCircle className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </main>
    </div>
  );
}