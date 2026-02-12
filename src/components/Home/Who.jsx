import React from 'react';

const Who = () => {
  return (
    <section className="w-ful py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Who Is <span className="text-orange-500 italic font-serif">Sevvy</span> for
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
            Creative teams & individuals who are tired of juggling and paying multiple project management tools and never ending content chaos.
          </p>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8 mb-20">
          
          {/* Left Character */}
          <div className="lg:w-1/3 flex justify-center">
            <img 
              src="/Home/who/cartoon.png" 
              alt="Sevvy mascot character" 
              className="w-full max-w-md h-auto bg-transparent"
            />
          </div>

          {/* Animated Arrows - Single tail, three heads */}
          <div className="lg:w-auto flex justify-center items-center px-4">
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
          
          {/* Right Card */}
          <div className="lg:w-1/3 flex justify-center">
            <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md w-full relative overflow-visible">
              {/* Top border accent */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-4/5 h-3 rounded-t-2xl bg-white border-t-4 border-[#f3f3f3] z-10"></div>
              {/* Card Header */}
              <h3 className="text-xl md:text-2xl font-bold text-center mb-3">
                Creative &<br />
                <span className="text-orange-500">Video Agencies</span>
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 text-sm text-center mb-6">
                Streamline your creative workflow from ideation to delivery. Manage multiple client projects, collaborate with your team, and deliver exceptional results faster.
              </p>
              
              {/* Divider Line */}
              <div className="border-t border-gray-200 mb-6"></div>
              
              {/* Workflow Image */}
              <img 
                src="/Home/who/agency.png" 
                alt="Creative & Video Agencies workflow" 
                className="w-full h-auto"
              />
            </div>
          </div>

        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl futuristic-text underline font-bold text-orange-500 mb-8">
            Get a 14 Days Free Trial<br />Before You Pay
          </h2>
          <button className="inline-flex items-center gap-3 text-white px-8 py-3 rounded-full font-medium transition-all text-lg" style={{background: 'linear-gradient(90deg, #f97316 0%, #ffa86b 100%)'}}>
            Learn More
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Who;
