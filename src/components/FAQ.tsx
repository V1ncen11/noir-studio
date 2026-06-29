"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Do you travel for destination photoshoots?",
    answer: "Yes, we are available worldwide. Travel and accommodation fees are calculated separately based on the destination."
  },
  {
    question: "How long does it take to receive the final photos?",
    answer: "For portrait and commercial sessions, you will receive your gallery within 2 weeks. For weddings and extensive editorials, it typically takes 4-6 weeks."
  },
  {
    question: "Do we get the RAW, unedited files?",
    answer: "We do not provide RAW files. A significant part of our art and method lies in our post-production process and color grading."
  },
  {
    question: "How do we secure a booking date?",
    answer: "A signed contract and a 50% non-refundable retainer are required to secure your date. The remaining balance is due one week prior to the shoot."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 px-6 md:px-12 bg-[#050505] border-t border-white/5">
      <div className="container mx-auto max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-sm font-sans tracking-[0.2em] uppercase text-gray-400 mb-4">Information</h2>
          <h3 className="text-3xl md:text-5xl font-display text-white">Common Questions</h3>
        </motion.div>

        <div className="flex flex-col">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-b border-white/10"
            >
              <button
                className="w-full flex justify-between items-center py-8 text-left group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h4 className="text-xl md:text-2xl font-display text-white group-hover:text-gray-300 transition-colors pr-8">
                  {faq.question}
                </h4>
                <div className="text-white shrink-0">
                  {openIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-400 font-sans font-light leading-relaxed pb-8 max-w-2xl">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
