"use client";
import { motion } from "framer-motion";

export default function Clients() {
  const clients = ["VOGUE", "HARPER'S BAZAAR", "GQ", "VANITY FAIR", "ELLE"];

  return (
    <section className="py-20 px-6 md:px-12 bg-[#050505] border-t border-white/5 overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-center text-xs font-sans tracking-[0.3em] uppercase text-gray-600 mb-12">Trusted By</h2>
        
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-xl md:text-2xl font-display font-bold tracking-widest text-white hover:opacity-100 transition-opacity duration-300 cursor-default"
            >
              {client}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
