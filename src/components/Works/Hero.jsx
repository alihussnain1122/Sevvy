import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function Hero() {
  return (
    <section className="w-full py-8 px-6 mb-6 relative overflow-hidden">
      {/* Container */}
      <div className="max-w-7xl mx-auto">

        {/* --- Top Text Content --- */}
        <div className="text-center mb-12 relative z-10">
          <motion.h2
            {...fadeUp(0)}
            className="text-4xl md:text-5xl font-poppins font-bold text-black"
          >
            From Idea to Published
          </motion.h2>
          <motion.h2
            {...fadeUp(0.12)}
            className="text-3xl md:text-5xl lg:text-6xl font-poppins font-bold mb-2 leading-tight"
          >
            <span className="bg-gradient-to-r from-orange-500 to-orange-200 bg-clip-text text-transparent">Without Losing Control</span>
          </motion.h2>
          <motion.p
            {...fadeUp(0.24)}
            className="font-poppins text-gray-700 text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Creative work slows down when systems fragment. Sevvy replaces scattered tools
            with a unified, connected workflow that moves content forward without friction. Briefs,
            assets, feedback, approvals, publishing, and client visibility live inside one platform,
            so teams stay aligned and output stays predictable.
          </motion.p>
        </div>


        {/* --- All 3 layers stacked together --- */}
        <div className="absolute bottom-48 relative flex justify-center items-center mx-auto mt-0 mb-8 max-w-5xl z-5" style={{ minHeight: '520px' }}>

          {/* Layer 1 (outermost): Elements.webp — subscribe, instagram, revenue, sales, wavy lines etc */}
          <motion.img
            src="/HowItWorks/hero/Elements.webp"
            alt="UI Elements Background"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-auto object-contain z-0 pointer-events-none select-none"
          />

          {/* Layer 2 (middle): Kits.webp — data analytics, dashboard widgets */}
          <motion.img
            src="/HowItWorks/hero/Kits.webp"
            alt="Data Kits and Analytics"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
            className="absolute left-1/2 mt-[520px] -translate-x-1/2 -translate-y-[45%] w-[900px]  h-auto object-contain z-10 pointer-events-none select-none"
          />

          {/* Layer 3 (topmost): character.webp + "How Sevvy Works" text */}
          <div className="relative z-20 flex items-start justify-center gap-4 md:gap-6 -mt-8">
            <motion.img
              src="/HowItWorks/hero/character.webp"
              alt="Sevvy Character"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              animate-float="true"
              className="w-[220px] h-auto drop-shadow-2xl"
              style={{ animation: 'heroFloat 4s ease-in-out infinite' }}
            />
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl font-bold mt-[30px] -ml-[38px] text-orange-500 font-poppins leading-tight text-center"
            >
              How Sevvy<br />Works
            </motion.h3>
          </div>
        </div>

        {/* --- Bottom Buttons --- */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row justify-center items-center gap-5 -mt-52 relative z-40"
        >
          <button className="bg-gradient-to-r from-orange-500 to-orange-200 hover:bg-[#FF7A2D] text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-base md:text-lg cursor-pointer hover:shadow-orange-200 hover:scale-105">
            Start Your Creative Workflow
          </button>

          <button className="border-2 border-[#FF8A3D] text-[#FF8A3D] bg-white  font-semibold px-8 py-4 rounded-2xl flex items-center gap-3 text-base md:text-lg transition-all duration-300 cursor-pointer hover:shadow-xl hover:scale-105">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12.565" cy="12.565" r="12.565" fill="#FF710B" />
              <path d="M16.6069 11.7877C17.2052 12.1331 17.2052 12.9967 16.6069 13.3422L11.2219 16.4512C10.6235 16.7967 9.87563 16.3649 9.87563 15.674L9.87563 9.4559C9.87563 8.76501 10.6235 8.33319 11.2219 8.67864L16.6069 11.7877Z" fill="white" />
            </svg>

            Watch Sevvy In Action
          </button>
        </motion.div>

      </div>
      <style>{`
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
    </section>
  );
}