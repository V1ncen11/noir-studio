"use client";
import { motion } from "framer-motion";

const InstagramIcon = ({ className = "", size = 24 }: { className?: string, size?: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const igPosts = [
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop"
];

export default function Instagram() {
  return (
    <section className="py-24 bg-black border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex justify-between items-end mb-12"
        >
          <div>
            <h2 className="text-sm font-sans tracking-[0.2em] uppercase text-gray-400 mb-2">Socials</h2>
            <h3 className="text-2xl md:text-4xl font-display text-white">@noirstudio</h3>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-sm font-sans tracking-widest uppercase text-gray-400 hover:text-white transition-colors">
            Follow Us <InstagramIcon size={16} />
          </a>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {igPosts.map((post, index) => (
            <motion.a
              href="#"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative aspect-square overflow-hidden bg-neutral-900 block ${index === 4 ? 'hidden md:block' : ''}`}
            >
              <div 
                className="absolute inset-0 w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${post})` }}
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <InstagramIcon className="text-white w-8 h-8 md:w-10 md:h-10 transform scale-50 group-hover:scale-100 transition-transform duration-500" />
              </div>
            </motion.a>
          ))}
        </div>
        
        <a href="#" className="flex md:hidden items-center justify-center gap-2 mt-8 text-sm font-sans tracking-widest uppercase text-gray-400 hover:text-white transition-colors">
          Follow Us <InstagramIcon size={16} />
        </a>
      </div>
    </section>
  );
}
