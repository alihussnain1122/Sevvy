import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Check icon component
const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4 text-white"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const PricingHero = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px 0px' });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 32 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
  });

  return (
    <section className="w-full py-16 lg:py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Heading Section */}
          <div className="text-center mb-12 lg:mb-16">
            <motion.h1 className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold mb-2" {...fadeUp(0)}>
              <span className="text-gray-900">Plans That Match How</span>
            </motion.h1>
            <motion.h2 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold mb-2" {...fadeUp(0.1)}>
              <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
                Creative Teams{' '}
              </span>
              <span className="bg-gradient-to-r from-orange-300 to-orange-200 bg-clip-text text-transparent">Actually Work</span>
            </motion.h2>
            
            <motion.p className="text-gray-600 text-sm lg:text-base max-w-2xl mx-auto mb-2" {...fadeUp(0.2)}>
              Sevvy scales with your workflow, not just per-task. Plans start at just $19/month,
              <br className="hidden sm:block" />
              with the flexibility to upgrade or downgrade anytime.
            </motion.p>
            <motion.div className="space-y-1" {...fadeUp(0.3)}>
              <p className="text-sm lg:text-base font-bold text-gray-900">
                No per-task fees. No per-idea limits.
              </p>
              <p className="text-sm lg:text-base font-bold bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
                Just clear pricing for <span className="bg-gradient-to-r from-orange-300 to-orange-200 bg-clip-text text-transparent">structured, collaborative content execution.</span> 
              </p>
            </motion.div>
          </div>

          {/* Two Column Layout - Mascot and Cards */}
          <motion.div
            className="flex justify-center items-center w-full"
            initial={{ opacity: 0, y: 50, scale: 0.96 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.96 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src="/Pricing/hero/sevy.webp"
              alt="Pricing Mascot and Cards"
              className="w-full max-w-4xl h-auto"
            />
          </motion.div>
      </div>
    </section>
  );
};

export default PricingHero;