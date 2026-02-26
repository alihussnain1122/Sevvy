import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Agency = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px 0px' });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 35 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
  };
  const features = [
    {
      text: 'Centralized files eliminate ',
      highlight: 'Slack/email',
      suffix: ' confusion'
    },
    {
      text: 'Approvals reduce revisions by up to ',
      highlight: '50%',
      suffix: ''
    },
    {
      text: '',
      highlight: 'Branded',
      suffix: ' portals strengthen trust'
    },
    {
      text: 'Structured workflows improve retention by ',
      highlight: '20–30%',
      suffix: ''
    }
  ];

  return (
    <section className="relative bg-[#fffbf7] py-12 overflow-hidden" ref={ref}>
      {/* Gradient Overlay */}
      <div
        className="absolute top-0 left-0 right-0 h-80 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, #fffaf7 0%, rgba(254, 154, 75, 0.3) 60%, transparent 100%)',
          maskImage: 'linear-gradient(to right, transparent 0%, black 40%, black 60%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 40%, black 60%, transparent 100%)'
        }}
      />

      {/* Container */}
     
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Heading */}
        <motion.div className="text-center mb-12" {...fadeUp(0)}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-tight">
            <span className="text-gray-800">Creative & </span>
            <span className="text-orange-400 italic font-Instrument">Video Agencies</span>
          </h2>
        </motion.div>

        {/* Top Center Image */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="w-full max-w-150">
            <img
              src="/WhoIsSevvy/agency.webp"
              alt="Creative & Video Agencies Workflow"
              className="w-full h-auto object-contain rounded-2xl shadow-lg"
            />
          </div>
        </motion.div>

        {/* Bottom Content: Paragraph left, Cards right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-16">
          {/* Paragraph - Left Side */}
          <motion.div
            className="flex items-center justify-center md:justify-start md:mt-12"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-md md:px-12">
              Agencies manage multiple clients, tight timelines, and layered feedback. Delays often happen because information lives across different tools. Sevvy centralizes projects, assets, and approvals in branded client-ready workspaces.
            </p>
          </motion.div>

          {/* Feature Cards Grid - Right Side */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.35 } } }}
          >
            {features.map((feature, index) => {
              // First (0) and last (3) card full width
              const isFullWidth = index === 0 || index === features.length - 1;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className={`bg-white/50 rounded-xl shadow-md p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${isFullWidth ? "col-span-2" : "col-span-1"}`}
                >
                  <p
                    className={
                      (index === 0 || index === 3)
                        ? "text-sm md:text-base text-gray-800 font-medium tracking-tight"
                        : "text-base md:text-lg text-gray-800 font-medium"
                    }
                  >
                    {feature.text}
                    <span className="text-orange-400 font-semibold"> {feature.highlight}</span>
                    {feature.suffix}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom CTA Button */}
        <motion.div className="flex justify-center" {...fadeUp(0.6)}>
          <motion.button
            className="bg-linear-to-r from-orange-500 to-orange-200 text-white font-semibold px-8 py-3 rounded-xl cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Get Free Trial
          </motion.button>
        </motion.div>
        </div>
      
    </section>
  );
};

export default Agency;
