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
    className="w-4 h-4 text-orange-500"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const PricingDifference = () => {
  const bulletPoints = [
    "Team collaboration",
    "Workflow clarity",
    "Execution speed"
  ];

  const highlights = [
    "No hidden fees",
    "No surprise usage limits.",
    "Just predictable pricing that grows with your team."
  ];

  return (
    <section className="w-full py-20 bg-white -mt-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top Center Heading */}
        <div className="text-center mb-4">
          <h2 className="text-3xl lg:text-4xl text-gray-900">
            Why Sevvy <span className="text-orange-400 italic font-Instrument">Pricing</span> Is Different
          </h2>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 pl-0 md:pl-12">
            {/* Main Bold Statement */}
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
              With Sevvy, you're not paying for features but for flow
            </h3>

            {/* Paragraph */}
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed max-w-xl">
              Usually, most tools charge per click, per post, or per AI request. But Sevvy is unique, offering multiple features in a single plan. Sevvy pricing is based on:
            </p>

            {/* Bullet Points */}
            <ul className="space-y-3">
              {bulletPoints.map((point, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0"></span>
                  <span className="text-orange-400 font-bold text-base lg:text-lg">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            {/* Bottom Highlight Box */}
            <div className="border-2 border-orange-400 rounded-xl p-5 mt-8">
              <div className="space-y-2">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="flex-shrink-0 mt-0.5" >
                      <CheckIcon />
                    </div>
                    <span className="text-gray-800 text-sm font-bold">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Image with Animation */}
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-lg">
              <img
                src="/Pricing/Diff/diff.webp"
                alt="Sevvy Pricing Difference Visualization"
                className="w-full object-contain relative z-10"
              />
              
              {/* Animated Light Effect Following Arrows */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Light dot 1 - First arrow path */}
                <div 
                  className="absolute w-3 h-3 rounded-full bg-orange-400 opacity-70 blur-sm"
                  style={{
                    animation: 'followArrow1 4s ease-in-out infinite',
                    boxShadow: '0 0 20px 8px rgba(251, 146, 60, 0.6)'
                  }}
                />
                
                {/* Light dot 2 - Second arrow path (delayed) */}
                <div 
                  className="absolute w-3 h-3 rounded-full bg-orange-500 opacity-70 blur-sm"
                  style={{
                    animation: 'followArrow2 4s ease-in-out infinite',
                    animationDelay: '1.3s',
                    boxShadow: '0 0 20px 8px rgba(249, 115, 22, 0.6)'
                  }}
                />
                
                {/* Light dot 3 - Third arrow path (delayed more) */}
                <div 
                  className="absolute w-3 h-3 rounded-full bg-orange-600 opacity-70 blur-sm"
                  style={{
                    animation: 'followArrow3 4s ease-in-out infinite',
                    animationDelay: '2.6s',
                    boxShadow: '0 0 20px 8px rgba(234, 88, 12, 0.6)'
                  }}
                />
              </div>
              
              {/* CSS Animations */}
              <style jsx>{`
                @keyframes followArrow1 {
                  0% {
                    left: 20%;
                    top: 45%;
                    opacity: 0;
                  }
                  10% {
                    opacity: 0.7;
                  }
                  25% {
                    left: 35%;
                    top: 35%;
                  }
                  50% {
                    left: 50%;
                    top: 30%;
                  }
                  75% {
                    left: 60%;
                    top: 40%;
                  }
                  90% {
                    opacity: 0.7;
                  }
                  100% {
                    left: 70%;
                    top: 50%;
                    opacity: 0;
                  }
                }
                
                @keyframes followArrow2 {
                  0% {
                    left: 70%;
                    top: 50%;
                    opacity: 0;
                  }
                  10% {
                    opacity: 0.7;
                  }
                  25% {
                    left: 67%;
                    top: 62%;
                  }
                  50% {
                    left: 55%;
                    top: 70%;
                  }
                  75% {
                    left: 40%;
                    top: 68%;
                  }
                  90% {
                    opacity: 0.7;
                  }
                  100% {
                    left: 30%;
                    top: 60%;
                    opacity: 0;
                  }
                }
                
                @keyframes followArrow3 {
                  0% {
                    left: 30%;
                    top: 60%;
                    opacity: 0;
                  }
                  10% {
                    opacity: 0.7;
                  }
                  25% {
                    left: 25%;
                    top: 52%;
                  }
                  50% {
                    left: 23%;
                    top: 45%;
                  }
                  75% {
                    left: 22%;
                    top: 45%;
                  }
                  90% {
                    opacity: 0.7;
                  }
                  100% {
                    left: 20%;
                    top: 45%;
                    opacity: 0;
                  }
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingDifference;