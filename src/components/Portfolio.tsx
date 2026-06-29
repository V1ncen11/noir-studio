"use client";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Editorial Fashion",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop",
    aspect: "aspect-[3/4]",
  },
  {
    id: 2,
    title: "Classic Wedding",
    category: "Wedding",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop",
    aspect: "aspect-square",
  },
  {
    id: 3,
    title: "Minimalist Portrait",
    category: "Portrait",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
    aspect: "aspect-[4/5]",
  },
  {
    id: 4,
    title: "Studio Product",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop",
    aspect: "aspect-[16/9]",
  },
  {
    id: 5,
    title: "Couple Session",
    category: "Pre-Wedding",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop",
    aspect: "aspect-[3/4]",
  },
  {
    id: 6,
    title: "Cinematic Mood",
    category: "Conceptual",
    image: "https://images.unsplash.com/photo-1485686531765-ba63b07845a7?q=80&w=2069&auto=format&fit=crop",
    aspect: "aspect-square",
  },
  {
    id: 7,
    title: "Urban Street",
    category: "Street Style",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop",
    aspect: "aspect-[4/5]",
  },
  {
    id: 8,
    title: "Noir Portrait",
    category: "B&W",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop",
    aspect: "aspect-[3/4]",
  },
  {
    id: 9,
    title: "Neon Nights",
    category: "Creative",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop",
    aspect: "aspect-[16/9]",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 px-6 md:px-12 bg-[#0a0a0a]">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"
        >
          <div>
            <h2 className="text-sm font-sans tracking-[0.2em] uppercase text-gray-400 mb-4">Selected Works</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-display text-white leading-tight">
              Moments that <br className="hidden md:block"/>tell a story.
            </h3>
          </div>
          <a href="#" className="border-b border-gray-600 pb-2 text-sm tracking-widest uppercase hover:text-white hover:border-white transition-colors text-gray-400">
            View Full Gallery
          </a>
        </motion.div>

        {/* Masonry-style Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: (index % 3) * 0.2 }}
              className={`relative overflow-hidden group w-full ${project.aspect} cursor-pointer break-inside-avoid bg-neutral-900`}
              data-cursor="view"
            >
              {/* Image */}
              <div 
                className="absolute inset-0 w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors duration-500" />
              
              {/* Text Reveal on Hover */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                <span className="text-xs font-sans tracking-[0.2em] uppercase text-gray-300 mb-2">{project.category}</span>
                <h4 className="text-2xl font-display text-white">{project.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
