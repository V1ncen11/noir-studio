"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer id="contact" className="py-20 px-6 md:px-12 bg-black border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-display text-white mb-8 tracking-tight">
              Let's create <br/> something timeless.
            </h2>
            <a href="mailto:hello@noirstudio.com" className="text-xl md:text-2xl text-gray-400 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">
              hello@noirstudio.com
            </a>
          </div>
          
          <div className="flex flex-col md:items-end justify-end">
            <div className="flex flex-col space-y-4 text-sm font-sans tracking-[0.2em] uppercase text-gray-500">
              <a href="#" className="hover:text-white transition-colors text-left md:text-right">Instagram</a>
              <a href="#" className="hover:text-white transition-colors text-left md:text-right">Behance</a>
              <a href="#" className="hover:text-white transition-colors text-left md:text-right">Twitter</a>
              <a href="#" className="hover:text-white transition-colors text-left md:text-right">Studio Map</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs font-sans tracking-[0.1em] text-gray-600 uppercase">
          <p>&copy; {new Date().getFullYear()} Noir Studio. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
      
      {/* Huge Background Text */}
      <h1 className="absolute -bottom-10 md:-bottom-20 left-1/2 -translate-x-1/2 text-[10vw] font-display font-black text-white/5 whitespace-nowrap select-none pointer-events-none">
        NOIR STUDIO
      </h1>
    </footer>
  );
}
