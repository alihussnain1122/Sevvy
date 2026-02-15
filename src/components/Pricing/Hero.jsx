import React from 'react';

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
  return (
    <section className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading Section */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold mb-2">
            <span className="text-gray-900">Plans That Match How</span>
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold mb-2">
            <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
              Creative Teams{' '}
            </span>
            <span className="bg-gradient-to-r from-orange-300 to-orange-200 bg-clip-text text-transparent">Actually Work</span>
          </h2>
          
          <p className="text-gray-600 text-sm lg:text-base max-w-2xl mx-auto mb-2">
            Sevvy scales with your workflow, not just per-task. Plans start at just $19/month,
            <br className="hidden sm:block" />
            with the flexibility to upgrade or downgrade anytime.
          </p>
          
          <div className="space-y-1">
            <p className="text-sm lg:text-base font-bold text-gray-900">
              No per-task fees. No per-idea limits.
            </p>
            <p className="text-sm lg:text-base font-bold bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
              Just clear pricing for <span className="bg-gradient-to-r from-orange-300 to-orange-200 bg-clip-text text-transparent">structured, collaborative content execution.</span> 
            </p>
          </div>
        </div>

        {/* Two Column Layout - Mascot and Cards */}
        <div className="flex justify-center items-center w-full">
          <img
            src="/Pricing/hero/sevy.webp"
            alt="Pricing Mascot and Cards"
            className="w-full max-w-4xl h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default PricingHero;