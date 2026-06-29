"use client";
import { motion } from "framer-motion";

const services = [
  {
    title: "Portraiture",
    description: "Capturing the raw emotion and unique personality of individuals with a cinematic approach.",
    price: "From $300"
  },
  {
    title: "Commercial",
    description: "High-end product and brand photography designed to elevate your visual identity.",
    price: "From $800"
  },
  {
    title: "Editorial & Fashion",
    description: "Avant-garde styling and lighting to create striking imagery for magazines and campaigns.",
    price: "From $1200"
  },
  {
    title: "Weddings",
    description: "Documenting your special day with an artistic, unobtrusive, and timeless documentary style.",
    price: "Custom Quote"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 md:px-12 bg-black border-t border-white/5">
      <div className="container mx-auto max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-sm font-sans tracking-[0.2em] uppercase text-gray-400 mb-4">What We Do</h2>
          <h3 className="text-3xl md:text-5xl font-display text-white">Our Services</h3>
        </motion.div>

        <div className="flex flex-col">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col md:flex-row justify-between items-start md:items-center py-8 border-b border-white/10 hover:border-white/40 transition-colors cursor-pointer"
            >
              <div className="md:w-1/3 mb-4 md:mb-0">
                <h4 className="text-2xl font-display text-white group-hover:pl-4 transition-all duration-300">{service.title}</h4>
              </div>
              <div className="md:w-1/2">
                <p className="text-gray-400 font-sans font-light leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>
              </div>
              <div className="md:w-1/6 text-left md:text-right mt-4 md:mt-0">
                <span className="text-xs font-sans tracking-widest text-gray-500 uppercase">{service.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
