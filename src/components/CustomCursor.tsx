"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Use MotionValues instead of React state for buttery smooth performance without re-renders
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Apply spring physics directly to the motion values
  const springConfig = { damping: 25, stiffness: 700, mass: 0.1 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Disable custom cursor on mobile devices
    if (window.innerWidth < 768) {
      setIsMobile(true);
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      // Update motion values directly (bypasses React render cycle)
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      // Check if hovering over an element with 'data-cursor="view"'
      const target = e.target as HTMLElement;
      const cursorType = target.closest('[data-cursor="view"]');
      setIsHovering(!!cursorType);
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [cursorX, cursorY]);

  if (isMobile) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 bg-white rounded-full pointer-events-none z-[100] mix-blend-difference flex items-center justify-center overflow-hidden"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovering ? 80 : 16,
          height: isHovering ? 80 : 16,
          backgroundColor: isHovering ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 1)",
          mixBlendMode: isHovering ? "normal" : "difference"
        }}
        transition={{ type: "tween", duration: 0.15 }}
      >
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovering ? 1 : 0 }}
          className="text-black text-[10px] font-sans font-bold tracking-widest uppercase pointer-events-none"
        >
          View
        </motion.span>
      </motion.div>
      
      {/* Hide default cursor globally when this component is active */}
      <style jsx global>{`
        body {
          cursor: none;
        }
        a, button, [data-cursor="view"] {
          cursor: none;
        }
      `}</style>
    </>
  );
}
