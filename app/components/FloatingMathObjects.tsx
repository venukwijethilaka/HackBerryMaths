"use client";

import React, { useRef, useState } from 'react';
import { motion, TargetAndTransition } from 'framer-motion';
import { Cylinder, Pyramid, Box, Sigma, Infinity as InfinityIcon, Binary, Divide, FunctionSquare } from 'lucide-react';

const FloatItem = ({ children, className, initialX, initialY, delay = 0, containerRef }: { 
  children: React.ReactNode; className?: string; initialX: string; initialY: string; delay?: number; containerRef: React.RefObject<HTMLDivElement | null>;
}) => {
  const [floatAnim] = useState<TargetAndTransition>(() => ({
    y: [-15, 15, -15],
    rotate: [-5, 5, -5],
    transition: { duration: 5 + Math.random() * 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: delay }
  }));

  return (
    <motion.div
      drag dragConstraints={containerRef} dragElastic={0.2}
      whileHover={{ scale: 1.2, rotate: 15, zIndex: 10 }}
      whileTap={{ scale: 0.9 }}
      animate={floatAnim}
      className={`absolute p-4 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg ${className}`}
      style={{ left: initialX, top: initialY }}
    >
      {children}
    </motion.div>
  );
};

export function FloatingMathObjects() {
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={constraintsRef} className="relative w-full h-full min-h-[400px] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px] pointer-events-none" />
      <FloatItem containerRef={constraintsRef} initialX="10%" initialY="10%" className="bg-cyan-500/10 border-cyan-500/30"><Cylinder className="w-12 h-12 text-cyan-400" /></FloatItem>
      <FloatItem containerRef={constraintsRef} initialX="75%" initialY="15%" delay={1} className="bg-purple-500/10 border-purple-500/30"><Pyramid className="w-10 h-10 text-purple-400" /></FloatItem>
      <FloatItem containerRef={constraintsRef} initialX="40%" initialY="40%" delay={0.5} className="bg-white/10 p-6"><Box className="w-20 h-20 text-white" /></FloatItem>
      <FloatItem containerRef={constraintsRef} initialX="15%" initialY="60%" delay={1.5} className="bg-yellow-500/10 border-yellow-500/30"><Sigma className="w-10 h-10 text-yellow-400" /></FloatItem>
      <FloatItem containerRef={constraintsRef} initialX="70%" initialY="70%" delay={2} className="bg-pink-500/10 border-pink-500/30"><InfinityIcon className="w-12 h-12 text-pink-400" /></FloatItem>
      <FloatItem containerRef={constraintsRef} initialX="80%" initialY="35%" delay={0.8} className="bg-green-500/10 border-green-500/30"><Binary className="w-8 h-8 text-green-400" /></FloatItem>
      <FloatItem containerRef={constraintsRef} initialX="25%" initialY="80%" delay={1.2} className="bg-blue-500/10 border-blue-500/30"><Divide className="w-8 h-8 text-blue-400" /></FloatItem>
      <FloatItem containerRef={constraintsRef} initialX="5%" initialY="40%" delay={2.5} className="bg-orange-500/10 border-orange-500/30"><FunctionSquare className="w-8 h-8 text-orange-400" /></FloatItem>
    </div>
  );
}