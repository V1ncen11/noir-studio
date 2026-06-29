"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section id="about" ref={ref} className="py-32 px-6 md:px-12 bg-[#0a0a0a] border-t border-white/5">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          {/* Text Content */}
          <div className="md:w-1/2">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm font-sans tracking-[0.2em] uppercase text-gray-400 mb-6">About Us</h2>
              <h3 className="text-3xl md:text-5xl font-display text-white mb-8 leading-tight">
                More than just <br/> capturing light.
              </h3>
              <p className="text-gray-400 font-sans font-light leading-relaxed mb-6">
                Noir Studio was born from a passion for authentic storytelling. We believe that every individual, brand, and moment has a unique narrative waiting to be told. Our approach blends technical precision with a raw, cinematic aesthetic.
              </p>
              <p className="text-gray-400 font-sans font-light leading-relaxed mb-10">
                Based in the heart of the city, we are a collective of visual artists dedicated to elevating your reality into timeless art. Whether it's a high-fashion editorial or an intimate wedding, we approach every project with the same relentless pursuit of perfection.
              </p>
              
              <a href="#contact" className="inline-block border-b border-gray-600 pb-2 text-sm tracking-widest uppercase hover:text-white hover:border-white transition-colors text-gray-400">
                Work With Us
              </a>
            </motion.div>
          </div>

          {/* Image */}
          <div className="md:w-1/2 w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/5] w-full bg-neutral-900 overflow-hidden"
            >
              <motion.div 
                className="absolute inset-0 w-full h-[140%] -top-[20%] bg-cover bg-center opacity-80"
                style={{ 
                  backgroundImage: "url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1964&auto=format&fit=crop')",
                  y 
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
