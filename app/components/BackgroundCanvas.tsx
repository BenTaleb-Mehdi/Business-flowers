"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function BackgroundCanvas() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); 
  }, []);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0 select-none bg-white">
      
      {/* 1. Editorial Grid Lines (Creates a structured, magazine-like layout) */}
      <div className="absolute top-0 left-[5%] lg:left-[10%] w-[1px] h-full bg-gray-100" />
      <div className="absolute top-0 right-[5%] lg:right-[10%] w-[1px] h-full bg-gray-100" />
      <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gray-50 -translate-x-1/2 hidden md:block" />

      {/* 2. Soft Ambient "Studio Light" Blooms 
          (Replaces the particles with slow-breathing, massive gradients) */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#F9F7F6] blur-[100px] opacity-80"
        animate={{
          x: ["0%", "5%", "0%"],
          y: ["0%", "3%", "0%"],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#FAFAFA] blur-[120px] opacity-90"
        animate={{
          x: ["0%", "-4%", "0%"],
          y: ["0%", "-5%", "0%"],
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2, // Offsets the breathing animation
        }}
      />

      {/* 3. Minimalist Architectural Ring (Very slow, faint, geometric detail) */}
      <div className="absolute top-[20%] right-[-15%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] opacity-30 hidden lg:block">
        <motion.div
          className="w-full h-full border border-gray-100 rounded-full"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 120, // Extremely slow rotation
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

    </div>
  );
}