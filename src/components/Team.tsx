"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Team() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section className="py-32 px-6 md:px-12 bg-black border-t border-white/5" ref={ref}>
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col-reverse md:flex-row gap-16 items-center">
          
          {/* Image */}
          <div className="md:w-1/2 w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="relative aspect-[3/4] w-full max-w-md mx-auto md:mr-auto md:ml-0 bg-neutral-900 overflow-hidden"
              data-cursor="view"
            >
              <motion.div 
                className="absolute inset-0 w-full h-[130%] -top-[15%] bg-cover bg-center grayscale"
                style={{ 
                  backgroundImage: "url('/profile.png')",
                  y 
                }}
              />
            </motion.div>
          </div>

          {/* Text Content */}
          <div className="md:w-1/2">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm font-sans tracking-[0.2em] uppercase text-gray-400 mb-6">The Artist</h2>
              <h3 className="text-3xl md:text-5xl font-display text-white mb-8 leading-tight">
                Vincen Noir
              </h3>
              <p className="text-gray-400 font-sans font-light leading-relaxed mb-6">
                With over a decade of experience behind the lens, Vincen brings a unique blend of editorial precision and documentary rawness to every shoot. His work is characterized by dramatic lighting, deep shadows, and an unyielding commitment to authenticity.
              </p>
              <p className="text-gray-400 font-sans font-light leading-relaxed mb-10">
                "A photograph shouldn't just show what something looked like, it should remind you of how it felt."
              </p>
              
              <div className="flex flex-col gap-2 text-sm font-sans tracking-widest uppercase text-white">
                <span>✦ Lead Photographer</span>
                <span>✦ Creative Director</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
