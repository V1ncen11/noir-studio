"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md py-6" : "bg-transparent py-8"
      }`}
    >
      <div className="container mx-auto px-8 md:px-16 flex justify-between items-center">
        {/* Logo Left */}
        <a href="#" className="font-display flex items-center text-white">
          <span className="font-bold text-lg tracking-[0.15em]">NOIR</span>
          <span className="font-light text-lg tracking-[0.1em] ml-2">S T U D I O</span>
        </a>

        {/* Links Right */}
        <div className="hidden md:flex items-center space-x-12 text-sm font-sans tracking-[0.2em] uppercase">
          <a href="#portfolio" className="text-white hover:text-white transition-colors">PORTFOLIO</a>
          <a href="#services" className="text-white/60 hover:text-white transition-colors">SERVICES</a>
          <a href="#about" className="text-white/60 hover:text-white transition-colors">ABOUT</a>
          <a href="#contact" className="text-white/60 hover:text-white transition-colors">CONTACT</a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-black absolute top-full left-0 w-full flex flex-col items-center py-8 gap-6 border-t border-white/10"
        >
          <a href="#portfolio" className="text-xs tracking-[0.2em] uppercase text-gray-400 hover:text-white">Portfolio</a>
          <a href="#services" className="text-xs tracking-[0.2em] uppercase text-gray-400 hover:text-white">Services</a>
          <a href="#about" className="text-xs tracking-[0.2em] uppercase text-gray-400 hover:text-white">About</a>
          <a href="#contact" className="text-xs tracking-[0.2em] uppercase text-gray-400 hover:text-white">Contact</a>
        </motion.div>
      )}
    </motion.nav>
  );
}
