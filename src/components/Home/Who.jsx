import React from 'react';

const Who = () => {
  return (
    <section className="w-full py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-3 md:mb-4 px-2">
            Who Is <span className="text-orange-300 italic font-Instrument">Sevvy</span> for
          </h1>
          <p className="text-black text-sm md:text-base max-w-3xl mx-auto px-4">
            Creative teams & individuals who are tired of juggling and paying multiple <br /> project management tools and never ending content chaos.
          </p>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-8 mb-12 md:mb-20">
          
          {/* Left Character */}
          <div className="lg:w-1/3 flex justify-center w-full px-4">
            <img 
              src="/Home/who/cartoon.webp" 
              alt="Sevvy mascot character" 
              className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto bg-transparent"
            />
          </div>

          {/* Animated Arrows - Horizontal (Desktop) */}
          <div className="hidden lg:flex lg:w-auto justify-center items-center px-4">
            <svg width="180" height="120" viewBox="0 0 180 120" fill="none">
              {/* Single tail from left */}
              <g>
                <line x1="10" y1="60" x2="60" y2="60" stroke="#f97316" strokeWidth="2.5" strokeDasharray="5 5" strokeLinecap="round" className="animate-dash-tail"/>
              </g>
              
              {/* Branch to top arrow */}
              <g className="animate-dash-1">
                <path d="M60 60 Q 80 60, 90 30" stroke="#f97316" strokeWidth="2.5" strokeDasharray="5 5" strokeLinecap="round" fill="none"/>
                <line x1="90" y1="30" x2="160" y2="30" stroke="#f97316" strokeWidth="2.5" strokeDasharray="5 5" strokeLinecap="round"/>
                <path d="M152 25 L165 30 L152 35" fill="none" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              
              {/* Branch to middle arrow */}
              <g className="animate-dash-2">
                <line x1="60" y1="60" x2="160" y2="60" stroke="#f97316" strokeWidth="2.5" strokeDasharray="5 5" strokeLinecap="round"/>
                <path d="M152 55 L165 60 L152 65" fill="none" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              
              {/* Branch to bottom arrow */}
              <g className="animate-dash-3">
                <path d="M60 60 Q 80 60, 90 90" stroke="#f97316" strokeWidth="2.5" strokeDasharray="5 5" strokeLinecap="round" fill="none"/>
                <line x1="90" y1="90" x2="160" y2="90" stroke="#f97316" strokeWidth="2.5" strokeDasharray="5 5" strokeLinecap="round"/>
                <path d="M152 85 L165 90 L152 95" fill="none" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
            </svg>
          </div>

          {/* Animated Arrows - Vertical (Mobile) */}
          <div className="flex lg:hidden justify-center items-center py-4">
            <svg width="120" height="180" viewBox="0 0 120 180" fill="none">
              {/* Single tail from top */}
              <g>
                <line x1="60" y1="10" x2="60" y2="60" stroke="#f97316" strokeWidth="2.5" strokeDasharray="5 5" strokeLinecap="round" className="animate-dash-tail"/>
              </g>
              
              {/* Branch to left arrow */}
              <g className="animate-dash-1">
                <path d="M60 60 Q 60 80, 30 90" stroke="#f97316" strokeWidth="2.5" strokeDasharray="5 5" strokeLinecap="round" fill="none"/>
                <line x1="30" y1="90" x2="30" y2="160" stroke="#f97316" strokeWidth="2.5" strokeDasharray="5 5" strokeLinecap="round"/>
                <path d="M25 152 L30 165 L35 152" fill="none" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              
              {/* Branch to middle arrow */}
              <g className="animate-dash-2">
                <line x1="60" y1="60" x2="60" y2="160" stroke="#f97316" strokeWidth="2.5" strokeDasharray="5 5" strokeLinecap="round"/>
                <path d="M55 152 L60 165 L65 152" fill="none" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              
              {/* Branch to right arrow */}
              <g className="animate-dash-3">
                <path d="M60 60 Q 60 80, 90 90" stroke="#f97316" strokeWidth="2.5" strokeDasharray="5 5" strokeLinecap="round" fill="none"/>
                <line x1="90" y1="90" x2="90" y2="160" stroke="#f97316" strokeWidth="2.5" strokeDasharray="5 5" strokeLinecap="round"/>
                <path d="M85 152 L90 165 L95 152" fill="none" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
            </svg>
          </div>
          
          {/* Right Card */}
          <div className="lg:w-1/3 flex justify-center w-full px-4">
            <div className="bg-white rounded-2xl shadow-lg p-3 md:p-4 max-w-sm w-full relative overflow-visible">
              {/* Double Top Borders */}
              <div className="absolute -top-5 left-0 w-full h-2 z-20 flex flex-col items-center">
                <div className="w-full py-4 border-t-4 border-gray-100 rounded-t-2xl"></div>
                <div className="w-full py-4 border-t-4 border-gray-100 rounded-t-2xl mt-2"></div>
              </div>
              {/* Card Header */}
              <h3 className="text-orange-500 text-lg sm:text-xl md:text-2xl font-bold text-center mt-3 mb-2 md:mb-3">
                Creative &<br />
                <span className="text-orange-500">Video Agencies</span>
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 text-xs sm:text-sm text-center mb-4 md:mb-6 px-2">
                Boost productivity: manage projects, collaborate, and deliver top‑notch results faster..
              </p>
              
              {/* Divider Line */}
              <div className="border-t border-gray-100 mb-4 md:mb-6"></div>
              
              {/* Workflow Image */}
              <img 
                src="/Home/who/agency.webp" 
                alt="Creative & Video Agencies workflow" 
                className="w-full h-auto"
              />
            </div>
          </div>

        </div>

        {/* CTA Section */}
        <div className="text-center px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl futuristic-text underline decoration-2 underline-offset-8 font-bold text-orange-500 mb-6 md:mb-8 capitalize">
            Get 14 Days Free Trial<br />Before You Pay
          </h2>
          <button className="inline-flex items-center gap-2 md:gap-3 text-white px-8 md:px-12 py-2 md:py-2.5 rounded-full font-medium transition-all text-base md:text-lg hover:scale-105 bg-gradient-to-r from-orange-500 to-orange-200">
            Learn More
            <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Who;
