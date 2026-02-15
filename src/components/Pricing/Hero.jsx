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
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-2">
            <span className="text-gray-900">Plans That Match How</span>
          </h1>
          <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-2">
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
        <div className="flex flex-col lg:flex-row items-end lg:items-center justify-center gap-8 lg:gap-12">
          {/* Mascot Image - Left Side */}
          <div className="flex justify-center lg:justify-start lg:flex-shrink-0">
            <img
              src="/Pricing/hero/mascot.webp"
              alt="Sevvy Mascot"
              className="w-64 h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-contain drop-shadow-xl"
            />
          </div>

          {/* Pricing Cards - Right Side */}
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 w-full lg:w-auto items-stretch sm:items-end">
            {/* Basic Card */}
            <div className="bg-[#fcf8f9] rounded-2xl shadow-lg p-6 lg:p-8 w-full sm:w-60 lg:w-64 min-h-[400px] flex flex-col">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">Basic</h3>
              
              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-gray-900 text-4xl lg:text-5xl font-bold">$19</span>
                  <span className="text-gray-600 text-lg ml-1">/month</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 flex-grow">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                    <CheckIcon />
                  </div>
                  <div className="flex-grow h-2 bg-gray-200 rounded-full"></div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                    <CheckIcon />
                  </div>
                  <div className="flex-grow h-2 bg-gray-200 rounded-full"></div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                    <CheckIcon />
                  </div>
                  <div className="flex-grow h-2 bg-gray-200 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Premium Card - Most Popular */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 border-1 border-orange-300 rounded-2xl shadow-xl p-6 lg:p-8 w-full sm:w-60 lg:w-64 min-h-[400px] flex flex-col relative">
              {/* Most Popular Badge */}
              <div className="absolute -top-1 left-0 right-0 flex justify-center -translate-y-1/2">
                <span className="bg-[#ff8950] text-white text-center text-xs font-semibold w-[220px] px-4 py-1.5 rounded-xl shadow-md">
                  Most Popular
                </span>
              </div>

              <h3 className="text-2xl font-bold text-center text-gray-900 mb-6 mt-2">Premium</h3>
              
              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-gray-900 text-4xl lg:text-5xl font-bold">$49</span>
                  <span className="text-gray-600 text-lg ml-1">/month</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 flex-grow">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                    <CheckIcon />
                  </div>
                  <div className="flex-grow h-2 bg-gray-200 rounded-full"></div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                    <CheckIcon />
                  </div>
                  <div className="flex-grow h-2 bg-gray-200 rounded-full"></div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                    <CheckIcon />
                  </div>
                  <div className="flex-grow h-2 bg-gray-200 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Gold Card */}
            <div className="bg-[#fcf8f9] border-1 border-orange-300 rounded-2xl shadow-lg p-6 lg:p-8 w-full sm:w-60 lg:w-64 min-h-[400px] flex flex-col">
              <h3 className="text-2xl font-bold text-center text-orange-400 mb-6">Gold</h3>
              
              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-gray-900 text-4xl lg:text-5xl font-bold">$99</span>
                  <span className="text-gray-600 text-lg ml-1">/month</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 flex-grow">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                    <CheckIcon />
                  </div>
                  <div className="flex-grow h-2 bg-gray-200 rounded-full"></div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                    <CheckIcon />
                  </div>
                  <div className="flex-grow h-2 bg-gray-200 rounded-full"></div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                    <CheckIcon />
                  </div>
                  <div className="flex-grow h-2 bg-gray-200 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingHero;