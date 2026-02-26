import React from "react";
import { motion } from "framer-motion";

const CreativeJourneySection = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-2 sm:px-4">
        {/*Card */}
        <motion.div
          initial={{ opacity: 0, y: 48, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-xl sm:rounded-2xl"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-no-repeat w-full h-full bg-center"
            style={{
              backgroundImage: "url(/HowItWorks/Inside/Rectangle.webp)",
            }}
          ></div>

          {/* Content - Responsive padding and text */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center py-8 sm:py-12 md:py-16 lg:py-20 px-2 sm:px-6 md:px-12">
            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mt-2 text-xl sm:text-2xl md:text-4xl lg:text-4xl text-white mb-2 sm:mb-3 md:mb-4 leading-tight break-words max-w-xs sm:max-w-md md:max-w-2xl"
            >
              Your Creative Journey
              <br className="block sm:hidden" />
              <span className="bg-gradient-to-r from-orange-500 via-orange-500 to-orange-200 bg-clip-text text-transparent italic font-Instrument whitespace-nowrap">Starts Here</span>
            </motion.h2>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs sm:text-sm md:text-base text-white/90 max-w-[95vw] sm:max-w-xl mx-auto mb-4 sm:mb-6 md:mb-8 leading-relaxed"
            >
              High-performing creative teams rely on clarity, speed, and trust. Sevvy provides a system that
              supports all three without disrupting how teams already work.
            </motion.p>

            {/* Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 md:px-8 py-2 md:py-2.5 bg-orange-500 text-white font-semibold border-white border-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-xs sm:text-sm md:text-base mb-2 sm:mb-4 cursor-pointer"
            >
              <span>Let's craft together</span>
              <div className="flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 bg-white rounded-full -mr-3 sm:-mr-4 md:-mr-6">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-black">
                  <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CreativeJourneySection;