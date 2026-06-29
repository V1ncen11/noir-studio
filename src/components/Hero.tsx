"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section ref={ref} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Subtle Glow behind camera */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

      {/* 3D Camera Image Background */}
      <motion.div className="absolute inset-0 w-full h-full" style={{ y }}>
        <motion.div 
          initial={{ scale: 1.15, opacity: 0, y: 0 }}
          animate={{ 
            scale: 1, 
            opacity: 0.9,
            y: ["-10px", "10px", "-10px"]
          }}
          transition={{ 
            scale: { duration: 2.5, delay: 1.8, ease: "easeOut" },
            opacity: { duration: 2.5, delay: 1.8, ease: "easeOut" },
            y: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.8 }
          }}
          className="w-full h-full bg-contain bg-no-repeat bg-center"
          style={{ backgroundImage: "url('/hero-camera.png')" }}
        />
      </motion.div>
      
      {/* Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/60" />

      <div className="relative z-10 text-center px-4 w-full">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 2.2, ease: "easeOut" }}
          className="text-3xl md:text-5xl lg:text-6xl font-sans font-medium text-white tracking-tight"
        >
          Visuals Before Words.
        </motion.h1>
      </div>
      
    </section>
  );
}
