
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Check icon component
const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="orange"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const TrialCTA = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px 0px' });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
  });

  const featureVariants = {
    hidden: { opacity: 0, x: -18 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  };
  const features = [
    "Full access to every workspace and template",
    "Live support to get your team running fast",
    "Upgrade, downgrade, or cancel anytime with zero risk"
  ];

  return (
    <section className="relative rounded-2xl p-4 xs:p-6 sm:p-8 max-w-6xl mx-auto lg:p-12 overflow-hidden bg-[rgb(255,251,248)]" ref={ref}>
      {/* Top background with faded corners */}
      <div
        className="absolute top-0 left-0 right-0 h-28 z-0"
        style={{
          background: 'linear-gradient(180deg, #fffaf7 0%, rgba(254, 154, 75, 0.3) 60%, transparent 100%)',
          maskImage: 'linear-gradient(to right, transparent 0%, black 40%, black 60%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 40%, black 60%, transparent 100%)'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-2 xs:px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Mobile: mascot as background, desktop: side-by-side */}
          <div className="relative flex flex-col md:grid md:grid-cols-2 gap-6 lg:gap-16 items-center mb-12">
          {/* Mascot as background for mobile */}
          <img
            src="/Pricing/hero/sa.webp"
            alt="Sevvy Mascot"
            className="block md:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5/6 max-w-[320px] opacity-60 pointer-events-none select-none z-0"
            aria-hidden="true"
          />

          {/* Mascot in front for desktop */}
          <motion.div
            className="hidden md:block absolute md:static left-0 top-1/2 md:top-auto md:left-auto md:transform-none -translate-y-1/2 md:translate-y-0 z-30 md:z-20"
            style={{pointerEvents: 'none'}}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src="/Pricing/hero/sa.webp"
              alt="Sevvy Mascot"
              className="w-full max-w-87.5 lg:max-w-137.5 xl:max-w-187.5 h-auto mt-18 drop-shadow-xl"
              style={{pointerEvents: 'auto'}}
            />
          </motion.div>

          {/* Card always on top for mobile, right for desktop */}
          <motion.div className="flex justify-center md:justify-start max-w-md mx-auto z-10" {...fadeUp(0.2)}>
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10 max-w-md w-full relative">
              {/* Heading */}
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 leading-tight">
                Experience Sevvy for 14<br />Days, On Us
              </h2>

              {/* Subtext */}
              <p className="text-gray-600 text-sm mb-6">
                Test your workflow, not your patience. No credit card required
              </p>

              {/* Divider */}
              <div className="border-t border-gray-200 mb-6"></div>

              {/* Features List */}
              <motion.ul
                className="space-y-4 mb-8"
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } } }}
              >
                {features.map((feature, index) => (
                  <motion.li key={index} variants={featureVariants} className="flex items-start gap-3">
                    <div className="shrink-0 w-5 h-5 rounded-full bg-orange-200 flex items-center justify-center mt-0.5">
                      <CheckIcon />
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Card Button */}
              <button className="w-full border-2 border-orange-500 text-orange-400 font-medium py-3 px-6 rounded-lg cursor-pointer">
                Start My 14-Day Free Trial
              </button>
            </div>
          </motion.div>
          </div>

        {/* Bottom Center CTA Button */}
        <motion.div className="flex justify-center" {...fadeUp(0.5)}>
          <button className="bg-linear-to-r from-orange-500 to-orange-200 text-white font-medium py-3 px-8 rounded-2xl inline-flex items-center gap-2 cursor-pointer">
            Start my 14 Day Trial
            <svg width="16" height="16" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg" className='ml-2 md:ml-2'>
<path d="M1.5 10.4971H20.5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.999 1.5L20.499 10.4973L10.999 19.4947" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TrialCTA;