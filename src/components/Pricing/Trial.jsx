import React from 'react';

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
  const features = [
    "Full access to every workspace and template",
    "Live support to get your team running fast",
    "Upgrade, downgrade, or cancel anytime with zero risk"
  ];

  return (
    <section className="relative rounded-2xl p-4 xs:p-6 sm:p-8 max-w-6xl mx-auto lg:p-12 overflow-hidden bg-[rgb(255,251,248)]">
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
          <div className="hidden md:block absolute md:static left-0 top-1/2 md:top-auto md:left-auto md:transform-none -translate-y-1/2 md:translate-y-0 z-30 md:z-20" style={{pointerEvents: 'none'}}>
            <img
              src="/Pricing/hero/sa.webp"
              alt="Sevvy Mascot"
              className="w-full max-w-[350px] lg:max-w-[550px] xl:max-w-[750px] h-auto mt-18 drop-shadow-xl"
              style={{pointerEvents: 'auto'}}
            />
          </div>

          {/* Card always on top for mobile, right for desktop */}
          <div className="flex justify-center md:justify-start max-w-md mx-auto z-10">
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
              <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-200 flex items-center justify-center mt-0.5">
                      <CheckIcon />
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Card Button */}
              <button className="w-full border-2 border-orange-500 text-orange-400 font-medium py-3 px-6 rounded-lg cursor-pointer">
                Start My 14-Day Free Trial
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Center CTA Button */}
        <div className="flex justify-center">
          <button className="bg-gradient-to-r from-orange-500 to-orange-200 text-white font-medium py-3 px-8 rounded-2xl inline-flex items-center gap-2 cursor-pointer">
            Start my 14 Day Trial
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrialCTA;