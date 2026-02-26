import React from "react";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] },
});

const Vision = () => {
  return (
    <section className="relative w-full py-8 md:py-16 -mt-28">
      <div className="mx-auto px-2 md:px-6">
        <div className="bg-[#fffbf8] rounded-3xl p-4 md:p-12 relative overflow-hidden">
            {/* Top gradient overlay */}
            <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none" style={{
          background: 'linear-gradient(180deg, #fffaf7 0%, rgba(254, 154, 75, 0.3) 60%, transparent 100%)',
          maskImage: 'linear-gradient(to right, transparent 0%, black 40%, black 60%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 40%, black 60%, transparent 100%)'
        }} />
          
          {/* Heading */}
          <motion.div {...fadeUp(0)} className="text-center mb-10 md:mb-16 z-10  relative">
            <h2 className="text-2xl md:text-4xl lg:text-5xl text-black">
              Our <span className="italic font-Instrument text-orange-400">Vision</span>
            </h2>
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-10 md:mb-16">
            
            {/* Block 1: Clarity */}
            <motion.div {...fadeUp(0.1)} className="relative flex flex-col items-center md:block self-start">
              {/* Background Number */}
              <div className="absolute -top-2 right-2 md:-top-6 md:-right-1 pr-2 md:pr-6 text-7xl md:text-[110px] font-bold text-[#ffe0c9] z-0 leading-none select-none">
                1
              </div>
              {/* Content */}
              <div className="relative z-10 flex gap-3 md:gap-4 items-center md:items-start">
                {/* Orange Vertical Line */}
                <div className="w-1 h-12 md:h-28 bg-orange-500 rounded-full flex-shrink-0"></div>
                {/* Text Content */}
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-black mb-2">Clarity</h3>
                  <p className="text-black leading-relaxed text-sm md:text-base">
                    Creative teams deserve systems that make work visible, structured, and easy to manage at scale.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Block 2: Simplicity */}
            <motion.div {...fadeUp(0.25)} className="relative flex flex-col items-center md:block self-center mt-4 md:mt-8">
              {/* Background Number */}
              <div className="absolute -top-2 right-2 md:-top-6 md:-right-2 pr-2 md:pr-6 text-7xl md:text-[110px] font-bold text-[#ffe0c9] z-0 leading-none select-none">
                2
              </div>
              {/* Content */}
              <div className="relative z-10 flex gap-3 md:gap-4 items-center md:items-start">
                {/* Orange Vertical Line */}
                <div className="w-1 h-12 md:h-28 bg-orange-500 rounded-full flex-shrink-0"></div>
                {/* Text Content */}
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-black mb-2">Simplicity</h3>
                  <p className="text-black leading-relaxed text-sm md:text-base">
                    Powerful tools shouldn't feel heavy. We believe creative operations should be intuitive, not technical.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Block 3: Continuity */}
            <motion.div {...fadeUp(0.4)} className="relative flex flex-col items-center md:block self-end mt-8 md:mt-36">
              {/* Background Number */}
              <div className="absolute -top-2 right-2 md:-top-6 md:-right-2 pr-2 md:pr-6 text-7xl md:text-[110px] font-bold text-[#ffe0c9] z-0 leading-none select-none">
                3
              </div>
              {/* Content */}
              <div className="relative z-10 flex gap-3 md:gap-4 items-center md:items-start">
                {/* Orange Vertical Line */}
                <div className="w-1 h-12 md:h-28 bg-orange-500 rounded-full flex-shrink-0"></div>
                {/* Text Content */}
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-black mb-2">Continuity</h3>
                  <p className="text-black leading-relaxed text-sm md:text-base">
                    Work shouldn't end at approval. Every project should compound into long-term assets, insights, and growth.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* CTA Button */}
          <motion.div {...fadeUp(0.2)} className="text-center mt-10 md:mt-16">
            <button className="px-6 md:px-10 py-3 bg-gradient-to-r from-orange-500 to-orange-200 text-white font-semibold rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 hover:shadow-orange-200 cursor-pointer">
              Build the System Your Team Deserves
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Vision;
