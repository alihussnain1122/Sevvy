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

const PlansComparison = () => {
  // Separate scroll refs for each plan section
  const basicRef   = useRef(null);
  const basicInView   = useInView(basicRef,   { once: true, margin: '-80px 0px' });
  const premiumRef = useRef(null);
  const premiumInView = useInView(premiumRef, { once: true, margin: '-80px 0px' });
  const goldRef    = useRef(null);
  const goldInView    = useInView(goldRef,    { once: true, margin: '-80px 0px' });

  const slideX = (dir, inV, delay = 0) => ({
    initial: { opacity: 0, x: dir === 'left' ? -40 : 40 },
    animate: inV ? { opacity: 1, x: 0 } : { opacity: 0, x: dir === 'left' ? -40 : 40 },
    transition: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] },
  });

  const fadeUp = (inV, delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: inV ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
  });
  const basicFeatures = [
    "1 focused workspace",
    "Up to 3 collaborators",
    "10GB secure storage",
    "Essential workflow templates",
    "Email support when you need it"
  ];

  const premiumFeatures = [
    "Up to 3 active workspaces",
    "8 team members collaborating in real time",
    "15GB storage",
    "Priority support",
    "Advanced workflow templates"
  ];

  const goldFeatures = [
    "Upto 6 workspaces",
    "10 team members",
    "100GB storage",
    "24/7 phone support",
    "Fully customizable templates"
  ];

  return (
    <section className="w-full -mt-18">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-4 lg:space-y-8">
        
        {/* SECTION 1 - BASIC PLAN */}
        <div className="bg-white rounded-3xl p-8 lg:p-12" ref={basicRef}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left - Basic Card */}
            <motion.div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 max-w-md mx-auto order-2 md:order-none" {...slideX('left', basicInView, 0)}>
              <h3 className="text-2xl font-semibold text-orange-400 mb-2">Basic</h3>
              <div className="mb-1">
                <span className="text-4xl font-bold text-gray-900">$19</span>
                <span className="text-gray-600 text-lg"> / month</span>
              </div>
              <p className="text-sm text-gray-600 mb-6">Start shipping content with structure</p>
              
              <div className="border-t border-gray-200 my-6"></div>
              
              <p className="text-sm text-gray-700 mb-4">
                Our basic plan is built specifically for solo creators and small teams who want clarity from day one.
              </p>
              
              <ul className="space-y-3 mb-8">
                {basicFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-200 flex items-center justify-center mt-0.5">
                      <CheckIcon />
                    </div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="w-full border-2 border-orange-500 text-orange-400 font-medium py-3 px-6 rounded-xl  transition-colors cursor-pointer hover:shadow-xl hover:scale-105">
                Try for Free
              </button>
            </motion.div>

            {/* Right - Content */}
            <motion.div className="space-y-6  order-1 md:order-none" {...slideX('right', basicInView, 0.15)}>
              <h3 className="text-3xl lg:text-4xl font-bold text-orange-400">Best for:</h3>
              <p className="text-gray-800 text-lg lg:text-xl leading-relaxed">
                Creators validating ideas, early-stage teams, and anyone tired of messy Google Docs.
              </p>
              <button className="bg-gradient-to-r from-orange-500 to-orange-200 text-white font-medium py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow inline-flex items-center gap-2 cursor-pointer hover:shadow-orange-200 hover:scale-105">
                Upgrade anytime as your workflow grows
                <svg width="16" height="16" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg" className='ml-2 md:ml-2'>
<path d="M1.5 10.4971H20.5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.999 1.5L20.499 10.4973L10.999 19.4947" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
              </button>
            </motion.div>
          </div>
        </div> {/*- PREMIUM PLAN */}
        <div className="relative rounded-2xl p-8 lg:p-12 overflow-hidden bg-[rgb(255,251,248)]" ref={premiumRef}>
          {/* Top background with faded corners */}
          <div
            className="absolute top-0 left-0 right-0 h-28 z-0"
            style={{
              background: 'linear-gradient(180deg, #fffaf7 0%, rgba(254, 154, 75, 0.3) 60%, transparent 100%)',
              maskImage: 'linear-gradient(to right, transparent 0%, black 40%, black 60%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 40%, black 60%, transparent 100%)'
            }}
          ></div>
          <div className="relative z-10  grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <motion.div className="space-y-6 " {...slideX('left', premiumInView, 0)}>
              <h3 className="text-3xl lg:text-4xl font-bold leading-tight">
                <span className="text-orange-400">Why teams choose this</span>
              </h3>
              <p className="text-gray-800 text-lg leading-relaxed">
                Most agencies upgrade here once content volume increases, and coordination becomes critical.
              </p>
              <button className="bg-gradient-to-r from-orange-500 to-orange-200 text-white font-medium py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow inline-flex items-center gap-2 cursor-pointer hover:shadow-orange-200 hover:scale-105">
                Choose this Plan
                <svg width="16" height="16" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg" className='ml-2 md:ml-2'>
<path d="M1.5 10.4971H20.5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.999 1.5L20.499 10.4973L10.999 19.4947" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
              </button>
            </motion.div>

            {/* Right - Premium Card */}
            <motion.div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-orange-400 max-w-md mx-auto" {...slideX('right', premiumInView, 0.15)}>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Premium</h3>
              <div className="mb-1">
                <span className="text-4xl font-bold text-gray-900">$49</span>
                <span className="text-gray-600 text-lg"> / month</span>
              </div>
              <p className="text-sm text-gray-600 mb-6">Turn content into a repeatable system</p>
              
              <div className="border-t border-gray-200 my-6"></div>
              
              <p className="text-sm text-gray-700 mb-4">
                Sevvy's premium plan is the most popular plan, designed for teams managing content consistently across formats, platforms, and clients.
              </p>
              
              <p className="text-xs font-semibold text-gray-600 mb-3">Everything in Basic, plus</p>
              
              <ul className="space-y-3 mb-8">
                {premiumFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-200 flex items-center justify-center mt-0.5">
                      <CheckIcon />
                    </div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-gradient-to-r from-orange-500 to-orange-200 text-white font-medium py-3 px-6 rounded-xl transition-colors cursor-pointer hover:shadow-xl hover:scale-105 transition-shadow hover:shadow-orange-200">
                Subscribe Now  
              </button>
            </motion.div>
          </div>
        </div> {/*- GOLD PLAN */}
        <div className="bg-white rounded-3xl p-8 lg:p-12" ref={goldRef}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left - Gold Card */}
            <motion.div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 max-w-md mx-auto order-2 md:order-none" {...slideX('left', goldInView, 0)}>
              <h3 className="text-2xl font-semibold text-orange-400 mb-2">Gold</h3>
              <div className="mb-1">
                <span className="text-4xl font-bold text-gray-900">$99</span>
                <span className="text-gray-600 text-lg"> / month</span>
              </div>
              <p className="text-sm text-gray-600 mb-6">Run content operations like a machine</p>
              
              <div className="border-t border-gray-200 my-6"></div>
              
              <p className="text-sm text-gray-700 mb-4">
                Our gold plan offers special features for high-velocity teams where content is a core business function.
              </p>
              
              <ul className="space-y-3 mb-8">
                {goldFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-200 flex items-center justify-center mt-0.5">
                      <CheckIcon />
                    </div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="w-full border-2 border-orange-500 text-orange-500 font-medium py-3 px-6 rounded-xl transition-colors cursor-pointer hover:scale-105">
                Contact Sales
              </button>
            </motion.div>

            {/* Right - Content */}
            <motion.div className="space-y-6 order-1 md:order-none" {...slideX('right', goldInView, 0.15)}>
              <h3 className="text-3xl lg:text-4xl font-bold text-orange-400">Built for:</h3>
              <p className="text-gray-800 text-lg lg:text-xl leading-relaxed">
                Agencies, in-house content teams, and media brands managing complex pipelines.
              </p>
              <button className="bg-gradient-to-r from-orange-500 to-orange-200 text-white font-medium py-3 px-8 rounded-xl inline-flex items-center gap-2 cursor-pointer hover:shadow-xl hover:scale-105 transition-shadow hover:shadow-orange-200">
                Upgrade Now
                <svg width="16" height="16" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg" className='ml-2 md:ml-2'>
<path d="M1.5 10.4971H20.5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.999 1.5L20.499 10.4973L10.999 19.4947" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlansComparison;