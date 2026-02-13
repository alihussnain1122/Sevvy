import React, { useState } from 'react';

const faqData = {
  About: [
    {
      question: 'How is Sevy different from other task managers?',
      answer: 'Most task managers are built around checklists and deadlines. Sevy is built around creative work. It connects project context, assets, feedback, approvals, and publishing in one continuous flow, so teams don\'t lose meaning, direction, or momentum while working visually and iteratively.',
    },
    {
      question: 'How long until we deliver your first blog post?',
      answer: 'We typically deliver the first blog post within 5-7 business days after onboarding, depending on the complexity of your requirements and content approval process.',
    },
    {
      question: 'What does a typical project flow look like in Sevy?',
      answer: 'A typical project starts with briefing, moves through creative development, incorporates feedback rounds, goes through approval stages, and culminates in publishing—all within one seamless workflow.',
    },
    {
      question: 'How long until we deliver your first blog post?',
      answer: 'We typically deliver the first blog post within 5-7 business days after onboarding, depending on the complexity of your requirements and content approval process.',
    },
  ],
  Subscription: [
    {
      question: 'What subscription plans do you offer?',
      answer: 'We offer flexible subscription plans including Starter, Professional, and Enterprise tiers, each designed to meet different team sizes and workflow complexity needs.',
    },
    {
      question: 'Can I change my plan later?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and billing is prorated accordingly.',
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 14-day free trial with full access to all features so you can experience Sevy before committing to a subscription.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and offer invoice billing for Enterprise customers.',
    },
  ],
  Services: [
    {
      question: 'What services does Sevy provide?',
      answer: 'Sevy provides comprehensive project management, creative workflow automation, asset management, feedback collection, approval workflows, and publishing tools.',
    },
    {
      question: 'Do you offer onboarding support?',
      answer: 'Yes, all plans include personalized onboarding support to help your team get started quickly and efficiently.',
    },
    {
      question: 'Can you integrate with our existing tools?',
      answer: 'Sevy integrates with popular tools like Slack, Google Drive, Dropbox, and more. Enterprise plans include custom integrations.',
    },
    {
      question: 'Do you provide training for teams?',
      answer: 'Yes, we offer comprehensive training sessions, documentation, and video tutorials to ensure your team masters Sevy.',
    },
  ],
  'Process & Policies': [
    {
      question: 'What is your refund policy?',
      answer: 'We offer a 30-day money-back guarantee if you\'re not satisfied with Sevy. No questions asked.',
    },
    {
      question: 'How do you handle data security?',
      answer: 'We use enterprise-grade encryption, regular security audits, and comply with GDPR and SOC 2 standards to protect your data.',
    },
    {
      question: 'What happens to my data if I cancel?',
      answer: 'You can export all your data at any time. After cancellation, we retain your data for 90 days before permanent deletion.',
    },
    {
      question: 'How often do you update the platform?',
      answer: 'We release updates every two weeks with new features, improvements, and bug fixes based on user feedback.',
    },
  ],
};

const FAQ = () => {
  const [activeTab, setActiveTab] = useState('About');
  const [openIndex, setOpenIndex] = useState(0);

  const tabs = ['About', 'Subscription', 'Services', 'Process & Policies'];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-24 relative">
      <div 
        className="absolute top-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, #fffaf7 0%, rgba(254, 154, 75, 0.3) 60%, transparent 100%)',
          maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)'
        }}
      />
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading Area */}
        <div className="text-center mb-10 md:mb-12 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2">
            Got <span className="italic text-orange-500 font-Instrument">Questions</span> Before You Start?
          </h2>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-500 italic mb-4">
            We Got You !
          </h3>
          <p className="text-base md:text-lg text-gray-500 mt-4 px-4">
            Here's everything You Need To Know About Sevy Workflow
          </p>
        </div>

        {/* Tabs Section */}
        <div className="flex flex-wrap justify-center gap-3 md:space-x-8 md:gap-0 mb-12 relative z-10">
          {tabs.map((tab, idx) => (
            <div key={tab} className={`relative${idx === 0 ? '' : ' ml-0'}`}>
              <button
                onClick={() => {
                  setActiveTab(tab);
                  setOpenIndex(0);
                }}
                className={`px-4 md:px-8 py-3 md:py-4 rounded-md font-medium text-sm md:text-lg transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-orange-500 to-orange-400 text-white shadow-lg'
                    : 'bg-white text-gray-800 border border-gray-200 hover:border-orange-300 hover:shadow-md'
                }`}
                style={{ minWidth: 'auto' }}
              >
                {tab}
              </button>
              {activeTab === tab && (
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                  <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-orange-500"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* FAQ Content - Two Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start relative z-10">
          {faqData[activeTab].map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-md transition-all duration-300 cursor-pointer ${
                openIndex === index ? 'shadow-lg' : 'hover:shadow-lg'
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
