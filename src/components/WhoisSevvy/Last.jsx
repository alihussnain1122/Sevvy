import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const LastSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px 0px' });
  return (
    <section ref={ref}>
      <div className="max-w-6xl mx-auto px-2 sm:px-4">
        {/*Card */}
        <div className="relative overflow-hidden rounded-xl sm:rounded-2xl">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-no-repeat w-full h-full bg-center"
            style={{
              backgroundImage: "url(/HowItWorks/Inside/Rectangle.webp)",
            }}
          ></div>

          {/* Content - Responsive padding and text */}
          <motion.div
            className="relative z-10 flex flex-col items-center justify-center text-center py-8 sm:py-12 md:py-16 lg:py-20 px-2 sm:px-6 md:px-12"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Heading - Responsive and keeps 'Starts Here' together */}
            <motion.h2
              className="mt-2 text-xl sm:text-2xl md:text-4xl lg:text-4xl text-white mb-2 sm:mb-3 md:mb-4 leading-tight break-words max-w-xs sm:max-w-md md:max-w-2xl"
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              Start Your
              <span className="bg-gradient-to-r from-orange-500 via-orange-500 to-orange-200 bg-clip-text text-transparent italic font-Instrument whitespace-nowrap">Creative Flow Journey Today </span>
            </motion.h2>

            {/* Paragraph - Responsive max-width and margin */}
            <motion.p
              className="text-xs sm:text-sm md:text-base text-white/90 max-w-[95vw] sm:max-w-xl mx-auto mb-4 sm:mb-6 md:mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            >
              See how Sevvy brings your entire creative operation together, from ideation to 
publication, in one workspace built for real teams.
            </motion.p>

            {/* Button - Responsive size and spacing */}
            <motion.button
              className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 md:px-8 py-2 md:py-2.5 bg-orange-500 text-white font-semibold border-white border-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-xs sm:text-sm md:text-base mb-2 sm:mb-4 cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>Start Your 14-day Free Trial</span>
              <div className="flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 bg-white rounded-full -mr-3 sm:-mr-4 md:-mr-6">
                <svg
                  width="16" 
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-black"
                >
                  <path
                    d="M7 17L17 7M17 7H8M17 7V16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LastSection;