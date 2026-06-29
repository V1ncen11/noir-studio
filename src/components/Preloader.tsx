"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
        >
          <div className="overflow-hidden">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="font-display text-2xl md:text-4xl text-white tracking-[0.2em] flex items-center"
            >
              <span className="font-bold text-white">NOIR</span>
              <motion.span 
                initial={{ color: "#ffffff" }}
                animate={{ color: "#737373" }}
                transition={{ delay: 1, duration: 0.8, ease: "easeInOut" }}
                className="font-light ml-4"
              >
                S T U D I O
              </motion.span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
