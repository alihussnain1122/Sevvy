
import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const faqData = [
  {
    question: 'Can I upgrade or downgrade my plan anytime?',
    answer: 'Yes! Sevvy grows with your team. Upgrade, downgrade, or adjust your plan at any time without delays and penalties.'
  },
 {
    question: 'Do I need a credit card to start the 14-day free trial?',
    answer: 'Not at all. Start your 14-day free trial with full access, completely risk-free. No credit card required.'
  },
  {
    question: 'What’s included in every plan?',
    answer: 'Every plan comes with workspaces, templates, collaboration tools, and live support. Higher-tier plans add more workspaces, storage, team members, and priority support.'
  },
  {
    question: 'Is Sevvy suitable for small teams or solo creators?',
    answer: 'Absolutely. Our Basic plan is perfect for solo creators or small teams, giving you structure without unnecessary complexity.'
  },
  {
    question: 'What if I don’t see results during my trial?',
    answer: 'No worries! If Sevvy isn’t meeting your needs, you can cancel anytime or reach out to us. We can extend your trial to help you get the full experience.'
  },
  {
    question: 'How does Sevvy handle my data and privacy?',
    answer: 'Your content and team data are fully secure. Sevvy uses enterprise-grade encryption, adheres to strict privacy standards, and never shares your information with third parties without consent.'
  },
  {
    question: 'Tired of Chaos? Meet Clarity.',
    answer: 'Get full access to Sevvy for 14 days and see what your team can really achieve.'
  },
  {
    question: 'Not sure which plan fits?',
    answer: 'Start where you are, not where you think you should be.You can upgrade, downgrade, or adjust at any time as your content operation evolves.'
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
          <h2 className="text-2xl md:text-[28px] lg:text-4xl text-gray-800 mb-2">
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
