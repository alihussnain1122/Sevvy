
import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const faqData = [
  {
    question: 'How does Sevvy handle my data and privacy?',
    answer: 'Your content and team data are fully secure. Sevvy uses enterprise-grade encryption, adheres to strict privacy standards, and never shares your information with third parties without consent.',
  },
 {
    question: 'Is Sevvy suitable for small teams or solo creators?',
    answer: 'Absolutely. Sevvy is built to scale, offering solo creators clarity and small teams a structured way to collaborate without the chaos of messy docs.',
  },
  {
    question: 'What’s included in every plan?',
    answer: 'Every plan includes core workflow tools: project briefing, feedback loops, asset management, and approval stages to keep your content moving.',
  },
  {
    question: 'How long until we deliver your first blog post?',
    answer: 'Once onboarded, you’ll receive your first draft within 5-7 business days, depending on your specific requirements and feedback speed.',
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(-1);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px 0px' });

  const faqVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: (i) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
    }),
  };


  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-24 relative">
      <div 
        className="absolute top-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, #fffaf7 0%, rgba(254, 154, 75, 0.3) 60%, transparent 100%)',
          maskImage: 'linear-gradient(to right, transparent 0%, black 40%, black 60%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 40%, black 60%, transparent 100%)'
        }}
      />
      <div className="max-w-6xl mx-auto px-6 -mt-12" ref={ref}>
        {/* Heading Area */}
        <motion.div
          className="text-center mb-10 md:mb-12 relative z-10"
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-800 mb-2">
            Got <span className="italic text-orange-400 font-Instrument">Questions</span> Before You Start?
          </h2>
        </motion.div>



        {/* FAQ Content - Two Column Grid */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start relative z-10">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={faqVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className={`bg-white rounded-xl shadow-md transition-all duration-300 cursor-pointer ${
                  openIndex === index ? 'shadow-lg' : 'hover:shadow-lg'
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 -mt-1">
                      <span className="text-orange-500 text-2xl font-bold">
                        {openIndex === index ? '−' : '+'}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800 text-lg mb-2">
                        {faq.question}
                      </h4>
                      {openIndex === index && (
                        <p className="text-gray-600 text-sm leading-relaxed mt-3">
                          {faq.answer}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
      </div>
    </section>
  );
};

export default FAQ;
